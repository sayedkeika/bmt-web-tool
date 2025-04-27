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
                            type: ["Scheme","Label"],
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
                            type: ["Scheme","Label"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Label"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Label"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Label"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
                            type: ["Scheme"],
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
            id: "cat0",
            category: "Minimum Backstop",
            principles: [
                {
                    id: "p0",
                    title: "Compliance",
                    criteria: [
                        {
                            id: "c0",
                            text: "The scheme requires adherence to all applicable regional, national and international laws, regulations and agreements.",
                            requirements: [
                                {
                                    id: "r0",
                                    level: "-",
                                    text: "i. The scheme requires implementing and maintaining a system to ensure compliance with all relevant international, national, and regional laws and regulations.",
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
                            id: "c63",
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
                            id: "c64",
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
                            id: "c65",
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
                            id: "c66",
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
            ]
        },
        {
            id: "cat6",
            category: "Circularity",
            principles: [
                {
                    id: "p26",
                    title: "Circular resource use",
                    criteria: [
                        {
                            id: "c106",
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
                            id: "c107",
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
                            id: "c108",
                            text: "The scheme requires a plan for the improvement of the share of circular inflows in production ",
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
                            id: "c109",
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
                        },
                        {
                            id: "c110",
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
                            examples: [
                                "• Examples of repairability and reusability practices include: (A) Spare parts essential to the functionality of the products are accessible at a reasonable  price;  (B) Designed for easy inspecting, non-destructive dismantling, and replaceability with commonly available tools ; (C) Spare parts are not unnecessarily bundled, (D) Use of standardised components and tools, (E) Access to repair and maintenance manuals and documentation.",
                                "• Examples of product life extension initiatives  include: (A) product upgrades, (B) repair and maintenance services, (D)  making spare parts available and provides tools for self-repair, (D)  a second-hand, refurbished and/or remanufactured sales program.",
                                "• Examples of specific products where repairability and reusability design is not appropriate (i.e. not possible) is detergents."
                            ],
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
                            examples: [
                                "See glossary for definition of \"high-quality recycling\", \"recycling\", \"9R framework\""
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
                    id: "p28",
                    title: "Labour and human rights",
                    criteria: [
                        {
                            id: "c116",
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
                            id: "c117",
                            text: "The scheme requires effective management of ILO Core Conventions in its own operations",
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
                            id: "c118",
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
                            id: "c119",
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
                            id: "c120",
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
                    id: "p32",
                    title: "Economic and financial viability",
                    criteria: [
                        {
                            id: "c147",
                            text: "The scheme requires a business plan to ensure economic viability.",
                            examples: [
                                "Business plans can include the revenue streams, a growth plan, and an operational action plan that projects the generation of financial resources for the future. "
                            ],
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
                            examples: [
                                "These fradulent, deceptive and dishonest practices include bribery, corruption, extortion, and embezzlement, including - but not limited to - promising, offering, giving, or accepting any improper incentives, monetary or otherwise. See glossary for definition of \"policy\", \"procedure\""
                            ],
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
                            examples: [
                                "Financial and economic risks could be related to competition, capital availability, or assets of the operator."
                            ],
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
                            examples: [
                                "• Examples of strategic measures for supply shortage include maintaining ongoing business relationships with suppliers and ensuring access to alternative procurement channels.",
                                "• Examples of strategic measures for income generation include diversification of the products and/or services the organization offers where no buyer is responsible for a substantial part of annual income.",
                                "• Examples of strategic measures for financial liquidity include having sufficient number of (in)formal financing sources to maintain capital flow. (i.e., banks, micro-credit institutions, public social programmes, government transfers of cash).",
                                "• See glossary for definition of \"liquidity\""
                            ],
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
}

export const glossary = [
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
        term: "Child labour",
        definition: "Work that deprives children of their childhood, their potential, and their dignity, and that is harmful to their physical and mental development. Child labour refers to work that is mentally, physically, socially or morally dangerous and harmful to children; and interferes with their schooling by depriving them of the opportunity to attend school; obliging them to leave school prematurely; or requiring them to attempt to combine school attendance with excessively long and heavy work.\nInternational standards set the general minimum age for admission to employment or work at 15 years (13 for light work) and the minimum age for hazardous work at 18 (16 under certain strict conditions). They provide for the possibility of initially setting the general minimum age at 14 (12 for light work) where the economy and educational facilities are insufficiently developed. Children between the ages of 13 and 15 years old may do light work. Light work is defined as work that is not likely to be harmful to a child’s health or development and does not interfere with attendance at school or participation in vocational orientation or training programmes or a child’s capacity to benefit from the instruction received.",
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
        definition: "A systems solution framework that tackles global challenges like climate change, biodiversity loss, waste, and pollution. It is based on three principles, driven by design: eliminate waste and pollution, circulate products and materials (at their highest value), and regenerate nature.\nIt is underpinned by a transition to renewable energy and materials. Transitioning to a circular economy entails decoupling economic activity from the consumption of finite resources. This represents a systemic shift that builds long-term resilience, generates business and economic opportunities, and provides environmental and societal benefits.",
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
        term: "Discrimination",
        definition: "The term discrimination includes (a) any distinction, exclusion or preference made on the basis of race, colour, sex, religion, political opinion, national extraction or social origin, which has the effect of nullifying or impairing equality of opportunity or treatment in employment or occupation; (b) such other distinction, exclusion or preference which has the effect of nullifying or impairing equality of opportunity or treatment in employment or occupation as may be determined by the individual concerned after consultation with representative employers’ and workers’ organisations and with other appropriate bodies.\nAny distinction, exclusion or preference in respect of a particular job based on the inherent requirements thereof shall not be deemed to be discrimination. Discrimination can be based on race, colour, gender identity, age, language, religion, property/ wealth, nationality, ethnic/social origin, caste, disability, pregnancy, indigeneity, union affiliation, political affiliation, marital/family status, personal relationships, health status, sexual orientation or other non-valid reasons that are irrelevant to the skills, capabilities, qualities and medical fitness for the job.",
        references: [
            {
                label: "ILO Convention C111, Article 1",
                url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312256"
            }
        ]
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
        definition: "The Product Environmental Footprint (PEF) method is as a common way of measuring environmental performance. The PEF is an EU recommended Life Cycle Assessment (LCA) based method to quantify the environmental impacts of products (goods or services).\nThe overarching purpose of PEF information is to reduce the environmental impacts of goods, services and organisations by taking into account supply chain activities. This purpose is achieved through the provision of detailed requirements for modelling the environmental impacts of the flows of material/energy and the emissions and waste streams associated with a product or an organisation throughout the life cycle.",
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
        term: "Free, Prior, Informed Consent",
        definition: "Collective human right of Indigenous Peoples and Local Communities (IP/LC) to give or withhold their consent prior to the commencement of any activity that may affect their rights, land, resources, territories, livelihoods and food security.\n- Free: Consent is given by the affected IP/LC voluntarily without coercion, duress or intimidation.\n- Prior: The consent is given before the specified activity is authorised or commenced.\n- Informed: The consent is given after the IP/LC have received the relevant, timely and culturally appropriate information necessary to make a fully informed decision. Consent: The IP/LC take a collective decision to grant or withhold approval of each activity that may impact IP/LCs.",
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
        definition: "Land that had one of the following statuses in January 2008 and no longer has that status:\n(a) wetlands, namely land that is covered with or saturated by water permanently or for a significant part of the year;\n(b) continuously forested areas, namely land spanning more than one hectare with trees higher than five metres and a canopy cover of more than 30 %, or trees able to reach those thresholds in situ;\n(c) land spanning more than one hectare with trees higher than five metres and a canopy cover of between 10 % and 30 %, or trees able to reach those thresholds in situ.",
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
        definition: "Biological, ecological, social or cultural values which are considered outstandingly significant or critically important at the national, regional or global level. All natural habitats possess some inherent conservation values, including the presence of rare or endemic species, provision of ecosystem services, sacred sites or resources harvested by local residents. However, some values are more significant or critical than others, and it is the HCV approach which offers an objective way of identifying those values to be maintained or enhanced.\n\nThe six High Conservation Values:\n(1) HCV 1 Species diversity\n(2) HCV 2 Landscape-level ecosystems, ecosystem mosaics and IFL\n(3) HCV 3 Ecosystems and habitats\n(4) HCV 4 Ecosystem services\n(5)HCV 5 Community needs\n(6) HCV 6 Cultural valueS",
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
        definition: "High-quality recycling preserves the characteristics of materials which make them most useful. This includes consideration of mechanical, chemical and organic recyclability of the bio-based product.\n\nThe idea of ‘quality’ for secondary raw materials is captured by two interlinked concepts:\n(1) ‘Virgin-like’ secondary raw materials – how closely comparable the secondary raw materials from a recycling chain is to the virgin material originally used in the product being recycled. Subsequently, how substitutable the secondary raw materials is for virgin material with little or no detrimental impact on the final product.\n(2) ‘High value’ secondary raw materials – the extent to which secondary raw materials produced is of comparable value to virgin polymer, in terms of value to the user, and associated monetary value.",
        references: [
            {
                label: "Quality of recycling: Towards and operational definition (European Commission)",
                url: "https://publications.jrc.ec.europa.eu/repository/bitstream/JRC122293/final_quality_of_recycling_report.pdf"
            }
        ]
    },
    {
        theme: "Term",
        term: "ILO Core Conventions",
        definition: "C029 - Forced Labour Convention, 1930 (No. 29)\nC087 - Freedom of Association and Protection of the Right to Organise Convention, 1948 (No. 87)\nC098 - Right to Organise and Collective Bargaining Convention, 1949 (No. 98)\nC100 - Equal Remuneration Convention, 1951 (No. 100)\nC105 - Abolition of Forced Labour Convention, 1957 (No. 105)\nC111 - Discrimination (Employment and Occupation) Convention, 1958 (No. 111)\nC138 - Minimum Age Convention, 1973 (No. 138)\nC155 - Occupational Safety and Health Convention, 1981 (No. 155)\nC182 - Worst Forms of Child Labour Convention, 1999 (No. 182)\nC187 - Promotional Framework for Occupational Safety and Health Convention, 2006 (No. 187)",
        references: [
            {
                label: "ILO Labour Standards - Conventions",
                url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12000:0::NO:::"
            }
        ]
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
        term: "Land with high biodiversity value",
        definition: "Land that had one of the following statuses in or after January 2008, whether or not the land continues to have that status:\na) primary forest and other wooded land, namely forest and other wooded land of native species, where there is no clearly visible indication of human activity and the ecological processes are not significantly disturbed;\nb) highly biodiverse forest and other wooded land which is species-rich and not degraded, or has been identified as being highly biodiverse by the relevant competent authority, unless evidence is provided that the production of that raw material did not interfere with those nature protection purposes;\nc) areas designated: (i) by law or by the relevant competent authority for nature protection purposes; or (ii) for the protection of rare, threatened or endangered ecosystems or species recognised by international agreements or included in lists drawn up by intergovernmental organisations or the International Union for the Conservation of Nature, unless evidence is provided that the production of that raw material did not interfere with those nature protection purposes;\nd) highly biodiverse grassland spanning more than one hectare that is: (i) natural, namely grassland that would remain grassland in the absence of human intervention and that maintains the natural species composition and ecological characteristics and processes; or (ii) non-natural, namely grassland that would cease to be grassland in the absence of human intervention and that is species-rich and not degraded and has been identified as being highly biodiverse by the relevant competent authority, unless evidence is provided that the harvesting of the raw material is necessary to preserve its status as highly biodiverse grassland.\n\nNationally, regionally, or internationally legally protected areas including but not limited to those designated by any of the of the following: (a) The World Conservation Union “IUCN” Category I-IV protected areas; (b) Wetlands of International Importance designated under the Ramsar Convention; (c) World Heritage Sites designated under the UNESCO World Heritage Convention; (d) Biosphere Reserves designated under the UNESCO Man and the Biosphere Programme; (e) Other legally protected areas ; (f) Primary Forest, i.e. naturally regenerated forest, where there are no clearly visible indication of human activities and the ecological processes are not significantly disturbed, (g) Natural or non-natural highly biodiverse grassland; (e) Any other defined High Conservation value Area",
        references: [
            {
                label: "DIRECTIVE (EU) 2018/2001 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 11 December 2018 on the promotion of the use of energy from renewable sources; Protected Planet; Ramsar; UNESCO",
                url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32018L2001%20;%20http://www.protectedplanet.net%20;%20http://ramsar.wetlands.org%20;%20Http://whc.unesco.org/en/list%20;%20http://www.unesco.org/new/en/natural-sciences/environment/ecological-sciences/biosphere-reserves/"
            }
        ]
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
        term: "Natural replenishing rate",
        definition: "Replenishment of a natural resource at a rate that is equal to or faster than the rate at which they are consumed.",
        references: [
            { 
                label: "Natural Resources Canada (adjusted)",
                url: "-" 
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
        term: "Operator",
        definition: "Individual or organization that has ownership or control of one or more parts of the supply chain.",
        references: [
            { label: "ISO 13065:2014", url: "-" }
        ]
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
        term: "Procedure",
        definition: "Specified way to carry out an activity or a process. Procedures can be documented or not. When a procedure is documented, the term “written procedure” or “documented procedure” is frequently used. The document that contains a procedure can be called a “procedure document.”",
        references: [
            { label: "ISO 13065:2014 - ISO 9000:2005, 3.4.5", url: "-" }
        ]
    },
    {
        theme: "Term",
        term: "Raw material",
        definition: "Primary or secondary material that is used to produce a product. Secondary material includes recycled material. Raw material also includes agricultural, forest and processing residues.",
        references: [
            { label: "ISO 13065:2014; ISO 14040:2006, 3.15", url: "-" }
        ]
    },
    {
        theme: "Term",
        term: "Recycling",
        definition: "Any recovery operation by which waste materials are reprocessed into products, materials or substances whether for the original or other purposes. It includes the reprocessing of organic material but does not include energy recovery and the reprocessing into materials that are to be used as fuels or for backfilling operations. Recycling can involve mechanical, physical, chemical processes or biological processes or a combination of these processes. Not all resources should be recycled though, as hazardous substances can accumulate during successive cycles, increasing net toxicity.",
        references: [
            { label: "EU Waste Framework Directive", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32008L0098" },
            { label: "ISO 59004:2024 Circular economy — Vocabulary, principles and guidance for implementation", url: "https://www.iso.org/standard/80648.html" }
        ]
    },
    {
        theme: "Term",
        term: "Regenerative agriculture and forestry",
        definition: "Regenerative production provides biomass in ways that support positive outcomes for nature, which include but are not limited to healthy and stable soils, improved local biodiversity, improved air and water quality, as well as improved societal outcomes. The method and production systems that can achieve these outcomes are context-dependent – so there is no such thing as a 'regenerative practice' that works everywhere.\nIn agriculture, there are different schools of thought that can be leaned on, including agroecology, organic, agroforestry, and conservation agriculture – as long as the emphasis is on those positive outcomes. This concept applies beyond land-based agriculture to aquatic farms and fisheries as well.\nIn forestry, there are likewise several definitions for regenerative forestry. In general, regenerative forestry is a whole system approach, delivering benefits for climate, nature and people. The goal is to ensure that forests are diverse, resilient, adaptive, and support high levels of engagement people and delivering strong livelihoods.",
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
        term: "Runoff",
        definition: "Runoff is the movement of water and any contaminants across the soil surface. Water running off the land towards canals, streams, rivers, and lakes can also move chemicals, such as pesticides and fertilizers. Pesticides may be moving with the runoff water if dissolved in the water or adsorbed to eroding soil particles.",
        references: [
            { label: "Center for Integrated Pest Management, North Carolina State University", url: "https://pesticidestewardship.org/water/runoff/" }
        ]
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
        term: "Stakeholder",
        definition: "An individual or group that has an interest in any decision or activity of an organisation. Stakeholders may include suppliers, internal staff such as employees and workers, seasonal or migratory workers, members, customers, shareholders, investors, consumers, regulators, local and regional communities.",
        references: [
            { label: "ISO 26000:2010", url: "-" }
        ]
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
        term: "Supply chain",
        definition: "Upstream supply chain of the product in scope of the certification.",
        references: [
            { label: "-", url: "-" }
        ]
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
        term: "Virgin biomass",
        definition: "Biomass that have not yet been used in the economy. These include both finite materials and renewable resources.",
        references: [
            { label: "Finding a common language — the circular economy glossary, Ellen MacArthur Foundation", url: "https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/glossary" }
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