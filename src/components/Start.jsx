import React, { useState, useMemo } from 'react'
import { assessments } from '../Data'
import PopupDialog from './PopupDialog'
import BioBasedCertLogo2 from '../images/BioBasedCertLogo.png'
import Star4bbsLogo from '../images/Star4bbsLogo.png'
import SustcertLogo from '../images/SustcertLogo.png'
import HarmonitorLogo from '../images/HarmonitorLogo.png'

const TYPES = [
  { key: 'system', label: 'System Level' },
  { key: 'content', label: 'Content Level' },
  { key: 'outcome', label: 'Outcome Level' }
]

// Component for selecting assessment types and applying context filters
export default function Start({ onStart }) {
  const [schemeName, setSchemeName] = useState('')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedFeedstocks, setSelectedFeedstocks] = useState([])
  const [selectedPhases, setSelectedPhases] = useState([])
  const [selectedContentCats, setSelectedContentCats] = useState([])
  const [selectedApplicability, setSelectedApplicability] = useState([])
  const [excludedContentPrinciples, setExcludedContentPrinciples] = useState([])
  const [showStartWarning, setShowStartWarning] = useState(false)

  // Derive filter options from the data
  const allApplicability = useMemo(() => {
    const fromSystem  = assessments.system
      .flatMap(cat => cat.principles)
      .flatMap(p   => p.criteria)
      .flatMap(c   => c.type)

    const fromOutcome = assessments.outcome
      .flatMap(cat => cat.principles)
      .flatMap(p   => p.criteria)
      .flatMap(c   => c.requirements)
      .flatMap(r   => r.type)

    return Array.from(new Set([...fromSystem, ...fromOutcome]))
  }, [])
  const allFeedstocks = useMemo(
    () => Array.from(new Set(
      assessments.content.flatMap(cat => cat.principles)
        .flatMap(p => p.criteria)
        .flatMap(c => c.requirements)
        .flatMap(r => r.applicableFeedstocks)
    )), []
  )
  const allPhases = useMemo(
    () => Array.from(new Set(
      assessments.content.flatMap(cat => cat.principles)
        .flatMap(p => p.criteria)
        .flatMap(c => c.requirements)
        .flatMap(r => r.applicablePhases)
    )), []
  )
  const allContentCats = useMemo(
    () => assessments.content
        .filter(cat => cat.category !== 'Minimum Backstop')
        .map(cat => cat.category),
    []
  )
  const visibleContentPrinciples = useMemo(() =>
    assessments.content
      .filter(cat => selectedContentCats.includes(cat.category))
      .flatMap(cat => cat.principles)
      .map(p => ({ id: p.id, title: p.title }))
  , [selectedContentCats])

  const toggleExcludedPrinciple = (id) =>
  setExcludedContentPrinciples(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  )

  // Toggle an item in an array
  const toggle = (item, arr, setter) =>
    setter(arr.includes(item) ? arr.filter(x => x !== item) : [...arr, item])

  // Validity flags
  const hasName = schemeName.trim().length > 0
  const hasType = selectedTypes.length > 0
  const hasApplicability = !selectedTypes.includes('system') && !selectedTypes.includes('outcome') ? true : selectedApplicability.length > 0
  const hasContentCats = !selectedTypes.includes('content') || selectedContentCats.length > 0
  const hasContent = !selectedTypes.includes('content') || (selectedFeedstocks.length > 0 && selectedPhases.length > 0)

  // Validate if user can start the assessment
  const isValidSelection = () => hasName && hasType && hasApplicability && hasContentCats && hasContent
 
  const startWarningMessage = () => {
    if (!hasName) return 'Please enter a name.'
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

      <div className='header-container'>
        <div className='nav-header'>
          <div className='nav-left'>
            <img style={{ maxWidth: '320px', height: 'auto', marginRight: '1rem', marginTop: '1rem', marginBottom: '1rem' }} src={BioBasedCertLogo2}/>
          </div>
          <div className='nav-center'></div>
          <div className='nav-right'>
            <a href='https://star4bbs.eu/' target='_blank' rel='noopener noreferrer'>
              <img style={{ maxWidth: '180px', height: 'auto', marginRight: '1rem' }} src={Star4bbsLogo}/>
            </a>
            <a href='https://sustcert4biobased.eu/' target='_blank' rel='noopener noreferrer'>
              <img style={{ maxWidth: '100px', height: 'auto', marginRight: '1rem' }} src={SustcertLogo}/>
            </a>
            <a href='https://www.harmonitor.eu/' target='_blank' rel='noopener noreferrer'>
              <img style={{ maxWidth: '150px', height: 'auto' }} src={HarmonitorLogo}/>
            </a>
          </div>
        </div>
      </div>

      {/* Assessment selection */}
      <div className='container'>
        <section className='criterion-block'>
          <h5>Welcome to the BIOBASEDCERT Monitoring Tool (BMT)</h5>
          <p>
            The <strong>BIOBASEDCERT Monitoring Tool (BMT)</strong> is a comprehensive evidence-based system designed to evaluate the robustness, 
            comprehensiveness, and effectiveness of sustainability certification schemes and labels (CSLs) for industrial biobased systems. 
            It was co-developed by the EU-funded projects STAR4BBS, HARMONITOR, and SUSTCERT4BIOBASED — united under the BIOBASEDCERT Cluster, 
            as part of the Horizon Europe call HORIZON-CL6-2021-ZEROPOLLUTION-01-07.
          </p>
          <p>
            The BMT supports policymakers, scheme owners, and other stakeholders by enhancing transparency on the performance of CSLs and identifying 
            opportunities for improvement.<br /> The tool focuses on individual assessments, providing actionable insights and promoting alignment with EU 
            policy goals and sustainability targets.
          </p>
          <p>
            The web-based version of the BMT is an open source, freely-available, and user-friendly software offered by the STAR4BBS project.
          </p>
          <h5>How It Works</h5>
          <p>
            The BMT is structured across three levels — each with a specific focus and set of indicators. Together, they provide a holistic view of how 
            well a CSL is designed, implemented, and delivering real-world results.
          </p>
          <ul>
            <li><strong>System Level</strong> — Focusing on governance structures and operational robustness of the CSLs.</li>
            <li><strong>Content Level</strong> — Evaluating the sustainability and circularity requirements of the CSL standards for operators seeking certification.</li>
            <li><strong>Outcome Level</strong> — Investigates real-world impacts and performance, focusing on how CSLs demonstrate progress toward sustainability goals.</li>
          </ul>
          <h5>Start Your Assessment</h5>
          <p>
            Use the BMT to evaluate how your certification scheme or ecolabel performs across <strong>key sustainability criteria</strong>. You will respond to clearly defined principles 
            at each of the three levels, referencing normative documents or internal policies where applicable.
          </p>
          <h5>What You Get</h5>
          <p>
            Once completed, you'll receive a <strong>downloadable summary report</strong> outlining your performance, with an option to export your responses in CSV format.<br />
            Please note that you have full control over your data — your answers remain local to your browser unless you choose to share them. 
          </p>
        </section>

        <h5>Please enter the name of scheme or label</h5>
        <div className='inputs'>
          <input
            type='text'
            value={schemeName}
            onChange={e => setSchemeName(e.target.value)}
            placeholder='Name'
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
        {(selectedTypes.includes('system') || selectedTypes.includes('outcome')) && (
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
                  {visibleContentPrinciples.map(p => (
                    <button
                      key={p.id}
                      onClick={() => toggleExcludedPrinciple(p.id)}
                      className={excludedContentPrinciples.includes(p.id) ? '' : 'selected'}
                    >
                      {p.title}
                    </button>
                  ))}
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
    </>
  )
}