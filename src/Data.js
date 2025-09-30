const YES_NO = [
    { label: "Yes", score: 1 },
    { label: "No", score: 0 }
  ]

export const assessments = {
    system: [
        {
            id: "cat1",
            category: "Standard Setting",
            principles: [
                {
                    id: "p1",
                    title: "Standards Content",
                    criteria: [
                        {
                            id: "SS-SS-1",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner makes consultation drafts and final versions of its standards freely available and easily accessible in the scheme's official languages.",
                            responseOptions: [
                                {label: "Yes (publicly, on request (no fee))", score: 2},
                                {label: "Yes, for a fee", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Either of the following:",
                                "• The standard document is freely available for download on the scheme owner's website, incl. all criteria and corresponding accompanying documents.",
                                "• An online statement that the standard is made available to any interested party on request free of charge.",
                                "• Available only for members or for a fee.",
                                "• Not available."
                            ]
                        },
                        {
                            id: "SS-SS-2",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner ensures that guidance is in place to support consistent interpretation of the standard.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The standard and/or separate guidance documents for interpretation shall be formulated in a comprehensive and binding way, so that each individual criterion can be assessed consistently and thoroughly by third parties.",
                                "The standard and/or guidance documents shall specify necessary evidence for each criterion."
                            ]
                        }
                    ]
                },
                {
                    id: "p2",
                    title: "Standard-Setting Process",
                    criteria: [
                        {
                            id: "SS-SP-1",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner reviews and revises the standards at least once every 5 years.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner reviews standards at least once every five years for continued relevance and for effectiveness in meeting their stated objectives and, if necessary, revises them in a timely manner."
                            ]
                        },
                        {
                            id: "SS-SP-2",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner makes publicly available a public summary that includes the decision-making procedures of how decisions are made and who makes them.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 2},
                                {label: "Yes (on request)", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The procedures for decision-making, including decision-making roles and responsibilities, are documented.",
                                "The documentation includes the bodies involved in the standard-setting process and their respective roles and decision-making functions."
                            ]
                        }
                    ]
                },
                {
                    id: "p3",
                    title: "Standards Consultation",
                    criteria: [
                        {
                            id: "SS-SC-1",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner subjects the development of new standards and the revision of existing standards to public consultation.",
                            responseOptions: [
                                {label: "Yes, specified number of rounds", score: 2},
                                {label: "Yes, unspecified", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme provides sufficient time and opportunity for stakeholders to participate in the consultation.",
                                "The ISEAL Code recommends:",
                                "• At least two rounds of input on initial standards development; and",
                                "• At least one round of input on standards revision.",
                                "60 days and 30 days have generally been considered adequate time to submit comments in first and second rounds of consultation, respectively."
                            ]
                        },
                        {
                            id: "SS-SC-2",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner shall ensure that participation in the consultation process is open to all stakeholders.",
                            responseOptions: [
                                {label: "Yes, possible", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Interested parties can participate in the consultation process, through a consultation forum or stakeholders are made aware of alternative mechanisms by which they can participate."
                            ]
                        },
                        {
                            id: "SS-SC-3",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner proactively encourages participation in standard-setting of all stakeholders directly affected.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "There should be evidence of identification and documentation outlining how stakeholders are directly affected by implementation of the scheme or by the sector the scheme seeks to impact, and records of activities set by the scheme to proactively reach out to these stakeholders and encourage their participation in standard setting."
                            ]
                        },
                        {
                            id: "SS-SC-4",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner ensures balanced participation of stakeholder interests in the consultation and decision-making processes.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner ensures participation by independent technical experts and encourages balanced participation by stakeholders in the standard development, revision, and approval process.",
                                "Documented information on the voting procedure of the highest decision-making body responsible for the standard setting process specifies that all categories of stakeholders are represented.",
                                "The procedure shall also ensure that one stakeholder category is not able to dominate decision-making."
                            ]
                        },
                        {
                            id: "SS-SC-5",
                            type: ["Scheme"],
                            text: "The scheme owner allows for adaptation or interpretation of the standard to regional contexts based on multistakeholder consultation processes.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "There are procedures and guidance in place to ensure that any adaptations of a scheme’s standard (e.g., for national or regional relevance, scale of enterprise, or for specific products or sectors) is developed through a multistakeholder consultation process.",
                                "“Not applicable” for schemes that develop product-specific standards based on a life-cycle and multi-criteria approach (ISO type I labels) as said approach does not allow for the recognition of local contexts.",
                                "Either of the following:",
                                "• Information in the standard about how each of the requirements can be interpreted for application at a local level",
                                "• Procedure for development of a local adaptation of the standard including stakeholder consultation measures.",
                                "• The standard organization has country-specific standards",
                            ]
                        },
                        {
                            id: "SS-SC-6",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner provides information on the input received from stakeholder consultations and how it was used.",
                            responseOptions: [
                                {label: "Yes, comments and explanations", score: 2},
                                {label: "Yes, comments only", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner makes publicly available the comments received during the consultations or, at a minimum, accurate summaries of these comments, along with explanations of how the comments were considered, through:",
                                "• Documentation of collected feedback from previous public consultations ",
                                "• A statement on how the collected feedback was used for the setting or revision of the Standard."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "cat2",
            category: "Assurance",
            principles: [
                {
                    id: "p4",
                    title: "Assurance System",
                    criteria: [
                        {
                            id: "AS-AS-1",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner ensures that there is a publicly available description of the consistent methodology used to assess compliance with the standard.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Certification processes are conducted according to consistent methodologies.",
                                "Refers to the summary of assessment process undertaken in granting or denying licence or certificate to operating unit:",
                                "• Type(s) of assessment employed",
                                "• How clients are assessed, how often and by whom, and the basis for decisions",
                                "• Scoring system, applicability of criteria, etc."
                            ]
                        },
                        {
                            id: "AS-AS-2",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner ensures that summary certification/verification reports are made available.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 2},
                                {label: "Yes (on request)/Confidential", score: 1},
                                {label: "No", score: 0},
                            ],
                            examples: [
                                "The scheme owner defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the Accreditation Body (AB), or in a separate accreditation manual. The report should be made available in a UN and local language.",
                                "At least basic information about the results of assessments of clients and assurance providers, that includes, at a minimum, information about the client's assurance status should be provided.",
                                "For schemes where assessment reports are not publicly available online, summary reports are available from Conformity Assessment Bodies (CABs) upon request (request to verify availability). If assessment reports cannot be shared by the scheme or by CABs due to confidentiality, it is \"confidential\". If no assessment reports are written at all, it is \"No, no reports\"."
                            ]
                        }
                    ]
                },
                {
                    id: "p5",
                    title: "Conformity Assessment",
                    criteria: [
                        {
                            id: "AS-CA-1",
                            type: ["Scheme","Ecolabel"],
                            text: "Minimum level of conformity assessment required by the scheme owner.",
                            responseOptions: [
                                {label: "3rd party", score: 1},
                                {label: "2nd party or 1st party", score: 0}
                            ],
                            examples: [
                                "The most independent level is the 3rd party audit (independent from the client). The 1st party is a self-assessment and the 2nd party is done by an interested stakeholder (e.g. an industry or trade association or NGO).",
                                "The scheme owner defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual. "
                            ]
                        },
                        {
                            id: "AS-CA-2",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner requires CABs to have a procedure in place for how clients are required to address non-conformities, including when a certificate or license is suspended or revoked.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual",
                                "The procedure specifies how different degrees of non-conformity (if applicable) are to be addressed and remediated, verifying corrective actions arising from non-compliances and allowing for appeals of non-compliances, in order to support consistency between CABs.",
                                "The procedure also specifies the conditions under which certification / the licence may be suspended or withdrawn, partially or in total, for all or part of the scope of certification/ the licence."
                            ]
                        }
                    ]
                },
                {
                    id: "p6",
                    title: "Conformity Assessment Bodies",
                    criteria: [
                        {
                            id: "AS-CB-1",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner requires CABs to be compliant with and accredited according to ISO/IEC 17065, ISO/IEC 17021, ISO/IEC 17020, or equivalent.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner defines quality requirements:",
                                "• In certification requirements/methodologies, or",
                                "• In the contract/agreement between the scheme owner and the CAB, or",
                                "• In a separate accreditation manual"
                            ]
                        },
                        {
                            id: "AS-CB-2",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner makes public a list of all accredited/approved CABs.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 2},
                                {label: "Yes (on request)", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "A system to list all CABs accepted by the scheme or accredited by respective ABs is publicly available, up-to-date and complete."
                            ]
                        },
                        {
                            id: "AS-CB-3",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner requires specific qualifications and competencies for auditors of conformity assessment bodies (CABs).",
                            responseOptions: [
                                {label: "Yes, examination or training included", score: 2},
                                {label: "Yes, no examination or training", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner has guidance specifying qualifications and competence criteria for CABs or requires that CABs have these set out.",
                                "The scheme owner should also perform examinations for auditors, or trainings and other forms of professional development practices."
                            ]
                        },
                        {
                            id: "AS-CB-4",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner maintains or requires CABs to maintain a publicly accessible list of certified products/product groups.",
                            responseOptions: [
                                {label: "Yes, incl. scope of certificate/license", score: 2},
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "A system to show the enterprises producing certified/ verified products is publicly available (for example in a database or by uploaded lists).",
                                "This system shall be up-to-date and complete (managed by the scheme owner or outsourced to the ABs or CABs), including the scope of certificate/license. If the management system is outsourced to the ABs or CABs, this is required and described in the contract/agreement between the scheme owner and the AB/CAB, in a separate accreditation manual or for example in certification requirements/methodologies. As a minimum, the certification body shall provide information, upon request, about the validity of a given certification."
                            ]
                        },
                        {
                            id: "AS-CB-5",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner requires CABs to have a documented, and publicly available, mechanism for clients who want to appeal compliance decisions.",
                            responseOptions: [
                                {label: "Yes, with an appeal overview", score: 2},
                                {label: "Yes, only submission instructions", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The procedure defines:",
                                "Clear instructions for how clients should submit their request to reconsider the compliance decision; and",
                                "Overview of the appeal process by which the CAB will assess the request, including timelines."
                            ]
                        }
                    ]
                },
                {
                    id: "p7",
                    title: "Auditing",
                    criteria: [
                        {
                            id: "AS-AU-1",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner has or requires CABs to have documented procedures for reliable auditing methods.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner/CAB shall have clear procedures that describe how audits are planned, conducted and reported on.",
                                "Examples of evidence:",
                                "• Requirements in the contract/agreement between the Scheme Owner and the certification body, in a separate accreditation manual or for e.g. in certification requirements/methodologies",
                                "• Guidance interpretation specifying auditing methods and risk factors, in order to support consistency between certification bodies."
                            ]
                        },
                        {
                            id: "AS-AU-2",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner defines or requires CABs to state frequency of surveillance audits.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                            ],
                            examples: [
                                "The scheme owner/CAB defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual.",
                            ]
                        },
                        {
                            id: "AS-AU-3",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner defines the type of activities CABs are required to undertake during an initial audit.",
                            responseOptions: [
                                {label: "Yes, onsite", score: 2},
                                {label: "Yes, fully or partly remote", score: 1},
                                {label: "No", score: 0},
                            ],
                            examples: [
                                "The scheme owner has to clarify whether CABs are required to perform onsite visits for the initial audit, including premises visit and documents review, or an off-site (remote) documentation review would suffice.",
                                "The scheme owner defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual."
                            ]
                        },
                        {
                            id: "AS-AU-4",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner requires or allows CABs to do unscheduled audits.",
                            responseOptions: [
                                {label: "Yes, required", score: 2},
                                {label: "Yes, allowed", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The Scheme Owner defines this requirement for certification bodies to conduct unscheduled (without significant advance warning) or surprise audits.",
                                "The scheme owner/CAB defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual."
                            ]
                        },
                        {
                            id: "AS-AU-5",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner ensures or requires CABs to ensure consistency in audit report formats.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner/CAB defines this requirement with a system for quality control.",
                                "Possible sources of evidence:",
                                "• Guidance specifying formats for audit reports and reporting, mandatory audit templates",
                                "• Review of the online audit reports for consistency of report format and reporting, or the scheme's quality management system."
                            ]
                        }
                    ]
                },
                {
                    id: "p8",
                    title: "Oversight Mechanism",
                    criteria: [
                        {
                            id: "AS-OM-1",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner has defined an approach to oversight of assurance activities and assurance providers.",
                            responseOptions: [
                                {label: "Yes, external Oversight Body", score: 2},
                                {label: "Yes, internal Oversight Body", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme has documented its oversight mechanism, that is independent of the assurance programme, and that evaluates implementation of that programme to ensure its consistent and competent implementation. These can include, but not restricted to: the roles and responsibilities for different oversight functions; the frequency of oversight activities; the oversight procedures to be followed; the process that oversight bodies should follow for assessing the performance of assurance providers.",
                                "The externality of the Oversight Body ensures independence of the oversight function from assurance.",
                                "Information on the oversight mechanism may be found in a contract/agreement between the scheme owner and an Accreditation Body or another Oversight Body, in a separate Oversight manual or for example in certification requirements/methodologies.",
                                "“Not applicable” if it is a government-owned scheme."
                            ]
                        },
                        {
                            id: "AS-OM-2",
                            type: ["Scheme","Ecolabel"],
                            text: "The scheme owner requires oversight bodies to have a documented, and publicly available, mechanism on the escalation of appeals for compliance decisions.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The documentation should include:",
                                "• Instructions for how clients should submit the request to reconsider a compliance decision to the oversight mechanism; and",
                                "• An overview of the process that the oversight body will follow to assess the appeal and make a decision on the request",
                                "“Not applicable” if there is no Oversight mechanism (government-owned scheme)."
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: "cat3",
            category: "Traceability & Claims",
            principles: [
                {
                    id: "p9",
                    title: "CoC traceability system",
                    criteria: [
                        {
                            id: "TC-CT-1",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner has a documented Chain of Custody (CoC) standard or other traceability requirements for checking product flow between links of the supply chain.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 2},
                                {label: "Yes, on request", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Either of the following:",
                                "• A CoC standard document which provides a description of its chain of custody approach",
                                "• A description of other measures to collect and analyze data from suppliers in order to trace back different certified inputs across different supply chain entities (e.g. data sheets)."
                            ]
                        },
                        {
                            id: "TC-CT-2",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner requires all enterprises that are physically handling the certified feedstock/product to undergo a CoC audit if intended to be sold as a certified, labeled product.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "All enterprises that physically handle and have legal ownership of the certified feedstock or product are to undergo a CoC audit.",
                                "This shall be in the form of a written requirement as part of the certification requirements. Possibly review scope of certificates, if available online. ",
                                "Only applicable if claims are made regarding the origin of certain ingredients or products (CoC is required; applicable to certain CoC models)."
                            ]
                        },
                        {
                            id: "TC-CT-3",
                            type: ["Scheme"],
                            text: "The scheme owner defines procedures for CoC certification of multiple sites of one or several legal entities.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme owner defines procedures for multi-sites (under control of one or more entities) and requirements for internal control management system. Those procedures ensure that all sites comply with the CoC certification requirements, and that they undergo a CoC audit. Control can include direct ownership, franchises, or where the entity has a signed agreement or contract with each site.",
                                "Examples of evidence:",
                                "• CoC standard, guidance or checklist specifying procedure and internal control system.",
                                "Only applicable if there is multiple-site CoC certification, OR if the scheme owner allows Chain of Custody of multi-sites.",
                            ]
                        },
                        {
                            id: "TC-CT-4",
                            type: ["Scheme"],
                            text: "The scheme owner requires subcontractors to meet the CoC requirements.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme owner ensures that certified entity takes full responsibility that all subcontractors fully meet CoC requirements and has a system to demonstrate this.",
                                "Examples of evidence:",
                                "• Sub-contract agreements, internal audits.",
                                "If there is no sub-contracting then this criterion is “Not applicable”."
                            ]
                        },
                        {
                            id: "TC-CT-5",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner allows different chain of custody models as traceability systems.",
                            responseOptions: [
                                {label: "Yes, Identity Preservation or Segregation model", score: 2},
                                {label: "Yes, Mass Balance", score: 1},
                                {label: "No, no specific model or Book and claim", score: 0}
                            ],
                            examples: [
                                "In case of identification and separation of certified and non-certified products, Identity Preserved or Segragated are allowed as models.",
                                "In case mixing is allowed, applicable system is Mass Balance. If no model is stated or if the model includes decoupling of the claim from the certified product (e.g. Certificate trading, or Book and claim), then it is a “No”.",
                                "Examples of evidence:",
                                "• Chain of Custody standards, audit checklists, certification requirements/methodologies specifying requirement.",
                                "• Chain of Custody audit reports"
                            ]
                        },
                        {
                            id: "TC-CT-6",
                            type: ["Scheme"],
                            text: "The scheme provides a clear statement on the handling of certified and uncertified inputs in its traceability system.",
                            responseOptions: [
                                {label: "Yes, prohibits mixing", score: 2},
                                {label: "Yes, allows mixing but with statement", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Schemes that prohibit mixing and have a clear statement on it receive the highest score, reflecting their stronger traceability and robustness. Schemes that do allow mixing but transparently disclose this, acknowledge their effort to ensure traceability while recognizing that mixing introduces a weaker control system. Finally, if there is a mixing but there is no evidence of a written statement this shall be “No”",
                                "“Not applicable” if it is a product label (ISO type I label, e.g. Blue Angel)."
                            ]
                        },
                        {
                            id: "TC-CT-7",
                            type: ["Scheme"],
                            text: "The scheme owner requires or asks CABs to verify that all enterprises within the supply chain maintain and keep accurate and accessible traceability records.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The Scheme Owner defines the requirement that all entities within the supply chain, including those which may not undergo a Chain of Custody audit, maintain up to date, complete and accessible records that may provide a tool to trace products through the supply chain. These include all records relating to shipment, receipt and invoicing.",
                                "Examples of evidence:",
                                "• Chain of Custody standard.",
                                "• Contract/agreement between the Scheme Owner and the certification body, accreditation/certification requirements/methodologies specifying criteria for document control and maintenance, and retention.",
                                "• Auditor checklists or guidance interpretation.",
                                "Only applicable if claims are made regarding the origin of certain ingredients or products (CoC is required)"
                            ]
                        },
                    ]
                },
                {
                    id: "p10",
                    title: "Claims and products labelling policy",
                    criteria: [
                        {
                            id: "TC-CP-1",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner provides description of its specific policies for products labelling and claims use.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 2},
                                {label: "Yes, on request", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Refers to the standard system's specific policies for product labeling. There should be rules and procedures for client use of claims (e.g., claims and logo use guide).",
                                "Example:",
                                "• A policy document on how to use symbols, logos and claims"
                            ]
                        },
                        {
                            id: "TC-CP-2",
                            type: ["Scheme", "Ecolabel"],
                            text: "Claims and labelling requirements ensure that claims or logos clearly indicate to what they apply.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "A clear indication to what the claim/label applies, e.g. the complete product, a product component, packaging, service, for promotional use, etc."
                            ]
                        },
                        {
                            id: "TC-CP-3",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme requires the use of honest marketing and advertising techniques.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                            ],
                            examples: [
                                "The scheme specifies clear rules for on-product and off-product communication, including the use of certification claims in marketing and promotional materials. "
                            ]
                        },
                        {
                            id: "TC-CP-4",
                            type: ["Scheme", "Ecolabel"],
                            text: "The label is accompanied by an explanatory text claim or a link to further information.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Refers to either of the following:",
                                "• A short text next to the logo explaining some detail about the label",
                                "• A QR code, link or any other form of additional information which helps to understand the label Criterion “Not applicable” if no graphic labels are used."
                            ]
                        },
                        {
                            id: "TC-CP-5",
                            type: ["Scheme", "Ecolabel"],
                            text: "Claims and label users are required to use unique license numbers or other tracking mechanisms.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Refers to a visible mechanism to be used by label and claims users which provides the ability to trace back the product to its origins. ",
                                "Example of evidence: ",
                                "• COC-numbers to be applied on claims and logo license numbers to be applied when labels are used.",
                                "Only applicable if claims are made regarding the origin of certain ingredients or products (CoC is required)"
                            ]
                        },
                        {
                            id: "TC-CP-6",
                            type: ["Scheme"],
                            text: "Claims requirements specify the types of claims that can be made for different types of CoC models, where the scheme owner allows for more than one model.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme provides a publicly available overview of differences in claims, depending on the types of CoC used. These claims shall accurately reflect the type of CoC.",
                                "For example:",
                                "• Claims on origin can only be made under Identity Preservation model.",
                                "• Claims on 100% certified material require Segregation model.",
                                "• When Mass Balance or Controlled Blending models are used, claims need to show that mixing is allowed.",
                                "• When Certificate Trading (Book & Claim) model is allowed, “supports sustainable production” (or similar) is an adequate claim.",
                                "“Not applicable” if:",
                                "• It is a product label (ISO type I label, e.g. Blue Angel)",
                                "• Only use of one CoC model.",
                            ]
                        }
                    ]
                },
                {
                    id: "p11",
                    title: "Consequences of misuse of claims",
                    criteria: [
                        {
                            id: "TC-CM-1",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner has a procedure in place that defines specific consequences of misuse of claims.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "This question also relates to fraudulent claim use.",
                                "Either of the following:",
                                "• A statement/policy that defines what happens if misuse is discovered.",
                                "• A described procedure for suspending or withdrawing permissions to use claims, including monitoring that suspended or former clients have stopped making claims."
                            ]
                        },
                        {
                            id: "TC-CM-2",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner requires surveillance of the accurate use of claims and labels in the market.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Either of the following:",
                                "• Clearly defined activities pursued to make sure labels and claims are used accurately",
                                "• A complaints mechanism that allows stakeholders to report the false use of labels and claims"
                            ]
                        }
                    ]
                },
                {
                    id: "p12",
                    title: "Minimum percentage claims",
                    criteria: [
                        {
                            id: "TC-CM-3",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner defines the minimum percentage of a certified/verified input in a single ingredient product for a claim to be allowed for that product.",
                            responseOptions: [
                                {label: "More or equal 75%", score: 2},
                                {label: "Less than 75%", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Refers to a public written statement on the minimum percentage requirements in a single-ingredient product.",
                                "Different schemes permit different percentages. Stating the percentages provides transparency and informed decision making.",
                                "“No” if:",
                                "• No evidence of minimum percentages even though mixing is allowed.",
                                "“Not applicable” if:",
                                "• Claim does not refer to product inputs/single ingredients but to the whole/final product or if % claims are not included in system."
                            ]
                        },
                        {
                            id: "TC-CM-4",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner defines the minimum percentage of certified/verified material in a composite product for a claim to be allowed for that product.",
                            responseOptions: [
                                {label: "More or equal 50%", score: 2},
                                {label: "Less than 50%", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Refers to a public written statement on the minimum percentage requirements in a composite product.",
                                "“No” if:",
                                "• No evidence of minimum percentages even though mixing is allowed.",
                                "“Not applicable” if:",
                                "• Claim does not refer to product inputs/single ingredients but to the whole/final product or if % claims are not included in system."
                            ]
                        }
                    ]
                }
            ]

        },
        {
            id: "cat4",
            category: "Governance & Scheme Management",
            principles: [
                {
                    id: "p13",
                    title: "Scheme Scope and Objectives",
                    criteria: [
                        {
                            id: "GM-SO-1",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme has a clearly defined scope of its certification programme.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                            ],
                            examples: [
                                "The scheme clearly defines the scope of its certification programme in terms of sector coverage, feedstock type, geography, value chain segment, subject of certification, and sustainability dimensions.",
                                "Possible source of evidence:",
                                "• Standard document",
                                "• Certification requirements (scope definition)",
                                "• Compliance assessment methodology"
                            ]
                        },
                        {
                            id: "GM-SO-2",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme makes explicit its sustainability-defined goals and objectives.",
                            responseOptions: [
                                {label: "Yes, with a link between strategies and goals", score: 2},
                                {label: "Yes, just citing the goals", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner explicitly defines scheme's objectives and overall goals it intends to achieve.",
                                "The scheme should strive to provide a detailed explanation of how its different strategies and activities contribute to those intended goals.",
                                "The objectives should be sustainability-defined, promoting responsible use of resources and improving environmental and/or socio-economic impacts.",
                                "Possible source of evidence:",
                                "• Scheme website",
                                "• Strategy document",
                                "• Theory of Change"
                            ]
                        },
                        {
                            id: "GM-SO-3",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme has procedures for taking into account the special circumstances of smallholders' operations.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The Scheme Owner processes and policies reduce barriers or promote more access of smallholders. This may include specific standards or exemptions that do not lower the requirements of the standards themselves.",
                                "Examples of evidence:",
                                "• Separate specific standard for smallholders",
                                "• Requirements for smallholder certification",
                                "• Programs such as capacity building and access to finance targeted to smallholders."
                            ]
                        }
                    ]
                },
                {
                    id: "p14",
                    title: "Governance Structure",
                    criteria: [
                        {
                            id: "GM-GS-1",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner is a legal entity, or an organization that is a partnership of legal entities, or a government or inter-governmental agency.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Information showing the legal status of the organization, often also listed in publicly available commercial registers (commonly also for non-commercial organisations)."
                            ]
                        },
                        {
                            id: "GM-GS-2",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner make its organizational structure available.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 2},
                                {label: "Yes, on request", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Refers to an overview of the different governance bodies that manage and govern the scheme (i.e. board, advisory board, board of trustees, etc.).",
                                "This can be in the form of an organizational chart or narrative document."
                            ]
                        },
                        {
                            id: "GM-GS-3",
                            type: ["Scheme", "Ecolabel"],
                            text: "The top decision-making body members are accountable to all stakeholders.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "A clear accountability mechanism (e.g. elections with voting members, accountability through deeds of trust, appointment by boards that are in turn elected, stakeholder advisory body).",
                                "Stakeholders in this case mean any parties who are directly or indirectly affected by the decisions of the top-decision making body (e.g. producers, consumer organizations, members, etc.)."
                            ]
                        },
                        {
                            id: "GM-GS-4",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner has a clear statement in case of a mutual recognition agreement with at least one other scheme.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not Applicable", score: null}
                            ],
                            examples: [
                                "The mutual recognition conditions should be stated if the scheme owner recognizes an existing standard as partially or fully equivalent to its standard (referring to e.g. harmonized standards content or assessment of client performance). The accepted schemes are the ones approved by the European Commission.",
                                "Please note: national vis-a-vis international standards of the same scheme owner are not eligible for a “Yes”."
                            ]
                        },
                        {
                            id: "GM-GS-5",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner makes quantitative information on the income sources or financing structure of the scheme available.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "An overview of quantitative information on the income sources or financing structure of the scheme (e.g. potentially including type of funding (i.e. financial, assets, manpower, etc), name of funders, amount or %-distribution of income sources).",
                                "This could be provided in the form of an annex to annual reports."
                            ]
                        }
                    ]
                },
                {
                    id: "p15",
                    title: "Stakeholder Participation",
                    criteria: [
                        {
                            id: "GM-SP-1",
                            type: ["Scheme", "Ecolabel"],
                            text: "Stakeholders have the possibility to participate in or contribute formal input on the scheme's governance.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme owner provides stakeholders the opportunity to easily contribute input to the governance structures, scheme's intended strategies and impacts, unintended effects, assessment of clients' performance or conformity, and on claims that the scheme makes and allows clients to make.",
                                "The scheme owner informs stakeholders about these opportunities and how their input will be taken into account.",
                                "Examples of evidence:",
                                "• Online process document for submission of input, governance body selection process and stakeholder composition, review of previous stakeholder inputs."
                            ]
                        },
                        {
                            id: "GM-SP-2",
                            type: ["Scheme", "Ecolabel"],
                            text: "The procedures of the top decision-making body ensure that there is a balanced representation of stakeholder interests, where no single interest predominates.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Enough information on the voting procedure to be sure that there is a balanced representation of stakeholder interests. The procedure shall also assure that no single interest predominates.",
                                "Examples of evidence:",
                                "• Internal procedure documents, revision and approval processes that describe achieved balance, such as through stakeholder mapping, announcements and invitation."
                            ]
                        },
                        {
                            id: "GM-SP-3",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner supports participation of under-represented stakeholders when seeking input from stakeholders.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner proactively seeks contributions of under-engaged and under-represented stakeholders to the scheme's strategies and impacts, unintended effects, assessment of clients' performance or conformity, and on claims that the scheme makes and allows clients to make.",
                                "It is highly recommended that the scheme owner considers how best to seek input from women. This can be done through for e.g. providing funding or standardisation training to targeted actors, such as SMEs, consumer organizations or environmental groups. "
                            ]
                        },
                        {
                            id: "GM-SP-4",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner ensures that clients and implementing partners have adequate time and notice to comply with new requirements.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme has procedures that set out when changes will come into effect and how the changes will be communicated to those affected, allowing adequate time for stakeholders to comply",
                                "Changes might relate to changes in scheme requirements or the requirements in the standard."
                            ]
                        }
                    ]
                },
                {
                    id: "p16",
                    title: "Due Diligence",
                    criteria: [
                        {
                            id: "GM-DD-1",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme recognises due diligence as ongoing process to be undertaken by operators.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner encourages operators to proactively carry out due diligence and to react to changes of circumstances and risks in the supply chain.",
                                "This can be in form of due diligence policies or procedures, implementation activities, add-on modules, formation of expert working groups, offering trainings on due diligence."
                            ]
                        },
                        {
                            id: "GM-DD-2",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme expects operators' due diligence activities to be guided by their own risk assessments.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme requires adequate measures for risk assessment and risk mitigation, to ascertain that products are deforestation-free and produced in accordance with relevant legislation in the country of production."
                            ]
                        }
                    ]
                },
                {
                    id: "p17",
                    title: "Complaints and Dispute Resolution Mechanism",
                    criteria: [
                        {
                            id: "GM-CD-1",
                            type: ["Scheme", "Ecolabel"],
                            text: "The scheme owner has a open and accessible dispute resolution system to facilitate the impartial handling of complaints and grievances.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The system should be open and accessible to all stakeholders.",
                                "At a minimum, the system accepts complaints and grievances related to standards development and maintenance, assurance processes and decisions, codes of conduct or policies of association for clients or members, and claims processes and controlled claims.",
                                "Requests by clients to re-consider compliance decisions are not considered complaints but appeals.",
                                "Possible sources of evidence:",
                                "• Complaints policy",
                                "• Grievance policy",
                                "• Impartiality policy",
                                "• Safeguarding policy",
                                "• Whistleblower protection policy"
                            ]
                        }
                    ]
                }
            ]

        }
    ],
  
    content: [
        {
            id: "cat5",
            category: "Environment",
            principles: [
                {
                    id: "p18",
                    title: "Environmental Management",
                    criteria: [
                        {
                            id: "EN-EM-1",
                            text: "The scheme a requires an environmental management plan for relevant environmental topics.",
                            requirements: [
                                {
                                    id: "r1",
                                    level: "Mandatory",
                                    text: "i. A written environmental management plan is in place that contains measures for biodiversity, soil, water, and air pollution and/or other relevant environmental topics.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r2",
                                    level: "Basic",
                                    text: "ii. The environmental management plan contains targets for biodiversity, soil, water, and air pollution improvements and/or for other relevant environmental topics.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r3",
                                    level: "Basic",
                                    text: "iii. The environmental management plan is updated and progress is monitored regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p19",
                    title: "Climate Change Management",
                    criteria: [
                        {
                            id: "EN-CC-1",
                            text: "The scheme requires activities that reduce GHG emissions.",
                            examples: [
                                "GHG emissions reductions activities can include, for example, increasing the use of renewable energy; increasing energy efficiency; increasing/stock soil carbon content; promoting activities such as forest restoration on working land."
                            ],
                            requirements: [
                                {
                                    id: "r4",
                                    level: "Mandatory",
                                    text: "i. Adoption of GHG emissions reduction activities is demonstrated.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-CC-2",
                            text: "The scheme requires quantification and disclosure of the certified product's lifecycle greenhouse gas emissions (GHG).",
                            examples: [
                                "• Examples of existing standards and legislation include the EU Product Environmental Footprint.",
                                "• See glossary for definitions of \"lifecycle greenhouse gas emissions\", \"emission factor\", \"EU Product Environmental Footprint\""
                            ],
                            requirements: [
                                {
                                    id: "r5",
                                    level: "Basic",
                                    text: "i. The certified product's lifecycle GHG emissions are reported.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r6",
                                    level: "Basic",
                                    text: "ii. The methodology(ies) required by the scheme aligns with existing standards and/or legislation.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r7",
                                    level: "Basic",
                                    text: "iii. The methodologies and emission factors used to calculate GHG emissions are disclosed.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-CC-3",
                            text: "The scheme requires quantification and disclosure of the operator's total GHG emissions.",
                            examples: [
                                "• Examples of existing standard and legislation include the GHG Protocol, ESRS E1-6",
                                "• See glossary for definitions of \"emission factor\", \"scope 1\", \"scope 2\" and \"scope 3\""
                            ],
                            requirements: [
                                {
                                    id: "r8",
                                    level: "Advanced",
                                    text: "i. Scope 1, 2 and 3 GHG emissions are reported.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r9",
                                    level: "Advanced",
                                    text: "ii. The methodology(ies) required by the scheme aligns with existing standards and/or legislation.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r10",
                                    level: "Advanced",
                                    text: "iii. The methodologies and emission factors used to calculate GHG emissions are disclosed.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-CC-4",
                            text: "The scheme requires a roadmap for reduction of the certified products' lifecycle GHG emissions.",
                            examples: [
                                "• An example of interim targets include setting targets, for example, -10% by 2030, -50% by 2040, and -100% by 2050.",
                                "• See glossary for definitions of \"lifecycle greenhouse gas emissions\", \"carbon neutrality\"."
                            ],
                            requirements: [
                                {
                                    id: "r11",
                                    level: "Advanced",
                                    text: "i. A roadmap for lifecycle GHG emission reductions for a product is created with the end goal of achieving carbon neutrality by 2050 the latest.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r12",
                                    level: "Advanced",
                                    text: "ii. Interim targets for at least every 10 years are set.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r13",
                                    level: "Advanced",
                                    text: "iii. The interim targets are updated at least every 5 years.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-CC-5",
                            text: "The scheme requires a roadmap for reduction of the total GHG emissions of the operator.",
                            examples: [
                                "See glossary for definition of \"carbon neutrality\", \"scope 1\", \"scope 2\" and \"scope 3\""
                            ],
                            requirements: [
                                {
                                    id: "r14",
                                    level: "Advanced",
                                    text: "i. A roadmap for total GHG emission reduction is set with the end goal of achieving carbon neutrality at latest by 2050.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r15",
                                    level: "Advanced",
                                    text: "ii. Targets are set separately for scopes 1, 2 and 3. ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r16",
                                    level: "Advanced",
                                    text: "iii. Interim targets for at least every 10 years are set.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r17",
                                    level: "Advanced",
                                    text: "iv. The interim targets are updated at least every 5 years.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p20",
                    title: "Sustainable Land Use Management",
                    criteria: [
                        {
                            id: "EN-LUM-1",
                            text: "The scheme requires that no raw material is obtained from high-carbon stock areas.",
                            examples: [
                                "See glossary for definitions of \"High carbon stock areas\", \"raw material\", \"wetland\", \"continuously forested areas\", \"biomass\""
                            ],
                            requirements: [
                                {
                                    id: "r18",
                                    level: "Mandatory",
                                    text: "i. Biobased products produced from agricultural biomass shall not be made from raw material obtained from land with high-carbon stock, namely land that had one of the following statuses in January 2008 and no longer has that status: (a) wetlands; (b) continuously forested areas; (c) land spanning more than one hectare with trees higher than five metres and a canopy cover of between 10% and 30%.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-2",
                            text: "The scheme prohibits the degradation and/or drainage of peatlands and cultivation expansion into them.",
                            examples: [
                                "See glossary for definitions of \"raw material\", \"peatland\""
                            ],
                            requirements: [
                                {
                                    id: "r19",
                                    level: "Mandatory",
                                    text: "i. Raw material (here: agricultural biomass) shall not be obtained from land that was peatland in January 2008, unless evidence is provided that the cultivation and harvesting of that raw material does not involve drainage of previously undrained soil.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-3",
                            text: "The scheme requires a monitoring and enforcement system to ensure the sustainability of harvesting operations. ",
                            requirements: [
                                {
                                    id: "r20",
                                    level: "Mandatory",
                                    text: "i. The monitoring and enforcement system ensures:(1) the legality of harvesting operations; (2) forest regeneration of harvested areas; (3) that areas designated by international or national law or by the relevant competent authority for nature protection purposes are protected; (4) that harvesting is carried out considering maintenance of soil quality and biodiversity with the aim of minimising negative impacts; and (5) that harvesting maintains or improves the long-term production capacity of the forest",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-4",
                            text: "The scheme requires that procured forest biomass originates from an area with climate plans guided by international agreements.",
                            examples: [
                                "See glossary for definition of \"LULUCF\", \"biomass\", \"carbon sink, \"carbon stock\""
                            ],
                            requirements: [
                                {
                                    id: "r21",
                                    level: "Mandatory",
                                    text: "i. The biobased materials are produced from forest biomass originating in a country or regional economic integration organisation that (a) is a Party to the Paris Agreement; (b) has submitted a nationally determined contribution (NDC) to the United Nations Framework Convention on Climate Change (UNFCCC), covering emissions and removals from agriculture, forestry and land use which ensures that changes in carbon stock associated with biomass harvest are accounted towards the country's commitment to reduce or limit greenhouse gas emissions as specified in the NDC; OR (c) has national or sub-national laws in place, in accordance with Article 5 of the Paris Agreement, applicable in the area of harvest, to conserve and enhance carbon stocks and sinks, and providing evidence that reported LULUCF-sector emissions do not exceed removals.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Forest"],
                                    applicablePhases: ["Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-5",
                            text: "The scheme requires the development, implementation and monitoring of a forest management plan.",
                            examples: [
                                "The forest management plan can include for example the following: participation and consultation of relevant stakeholders; zoning or stratifying the forest area; calculating sustainable yields."
                            ],
                            requirements: [
                                {
                                    id: "r22",
                                    level: "Mandatory",
                                    text: "i. A written forest management plan, which includes a forest resource assessment, is developed.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r23",
                                    level: "Basic",
                                    text: "ii. The plan must contain targets for sustainable forest management and a strategy to maintain and improve forest health.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r24",
                                    level: "Basic",
                                    text: "iii. The plan is updated and progress is monitored regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-6",
                            text: "The scheme requires that land use management is conducted using a relevant and credible methodology in forested areas.",
                            examples: [
                                "• Examples of recognised methodologies are the High Carbon Stock Approach, Closer to Nature Forest Management, Pro Silva principles",
                                "• See glossary for definitions for \"Land use management\""
                            ],
                            requirements: [
                                {
                                    id: "r25",
                                    level: "Basic",
                                    text: "i. Land use management is conducted using a relevant and credible methodology in forested areas.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-7",
                            text: "The scheme requires agro-ecological/regenerative practices to preserve and promote biodiversity.",
                            examples: [
                                "• Examples of regenerative agro-ecological practices include maintaining crop diversity at a certain percentage of arable land, maintaining permanent grasslands, maintaining cover crops between harvests that promote nutrient cycling/ nitrogen fixing.",
                                "• Appropriate practices for local circumstances can include considerations regarding soil type and the local climate.",
                                "• See glossary for definition of \"Regenerative agriculture and forestry\""
                            ],
                            requirements: [
                                {
                                    id: "r26",
                                    level: "Basic",
                                    text: "i. Appropriate regenerative/agro-ecological practices are in place with the goal of preserving and promoting biodiversity.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-8",
                            text: "The scheme requires that forest regeneration is maintained or strengthened over the long term.",
                            examples: [
                                "• Regeneration methods are used to regenerate vegetation cover to pre-harvesting or more natural conditions.",
                                "• The level of harvesting is sustained at the level or below the permanent natural replenishing rate of the forest."
                            ],
                            requirements: [
                                {
                                    id: "r27",
                                    level: "Basic",
                                    text: "i. Regeneration methods are used to regenerate vegetation cover to pre-harvesting or more natural conditions.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r28",
                                    level: "Basic",
                                    text: "ii. The level of harvesting is sustained at the level or below the permanent natural replenishing rate of the forest ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-9",
                            text: "The scheme requires that raw material is not obtained or procured from deforested areas.",
                            examples: [
                                "• The EU Deforestation Regulation (EUDR) sets a cut-off date on 31 December 2020, meaning that only products that have been produced on land that has not been subject to deforestation or forest degradation after 31 December 2020 will be allowed on the EU market or to be exported from the EU.",
                                "• See glossary for \"raw material\", \"forest degradation\" and \"deforestation\"."
                            ],
                            requirements: [
                                {
                                    id: "r29",
                                    level: "Basic",
                                    text: "i. Raw material is obtained or procured from land that has not been subject to deforestation, and the wood has been harvested from the forest without inducing forest degradation.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-10",
                            text: "The scheme requires that forest biomass produced with regenerative forest practices is prioritised in procurement processes and policies.",
                            examples: [
                                "See glossary for definition of \"regenerative agriculture and forestry\", \"biomass\""
                            ],
                            requirements: [
                                {
                                    id: "r30",
                                    level: "Advanced",
                                    text: "i. Forest biomass produced through regenerative forestry practices is prioritised in procurement processes and practices over biomass produced through non-regenerative practices.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Forest"],
                                    applicablePhases: ["Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-11",
                            text: "The scheme requires a management plan and strategies to reach low ILUC risk level.",
                            examples: [
                                "See glossary for definition of \"indirect land use change\""
                            ],
                            requirements: [
                                {
                                    id: "r31",
                                    level: "Advanced",
                                    text: "i. An ILUC risk assessment is conducted and documented.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r32",
                                    level: "Advanced",
                                    text: "ii. A strategy to reach a low ILUC risk level is established.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-LUM-12",
                            text: "The scheme requires that there is low indirect land use change (ILUC) risk.",
                            examples: [
                                "• A yield increase may be a result of improved agricultural practices, such as mechanisation/ automation (precision farming), increase in organic matter content, reduction of soil compaction/erosion, decrease in pests, intercropping or agroforestry, crop rotation, improved pollination, reduction of post-harvest losses etc.",
                                "• See glossary for definition of \"biomass\"; \"indirect land use change\"; \supply chain\", \"abandoned land\", \"unused land\", \"severely degraded land\""
                            ],
                            requirements: [
                                {
                                    id: "r33",
                                    level: "Advanced",
                                    text: "i.Low ILUC risk is demonstrated by meeting at least one of the following: a) Additional biomass is produced through an increase in yield without additional land conversion and any yield increase techniques applied do not create negative environmental trade-offs concerning for example soil quality or protection of biodiversity. b) The biomass used for biobased products production is a waste or a residue with low ILUC risk level. c) The biomass used for biobased product production is derived from unused, abandoned or severely degraded land.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p21",
                    title: "Protection of Biodiversity",
                    criteria: [
                        {
                            id: "EN-BD-1",
                            text: "The scheme requires identification and documentation of the high biodiversity value(s) in or near potential or existing operations.",
                            examples: [
                                "• High conservation values can be used for identification.",
                                "• See glossary for definitions for \"land with high biodiversity value\" and \"high conservation value\"."
                            ],
                            requirements: [
                                {
                                    id: "r34",
                                    level: "Mandatory",
                                    text: "i. The high biodiversity value(s) in or near potential or existing operations are identified and documented.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-BD-2",
                            text: "The scheme prohibits cultivation of land with high biodiversity value.",
                            examples: [
                                "• Land with high biodiversity or conservation value can be used for operations if feedstock production or processing operations are legally authorised as part of the conservation management for the area concerned.",
                                "• See glossary for definition(s) of \"land with high biodiversity value\", \"raw material\""
                            ],
                            requirements: [
                                {
                                    id: "r35",
                                    level: "Mandatory",
                                    text: "i. Biobased products produced from agricultural biomass shall not be made from raw material obtained from land with a high biodiversity value, in or after January 2008",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-BD-3",
                            text: "The scheme requires a baseline assessment of biodiversity.",
                            examples: [
                                "A baseline biodiversity assessment can include descriptions of, for example,  the production system, productive land, natural habitats, and presence of native, rare and endangered species."
                            ],
                            requirements: [
                                {
                                    id: "r36",
                                    level: "Basic",
                                    text: "i. A baseline biodiversity assessment is conducted at site level.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r37",
                                    level: "Basic",
                                    text: "ii. The baseline biodiversity assessment is reconducted regularly to monitor progress.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-BD-4",
                            text: "The scheme prohibits the use of fire as a land-clearing method.",
                            examples: [
                                "An exception can be granted if (a) there is proof and permission from the competent authority that the use of fire is necessary to enhance or maintain ecosystem services and biodiversity and permitted by a competent authority (b) authority (e.g. local, regional or national) has granted an exemption for plant health reasons."
                            ],
                            requirements: [
                                {
                                    id: "r38",
                                    level: "Basic",
                                    text: "i. Burning is prohibited as a method of land preparation and post-harvest disposal of residues, except in exceptional cases.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-BD-5",
                            text: "The scheme requires that field margins, buffer zones, boundaries and waterways are maintained and restored.",
                            requirements: [
                                {
                                    id: "r39",
                                    level: "Basic",
                                    text: "i. Field margins, boundaries and watercourses are maintained and restored to support the conservation of native birds and animals in a way that takes into consideration local conditions.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-BD-6",
                            text: "The scheme requires measures to minimise habitat fragmentation.",
                            examples: [
                                "• Ecological corridors are examples of ways to minimise habitat fragmentation.",
                                "• See glossary for definition of \"ecological corridor\""
                            ],
                            requirements: [
                                {
                                    id: "r40",
                                    level: "Basic",
                                    text: "i. Measures to minimise habitat fragmentation are taken.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-BD-7",
                            text: "The scheme requires careful management of the introduction, cultivation and use of invasive species in case of introduction.",
                            examples: [
                                "Check glossary for definition of \"invasive species\"."
                            ],
                            requirements: [
                                {
                                    id: "r41",
                                    level: "Basic",
                                    text: "i. Practices are put in place to avoid invasive genetic variations (contaminants) in biomass planting material.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r42",
                                    level: "Basic",
                                    text: "ii. An invasive species management plan is established.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r43",
                                    level: "Basic",
                                    text: "iii. If using invasive species, due diligence research is to be conducted about the invasiveness of the species.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r44",
                                    level: "Basic",
                                    text: "iv. If a species is considered as highly invasive, the species shall not be used.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r45",
                                    level: "Basic",
                                    text: "v. In cases where invasive speciess are used, the traceability and proper labeling of these varieties must be ensured.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-BD-8",
                            text: "The scheme requires that genetically modified species are utilised with care and consideration.",
                            requirements: [
                                {
                                    id: "r46",
                                    level: "Basic",
                                    text: "i. If using genetically modified species, due diligence research is to be conducted about the invasiveness of the species.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r47",
                                    level: "Basic",
                                    text: "ii. In cases where genetically modified varieties are used, the traceability and proper labeling of these varieties must be ensured.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-BD-9",
                            text: "The scheme requires measures for enhancing local wild genetic diversity.",
                            requirements: [
                                {
                                    id: "r48",
                                    level: "Advanced",
                                    text: "i  Measures are taken for the enhancement of local wild genetic diversity.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-BD-10",
                            text: "The scheme requires maintenance and/or rehabilitation of pollinator habitats.",
                            requirements: [
                                {
                                    id: "r49",
                                    level: "Advanced",
                                    text: "i. Measures are taken to maintain and/or rehabilitate pollinator habitats on the premises.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p22",
                    title: "Chemical Use Management",
                    criteria: [
                        {
                            id: "EN-CM-1",
                            text: "The scheme requires the development, implementation and monitoring of an Integrated Pest Management plan",
                            examples: [
                                "See glossary for definition of \"plant protection products\"."
                            ],
                            requirements: [
                                {
                                    id: "r50",
                                    level: "Mandatory",
                                    text: "i. A written Integrated Pest Management Plan (IPM) is in place",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r51",
                                    level: "Basic",
                                    text: "ii. The plan must contain targets for reducing the use of plant protection products.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r52",
                                    level: "Basic",
                                    text: "iii.  The plan is updated and progress is monitored regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-CM-2",
                            text: "The scheme requires proper application of plant protection products and fertiliser as well as appropriate equipment maintenance.",
                            examples: [
                                "See glossary for definition of \"plant protection products\"."
                            ],
                            requirements: [
                                {
                                    id: "r53",
                                    level: "Mandatory",
                                    text: "i. Records are kept of the application of plant protection products and fertilisers, showing type of chemical, application time, and amount.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r54",
                                    level: "Mandatory",
                                    text: "ii. Only plant protection products that are officially registered and permitted in the production country for the respective crops are used.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r55",
                                    level: "Basic",
                                    text: "iii. Best practices are respected considering, for example,  (a) the timing and concentration of application; (b) maximum authorised rates of application; (c) restricted entry intervals; and (d) pre-harvest intervals. ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r56",
                                    level: "Basic",
                                    text: "iv. Maintenance of chemical application equipment is conducted regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-CM-3",
                            text: "The scheme requires safe handling and disposal of substances.",
                            examples: [
                                "See glossary for definition of \"procedure\": \"hazardous substances\", \"substance\"."
                            ],
                            requirements: [
                                {
                                    id: "r57",
                                    level: "Mandatory",
                                    text: "i. Storage, handling, use and disposal of substances is conducted based on the manufacturer's safety instructions.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r58",
                                    level: "Basic",
                                    text: "ii. Procedures are in place on how to handle cases of hazardous substance spills.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-CM-4",
                            text: "The scheme prohibits and/or regulates the use of hazardous substances.",
                            examples: [
                                "• Specifically referring to: WHO's 1a and 1b lists, Annex III of the Rotterdam Convention, Stockholm Convention on Persistent Organic Pollutants, Montreal Protocol on Substances that Deplete the Ozone Layer.",
                                "• See glossary for definition of \"substances of very high concern\", \"hazardous substances\", \"substances\"; \"substances that are carcinogenic, mutagenic or toxic to reproduction\".",
                                "• Criteria laid down in Article 57 can be found at https://reachonline.eu/reach/en/title-vii-chapter-1-article-57.html"
                            ],
                            requirements: [
                                {
                                    id: "r59",
                                    level: "Mandatory",
                                    text: "i. The use of substances addressed by WHO, Rotterdam Convention, or the Stockholm Convention are prohibited.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r60",
                                    level: "Basic",
                                    text: "ii. The use of substances addressed by the Montreal Protocol is prohibited.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r61",
                                    level: "Basic",
                                    text: "iii.The use of substances classified as carcinogenic (category 1a or 1b), mutagenic (category 1a or 1b) or reprotoxic (category 1a or 1b) by the Globally Harmonized System of Classification and Labelling of Chemicals (GHS) is prohibited.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r62",
                                    level: "Basic",
                                    text: "iv. The use of substances meeting the criteria laid down in Article 57 of the EU REACH regulation, notably substances meeting the criteria for classification as carcinogenic, mutagenic or toxic for reproduction, is prohibited for some or all applications.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r63",
                                    level: "Advanced",
                                    text: "v. The use of substances identified as \"substances of very high concern\" under the EU REACH regulation is prohibited.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-CM-5",
                            text: "The scheme requires a plan to phase out hazardous substances.",
                            examples: [
                                "See glossary for \"hazardous substances\"."
                            ],
                            requirements: [
                                {
                                    id: "r64",
                                    level: "Advanced",
                                    text: "i. A plan to phase out hazardous substances as comprehensively as possible is set out.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r65",
                                    level: "Advanced",
                                    text: "ii. The plan must contain targets to reduce the use of hazardous substances.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r66",
                                    level: "Advanced",
                                    text: "iii. The plan is updated and progress is monitored regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p23",
                    title: "Soil Management",
                    criteria: [
                        {
                            id: "EN-SM-1",
                            text: "The scheme requires that the use of agrarian and forestry residues for biobased products shall not be at the expense of soil quality and soil carbon.",
                            examples: [
                                "Traditional uses can include fodder, natural fertiliser, material or local fuel."
                            ],
                            requirements: [
                                {
                                    id: "r67",
                                    level: "Mandatory",
                                    text: "i. The use of agrarian and forestry residual products does not occur at the expense of the soil nutrient balance, soil organic matter balance or important traditional uses.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-SM-2",
                            text: "The scheme requires implementation of practices to maintain or enhance soil quality.",
                            examples: [
                                "• Examples of conservation and rehabilitation practices include increased soil coverage, crop diversification, minimum tillage, use of cover crops, increasing organic matter, minimisation of soil disturbance, and protection of soil physical integrity through prevention and minimisation of soil erosion, compaction and drainage.",
                                "• Examples of measures to prevent water loss and improving soil water holding capacity, proper tillage methods, increased soil organic matter, using cover crops etc.",
                                "• Analysis of soil organic matter from periodic sampling of soil on the feedstock production site can help evaluate the effect of the soil management plan on the organic matter content.",
                                "• See glossary for definition of \"runoff\"."
                            ],
                            requirements: [
                                {
                                    id: "r68",
                                    level: "Mandatory",
                                    text: "i. The health and/or quality of soil organic matter is maintained or enhanced through rehabilitation measures.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r69",
                                    level: "Mandatory",
                                    text: "ii. Soil structure is maintained or enhanced including the prevention and mitigation of compaction and degradation.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r70",
                                    level: "Basic",
                                    text: "iii. Samples of soil organic matter are taken and stored on-site in appropriate conditions (e.g. method, temperature, duration).",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r71",
                                    level: "Basic",
                                    text: "iv. Actions are taken to improve soil water holding capacity with the aim of preventing water loss through runoff or evaporation.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r72",
                                    level: "Advanced",
                                    text: "v. Measures are taken to maintain and/or improve soil biodiversity.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-SM-3",
                            text: "The scheme requires that measures are taken and cultivation techniques are used to reduce the risk of soil erosion.",
                            requirements: [
                                {
                                    id: "r73",
                                    level: "Basic",
                                    text: "i. Topographic risks are accounted for in soil management and activities are avoided in and around areas where these risks have been identified. ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-SM-4",
                            text: "The scheme requires the use of minimal intervention techniques to minimise damages to soil.",
                            examples: [
                                "The impact of heavy machinery and the building of access roads can lead to superficial and deep impacts, such as: soil erosion; soil removal; soil displacement; soil compaction; rutting; puddling and consequent hydromorphology; soil asphyxiation; the stimulation of germination of competing social herbaceous or semi-ligneous species. All these impacts hamper the natural regeneration of forest soil."
                            ],
                            requirements: [
                                {
                                    id: "r74",
                                    level: "Mandatory",
                                    text: "i. Minimal intervention techniques are used when building and utilising infrastructure.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r75",
                                    level: "Advanced",
                                    text: "ii. Soil scarification is only used in exceptional cases if required to achieve sufficient regeneration.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r76",
                                    level: "Advanced",
                                    text: "iii. The lightest appropriate soil scarification method is used to minimise impacts on soil and lichen.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        },
                        {
                            id: "EN-SM-5",
                            text: "The scheme requires the development, implementation and monitoring of a nutrient management plan.",
                            examples: [
                                "See glossary for definition of \"4R principle for nutrient stewardship\"."
                            ],
                            requirements: [
                                {
                                    id: "r77",
                                    level: "Basic",
                                    text: "i. A written nutrient management plan is established.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r78",
                                    level: "Basic",
                                    text: "ii.  The plan is updated and progress is monitored regularly ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer"]
                                },
                                {
                                    id: "r79",
                                    level: "Advanced",
                                    text: "iii. The nutrient management plan is based on the 4Rs principle.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p24",
                    title: "Air Quality",
                    criteria: [
                        {
                            id: "EN-AQ-1",
                            text: "The scheme requires measures to limit the emission of harmful substances into the air.",
                            examples: [
                                "Harmful substances can include carbon monoxide, nitrous oxides (NOx), volatile organic compounds (VOC), particulate matter (PM2.5), sulphur compounds, ozone (O3), sulphur dioxide (SO2), smoke, odors and dioxins."
                            ],
                            requirements: [
                                {
                                    id: "r80",
                                    level: "Mandatory",
                                    text: "i. Measures are taken to limit the emission of harmful substances into the air.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r81",
                                    level: "Basic",
                                    text: "ii. Air quality is measured regularly in the area of operation and analysed.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                    ]
                },
                {
                    id: "p25",
                    title: "Water Quality and Conservation",
                    criteria: [
                        {
                            id: "EN-WQ-1",
                            text: "The scheme requires that water use does not exceed the natural replenishment rate.",
                            examples: [
                                "Examples of ways to ensure that water consumption does not exceed natural replenishment capacities include recycling gray water and rain water collection."
                            ],
                            requirements: [
                                {
                                    id: "r82",
                                    level: "Mandatory",
                                    text: "i. The water consumption and withdrawals of the operator do not exceed the natural replenishment rate.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-WQ-2",
                            text: "The scheme requires measures for optimising water use efficiency.",
                            requirements: [
                                {
                                    id: "r83",
                                    level: "Mandatory",
                                    text: "i. Water is used efficiently and good water management measures are implemented.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-WQ-3",
                            text: "The scheme requires measures for water pollution prevention or minimisation.",
                            examples: [
                                "See glossary for definitions for \"point source pollution\", \"nonpoint source pollution\", \"sewage\", \"sludge\" and \"slurry\"."
                            ],
                            requirements: [
                                {
                                    id: "r84",
                                    level: "Mandatory",
                                    text: "i. Measures are in place to prevent or minimise point and nonpoint source pollution.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r85",
                                    level: "Basic",
                                    text: "ii. The use and discharge of untreated sewage, sludge and slurry of human origin is prohibited.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r86",
                                    level: "Basic",
                                    text: "iii. Buffer zones are installed along natural watercourses",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-WQ-4",
                            text: "The scheme requires records of water use and quality.",
                            requirements: [
                                {
                                    id: "r87",
                                    level: "Basic",
                                    text: "i. Water consumption is evidenced by water monitoring records.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r88",
                                    level: "Basic",
                                    text: "ii. The quality of water is tested regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r89",
                                    level: "Advanced",
                                    text: "iii. Water quality is evidenced by water quality monitoring records.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p26",
                    title: "Energy Use & Efficiency",
                    criteria: [
                        {
                            id: "EN-EE-1",
                            text: "The scheme requires the development, implementation and monitoring of an energy management plan, including energy use reduction and increasing the share of renewable energy.",
                            examples: [
                                "See definition in glossary for \"renewable energy\"."
                            ],
                            requirements: [
                                {
                                    id: "r90",
                                    level: "Advanced",
                                    text: "i. A written energy management plan is in place that considers energy use reduction and increasing the share of renewable energy.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r91",
                                    level: "Advanced",
                                    text: "ii. The energy manamagent plan contains targets for energy use reduction and for increasing the share of renewable energy.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r92",
                                    level: "Advanced",
                                    text: "iii. The energy management plan is updated and progress is monitored regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "EN-EE-2",
                            text: "The scheme requires that a certain percentage of the operator's total direct energy use derives from renewable energy sources.",
                            examples: [
                                "See definition in glossary for \"renewable energy\"."
                            ],
                            requirements: [
                                {
                                    id: "r93",
                                    level: "Advanced",
                                    text: "i. A certain percentage of the operator's total direct energy derives from renewable energy sources.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: "cat6",
            category: "Circularity",
            principles: [
                {
                    id: "p27",
                    title: "Circular Resource Use",
                    criteria: [
                        {
                            id: "CR-CRU-1",
                            text: "The scheme requires the 9R framework and/or the cascading use principle to be the main guiding principle of resource use.",
                            examples: [
                                "See glossary for definitions for \"9R framework\" and \"cascading use principle\""
                            ],
                            requirements: [
                                {
                                    id: "r94",
                                    level: "Basic",
                                    text: "i. Measures are taken to apply the 9R framework and/or the cascading use principle.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "CR-CRU-2",
                            text: "The scheme requires that virgin biomass is harvested at levels that ensure regeneration.",
                            examples: [
                                "See glossary for definitions for \"virgin biomass\""
                            ],
                            requirements: [
                                {
                                    id: "r95",
                                    level: "Basic",
                                    text: "i. Virgin biomass is not harvested at levels above sustainable yields (biomass producer) nor is virgin biomass harvested at levels above sustainable yields procured (industrial processor, final product manufacturer).",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "CR-CRU-3",
                            text: "The scheme requires a plan for the improvement of the share of circular inflows in production.",
                            examples: [
                                "• The industry average can be calculated using existing test methodologies; or obtained from reference literature.",
                                "• See glossary for definitions for \"circular inflow\", \"inflow\"."
                            ],
                            requirements: [
                                {
                                    id: "r96",
                                    level: "Basic",
                                    text: "i. A written plan for the increase of circular inflows is in place.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r97",
                                    level: "Basic",
                                    text: "ii. The plan contains targets for increasing the circular inflows.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r98",
                                    level: "Basic",
                                    text: "iii. The plan is updated and progress monitored regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "CR-CRU-4",
                            text: "The scheme requires the development and implementation of a circular procurement plan ",
                            examples: [
                                "• Circular material inflows are materials that are produced in accordance with the principles of circular economy. These include recycled material and virgin biomass that is regeneratively produced.",
                                "• See glossary for definitions for \"inflow\""
                            ],
                            requirements: [
                                {
                                    id: "r99",
                                    level: "Advanced",
                                    text: "i. A procurement plan is in place with goals and targets to increase the procurement of circular material inflows.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p28",
                    title: "Circular Design & Material Cycling",
                    criteria: [
                        {
                            id: "CR-CD-1",
                            text: "The scheme requires re-using or recycling of residual flows in a sustainable manner.",
                            examples: [
                                "• Residual flows and waste can be used for energy generation in certain circumstances  where (1) the use for material purposes is not possible (e.g. no market is accessible) and (2) the use provides a greenhouse gas benefit in comparison to the alternative.",
                                "• See glossary for \"recycling\""
                            ],
                            requirements: [
                                {
                                    id: "r100",
                                    level: "Mandatory",
                                    text: "i. Residual flows and waste are reused or recycled as extensively as possible.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r101",
                                    level: "Advanced",
                                    text: "ii. Residual flows and waste are used for energy generation only in certain circumstances.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "CR-CD-2",
                            text: "The scheme requires measures to increase material efficiency in production processes.",
                            requirements: [
                                {
                                    id: "r102",
                                    level: "Basic",
                                    text: "i. Measures are taken to reduce the material intensity of production per unit.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "CR-CD-3",
                            text: "The scheme requires products to be designed for repairability and reusability, when possible.",
                            examples: [
                                "• Examples of repairability and reusability practices include: (A) Spare parts essential to the functionality of the products are accessible at a reasonable  price;  (B) Designed for easy inspecting, non-destructive dismantling, and replaceability with commonly available tools ; (C) Spare parts are not unnecessarily bundled, (D) Use of standardised components and tools, (E) Access to repair and maintenance manuals and documentation.",
                                "• Examples of product life extension initiatives  include: (A) product upgrades, (B) repair and maintenance services, (D)  making spare parts available and provides tools for self-repair, (D)  a second-hand, refurbished and/or remanufactured sales program.",
                                "• Examples of specific products where repairability and reusability design is not appropriate (i.e. not possible) is detergents."
                            ],
                            requirements: [
                                {
                                    id: "r103",
                                    level: "Advanced",
                                    text: "i. Product is designed for repairability and reusability.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r104",
                                    level: "Advanced",
                                    text: "ii. Repairability and reusability practices are applied.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r105",
                                    level: "Advanced",
                                    text: "iii. Product-life extension is facilitated via concrete initiatives.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "CR-CD-4",
                            text: "The scheme requires products to be designed for high-quality recyclability.",
                            examples: [
                                "See glossary for definition of \"high-quality recycling\", \"recycling\", \"9R framework\"."
                            ],
                            requirements: [
                                {
                                    id: "r106",
                                    level: "Advanced",
                                    text: "i. Best practices and guidelines on design for high-quality recycling are established and followed.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                },
                                {
                                    id: "r107",
                                    level: "Advanced",
                                    text: "ii. The most desireable next use of the used product is indicated (following the 9R framework).",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p29",
                    title: "Responsible Waste Management",
                    criteria: [
                        {
                            id: "CR-WM-1",
                            text: "The scheme requires safe and proper storage, transportation and disposal of waste.",
                            requirements: [
                                {
                                    id: "r108",
                                    level: "Mandatory",
                                    text: "i. Waste and used containers are stored, transported,and disposed of safely and appropriately.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "CR-WM-2",
                            text: "The scheme does not allow the use of landfills or open-air burning for waste disposal or for burning residues and by-products.",
                            examples: [
                                "• The scheme can allow the following exceptions for instances where open-air burning is acceptable in a limited fashion: health and safety of workers is at risk; there are no viable alternatives in terms of availability or cost; burning may prevent natural fires; OR the cultivation of the crop require regular burning for its long-term viability and there are no equivalent alternatives.",
                                "• Hazardous substances should never be burned in the open air."
                            ],
                            requirements: [
                                {
                                    id: "r109",
                                    level: "Basic",
                                    text: "i. Landfilling as a waste management practice is prohibited.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r110",
                                    level: "Basic",
                                    text: "ii. Open-air burning as a waste management practice is prohibited.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "cat7",
            category: "Social",
            principles: [
                {
                    id: "p30",
                    title: "Labour and Human Rights",
                    criteria: [
                        {
                            id: "SOC-LR-1",
                            text: "The scheme requires adherence and commitment to the Universal Declaration of Human Rights and the ILO Core Conventions.",
                            examples: [
                                "See glossary for \"ILO Core Conventions\""
                            ],
                            requirements: [
                                {
                                    id: "r111",
                                    level: "Mandatory",
                                    text: "i. The operator is committed to and adheres to the Universal Declaration of Human Rights",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r112",
                                    level: "Mandatory",
                                    text: "ii. The operator is committed to and adheres to the ILO Core Conventions.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-2",
                            text: "The scheme requires effective management of ILO Core Conventions in its own operations.",
                            examples: [
                                "See glossary for definition of \"ILO Core Conventions\""
                            ],
                            requirements: [
                                {
                                    id: "r113",
                                    level: "Basic",
                                    text: "i. A policy ensuring ILO labour rights is publicly available, implemented and communicated to all workers. ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r114",
                                    level: "Basic",
                                    text: "ii. Employee trainings regarding ILO labour rights are organised.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r115",
                                    level: "Basic",
                                    text: "iii. Risk assessment on ILO labour rights in own operations are conducted regularly",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r116",
                                    level: "Basic",
                                    text: "iv. Mitigation measures based on risk assessment for ILO labour rights are identified for own operations",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r117",
                                    level: "Basic",
                                    text: "v. The progress and effectiveness of the mitigation measures for own operations are monitored at a regular interval.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r118",
                                    level: "Advanced",
                                    text: "vi. Confirmed cases of ILO labour rights violations in the operator's own operations are remediated, protecting the anonymity of the victims and ensuring documentation of processes. ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-3",
                            text: "The scheme requires the operator to ensure that there is no child labour in its own operations. (C138, C182)",
                            examples: [
                                "See glossary for definition of \"child labour\""
                            ],
                            requirements: [
                                {
                                    id: "r119",
                                    level: "Mandatory",
                                    text: "i. Child labour is prohibited.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r120",
                                    level: "Basic",
                                    text: "ii. The applicable minimum age thresholds of employees according ILO C138 are not violated.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r121",
                                    level: "Basic",
                                    text: "iii. There are restrictions on the hours of work for workers below 18 years. ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r122",
                                    level: "Basic",
                                    text: "iv. Work does not negatively impact the schooling of workers under the legal school-leaving age. (C182)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-4",
                            text: "The scheme requires the operator to ensure that there is no forced labour in its own operations (C105, C029)",
                            examples: [
                                "See glossary for definition of \"forced labour\""
                            ],
                            requirements: [
                                {
                                    id: "r123",
                                    level: "Mandatory",
                                    text: "i. Forced or compulsory labor is prohibited.(C105, C029)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-5",
                            text: "The scheme requires that the rights of all workers to freedom of association and collective bargaining are respected, free from interference. (C087, C098)",
                            examples: [
                                "See glossary for definition of \"collective bargaining\", \"freedom of association\""
                            ],
                            requirements: [
                                {
                                    id: "r124",
                                    level: "Mandatory",
                                    text: "i. All workers have the right to form, join or not join a labour union without fear of reprisal, intimidation or harassment. (C087)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r125",
                                    level: "Mandatory",
                                    text: "ii. All workers have the right to perform collective bargaining. (C098)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-6",
                            text: "The scheme requires fair remuneration of workers.",
                            examples: [
                                "• Payment based on objective appraisal can be based on, for example, hours worked and volume produced.",
                                "• See glossary for definition of \"collective bargaining\", \"living wage\", \"supply chain\"",
                                "• Examples of practices to be limited include employing temporary workers for permanent or ongoing tasks; not compensating curtailed days (by management or due to workplace incidents/injuries) as full days; voluntary wage deductions such as advance payments, union membership, or loans without written or verbal consent from the worker; wage deductions as a disciplinary measure; deductions for work-related to tools, equipment or gear (unless permitted by applicable law); in-kind benefits exceeding 30% of the total remuneration; piece-rate workers not guaranteed at least the minimum wage including benefits for all workers or temporary workers employed inappropriately for permanent or ongoing tasks."
                            ],
                            requirements: [
                                {
                                    id: "r126",
                                    level: "Mandatory",
                                    text: "i. The worker is paid at least a living wage or the wage negotiated through a collective bargaining agreement (whichever is higher).",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r127",
                                    level: "Basic",
                                    text: "ii. Work is compensated based on an objective appraisal of performance (C100).",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r128",
                                    level: "Basic",
                                    text: "iii. Workers are provided with proof of payment for each paycheck.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r129",
                                    level: "Advanced",
                                    text: "iv. Measures are taken to limit the reduction of workers’ pay and/or benefits.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r130",
                                    level: "Advanced",
                                    text: "v. A plan is established  for raising wages to living wage or beyond from members of the direct upstream supply chain.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-7",
                            text: "The scheme requires an effective grievance mechanism to be in place that enables stakeholders to raise concerns related to the operator's activities.",
                            examples: [
                                "• Complaints can relate to a variety of issues, and may be any measure or situation which concerns the relations between the operator and the worker or which affects or may affect the conditions of employment of one or several workers in the operation when that measure or situation contradicts an applicable collective agreement, law or regulation or otherwise.",
                                "• The grievance mechanism may be provided by the operator or by a third party.",
                                "• See glossary for definition of \"conflict resolution\", \"grievance mechanism\""
                            ],
                            requirements: [
                                {
                                    id: "r131",
                                    level: "Mandatory",
                                    text: "i. A grievance mechanism is in place that is easily accessible to all parties who may be adversely impacted by the operations.(R130)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r132",
                                    level: "Basic",
                                    text: "ii. All workers are aware of the rules and practices governing the grievance mechanism.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r133",
                                    level: "Basic",
                                    text: "iii. Grievances are solved in an effective, timely and appropriate manner, ensuring anonymity and confidentiality of complainants when requested, without risk of reprisal or intimidation.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r134",
                                    level: "Basic",
                                    text: "iv. A conflict resolution mechanism is in place that includes the option of access to independent legal and technical advice, the ability for complainants to choose individuals or groups to support them or act as observers, or the option of a third-party mediator. (R130)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r135",
                                    level: "Basic",
                                    text: "v. The worker who submitted a grievance is kept informed of the steps being taken under the procedure and the action taken on their grievance. (R130)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-8",
                            text: "The scheme requires a written disciplinary procedure.",
                            examples: [
                                "See glossary for definition of \"procedure\""
                            ],
                            requirements: [
                                {
                                    id: "r136",
                                    level: "Advanced",
                                    text: "i. A written disciplinary procedure is available.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r137",
                                    level: "Advanced",
                                    text: "ii. Records are kept of disciplinary procedures taken.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-9",
                            text: "The scheme requires fair contract practices.",
                            examples: [
                                "Contracts can include the following information: (a) job duties; (b) location of the job; (c) working hours; (d) pay rate and/or method of calculation; (e) overtime pay rate; (f) frequency or schedule of payment; (g) deductions and benefits provided such as in-kind benefits; (h) paid leave; (i) medical leave and protections in case of illness, disability or accident; and (j) notice period for contract termination. "
                            ],
                            requirements: [
                                {
                                    id: "r138",
                                    level: "Mandatory",
                                    text: "i. All employees have a written or oral contract.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r139",
                                    level: "Basic",
                                    text: "ii. The operator keeps records of the contracts.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r140",
                                    level: "Basic",
                                    text: "iii. All workers understand the content of their employment contracts prior to the start of employment and have ongoing access to their contract. ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r141",
                                    level: "Basic",
                                    text: "iv. Changes to the contract/employment terms document are recorded, communicated and accepted by the worker.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-10",
                            text: "The scheme requires the operator to ensure there is no discrimination of any kind, whether in employment or opportunity (C111, C100)",
                            examples: [
                                "See glossary for definition of \"discrimination\""
                            ],
                            requirements: [
                                {
                                    id: "r142",
                                    level: "Mandatory",
                                    text: "i. Work of equal value is remunerated with equal pay without discrimination. (C111, C100)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r143",
                                    level: "Basic",
                                    text: "ii. Workers have equal access to trainings, benefits and opportunities",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-11",
                            text: "The scheme requires the promotion of gender equality.",
                            examples: [
                                "• Examples of policies, processes and practices include records of internal equal opportunity policies; protocols and regulations; records of internal communication; records of worker exposure campaigns, applicable to e.g., recruitment, remuneration, and access to training, promotion and facilities.",
                                "• See glossary for definition of \"gender equality\", \"skilled positions\", \"equal opportunity\""
                            ],
                            requirements: [
                                {
                                    id: "r144",
                                    level: "Mandatory",
                                    text: "i. There are practices in place to ensure the safety of female workers as well as equality with male workers.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r145",
                                    level: "Basic",
                                    text: "ii. Recruitment operations to encourage women’s presence across the operations are promoted.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r146",
                                    level: "Advanced",
                                    text: "iii. An objective is set for female representation in management and skilled positions.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-12",
                            text: "The scheme requires that workers do not suffer from abuse, harassment, or violence. (C190)",
                            requirements: [
                                {
                                    id: "r147",
                                    level: "Basic",
                                    text: "i. Practices are in place to prevent all forms of abuse, harassement and violence. (C190)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-13",
                            text: "The scheme requires that employees are provided with opportunities to increase their skills and knowledge.",
                            examples: [
                                "Under this indicator, H&S training is not considered as vocational and/or occupational skills training."
                            ],
                            requirements: [
                                {
                                    id: "r148",
                                    level: "Basic",
                                    text: "i. Vocational and/or occupational skills training is provided.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r149",
                                    level: "Advanced",
                                    text: "ii. Training time is treated as work time and compensated accordingly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-14",
                            text: "The scheme requires that permanent workers are entitled to paid maternity leave, rights and benefits. (C183)",
                            requirements: [
                                {
                                    id: "r150",
                                    level: "Mandatory",
                                    text: "i. Right to maternity leave is ensured as defined by ILO C183.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r151",
                                    level: "Mandatory",
                                    text: "ii. Workers that have taken maternity leave can return to their job after leave on the same terms and conditions. (C183)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-15",
                            text: "The scheme requires provision of social security benefits.",
                            requirements: [
                                {
                                    id: "r152",
                                    level: "Basic",
                                    text: "i. Workers are provided with information on health topics, medical leave policies, and the availability of primary/maternal/reproductive health services of the operator.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r153",
                                    level: "Advanced",
                                    text: "ii. Workers' access to social security benefits such as healthcare, sickness benefits, retirement benefits, invalidity and death benefits is ensured.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-16",
                            text: "The scheme requires that only legitimate employment agencies and subcontractors are used.",
                            requirements: [
                                {
                                    id: "r154",
                                    level: "Advanced",
                                    text: "i. All contracted employment agencies and labour subcontractors used by the operator are legally authorised to operate and registered with labour authorities.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-LR-17",
                            text: "The scheme requires effective management of labour rights for subcontractors and subsidiaries as defined by the  Universal Declaration of Human Rights and the ILO Core Conventions.",
                            examples: [
                                "See glossary for definition of \"subcontractor\", \supply chain\", \"ILO Core Conventions\""
                            ],
                            requirements: [
                                {
                                    id: "r155",
                                    level: "Basic",
                                    text: "i. The scheme requires that subsidiaries and subcontractors are contractually required to uphold labor rights.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r156",
                                    level: "Advanced",
                                    text: "ii. The subsidiary/subcontractors have a policy on labour rights.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r157",
                                    level: "Advanced",
                                    text: "iii. Risk assessment on labour rights in supply chain is conducted regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r158",
                                    level: "Advanced",
                                    text: "iv. Mitigation measures based on risk assessment for labour rights are identified for supply chain.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r159",
                                    level: "Advanced",
                                    text: "v. The progress and effectiveness of the mitigation measures for the supply chain are monitored at a regular interval.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p31",
                    title: "Healthy and Safe Working Conditions",
                    criteria: [
                        {
                            id: "SOC-HS-1",
                            text: "The scheme requires effective management and documentation of H&S hazards and risks",
                            examples: [
                                "• See glossary for definition of \"incident\", \"lost-time accident\", \"hazard\"",
                                "• Examples of H&S hazards and risks to be assessed include occupational risks, environmental risks, heat stress, and pre-existing medical, mental and cognitive health issues.",
                                "• Examples of occupational ill health include acute, recurring, chronic health problems such as muscoskeletal disorders and skin and respiratory diseases."
                            ],
                            requirements: [
                                {
                                    id: "r160",
                                    level: "Mandatory",
                                    text: "i. A written H&S management plan is required.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r161",
                                    level: "Basic",
                                    text: "ii. The plan contains targets for improving the H&S of employees.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r162",
                                    level: "Basic",
                                    text: "iii. The plan is updated and progress is monitored regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r163",
                                    level: "Basic",
                                    text: "iv. H&S assessments are carried out regularly for all types of work on the premises.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r164",
                                    level: "Basic",
                                    text: "v. The results of the H&S assessment are communicated to employees in an accessible manner.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r165",
                                    level: "Basic",
                                    text: "vi. Employees are provided with the sufficient training and information to perform their job in a healthy and safe manner.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r166",
                                    level: "Basic",
                                    text: "vii. Cases of ill health that employees have developed due to their work tasks are recorded.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r167",
                                    level: "Basic",
                                    text: "viii. All incidents, non-fatal injuries and occupational fatalities are recorded.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r168",
                                    level: "Advanced",
                                    text: "ix. Workers who are exposed to conditions with a heightened H&S risk receive a medical examination at regular intervals.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r169",
                                    level: "Advanced",
                                    text: "x. Workers have access to the results of their medical examination.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r170",
                                    level: "Advanced",
                                    text: "xi. The number of lost-time accidents is lower than the sector average or a similar appropriate benchmark.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r171",
                                    level: "Advanced",
                                    text: "xii. An occupational H&S committee or individual, elected by the workforce, participates in or carries out regular occupational H&S reviews, and its findings and decisions are considered in the updating and implementation of the H&S risk assessment.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-HS-2",
                            text: "The scheme requires that health and safety are ensured on the work premises",
                            examples: [
                                "See glossary for definition of \"personal protective equipment\""
                            ],
                            requirements: [
                                {
                                    id: "r173",
                                    level: "Mandatory",
                                    text: "i. All workers are provided with required personal protective equipment (PPE) in good condition. (C155)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r174",
                                    level: "Basic",
                                    text: "ii. A system is implemented to enforce the effective use of PPE.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r175",
                                    level: "Basic",
                                    text: "iii. Workers may leave situations of imminent danger without being penalized. (C184;C155)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r176",
                                    level: "Basic",
                                    text: "iv. Machines have clear instructions on safe usage that can be understood by the workers, and dangerous parts are guarded or encased. (C184)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r177",
                                    level: "Basic",
                                    text: "v. Machinery and other equipment are stored safely when not in use. (C184)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-HS-3",
                            text: "The scheme requires that effective first aid and emergency responses are ensured on the work floor. (C155)",
                            requirements: [
                                {
                                    id: "r178",
                                    level: "Mandatory",
                                    text: "i. Injured or ill persons receive medical treatment.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r179",
                                    level: "Basic",
                                    text: "ii. A written emergency response procedure is established and communicated to workers in an accessible manner.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r180",
                                    level: "Basic",
                                    text: "iii. The accident and emergency procedure includes information on marked fire exits, evacuation maps, and emergency drills.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r181",
                                    level: "Basic",
                                    text: "iv. First aid supplies are available in central locations and checked for quality.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r182",
                                    level: "Basic",
                                    text: "v. Dedicated personnel are trained to use these first aid supplies, and are present during working hours.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r183",
                                    level: "Advanced",
                                    text: "vi. There is firefighting equipment and equipment to remediate spillage of materials.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r184",
                                    level: "Advanced",
                                    text: "vii. Dedicated personnel are trained to use the firefighting and spillage equipment, and are present during working hours.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-HS-4",
                            text: "The scheme requires that all workers have access to safe water and adequate sanitation facilities",
                            examples: [
                                "See glossary for definition of \"safe drinking water\""
                            ],
                            requirements: [
                                {
                                    id: "r185",
                                    level: "Mandatory",
                                    text: "i. Free and safe drinking water is provided to all workers.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r186",
                                    level: "Mandatory",
                                    text: "ii. Access is provided to free and safe water for e.g., hand washing, and skin cooling.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r187",
                                    level: "Mandatory",
                                    text: "iii. Access is provided to sufficient, clean and functioning toilet facilities.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-HS-5",
                            text: "The scheme requires that working hours allow the workers to safely and healthily carry out their work.",
                            examples: [
                                "• A way for workers to safely carry out their work includes safe and healthy work operations in accordance with ILO Convention 1.",
                                "• Adequate rest periods include: short breaks during working hours, sufficient breaks for meals, daily or nightly rest, weekly rest.",
                                "• Challenging conditions con include night work, adverse weather conditions etc."
                            ],
                            requirements: [
                                {
                                    id: "r188",
                                    level: "Mandatory",
                                    text: "i. Working hours allow the workers to safely carry out their work.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r189",
                                    level: "Basic",
                                    text: "ii. Adequate rest periods are provided (notwithstanding occasional exceptional circumstances).",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r190",
                                    level: "Basic",
                                    text: "iii. The scheme requires restrictions on hours of work for individuals working in challenging conditions.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r191",
                                    level: "Basic",
                                    text: "iv. Overtime is only permitted if it is voluntary and requested in a timely manner.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r192",
                                    level: "Basic",
                                    text: "v. Overwork is only permitted if the nature of the work and the workload allow work to be carried out without increased risk to safety and health.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r193",
                                    level: "Basic",
                                    text: "vi. A record of the number of regular hours and overtime hours of each worker is kept. (R116)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r194",
                                    level: "Advanced",
                                    text: "vii. Workers have safe transport home after work.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-HS-6",
                            text: "The scheme requires that if accommodation is provided to workers, it is safe, clean, and satisfies their basic needs.",
                            examples: [
                                "• The requirements stated in ILO R115 can be considered as inspiration. Examples of characteristics of clean, safe accommodation include access to clean food storage areas, designated dining areas, hand washing facilities (including soap), safe, potable water, and hygienic toilets, and where necessary protection (e.g. mosquito nets). Housing should have a sound roof, windows and doors to provide shelter to its residents.",
                                "• Examples of evidence that the operator may use to demonstrate legal rights and FPIC consultation include geographically referenced lists of participating communities and individuals; documentation of stakeholder consultation process;  reference to land title documents.",
                                "• Examples of valid dispute of land use rights include cases of past dispossession, forced abandonment or illegal action.",
                                "• See glossary for definition of \"consultation\",  \"Free, prior and informed consent\", \"Indigenous\", \"conflict resolution\""
                            ],
                            requirements: [
                                {
                                    id: "r195",
                                    level: "Basic",
                                    text: "i. If accommodation is provided, it meets local sanitary and regulatory standards.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r196",
                                    level: "Basic",
                                    text: "ii. If accomodation is provided, it satisfies basic needs  (e.g. shelter, access to drinking water, provision of sanitary, laundry and cooking facilities, possibility for children to attend schools)",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p32",
                    title: "Wellbeing of the Local Community",
                    criteria: [
                        {
                            id: "SOC-WLC-1",
                            text: "The scheme requires a substantiated legal and legitimate right to use the land and water.",
                            examples: [
                                "• Examples of evidence that the operator may use to demonstrate legal rights and FPIC consultation include geographically referenced lists of participating communities and individuals; documentation of stakeholder consultation process;  reference to land title documents.",
                                "• Examples of valid dispute of land use rights include cases of past dispossession, forced abandonment or illegal action.",
                                "• See glossary for definition of \"consultation\",  \"Free, prior and informed consent\", \"Indigenous\", \"conflict resolution\""
                            ],
                            requirements: [
                                {
                                    id: "r197",
                                    level: "Mandatory",
                                    text: "i. Land tenure rights are secure and registered according to legal requirements",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r198",
                                    level: "Mandatory",
                                    text: "ii. Where traditional land and water use rights are applicable, there is documented evidence of a FPIC consultation process.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r199",
                                    level: "Mandatory",
                                    text: "iii. Where traditional land and water use rights are applicable, there is documented evidence of a positive FPIC (i.e approval) from local stakeholders.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r200",
                                    level: "Basic",
                                    text: "iv. If the validity of the operator's use of the land and water is disputed, the operator (a) demonstrates its legitimate right to use the land and water; (b) conducts and ensures acceptance of a conflict resolution and remediation process; (c) engages in good faith in applicable legal processes; and (d)if the dispute involves indigenous peoples and local communities, follows a Free, prior, and informed consent (FPIC) process aligned with the UN Declaration on the Rights of Indigenous People (UNDRIP) or a more ambitious process.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-WLC-2",
                            text: "The scheme requires stakeholder mapping and establishing a stakeholder engagement plan.",
                            examples: [
                                "See glossary for definition of \"stakeholder\""
                            ],
                            requirements: [
                                {
                                    id: "r201",
                                    level: "Mandatory",
                                    text: "i. A stakeholder mapping is conducted, including the identification and prioritisation of stakeholders.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r202",
                                    level: "Mandatory",
                                    text: "ii. A written stakeholder engagement plan is established and implemented.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r203",
                                    level: "Basic",
                                    text: "iii. The stakeholder engagement plan contains targets and goals.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r204",
                                    level: "Basic",
                                    text: "iv. The stakeholder engagement plan is updated and progress is monitored regularly.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-WLC-3",
                            text: "The scheme requires engagement with nearby communities  that are likely to be affected by operations.",
                            examples: [
                                "See glossary for definition of \"stakeholder\""
                            ],
                            requirements: [
                                {
                                    id: "r205",
                                    level: "Mandatory",
                                    text: "i. The operator engages with communities within or near the premises that are likely to be affected by operations.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r206",
                                    level: "Mandatory",
                                    text: "ii. Stakeholders' concerns and interests related to operations are identified.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r207",
                                    level: "Basic",
                                    text: "iii. Stakeholders are informed about the possibility to file complaints.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-WLC-4",
                            text: "The scheme requires that impacts on local food security are pre-emptively identified and managed.",
                            examples: [
                                "See glossary for definition of \"food security\", \"Free, prior and informed consent\""
                            ],
                            requirements: [
                                {
                                    id: "r208",
                                    level: "Mandatory",
                                    text: "i. Procedures are in place to identify risks of the direct effects of land use change on local food security.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r209",
                                    level: "Mandatory",
                                    text: "ii. Where potential direct effects on local food security from land use change resulting from the operator's operations has been identified, free, prior and informed consent (FPIC) has been sought from local stakeholders.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r210",
                                    level: "Mandatory",
                                    text: "iii. Measures are taken to minimise impact on local food security.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r211",
                                    level: "Mandatory",
                                    text: "iv. Any direct land use change effects and their impact on local food security are documented.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-WLC-5",
                            text: "The scheme requires identification of potential impacts on water resources in the local community.",
                            examples: [
                                "See glossary for definition of \"water security\", \"Free, prior and informed consent\""
                            ],
                            requirements: [
                                {
                                    id: "r212",
                                    level: "Mandatory",
                                    text: "i. Procedures are in place to identify risks of the direct effects of operations on water availability, quantity, and quality in the local community.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r213",
                                    level: "Mandatory",
                                    text: "ii. Where potential direct effects on local water security resulting from the operator's operations has been identified, free, prior and informed consent (FPIC) has been sought from local stakeholders.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r214",
                                    level: "Basic",
                                    text: "iii. Any direct effects on local water security are documented.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r215",
                                    level: "Mandatory",
                                    text: "iv. Measures are taken to minimise impact on local water security.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Crop", "Forest"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-WLC-6",
                            text: "The scheme requires supporting local development.",
                            examples: [
                                "• Community development projects to which an organization can contribute can include, for example, (a) creating employment through expanding and diversifying economic activities and technological development; (b) social investments in wealth and income creation through local economic development initiatives; (c) expanding education and skills development programs; (d) promoting and preserving culture and arts; (e) providing and/or promoting community health services; (f) institutional strengthening of the community, its groups and collective forums, cultural, social and environmental programs and local networks involving multiple institutions.",
                                "• Local development should take place respecting local traditions and culture."
                            ],
                            requirements: [
                                {
                                    id: "r216",
                                    level: "Basic",
                                    text: "i. The operator engages in projects to support the local development of the communities it operates in.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r217",
                                    level: "Basic",
                                    text: "ii. Local suppliers are prioritised in the procurement policy when considering other suppliers with similar or equal characteristics.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r218",
                                    level: "Advanced",
                                    text: "iii. Hiring local candidates is prioritised when considering other candidates with similar skills, profile, and conditions.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p33",
                    title: "Wellbeing of Consumers",
                    criteria: [
                        {
                            id: "SOC-WCO-1",
                            text: "The scheme requires the operator to ensure that end users can provide feedback about its operations.",
                            examples: [
                                "The following evidence can be provided to ensure measures are taken to retrieve feedback from users: (a) evidence that a feedback mechanism is in place; (b) evidence that efforts are made to improve the feedback mechanism; (c) evidence that, if there are surveys related to customers satisfaction, actions are taken in response to the results of these surveys."
                            ],
                            requirements: [
                                {
                                    id: "r219",
                                    level: "Basic",
                                    text: "i. The operator ensures that users can provide feedback about its operations.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "SOC-WCO-2",
                            text: "The scheme requires risk assessment calculations of chemicals used in the product to ensure consumer safety. ",
                            requirements: [
                                {
                                    id: "r220",
                                    level: "Advanced",
                                    text: "i. Risk assessment calculations are performed for dermal, oral, and inhalative exposure routes.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "cat8",
            category: "Economic",
            principles: [
                {
                    id: "p34",
                    title: "Economic and Financial Viability",
                    criteria: [
                        {
                            id: "ECO-EF-1",
                            text: "The scheme requires a business plan to ensure economic viability.",
                            examples: [
                                "Business plans can include the revenue streams, a growth plan, and an operational action plan that projects the generation of financial resources for the future."
                            ],
                            requirements: [
                                {
                                    id: "r221",
                                    level: "Basic",
                                    text: "i. A business plan or another document exists articulating the long-term economic viability is established.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "ECO-EF-2",
                            text: "The scheme requires maintaining business records.",
                            requirements: [
                                {
                                    id: "r222",
                                    level: "Basic",
                                    text: "i. A documentation system exists with information on, for example, production volumes, sales revenues, expenses and profitability.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r223",
                                    level: "Basic",
                                    text: "ii. The documentation system is kept up to date and the data is stored for at least five years.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p35",
                    title: "Fair Business Practice",
                    criteria: [
                        {
                            id: "ECO-FBP-1",
                            text: "The scheme requires fighting against fraudulent, deceptive and dishonest practices within the organization.",
                            examples: [
                                "These fradulent, deceptive and dishonest practices include bribery, corruption, extortion, and embezzlement, including - but not limited to - promising, offering, giving, or accepting any improper incentives, monetary or otherwise. See glossary for definition of \"policy\", \"procedure\""
                            ],
                            requirements: [
                                {
                                    id: "r224",
                                    level: "Mandatory",
                                    text: "i. Policies/procedures are established prohibiting and measures are taken to combat fraudulent, deceptive and dishonest practices.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r225",
                                    level: "Mandatory",
                                    text: "ii. Potential risks for fraudulent, deceptive and dishonest practices are systematically identified.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r226",
                                    level: "Basic",
                                    text: "iii. Staff training on fair business practices relevant to their work is provided and a record is kept of the trainings.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "ECO-FBP-2",
                            text: "The scheme requires keeping records of any cases of fraudulent, deceptive or dishonest practices.",
                            requirements: [
                                {
                                    id: "r227",
                                    level: "Basic",
                                    text: "i. Record is kept of any lawsuits and results thereof related to fraudulent, deceptive or dishonest practices that have been brought against the organization or employees of the organization.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r228",
                                    level: "Basic",
                                    text: "ii. Record is kept of incidents where employees have been subject to disciplinary measures due to fraudulent, deceptive or dishonest behaviour.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r229",
                                    level: "Basic",
                                    text: "iii. Record is kept of incidents where contracts with business contracts were not renewed due to fair business practice breaches.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "ECO-FBP-3",
                            text: "The scheme requires that business relationships are based on written contracts.",
                            requirements: [
                                {
                                    id: "r230",
                                    level: "Advanced",
                                    text: "i. Written contracts or agreements exist of the business relationships with suppliers and buyers.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "p36",
                    title: "Economic Risk Management",
                    criteria: [
                        {
                            id: "ECO-RM-1",
                            text: "The scheme requires management of financial and economic risks.",
                            examples: [
                                "Financial and economic risks could be related to competition, capital availability, or assets of the operator."
                            ],
                            requirements: [
                                {
                                    id: "r231",
                                    level: "Basic",
                                    text: "i. Potential financial risks along with measures to address them are systematically identified.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "ECO-RM-2",
                            text: "The scheme requires minimising the operator's level of vulnerability.",
                            examples: [
                                "• Examples of strategic measures for supply shortage include maintaining ongoing business relationships with suppliers and ensuring access to alternative procurement channels.",
                                "• Examples of strategic measures for income generation include diversification of the products and/or services the organization offers where no buyer is responsible for a substantial part of annual income.",
                                "• Examples of strategic measures for financial liquidity include having sufficient number of (in)formal financing sources to maintain capital flow. (i.e., banks, micro-credit institutions, public social programmes, government transfers of cash).",
                                "• See glossary for definition of \"liquidity\""
                            ],
                            requirements: [
                                {
                                    id: "r232",
                                    level: "Advanced",
                                    text: "i. Procedures are in place to analyse the level of vulnerability of the operator e.g., to supply shortages, income generation, financial liquidity.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r233",
                                    level: "Advanced",
                                    text: "ii. Measures are taken to minimize the risks described.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    outcome: [
        {
            id: "cat9",
            category: "Measurable Progress of Operators",
            principles: [
                {
                    id: "p37",
                    title: "Measurable Progress of Operators",
                    criteria: [
                        {
                            id: "A.1",
                            text: "The scheme requires a systematic approach to address critical sustainability issues and monitors the approach's effectiveness to achieve the intended sustainability goals.",
                            requirements: [
                                {
                                    id: "A.1.1",
                                    text: "The scheme requires operators to systematically address critical sustainability issues by either:1. Developing a measurable, time-bound sustainability plan aligned with the organization's mission. The plan must address environmental, social, and economic dimensions, demonstrate progress toward sustainability goals OR 2. A structured risk mitigation framework that identifies key sustainability risks and outlines specific measures to address them Either approach should show how it has guided key decisions and outcomes.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme"],
                                    examples: [
                                        "Example of evidence:",
                                        "Requirements in the scheme documents (e.g. Requirements for Operators/Principle and Criteria document)"
                                    ],
                                },
                                {
                                    id: "A.1.2",
                                    text: "The scheme requires the operators to assess and demonstrate the effectiveness of the measures taken to meet the sustainability goals, by establishing (a) what needs to be monitored and measured; (b) the methods for monitoring, measurement, analysis and evaluation, as applicable, to ensure valid results; (c) when the monitoring and measuring shall be performed; and (d) when the results from monitoring and measurement shall be analyzed and evaluated.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme"],
                                    examples: [
                                        "Example of evidence:",
                                        "Requirements in the scheme documents (e.g. Requirements for Operators/Principle and Criteria document)"
                                    ],
                                },
                                {
                                    id: "A.1.3",
                                    text: "The operator management regularly monitors and reviews all activities and takes actions to continuously improve with respect to sustainability risks and/or environmental, social and economic sustainable development. ",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme"],
                                    examples: [
                                        "Support indicator A.1.1 and A.1.3"
                                    ],
                                },
                                {
                                    id: "A.1.4",
                                    text: "'The scheme monitors the implementation and effectiveness of risk mitigation measures and/or sustainability plans by operators. This process shall be an integral part of the auditing procedures.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme"],
                                    examples: [
                                        "Support indicator A.1.1 and A.1.3"
                                    ],
                                },
                                {
                                    id: "A.1.5",
                                    text: "The scheme has a clear impact assessment policy, utilize appropriate assessment tools, and demonstrate that these tools are actively used to inform decision-making for long-term sustainability outcomes.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme"],
                                    examples: [
                                        "Support indicator A.1.1 and A.1.3"
                                    ],
                                },
                                {
                                    id: "A.1.6",
                                    text: "The scheme shall conduct impact assessment focusing on impacts from sustainability hotspots in the value chain.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme"],
                                    examples: [
                                        "Support indicator A.1.1 and A.1.3"
                                    ],
                                },
                                {
                                    id: "Add-on-A-1",
                                    text: "The scheme requires the operator to conduct an initial screening or assessment to evaluate its baseline conditions. This assessment should provide a comprehensive understanding of the operator's starting point in terms of sustainability performance.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme"],
                                    examples: [
                                        "Add-on indicator",
                                        "Support indicator A.1.1 and A.1.3",
                                        "In many cases, improvements to meet the standard requirements are done before operators apply for certification. In the Explanation column, please explain what the initial assessment or screening by the CSL entails and list data points or information gathered through the initial screening or assessment."
                                    ],
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "cat10",
            category: "Measurable Progress of Certification Scheme and Label",
            principles: [
                {
                    id: "p38",
                    title: "Impact Monitoring of Own Scheme",
                    criteria: [
                        {
                            id: "B.1",
                            text: "The scheme clearly defines its impact in alignment with its mission and establishes a framework to achieve those impacts.",
                            requirements: [
                                {
                                    id: "B.1.1",
                                    text: "The scheme has a clear definition of their intended impacts in line with their mission.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "The scheme owner explicitly defines scheme's overall goals, e.g. the mission and vision, either in its statutes or in a separate statement (e.g. a mission statement). The scheme owner has publicly available performance indicators related to scheme goals.",
                                        "The objectives should be sustainability-defined, promoting responsible use of resources and improving environmental and/or socio-economic impacts."
                                    ],
                                },
                                {
                                    id: "B.1.2",
                                    text: "The scheme establishes causal pathways, theory of change or a similar framework that describe their intended impacts and how their intervention or strategies will lead to intended changes.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "This should be a documented strategy that the scheme has defined and uses to ensure that it meets its goals. This entails: clear goals, actions to achieve the goals, and a description of available/needed resources to execute the actions."
                                    ],
                                }
                            ]
                        },
                        {
                            id: "B.2",
                            text: "The scheme regularly measures their progress towards intended social, economic, and environmental impacts through performance, outcome, and impact evaluation.",
                            requirements: [
                                {
                                    id: "B.2.1",
                                    text: "Monitoring and evaluation procedure which contains indicators that the scheme uses to measure its outputs, outcomes, and impacts is made publicly available.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "See the following definition of outputs, outcomes, and impacts below (as stated in the report of ISEAL on Performance metrics for key sustainability issues)",
                                        "• Outputs The products, capital goods and services which result from an intervention; may also include changes resulting from the intervention which are relevant to the achievement of outcomes.",
                                        "• Outcomes The short-term and medium-term effects of an intervention on the sustainability issue in question.",
                                        "• Impacts  Long-term effects (direct or indirect, intended or unintended) on the sustainability issue produced as the result of an intervention.",
                                        "For ISO type I labels, the most relevant impact is usually introduced prior to the development of criteria by conducting a life cycle based impact study. The resulting criteria are developed to reduce these impacts. The design of this approach therefore also includes the measurement of impact and is eligible for a 'Fully'."
                                    ],
                                },
                                {
                                    id: "B.2.2",
                                    text: "The scheme conducts both performance monitoring and outcome evaluation annually.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "Indicator fulfilment",
                                        "A \"Fully\" rating is assigned if: The scheme conducts both performance monitoring and outcome evaluation on an annual basis. Evidence of this may include a monitoring and evaluation procedure, an annual impact report, or any relevant publications available on the scheme’s website. At a minimum, there should be documentation demonstrating that performance monitoring and outcome evaluation are carried out annually and made available to internal stakeholders.",
                                        "A \"Partial\" rating is assigned if: • The scheme conducts only one of the two activities (performance monitoring or outcome evaluation) annually; and/or • The frequency of either activity is less than once per year. ",
                                        "A \"Missing\" rating is assigned if: Neither performance monitoring nor outcome evaluation is conducted, or there is no available evidence to demonstrate these activities.",
                                        "Definitions See the following definition of performance monitoring and outcome evaluation (as stated in the ISEAL Impact Code of Good Practice)",
                                        "• Performance monitoring: A continuing function that uses systematic collection of data on specified indicators to provide indications of the extent to which outputs and short and medium term results are being achieved. (Adapted from OECD Glossary,2002). Examples of performance indicators: number of certificate holders, number of workers protected under the standard, amount of certified materials",
                                        "• Outcome evaluation: Systematic and objective in depth ex-post assessment of the short-term and medium-term results or effects from the implementation of a standards system. These studies seek to shed light on the extent to which standards system’s desired changes are occurring as well as why the system is or is not working. Unlike impact evaluations, outcome evaluations are not designed to draw conclusions about the extent to which an intervention can be attributed to the intervention of a standards system. Examples of indicators for outcome evaluations: GHG emissions, energy uses"
                                    ],
                                },
                                {
                                    id: "B.2.3",
                                    text: "The scheme conducts impact evaluation at least every 5 years.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "Impact Evaluation: A systematic, objective and in depth, ex-post assessment of the medium or long-term effects; positive or negative, intended or unintended, of the implementation of a standards system. Impact evaluations employ methodologies that are designed to enable evaluation users to understand the extent to which an observed change can be attributed to the standard system or another intervention. (Adapted from 3ie Impact Evaluation Glossary, 2012 and World Bank)",
                                        "• The frequency of impact evaluation (at least every 5 year) should be explicitly mentioned in the monitoring and evaluation procedure or other scheme documents.",
                                        "• There should be evidence that shows the scheme conducts impact evaluation every 5 years. Example of evidence: Impact Evaluation Report"
                                    ],
                                },
                                {
                                    id: "B.2.4",
                                    text: "The scheme quantitatively measures at least one indicator related to climate change every year. ",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "The purpose of this indicator is to evaluate how far the scheme has been able to measure its progress towards their intended impacts quantitatively.",
                                    ],
                                },
                                {
                                    id: "B.2.5",
                                    text: "The scheme quantitatively measures 2-3 indicators related to environmental, social, and economic impacts besides the climate change indicators.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "The purpose of this indicator is to evaluate how far the scheme has been able to measure its progress towards their intended impacts quantitatively.",
                                        "For Type I ecolabels, requirements on social and economic impacts are applicable if they cover these aspects."
                                    ],
                                }
                            ]
                        }
                    ]
                },
                {   
                    id: "p39",
                    title: "Procedure to Validate Impacts",
                    criteria: [
                        {
                            id: "C.1",
                            text: "The scheme conducts verification of impact monitoring data to ensure reliability and accuracy of the data.",
                            requirements: [
                                {
                                    id: "C.1.1",
                                    text: "The scheme has a clear procedure for verifying impact monitoring data, which includes: - what data is verified - where the data comes from - how data is verified - parties involved in verification",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "A \"Fully\" rating is assigned if the scheme has an explicit and publicly available procedure for verifying impact monitoring data that addresses all four key elements: - What data is verified - Where the data comes from - How the data is verified - Which parties are involved in the verification process",
                                        "A \"Partial\" rating is assigned if: - The procedure addresses fewer than all four elements; and/or - The procedure is not publicly available, but can be accessed upon reques",
                                        "A \"Missing\" rating is assigned if the scheme does not have a documented procedure for verifying impact monitoring data."
                                    ],
                                },
                                {
                                    id: "C.1.2",
                                    text: "Verification of impact monitoring data is conducted by independent parties.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "We seek to evaluate the extent to which the CSL owners ensure the accuracy and reliability of impact monitoring data and how independent the process is."
                                    ],
                                }
                            ]
                        },
                        {
                            id: "Add-on-C-2",
                            text: "In the case of establishing one-way or mutual recognition with other schemes, the scheme must implement monitoring and requirements for the recognized schemes. It should clearly define the scope of its own assessments versus those covered by the recognized standards and ensure that the impacts of third-party certification are adequately evaluated.",
                            requirements: [
                                {
                                    id: "Add-on-C-2",
                                    text: "In the case of establishing one-way or mutual recognition with other schemes, the scheme must implement monitoring and requirements for the recognized schemes. It should clearly define the scope of its own assessments versus those covered by the recognized standards and ensure that the impacts of third-party certification are adequately evaluated.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "Add-on indicator",
                                        "Not applicable if the scheme does not have one-way or mutual recognition with other schemes."
                                    ],
                                }
                            ]
                        }
                    ]
                },
                {   
                    id: "p40",
                    title: "Reporting or Demonstration of Impacts",
                    criteria: [
                        {
                            id: "D.1",
                            text: "The scheme publicly reports the monitoring and evaluation results.",
                            requirements: [
                                {
                                    id: "D.1.1",
                                    text: "The scheme shall publish a monitoring and evaluation report regularly which contains indicators that the scheme owner uses to measure its outputs and outcomes.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "See the following definition of outputs, outcomes, and impacts below (as stated in the report of ISEAL on Performance metrics for key sustainability issues)",
                                        "Outputs The products, capital goods and services which result from an intervention; may also include changes resulting from the intervention which are relevant to the achievement of outcomes.",
                                        "Outcomes The short-term and medium-term effects of an intervention on the sustainability issue in question.",
                                        "Ideally, reporting should be done annually; however, at a minimum, it should occur at regular intervals (e.g., bi-annually)."
                                    ],
                                },
                                {
                                    id: "D.1.2",
                                    text: "The report shall cover a management response that includes an explanation of the changes and improvements to the scheme that have been and will be made as a result.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"]
                                },
                                {
                                    id: "D.1.3",
                                    text: "The monitoring and evaluation report shall features quantitative results of monitoring indicators.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "At the minimum, quantitative results are presented for an indicator related to GHG emissions and 2-3 other indicators on environmental, social, or economic dimensions.",
                                        "For Type I ecolabels: The ecolabel shall publish quantitative results of the hotspot analysis as part of standard updates. The methodology must be transparently documented in the report, and if using literature review, the references must be up-to-date."
                                    ],
                                },
                                {
                                    id: "D.1.4",
                                    text: "If the monitoring and evaluation system has been established for more than two years, the monitoring and evaluation report shall features results on similar indicators every year to allow comparison of progress.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"]
                                },
                                {
                                    id: "D.1.5",
                                    text: "'The scheme publishes impact evaluation results.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "Impact Evaluation: A systematic, objective and in depth, ex-post assessment of the medium or long-term effects; positive or negative, intended or unintended, of the implementation of a standards system. Impact evaluations employ methodologies that are designed to enable evaluation users to understand the extent to which an observed change can be attributed to the standard system or another intervention. (Adapted from 3ie Impact Evaluation Glossary, 2012 and World Bank)"
                                    ],
                                }
                            ]
                        }
                    ]
                },
                {   
                    id: "p41",
                    title: "Continuous Improvement of Scheme",
                    criteria: [
                        {
                            id: "E.1",
                            text: "The standard revision process updates requirements or indicators, considering the progress made by operators in advancing the certification scheme or label's goals.",
                            requirements: [
                                {
                                    id: "E.1.1",
                                    text: "The scheme establishes and publishes a clear procedure on how the progress of operators in advancing the certification scheme and label goals is evaluated and how the feedback is fed into the standard revision.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"]
                                },
                                {
                                    id: "E.1.2",
                                    text: "Progress evaluation as part of the standard revision is conducted through quantitative assessment for at least one or ideally more sustainability dimensions.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "The aim of this indicator is to evaluate the extent to which the scheme is able to quantify progress over time and demonstrate measurable improvements, particularly in GHG emissions, throughout the value chain. ",
                                        "Note: For ISO type I labels, the most relevant impact is usually introduced prior to the development of criteria by conducting a life cycle based impact study. The resulting criteria are developed to reduce these impacts. Evaluation should therefore include a life cycle based impact study based on the performance of the operators."
                                    ],
                                }
                            ]
                        },
                        {
                            id: "F.1",
                            text: "The scheme incorporates the feedback from certification bodies and certification support consultant, policy makers, non-governmental organizations, other public entities, and the development in science to facilitate  learning and improvements of the standard.",
                            requirements: [
                                {
                                    id: "F.1.1",
                                    text: "The scheme establishes a clear and transparent feedback mechanisms to gather input from certification bodies, certification support consultants, non-governmental organizations, other public entities, policymakers as well as the development in science for standard revision. The procedure shall be made publicly available.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "Feedback from certification bodies and certification support consultants should reflect the lessons learned from audit or the implementation of supporting programs, whether conducted in preparation for certification or during the certification process.",
                                        "A \"Fully\" rating is granted if the scheme fulfills the following conditions: - the scheme collects feedback from all sources in the indicator (certification bodies, certification support consultants, non-governmental organizations, other public entities, policymakers as well as the development in science), AND - the procedure shall be made publicly available.",
                                        "A \"Partly\" rating is assigned if: - the scheme only collects feedback from some of the mentioned sources, and/or - the procedure is not made publicly available",
                                        "A \"Missing\" rating is assigned if: - the scheme does not collect feedback from the mentioned sources as part of the standard revision."
                                    ],
                                },
                                {
                                    id: "F.1.2",
                                    text: "The scheme shall regularly incorporate feedback from certification bodies, certification support consultants, policymakers, and the development in science to facilitate learning and improvements of the standards. The process shall be documented to ensure that the updated standard reflects the received feedback and the latest development, and shall be made publicly available.",
                                    responseOptions: [
                                        {label: "Fully", score: 2},
                                        {label: "Partly", score: 1},
                                        {label: "Missing", score: 0},
                                        {label: "Not Applicable", score: null}
                                    ],
                                    type: ["Scheme","Ecolabel"],
                                    examples: [
                                        "The scheme regularly feeds in the results of monitoring & evaluation in its internal processes (e.g. records of inclusion on the agenda of meetings, policy for when results are considered). Alternatively, the scheme owner shall at least annually communicate MEL activity findings, insights, and recommendations to the Board, executive leadership, standards committee, and staff overseeing risk management and all scheme components.",
                                        "Example of evidence: Evaluation reports or data about sustainability performance, scheme effectiveness, and unintended negative effects."
                                    ],
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export const glossary = [
    {
        theme: "Term",
        term: "4R principle for nutrient stewardship",
        definition: "4Rs; Right source, Right rate, Right time, Right place",
        references: [
          {
              label: "4R Principles (The Fertilizer Institute)",
              url: "https://www.tfi.org/insights/nutrient-stewardship/4r-principles/"
          }
        ]
    },
    {
        theme: "Term",
        term: "9R framework",
        definition: "The 9R framework proposes an order of priority among circularity strategies which is best on best environmental outcome. As a rule of thumb, the nine R framework puts foward the following prioritization: refuse, rethink, reduce, reuse, repair, refurbish, remanufacture, repurpose, recycle and recover.",
        references: [
            {
                label: "Potting, José; Worrell, Ernst; Hekkert, M. P. (2017): Circular Economy: Measuring innovation in the product chain. PBL Netherlands Environmental Assessment Agency. The Hague. ",
                url: "https://www.pbl.nl/sites/default/files/downloads/pbl-2016-circular-economy-measuring-innovation-in-product-chains-2544.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Abandoned land",
        definition: "Unused land, which was used in the past for the cultivation of food and feed crops but where the cultivation of food and feed crops was stopped due to biophysical or socioeconomic constraints",
        references: [
            {
                label: "COMMISSION DELEGATED REGULATION (EU) 2019/807",
                url: "https://eur-lex.europa.eu/eli/reg_del/2019/807/oj/eng"
            }
        ]
    },
    {
        theme: "Term",
        term: "Accountability",
        definition: "The obligation to demonstrate that the work has been carried out in accordance with the agreed rules and standards, or to report properly and accurately on the performance results to the commissioners. This may require a careful, even legally defensible, demonstration of the work's compliance with the terms of the contract.",
        references: [{ label: "IUCN, OECD" }]
    },
    {
        theme: "Term",
        term: "Accreditation",
        definition: "Third-party attestation related to a conformity assessment body (CAB) conveying formal demonstration of its competence to carry out specific conformity assessment tasks.",
        references: [{ label: "ISO/IEC 17000" }]
    },
    {
        theme: "Term",
        term: "Accreditation body",
        definition: "An organisation that assesses whether or not CABs are competent to carry out conformity assessments against specified standards. (ISO/IEC 17000:2004) Authoritative body that performs accreditation (Source: ISO/IEC 17011/2017). (RSB Glossary of Terms)",
        references: []
    },
    {
        theme: "Feedstock",
        term: "Agrarian and forestry residues",
        definition: "Residues that are directly generated by agriculture or forestry and that do not include residues from related industries or processing. Agricultural residues include, for example,  rice straw, wheat straw, rice husk, and corn stover, which are mostly left on the fields after harvests and used for fodder and landfill material or burnt. Forestry residues consist of branches, leaves, bark, and other portions of wood, among others.",
        references: [
            {
                label: "Encyclopedia of Materials: Science and Technology, 2001",
                url: "https://www.sciencedirect.com/topics/chemistry/agricultural-residues#:~:text=1.1%20Agricultural%20and%20Forestry%20Residues,and%20other%20portions%20of%20wood."
            }
        ]
    },
    {
        theme: "Term",
        term: "Assessor",
        definition: "A person appointed by an accreditation body to carry out, alone or as part of an assessment team, the assessment of a conformity assessment body.",
        references: [{ label: "ISO 17011" }]
    },
    {
        theme: "Term",
        term: "Assurance",
        definition: "Demonstrable evidence that specified requirements relating to a product, process, system, person or body are fulfilled.",
        references: [{ label: "ISEAL Credibility Principles, adapted from ISO 17000" }]
    },
    {
        theme: "Term",
        term: "Audit",
        definition: "Systematic, independent and documented process for obtaining audit evidence and evaluating it objectively to determine the extent to which the client meets the relevant standard. (ISO 9000) Systematic, independent and documented process for obtaining audit evidence and evaluating it objectively to determine the extent to which the audit criteria are fulfilled (Source: ISO 19011:2011). (RSB Glossary of Terms)",
        references: []
    },
    {
        theme: "Term",
        term: "Audit by third parties",
        definition: "Control activity performed by a person or body independent of the person or organisation providing the test object and of the user interests in that object.",
        references: [{ label: "Derived from ISO 17000" }]
    },
    {
        theme: "Term",
        term: "Bio-based",
        definition: "The term bio-based product refers to products wholly or partly derived from biomass, such as plants, trees or animals (the biomass can have undergone physical, chemical or biological treatment).",
        references: [{ label: "CEN/TC 411, EN 16575, published by CEN in August 2014" }]
    },
    {
        theme: "Term",
        term: "Bio-based product",
        definition: "Product wholly or partly derived from biomass. The bio-based product is normally characterized by the bio-based carbon content or the bio-based content.",
        references: [{ label: "InnProBio Glossary" }]
    },
    {
        theme: "Term",
        term: "Biodegradation",
        definition: "Degradation caused by biological activity, especially by enzymatic action, leading to a significant change in the chemical structure of a material.",
        references: [{ label: "CEN/TC 411 2014" }]
    },
    {
        theme: "Term",
        term: "Biological feedstock",
        definition: "Bio-waste and any biological feedstock from secondary raw materials from rural/urban/industrial activities.",
        references: [{ label: "HORIZON-CL6-2021-ZEROPOLLUTION-01-07" }]
    },
    {
        theme: "Term",
        term: "Biomass",
        definition: "Raw material of biological origin",
        references: [
            {
                label: "ISO 13065:2014 - Retrieved from ISO14021:1999/Amd1:2011, 3.1.1",
                url: "https://www.iso.org/standard/52528.html"
            }
        ]
    },
    {
        theme: "Phases of value chain",
        term: "Biomass Producer",
        definition: "A legal entity such as a farm operators and a plantation owner, which gathers biomass feedstock such as crops or woody material for conversion into an end product.",
        references: [
            {
                label: "RSB-STD-01-002 Glossary of Terms",
                url: "https://rsb.org/wp-content/uploads/2024/06/RSB-STD-01-002-v.1.5_RSB-Glossary-of-Terms.pdf"
            },
            {
                label: "SBP Glossary of Terms and Definitions",
                url: "https://sbpcert.wpenginepowered.com/wp-content/uploads/2019/03/SBP-Glossary-of-Terms-and-Definitions-v1.1-15Jan2019-FINAL.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Carbon neutrality",
        definition: "Also called having a \"net zero carbon footprint\". Refers to achieving net zero carbon emissions by balancing a measured amount of carbon released with an equivalent amount sequestered or offset.",
        references: [
            {
                label: "UNEP",
                url: "https://www.unep.org/news-and-stories/story/un-environment-walks-talk-carbon-neutrality"
            }
        ]
    },
    {
        theme: "Term",
        term: "Carbon sink",
        definition: "Any process, activity or mechanism which removes a greenhouse gas, an aerosol, or a precursor of a greenhouse gas from the atmosphere. ",
        references: [
            {
                label: "United Nations Framework Convention on Climate Change Article 1.8",
                url: "https://unfccc.int/files/essential_background/background_publications_htmlpdf/application/pdf/conveng.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Carbon stock",
        definition: "The absolute quantity of carbon held in a habitat pool at any specified time is the carbon stock or store",
        references: [
            {
                label: "European Environment Agency",
                url: "https://www.eea.europa.eu/publications/carbon-stocks-and-sequestration-rates"
            }
        ]
    },
    {
        theme: "Term",
        term: "Cascading use principle",
        definition: "Cascading use of biomass takes place when biomass is processed into a bio-based final product and this final product is utilised at least once more either for material use or energy.",
        references: [
            {
                label: "Carus, M.; Dammer, L. & Essel, R. (2015): \"Quo vadis, cascading use of biomass? Policy paper on background information on the cascading principle\"",
                url: "https://renewable-carbon.eu/publications/product/quo-vadis-cascading-use-of-biomass-%E2%88%92-full-version/"
            }
        ]
    },
    {
        theme: "Term",
        term: "Certificate",
        definition: "A document which demonstrates to the buyer that the supplier complies with certain standards.",
        references: [{ label: "FAO, 2003" }]
    },
    {
        theme: "Term",
        term: "Certification",
        definition: "A procedure by which a third party (independent certification body) gives written assurance that a product, process or service is in conformity with certain standards.",
        references: [{ label: "ISO, 1996" }]
    },
    {
        theme: "Term",
        term: "Certification report",
        definition: "Report on the certification evaluation process, certification evaluation findings and conclusions, and certification decision.",
        references: [{ label: "RSB Glossary" }]
    },
    {
        theme: "Term",
        term: "Certification scheme",
        definition: "The system of rules, procedures and management for carrying out certification, including the standards against which it is being certified.",
        references: [{ label: "FAO, 2003" }]
    },
    {
        theme: "Term",
        term: "Certification scheme (program)",
        definition: "Certification system related to specified products, to which the same specified requirements, specific rules and procedures apply",
        references: [{ label: "ISO/IEC 17065:2012 (RSB Glossary of Terms)" }]
    },
    {
        theme: "Term",
        term: "Certification system",
        definition: "Rules, procedures and management for carrying out certification.",
        references: [{ label: "ISO/IEC 17000:2004" }]
    },
    {
        theme: "Term",
        term: "Certifier",
        definition: "An individual or organization who assesses compliance of an entity against a standard or set of criteria, and issues a certificate if deemed successful.",
        references: [{ label: "Ecolabel Index Glossary" }]
    },
    {
        theme: "Term",
        term: "Chain of Custody",
        definition: "The custodial sequence that occurs as ownership or control of the material supply is transferred from one custodian to another in the supply chain.",
        references: [{ label: "adapted from: WB, WWF Alliance for Forest Conservation and Sustainable Use, 2002" }]
    },
    {
        theme: "Term",
        term: "Child labour",
        definition: "Work that deprives children of their childhood, their potential, and their dignity, and that is harmful to their physical and mental development. Child labour refers to work that is mentally, physically, socially or morally dangerous and harmful to children; and interferes with their schooling by depriving them of the opportunity to attend school; obliging them to leave school prematurely; or requiring them to attempt to combine school attendance with excessively long and heavy work.\n International standards set the general minimum age for admission to employment or work at 15 years (13 for light work) and the minimum age for hazardous work at 18 (16 under certain strict conditions). They provide for the possibility of initially setting the general minimum age at 14 (12 for light work) where the economy and educational facilities are insufficiently developed. Children between the ages of 13 and 15 years old may do light work. Light work is defined as work that is not likely to be harmful to a child’s health or development and does not interfere with attendance at school or participation in vocational orientation or training programmes or a child’s capacity to benefit from the instruction received.",
        references: [
            {
                label: "Accountability Framework Initiative;  ILO Convention 138, Article 7 (1973); ILO Recommendation 190; ISO 13065:2014; ILO Convention 138, Article 7",
                url: "https://accountability-framework.org/fileadmin/uploads/afi/Documents/Definitions_doc/Definitions-2020-5.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Circular economy",
        definition: "A systems solution framework that tackles global challenges like climate change, biodiversity loss, waste, and pollution. It is based on three principles, driven by design: eliminate waste and pollution, circulate products and materials (at their highest value), and regenerate nature.\n It is underpinned by a transition to renewable energy and materials. Transitioning to a circular economy entails decoupling economic activity from the consumption of finite resources. This represents a systemic shift that builds long-term resilience, generates business and economic opportunities, and provides environmental and societal benefits.",
        references: [
            {
                label: "Finding a common language — the circular economy glossary, Ellen MacArthur Foundation ",
                url: "https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/glossary"
            }
        ]
    },
    {
        theme: "Term",
        term: "Circular inflow",
        definition: "Secondary or non-virgin materials and primary or virgin renewable materials that come from regenerative production. Unsustainably managed renewable resources are not considered circular.",
        references: [
            {
                label: "Circular Transition Indicators v4.0 - Metrics for business, by business, World Business Council for Sustainable Development",
                url: "https://www.wbcsd.org/resources/circular-transition-indicators-v4/"
            }
        ]
    },
    {
        theme: "Term",
        term: "Claim",
        definition: "Written or pictorial statement about the sustainability attributes of a product, process, service or organisation. They can act as filters that provide people with information about the social and environmental attributes of a product or service, which can influence the decision to buy a particular product.",
        references: [{ label: "ISEAL Credibility Criteria, ISEAL challenge the label" }]
    },
    {
        theme: "Term",
        term: "Code of conduct (or Code of Ethics)",
        definition: "Voluntary expressions of commitment made by an organisation (private company, association of companies, NGOs, inter- government organizations) to influence its processes and activities for the benefit of the organisation itself and for the communities in which it operates, covering sustainability issues.",
        references: [{ label: "Adapted from OECD Working Papers on International Investment Codes of Corporate Conduct" }]
    },
    {
        theme: "Term",
        term: "Collective bargaining",
        definition: "All negotiations which take place between an employer, a group of employers or one or more employers’ organisations and one or more workers’ organisations for: (i) determining working conditions and terms of employment; and/or (ii) regulating relations between employers and workers; and/or (iii) regulating relations between employers or their organisations and a workers’ organisation or workers’ organisations.",
        references: [
            {
                label: "Accountability Framework Initiative",
                url: "https://accountability-framework.org/fileadmin/uploads/afi/Documents/Definitions_doc/Definitions-2020-5.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Compliance",
        definition: "State of an organization that meets prescribed specifications, contract terms, regulations or standards. Compliance obligations can arise from mandatory requirements, such as applicable laws and regulations, or voluntary commitments.",
        references: [{ label: "ASQ Quality Glossary, ISO 37101, Management system for sustainable development" }]
    },
    {
        theme: "Term",
        term: "Compliance audit",
        definition: "A compliance audit checks to see if the entity is still meeting the standard or set of criteria of an ecolabel, and is correctly using the label in its marketing.",
        references: [{ label: "Ecolabel Index Glossary" }]
    },
    {
        theme: "Term",
        term: "Composite product",
        definition: "A composite or multi-ingredient product is defined as one that includes more than one ingredient.",
        references: [{ label: "Rainforest Alliance 2020 Labeling and Trademarks Policy" }]
    },
    {
        theme: "Term",
        term: "Conflict resolution",
        definition: "The methods and process of dialogue building which promote the peaceful ending of social conflict in any setting, including between employees and businesses. The broader term “conflict management” involves a kind of proactive-reactive continuum. The proactive end of the spectrum involves fostering productive communication and collaboration among diverse interests, addressing the underlying causes of conflicts in order to prevent conflicts from recurring, developing trust and understanding in order to prevent conflicts. The reactive end of the spectrum includes approaches to managing conflicts that vary, by order of increasing collaborative consensus building level: negotiated rule-making; arbitration; mediation; facilitation; conciliation; and negotiation. The reactive approach of conflict management is used after the conflict has erupted and is referred to as conflict resolution.",
        references: [
            {
                label: "FAO (2014)",
                url: "https://www.fao.org/nr/sustainability/sustainability-assessments-safa/en/"
            }
        ]
    },
    {
        theme: "Term",
        term: "Conformity",
        definition: "Fulfilment of a need or expectation that is stated, generally implied, or obligatory.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Conformity assessment",
        definition: "A process which demonstrates whether a product, service, process, claim, system or person meets the relevant requirements. Such requirements are stated in standards, regulations, contracts, programmes, or other normative documents.",
        references: [{ label: "ISO Glossary" }]
    },
    {
        theme: "Term",
        term: "Conformity assessment body (CAB) / Certification body (CB)",
        definition: "Body that performs conformity assessment services and that can be the object of accreditation.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Consultation",
        definition: "Land spanning more than one hectares with trees higher than five metres and a canopy cover of more than 30 %, or trees able to reach those thresholds in situ",
        references: [
            {
                label: "DIRECTIVE (EU) 2018/2001 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 11 December 2018 on the promotion of the use of energy from renewable sources ",
                url: "https://eur-lex.europa.eu/eli/dir/2018/2001/oj/eng"
            }
        ]
    },
    {
        theme: "Term",
        term: "Corrective measures",
        definition: "Measures to eliminate the cause of a non-conformity and prevent its recurrence.",
        references: [{ label: "ISO 9000" }]
    },
    {
        theme: "Term",
        term: "Criterion",
        definition: "A requirement that describes what is to be assessed.",
        references: [{ label: "BS EN 16751:2016" }]
    },
    {
        theme: "Feedstock",
        term: "Crop",
        definition: "Vegetable biological organism used for biomass production and the biomass produced based on this plant.",
        references: [
            {
                label: "RSB Glossary of terms",
                url: "https://rsb.org/wp-content/uploads/2020/06/RSB-STD-01-002-v.1.5-RSB-Glossary-of-Terms.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Customer",
        definition: "Individual, company or other legal entity receiving products, goods or services from an operator.",
        references: [{ label: "RSB Glossary of Terms" }]
    },
    {
        theme: "Term",
        term: "Discrimination",
        definition: "The term discrimination includes (a) any distinction, exclusion or preference made on the basis of race, colour, sex, religion, political opinion, national extraction or social origin, which has the effect of nullifying or impairing equality of opportunity or treatment in employment or occupation; (b) such other distinction, exclusion or preference which has the effect of nullifying or impairing equality of opportunity or treatment in employment or occupation as may be determined by the individual concerned after consultation with representative employers’ and workers’ organisations and with other appropriate bodies.\n Any distinction, exclusion or preference in respect of a particular job based on the inherent requirements thereof shall not be deemed to be discrimination. Discrimination can be based on race, colour, gender identity, age, language, religion, property/ wealth, nationality, ethnic/social origin, caste, disability, pregnancy, indigeneity, union affiliation, political affiliation, marital/family status, personal relationships, health status, sexual orientation or other non-valid reasons that are irrelevant to the skills, capabilities, qualities and medical fitness for the job.",
        references: [
            {
                label: "ILO Convention C111, Article 1",
                url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312256"
            }
        ]
    },
    {
        theme: "Term",
        term: "E-LCA",
        definition: "A tool that forecasts potential environmental impacts of a product or service. This is possible by assessing all energy, water and raw material inputs, and all air, water and soil outputs, as well as co-products throughout the entire life cycle of a product or service.",
        references: [{ label: "Bioeconomy Smart Systems" }]
    },
    {
        theme: "Term",
        term: "Ecolabel",
        definition: "A label that conforms to the principles described in ISO 14020:2000 Environmental labels and declarations --General principles. The Type III Environmental Label is trademarked by a certification scheme and licensed for use on products and to promote products certified by a certification body accredited to the certification scheme.",
        references: []
    },
    {
        theme: "Term",
        term: "Ecological corridor",
        definition: "Areas of land and water that aim to maintain or restore ecological connectivity by allowing species to move, and natural processes to flow freely. A practical example of an ecological corridor is a a trip of vegetation used by wildlife, allowing movement between two areas.",
        references: [
            {
                label: "National Program for Ecological Corridors, Parks Canada",
                url: "https://parks.canada.ca/nature/science/conservation/corridors-ecologiques-ecological-corridors"
            },
            {
                label: "European Environment Agency Glossary",
                url: "https://www.eea.europa.eu/help/glossary/eea-glossary/ecological-corridor"
            }
        ]
    },
    {
        theme: "Term",
        term: "Emission factor",
        definition: "Rate of emission per unit of activity, output or input. E.g. a particular fossil fuel power plant has a CO2 emission factor of 0.765 kg/kWh generated.",
        references: [
            {
                label: "IPCC Fourth Assessment Report: Climate Change 2007",
                url: "https://archive.ipcc.ch/publications_and_data/ar4/wg3/en/annex1-ensglossary-e-i.html"
            }
        ]
    },
    {
        theme: "Term",
        term: "End-of-life product",
        definition: "Material with low economic value that the holder discards or intends or is required to discard and that was not primarily produced or intended for the production of advanced fuels or advanced products and has reached the end of its intended supply chain, as it has been consumed, used, spoiled etc.",
        references: [{ label: "RSB Glossary of Terms" }]
    },
    {
        theme: "Term",
        term: "Environmental labelling",
        definition: "Provides an indication of the environmental impact-related characteristics of a product, typically on the package containing the product.",
        references: [{ label: "OECD, 2006" }]
    },
    {
        theme: "Term",
        term: "Equal opportunity",
        definition: "Principle of non-discrimination which emphasizes that opportunities in education, employment, advancement, benefits and resource distribution, and other areas should be freely available to all citizens irrespective of their age, race, sex, religion, political association, ethnic origin, or any other individual or group characteristic unrelated to ability, performance, and qualification.",
        references: [
            {
                label: "FAO (2014)",
                url: "https://www.fao.org/nr/sustainability/sustainability-assessments-safa/en/"
            }
        ]
    },
    {
        theme: "Term",
        term: "EU Product Environmental Footprint",
        definition: "The Product Environmental Footprint (PEF) method is as a common way of measuring environmental performance. The PEF is an EU recommended Life Cycle Assessment (LCA) based method to quantify the environmental impacts of products (goods or services).\n The overarching purpose of PEF information is to reduce the environmental impacts of goods, services and organisations by taking into account supply chain activities. This purpose is achieved through the provision of detailed requirements for modelling the environmental impacts of the flows of material/energy and the emissions and waste streams associated with a product or an organisation throughout the life cycle.",
        references: [
            {
                label: "European Commission",
                url: "https://green-forum.ec.europa.eu/environmental-footprint-methods/pef-method_en"
            },
            {
                label: "European Commission",
                url: "https://eplca.jrc.ec.europa.eu/EnvironmentalFootprint.html"
            }
        ]
    },
    {
        theme: "Term",
        term: "Feedstock",
        definition: "Biomass product resulting from primary production.",
        references: [{ label: "RSB Glossary of Terms" }]
    },
    {
        theme: "Phases of value chain",
        term: "Final product producer",
        definition: " A legal entity conducting the final steps of processing to biofuels/bioliquids/biomaterials and/or valorise (processed) biomass for application in finished products.",
        references: [
            {
                label: "RSB-STD-01-002 Glossary of Terms",
                url: "https://rsb.org/wp-content/uploads/2024/06/RSB-STD-01-002-v.1.5_RSB-Glossary-of-Terms.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Food security",
        definition: "Food security is achieved when all people, at all times, have physical, social and economic access to sufficient, safe and nutritious food to meet their dietary needs and food preferences for an active and healthy life. Four dimensions of food security are commonly identified: food availability, food access, utilisation and stability.",
        references: [
            {
                label: "FAO (1996)",
                url: "https://www.fao.org/fileadmin/templates/faoitaly/documents/pdf/pdf_Food_Security_Cocept_Note.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Forced labour",
        definition: "All work or service that is exacted from any person under the menace of any penalty and for which the said person has not offered themselves voluntarily.",
        references: [
            {
                label: "ILO Convention 29",
                url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C029"
            }
        ]
    },
    {
        theme: "Feedstock",
        term: "Forest",
        definition: "Forests are lands of more than 0.5 hectares, with a tree canopy cover of more than 10 percent, which are not primarily under agricultural or urban land use. Forests are determined both by the presence of trees and the absence of other predominant land uses. The term specifically excludes trees planted primarily for agricultural production, for example in fruit plantations and agroforestry systems.",
        references: [
            {
                label: "FAO: Forest Resources Assessment 2000 On definitions of forest and forest change",
                url: "https://www.fao.org/4/ad665e/ad665e00.htm#TopOfPage"
            }
        ]
    },
    {
        theme: "Term",
        term: "Forest degradation",
        definition: "Structural changes to forest cover, taking the form of the conversion of: (a) primary forests or naturally regenerating forests into plantation forests or into other wooded land; or (b) primary forests into planted forests.",
        references: [
            {
                label: "EU Deforestation Regulation",
                url: "https://oeil.secure.europarl.europa.eu/oeil/en/document-summary?id=1741344#:~:text=The%20amended%20text%20defines%20'forest,primary%20forests%20into%20planted%20forests."
            }
        ]
    },
    {
        theme: "Term",
        term: "Fossil baseline",
        definition: "Lifecycle GHG emissions of the fossil comparator (e.g. fossil fuel) determined for a given (baseline) date.",
        references: [{ label: "RSB Glossary of Terms" }]
    },
    {
        theme: "Term",
        term: "Free, Prior, Informed Consent",
        definition: "Collective human right of Indigenous Peoples and Local Communities (IP/LC) to give or withhold their consent prior to the commencement of any activity that may affect their rights, land, resources, territories, livelihoods and food security.\n - Free: Consent is given by the affected IP/LC voluntarily without coercion, duress or intimidation.\n - Prior: The consent is given before the specified activity is authorised or commenced.\n - Informed: The consent is given after the IP/LC have received the relevant, timely and culturally appropriate information necessary to make a fully informed decision. Consent: The IP/LC take a collective decision to grant or withhold approval of each activity that may impact IP/LCs.",
        references: [
            {
                label: "Accountability Framework Initiative",
                url: "https://accountability-framework.org/fileadmin/uploads/afi/Documents/Definitions_doc/Definitions-2020-5.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Freedom of association",
        definition: "The right of workers and employers to create and join organisations of their choice freely and without fear of reprisal or interference. This includes the right to establish and affiliate to confederations and international organisations. ",
        references: [
            {
                label: "ILO Freedom of Association and Development",
                url: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@ed_norm/@declaration/documents/publication/wcms_160208.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Gender equality",
        definition: "When women and men enjoy equal rights, opportunities and entitlements in civil and political life.",
        references: [
            {
                label: "FAO (2014)",
                url: "https://www.fao.org/nr/sustainability/sustainability-assessments-safa/en/"
            }
        ]
    },
    {
        theme: "Term",
        term: "Grievance mechanism",
        definition: "Any routinised process through which grievances concerning business-related negative impacts to human rights or the environment can be raised, and remedy can be sought.",
        references: [
            {
                label: "Accountability Framework Initiative; UN Guiding Principles on Business and Human Rights",
                url: "https://accountability-framework.org/fileadmin/uploads/afi/Documents/Definitions_doc/Definitions-2020-5.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Harmonised Standards",
        definition: "A European standard developed by a recognised European Standards Organisation: CEN, CENELEC, or ETSI. It was created following a request from the European Commission to one of these organisations. European Standards are thereby under the responsibility of the European Standardisation Organisations (CEN, CENELEC, ETSI) and can be used to support EU legislation and policies.",
        references: [{ label: "Official Journal of the European Union" }]
    },
    {
        theme: "Term",
        term: "Hazard",
        definition: "A process, phenomenon or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation.",
        references: [
            {
                label: "Sendai Framework Terminology on Disaster Risk Reduction (UNDRR)",
                url: "https://www.undrr.org/terminology/hazard#:~:text=Definition%3A%20Hazard,economic%20disruption%20or%20environmental%20degradation."
            }
        ]
    },
    {
        theme: "Term",
        term: "Hazardous substances",
        definition: "Chemicals classified as health hazard statements according to GHS (Globally Harmonized System of Classification and Labelling of Chemicals)",
        references: [
            {
                label: "National Library of Medicine: GHS Classification (Rev.10, 2023) Summary",
                url: "https://pubchem.ncbi.nlm.nih.gov/ghs/#_haz"
            }
        ]
    },
    {
        theme: "Term",
        term: "High Carbon Stock Approach",
        definition: "Methodology that distinguishes forest areas for protection from degraded lands with low carbon and biodiversity values that may be developed.",
        references: [
            {
                label: "High Carbon Stock Approach",
                url: "https://highcarbonstock.org/"
            }
        ]
    },
    {
        theme: "Term",
        term: "High carbon stock areas",
        definition: "Land that had one of the following statuses in January 2008 and no longer has that status:\n (a) wetlands, namely land that is covered with or saturated by water permanently or for a significant part of the year;\n (b) continuously forested areas, namely land spanning more than one hectare with trees higher than five metres and a canopy cover of more than 30 %, or trees able to reach those thresholds in situ;\n (c) land spanning more than one hectare with trees higher than five metres and a canopy cover of between 10 % and 30 %, or trees able to reach those thresholds in situ.",
        references: [
            {
                label: "DIRECTIVE (EU) 2018/2001 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 11 December 2018 on the promotion of the use of energy from renewable sources",
                url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32018L2001"
            }
        ]
    },
    {
        theme: "Term",
        term: "High Conservation Value",
        definition: "Biological, ecological, social or cultural values which are considered outstandingly significant or critically important at the national, regional or global level. All natural habitats possess some inherent conservation values, including the presence of rare or endemic species, provision of ecosystem services, sacred sites or resources harvested by local residents. However, some values are more significant or critical than others, and it is the HCV approach which offers an objective way of identifying those values to be maintained or enhanced.\n The six High Conservation Values:\n (1) HCV 1 Species diversity\n (2) HCV 2 Landscape-level ecosystems, ecosystem mosaics and IFL\n (3) HCV 3 Ecosystems and habitats\n (4) HCV 4 Ecosystem services\n (5)HCV 5 Community needs\n (6) HCV 6 Cultural valueS",
        references: [
            {
                label: "HCV Common Guidance for Identification",
                url: "https://www.hcvnetwork.org/"
            }
        ]
    },
    {
        theme: "Term",
        term: "High-quality recycling",
        definition: "High-quality recycling preserves the characteristics of materials which make them most useful. This includes consideration of mechanical, chemical and organic recyclability of the bio-based product.\n The idea of ‘quality’ for secondary raw materials is captured by two interlinked concepts:\n (1) ‘Virgin-like’ secondary raw materials – how closely comparable the secondary raw materials from a recycling chain is to the virgin material originally used in the product being recycled. Subsequently, how substitutable the secondary raw materials is for virgin material with little or no detrimental impact on the final product.\n (2) ‘High value’ secondary raw materials – the extent to which secondary raw materials produced is of comparable value to virgin polymer, in terms of value to the user, and associated monetary value.",
        references: [
            {
                label: "Quality of recycling: Towards and operational definition (European Commission)",
                url: "https://publications.jrc.ec.europa.eu/repository/bitstream/JRC122293/final_quality_of_recycling_report.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Human Rights",
        definition: "Basic international standards aimed at securing dignity and equality for all. Every human being is entitled to enjoy them without discrimination. They include the right to life and liberty, freedom from slavery and torture, freedom of opinion and expression, the right to work and education.",
        references: [{ label: "Adapted from UNGP Guidelines on Business and Human Rights" }]
    },
    {
        theme: "Term",
        term: "Identification code",
        definition: "A sequence of numbers, letters or signs used as a unique reference to a batch or unit of separately packed, stored or processed product (e.g. sack, pack, net, load, batch).",
        references: [{ label: "RSB Standard" }]
    },
    {
        theme: "Term",
        term: "ILO Core Conventions",
        definition: "C029 - Forced Labour Convention, 1930 (No. 29)\n C087 - Freedom of Association and Protection of the Right to Organise Convention, 1948 (No. 87)\n C098 - Right to Organise and Collective Bargaining Convention, 1949 (No. 98)\n C100 - Equal Remuneration Convention, 1951 (No. 100)\n C105 - Abolition of Forced Labour Convention, 1957 (No. 105)\n C111 - Discrimination (Employment and Occupation) Convention, 1958 (No. 111)\n C138 - Minimum Age Convention, 1973 (No. 138)\n C155 - Occupational Safety and Health Convention, 1981 (No. 155)\n C182 - Worst Forms of Child Labour Convention, 1999 (No. 182)\n C187 - Promotional Framework for Occupational Safety and Health Convention, 2006 (No. 187)",
        references: [
            {
                label: "ILO Labour Standards - Conventions",
                url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12000:0::NO:::"
            }
        ]
    },
    {
        theme: "Term",
        term: "Impacts",
        definition: "Long-term effects (direct or indirect, intended or unintended) on the sustainability issue produced as the result of an intervention.",
        references: [{ label: "ISEAL Impact Code of Good Practice Version 2.0" }]
    },
    {
        theme: "Term",
        term: "Impact category",
        definition: "Class representing environmental issues of concern to which life cycle inventory analysis results may be assigned.",
        references: [{ label: "ISO 14040:2006" }]
    },
    {
        theme: "Term",
        term: "Incident",
        definition: "An unsafe occurrence arising out of or in the course of work where no personal injury is caused, or where personal injury requires only first-aid treatment.",
        references: [
            {
                label: "Report V(1): Recording and notifcation of occupational accidents and diseases and ILO list of occupational diseases",
                url: "https://webapps.ilo.org/public/english/standards/relm/ilc/ilc90/rep-v-1.htm"
            }
        ]
    },
    {
        theme: "Term",
        term: "Indicator",
        definition: "A quantitative, qualitative or binary variable that can be measured or described to assess an aspect of a defined criterion.",
        references: [{ label: "BS EN 16751:2016" }]
    },
    {
        theme: "Term",
        term: "Indigenous",
        definition: "Indigenous signifies someone who is intimately connected with the land where he lives, who has not arrived by immigration or is not in passage. The idea “indigenous” is necessarily relative. It often expresses a cultural or property claim.",
        references: [
            {
                label: "FAO (2003)",
                url: "https://www.fao.org/4/x2038e/x2038e0a.htm#:~:text=Indigenous%20signifies%20someone%20who%20is,a%20cultural%20or%20property%20claim."
            }
        ]
    },
    {
        theme: "Term",
        term: "Indirect land use change",
        definition: "Indirect land use change can occur when land previously devoted to food or feed production is converted to produce biofuels, bioliquids and biomass fuels. In that case, food and feed demand still needs to be satisfied, which may lead to the extension of agricultural land into areas with high carbon stock such as forests, wetlands and peat land, causing additional greenhouse gas emissions.",
        references: [
            {
                label: "European Commission Knowledge for Policy",
                url: "https://knowledge4policy.ec.europa.eu/glossary-item/indirect-land-use-change_en"
            }
        ]
    },
    {
        theme: "Phases of value chain",
        term: "Industrial processor",
        definition: "A legal entity that processes biomass and/or intermediates/semifinished products for further use in the supply chain.",
        references: [
            {
                label: "RSB-STD-01-002 Glossary of Terms",
                url: "https://rsb.org/wp-content/uploads/2024/06/RSB-STD-01-002-v.1.5_RSB-Glossary-of-Terms.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Inflows",
        definition: "Resources that enter the company, including materials, parts or products (depending on a company's position within the supply chain).",
        references: [
            {
                label: "Circular Transition Indicators v4.0 - Metrics for business, by business, World Business Council for Sustainable Development",
                url: "https://www.wbcsd.org/Programs/Circular-Economy/Metrics-Measurement/Resources/Circular-Transition-Indicators-v4.0-Metrics-for-business-by-business"
            }
        ]
    },
    {
        theme: "Term",
        term: "Inspection",
        definition: "Examination of a product design, product, process or installation and determination of its conformity with specific requirements or, on the basis of professional judgement, with general requirements.",
        references: [{ label: "ISO/IEC 17020:2012" }]
    },
    {
        theme: "Term",
        term: "International standard",
        definition: "A standard that is adopted by an international standardising/standards organisation and made available to the public.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Invasive species",
        definition: "Animals and plants that are introduced accidentally or deliberately into a natural environment where they are not normally found, with serious negative consequences for their new environment.",
        references: [
            {
                label: "Directorate-General for Environment",
                url: "https://health.ec.europa.eu/system/files/2016-11/glos4en200408_en_0.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "ISO",
        definition: "ISO (International Organization for Standardization) is an independent, non-governmental, international organization that develops standards to ensure the quality, safety, and efficiency of products, services, and systems",
        references: []
    },
    {
        theme: "Term",
        term: "Label",
        definition: "Any document, certificate or attestation confirming that the works, products, services, processes or procedures in question meet certain requirements.",
        references: [{ label: "Recitals 74, 75 and Articles 2, 43 of EU Directive 2014/24/EU" }]
    },
    {
        theme: "Term",
        term: "Label (certification)",
        definition: "A certification label is a label or symbol indicating that compliance with standards has been verified.",
        references: [{ label: "FAO, 2003" }]
    },
    {
        theme: "Term",
        term: "Label (environmental)",
        definition: "They identify products that have been produced in an environmentally friendly way.",
        references: [{ label: "Siegelklarheit, SSCT" }]
    },
    {
        theme: "Term",
        term: "Label (social)",
        definition: "They identify products that were produced in a socially responsible manner.",
        references: [{ label: "Siegelklarheit, SSCT" }]
    },
    {
        theme: "Term",
        term: "Labour rights",
        definition: "Fundamental and universal rights at work: Freedom of association, Collective bargaining, Abolition of forced or compulsory labour, Equality of opportunity and treatment in employment and occupation, Protection of children and young persons.",
        references: [{ label: "ILO Conventions" }]
    },
    {
        theme: "Term",
        term: "Land with high biodiversity value",
        definition: "Land that had one of the following statuses in or after January 2008, whether or not the land continues to have that status:\n a) primary forest and other wooded land, namely forest and other wooded land of native species, where there is no clearly visible indication of human activity and the ecological processes are not significantly disturbed;\n b) highly biodiverse forest and other wooded land which is species-rich and not degraded, or has been identified as being highly biodiverse by the relevant competent authority, unless evidence is provided that the production of that raw material did not interfere with those nature protection purposes;\n c) areas designated: (i) by law or by the relevant competent authority for nature protection purposes; or (ii) for the protection of rare, threatened or endangered ecosystems or species recognised by international agreements or included in lists drawn up by intergovernmental organisations or the International Union for the Conservation of Nature, unless evidence is provided that the production of that raw material did not interfere with those nature protection purposes;\n d) highly biodiverse grassland spanning more than one hectare that is: (i) natural, namely grassland that would remain grassland in the absence of human intervention and that maintains the natural species composition and ecological characteristics and processes; or (ii) non-natural, namely grassland that would cease to be grassland in the absence of human intervention and that is species-rich and not degraded and has been identified as being highly biodiverse by the relevant competent authority, unless evidence is provided that the harvesting of the raw material is necessary to preserve its status as highly biodiverse grassland.\n Nationally, regionally, or internationally legally protected areas including but not limited to those designated by any of the of the following: (a) The World Conservation Union “IUCN” Category I-IV protected areas; (b) Wetlands of International Importance designated under the Ramsar Convention; (c) World Heritage Sites designated under the UNESCO World Heritage Convention; (d) Biosphere Reserves designated under the UNESCO Man and the Biosphere Programme; (e) Other legally protected areas ; (f) Primary Forest, i.e. naturally regenerated forest, where there are no clearly visible indication of human activities and the ecological processes are not significantly disturbed, (g) Natural or non-natural highly biodiverse grassland; (e) Any other defined High Conservation value Area",
        references: [
            {
                label: "DIRECTIVE (EU) 2018/2001 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 11 December 2018 on the promotion of the use of energy from renewable sources; Protected Planet; Ramsar; UNESCO",
                url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32018L2001%20;%20http://www.protectedplanet.net%20;%20http://ramsar.wetlands.org%20;%20Http://whc.unesco.org/en/list%20;%20http://www.unesco.org/new/en/natural-sciences/environment/ecological-sciences/biosphere-reserves/"
            }
        ]
    },
    {
        theme: "Term",
        term: "Legal requirements",
        definition: "Any present or future law, regulation, directive, instruction, direction or rule of any competent authority including any amendment, extension or replacement thereof which is from time to time in force.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Life cycle",
        definition: "All consecutive and/or interlinked stages, including research and development to be carried out, production, trading and its conditions, transport, use and maintenance, throughout the existence of the product or the works or the provision of the service, from raw material acquisition or generation of resources to disposal, clearance and end of service or utilisation.",
        references: [{ label: "Recitals 74, 95, 96, 97 and Articles 2, 42, 67, 68 of EU Directive 2014/24/EU" }]
    },
    {
        theme: "Term",
        term: "Life Cycle Assessment (LCA)",
        definition: "The compilation and evaluation of the inputs, outputs and potential environmental impacts of a product system throughout its life cycle.",
        references: [{ label: "EN-ISO 14040:2006; EN-ISO 14044:2006" }]
    },
    {
        theme: "Term",
        term: "Life Cycle Costing (LCC)",
        definition: "Life-cycle costing is an award criterion which covers parts or all of the following costs over the life cycle of a product, service or works.",
        references: [{ label: "EU Directive 2014/24/EU" }]
    },
    {
        theme: "Term",
        term: "Lifecycle greenhouse gas emissions",
        definition: "Product life cycle emissions are all the emissions associated with the production and use of a specific product, from cradle to grave, including emissions from raw materials, manufacture, transport, storage, sale, use and disposal.",
        references: [
            {
                label: "Greenhouse Gas Protocol",
                url: "https://ghgprotocol.org/sites/default/files/standards_supporting/FAQ.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Living wage",
        definition: "The remuneration received for a standard workweek by a worker, and supplemented by other means of social protection, in a particular place sufficient to afford a decent standard of living for the worker and her or his family. Elements of a decent standard of living include food, water, housing, education, health care, transportation, clothing and other essential needs including provision for unexpected events. In the BMT, the living wage is defined as that determined by the Global Living Wage Coaltion for the region in question.",
        references: [
            {
                label: "Global Living Wage Coalition",
                url: "https://www.globallivingwage.org/"
            }
        ]
    },
    {
        theme: "Term",
        term: "Lost-time injury",
        definition: "When a worker is unable to present for their next scheduled workplace attendance due to a work-related injury.",
        references: [
            {
                label: "Australian government",
                url: "https://www.transparency.gov.au/publications/finance/asc-pty-ltd/asc-annual-report-2023/work-health%2C-safety-and-environment/lost-time-injuries"
            }
        ]
    },
    {
        theme: "Term",
        term: "LULUCF",
        definition: "Land use, land-use change and forestry. Land use and land-use changes can act either as sinks or as emission sources. It is estimated that approximately one-fifth of global emissions result from LULUCF activities. ",
        references: [
            {
                label: "United Nations Framework Convention on Climate Change",
                url: "https://unfccc.int/topics/land-use/workstreams/land-use--land-use-change-and-forestry-lulucf"
            }
        ]
    },
    {
        theme: "Term",
        term: "Monitoring",
        definition: "Systematic repetition of conformity assessment activities as a basis for maintaining the validity of the declaration of conformity. Monitoring activities of false claims and misuse of claims and labels to support quality assurance.",
        references: [{ label: "ISO 17000, ISEAL Assurance Code" }]
    },
    {
        theme: "Term",
        term: "Monitoring and evaluation system",
        definition: "An ongoing process through which an organisation draws conclusions about its contribution to intended outcomes and impacts. A monitoring and evaluation system consists of a set of interconnected functions, processes and activities, including systematic collection of monitoring data on specified indicators and the implementation of outcome and impact evaluations.",
        references: [{ label: "Alliance for Water Stewardship" }]
    },
    {
        theme: "Term",
        term: "Natural replenishing rate",
        definition: "Replenishment of a natural resource at a rate that is equal to or faster than the rate at which they are consumed.",
        references: [
            { 
                label: "Natural Resources Canada (adjusted)",
                url: "" 
            }
        ]
    },
    {
        theme: "Term",
        term: "Nonpoint source pollution",
        definition: "Contamination originated from various sources, including agricultural and stormwater runoff or debris blown into waterways from land.",
        references: [
            { 
                label: "Natural Resources Defense Council",
                url: "https://www.nrdc.org/stories/water-pollution-everything-you-need-know" 
            }
        ]
    },
    {
        theme: "Term",
        term: "Norm",
        definition: "A formal rule or standard laid-down by an authority (government, international standards organizations) that guides or mandates behaviour towards conformity.",
        references: [{ label: "Ecolabel Index Glossary" }]
    },
    {
        theme: "Term",
        term: "Operator",
        definition: "Individual or organization that has ownership or control of one or more parts of the supply chain.",
        references: [
            { label: "ISO 13065:2014"}
        ]
    },
    {
        theme: "Term",
        term: "Outcomes",
        definition: "Systematic and objective in depth ex-post assessment of the short-term and medium-term results or effects from the implementation of a standards system.\n These studies seek to shed light on the extent to which standards system’s desired changes are occurring as well as why the system is or is not working. Unlike impact evaluations, outcome evaluations are not designed to draw conclusions about the extent to which an intervention can be attributed to the intervention of a standards system.",
        references: [
            { label: "ISEAL Impact Code of Good Practice Version 2.0"}
        ]
    },
    {
        theme: "Term",
        term: "Outputs",
        definition: "The products, capital goods and services which result from an intervention; may also include changes resulting from the intervention which are relevant to the achievement of outcomes.",
        references: [
            { label: "ISEAL Impact Code of Good Practice Version 2.0"}
        ]
    },
    {
        theme: "Term",
        term: "Oversight",
        definition: "Assessment of an assurance provider’s demonstration of competence to carry out specific assurance tasks.",
        references: [{ label: "adapted from ISO 17000 and ISEAL, 2016" }]
    },
    {
        theme: "Term",
        term: "Peatland",
        definition: "Peatlands are wetland ecosystems where soils are dominated by peat. In peatlands net primary production exceeds organic matter decomposition as a result of waterlogged conditions, which leads to the accumulation of peat.",
        references: [
            { label: "2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories", url: "https://www.ipcc.ch/site/assets/uploads/2019/12/19R_V0_02_Glossary.pdf" }
        ]
    },
    {
        theme: "Term",
        term: "Performance monitoring",
        definition: "A continuing function that uses systematic collection of data on specified indicators to provide indications of the extent to which outputs and short and medium-term results are being achieved.",
        references: [{ label: "Adapted from: OECD Glossary, 2002" }]
    },
    {
        theme: "Term",
        term: "Personal Protective Equipment",
        definition: "Products that the user can wear or hold, to be protected against risks either at work, at home or whilst engaging in leisure activities.",
        references: [
            { label: "European Commission", url: "https://single-market-economy.ec.europa.eu/sectors/mechanical-engineering/personal-protective-equipment-ppe_en" }
        ]
    },
    {
        theme: "Term",
        term: "Plant protection products",
        definition: "Plant protection products are 'pesticides' that protect crops or desirable or useful plants. They are primarily used in the agricultural sector but also in forestry, horticulture, amenity areas and in home gardens. They contain at least one active substance and have one of the following functions: (1) Protect plants or plant products against pests/diseases, before or after harvest; (2) Influence the life processes of plants (such as substances influencing their growth, excluding nutrients); (3) Preserve plant products; (4) Destroy or prevent growth of undesired plants or parts of plants. They may also contain other components including safeners and synergists.",
        references: [
            { label: "Directorate-General for Health and Food Safety", url: "https://food.ec.europa.eu/plants/pesticides_en" }
    ]
    },
    {
        theme: "Term",
        term: "Point source pollution",
        definition: "Contamination originating from a single source. Examples include wastewater discharged by a manufacturer, oil refinery, or wastewater treatment facility, as well as contamination from leaking septic systems, chemical and oil spills, and illegal dumping.",
        references: [
            { label: "Natural Resources Defense Council", url: "https://www.nrdc.org/stories/water-pollution-everything-you-need-know" }
        ]
    },
    {
        theme: "Term",
        term: "Policy",
        definition: "A set of written guidelines intended to govern the actions of a company's managers and its other employees in specified situations.",
        references: [
            { label: "Oxford Dictionary of Business and Management; Oxford Reference", url: "https://www.oxfordreference.com/display/10.1093/acref/9780199684984.001.0001/acref-9780199684984-e-7459" }
        ]
    },
    {
        theme: "Term",
        term: "Precautionary approach",
        definition: "The precautionary approach shall be interpreted to mean being cautious when information is uncertain, unreliable or inadequate and that the absence of adequate scientific information shall not be used as a reason for postponing or failing to take conservation and management measures.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Preventive action",
        definition: "Action to eliminate the cause of a potential non-conformity or other undesirable potential situation.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Principle",
        definition: "Aspirational goal that governs decisions or behaviour.",
        references: [{ label: "BS EN 16751:2016" }]
    },
    {
        theme: "Term",
        term: "Procedure",
        definition: "Specified way to carry out an activity or a process. Procedures can be documented or not. When a procedure is documented, the term “written procedure” or “documented procedure” is frequently used. The document that contains a procedure can be called a “procedure document.”",
        references: [
            { label: "ISO 13065:2014 - ISO 9000:2005, 3.4.5"}
        ]
    },
    {
        theme: "Term",
        term: "Quality management system",
        definition: "The part of a management system that relates to the quality of a standard, organisation, product or service.",
        references: [{ label: "ISO 9000" }]
    },
    {
        theme: "Term",
        term: "Qualitative data",
        definition: "Data describing the attributes or properties that an object possesses. The properties are categorised into classes that may be assigned numeric values. However, there is no significance to the data values themselves, they simply represent attributes of the object concerned.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Quantitative data",
        definition: "Data expressing a certain quantity, amount or range. Usually, there are measurement units associated with the data.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Raw material",
        definition: "Primary or secondary material that is used to produce a product. Secondary material includes recycled material. Raw material also includes agricultural, forest and processing residues.",
        references: [
            { label: "ISO 13065:2014; ISO 14040:2006, 3.15"}
        ]
    },
    {
        theme: "Term",
        term: "Recycling",
        definition: "Any recovery operation by which waste materials are reprocessed into products, materials or substances whether for the original or other purposes. It includes the reprocessing of organic material but does not include energy recovery and the reprocessing into materials that are to be used as fuels or for backfilling operations.\n Recycling can involve mechanical, physical, chemical processes or biological processes or a combination of these processes. Not all resources should be recycled though, as hazardous substances can accumulate during successive cycles, increasing net toxicity.",
        references: [
            { label: "EU Waste Framework Directive", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32008L0098" },
            { label: "ISO 59004:2024 Circular economy — Vocabulary, principles and guidance for implementation", url: "https://www.iso.org/standard/80648.html" }
        ]
    },
    {
        theme: "Term",
        term: "Regenerative agriculture and forestry",
        definition: "Regenerative production provides biomass in ways that support positive outcomes for nature, which include but are not limited to healthy and stable soils, improved local biodiversity, improved air and water quality, as well as improved societal outcomes. The method and production systems that can achieve these outcomes are context-dependent – so there is no such thing as a 'regenerative practice' that works everywhere.\n In agriculture, there are different schools of thought that can be leaned on, including agroecology, organic, agroforestry, and conservation agriculture – as long as the emphasis is on those positive outcomes. This concept applies beyond land-based agriculture to aquatic farms and fisheries as well.\n In forestry, there are likewise several definitions for regenerative forestry. In general, regenerative forestry is a whole system approach, delivering benefits for climate, nature and people. The goal is to ensure that forests are diverse, resilient, adaptive, and support high levels of engagement people and delivering strong livelihoods.",
        references: [
            { label: "Finding a common language — the circular economy glossary, Ellen MacArthur Foundation", url: "https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/glossary" },
            { label: "The Regenerative Forestry Report, Soil Association", url: "https://www.soilassociation.org/media/23626/regenerative-forestry-report-final.pdf" }
        ]
    },
    {
        theme: "Term",
        term: "Remuneration",
        definition: "The term remuneration includes the ordinary, basic or minimum wage or salary and any additional emoluments whatsoever payable directly or indirectly, whether in cash or in kind, by the employer to the worker and arising out of the worker’s employment.",
        references: [
            { label: "C100 - Equal Remuneration Convention, 1951 (No. 100), International Labour Organization", url: "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312245" }
        ]
    },
    {
        theme: "Term",
        term: "Renewable energy",
        definition: "Energy derived from natural sources that are replenished at a higher rate than they are consumed. These include hydropower, solar energy, geothermal, marine energy, wind energy and bioenergy.",
        references: [
            { label: "United Nations (n.d.)", url: "https://www.un.org/en/climatechange/what-is-renewable-energy" },
            { label: "International Renewable Energy Agency (n.d.)", url: "https://www.irena.org/-/media/Irena/Files/Capacity-building-Statistics-Training/2-Overview-of-renewable-energy.pdf?rev=3e1570cd0acb4c6785bd4b7d10527930&hash=F7C800868B221FBBAC9A531E958DE072#:~:text=Energy%20that%20can%20be%20used,Chemical%20energy%20from%20biomass%20(biofuels)"}
        ]
    },
    {
        theme: "Term",
        term: "Requirement",
        definition: "Need or expectation that is stated, generally implied or obligatory, describing a desired performance level or target to be achieved. It can make specific demands on how that level/target should be reached. A requirement can be based on practice, processes/systems, and outcome.",
        references: [{ label: "adapted from UNE-EN ISO 37101:2022" }]
    },
    {
        theme: "Term",
        term: "Residue",
        definition: "A substance that is not the end product that a production process directly seeks to produce; it is not a primary aim of the production process and the process has not been deliberately modified to produce it. (EU Directive 2009/72/EC)\n There are two streams of residues:\n 1) Agricultural, aquaculture, fisheries and forestry residues: Residues that are directly generated by agriculture, aquaculture, fisheries and forestry and that do not include residues from related industries or processing.\n 2) (Process) residue: Substance that is not the end product(s) that a production process directly seeks to produce; it is not a primary aim of the production process and the process has not been deliberately modified to produce it.",
        references: []
    },
    {
        theme: "Term",
        term: "Review",
        definition: "Activity of reviewing a normative document to determine whether it should be reaffirmed, amended or withdrawn.",
        references: [{ label: "ISO Guide 2" }]
    },
    {
        theme: "Term",
        term: "Revision",
        definition: "Introduction of all necessary changes to the content and presentation of a normative document. The results of the revision are made available by the publication of a new edition of the normative document.",
        references: [{ label: "ISO Guide 2" }]
    },
    {
        theme: "Term",
        term: "Runoff",
        definition: "Runoff is the movement of water and any contaminants across the soil surface. Water running off the land towards canals, streams, rivers, and lakes can also move chemicals, such as pesticides and fertilizers. Pesticides may be moving with the runoff water if dissolved in the water or adsorbed to eroding soil particles.",
        references: [
            { label: "Center for Integrated Pest Management, North Carolina State University", url: "https://pesticidestewardship.org/water/runoff/" }
        ]
    },
    {
        theme: "Term",
        term: "S-LCA",
        definition: "A social and socio-economic Life Cycle Assessment (S-LCA) is a social impact (and potential impact) assessment technique that aims to assess the social and socio-economic aspects of products and their potential positive and negative impacts along their life cycle encompassing extraction and processing of raw materials; manufacturing; distribution; use; re-use; maintenance; recycling; and final disposal.",
        references: [{ label: "UNEP SETAC, 2009" }]
    },
    {
        theme: "Term",
        term: "Safe drinking water",
        definition: "Safe drinking water complies with the microbiological, physical, and chemical and other parameters established in applicable country legislation or, in their absence, the critical parameters defined by the World Health Organization.",
        references: [
            { label: "World Health Organisation", url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/water-safety-and-quality/drinking-water-quality-guidelines" }
        ]
    },
    {
        theme: "Term",
        term: "Scheme Management",
        definition: "Determines the objectives and scope of the scheme, as well as the rules for how the scheme will operate and the standards against which conformance will be assessed.",
        references: [{ label: "Adapted from the ISEAL Credibility Principles v1 June 2013" }]
    },
    {
        theme: "Term",
        term: "Scheme owner",
        definition: "Organisation that determines the objectives and scope of the standards system, as well as the rules for how the scheme will operate and the standards against which conformance will be assessed. It can be a voluntary standard-setting organisation, a company, a governmental authority, a trade association or another body.",
        references: [{ label: "Adapted from ITC Standards Map" }]
    },
    {
        theme: "Term",
        term: "Scope 1",
        definition: "Direct emissions occur from sources owned or controlled by the company.",
        references: [
            { label: "Greenhouse Gas Protocol", url: "https://ghgprotocol.org/sites/default/files/standards_supporting/FAQ.pdf" }
        ]
    },
    {
        theme: "Term",
        term: "Scope 2",
        definition: "Indirect emissions from the generation of purchased energy. The emissions resulting from the production of grid electricity are accounted for under Scope 2.",
        references: [
            { label: "Greenhouse Gas Protocol", url: "https://ghgprotocol.org/sites/default/files/standards_supporting/FAQ.pdf" }
        ]
    },
    {
        theme: "Term",
        term: "Scope 3",
        definition: "All indirect emissions (not included in scope 2) that occur in the value chain of the reporting company, including both upstream and downstream emissions.",
        references: [
            { label: "Greenhouse Gas Protocol", url: "https://ghgprotocol.org/sites/default/files/standards_supporting/FAQ.pdf" }
        ]
    },
    {
        theme: "Term",
        term: "Scope of certification",
        definition: "Specific activities and products for which certification is sought or has been granted.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Scoring elements",
        definition: "A list of matters that are to be taken into account when determining the performance score on an indicator; also the matters used in determining a scoring guidepost benchmark.",
        references: [{ label: "adapted from: MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Scoring guidepost",
        definition: "The benchmark level of performance established by the team in respect of each numeric score or rating for each indicator sub-criterion.",
        references: [{ label: "MSC-MSCI Vocabulary" }]
    },
    {
        theme: "Term",
        term: "Self-assessment",
        definition: "Statement issued by an organization, on behalf of itself, and based on its own determination, that states its status against specified conformance requirements of a standard.",
        references: [{ label: "Adapted from ISO 14001" }]
    },
    {
        theme: "Term",
        term: "Severely degraded land",
        definition: "Land that, for a significant period of time, has either been significantly alienated or presented significantly low organic matter content and has been severely eroded.",
        references: [
            { label: "DIRECTIVE (EU) 2018/2001 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 11 December 2018 on the promotion of the use of energy from renewable sources", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32018L2001" }
        ]
    },
    {
        theme: "Term",
        term: "Sewage",
        definition: "Sewage is the part of wastewater that is contaminated with feces or urine.",
        references: [
            { label: "UNEP", url: "https://www.unep.org/cep/wastewater-sewage-and-sanitation" }
        ]
    },
    {
        theme: "Term",
        term: "Single-ingredient product",
        definition: "A single-ingredient product is defined as a product that contains only one crop or ingredient.",
        references: [{ label: "Rainforest Alliance 2020 Labeling and Trademarks Policy" }]
    },
    {
        theme: "Term",
        term: "Skilled positions",
        definition: "Skilled positions are those allocated to workers who currently hold leadership/management, professional or technician/associate professional positions. Skilled labour is generally characterised by advanced education (college and higher), possession of knowledge and skills to perform complicated tasks, ability to adapt quickly to technology changes, and creative application of knowledge and skills acquired through training in their work. In essence, skilled workers are those directly and closely involved in the generation, development, spreading and application of knowledge.",
        references: [
            { label: "SKILLED LABOUR - A determining factor for sustainable growth of the nation policy brief (ILO)", url: "https://www.ilo.org/global/docs/WCMS_428969/lang--en/index.htm" }
        ]
    },
    {
        theme: "Term",
        term: "Sludge",
        definition: "Mud-like residue resulting from wastewater treatment. It can contain contaminants such as heavy metals or other chemicals, or pathogens.",
        references: [
            { label: "Directorate-General for Environment", url: "https://environment.ec.europa.eu/topics/waste-and-recycling/sewage-sludge_en" }
        ]
    },
    {
        theme: "Term",
        term: "Slurry",
        definition: "A watery mixture or suspension of insoluble (not dissolved) matter; a thin, watery mud or any substance resembling it (such as grit slurry or a lime slurry).",
        references: [
            { label: "Sacramento State University", url: "https://www.owp.csus.edu/glossary/slurry.php" }
        ]
    },
    {
        theme: "Term",
        term: "Sourcing",
        definition: "Process of buying goods and services from the international market across geopolitical boundaries. Sustainable sourcing refers to the integration of social, ethical and environmental performance factors into the process of selecting suppliers, services and goods.",
        references: [{ label: "ITC Standards Map, adapted from OECD definition" }]
    },
    {
        theme: "Term",
        term: "Stakeholder",
        definition: "An individual or group that has an interest in any decision or activity of an organisation. Stakeholders may include suppliers, internal staff such as employees and workers, seasonal or migratory workers, members, customers, shareholders, investors, consumers, regulators, local and regional communities.",
        references: [
            { label: "ISO 26000:2010"}
        ]
    },
    {
        theme: "Term",
        term: "Stakeholders",
        definition: "Persons, groups or organisations who are directly or indirectly affected by or who can affect an activity, but also includes people and organisations who have concerns about the activity, or who might be responsible agents.",
        references: [{ label: "RSB Glossary of Terms" }]
    },
    {
        theme: "Term",
        term: "Standards",
        definition: "Documented agreements containing technical specifications or other precise criteria to be used consistently as rules, guidelines or definitions, to ensure that materials, products, processes and services are fit for their purpose. (FAO, 2003)\n Technical specifications defining requirements for products, production processes, services or test-methods. These specifications are voluntary. They are developed by industry and market actors following some basic principles such as consensus, openness, transparency and non-discrimination. Standards ensure interoperability and safety, reduce costs and facilitate companies' integration in the value chain and trade.",
        references: [{ label: "European Commission website" }]
    },
    {
        theme: "Term",
        term: "Standard-setting Organisation",
        definition: "The organization responsible for creating and maintaining the set of criteria that makes up a standard.",
        references: [{ label: "Ecolabel Index Glossary" }]
    },
    {
        theme: "Term",
        term: "Subcontractor",
        definition: "A subcontractor is a person or entity that has been awarded by the general contractor the performance of part of the work or services of an existing contract entered between the general contractor and the (original) contracting party.",
        references: [
            { label: "Legal Information Institute (Cornell University)", url: "https://www.law.cornell.edu/wex/subcontractor" }
        ]
    },
    {
        theme: "Term",
        term: "Subsidiary",
        definition: "An undertaking controlled by a parent undertaking; a company whose capital includes a minimum holding of 20%.",
        references: [
            { 
                label: "Council Directive 90/435/EEC of 23 July 1990 on the common system of taxation of parent companies and subsidiaries of other Member States",
                url: "https://eur-lex.europa.eu/EN/legal-content/summary/common-taxation-of-parent-companies-and-their-subsidiaries.html"
            },
            { 
                label: "DIRECTIVE 2013/34/EU OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 26 June 2013 on the annual financial statements, consolidated financial statements and related reports of certain types of undertakings",
                url: "https://echa.europa.eu/support/getting-started/enquiry-on-reach-and-clp#:~:text=A%20substance%20is%20defined%20as,without%20affecting%20the%20stability%20of"
            }
        ]
    },
    {
        theme: "Term",
        term: "Substance",
        definition: "A chemical element and its compounds in the natural state or obtained by any manufacturing process, including any additive necessary to preserve its stability and any impurity deriving from the process used, but excluding any solvent which may be separated without affecting the stability of the substance or changing its composition.",
        references: [
            { label: "European Chemicals Agency", url: "https://echa.europa.eu/support/getting-started/enquiry-on-reach-and-clp#:~:text=A%20substance%20is%20defined%20as,without%20affecting%20the%20stability%20of" }
        ]
    },
    {
        theme: "Term",
        term: "Substances of very high concern",
        definition: "Chemical substance (or part of a group of chemical substances) concerning which it has been proposed that use within the European Union be subject to authorisation under the REACH Regulation. A substance may be proposed as an SVHC if it meets one or more of the following criteria: it is carcinogenic; it is mutagenic; it is toxic for reproduction; it is persistent, bioaccumulative and toxic; it is very persistent and very bioaccumulative; there is “scientific evidence of probable serious effects to human health or the environment which give rise to an equivalent level of concern.”",
        references: [
            { label: "ECHA Candidate list of substances of very high concern for Authorisation", url: "https://echa.europa.eu/candidate-list-table" }
        ]
    },
    {
        theme: "Term",
        term: "Substances that are carcinogenic, mutagenic or toxic to reproduction",
        definition: "Carcinogenic, mutagenic and reprotoxic substances (CMRs). Complete list can be found in Annex VI of the CLP Regulation (European Regulation(EC) No. 1272/2008).",
        references: [
            { label: "Annex VI of the CLP Regulation (European Regulation(EC) No. 1272/2008)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32008R1272" }
        ]
    },
    {
        theme: "Term",
        term: "Standards System",
        definition: "The collective of organisations responsible for the activities involved in the implementation of a standard, including standard-setting, capacity building, assurance, labelling, and monitoring and evaluation.",
        references: [{ label: "ISEAL Credibility Principles" }]
    },
    {
        theme: "Term",
        term: "Supply chain",
        definition: "Upstream supply chain of the product in scope of the certification.",
        references: []
    },
    {
        theme: "Term",
        term: "Supervision",
        definition: "Assessment of the competence of a conformity assessment provider to carry out specific conformity assessment activities. Supervision can be carried out by an accreditation body, as well as by the standard-setting organisation.",
        references: [{ label: "I ISEAL Assurance Code (adopted from ISO 17000)" }]
    },
    {
        theme: "Term",
        term: "Sustainability",
        definition: "Operating practices that meet the needs of present users without compromising the ability of future generations to meet their own needs. Sustainable practices support ecological, human, and economic health and vitality. ",
        references: [{ label: "UCLA Sustainability Committee, adapted from definition of UN World Commission on Environment and Development" }]
    },
    {
        theme: "Term",
        term: "Sustainability claim",
        definition: "A message used to set apart and promote a product, process, business or service with reference to one or more of the three pillars of sustainability (social, economic and/or environmental). Claims may be consumer facing or business to business. Claims which are not clear and accurate may provide the user with misleading or even false information. ",
        references: [{ label: "ISEAL Credibility Principles" }]
    },
    {
        theme: "Term",
        term: "Sustainability data",
        definition: "The data carrying the proof of meeting certain sustainability criteria, i.e. evidence that the material has originated from a source that has been ‘monitored’ or ‘certified’ against a sustainability standard, as distinct from commercial data.",
        references: [{ label: "ISEAL Alliance, Chain of custody models and definitions" }]
    },
    {
        theme: "Term",
        term: "Sustainability indicators",
        definition: "Quantitative and/or qualitative measures that aim to interrelate and assess different areas of social, environmental, economic, institutional, and territorial development.",
        references: [{ label: "Moreno-Pires, 2014" }]
    },
    {
        theme: "Term",
        term: "Sustainability standards (voluntary)",
        definition: "Voluntary guidelines used by producers, manufacturers, traders, retailers, and service providers to demonstrate their commitment to good environmental, social, ethical, and food safety practices.",
        references: [{ label: "UNFSS, 2012" }]
    },
    {
        theme: "Term",
        term: "Sustainable use",
        definition: "Use of resources in a way and at a rate that does not lead to the long-term degradation of the environment, thereby maintaining its potential to meet the needs and aspirations of present and future generations.",
        references: [{ label: "Glossary of terms to negotiators or MEAs, 2007" }]
    },
    {
        theme: "Term",
        term: "Third-party assurance",
        definition: "Assurance activity that is performed by a person or body that is independent of the person or organisation that provides the object of assurance and of user interests in that object ",
        references: [{ label: "adapted from: ISO 17000" }]
    },
    {
        theme: "Term",
        term: "Threshold",
        definition: "Scientific and/or official values, which should not be exceeded.",
        references: [{ label: "UNECE and FAO, 2017" }]
    },
    {
        theme: "Term",
        term: "Traceability",
        definition: "The ability to verify the history, location, or application of an item by means of documented recorded identification.",
        references: [{ label: "ISO, 1994" }]
    },
    {
        theme: "Term",
        term: "Traceability system",
        definition: "The methods and tools employed to record and follow the trail as products, parts, and materials come from suppliers and are processed and ultimately distributed as end products. May be electronic, but does not have to be.",
        references: [{ label: "adapted from: ISO 9001, 2005" }]
    },
    {
        theme: "Term",
        term: "Unused land",
        definition: "Areas which, for a consecutive period of at least 5 years before the start of cultivation of the feedstock used for the production of biofuels, bioliquids and biomass fuels, were neither used for the cultivation of food and feed crops, other energy crops nor any substantial amount of fodder for grazing animals.",
        references: [
            { label: "COMMISSION DELEGATED REGULATION (EU) 2019/807", url: "https://faolex.fao.org/docs/pdf/eur188157.pdf" }
        ]
    },
    {
        theme: "Term",
        term: "Transparency",
        definition: "Environment in which the objectives, framework, data and information of a policy are provided to stakeholders in a comprehensible, accessible, and timely manner.",
        references: [{ label: "ITC (adapted from OECD Procurement ToolBox)" }]
    },
    {
        theme: "Term",
        term: "Value chain",
        definition: "The entire sequence of activities or parties that provide or receive value in the form of products or services (e.g. suppliers, outsource workers, contractors, investors, R&D, customers, consumers, members).",
        references: [{ label: "ISO14001 CD2, 2013" }]
    },
    {
        theme: "Term",
        term: "Virgin biomass",
        definition: "Biomass that have not yet been used in the economy. These include both finite materials and renewable resources.",
        references: [
            { label: "Finding a common language — the circular economy glossary, Ellen MacArthur Foundation", url: "https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/glossary" }
        ]
    },
    {
        theme: "Feedstock",
        term: "Waste and residues",
        definition: "Waste: Any substance or object which the holder discards or intends or is required to discard; Residue: A substance that is not the end product(s) that a production process directly seeks to produce;it is not a primary aim of the production process and the process has not been deliberately modified to produce it.",
        references: [
            {
                label: "Directive 2008/98/EC of the European Parliament and of the Council of 19 November 2008",
                url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02008L0098-20180705"
            }
        ]
    },
    {
        theme: "Term",
        term: "Water withdrawal",
        definition: "Gross amount of water extracted from the resources for a given use. It includes conveyance losses, consumptive use and return flow.",
        references: [
            { label: "FAO (2014)", url: "https://www.fao.org/nr/sustainability/sustainability-assessments-safa/en/" }
        ]
    },
    {
        theme: "Term",
        term: "Wetland",
        definition: "Land that is covered with or saturated by water permanently or for a significant part of the year.",
        references: [
            { label: "Ramsar Convention on Wetlands", url: "https://www.ramsar.org/sites/default/files/documents/library/factsheet1_why_should_i_care_0.pdf" }
        ]
    }
]