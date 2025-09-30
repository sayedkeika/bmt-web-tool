import React from 'react'
import ActionRail from './ActionRail'
import GlossaryIcon from '../svgs/book.svg'
import AuthPage from './AuthPage'

export default function IntroPage({ onOpenGlossary, onAuthSuccess }) {
  return (
    <div className="page-row">
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
            <div className="auth-wrapper">
                <AuthPage onSuccess={onAuthSuccess} />
            </div>
        </div>
        <ActionRail
            actions={[
                { id: 'glossary', label: 'Glossary', title: 'Go to Glossary', onClick: onOpenGlossary, imgSrc: GlossaryIcon }
            ]}
        />
    </div>
  )
}