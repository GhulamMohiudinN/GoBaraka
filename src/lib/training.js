'use client';

/**
 * Self-training content for the Compliance & Risk Management academy.
 * Four practical pathways (parcours), four case studies each.
 * Every case follows the same shape: scenario, data provided, learner
 * instructions, and the expected solution with its legal references.
 */
const training = {
  en: {
    workbookTitle: 'Practical Workbook & Case Studies',
    tracks: [
      {
        id: 'tax',
        code: 'Pathway 1',
        title: 'Tax Team',
        summary:
          'Tax calendar reviews, reassessment notices, taxable-income determination and AML/CFT risk analysis under the Senegalese General Tax Code.',
        highlight: null,
        cases: [
          {
            id: '1.1',
            title: 'Tax calendar audit and anomaly detection',
            scenario:
              'You are carrying out the mid-year tax audit of "SENEGAL NEGOCE SA". The accountant has prepared the register of monthly returns.',
            data: [
              'Statement of VAT returns for the last 6 months.',
              'Invoices from non-resident foreign providers (technical assistance, software).',
              'Fee invoices from local lawyers.',
            ],
            instructions: [
              'Identify the assessment and filing-deadline errors in the interactive table.',
              'Calculate the amount of withholding tax that was omitted.',
            ],
            solution: [
              'Anomaly 1: Failure to apply the reverse-charge mechanism on connected services — self-assessed VAT or BNC/VAT withholding on foreign providers (Art. 175 et seq. of the General Tax Code).',
              'Anomaly 2: No withholding at source (5% BRS) on lawyers’ fees paid locally (Art. 222 CGI).',
              'Applicable penalties: Late-payment interest of 10% for the first month and 1% for each additional month (Art. 667 CGI).',
            ],
          },
          {
            id: '1.2',
            title: 'Responding to a DGID reassessment notice',
            scenario:
              'The company receives a reassessment notice following an accounting audit. The inspector rejects the deductibility of head-office charges (management fees) paid to the parent company and adds back VAT deducted on fuel.',
            data: [
              'Extract of the reassessment notice (Art. 650+ CGI).',
              'Technical assistance agreement with the parent company.',
              'VAT deduction statement for the quarter.',
            ],
            instructions: [
              'Draft the legal arguments of the reply letter to the inspector’s observations, within the 30-day statutory deadline.',
            ],
            solution: [
              'Management fees: Apply the transfer pricing rules (Art. 17 and 18 CGI). Demonstrate that the services were actually rendered, that they are normal in nature, and justify the pricing method (arm’s length principle).',
              'Fuel VAT: Confirm that the reassessment stands for the passenger vehicle (excluded from the right to deduct under Art. 360 CGI), but challenge it for the fuel used by delivery vehicles.',
            ],
          },
          {
            id: '1.3',
            title: 'Determining taxable income and the SYSCOHADA return',
            scenario:
              'Year-end closing on 31 December. You must compute the move from accounting profit to taxable profit using the SYSCOHADA simulation tool.',
            data: [
              'Pre-inventory trial balance (accounting profit: + 45,000,000 XOF).',
              'Breakdown of expenses: customs fine (2,000,000 XOF), provision for doubtful receivables with no individual identification (5,000,000 XOF), depreciation of a passenger vehicle acquired for 30,000,000 XOF.',
            ],
            instructions: [
              'Complete the table of extra-accounting add-backs and deductions in order to isolate corporate income tax (IS).',
            ],
            solution: [
              'Customs fine: Mandatory add-back (Art. 9 CGI — penalties and fines are not deductible).',
              'Non-individualised provision: Add-back (Art. 8 CGI — provisions must state the exact nature of the loss or expense).',
              'Passenger vehicle: Deductible depreciation capped at 15,000,000 XOF (Art. 8 CGI). Add back the excess depreciation.',
              'Corporate income tax due: Apply the 30% rate to the adjusted taxable profit.',
            ],
          },
          {
            id: '1.4',
            title: 'AML/CFT/CPF risk analysis and filing a suspicious transaction report',
            scenario:
              'A supplier-client pays a large advance on an export contract through three successive transfers coming from bank accounts located in high-risk jurisdictions that were not disclosed in the contract.',
            data: [
              'Bank statements and company registration documents (K-Bis / RCCM) of the client.',
              'Legal organisation chart showing a nominee structure (no clear beneficial owner).',
            ],
            instructions: [
              'Complete the AML/CFT/CPF risk analysis grid.',
              'Fill in a standard Suspicious Transaction Report (STR) form for the Compliance Officer to forward to CENTIF.',
            ],
            solution: [
              'Apply the AML/CFT/CPF Act (WAEMU/Senegal) requirements on customer due diligence (KYC) and identification of beneficial owners.',
              'Red flag detected: Complex structuring with no demonstrated economic rationale.',
              'Immediate reporting obligation, failing which criminal sanctions for complicity in money laundering may apply.',
            ],
          },
        ],
      },
      {
        id: 'junior',
        code: 'Pathway 2',
        title: 'Junior Staff',
        summary:
          'Delegation of authority, segregation of duties, personal data protection and gift management — the everyday internal-control reflexes.',
        highlight: {
          title: 'Segregation of duties (SOD) — junior checks',
          items: [
            { label: 'Role A', text: 'Supplier registration (Purchasing)' },
            { label: 'Role B', text: 'Invoice approval (Accounting)' },
            { label: 'Role C', text: 'Payment execution (Treasury)' },
          ],
        },
        cases: [
          {
            id: '2.1',
            title: 'Circumventing delegation-of-authority thresholds',
            scenario:
              'A purchasing assistant wants to order IT equipment for a total of 9,000,000 XOF. His signature limit is 3,000,000 XOF. To avoid asking General Management for approval, he issues three separate purchase orders of 3,000,000 XOF on the same day to the same supplier.',
            data: ['Extract of the purchasing procedure and copies of the 3 purchase orders.'],
            instructions: [
              'Identify the type of breach committed.',
              'Determine the action to take under the internal control workflow.',
            ],
            solution: [
              'Diagnosis: Order splitting (salami slicing), a deliberate breach of the delegation of authority (DoA).',
              'Action: Automatic blocking of processing by accounting, notification to Internal Audit/Compliance, and recalibration of the order as a single global purchase.',
            ],
          },
          {
            id: '2.2',
            title: 'Duplicate payment incident and segregation-of-duties failure',
            scenario:
              'During the month-end review, a duplicate payment of 4,500,000 XOF to a service provider is identified. The accounting assistant entered the original invoice and then manually approved the payment without matching it against the goods receipt note.',
            data: ['Accounting entry journal, bank statement, SOD procedure.'],
            instructions: [
              'Identify the controls that failed in the management software.',
              'Complete the internal incident report.',
            ],
            solution: [
              'Breach of the fundamental principle of Segregation of Duties (SOD): the person who records an entry must not hold the authority to release the payment.',
              'Corrective action: Recover the funds through a formal demand letter and activate the system locks (automatic blocking of duplicate invoice numbers).',
            ],
          },
          {
            id: '2.3',
            title: 'Confidentiality breach and personal data protection (CDP)',
            scenario:
              'A junior sales agent downloads the company’s complete client file (containing NINEA numbers, bank details and directors’ names) onto his personal USB stick in order to work from home.',
            data: ['Company information systems security policy (PSSI) and extracts of the CDP Act.'],
            instructions: [
              'Assess the seriousness of the misconduct under Senegalese regulation and propose the appropriate escalation.',
            ],
            solution: [
              'Breach of Act No. 2008-12 of 25 January 2008 on the protection of personal data in Senegal.',
              'Failure to meet the security and confidentiality obligations attached to client data.',
              'Risk of administrative sanctions by the CDP (Personal Data Commission) and internal disciplinary action.',
            ],
          },
          {
            id: '2.4',
            title: 'Attempted undue advantage (gift management)',
            scenario:
              'While a paper supply contract is up for renewal, the provider’s sales representative offers two Umrah/Mecca travel tickets to the executive assistant in charge of centralising the bids.',
            data: ['Extract of the Code of Conduct / Ethics Charter (authorised gift cap: 50,000 XOF per year).'],
            instructions: [
              'Draft the formal letter of refusal and record the offer in the gift register.',
            ],
            solution: [
              'Qualification: attempted private-sector bribery.',
              'Action: Immediate refusal of the gift, written notification to the supplier, entry in the company’s Transparency & Gifts Register, and alert to the Compliance Officer.',
            ],
          },
        ],
      },
      {
        id: 'insurance',
        code: 'Pathway 3',
        title: 'Insurance',
        summary:
          'CIMA Code practice: policy inception, IT governance and business continuity, fraud red flags, and PEP screening.',
        highlight: null,
        cases: [
          {
            id: '3.1',
            title: 'Dispute over policy inception and unpaid premium',
            scenario:
              'A fire loss occurs in a commercial warehouse on 10 May. The insured signed the policy on 1 May but only settled the premium by cheque on 12 May. The insured demands payment of the indemnity.',
            data: ['Copy of the insurance policy, bank statement, loss certificate.'],
            instructions: [
              'Analyse the file under the CIMA Code and formalise the insurer’s position.',
            ],
            solution: [
              'Strict application of Article 13 of the CIMA Code: the contract only takes effect once the premium, or the first instalment of the premium, has been paid in full.',
              'As no payment was made before the loss, cover is suspended. Draft a denial-of-cover letter compliant with CIMA law.',
            ],
          },
          {
            id: '3.2',
            title: 'CIMA compliance audit: business continuity plan (BCP) and cybersecurity',
            scenario:
              'A desk review by the Regional Insurance Control Commission (CRCA) requires evidence that the company is aligned with the new IT governance directives.',
            data: ['IT risk mapping report, backup procedures for underwriting data.'],
            instructions: [
              'Identify the gaps in the current BCP and complete the CIMA compliance matrix.',
            ],
            solution: [
              'Compliance with the CIMA circulars and directives on IT governance and business continuity.',
              'Mandatory implementation: periodic failover tests to a backup site (disaster recovery plan), encryption of client databases, and an operational emergency plan.',
            ],
          },
          {
            id: '3.3',
            title: 'Handling a motor claim with strong suspicion of fraud',
            scenario:
              'A "material collision" claim worth 18,000,000 XOF is reported on a luxury vehicle. The comprehensive policy was taken out only 72 hours before the alleged accident.',
            data: ['Claim declaration, motor expert’s report, mobile phone geolocation records.'],
            instructions: [
              'List the red flags in the claim handling grid.',
              'Trigger the insurance investigation procedure.',
            ],
            solution: [
              'Red flags: ultra-early claim, inconsistency between the impact noted by the expert and the third party’s statement, history of multiple insurance policies.',
              'Legal framework: Trigger the forfeiture clause for intentional misrepresentation (Art. 18 of the CIMA Code) and refer the file to the internal anti-fraud unit.',
            ],
          },
          {
            id: '3.4',
            title: 'KYC screening and detection of a politically exposed person (PEP)',
            scenario:
              'A foreign public figure takes out a unit-linked life insurance policy with a single initial cash payment of 50,000,000 XOF.',
            data: ['Subscription form, identity document, cash deposit receipt.'],
            instructions: [
              'Run the KYC check against the screening database.',
              'Approve or reject the transaction according to the regulatory level of due diligence.',
            ],
            solution: [
              'Breach 1: Cash payment above the legal ceiling.',
              'Breach 2: PEP status, requiring enhanced due diligence (mandatory General Management approval plus evidence of the lawful origin of the funds).',
              'Mandatory filing of a Suspicious Transaction Report (STR) with CENTIF on suspicion of money laundering (CIMA / AML-CFT regulation).',
            ],
          },
        ],
      },
      {
        id: 'logistics',
        code: 'Pathway 4',
        title: 'Logistics & Customs',
        summary:
          'Incoterms 2020, GAINDE declarations, customs litigation and anti-corruption reflexes at the border.',
        highlight: {
          title: 'Customs document analysis (GAINDE)',
          items: [
            { label: 'Supplier invoice', text: 'FOB / EXW value' },
            { label: 'Bill of lading', text: 'Freight & insurance' },
            { label: 'Customs declaration (SGS/DPI)', text: 'Tariff heading — HS code' },
          ],
        },
        cases: [
          {
            id: '4.1',
            title: 'Incoterms 2020 dispute and transfer of risk at the Port of Dakar',
            scenario:
              'A shipment of industrial equipment imported from Italy arrives damaged at the Autonomous Port of Dakar (PAD). The contract states DAP Dakar (Delivered At Place), but the buyer paid the unloading costs on the quay.',
            data: ['International purchase contract, bill of lading, average adjuster’s damage report.'],
            instructions: [
              'Determine which party (seller or buyer) bears the financial loss.',
              'Identify the misreading of the Incoterm.',
            ],
            solution: [
              'Incoterms 2020 rules (ICC): under DAP, the seller bears all risks and costs until the goods are placed at the buyer’s disposal, not unloaded, at the agreed destination.',
              'The buyer is released from liability for damage occurring before that point. The claim must be directed to the seller’s transport insurance.',
            ],
          },
          {
            id: '4.2',
            title: 'Auditing a customs declaration in the GAINDE system',
            scenario:
              'You are running a post-clearance control on import files of agricultural machinery spare parts. Customs suspect a misdeclaration of the tariff heading (incorrect Harmonised System coding) aimed at reducing the cumulative duty and tax rate (TCDT) from 20% to 5%.',
            data: ['Commercial invoice, prior import declaration (DPI), customs declaration filed in GAINDE.'],
            instructions: [
              'Reconcile the technical description of the product with the Senegalese Customs Tariff.',
              'Recalculate the duties and taxes actually due.',
            ],
            solution: [
              'Senegalese Customs Code (Act No. 2014-10): qualification as a misdeclaration of tariff heading (Art. 61 et seq.).',
              'Adjustment of duties: reconstruct the real tariff (customs duty + statistical levy + 18% VAT + CITI).',
              'Apply the penalties for evasion of import duties.',
            ],
          },
          {
            id: '4.3',
            title: 'Managing customs litigation and a settlement request',
            scenario:
              'During a physical inspection at Môle 2 of the Port of Dakar, customs officers find a surplus of 150 cartons of goods not listed on the manifest or the detailed declaration. A seizure report (PV) is drawn up.',
            data: ['Copy of the customs seizure report, Customs Code.'],
            instructions: [
              'Analyse the legal risks for the logistics director (criminal and financial).',
              'Draft a submission requesting a customs settlement.',
            ],
            solution: [
              'Offence: Importation without declaration of prohibited or dutiable goods (Art. 390+ of the Customs Code).',
              'Risk: Confiscation of the disputed goods, a fine equal to twice their value, and exposure to criminal prosecution.',
              'Procedure to extinguish the public action: Draft a request for a customs settlement (Art. 343 of the Customs Code) seeking a reduction of the fines in exchange for acknowledging the administrative error.',
            ],
          },
          {
            id: '4.4',
            title: 'Freight forwarder due diligence and a border blockage',
            scenario:
              'A truck carrying goods in customs transit (T1 / WAEMU TRIE regime) bound for Mali is blocked at the Kidira border post. The driver reports that an intermediary is demanding an unofficial cash payment ("facilitation fee") to speed up the release note.',
            data: ['TRIE carnet, Anti-Corruption Code of Conduct, Purchasing Policy.'],
            instructions: [
              'Resolve the operational deadlock within the ethical framework.',
              'Assess the liability of the licensed customs broker.',
            ],
            solution: [
              'Categorical refusal of the facilitation payment: such a payment is an offence under Senegalese and international law (FCPA / UK Bribery Act / Anti-Corruption Act).',
              'Escalation: Immediately refer the matter to the official customs declarant to verify the lawfulness of the fees demanded (an official Treasury receipt must be produced).',
              'Possible sanction: Termination of the handling/transit contract with the non-compliant provider for breach of compliance rules.',
            ],
          },
        ],
      },
    ],
  },
  fr: {
    workbookTitle: 'Cahier de travaux pratiques et d’études de cas',
    tracks: [
      {
        id: 'tax',
        code: 'Parcours 1',
        title: 'Équipe fiscale',
        summary:
          'Audit du calendrier fiscal, notifications de redressement, détermination du résultat fiscal et analyse de risque LBC/FT/FP au regard du CGI sénégalais.',
        highlight: null,
        cases: [
          {
            id: '1.1',
            title: 'Audit du calendrier fiscal et détection des anomalies',
            scenario:
              'Vous réalisez l’audit fiscal à mi-parcours de la société « SENEGAL NEGOCE SA ». Le comptable a préparé le registre des déclarations mensuelles.',
            data: [
              'Relevé des déclarations de TVA des 6 derniers mois.',
              'Factures de prestataires étrangers non résidents (assistance technique, logiciels).',
              'Factures d’honoraires d’avocats locaux.',
            ],
            instructions: [
              'Identifier les erreurs de liquidation et d’échéances dans le tableau interactif.',
              'Calculer le montant des retenues à la source omises.',
            ],
            solution: [
              'Anomalie 1 : Défaut d’application de la prestation de service rattachée / TVA autoliquidée ou retenue BNC/TVA sur les prestataires étrangers (Art. 175 et suivants du CGI).',
              'Anomalie 2 : Absence de retenue à la source (BRS de 5 %) sur les honoraires d’avocats payés localement (Art. 222 CGI).',
              'Pénalités applicables : Intérêts de retard de 10 % le premier mois et 1 % par mois supplémentaire (Art. 667 CGI).',
            ],
          },
          {
            id: '1.2',
            title: 'Réponse à une notification de redressement de la DGID',
            scenario:
              'L’entreprise reçoit un avis de redressement suite à une vérification de comptabilité. Le vérificateur rejette la déductibilité de frais de siège (management fees) versés à la maison mère et réintègre de la TVA déduite sur des carburants.',
            data: [
              'Extrait de la notification de redressement (Art. 650+ CGI).',
              'Convention d’assistance technique avec la maison mère.',
              'Relevé de TVA déduite du trimestre.',
            ],
            instructions: [
              'Rédiger les arguments juridiques de la lettre de réponse aux observations du vérificateur dans le respect du délai légal de 30 jours.',
            ],
            solution: [
              'Management fees : Application des règles sur les prix de transfert (Art. 17 et 18 CGI). Démontrer la réalité des prestations rendues, leur caractère normal et la méthode de tarification (principe de pleine concurrence).',
              'TVA carburant : Confirmer le maintien du redressement pour le véhicule de tourisme (exclu du droit à déduction selon l’Art. 360 CGI), mais contester pour le carburant des véhicules de livraison.',
            ],
          },
          {
            id: '1.3',
            title: 'Détermination du résultat fiscal et liasse SYSCOHADA',
            scenario:
              'Clôture de l’exercice au 31 décembre. Vous devez calculer le passage du résultat comptable au résultat fiscal sur l’outil de simulation SYSCOHADA.',
            data: [
              'Balance avant inventaire (résultat comptable : + 45 000 000 XOF).',
              'Détail des charges : amende douanière (2 000 000 XOF), provision pour créances douteuses sans individualisation (5 000 000 XOF), amortissement d’un véhicule de tourisme acquis pour 30 000 000 XOF.',
            ],
            instructions: [
              'Remplir le tableau de réintégration et de déduction extra-comptable pour isoler l’impôt sur les sociétés (IS).',
            ],
            solution: [
              'Amende douanière : Réintégration obligatoire (Art. 9 CGI — pénalités et amendes non déductibles).',
              'Provision non individualisée : Réintégration (Art. 8 CGI — les provisions doivent préciser la nature exacte de la perte ou de la charge).',
              'Véhicule de tourisme : Plafond d’amortissement déductible limité à 15 000 000 XOF (Art. 8 CGI). Réintégration du surplus d’amortissement.',
              'IS à payer : Application du taux de 30 % sur le résultat fiscal ajusté.',
            ],
          },
          {
            id: '1.4',
            title: 'Analyse de risque LBC/FT/FP et instruction d’une DOS',
            scenario:
              'Un client fournisseur verse un acompte important sur un marché d’exportation via trois virements successifs provenant de comptes bancaires situés dans des juridictions à haut risque non déclarées au contrat.',
            data: [
              'Relevés bancaires et K-Bis/RCCM du client.',
              'Organigramme juridique montrant une structure de prête-noms (absence de bénéficiaire effectif clair).',
            ],
            instructions: [
              'Compléter la grille d’analyse du risque LBC/FT/FP.',
              'Renseigner un formulaire type de Déclaration d’Opération Suspecte (DOS) à l’attention du Compliance Officer pour transmission à la CENTIF.',
            ],
            solution: [
              'Application des exigences de la loi LBC/FT/FP (UEMOA/Sénégal) relative aux obligations de vigilance (KYC) et d’identification des bénéficiaires effectifs (BE).',
              'Détection du signal d’alerte : Structuration complexe sans justification économique avérée.',
              'Obligation de déclaration immédiate sous peine de sanctions pénales pour complicité de blanchiment.',
            ],
          },
        ],
      },
      {
        id: 'junior',
        code: 'Parcours 2',
        title: 'Personnel junior',
        summary:
          'Délégation de pouvoir, séparation des tâches, protection des données personnelles et gestion des cadeaux — les réflexes quotidiens de contrôle interne.',
        highlight: {
          title: 'Séparation des tâches (SOD) — checks junior',
          items: [
            { label: 'Rôle A', text: 'Inscription fournisseur (Achat)' },
            { label: 'Rôle B', text: 'Validation de la facture (Compta)' },
            { label: 'Rôle C', text: 'Exécution du paiement (Trésorerie)' },
          ],
        },
        cases: [
          {
            id: '2.1',
            title: 'Contournement des seuils de délégation de pouvoir',
            scenario:
              'Un assistant achat souhaite commander du matériel informatique pour un montant total de 9 000 000 XOF. Sa limite d’autorisation de signature est fixée à 3 000 000 XOF. Pour éviter de solliciter la validation de la Direction Générale, il émet trois bons de commande séparés de 3 000 000 XOF le même jour au même fournisseur.',
            data: ['Extrait de la procédure d’achat et copie des 3 bons de commande.'],
            instructions: [
              'Identifier le type de manquement commis.',
              'Déterminer l’action à mener selon le workflow de contrôle interne.',
            ],
            solution: [
              'Diagnostic : Fractionnement de commande (salami slicing), constituant une violation délibérée de la délégation de pouvoir (DDP).',
              'Action : Blocage automatique du traitement par la comptabilité, notification à l’IAP (Internal Audit/Compliance) et recalibrage de la commande globale.',
            ],
          },
          {
            id: '2.2',
            title: 'Incident de double paiement et rupture de séparation des tâches (SOD)',
            scenario:
              'Lors de l’inventaire de fin de mois, un doublon de paiement de 4 500 000 XOF au profit d’un prestataire de services est identifié. L’assistant comptable a saisi la facture initiale puis a validé manuellement le paiement sans le rapprochement avec le bon de réception.',
            data: ['Journal de saisie comptable, extrait de compte bancaire, procédure SOD.'],
            instructions: [
              'Identifier les contrôles défaillants dans le logiciel de gestion.',
              'Compléter le rapport d’incident interne.',
            ],
            solution: [
              'Non-respect du principe fondamental de séparation des tâches (Segregation of Duties — SOD) : la personne qui saisit ne doit pas disposer du droit d’ordonnancement du paiement.',
              'Action corrective : Restitution des fonds via lettre de mise en demeure et activation des verrous informatiques (blocage automatique des numéros de factures en doublon).',
            ],
          },
          {
            id: '2.3',
            title: 'Violation de la confidentialité et données personnelles (CDP)',
            scenario:
              'Un agent commercial junior télécharge sur sa clé USB personnelle le fichier clients complet de l’entreprise (contenant NINEA, coordonnées bancaires, noms des dirigeants) pour travailler depuis son domicile.',
            data: [
              'Politique de sécurité des systèmes d’information (PSSI) de l’entreprise et extraits de la loi CDP.',
            ],
            instructions: [
              'Évaluer la gravité de la faute au regard de la réglementation sénégalaise et proposer l’escalade hiérarchique adaptée.',
            ],
            solution: [
              'Violation de la loi n° 2008-12 du 25 janvier 2008 relative à la protection des données à caractère personnel au Sénégal.',
              'Manquement aux obligations de sécurité et de confidentialité des données clients.',
              'Risque de sanctions administratives par la CDP (Commission des Données Personnelles) et sanctions disciplinaires internes.',
            ],
          },
          {
            id: '2.4',
            title: 'Tentative d’octroi d’avantage indu (gestion des cadeaux)',
            scenario:
              'En période de renouvellement d’un contrat de fourniture de papier, le commercial du prestataire offre deux billets de voyage pour la Oumra/Mecque à l’assistant de direction en charge de la centralisation des offres.',
            data: ['Extrait du Code de conduite / Charte éthique (plafond de cadeau autorisé : 50 000 XOF/an).'],
            instructions: [
              'Rédiger la réponse de refus formalisée et procéder à la déclaration dans le registre des cadeaux.',
            ],
            solution: [
              'Qualification de tentative de corruption privée.',
              'Action : Refus immédiat du cadeau, notification écrite au fournisseur, enregistrement dans le Registre Transparence & Cadeaux de l’entreprise et alerte au Compliance Officer.',
            ],
          },
        ],
      },
      {
        id: 'insurance',
        code: 'Parcours 3',
        title: 'Assurance',
        summary:
          'Pratique du Code CIMA : prise d’effet du contrat, gouvernance informatique et PCA, indices de fraude et filtrage des PPE.',
        highlight: null,
        cases: [
          {
            id: '3.1',
            title: 'Litige sur la prise d’effet du contrat et non-paiement de prime',
            scenario:
              'Un sinistre incendie survient dans un entrepôt commercial le 10 mai. L’assuré a signé la police le 1er mai, mais n’a réglé la prime par chèque que le 12 mai. L’assuré exige le versement de l’indemnité.',
            data: ['Copie du contrat d’assurance, extrait du compte bancaire, attestation du sinistre.'],
            instructions: [
              'Analyser le dossier au regard du Code CIMA et formaliser la position de la compagnie d’assurance.',
            ],
            solution: [
              'Application stricte de l’article 13 du Code CIMA : le contrat ne prend effet qu’après le paiement intégral de la prime ou de la première fraction de prime.',
              'En l’absence de paiement préalable au sinistre, la garantie est suspendue. Rédaction d’une lettre de déni de couverture conforme au droit CIMA.',
            ],
          },
          {
            id: '3.2',
            title: 'Audit de conformité CIMA : plan de continuité d’activité (PCA) et cybersécurité',
            scenario:
              'Un contrôle sur pièce de la Commission Régionale de Contrôle des Assurances (CRCA) exige la preuve de l’alignement de la compagnie sur les nouvelles directives de gouvernance informatique.',
            data: ['Rapport de cartographie des risques IT, procédures de sauvegarde des données souscription.'],
            instructions: [
              'Identifier les manquements dans le PCA actuel et compléter la matrice de mise en conformité CIMA.',
            ],
            solution: [
              'Conformité aux circulaires et directives CIMA relatives à la gouvernance informatique et à la continuité d’activité.',
              'Implémentation obligatoire : tests périodiques de basculement vers un site de secours (disaster recovery plan), chiffrement des bases de données clients et plan d’urgence opérationnel.',
            ],
          },
          {
            id: '3.3',
            title: 'Instruction d’un sinistre automobile à forte suspicion de fraude',
            scenario:
              'Déclaration d’un sinistre « collision matérielle » d’une valeur de 18 000 000 XOF sur un véhicule de luxe. La souscription du contrat d’assurance tous risques date de 72 heures seulement avant la survenance présumée de l’accident.',
            data: [
              'Déclaration de sinistre, rapport d’expertise automobile, relevé de géolocalisation des téléphones portables.',
            ],
            instructions: [
              'Relever les indicateurs d’alerte (red flags) dans la grille d’instruction.',
              'Déclencher la procédure d’enquête d’assurance.',
            ],
            solution: [
              'Red flags : Sinistre ultra-précoce (early claim), incohérence entre l’impact relevé par l’expert et la déclaration de la partie adverse, antécédents d’assurances multiples.',
              'Cadre légal : Déclenchement de la clause de déchéance pour fausse déclaration intentionnelle (Art. 18 du Code CIMA) et saisine de la cellule interne anti-fraude.',
            ],
          },
          {
            id: '3.4',
            title: 'Filtrage KYC et détection d’une Personne Politiquement Exposée (PPE)',
            scenario:
              'Une personnalité publique étrangère souscrit un contrat d’assurance-vie en unités de compte avec un versement initial unique en espèces de 50 000 000 XOF.',
            data: ['Formulaire de souscription, pièce d’identité, reçu de dépôt de caisse.'],
            instructions: [
              'Effectuer la vérification KYC sur la base de données de filtrage.',
              'Valider ou rejeter la transaction selon le niveau de vigilance réglementaire.',
            ],
            solution: [
              'Violation 1 : Paiement en espèces dépassant le plafond légal.',
              'Violation 2 : Qualification de PPE nécessitant des mesures de vigilance renforcée (accord obligatoire de la Direction Générale + justification de l’origine licite du patrimoine).',
              'Transmission obligatoire d’une Déclaration d’Opération Suspecte (DOS) à la CENTIF pour soupçon de blanchiment d’argent (réglementation CIMA / LBC-FT).',
            ],
          },
        ],
      },
      {
        id: 'logistics',
        code: 'Parcours 4',
        title: 'Logistique & Douane',
        summary:
          'Incoterms 2020, déclarations GAINDE, contentieux douanier et réflexes anti-corruption au poste frontière.',
        highlight: {
          title: 'Analyse documentaire douane (GAINDE)',
          items: [
            { label: 'Facture fournisseur', text: 'Valeur FOB / EXW' },
            { label: 'Connaissement B/L', text: 'Fret & assurance' },
            { label: 'Déclaration en douane (SGS/DPI)', text: 'Espèce tarifaire — code SH' },
          ],
        },
        cases: [
          {
            id: '4.1',
            title: 'Analyse d’un litige sur les Incoterms 2020 et transfert de risques au Port de Dakar',
            scenario:
              'Une cargaison d’équipements industriels importée d’Italie arrive endommagée au Port Autonome de Dakar (PAD). Le contrat stipule un Incoterm DAP Dakar (Delivered At Place), mais l’acheteur a payé les frais de déchargement sur le quai.',
            data: [
              'Contrat d’achat international, connaissement (bill of lading), rapport d’avarie du commissaire d’avaries.',
            ],
            instructions: [
              'Déterminer quelle partie (vendeur ou acheteur) supporte la perte financière du dommage.',
              'Identifier l’erreur d’interprétation de l’Incoterm.',
            ],
            solution: [
              'Règles Incoterms 2020 (ICC) : En DAP, le vendeur supporte tous les risques et frais jusqu’à la mise à disposition des marchandises non déchargées au lieu de destination convenu.',
              'L’acheteur est libéré de la responsabilité des avaries survenues avant la mise à disposition. La réclamation doit être imputée à l’assurance transport du vendeur.',
            ],
          },
          {
            id: '4.2',
            title: 'Audit d’une déclaration en douane sur le système GAINDE',
            scenario:
              'Vous effectuez un contrôle a posteriori sur les dossiers d’importation de pièces détachées de machines agricoles. La douane soupçonne une fausse déclaration d’espèce tarifaire (fausse codification du Système Harmonisé — SH) visant à réduire le Taux Cumulé des Droits et Taxes (TCDT) de 20 % à 5 %.',
            data: [
              'Facture commerciale, Déclaration Préalable d’Importation (DPI), déclaration en douane enregistrée sous GAINDE.',
            ],
            instructions: [
              'Rapprocher la désignation technique du produit avec le Tarif des Douanes du Sénégal.',
              'Recalculer les droits et taxes réellement dus.',
            ],
            solution: [
              'Code des Douanes du Sénégal (loi n° 2014-10) : Qualification de fausse déclaration d’espèce (Art. 61 et suivants).',
              'Ajustement des droits : Reconstitution du tarif réel (droits de douane + RS + TVA 18 % + CITI).',
              'Application des pénalités pour compromission des droits d’entrée.',
            ],
          },
          {
            id: '4.3',
            title: 'Gestion d’un contentieux douanier et demande de transaction',
            scenario:
              'Lors d’une visite physique au Môle 2 du Port de Dakar, les agents des douanes découvrent un surplus de 150 cartons de marchandises non reprises sur le manifeste et la déclaration détaillée. Un procès-verbal (PV) de saisie est dressé.',
            data: ['Copie du procès-verbal de saisie douanière, Code des Douanes.'],
            instructions: [
              'Analyser les risques juridiques pour le directeur logistique (pénal et financier).',
              'Rédiger une soumission pour demande de transaction douanière.',
            ],
            solution: [
              'Infraction : Importation sans déclaration de marchandises prohibées ou taxées (Art. 390+ Code des Douanes).',
              'Risque : Confiscation des marchandises litigieuses + amende égale au double de la valeur + risque de poursuite pénale.',
              'Procédure d’extinction de l’action publique : Rédaction d’une requête en transaction douanière (Art. 343 du Code des Douanes) sollicitant une modération des amendes moyennant la reconnaissance de l’erreur administrative.',
            ],
          },
          {
            id: '4.4',
            title: 'Due diligence transitaire et gestion d’un blocage frontière',
            scenario:
              'Un camion de marchandises en transit sous douane (régime T1/TRIE UEMOA) à destination du Mali est bloqué au poste frontière de Kidira. Le chauffeur indique qu’un intermédiaire demande un paiement non officiel en espèces (« frais de facilitation ») pour accélérer la délivrance du bon à enlever.',
            data: ['Carnet TRIE, Code de conduite anti-corruption, Politique achats.'],
            instructions: [
              'Résoudre le cas d’impasse opérationnelle dans le respect du cadre éthique.',
              'Évaluer la responsabilité du commissionnaire de transport agréé en douane.',
            ],
            solution: [
              'Refus catégorique du paiement de facilitation : Ce paiement constitue une infraction pénalisable par les lois sénégalaises/internationales (FCPA / UK Bribery Act / loi anti-corruption).',
              'Escalade : Saisir immédiatement le déclarant en douane officiel pour vérification de la légalité des frais réclamés (exigence d’une quittance officielle du Trésor Public).',
              'Sanction possible : Rupture du contrat d’acconage/transit avec le prestataire défaillant pour non-respect des règles de conformité.',
            ],
          },
        ],
      },
    ],
  },
};

export default training;
