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
                    title: "Standards content and structure",
                    criteria: [
                        {
                            id: "c1",
                            text: "The scheme owner makes consultation drafts and final versions of its standards freely available and easily accessible in the scheme’s official languages.",
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
                            id: "c2",
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
                    title: "Standard-setting process",
                    criteria: [
                        {
                            id: "c3",
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
                            id: "c4",
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
                    title: "Standards consultation",
                    criteria: [
                        {
                            id: "c5",
                            text: "Standards setting and update is subjected to public consultation.",
                            responseOptions: [
                                {label: "Yes (with min. number of rounds)", score: 2},
                                {label: "Yes (unspecified)", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Refers to sharing the standard document in the process of development of updates publicly, whereby stakeholders can openly comment on the standard document and share the opinions with the standard-setting organization.",
                                "The scheme owner holds public consultations that include:",
                                "• At least two rounds of input on initial standards development",
                                "• At least one round of input on standards revision.",
                                "The usual number of days required for consultation are of 30 (for new standards) or 60 days, as per ISEAL Standard-setting Code."
                            ]
                        },
                        {
                            id: "c6",
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
                            id: "c7",
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
                            id: "c8",
                            text: "The scheme owner ensures balanced participation of stakeholder interests in the consultation and decision-making processes.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner ensures participation by independent technical experts and encourages balanced participation by stakeholders in the standard development, revision, and approval process.Documented information on the voting procedure of the highest decision-making body responsible for the standard setting process specifies that all categories of stakeholders are represented.",
                                "The procedure shall also ensure that one stakeholder category is not able to dominate decision-making."
                            ]
                        },
                        {
                            id: "c9",
                            text: "The scheme owner ensures that procedures and guidance are in place for adaptation or interpretation of the standard to regional contexts.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "There are procedures in place to ensure that any adaptations of a scheme’s standard (e.g., for national or regional relevance, scale of enterprise, or for specific products or sectors) is developed through a multistakeholder consultation process.",
                                "Not applicable for schemes that develop different product standards based on a life-cycle and multi-criteria approach (ISO type I labels)",
                                "Either of the following:",
                                "• Information in the standard about how each of the requirements can be interpreted for application at a local level",
                                "• Procedure for development of a local adaptation of the standard including stakeholder consultation measures.",
                                "• The standard organization has country-specific standards",
                                "In case of ISO Type I labels or other process-based standards this is \"Not applicable\", as its approach does not allow for the recognition of local contexts."
                            ]
                        },
                        {
                            id: "c10",
                            text: "The scheme owner provides information on how the input received from stakeholder consultations has been included in the final version of the standard.",
                            responseOptions: [
                                {label: "Yes, fully", score: 2},
                                {label: "Yes, partially", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner provides information on how the input received from stakeholder consultations has been included, making all comments received in a non-attributable way in the consultations publicly available (or at a minimum accurate summaries of these comments), with the final version of the standard through:",
                                "• documentation of collected feedback from previous public consultations, and/or ",
                                "• a statement on how the collected feedback was used for the setting or revision of the Standard."
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
                    title: "Assurance system",
                    criteria: [
                        {
                            id: "c11",
                            text: "The scheme owner outlines specified requirements for Conformity Assessment Bodies (CABs) to assess compliance with the standard.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme provides a documented methodology describing requirements for Conformity Assessment Bodies (CABs) and the assessment procedures (e.g. audit procedures or testing and verification methods).",
                                "These are verified as part of the accreditation process by the accreditation body."
                            ]
                        },
                        {
                            id: "c12",
                            text: "The scheme owner ensures that there is a publicly available description of the consistent methodology used to assess complaince with the standard.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Certification processes are conducted according to consistent methodologies.",
                                "Refers to the summary of assessment process undertaken in granting or denying licence or certificate to operating unit: ",
                                "• Type(s) of assessment employed",
                                "• How clients are assessed, how often and by whom, and the basis for decisions",
                                "• Scoring system, applicability of criteria, etc."
                            ]
                        },
                        {
                            id: "c13",
                            text: "The scheme owner requires CABs to have a documented complaints mechanism in place for compliance decisions.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 2},
                                {label: "Yes (on request)", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The complaints resolution procedure defines:",
                                "• Clear steps, timelines and responsibilities to resolve the complaint",
                                "• In what form and to whom a complaint needs to be submitted"
                            ]
                        },
                        {
                            id: "c14",
                            text: "The scheme owner ensures that summary certification/verification reports are made available.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 2},
                                {label: "Yes (on request)/ Confidential", score: 1},
                                {label: "No, no reports", score: 0}
                            ],
                            examples: [
                                "The scheme owner defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual. The report should be made available in a UN and local language.",
                                "At least basic information about the results of assessments of clients and assurance providers, that includes, at a minimum, information about the client's assurance status should be provided.",
                                "For schemes where assessment reports are not publicly available online, summary reports are available from CAB upon request (request to verify availability). If assessment reports cannot be shared by the scheme or by CABs due to confidentiality, it is \"confidential\". If no assessment reports are written at all, it is \"No, no reports\"."
                            ]
                        }
                    ]
                },
                {
                    id: "p5",
                    title: "Conformity assessment",
                    criteria: [
                        {
                            id: "c15",
                            text: "Minimum level of conformity assessment allowed by the scheme owner.",
                            responseOptions: [
                                {label: "3rd party", score: 1},
                                {label: "2nd party or 1st party", score: 0}
                            ],
                            examples: [
                                "The most independent level is the 3rd party audit (independent from the client). The 1st party is a self-assessment and the 2nd party is done by an interested stakeholder (e.g. an industry or trade association or NGO).",
                                "The scheme owner defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual."
                            ]
                        },
                        {
                            id: "c16",
                            text: "The scheme owner requires CABs to have a procedure in place for how clients are required to address non-conformities, including when a certificate or license is suspended or revoked.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual",
                                "The procedure specifies how different degrees of non-conformity (if applicable) are to be addressed and remediated, verifying corrective actions arising from non-compliances and allowing for appeals of non-compliances, in order to support consistency between CABs.",
                                "The procedure also specifies the conditions under which certification / the licence may be suspended or withdrawn, partially or in total, for all or part of the scope of certification / the licence."
                            ]
                        }
                    ]
                },
                {
                    id: "p6",
                    title: "Conformity assessment bodies",
                    criteria: [
                        {
                            id: "c17",
                            text: "The scheme owner requires CABs to be compliant with and accredited according to ISO/IEC 17065, ISO/IEC 17021 or ISO/IEC 17020.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner defines quality requirements:",
                                "• In certification requirements/methodologies",
                                "• In the contract/agreement between the scheme owner and the CAB",
                                "• In a separate accreditation manual"
                            ]
                        },
                        {
                            id: "c18",
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
                            id: "c19",
                            text: "The scheme owner requires specific qualifications and competencies for auditors of conformity assessment bodies (CABs).",
                            responseOptions: [
                                {label: "Yes, examination included", score: 2},
                                {label: "Yes, no examination", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner has guidance specifying qualifications and competence criteria for CABs or requires that CABs have these set out.",
                                "The scheme owner also performs examinations for auditors."
                            ]
                        },
                        {
                            id: "c20",
                            text: "The scheme owner maintains or requires CABs to maintain a publicly accessible list of certified products/product groups.",
                            responseOptions: [
                                {label: "Yes, incl. scope of certificate or license", score: 2},
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "A system to show the enterprises producing certified/ verified products is publicly available (for example in a database or by uploaded lists).",
                                "This system shall be up-to-date and complete (managed by the scheme owner or outsourced to the ABs or CABs). If the management system is outsourced to the ABs or CABs, this is required and described in the contract/agreement between the scheme owner and the AB/CAB, in a separate accreditation manual or for example in certification requirements/methodologies. As a minimum, the certification body shall provide information, upon request, about the validity of a given certification."
                            ]
                        }
                    ]
                },
                {
                    id: "p7",
                    title: "Auditing",
                    criteria: [
                        {
                            id: "c21",
                            text: "The scheme owner has or requires CABs to have documented procedures for reliable auditing methods.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner/CAB shall have clear procedures that describe how audits are planned, conducted and reported on.",
                                "Examples of evidence:",
                                "• Requirements in the contract/agreement between the Scheme Owner and the certification body, in a separate accreditation manual or for e.g. in certification requirements/methodologies",
                                "• Guidance interpretation specifying auditing methods and risk factors, in order to support consistency between certification bodies"
                            ]
                        },
                        {
                            id: "c22",
                            text: "The scheme owner defines or requires CABs to define frequency of a full audit process.",
                            responseOptions: [
                                {label: "At least every 2 years", score: 2},
                                {label: "3 years or more", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme owner/CAB defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual.",
                                "This question refers to external audits. In a full audit process, all requirements of the standard and the whole system of the client that is to be assessed are verified."
                            ]
                        },
                        {
                            id: "c23",
                            text: "The scheme owner defines the type of activities CABs are required to undertake during a full audit.",
                            responseOptions: [
                                {label: "Field visit (incl. office visit & doc. review)", score: 2},
                                {label: "Document review (off-site or onsite) only", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme owner defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual."
                            ]
                        },
                        {
                            id: "c24",
                            text: "The scheme owner or CAB require initial audits of new participants to always be on-site.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner/CAB defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual."
                            ]
                        },
                        {
                            id: "c25",
                            text: "The scheme owner requires or allows CABs to do unscheduled audits.",
                            responseOptions: [
                                {label: "Required", score: 2},
                                {label: "Allowed", score: 1},
                                {label: "Not allowed", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The Scheme Owner defines this requirement for certification bodies to conduct unscheduled (without significant advance warning) or surprise audits.",
                                "The scheme owner/CAB defines this requirement in certification requirements/methodologies, or in the contract/agreement between the scheme owner and the AB, or in a separate accreditation manual."
                            ]
                        },
                        {
                            id: "c26",
                            text: "The scheme owner ensures or requires CABs to ensure consistency in audit report formats. ",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner/CAB defines this requirement with a system for quality control.",
                                "Examples of evidence:",
                                "• Contract/agreement between the Scheme Owner and thecertification body/CAB, certification requirements/methodologies",
                                "• Guidance specifying formats for audit reports and reporting, mandatory audit templates",
                                "• Review online audit reports for consistency of report format and reporting, Scheme Owner quality management system for review of audit reports"
                            ]
                        }
                    ]
                },
                {
                    id: "p8",
                    title: "Oversight mechanism",
                    criteria: [
                        {
                            id: "c27",
                            text: "The scheme owner requires a documented oversight of assurance activities and assurance providers.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "There is an oversight function that is independent of the assurance programme and that evaluates implementation of that programme to ensure its consistent and competent implementation.",
                                "The scheme owner documents the requirement for a documented oversight mechanism in a contract/agreement between the scheme owner and an AB or Oversight Body, in a separate Oversight manual or for example in certification requirements/methodologies."
                            ]
                        },
                        {
                            id: "c28",
                            text: "The scheme owner requires oversight bodies to have a publicly available documented complaints mechanism in place for compliance decisions.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Only applicable if scheme has an accreditation/oversight mechanism, and if the scheme is not owned by the government, and if the scheme is not based on a life cycle and/or multicriteria approach.",
                                "The complaints resolution mechanism procedures define:",
                                "• Clear steps, timelines and responsibilities to resolve the complaint",
                                "• In what form and to whom a complaint needs to be submitted"
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
                            id: "c29",
                            text: "The scheme owner has a documented Chain of Custody (CoC) standard or other traceability requirements for checking product flow between links of the supply chain.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 2},
                                {label: "Yes, on request", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Either of the following:",
                                "• A CoC standard document which provides a description of its chain of custody approach",
                                "• A description of other measures to collect and analyze data from suppliers in order to trace back different certified inputs across different supply chain entities (e.g. data sheets)"
                            ]
                        },
                        {
                            id: "c30",
                            text: "The scheme owner requires all enterprises that are physically handling the certified product to undergo a CoC audit if the product can be destined for retail sale as a certified, labeled product.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Only applicable if claims are made regarding the origin of certain ingredients or products (CoC is required; applicable to certain CoC models)",
                                "All enterprises that physically handle the certified product are to undergo a CoC audit.",
                                "This shall be in the form of a written requirement as part of the certification requirements. Possibly review scope of certificates, if available online."
                            ]
                        },
                        {
                            id: "c31",
                            text: "The scheme owner defines procedures for CoC certification of multiple sites of one or several legal entities.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Only applicable if there is multiple-site CoC certification, OR if the scheme owner allows Chain of Custody of multi-sites.",
                                "The scheme owner defines procedures that ensure all sites comply with the CoC certification requirements. Control can include direct ownership, franchises, or where the entity has a signed agreement or contract with each site.",
                                "The scheme owner defines procedure for multi-sites (under control of one or more entities) and requirements for internal control management system.",
                                "Example of evidence:",
                                "• CoC standard, guidance or checklist specifying procedure and internal control system."
                            ]
                        },
                        {
                            id: "c32",
                            text: "The scheme owner requires subcontractors to meet the CoC requirements.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme owner ensures that certified entity takes full responsibility that all subcontractors fully meet CoC requirements and has a system to demonstrate this.",
                                "If there is no sub-contracting then this criterion is \"Not Applicable\".",
                                "Example of evidence:",
                                "• Sub-contract agreements, internal audits.",
                            ]
                        },
                        {
                            id: "c33",
                            text: "The scheme owner allows different chain of custody models as traceability systems.",
                            responseOptions: [
                                {label: "Yes, Identity Preservation or Segregation model", score: 2},
                                {label: "Yes, Mass Balance", score: 1},
                                {label: "No, no specific model or Book and claim", score: 0}
                            ],
                            examples: [
                                "In case of identification and separation of certified and non-certified products, Identity Preserved or Segragated are allowed as models.",
                                "In case mixing is allowed, applicable system is Mass Balance. If no model is stated or if the model includes decoupling of the claim from the certified product (e.g. Certificate trading, or Book and claim), then it is a \"No\".",
                                "Examples of evidence:",
                                "• Chain of Custody standards, audit checklists, certification requirements/methodologies specifying requirement",
                                "• Chain of Custody audit reports"
                            ]
                        },
                        {
                            id: "c34",
                            text: "The scheme owner has a clear statement in case mixing of certified with uncertified inputs is allowed.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "\"Yes\" if:",
                                "• mixing of certified with uncertified inputs is allowed, then a clear statement on this is needed.",
                                "\"Not applicable\" if:",
                                "• Statement telling that it does not allow the mixing of its certified with uncertified ingredients.",
                                "• It is a product label (ISO type I label, e.g. Blue Angel)",
                                "If there is no evidence of a written statement, this shall be a \"No\" ."
                            ]
                        },
                        {
                            id: "c35",
                            text: "Continuous increase of the amount of certified input is encouraged, in case of mixing.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Where the scheme allows mixing of certified with non-certified commodities, the scheme requires continuous/incremental increase of the amount of certfied input.",
                                "Refers to a public written statement on the ambition of the scheme to get their certificate holders to increase their demand for certified input over time.",
                                "\"Not applicable\" if the scheme requires segregation or identity preservation."
                            ]
                        },
                        {
                            id: "c36",
                            text: "The scheme owner requires CABs to verify that all enterprises within the chain maintain and keep accurate and accessible traceability records.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Only applicable if claims are made regarding the origin of certain ingredients or products (CoC is required)",
                                "The Scheme Owner defines the requirement for CABs that all entities within the supply chain, including those which may not undergo a Chain of Custody audit, maintain up to date, complete and accessible records that may provide a tool to trace products through the supply chain. These include all records relating to shipment, receipt and invoicing.",
                                "Examples of evidence:",
                                "• Chain of Custody standard.",
                                "• Contract/agreement between the Scheme Owner and the certification body, accreditation/certification requirements/methodologies specifying criteria for document control and maintenance, and retention.",
                                "• Auditor checklists or guidance interpretation."
                            ]
                        },
                    ]
                },
                {
                    id: "p10",
                    title: "Claims and products labelling policy ",
                    criteria: [
                        {
                            id: "c37",
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
                            id: "c38",
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
                            id: "c39",
                            text: "The label is accompanied by an explanatory text claim or a link to further information.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Refers to either of the following:",
                                "• A short text next to the logo explaining some detail about the label",
                                "• A QR code, link or any other form of additional information which helps to understand the label",
                                "Criterion “Not applicable” if no graphic labels are used."
                            ]
                        },
                        {
                            id: "c40",
                            text: "Claims and label users are required to use unique license numbers or other tracking mechanisms.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Only applicable if claims are made regarding the origin of certain ingredients or products (CoC is required)",
                                "Refers to a visible mechanism to be used by label and claims users which provides the ability to trace back the product to its origins.",
                                "Example of evidence:",
                                "• COC-numbers to be applied on claims and logo license numbers to be applied when labels are used."
                            ]
                        },
                        {
                            id: "c41",
                            text: "Claims requirements specify the types of claims that can be made for different types of CoC models, where the scheme owner allows for more than one model.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme provides a publicly available overview of differences in claims, depending on the types of CoC used.",
                                "These claims shall accurately reflect the type of CoC.",
                                "For example:",
                                "• Claims on origin can only be made under Identity Preservation model.",
                                "• Claims on 100% certified material require Segregation model.",
                                "• When Mass Balance or Controlled Blending models are used, claims need to show that mixing is allowed.",
                                "• When Certificate Trading (Book & Claim) model is allowed, \"supports sustainable production\" (or similar) is an adequate claim.",
                                "\"Not applicable\" if: ",
                                "• It is a product label (ISO type I label, e.g. Blue Angel).",
                                "• Only use of one CoC model."
                            ]
                        },
                        {
                            id: "c42",
                            text: "The scheme owner specifies requirements for claims depending on the percentage of certified / verified content in a product.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Refers to a statement in the scheme's claims policy that different percentage requirements of certified inputs require accurate labeling that reflect these differences.",
                                "\"Not Applicable\" if:",
                                "• Claim does not refer to product inputs/single ingredients but rather to the whole/ final product."
                            ]
                        }
                    ]
                },
                {
                    id: "p11",
                    title: "Consequences of misuse of claims",
                    criteria: [
                        {
                            id: "c43",
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
                            id: "c44",
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
                            id: "c45",
                            text: "The scheme owner defines the minimum percentage of a certified / verified input in a single ingredient product for a claim to be allowed for that product.",
                            responseOptions: [
                                {label: "More or equal 75%", score: 2},
                                {label: "Less than 75%", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Refers to a public written statement on the minimum percentage requirements in a single-ingredient product. Different schemes permit different percentages. Stating the percentages provides transparency and informed decision making.",
                                "\"No\" if:",
                                "• No evidence of minimum percentages even though mixing is allowed.",
                                "\"Not Applicable\" if:",
                                "• Claim does not refer to product inputs/single ingredients but to the whole/ final product or if % claims are not included in system."
                            ]
                        },
                        {
                            id: "c46",
                            text: "The scheme owner defines the minimum percentage of certified / verified material in a composite product for a claim to be allowed for that product.",
                            responseOptions: [
                                {label: "More or equal 50%", score: 2},
                                {label: "Less than 50%", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "Refers to a public written statement on the minimum percentage requirements in a composite product.",
                                "\"No\" if:",
                                "• No evidence of minimum percentages even though mixing is allowed.",
                                "\"Not applicable\" if:",
                                "• Claim does not refer to product inputs/single ingredients but to the whole/final product or if % claims are not included in system."
                            ]
                        }
                    ]
                }
            ]

        },
        {
            id: "cat4",
            category: "Governance & Management",
            principles: [
                {
                    id: "p13",
                    title: "Scheme scope and objectives",
                    criteria: [
                        {
                            id: "c47",
                            text: "The scheme owner has a defined scope for certification under its scheme.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The scheme owner clearly defines scope that standard covers, for example which feedtsock type, product categories, value chain actors, certifiable units in the chain of custody etc.).",
                                "Examples of evidence:",
                                "• Explicit scope definition in certification methodology/requirements, standards, objectives.",
                                "• Contracts with accreditation bodies, certification bodies and/or certified operations"
                            ]
                        },
                        {
                            id: "c48",
                            text: "The scheme has sustainability-defined goals and objectives.",
                            responseOptions: [
                                {label: "Yes, with a detailed strategy", score: 2},
                                {label: "Yes, elsewhere mentioned", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner explicitly defines scheme's overall goals, e.g. the mission and vision, either in its statutes or in a separate statement (e.g. a mission statement).",
                                "This should be a documented strategy that the scheme has defined and uses to ensure that it meets its goals. This entails: clear goals, actions to achieve the goals, and a description of available/needed resources to execute the actions.",
                                "The objectives should be sustainability-defined, promoting responsible use of resources and improving environmental and/or socio-economic impacts."
                            ]
                        }
                    ]
                },
                {
                    id: "p14",
                    title: "Governance structure",
                    criteria: [
                        {
                            id: "c49",
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
                            id: "c50",
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
                            id: "c51",
                            text: "The scheme owner is economically independent from the certificate holder.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "An evidence of a policy which governs the independence of the scheme owner or proof that the scheme owner is not economically dependent on one single certificate holder.",
                                "Examples of evidence for scheme alignment:",
                                "• Impartiality policy, impartiality clauses in certification body and accreditation body contracts, management control procedures."
                            ]
                        },
                        {
                            id: "c52",
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
                            id: "c53",
                            text: "The scheme owner makes quantitative information on the income sources or financing structure of the scheme available.",
                            responseOptions: [
                                {label: "Yes, publicly", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "An overview of quantitative information on the income sources or financing structure of the scheme (e.g. potentially including type of funding (i.e. financial, assets, manpower, etc), name of funders, amount or %-distribution of income sources).",
                                "This could be provided in the form of an annex to annual reports."
                            ]
                        },
                        {
                            id: "c54",
                            text: "The scheme owner has a clear statement in case of a mutual recognition agreement with at least one other scheme.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0},
                                {label: "Not applicable", score: null}
                            ],
                            examples: [
                                "The mutual recognition conditions should be stated in an agreement in which the affected parties detail the degree of mutual recognition (referring to e.g. harmonized standards content or audit methodologies).",
                                "The accepted schemes are the ones approved by the European Commission.",
                                "Please note: national vis-a-vis international standards of the same scheme owner are not eligible for a \"Yes\"."
                            ]
                        }
                    ]
                },
                {
                    id: "p15",
                    title: "Stakeholder participation",
                    criteria: [
                        {
                            id: "c55",
                            text: "Stakeholders have the possibility to participate in or contribute formal input on the scheme's governance.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner provides freely accessible public information outlining how stakeholders can participate or provide direct input to the top governance body. ",
                                "Examples of evidence:",
                                "• Online process document for submission of input, governance body selection process and stakeholder composition, review of previous stakeholder inputs."
                            ]
                        },
                        {
                            id: "c56",
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
                            id: "c57",
                            text: "The scheme owner addresses engagement of under-represented stakeholder groups.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner proactively seeks contributions of under-engaged and under-represented stakeholders to the scheme's strategies and impacts, unintended effects, monitoring and evaluation activities, assessment of clients' performance or conformity.",
                                "It is highly recommended that the scheme owner considers how best to seek input from women. This can be done through for e.g. providing funding or standardisation training to targeted actors, such as SMEs, consumer organizations or environmental groups."
                            ]
                        },
                        {
                            id: "c58",
                            text: "The scheme owner ensures that clients and other affected stakeholders are notified of any changes to any scheme components that might affect them.",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "There shall be evidence that affected stakeholders are notified on changes to the scheme's operational system that might affect stakeholders (e.g., changes to the standard or scheme requirements).",
                                "The scheme owner makes sure that procedures are set out when changes will come into effect, allowing adequate time for stakeholders to comply, and also how these changes will be communicated to those affected."
                            ]
                        }
                    ]
                },
                {
                    id: "p16",
                    title: "Complaints and dispute resolution mechanism",
                    criteria: [
                        {
                            id: "c59",
                            text: "The scheme owner has a publicly available complaints mechanism in place for appealing decisions and resolving disputes.",
                            responseOptions: [
                                {label: "Yes, at least one policy", score: 2},
                                {label: "Yes, just a grievance procedure", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "The scheme owner has a transparent process to assess complaints and dispute resolution policies based on a publicly available grievance procedure for resolving complaints related to governance, scheme management and executive functions.",
                                "To demonstrate a transparent and robust dispute mechanism, a scheme shall have any of the following policies:",
                                "• Safeguarding policy",
                                "• Whistleblower protection policy, and/or",
                                "• Grievance policy."
                            ]
                        },
                        {
                            id: "c60",
                            text: "The scheme owner enables complaints procedures to include appeal mechanisms that are open to any involved party. ",
                            responseOptions: [
                                {label: "Yes, with an impartiality policy", score: 2},
                                {label: "Yes, any appeal mechanism", score: 1},
                                {label: "No", score: 0}
                            ],
                            examples: [
                                "Certification and surveillance-related complaints procedures shall include appeal mechanisms open to use by any affected party.",
                                "To demonstrate a transparent and robust appeal mechanism, a scheme shall have an impartiality policy (which should address conflicts of interest) in place."
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
                    id: "p17",
                    title: "Environmental management",
                    criteria: [
                        {
                            id: "c61",
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
                    id: "p18",
                    title: "Climate change management",
                    criteria: [
                        {
                            id: "c62",
                            text: "The scheme requires activities that reduce GHG emissions.",
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
                            id: "c63",
                            text: "The scheme requires quantification and disclosure of the certified product's lifecycle greenhouse gas emissions (GHG).",
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
                            id: "c64",
                            text: "The scheme requires quantification and disclosure of the operator's total GHG emissions.",
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
                            id: "c65",
                            text: "The scheme requires a roadmap for reduction of the certified products' lifecycle GHG emissions.",
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
                            id: "c66",
                            text: "The scheme requires a roadmap for reduction of the total GHG emissions of the operator.",
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
            ]
        },
        {
            id: "cat2",
            category: "Circularity",
            principles: [
                {
                    id: "p26",
                    title: "Circular resource use",
                    criteria: [
                        {
                            id: "c106",
                            text: "The scheme requires the 9R framework and/or the cascading use principle to be the main guiding principle of resource use.",
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
                            id: "c107",
                            text: "The scheme requires that virgin biomass is harvested at levels that ensure regeneration.",
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
                            id: "c108",
                            text: "The scheme requires a plan for the improvement of the share of circular inflows in production ",
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
                            id: "c109",
                            text: "The scheme requires the development and implementation of a circular procurement plan ",
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
                        },
                        {
                            id: "c110",
                            text: "The scheme requires re-using or recycling of residual flows in a sustainable manner.",
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
                                    text: "ii. Residual flows and waste are used for energy generation only in certain circumstances. ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "c111",
                            text: "The scheme requires measures to increase material efficiency in production processes",
                            requirements: [
                                {
                                    id: "r102",
                                    level: "Basic",
                                    text: "i. Measures are taken to reduce the material intensity of production per unit. ",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "c112",
                            text: "The scheme requires products to be designed for repairability and reusability, when possible.",
                            requirements: [
                                {
                                    id: "r103",
                                    level: "Advanced",
                                    text: "i. Product is designed for repairability and reusability. ",
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
                            id: "c113",
                            text: "The scheme requires products to be designed for high-quality recyclability",
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
                    id: "p27",
                    title: "Responsible waste management",
                    criteria: [
                        {
                            id: "c114",
                            text: "The scheme requires safe and proper storage, transportation and disposal of waste. ",
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
                            id: "c115",
                            text: "The scheme does not allow the use of landfills or open-air burning for waste disposal or for burning residues and by-products.",
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
            id: "cat3",
            category: "Social",
            principles: [
                {
                    id: "p28",
                    title: "Labour and human rights",
                    criteria: [
                        {
                            id: "c116",
                            text: "The scheme requires adherence and commitment to the Universal Declaration of Human Rights and the ILO Core Conventions.",
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
                            id: "c117",
                            text: "The scheme requires effective management of ILO Core Conventions in its own operations",
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
                            id: "c118",
                            text: "The scheme requires the operator to ensure that there is no child labour in its own operations. (C138, C182)",
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
                            id: "c119",
                            text: "The scheme requires the operator to ensure that there is no forced labour in its own operations (C105, C029)",
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
                            id: "c120",
                            text: "The scheme requires that the rights of all workers to freedom of association and collective bargaining are respected, free from interference. (C087, C098)",
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
                        }
                    ]
                }
            ]
        },
        {
            id: "cat4",
            category: "Economic",
            principles: [
                {
                    id: "p32",
                    title: "Economic and financial viability",
                    criteria: [
                        {
                            id: "c147",
                            text: "The scheme requires a business plan to ensure economic viability.",
                            requirements: [
                                {
                                    id: "r220",
                                    level: "Basic",
                                    text: "i. A business plan or another document exists articulating the long-term economic viability is established.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "c148",
                            text: "The scheme requires maintaining business records.",
                            requirements: [
                                {
                                    id: "r221",
                                    level: "Basic",
                                    text: "i. A documentation system exists with information on, for example, production volumes, sales revenues, expenses and profitability.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r222",
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
                    id: "p33",
                    title: "Fair business practice",
                    criteria: [
                        {
                            id: "c149",
                            text: "The scheme requires fighting against fraudulent, deceptive and dishonest practices within the organization.",
                            requirements: [
                                {
                                    id: "r223",
                                    level: "Mandatory",
                                    text: "i. Policies/procedures are established prohibiting and measures are taken to combat fraudulent, deceptive and dishonest practices.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r224",
                                    level: "Mandatory",
                                    text: "ii. Potential risks for fraudulent, deceptive and dishonest practices are systematically identified.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r225",
                                    level: "Basic",
                                    text: "iii. Staff training on fair business practices relevant to their work is provided and a record is kept of the trainings.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "c150",
                            text: "The scheme requires keeping records of any cases of fraudulent, deceptive or dishonest practices.",
                            requirements: [
                                {
                                    id: "r226",
                                    level: "Basic",
                                    text: "i. Record is kept of any lawsuits and results thereof related to fraudulent, deceptive or dishonest practices that have been brought against the organization or employees of the organization.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r227",
                                    level: "Basic",
                                    text: "ii. Record is kept of incidents where employees have been subject to disciplinary measures due to fraudulent, deceptive or dishonest behaviour.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r228",
                                    level: "Basic",
                                    text: "iii. Record is kept of incidents where contracts with business contracts were not renewed due to fair business practice breaches.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "c151",
                            text: "The scheme requires that business relationships are based on written contracts.",
                            requirements: [
                                {
                                    id: "r229",
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
                    id: "p34",
                    title: "Risk management",
                    criteria: [
                        {
                            id: "c152",
                            text: "The scheme requires management of financial and economic risks.",
                            requirements: [
                                {
                                    id: "r230",
                                    level: "Basic",
                                    text: "i. Potential financial risks along with measures to address them are systematically identified.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                }
                            ]
                        },
                        {
                            id: "c153",
                            text: "The scheme requires minimising the operator's level of vulnerability.",
                            requirements: [
                                {
                                    id: "r231",
                                    level: "Advanced",
                                    text: "i. Procedures are in place to analyse the level of vulnerability of the operator e.g., to supply shortages, income generation, financial liquidity.",
                                    responseOptions: YES_NO,
                                    applicableFeedstocks: ["Agrarian and forestry residues", "Crop", "Forest", "Waste and residues"],
                                    applicablePhases: ["Biomass producer", "Industrial processor", "Final product manufacturer"]
                                },
                                {
                                    id: "r232",
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
            id: "",
            category: "Category 1 name (OL)",
            principles: [
                {
                    id: "",
                    title: "Principle 1 name",
                    criteria: [
                        {
                            id: "",
                            text: "Criteria 1 name",
                            responseOptions: [
                                {label: "Yes", score: 1},
                                {label: "No", score: 0}
                            ],
                            requirements: [
                                ""
                            ]
                        }
                    ]
                }
            ]

        },
    ]
};