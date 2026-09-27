'use client';

/**
 * Quiz questions for the self-training case studies, keyed by case id.
 * Three multiple-choice questions per case, twelve per pathway.
 * `answer` is the index of the correct option; `explanation` is only
 * shown once the learner has submitted the whole pathway.
 */
const quiz = {
  en: {
    '1.1': [
      {
        prompt:
          'The company paid non-resident foreign providers for technical assistance and software. What was missed?',
        options: [
          'Nothing — services supplied from abroad fall outside Senegalese tax.',
          'Reverse-charge (self-assessed) VAT or BNC/VAT withholding on the foreign providers.',
          'The invoices should have been capitalised as fixed assets.',
          'Only the registration stamp duty on the contracts.',
        ],
        answer: 1,
        explanation:
          'Art. 175 et seq. of the General Tax Code: payments to non-resident providers trigger self-assessed VAT and withholding obligations.',
      },
      {
        prompt: 'What rate of withholding at source (BRS) applies to fees paid to local lawyers?',
        options: ['0% — local professional fees are exempt', '5%', '18%', '30%'],
        answer: 1,
        explanation: 'Art. 222 CGI sets a 5% BRS withholding on professional fees paid locally.',
      },
      {
        prompt: 'How are late-payment penalties calculated on the omitted amounts?',
        options: [
          'A single flat penalty of 5% of the tax due.',
          '10% for the first month, then 1% for each additional month.',
          '18% per year, calculated daily.',
          '1% for the first month, then 10% for each additional month.',
        ],
        answer: 1,
        explanation: 'Art. 667 CGI.',
      },
    ],
    '1.2': [
      {
        prompt: 'Within what deadline must the reply to the inspector’s observations be filed?',
        options: ['15 days', '30 days', '60 days', '90 days'],
        answer: 1,
        explanation: 'The reply to a reassessment notice must reach the DGID within the 30-day statutory deadline.',
      },
      {
        prompt: 'On what basis must the management fees paid to the parent company be defended?',
        options: [
          'By showing that the parent company is loss-making.',
          'Under the transfer pricing rules — proving the services were real, normal in nature and priced at arm’s length.',
          'By reclassifying them as a dividend.',
          'They cannot be defended — head-office charges are never deductible.',
        ],
        answer: 1,
        explanation: 'Art. 17 and 18 CGI, applying the arm’s length principle.',
      },
      {
        prompt: 'What is the correct position on the VAT deducted on fuel?',
        options: [
          'Accept the reassessment in full — fuel VAT is never deductible.',
          'Challenge it in full — every company vehicle gives a right to deduct.',
          'Accept it for the passenger vehicle, challenge it for the delivery vehicles.',
          'Accept it for the delivery vehicles, challenge it for the passenger vehicle.',
        ],
        answer: 2,
        explanation:
          'Art. 360 CGI excludes passenger vehicles from the right to deduct; delivery vehicles are not excluded.',
      },
    ],
    '1.3': [
      {
        prompt: 'How is the 2,000,000 XOF customs fine treated in the tax reconciliation?',
        options: [
          'Deductible in full as an operating expense.',
          'Added back — penalties and fines are not deductible.',
          'Spread over three financial years.',
          'Deductible up to 50%.',
        ],
        answer: 1,
        explanation: 'Art. 9 CGI — penalties and fines are never deductible.',
      },
      {
        prompt:
          'The passenger vehicle was acquired for 30,000,000 XOF. Up to what value is depreciation deductible?',
        options: ['10,000,000 XOF', '15,000,000 XOF', '30,000,000 XOF', 'No cap applies.'],
        answer: 1,
        explanation:
          'Art. 8 CGI caps deductible depreciation on passenger vehicles at 15,000,000 XOF; the excess is added back.',
      },
      {
        prompt: 'What rate applies to the adjusted taxable profit to obtain corporate income tax?',
        options: ['15%', '25%', '30%', '35%'],
        answer: 2,
        explanation: 'The standard corporate income tax (IS) rate is 30%.',
      },
    ],
    '1.4': [
      {
        prompt: 'What is the main red flag in this file?',
        options: [
          'The client paid an advance rather than on delivery.',
          'Three successive transfers from undisclosed high-risk jurisdictions — structuring with no economic justification.',
          'The contract is an export contract.',
          'The client is registered at the RCCM.',
        ],
        answer: 1,
        explanation: 'Complex structuring without a demonstrated economic rationale is a classic laundering indicator.',
      },
      {
        prompt: 'Who must the suspicious transaction report ultimately reach?',
        options: [
          'The DGID.',
          'CENTIF, via the Compliance Officer.',
          'The client’s bank.',
          'The commercial court.',
        ],
        answer: 1,
        explanation: 'Suspicious transaction reports are filed with CENTIF; internally they pass through the Compliance Officer.',
      },
      {
        prompt: 'The organisation chart shows a nominee structure. What does the AML/CFT framework require?',
        options: [
          'Nothing, provided the company is registered.',
          'Identification of the beneficial owners behind the structure.',
          'A bank guarantee covering the advance.',
          'An audit of the client’s accounts.',
        ],
        answer: 1,
        explanation: 'WAEMU/Senegal AML/CFT/CPF rules require customer due diligence and identification of beneficial owners.',
      },
    ],
    '2.1': [
      {
        prompt: 'Three orders of 3,000,000 XOF on the same day to the same supplier — what is this called?',
        options: [
          'Competitive tendering.',
          'Order splitting (salami slicing) — a deliberate breach of the delegation of authority.',
          'A framework agreement.',
          'A legitimate way of staying within budget.',
        ],
        answer: 1,
        explanation: 'Splitting an order to stay under a signature limit is a deliberate breach of the delegation of authority.',
      },
      {
        prompt: 'Who should have approved a 9,000,000 XOF purchase?',
        options: [
          'The purchasing assistant alone.',
          'General Management.',
          'The supplier.',
          'Any two colleagues from the same team.',
        ],
        answer: 1,
        explanation: 'The assistant’s limit is 3,000,000 XOF; above it the delegation of authority requires General Management.',
      },
      {
        prompt: 'What should the internal control workflow do?',
        options: [
          'Process the three orders, then report at year-end.',
          'Block the processing, notify Internal Audit/Compliance and recalibrate it as one global order.',
          'Cancel the supplier relationship immediately.',
          'Ask the supplier to issue a single invoice instead.',
        ],
        answer: 1,
        explanation: 'Automatic block by accounting, notification to Internal Audit/Compliance, and recalibration of the order.',
      },
    ],
    '2.2': [
      {
        prompt: 'Which fundamental principle was breached?',
        options: [
          'The four-eyes principle on bank reconciliations only.',
          'Segregation of duties — whoever records the invoice must not be able to release the payment.',
          'The going concern principle.',
          'The materiality principle.',
        ],
        answer: 1,
        explanation: 'Under SOD, recording an entry and authorising its payment must sit with different people.',
      },
      {
        prompt: 'Which control would have stopped the duplicate?',
        options: [
          'A monthly budget review.',
          'Automatic blocking of duplicate invoice numbers, plus matching against the goods receipt note.',
          'A stricter password policy.',
          'An annual external audit.',
        ],
        answer: 1,
        explanation: 'System locks on duplicate invoice numbers and three-way matching before payment.',
      },
      {
        prompt: 'How are the funds recovered?',
        options: [
          'They are written off as a loss.',
          'Through a formal demand letter to the provider.',
          'By deducting them from the assistant’s salary.',
          'By filing a criminal complaint against the provider.',
        ],
        answer: 1,
        explanation: 'Recovery through a formal demand letter, together with activation of the system locks.',
      },
    ],
    '2.3': [
      {
        prompt: 'Which Senegalese law does this breach?',
        options: [
          'Act No. 2014-10 (Customs Code).',
          'Act No. 2008-12 of 25 January 2008 on the protection of personal data.',
          'The CIMA Code.',
          'The Labour Code only.',
        ],
        answer: 1,
        explanation: 'Act No. 2008-12 of 25 January 2008 governs personal data protection in Senegal.',
      },
      {
        prompt: 'Which authority can impose administrative sanctions?',
        options: ['CENTIF.', 'The CDP (Personal Data Commission).', 'The DGID.', 'The CRCA.'],
        answer: 1,
        explanation: 'The CDP supervises personal data protection and can sanction breaches.',
      },
      {
        prompt: 'How should this be handled internally?',
        options: [
          'Ignore it — the agent was working from home in good faith.',
          'Escalate it as a serious breach of the security and confidentiality obligations, with disciplinary action.',
          'Ask the agent to delete the file and say nothing.',
          'Allow it provided the USB stick is encrypted afterwards.',
        ],
        answer: 1,
        explanation: 'It breaches the PSSI and the confidentiality obligations attached to client data; escalation and internal discipline follow.',
      },
    ],
    '2.4': [
      {
        prompt: 'What is the authorised gift ceiling under the ethics charter?',
        options: [
          '10,000 XOF per year',
          '50,000 XOF per year',
          '500,000 XOF per year',
          'No ceiling, provided the gift is declared.',
        ],
        answer: 1,
        explanation: 'The Code of Conduct sets the ceiling at 50,000 XOF per year.',
      },
      {
        prompt: 'How is the offer qualified?',
        options: [
          'A normal commercial courtesy.',
          'An attempted private-sector bribery.',
          'A marketing expense of the supplier.',
          'A conflict of interest with no legal consequence.',
        ],
        answer: 1,
        explanation: 'Offering a benefit while a contract is up for renewal qualifies as attempted private-sector bribery.',
      },
      {
        prompt: 'What is the correct sequence of actions?',
        options: [
          'Accept the tickets and declare them in the gift register.',
          'Refuse immediately, notify the supplier in writing, record it in the Transparency & Gifts Register and alert the Compliance Officer.',
          'Refuse verbally and say nothing further.',
          'Transfer the tickets to another department.',
        ],
        answer: 1,
        explanation: 'Refusal, written notification, entry in the gifts register and alert to the Compliance Officer.',
      },
    ],
    '3.1': [
      {
        prompt: 'Which article of the CIMA Code governs the inception of cover?',
        options: ['Article 6', 'Article 13', 'Article 18', 'Article 45'],
        answer: 1,
        explanation: 'Article 13 of the CIMA Code makes inception conditional on payment of the premium.',
      },
      {
        prompt: 'When does the contract take effect?',
        options: [
          'On the date the policy is signed.',
          'Only once the premium, or its first instalment, has been paid in full.',
          'On the first day of the month following signature.',
          'When the insurer issues the certificate, regardless of payment.',
        ],
        answer: 1,
        explanation: 'Article 13 CIMA: no cover before full payment of the premium or its first instalment.',
      },
      {
        prompt: 'What is the insurer’s position on the 10 May fire?',
        options: [
          'Pay the claim in full — the policy was signed on 1 May.',
          'Cover was suspended on the date of loss; issue a denial-of-cover letter.',
          'Pay half the indemnity as a commercial gesture.',
          'Pay, then cancel the policy for the future.',
        ],
        answer: 1,
        explanation: 'The premium was paid on 12 May, after the 10 May loss, so cover was suspended when the fire occurred.',
      },
    ],
    '3.2': [
      {
        prompt: 'Which body is carrying out the control?',
        options: [
          'CENTIF',
          'The CRCA (Regional Insurance Control Commission)',
          'The CDP',
          'The DGID',
        ],
        answer: 1,
        explanation: 'The CRCA supervises insurers within the CIMA zone.',
      },
      {
        prompt: 'Which measure is mandatory under the CIMA business continuity requirements?',
        options: [
          'An annual staff satisfaction survey.',
          'Periodic failover tests to a backup site (disaster recovery plan).',
          'A paper archive of all policies.',
          'Outsourcing all IT to a single provider.',
        ],
        answer: 1,
        explanation: 'The CIMA directives on IT governance require tested failover to a backup site.',
      },
      {
        prompt: 'What must be done with the client databases?',
        options: [
          'Publish a summary to the regulator every month.',
          'Encrypt them.',
          'Store them exclusively on local workstations.',
          'Delete them at the end of each financial year.',
        ],
        answer: 1,
        explanation: 'Encryption of client databases is part of the mandatory implementation, alongside an operational emergency plan.',
      },
    ],
    '3.3': [
      {
        prompt: 'What is the strongest red flag?',
        options: [
          'The vehicle is a luxury model.',
          'The policy was taken out only 72 hours before the alleged accident (early claim).',
          'The claim was reported by telephone.',
          'The expert inspected the vehicle on site.',
        ],
        answer: 1,
        explanation: 'An ultra-early claim is a primary fraud indicator, here reinforced by inconsistent statements.',
      },
      {
        prompt: 'Which clause can the insurer trigger for an intentional false statement?',
        options: [
          'The proportional rule on premiums.',
          'The forfeiture clause for intentional misrepresentation (Art. 18 of the CIMA Code).',
          'The subrogation clause.',
          'The arbitration clause.',
        ],
        answer: 1,
        explanation: 'Art. 18 of the CIMA Code covers forfeiture for intentional misrepresentation.',
      },
      {
        prompt: 'What is the correct next step?',
        options: [
          'Pay the 18,000,000 XOF and monitor the client.',
          'Refer the file to the internal anti-fraud unit and open an investigation.',
          'Close the file without a decision.',
          'Ask the third party to withdraw the claim.',
        ],
        answer: 1,
        explanation: 'The claim must go to the internal anti-fraud unit before any indemnity decision.',
      },
    ],
    '3.4': [
      {
        prompt: 'How must the foreign public figure be classified?',
        options: [
          'An ordinary retail client.',
          'A politically exposed person (PEP).',
          'A corporate client.',
          'An intermediary.',
        ],
        answer: 1,
        explanation: 'A foreign public figure is a PEP and triggers enhanced due diligence.',
      },
      {
        prompt: 'What does enhanced due diligence require here?',
        options: [
          'A simple copy of the identity document.',
          'General Management approval plus evidence of the lawful origin of the funds.',
          'A medical examination.',
          'A second signature from the sales agent.',
        ],
        answer: 1,
        explanation: 'PEP relationships require senior management approval and source-of-wealth evidence.',
      },
      {
        prompt: 'What else is wrong with this subscription?',
        options: [
          'Nothing else — the payment method is irrelevant.',
          'The cash payment exceeds the legal ceiling, which also calls for a suspicious transaction report to CENTIF.',
          'Unit-linked policies cannot be sold to foreign nationals.',
          'The premium is too small to be accepted.',
        ],
        answer: 1,
        explanation: 'A 50,000,000 XOF cash payment breaches the legal ceiling and must be reported to CENTIF.',
      },
    ],
    '4.1': [
      {
        prompt: 'Under DAP (Incoterms 2020), how far do the seller’s risks and costs run?',
        options: [
          'Up to the port of loading only.',
          'Until the goods are placed at the buyer’s disposal, not unloaded, at the agreed destination.',
          'Until the goods have cleared customs at destination.',
          'They pass to the buyer as soon as the goods are handed to the carrier.',
        ],
        answer: 1,
        explanation: 'DAP: the seller bears all risks and costs up to delivery at the named place, goods not unloaded.',
      },
      {
        prompt: 'Who bears the financial loss for the damage found at Dakar?',
        options: [
          'The buyer, because he paid the unloading costs.',
          'The seller — the claim goes to the seller’s transport insurance.',
          'The port authority.',
          'It is split equally between the parties.',
        ],
        answer: 1,
        explanation: 'The damage occurred before the goods were placed at the buyer’s disposal, so it is the seller’s risk.',
      },
      {
        prompt: 'Paying the unloading costs on the quay means the buyer…',
        options: [
          '…automatically took over the risk from that moment.',
          '…paid a cost that does not, by itself, transfer the risk for damage occurring earlier.',
          '…converted the contract into an EXW.',
          '…lost any right to claim.',
        ],
        answer: 1,
        explanation: 'Under DAP the buyer is released from liability for damage arising before the goods are placed at his disposal.',
      },
    ],
    '4.2': [
      {
        prompt: 'What offence do customs suspect?',
        options: [
          'Under-valuation of the goods.',
          'Misdeclaration of the tariff heading (incorrect HS code).',
          'Importing prohibited goods.',
          'Smuggling outside the customs office.',
        ],
        answer: 1,
        explanation: 'The suspicion is a false declaration of tariff heading to cut the cumulative duty and tax rate.',
      },
      {
        prompt: 'Which text governs this offence?',
        options: [
          'The CIMA Code.',
          'The Senegalese Customs Code, Act No. 2014-10, Art. 61 et seq.',
          'The General Tax Code, Art. 222.',
          'The WAEMU TRIE convention.',
        ],
        answer: 1,
        explanation: 'Act No. 2014-10, Art. 61 et seq., covers misdeclaration of tariff heading.',
      },
      {
        prompt: 'When the real tariff is reconstructed, what VAT rate applies?',
        options: ['10%', '18%', '20%', 'No VAT applies on imports.'],
        answer: 1,
        explanation: 'The reconstruction covers customs duty + statistical levy + 18% VAT + CITI, plus penalties.',
      },
    ],
    '4.3': [
      {
        prompt: '150 cartons are missing from the manifest and the declaration. What is the offence?',
        options: [
          'A simple administrative irregularity with no penalty.',
          'Importation without declaration of prohibited or dutiable goods (Art. 390+ of the Customs Code).',
          'A breach of the Incoterms.',
          'A transfer pricing adjustment.',
        ],
        answer: 1,
        explanation: 'Undeclared goods found on inspection fall under Art. 390+ of the Customs Code.',
      },
      {
        prompt: 'What is the financial exposure?',
        options: [
          'A fixed fine of 100,000 XOF.',
          'Confiscation of the goods plus a fine equal to twice their value, with criminal exposure.',
          'Payment of the duty only.',
          'Nothing, if the goods are re-exported.',
        ],
        answer: 1,
        explanation: 'Confiscation, a fine of twice the value, and the risk of criminal prosecution.',
      },
      {
        prompt: 'How can the public action be extinguished?',
        options: [
          'By appealing to the commercial court.',
          'By filing a request for a customs settlement (Art. 343 of the Customs Code).',
          'By replacing the freight forwarder.',
          'By waiting for the limitation period to expire.',
        ],
        answer: 1,
        explanation: 'Art. 343 allows a settlement request seeking moderation of the fines.',
      },
    ],
    '4.4': [
      {
        prompt: 'The intermediary demands an unofficial cash payment. What is the correct response?',
        options: [
          'Pay it — it is normal local practice and the truck must move.',
          'Refuse categorically; such a payment is a criminal offence.',
          'Pay it and record it as a miscellaneous transport cost.',
          'Leave the decision to the driver.',
        ],
        answer: 1,
        explanation: 'Facilitation payments are prohibited without exception.',
      },
      {
        prompt: 'Which frameworks make such a payment punishable?',
        options: [
          'Only internal company policy.',
          'Senegalese anti-corruption law and international texts such as the FCPA and the UK Bribery Act.',
          'The CIMA Code.',
          'The Incoterms 2020 rules.',
        ],
        answer: 1,
        explanation: 'The payment is punishable under Senegalese and international anti-corruption law.',
      },
      {
        prompt: 'What is the correct escalation?',
        options: [
          'Contact the intermediary’s manager and negotiate the amount.',
          'Refer immediately to the official customs declarant and require an official Treasury receipt for any fee claimed.',
          'Unload the truck and return to Dakar.',
          'Report the driver to the police.',
        ],
        answer: 1,
        explanation: 'Only fees backed by an official Treasury receipt are legitimate; the licensed declarant must verify them.',
      },
    ],
  },
  fr: {
    '1.1': [
      {
        prompt:
          'La société a payé des prestataires étrangers non résidents (assistance technique, logiciels). Qu’a-t-on omis ?',
        options: [
          'Rien — les services rendus depuis l’étranger sont hors champ de la fiscalité sénégalaise.',
          'La TVA autoliquidée ou la retenue BNC/TVA sur les prestataires étrangers.',
          'Les factures auraient dû être immobilisées.',
          'Uniquement le droit de timbre sur les contrats.',
        ],
        answer: 1,
        explanation:
          'Art. 175 et suivants du CGI : les paiements aux prestataires non résidents déclenchent la TVA autoliquidée et les obligations de retenue.',
      },
      {
        prompt: 'Quel taux de retenue à la source (BRS) s’applique aux honoraires d’avocats payés localement ?',
        options: ['0 % — les honoraires locaux sont exonérés', '5 %', '18 %', '30 %'],
        answer: 1,
        explanation: 'L’Art. 222 CGI fixe la retenue BRS à 5 % sur les honoraires payés localement.',
      },
      {
        prompt: 'Comment se calculent les pénalités de retard sur les montants omis ?',
        options: [
          'Une pénalité forfaitaire unique de 5 % de l’impôt dû.',
          '10 % le premier mois, puis 1 % par mois supplémentaire.',
          '18 % par an, calculés au jour le jour.',
          '1 % le premier mois, puis 10 % par mois supplémentaire.',
        ],
        answer: 1,
        explanation: 'Art. 667 CGI.',
      },
    ],
    '1.2': [
      {
        prompt: 'Dans quel délai la réponse aux observations du vérificateur doit-elle être déposée ?',
        options: ['15 jours', '30 jours', '60 jours', '90 jours'],
        answer: 1,
        explanation: 'La réponse à une notification de redressement doit parvenir à la DGID dans le délai légal de 30 jours.',
      },
      {
        prompt: 'Sur quelle base défendre les management fees versés à la maison mère ?',
        options: [
          'En démontrant que la maison mère est déficitaire.',
          'Sur le terrain des prix de transfert — réalité des prestations, caractère normal et méthode de tarification de pleine concurrence.',
          'En les requalifiant en dividendes.',
          'Ils sont indéfendables — les frais de siège ne sont jamais déductibles.',
        ],
        answer: 1,
        explanation: 'Art. 17 et 18 CGI, principe de pleine concurrence.',
      },
      {
        prompt: 'Quelle est la position correcte sur la TVA déduite sur les carburants ?',
        options: [
          'Accepter le redressement en totalité — la TVA sur carburant n’est jamais déductible.',
          'Le contester en totalité — tout véhicule de société ouvre droit à déduction.',
          'L’accepter pour le véhicule de tourisme, le contester pour les véhicules de livraison.',
          'L’accepter pour les véhicules de livraison, le contester pour le véhicule de tourisme.',
        ],
        answer: 2,
        explanation:
          'L’Art. 360 CGI exclut les véhicules de tourisme du droit à déduction ; les véhicules de livraison n’en sont pas exclus.',
      },
    ],
    '1.3': [
      {
        prompt: 'Comment traiter l’amende douanière de 2 000 000 XOF dans le passage au résultat fiscal ?',
        options: [
          'Déductible en totalité comme charge d’exploitation.',
          'Réintégrée — les pénalités et amendes ne sont pas déductibles.',
          'Étalée sur trois exercices.',
          'Déductible à hauteur de 50 %.',
        ],
        answer: 1,
        explanation: 'Art. 9 CGI — les pénalités et amendes ne sont jamais déductibles.',
      },
      {
        prompt:
          'Le véhicule de tourisme a été acquis pour 30 000 000 XOF. Jusqu’à quel montant l’amortissement est-il déductible ?',
        options: ['10 000 000 XOF', '15 000 000 XOF', '30 000 000 XOF', 'Aucun plafond ne s’applique.'],
        answer: 1,
        explanation:
          'L’Art. 8 CGI plafonne l’amortissement déductible des véhicules de tourisme à 15 000 000 XOF ; le surplus est réintégré.',
      },
      {
        prompt: 'Quel taux appliquer au résultat fiscal ajusté pour obtenir l’impôt sur les sociétés ?',
        options: ['15 %', '25 %', '30 %', '35 %'],
        answer: 2,
        explanation: 'Le taux de droit commun de l’IS est de 30 %.',
      },
    ],
    '1.4': [
      {
        prompt: 'Quel est le principal signal d’alerte de ce dossier ?',
        options: [
          'Le client a versé un acompte plutôt qu’un paiement à la livraison.',
          'Trois virements successifs depuis des juridictions à haut risque non déclarées — une structuration sans justification économique.',
          'Le contrat est un marché d’exportation.',
          'Le client est inscrit au RCCM.',
        ],
        answer: 1,
        explanation: 'Une structuration complexe sans justification économique avérée est un indicateur classique de blanchiment.',
      },
      {
        prompt: 'À qui la déclaration d’opération suspecte doit-elle finalement parvenir ?',
        options: [
          'À la DGID.',
          'À la CENTIF, via le Compliance Officer.',
          'À la banque du client.',
          'Au tribunal de commerce.',
        ],
        answer: 1,
        explanation: 'Les DOS sont transmises à la CENTIF ; en interne elles passent par le Compliance Officer.',
      },
      {
        prompt: 'L’organigramme révèle une structure de prête-noms. Qu’exige le dispositif LBC/FT ?',
        options: [
          'Rien, dès lors que la société est immatriculée.',
          'L’identification des bénéficiaires effectifs derrière la structure.',
          'Une garantie bancaire couvrant l’acompte.',
          'Un audit des comptes du client.',
        ],
        answer: 1,
        explanation: 'La loi LBC/FT/FP (UEMOA/Sénégal) impose la vigilance KYC et l’identification des bénéficiaires effectifs.',
      },
    ],
    '2.1': [
      {
        prompt:
          'Trois bons de commande de 3 000 000 XOF le même jour au même fournisseur — comment qualifier cette pratique ?',
        options: [
          'Une mise en concurrence.',
          'Un fractionnement de commande (salami slicing) — violation délibérée de la délégation de pouvoir.',
          'Un accord-cadre.',
          'Une manière légitime de respecter le budget.',
        ],
        answer: 1,
        explanation: 'Fractionner une commande pour rester sous son seuil de signature est une violation délibérée de la DDP.',
      },
      {
        prompt: 'Qui aurait dû valider un achat de 9 000 000 XOF ?',
        options: [
          'L’assistant achat seul.',
          'La Direction Générale.',
          'Le fournisseur.',
          'Deux collègues du même service.',
        ],
        answer: 1,
        explanation: 'La limite de l’assistant est de 3 000 000 XOF ; au-delà, la délégation de pouvoir impose la Direction Générale.',
      },
      {
        prompt: 'Que doit faire le workflow de contrôle interne ?',
        options: [
          'Traiter les trois commandes, puis le signaler en fin d’exercice.',
          'Bloquer le traitement, notifier l’audit interne / la conformité et recalibrer la commande globale.',
          'Rompre immédiatement la relation fournisseur.',
          'Demander au fournisseur d’émettre une seule facture.',
        ],
        answer: 1,
        explanation: 'Blocage automatique par la comptabilité, notification à l’IAP et recalibrage de la commande globale.',
      },
    ],
    '2.2': [
      {
        prompt: 'Quel principe fondamental a été enfreint ?',
        options: [
          'Le principe des quatre yeux sur les rapprochements bancaires uniquement.',
          'La séparation des tâches — celui qui saisit la facture ne doit pas pouvoir ordonnancer le paiement.',
          'Le principe de continuité d’exploitation.',
          'Le principe d’importance relative.',
        ],
        answer: 1,
        explanation: 'La SOD impose que la saisie et l’ordonnancement du paiement relèvent de personnes différentes.',
      },
      {
        prompt: 'Quel contrôle aurait empêché le doublon ?',
        options: [
          'Une revue budgétaire mensuelle.',
          'Le blocage automatique des numéros de factures en doublon et le rapprochement avec le bon de réception.',
          'Une politique de mots de passe plus stricte.',
          'Un audit externe annuel.',
        ],
        answer: 1,
        explanation: 'Verrous informatiques sur les doublons et rapprochement à trois documents avant paiement.',
      },
      {
        prompt: 'Comment récupérer les fonds ?',
        options: [
          'Les passer en perte.',
          'Par une lettre de mise en demeure adressée au prestataire.',
          'En les retenant sur le salaire de l’assistant.',
          'En déposant une plainte pénale contre le prestataire.',
        ],
        answer: 1,
        explanation: 'Restitution par lettre de mise en demeure, avec activation des verrous informatiques.',
      },
    ],
    '2.3': [
      {
        prompt: 'Quelle loi sénégalaise est violée ?',
        options: [
          'La loi n° 2014-10 (Code des Douanes).',
          'La loi n° 2008-12 du 25 janvier 2008 relative à la protection des données à caractère personnel.',
          'Le Code CIMA.',
          'Le Code du travail uniquement.',
        ],
        answer: 1,
        explanation: 'La loi n° 2008-12 du 25 janvier 2008 encadre la protection des données personnelles au Sénégal.',
      },
      {
        prompt: 'Quelle autorité peut prononcer des sanctions administratives ?',
        options: ['La CENTIF.', 'La CDP (Commission des Données Personnelles).', 'La DGID.', 'La CRCA.'],
        answer: 1,
        explanation: 'La CDP contrôle la protection des données personnelles et sanctionne les manquements.',
      },
      {
        prompt: 'Comment traiter le cas en interne ?',
        options: [
          'L’ignorer — l’agent travaillait depuis son domicile de bonne foi.',
          'L’escalader comme un manquement grave aux obligations de sécurité et de confidentialité, avec sanction disciplinaire.',
          'Demander à l’agent de supprimer le fichier et ne rien dire.',
          'L’autoriser à condition que la clé USB soit chiffrée ensuite.',
        ],
        answer: 1,
        explanation: 'Manquement à la PSSI et aux obligations de confidentialité des données clients : escalade et sanctions internes.',
      },
    ],
    '2.4': [
      {
        prompt: 'Quel est le plafond de cadeau autorisé par la charte éthique ?',
        options: [
          '10 000 XOF par an',
          '50 000 XOF par an',
          '500 000 XOF par an',
          'Aucun plafond, dès lors que le cadeau est déclaré.',
        ],
        answer: 1,
        explanation: 'Le Code de conduite fixe le plafond à 50 000 XOF par an.',
      },
      {
        prompt: 'Comment qualifier cette offre ?',
        options: [
          'Une courtoisie commerciale normale.',
          'Une tentative de corruption privée.',
          'Une dépense marketing du fournisseur.',
          'Un conflit d’intérêts sans conséquence juridique.',
        ],
        answer: 1,
        explanation: 'Offrir un avantage pendant le renouvellement d’un contrat constitue une tentative de corruption privée.',
      },
      {
        prompt: 'Quelle est la bonne séquence d’actions ?',
        options: [
          'Accepter les billets et les déclarer au registre des cadeaux.',
          'Refuser immédiatement, notifier le fournisseur par écrit, enregistrer au Registre Transparence & Cadeaux et alerter le Compliance Officer.',
          'Refuser verbalement et ne rien formaliser.',
          'Transférer les billets à un autre service.',
        ],
        answer: 1,
        explanation: 'Refus, notification écrite, inscription au registre des cadeaux et alerte au Compliance Officer.',
      },
    ],
    '3.1': [
      {
        prompt: 'Quel article du Code CIMA régit la prise d’effet de la garantie ?',
        options: ['Article 6', 'Article 13', 'Article 18', 'Article 45'],
        answer: 1,
        explanation: 'L’article 13 du Code CIMA conditionne la prise d’effet au paiement de la prime.',
      },
      {
        prompt: 'Quand le contrat prend-il effet ?',
        options: [
          'À la date de signature de la police.',
          'Uniquement après paiement intégral de la prime ou de sa première fraction.',
          'Le premier jour du mois suivant la signature.',
          'Dès l’émission de l’attestation, indépendamment du paiement.',
        ],
        answer: 1,
        explanation: 'Article 13 CIMA : pas de garantie avant paiement intégral de la prime ou de sa première fraction.',
      },
      {
        prompt: 'Quelle est la position de la compagnie sur l’incendie du 10 mai ?',
        options: [
          'Indemniser intégralement — la police a été signée le 1er mai.',
          'La garantie était suspendue au jour du sinistre ; rédiger une lettre de déni de couverture.',
          'Verser la moitié de l’indemnité à titre commercial.',
          'Indemniser puis résilier la police pour l’avenir.',
        ],
        answer: 1,
        explanation: 'La prime a été réglée le 12 mai, après le sinistre du 10 mai : la garantie était suspendue.',
      },
    ],
    '3.2': [
      {
        prompt: 'Quel organe effectue le contrôle ?',
        options: [
          'La CENTIF',
          'La CRCA (Commission Régionale de Contrôle des Assurances)',
          'La CDP',
          'La DGID',
        ],
        answer: 1,
        explanation: 'La CRCA contrôle les compagnies d’assurance de la zone CIMA.',
      },
      {
        prompt: 'Quelle mesure est obligatoire au titre de la continuité d’activité CIMA ?',
        options: [
          'Une enquête annuelle de satisfaction du personnel.',
          'Des tests périodiques de basculement vers un site de secours (disaster recovery plan).',
          'Un archivage papier de toutes les polices.',
          'L’externalisation de toute l’informatique vers un prestataire unique.',
        ],
        answer: 1,
        explanation: 'Les directives CIMA sur la gouvernance informatique imposent des tests de basculement vers un site de secours.',
      },
      {
        prompt: 'Que faut-il faire des bases de données clients ?',
        options: [
          'En publier un résumé mensuel au régulateur.',
          'Les chiffrer.',
          'Les stocker exclusivement sur les postes locaux.',
          'Les supprimer à la fin de chaque exercice.',
        ],
        answer: 1,
        explanation: 'Le chiffrement des bases clients fait partie des mesures obligatoires, avec le plan d’urgence opérationnel.',
      },
    ],
    '3.3': [
      {
        prompt: 'Quel est l’indice d’alerte le plus fort ?',
        options: [
          'Le véhicule est un modèle de luxe.',
          'La police a été souscrite 72 heures seulement avant l’accident présumé (sinistre ultra-précoce).',
          'Le sinistre a été déclaré par téléphone.',
          'L’expert a examiné le véhicule sur place.',
        ],
        answer: 1,
        explanation: 'Le sinistre ultra-précoce est un indicateur majeur de fraude, ici renforcé par des déclarations incohérentes.',
      },
      {
        prompt: 'Quelle clause la compagnie peut-elle actionner en cas de fausse déclaration intentionnelle ?',
        options: [
          'La règle proportionnelle de prime.',
          'La clause de déchéance pour fausse déclaration intentionnelle (Art. 18 du Code CIMA).',
          'La clause de subrogation.',
          'La clause d’arbitrage.',
        ],
        answer: 1,
        explanation: 'L’Art. 18 du Code CIMA prévoit la déchéance pour fausse déclaration intentionnelle.',
      },
      {
        prompt: 'Quelle est la suite correcte à donner ?',
        options: [
          'Régler les 18 000 000 XOF et surveiller le client.',
          'Saisir la cellule interne anti-fraude et ouvrir une enquête.',
          'Classer le dossier sans décision.',
          'Demander à la partie adverse de retirer sa déclaration.',
        ],
        answer: 1,
        explanation: 'Le dossier doit être transmis à la cellule anti-fraude avant toute décision d’indemnisation.',
      },
    ],
    '3.4': [
      {
        prompt: 'Comment qualifier cette personnalité publique étrangère ?',
        options: [
          'Un client particulier ordinaire.',
          'Une Personne Politiquement Exposée (PPE).',
          'Un client entreprise.',
          'Un intermédiaire.',
        ],
        answer: 1,
        explanation: 'Une personnalité publique étrangère est une PPE et déclenche la vigilance renforcée.',
      },
      {
        prompt: 'Qu’exige la vigilance renforcée dans ce cas ?',
        options: [
          'Une simple copie de la pièce d’identité.',
          'L’accord de la Direction Générale et la justification de l’origine licite du patrimoine.',
          'Un examen médical.',
          'Une seconde signature de l’agent commercial.',
        ],
        answer: 1,
        explanation: 'Les relations avec une PPE exigent l’accord de la direction et la justification de l’origine des fonds.',
      },
      {
        prompt: 'Quelle autre irrégularité affecte cette souscription ?',
        options: [
          'Aucune autre — le mode de paiement est indifférent.',
          'Le paiement en espèces dépasse le plafond légal, ce qui impose également une DOS à la CENTIF.',
          'Les contrats en unités de compte ne peuvent pas être vendus à des étrangers.',
          'La prime est trop faible pour être acceptée.',
        ],
        answer: 1,
        explanation: 'Un versement en espèces de 50 000 000 XOF dépasse le plafond légal et doit être déclaré à la CENTIF.',
      },
    ],
    '4.1': [
      {
        prompt: 'En DAP (Incoterms 2020), jusqu’où courent les risques et frais du vendeur ?',
        options: [
          'Jusqu’au port d’embarquement seulement.',
          'Jusqu’à la mise à disposition des marchandises non déchargées au lieu de destination convenu.',
          'Jusqu’au dédouanement à destination.',
          'Ils passent à l’acheteur dès la remise au transporteur.',
        ],
        answer: 1,
        explanation: 'En DAP, le vendeur supporte tous les risques et frais jusqu’à la mise à disposition, marchandises non déchargées.',
      },
      {
        prompt: 'Qui supporte la perte financière de l’avarie constatée à Dakar ?',
        options: [
          'L’acheteur, puisqu’il a payé les frais de déchargement.',
          'Le vendeur — la réclamation est imputée à son assurance transport.',
          'L’autorité portuaire.',
          'Elle est partagée à parts égales.',
        ],
        answer: 1,
        explanation: 'L’avarie est survenue avant la mise à disposition : le risque reste au vendeur.',
      },
      {
        prompt: 'Le paiement des frais de déchargement par l’acheteur signifie que celui-ci…',
        options: [
          '…a automatiquement repris le risque à ce moment-là.',
          '…a payé un coût qui, à lui seul, ne transfère pas le risque des avaries antérieures.',
          '…a transformé le contrat en EXW.',
          '…a perdu tout droit à réclamation.',
        ],
        answer: 1,
        explanation: 'En DAP, l’acheteur est libéré de la responsabilité des avaries survenues avant la mise à disposition.',
      },
    ],
    '4.2': [
      {
        prompt: 'Quelle infraction la douane soupçonne-t-elle ?',
        options: [
          'Une sous-évaluation de la marchandise.',
          'Une fausse déclaration d’espèce tarifaire (mauvaise codification SH).',
          'L’importation de marchandises prohibées.',
          'De la contrebande hors bureau de douane.',
        ],
        answer: 1,
        explanation: 'Le soupçon porte sur une fausse déclaration d’espèce visant à réduire le taux cumulé des droits et taxes.',
      },
      {
        prompt: 'Quel texte encadre cette infraction ?',
        options: [
          'Le Code CIMA.',
          'Le Code des Douanes du Sénégal, loi n° 2014-10, Art. 61 et suivants.',
          'Le Code Général des Impôts, Art. 222.',
          'La convention TRIE de l’UEMOA.',
        ],
        answer: 1,
        explanation: 'La loi n° 2014-10, Art. 61 et suivants, vise la fausse déclaration d’espèce.',
      },
      {
        prompt: 'Lors de la reconstitution du tarif réel, quel taux de TVA s’applique ?',
        options: ['10 %', '18 %', '20 %', 'Aucune TVA à l’importation.'],
        answer: 1,
        explanation: 'La reconstitution comprend droits de douane + RS + TVA 18 % + CITI, ainsi que les pénalités.',
      },
    ],
    '4.3': [
      {
        prompt: '150 cartons ne figurent ni au manifeste ni à la déclaration détaillée. Quelle est l’infraction ?',
        options: [
          'Une simple irrégularité administrative sans sanction.',
          'Importation sans déclaration de marchandises prohibées ou taxées (Art. 390+ du Code des Douanes).',
          'Une violation des Incoterms.',
          'Un ajustement de prix de transfert.',
        ],
        answer: 1,
        explanation: 'Des marchandises non déclarées découvertes à la visite relèvent des Art. 390 et suivants du Code des Douanes.',
      },
      {
        prompt: 'Quel est le risque financier ?',
        options: [
          'Une amende forfaitaire de 100 000 XOF.',
          'La confiscation des marchandises et une amende égale au double de leur valeur, avec risque pénal.',
          'Le seul paiement des droits.',
          'Aucun, si les marchandises sont réexportées.',
        ],
        answer: 1,
        explanation: 'Confiscation, amende égale au double de la valeur et risque de poursuite pénale.',
      },
      {
        prompt: 'Comment éteindre l’action publique ?',
        options: [
          'En saisissant le tribunal de commerce.',
          'En déposant une requête en transaction douanière (Art. 343 du Code des Douanes).',
          'En remplaçant le transitaire.',
          'En attendant la prescription.',
        ],
        answer: 1,
        explanation: 'L’Art. 343 permet une requête en transaction sollicitant une modération des amendes.',
      },
    ],
    '4.4': [
      {
        prompt: 'L’intermédiaire réclame un paiement non officiel en espèces. Quelle est la bonne réponse ?',
        options: [
          'Payer — c’est une pratique locale courante et le camion doit repartir.',
          'Refuser catégoriquement ; ce paiement constitue une infraction pénale.',
          'Payer et l’enregistrer en frais de transport divers.',
          'Laisser le chauffeur décider.',
        ],
        answer: 1,
        explanation: 'Les paiements de facilitation sont interdits sans exception.',
      },
      {
        prompt: 'Quels cadres rendent ce paiement punissable ?',
        options: [
          'Uniquement la politique interne de l’entreprise.',
          'La loi anti-corruption sénégalaise et les textes internationaux tels que le FCPA et le UK Bribery Act.',
          'Le Code CIMA.',
          'Les règles Incoterms 2020.',
        ],
        answer: 1,
        explanation: 'Le paiement est punissable par les lois sénégalaises et internationales anti-corruption.',
      },
      {
        prompt: 'Quelle est la bonne escalade ?',
        options: [
          'Contacter le supérieur de l’intermédiaire et négocier le montant.',
          'Saisir immédiatement le déclarant en douane officiel et exiger une quittance officielle du Trésor Public pour tout frais réclamé.',
          'Décharger le camion et revenir à Dakar.',
          'Dénoncer le chauffeur à la police.',
        ],
        answer: 1,
        explanation: 'Seuls les frais appuyés d’une quittance officielle du Trésor sont légitimes ; le déclarant agréé doit les vérifier.',
      },
    ],
  },
};

export default quiz;
