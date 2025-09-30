import React, { useState, useMemo, useEffect } from 'react'
import PopupDialog from './PopupDialog'
import ActionRail from './ActionRail'
import { fetchSurveys, fetchSurveyStructure } from '../api/survey'
import BioBasedCertLogo2 from '../images/BioBasedCertLogo.png'
import Star4bbsLogo from '../images/Star4bbsLogo.png'
import SustcertLogo from '../images/SustcertLogo.png'
import HarmonitorLogo from '../images/HarmonitorLogo.png'
import GlossaryIcon from '../svgs/book.svg'

const TYPES = [
  { key: 'system', label: 'System Level' },
  { key: 'content', label: 'Content Level' },
  { key: 'outcome', label: 'Outcome Level' }
]

// Component for selecting assessment types and applying context filters
export default function Start({ onStart, onOpenGlossary }) {
  const [backendSurvey, setBackendSurvey] = useState(null)
  const [schemeName, setSchemeName] = useState('')
  const [productCategoryStandardName, setProductCategoryStandardName] = useState('')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedFeedstocks, setSelectedFeedstocks] = useState([])
  const [selectedPhases, setSelectedPhases] = useState([])
  const [selectedContentCats, setSelectedContentCats] = useState([])
  const [selectedApplicability, setSelectedApplicability] = useState([])
  const [excludedContentPrinciples, setExcludedContentPrinciples] = useState([])
  const [showStartWarning, setShowStartWarning] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const surveys = await fetchSurveys()
        if (!surveys?.length) return
        const s = await fetchSurveyStructure(surveys[0].id)
        setBackendSurvey(s)
      } catch (e) {
        console.warn('Failed to load survey for Start filters', e)
      }
    })()
  }, [])

  const splitList = (val) => {
    if (Array.isArray(val)) return val.flatMap(splitList)
    if (typeof val === 'string') {
      return val
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
    }
    return []
  }

  const uniqPretty = (values) => {
    const map = new Map()
    for (const v of values) {
      const label = String(v).trim()
      if (!label) continue
      const key = label.toLowerCase()
      if (!map.has(key)) map.set(key, label)
    }
    return Array.from(map.values())
  }

  const getLevel = (survey, name) => survey?.levels?.find(l => l.name === name) || null

  // Derive filter options from the data
  const allApplicability = useMemo(() => {
    const sys = getLevel(backendSurvey, 'system')
    const out = getLevel(backendSurvey, 'outcome')
    const con = getLevel(backendSurvey, 'content')
    const sysTypes = (sys?.categories || []).flatMap(cat =>
      (cat.principles || []).flatMap(p =>
        (p.criteria || []).flatMap(c => splitList(c.type || []))
      )
    )
    const outTypes = (out?.categories || []).flatMap(cat =>
      (cat.principles || []).flatMap(p =>
        (p.criteria || []).flatMap(c =>
          (c.requirements || []).flatMap(r => splitList(r.type || []))
        )
      )
    )
    const conTypes = (con?.categories || []).flatMap(cat =>
      (cat.principles || []).flatMap(p =>
        (p.criteria || []).flatMap(c => splitList(c.type || []))
      )
    )
    return uniqPretty([...sysTypes, ...outTypes, ...conTypes])
  }, [backendSurvey])

    const allFeedstocks = useMemo(() => {
      const content = getLevel(backendSurvey, 'content')
      const vals = (content?.categories || []).flatMap(cat =>
        (cat.principles || []).flatMap(p =>
          (p.criteria || []).flatMap(c =>
            (c.requirements || []).flatMap(r =>
              splitList(r.applicable_feedstocks ?? r.applicableFeedstocks ?? [])
            )
          )
        )
      )
      return uniqPretty(vals)
    }, [backendSurvey])

  const allPhases = useMemo(() => {
    const content = getLevel(backendSurvey, 'content')
    const vals = (content?.categories || []).flatMap(cat =>
      (cat.principles || []).flatMap(p =>
        (p.criteria || []).flatMap(c =>
          (c.requirements || []).flatMap(r =>
            splitList(r.applicable_phases ?? r.applicablePhases ?? [])
          )
        )
      )
    )
    return uniqPretty(vals)
  }, [backendSurvey])

  const allContentCats = useMemo(() => {
    const content = getLevel(backendSurvey, 'content')
    if (!content) return []
    return (content.categories || [])
      .filter(c => (c.label || '').toLowerCase() !== 'minimum backstop')
      .map(c => c.label)
  }, [backendSurvey])

  const visibleContentPrinciples = useMemo(() => {
    const content = getLevel(backendSurvey, 'content')
    if (!content) return []
    return (content.categories || [])
      .filter(cat => selectedContentCats.includes(cat.label))
      .flatMap(cat => cat.principles || [])
      .map(p => ({ id: p.id, title: p.title }))
  }, [backendSurvey, selectedContentCats])

  const toggleExcludedPrinciple = (id) => {
    const idStr = String(id)
    setExcludedContentPrinciples(prev =>
      prev.includes(idStr) ? prev.filter(x => x !== idStr) : [...prev, idStr]
    )
  }

  // Toggle an item in an array
  const toggle = (item, arr, setter) =>
    setter(arr.includes(item) ? arr.filter(x => x !== item) : [...arr, item])

  // Validity flags
  const hasName = schemeName.trim().length > 0
  const hasType = selectedTypes.length > 0
  const hasApplicability = !(selectedTypes.includes('system') || selectedTypes.includes('outcome') || selectedTypes.includes('content')) ? true : selectedApplicability.length > 0
  const hasContentCats = !selectedTypes.includes('content') || selectedContentCats.length > 0
  const hasContent = !selectedTypes.includes('content') || (selectedFeedstocks.length > 0 && selectedPhases.length > 0)

  // Validate if user can start the assessment
  const isValidSelection = () => hasName && hasType && hasApplicability && hasContentCats && hasContent
 
  const startWarningMessage = () => {
    if (!hasName) return 'Please enter a scheme or ecolabel name.'
    if (!hasType) return 'Please select at least one assessment level.'
    return 'Please complete all required selections.'
  }

  const handleStartClick = () => {
    if (!isValidSelection()) {
      setShowStartWarning(true)
    } else {
      handleStart()
    }
  }
  // Trigger the assessment start once valid selections are made
  const handleStart = () => {
    if (isValidSelection()) {
      onStart({
        schemeName,
        productCategoryStandardName,
        types: selectedTypes,
        applicability: selectedApplicability,
        feedstocks: selectedFeedstocks,
        phases: selectedPhases,
        contentCategories: selectedContentCats,
        excludedPrinciples: excludedContentPrinciples
      })
    }
  }

  return (
    <>
      {/* Start Popup */}
      {showStartWarning && (
        <PopupDialog
          message={startWarningMessage()}
          onConfirm={() => setShowStartWarning(false)}
        />
      )}
      
      <div className="page-row">

        {/* Assessment selection */}
        <div className='container'>
          <section className='criterion-block'>
            <h5>Welcome to the BIOBASEDCERT Monitoring Tool (BMT)</h5>
            <p>
              The <strong>BIOBASEDCERT Monitoring Tool (BMT)</strong> is a comprehensive evidence-based system designed to evaluate the robustness, comprehensiveness, 
              and effectiveness of sustainability certification schemes and labels (CSLs) for industrial biobased systems. It was co-developed by the EU-funded projects STAR4BBS, 
              HARMONITOR, and SUSTCERT4BIOBASED - united under the BIOBASEDCERT Cluster, as part of the Horizon Europe call HORIZON-CL6-2021-ZEROPOLLUTION-01-07.
            </p>
            <p>
              The BMT supports policymakers, scheme owners, and other stakeholders by enhancing transparency on the performance of CSLs and identifying opportunities for 
              improvement.<br /> The tool focuses on individual assessments, providing actionable insights and promoting alignment with EU policy goals and sustainability targets.
            </p>
            <p>
              The BMT is structured into three levels - each with a specific focus and set of principles and criteria:
            </p>
            <ul>
              <li><strong>System Level</strong> — Focusing on governance structures and operational robustness of the CSLs.</li>
              <li><strong>Content Level</strong> — Evaluating the sustainability and circularity requirements of the CSL standards for operators seeking certification.</li>
              <li><strong>Outcome Level</strong> — Investigates real-world impacts and performance, focusing on how CSLs demonstrate progress toward sustainability goals.</li>
            </ul>
            <p>
              STAR4BBS coordinated the system level, SUSTCERT4BIOBASED coordinated the content-level, and HARMONITOR coordinated the outcome-level. Each of the parties owns 
              the intellectual property of the respective levels. The full BMT methodology and the Excel version of the tool is available <a href="https://zenodo.org/communities/biobasedcert/records?q=&l=list&p=1&s=10&sort=newest" target="_blank" rel="noopener noreferrer">here</a>. STAR4BBS lead 
              the further development of this web-based version of the BMT as an open source, freely available, and user-friendly software.<br /> <br />For detailed guidance on how 
              the tool works, including its purpose, intended users, assessment structure, and instructions for completing an evaluation - please refer to the <a href="/web-tool/User_Manual.pdf"  target="_blank" rel="noopener noreferrer">User Manual</a>.
            </p>
            <h5>Create An Account</h5>
            <p>
                Login is required to start a new assessment, save your progress, and access your results later.
            </p>
            <h5>Start Your Assessment</h5>
            <p>
              Use the BMT to evaluate how your certification scheme or ecolabel performs across <strong>key sustainability criteria</strong>. You will respond to clearly 
              defined principles at each of the three levels, referencing normative documents or internal policies where applicable.
            </p>
            <h5>Get Your Results</h5>
            <p>
              Once completed, you'll receive a <strong>downloadable summary report</strong> outlining your performance, with an option to export your responses in CSV format.<br />
            </p>
          </section>

          <h5>Please enter the name of scheme or ecolabel</h5>
          <div className='inputs'>
            <input
              type='text'
              value={schemeName}
              onChange={e => setSchemeName(e.target.value)}
              placeholder='Name of scheme or ecolabel'
            />
          </div>

          <h5>Please enter the name of product category specific standard (if applicable)</h5>
          <div className='inputs'>
            <input
              type='text'
              value={productCategoryStandardName}
              onChange={e => setProductCategoryStandardName(e.target.value)}
              placeholder='Name of product category specific standard'
            />
          </div>

          <h5>Please select one or more levels of assessment you wish to conduct</h5>
          <div>
            {TYPES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => toggle(key, selectedTypes, setSelectedTypes)}
                className={selectedTypes.includes(key) ? 'selected' : ''}
              >{label}</button>
            ))}
          </div>
        
          {/* System-level & Outcome-level filters */}
          {(selectedTypes.includes('system') || selectedTypes.includes('outcome') || selectedTypes.includes('content')) && (
            <div>
              <h5>Please select an applicable certification type</h5>
              {allApplicability.map(opt => (
                <button
                  key={opt}
                  onClick={() =>
                    setSelectedApplicability(prev =>
                      prev[0] === opt ? [] : [opt]
                    )
                  }
                  className={
                    selectedApplicability[0] === opt ? 'selected' : ''
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Content-level filters */}
          {selectedTypes.includes('content') && (
            <div>
              <h5>Please select all feedstocks that fall within the scope of your standard</h5>
              <div>
                {allFeedstocks.map(f => (
                  <button
                    key={f}
                    onClick={() => toggle(f, selectedFeedstocks, setSelectedFeedstocks)}
                    className={selectedFeedstocks.includes(f) ? 'selected' : ''}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <h5>Please select all value chain actors that fall within the scope of your standard</h5>
              <div>
                {allPhases.map(p => (
                  <button
                    key={p}
                    onClick={() => toggle(p, selectedPhases, setSelectedPhases)}
                    className={selectedPhases.includes(p) ? 'selected' : ''}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <h5>Please select one or more content level categories you wish to assess</h5>
              <div>
                {allContentCats.map(cat => (
                  <button
                    key={cat}
                    onClick={() => toggle(cat, selectedContentCats, setSelectedContentCats)}
                    className={selectedContentCats.includes(cat) ? 'selected' : ''}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              {selectedContentCats.length > 0 && (
                <>
                  <h5>Please deselect any content level principles you do NOT wish to assess</h5>
                  <div>
                    {visibleContentPrinciples.map(p => {
                      const isIncluded = !excludedContentPrinciples.includes(String(p.id))
                      return (
                        <button
                          key={p.id}
                          onClick={() => toggleExcludedPrinciple(p.id)}
                          className={isIncluded ? 'selected' : ''}
                        >
                          {p.title}
                        </button>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          )}

          <button
            className='nav'
            style={{ marginTop: '2rem' }}
            onClick={handleStartClick}
          >Start Assessment
          </button>
        </div>
        <ActionRail
          actions={[
            { id: 'glossary', label: 'Glossary', title: 'Go to Glossary', onClick: onOpenGlossary, imgSrc: GlossaryIcon }
          ]}
        />
      </div>


      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <a href='https://star4bbs.eu/' target='_blank' rel='noopener noreferrer'>
          <img style={{ maxWidth: '280px', height: 'auto' }} src={Star4bbsLogo}/>
        </a>
        <a href='https://sustcert4biobased.eu/' target='_blank' rel='noopener noreferrer'>
          <img style={{ maxWidth: '160px', height: 'auto' }} src={SustcertLogo}/>
        </a>
        <a href='https://www.harmonitor.eu/' target='_blank' rel='noopener noreferrer'>
          <img style={{ maxWidth: '250px', height: 'auto' }} src={HarmonitorLogo}/>
        </a>
      </div>
    </>
  )
}