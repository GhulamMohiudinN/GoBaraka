'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiArrowRight, FiFileText, FiX } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/assests/logo.jpeg';
import Image from 'next/image';

const Footer = () => {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const codeModalContent = {
    en: {
      title: 'Code of Conduct & Code of Ethics',
      availableLabel: 'Available in English and French. Use the language switcher to toggle.',
      codeOfConduct: {
        heading: 'Code of Conduct',
        subtitle: '(Aligned with Risk Management Principles, and National Industry Guidelines)',
        sections: [
          {
            title: '1. Purpose',
            paragraphs: [
              'This Code of Conduct sets the ethical and professional standards expected of all IRIS-Monde staff, contractors, and representatives. Integrity, responsibility, intelligent innovation, and scrutiny guide our commitment to conscious risk management, supporting honest and excellent client outcomes.',
            ],
          },
          {
            title: '2. Values',
            paragraphs: [
              'We operate with sincerity, open communication, and trust in all dealings with our stakeholders. Every decision is based on objectivity rather than personal gain. Ethical governance is monitored, reviewed, and continuously improved.',
            ],
            note: 'Note: A highly performing ethical governance model – ITROC Framework – where Integrity and Trust reinforce organisational confidence. A model that warrants evidence-based ethical, transparent, and risk-aware practices.',
          },
          {
            title: '3. Guiding Principles',
            paragraphs: [
              'All decisions and actions within IRIS-Monde must reflect the following core risk management principles:',
            ],
            orderedList: [
              'Integrity – Guiding global governance and lawful behaviour.',
              'Transparency – Enabling open communication with all stakeholders about risks and outcomes.',
              'Responsibility – Treating clients, partners, and colleagues with fairness, courtesy, and dignity, and taking accountability for all actions and decisions.',
              'Objectivity – Ensuring risk assessments and advice are evidence-based, free from bias or conflict of interest.',
              'Compliance & Continuous Improvement – Monitoring, reviewing, and enhancing risk processes, controls, and professional standards.',
            ],
          },
          {
            title: '4. Compliance with Laws and Regulations',
            list: [
              'IRIS-Monde must comply with all applicable laws and standards relevant to its operations.',
              'All personnel must follow established guidelines for complaints, disputes, and client communication.',
              'Any breach of law, regulation, or this Code must be escalated immediately and handled through proper channels.',
            ],
          },
          {
            title: '5. Fairness and Objective Client Treatment',
            list: [
              'Our services are delivered efficiently, fairly, transparently, and on time.',
              'Client information is treated confidentially and in accordance with privacy obligations.',
              'We avoid misleading or deceptive conduct.',
              'Customer complaints are handled promptly and respectfully.',
              'Clients are informed of their right to seek external review through relevant bodies.',
              'All disputes are resolved to promote fair outcomes, ethical behaviour, and learning.',
            ],
          },
          {
            title: '6. Responsible Conflict of Interest Management',
            list: [
              'Employees and contractors must avoid actions where personal or financial interests conflict with IRIS-Monde’s duty to clients or the public.',
              'All potential conflicts must be declared to a responsible or compliance officer immediately.',
              'Decisions must prioritize client interests and professional objectivity over personal gain.',
            ],
          },
          {
            title: '7. Transparent Risk Awareness and Reporting',
            list: [
              'Employees must proactively identify, assess, and report potential risks, including operational, reputational, financial, or ethical risks.',
              'Risk management practices must align with recognized risk standards and integrate risk considerations into every decision, process, and project.',
              'Employees are encouraged to raise concerns and speak up without fear of retaliation.',
            ],
          },
          {
            title: '8. Integrity and Confidentiality',
            list: [
              'All client, employee, and business information must be safeguarded.',
              'Information may only be used for legitimate business purposes in accordance with privacy and security policies.',
              'Digital systems must be protected against mishandling, breach, or unauthorized access.',
            ],
          },
          {
            title: '9. Professional Conduct',
            list: [
              'Maintain high professional standards in communication, appearance, and client engagement.',
              'Deliver services and advice competently, in line with recognized industry standards.',
              'Support inclusion, diversity, and respect in all work activities and environments.',
            ],
          },
          {
            title: '10. Breaches and Disciplinary Action',
            list: [
              'Any breach of this Code or related policies may result in disciplinary action, including termination or legal proceedings.',
              'All breaches will be investigated fairly, respecting due process and confidentiality.',
            ],
          },
          {
            title: '11. Review and Continuous Improvement',
            list: [
              'This Code is reviewed annually to ensure ongoing alignment with relevant requirements and best practices.',
              'Feedback from employees, clients, and regulators informs future updates.',
            ],
          },
        ],
        acknowledgement: {
          title: 'Acknowledgement',
          intro: 'All employees and contractors must acknowledge and confirm that they:',
          items: [
            'Have read and understood the Code of Conduct.',
            'Agree to comply with it in full.',
            'Commit to promoting the ITROC governance framework across IRIS-Monde operations.',
          ],
        },
      },
      codeOfEthics: {
        heading: 'Code of Ethics',
        subtitle: '(Aligned with ISO 31000 – Risk Management and National Principles)',
        sections: [
          {
            title: '1. Scope',
            paragraphs: [
              'This Code of Ethics defines the values and behavioural standards that guide all activities at IRIS-Monde/Advisory Services. It applies to employees, consultants, directors, and partners, and ensures the organisation upholds the highest levels of integrity, transparency, and ethical governance across all jurisdictions.',
            ],
          },
          {
            title: '2. Ethical Framework — The ITROC Principles',
            table: {
              headers: ['English', 'French', 'Core Meaning'],
              rows: [
                ['Integrity', 'Intégrité', 'Honest, fair, and consistent dealings.'],
                ['Transparency', 'Transparence', 'Communicate openly, clearly and accurately to foster trust.'],
                ['Responsibility', 'Responsabilité', 'Accept accountability for actions, decisions, and outcomes.'],
                ['Objectivity', 'Objectivité', 'Assess information free from bias or conflicts of interest.'],
                ['Compliance', 'Conformité', 'Adhere to relevant legal, regulatory, and professional obligations.'],
              ],
            },
          },
          {
            title: '3. Professional Conduct',
            list: [
              'Conduct activities with integrity and respect for all stakeholders.',
              'Avoid deceptive, misleading, or unethical behaviour in all communications.',
              'Maintain professional competence and continuously improve governance and risk management practices.',
            ],
          },
          {
            title: '4. Client Relations and Fairness',
            list: [
              'Uphold fairness by ensuring all client interactions are just, transparent, and outcome oriented.',
              'Protect customer confidentiality and privacy in accordance with applicable laws.',
              'Provide advice and services that reflect the client’s best interests based on independent, evidence-based assessment.',
              'Deal with all complaints with empathy, fairness, and a commitment to resolution.',
            ],
          },
          {
            title: '5. Conflicts of Interest',
            list: [
              'Detect, disclose, and manage any real or perceived conflicts of interest objectively.',
              'Avoid personal gain, relationships, or pressure that could compromise professional judgment.',
              'Make decisions that reflect the client’s best interests and stakeholders first.',
            ],
          },
          {
            title: '6. Governance and Accountability',
            list: [
              'Ensure all corporate actions align with good governance, risk transparency, and stakeholder accountability.',
              'Leaders should set a strong ethical example that reinforces trust and integrity.',
              'Support regulatory compliance across applicable markets and frameworks.',
            ],
          },
          {
            title: '7. Confidentiality and Data Ethics',
            list: [
              'Treat information obtained in the course of work as confidential and proprietary.',
              'Share information only when authorised, fair, and necessary for legitimate business purposes.',
              'Uphold recognised cybersecurity and data protection standards.',
            ],
          },
          {
            title: '8. Social and Environmental Responsibility',
            list: [
              'Support sustainability, diversity, and inclusion in all business conduct.',
              'Promote ethical investment, social governance, and responsible practices.',
              'Foster collaboration without cultural or language barriers.',
            ],
          },
          {
            title: '9. Reporting and Whistleblowing',
            list: [
              'Encourage employees to report unethical or unlawful behaviour without fear of retaliation.',
              'Provide confidential and accessible reporting channels.',
              'Handle investigations impartially, promptly, and with due process.',
            ],
          },
          {
            title: '10. Implementation and Review',
            list: [
              'Employees must acknowledge this Code and commit to upholding its principles.',
              'The Code is reviewed annually to ensure alignment with evolving standards.',
              'Any breaches will result in appropriate disciplinary action.',
            ],
          },
          {
            title: '11. Ethical Commitment Statement',
            paragraph: 'At IRIS-Monde we believe ethics are not optional — they are the foundation of trust. Every decision, every relationship, and every outcome must reflect our commitment to Integrity, Transparency, Resiliency, Objectivity, and Compliance.',
          },
        ],
      },
    },
    fr: {
      title: 'Code de conduite et code d’éthique',
      availableLabel: 'Disponible en anglais et en français. Utilisez le bouton de changement de langue pour basculer.',
      codeOfConduct: {
        heading: 'Code de conduite',
        subtitle: '(Aligné aux principes de gestion des risques et aux lignes directrices nationales de l’industrie)',
        sections: [
          {
            title: '1. Objectif',
            paragraphs: [
              'Ce Code de conduite définit les normes éthiques et professionnelles attendues de tout le personnel, contractants et représentants d’IRIS-Monde. L’intégrité, la responsabilité, l’innovation intelligente et la rigueur guident notre engagement envers une gestion des risques consciente, soutenant des résultats honnêtes et excellents pour les clients.',
            ],
          },
          {
            title: '2. Valeurs',
            paragraphs: [
              'Nous agissons avec sincérité, communication ouverte et confiance dans toutes nos relations avec les parties prenantes. Chaque décision repose sur l’objectivité et non l’intérêt personnel. La gouvernance éthique est surveillée, revue et améliorée en continu.',
            ],
            note: 'Remarque : un modèle de gouvernance éthique performant – cadre ITROC – où Intégrité et Confiance renforcent la confiance organisationnelle. Un modèle qui exige des pratiques éthiques, transparentes et conscientes des risques basées sur des preuves.',
          },
          {
            title: '3. Principes directeurs',
            paragraphs: [
              'Toutes les décisions et actions au sein d’IRIS-Monde doivent refléter les principes fondamentaux suivants de gestion des risques :',
            ],
            orderedList: [
              'Intégrité – Guidant la gouvernance mondiale et le respect de la loi.',
              'Transparence – Permettre une communication ouverte avec toutes les parties prenantes sur les risques et les résultats.',
              'Responsabilité – Traiter les clients, partenaires et collègues avec équité, courtoisie et dignité, et assumer la responsabilité de toutes les actions et décisions.',
              'Objectivité – Garantir que les évaluations des risques et les conseils sont basés sur des preuves, sans biais ni conflit d’intérêts.',
              'Conformité et amélioration continue – Surveiller, revoir et améliorer les processus, contrôles et normes professionnelles.',
            ],
          },
          {
            title: '4. Conformité aux lois et réglementations',
            list: [
              'IRIS-Monde doit se conformer à toutes les lois et normes applicables à ses activités.',
              'Tout le personnel doit respecter les directives établies pour les plaintes, les litiges et la communication avec les clients.',
              'Toute violation de la loi, d’un règlement ou de ce Code doit être signalée immédiatement et traitée par les canaux appropriés.',
            ],
          },
          {
            title: '5. Traitement équitable et objectif des clients',
            list: [
              'Nos services sont fournis de manière efficace, équitable, transparente et en temps voulu.',
              'Les informations clients sont traitées de manière confidentielle et conformément aux obligations en matière de confidentialité.',
              'Nous évitons les conduites trompeuses ou mensongères.',
              'Les plaintes des clients sont traitées rapidement et avec respect.',
              'Les clients sont informés de leur droit de demander une révision externe auprès des organismes compétents.',
              'Tous les litiges sont résolus pour promouvoir des résultats équitables, un comportement éthique et l’apprentissage.',
            ],
          },
          {
            title: '6. Gestion responsable des conflits d’intérêts',
            list: [
              'Les employés et contractants doivent éviter les actions où des intérêts personnels ou financiers entrent en conflit avec les devoirs d’IRIS-Monde envers les clients ou le public.',
              'Tous les conflits potentiels doivent être déclarés immédiatement à un responsable ou à un agent de conformité.',
              'Les décisions doivent privilégier les intérêts du client et l’objectivité professionnelle plutôt que le gain personnel.',
            ],
          },
          {
            title: '7. Sensibilisation aux risques et transparence',
            list: [
              'Les employés doivent identifier, évaluer et signaler de manière proactive les risques potentiels, y compris les risques opérationnels, réputationnels, financiers ou éthiques.',
              'Les pratiques de gestion des risques doivent aligner sur les normes reconnues et intégrer les risques dans chaque décision, processus et projet.',
              'Les employés sont encouragés à signaler les préoccupations et à s’exprimer sans crainte de représailles.',
            ],
          },
          {
            title: '8. Intégrité et confidentialité',
            list: [
              'Toutes les informations clients, employés et commerciales doivent être protégées.',
              'Les informations ne peuvent être utilisées que pour des activités commerciales légitimes conformément aux politiques de confidentialité et de sécurité.',
              'Les systèmes numériques doivent être protégés contre une mauvaise utilisation, les violations ou l’accès non autorisé.',
            ],
          },
          {
            title: '9. Conduite professionnelle',
            list: [
              'Maintenir des normes professionnelles élevées en matière de communication, d’apparence et d’engagement client.',
              'Fournir des services et des conseils de manière compétente et conforme aux normes reconnues.',
              'Soutenir l’inclusion, la diversité et le respect dans toutes les activités et environnements de travail.',
            ],
          },
          {
            title: '10. Violations et mesures disciplinaires',
            list: [
              'Toute violation de ce Code ou des politiques associées peut entraîner des mesures disciplinaires, y compris un licenciement ou des poursuites judiciaires.',
              'Toutes les violations seront examinées équitablement, en respectant le processus et la confidentialité.',
            ],
          },
          {
            title: '11. Révision et amélioration continue',
            list: [
              'Ce Code est révisé chaque année pour assurer sa conformité aux exigences et aux meilleures pratiques en évolution.',
              'Les commentaires des employés, clients et régulateurs informent les futures mises à jour.',
            ],
          },
        ],
        acknowledgement: {
          title: 'Accusé de réception',
          intro: 'Tous les employés et contractants doivent reconnaître et confirmer qu’ils :',
          items: [
            'Ont lu et compris le Code de conduite.',
            'Acceptent de s’y conformer intégralement.',
            'S’engagent à promouvoir le cadre de gouvernance ITROC dans les opérations d’IRIS-Monde.',
          ],
        },
      },
      codeOfEthics: {
        heading: 'Code d’éthique',
        subtitle: '(Aligné sur ISO 31000 – Gestion des risques et principes nationaux)',
        sections: [
          {
            title: '1. Portée',
            paragraphs: [
              'Ce Code d’éthique définit les valeurs et normes comportementales qui guident toutes les activités d’IRIS-Monde / Advisory Services. Il s’applique aux employés, consultants, administrateurs et partenaires, et garantit que l’organisation respecte les normes les plus élevées d’intégrité, de transparence et de gouvernance éthique dans toutes les juridictions.',
            ],
          },
          {
            title: '2. Cadre éthique – Principes ITROC',
            table: {
              headers: ['Anglais', 'Français', 'Sens fondamental'],
              rows: [
                ['Integrity', 'Intégrité', 'Transactions honnêtes, équitables et constantes.'],
                ['Transparency', 'Transparence', 'Communiquer ouvertement, clairement et avec précision pour instaurer la confiance.'],
                ['Responsibility', 'Responsabilité', 'Assumer la responsabilité des actions, décisions et résultats.'],
                ['Objectivity', 'Objectivité', 'Évaluer l’information sans biais ni conflits d’intérêts.'],
                ['Compliance', 'Conformité', 'Respecter les obligations juridiques, réglementaires et professionnelles.'],
              ],
            },
          },
          {
            title: '3. Conduite professionnelle',
            list: [
              'Agir avec intégrité et respect envers toutes les parties prenantes.',
              'Éviter les comportements trompeurs, mensongers ou contraires à l’éthique dans toutes les communications.',
              'Maintenir des compétences professionnelles et améliorer en continu la gouvernance et la gestion des risques.',
            ],
          },
          {
            title: '4. Relations clients et équité',
            list: [
              'Assurer l’équité en veillant à ce que toutes les interactions clients soient justes, transparentes et axées sur les résultats.',
              'Protéger la confidentialité et la vie privée des clients conformément aux lois applicables.',
              'Fournir des conseils et des services reflétant les meilleurs intérêts du client sur la base d’une évaluation indépendante et fondée sur des preuves.',
              'Traiter toutes les plaintes avec empathie, équité et volonté de résoudre.',
            ],
          },
          {
            title: '5. Conflits d’intérêts',
            list: [
              'Détecter, divulguer et gérer objectivement tout conflit d’intérêts réel ou perçu.',
              'Éviter tout gain personnel, relation ou pression pouvant compromettre le jugement professionnel.',
              'Prendre des décisions reflétant toujours les meilleurs intérêts du client et des parties prenantes.',
            ],
          },
          {
            title: '6. Gouvernance et responsabilité',
            list: [
              'Veiller à ce que toutes les actions de l’entreprise s’alignent sur une bonne gouvernance, la transparence des risques et la responsabilité des parties prenantes.',
              'Les dirigeants doivent montrer l’exemple éthique pour renforcer la confiance et l’intégrité.',
              'Soutenir la conformité réglementaire dans les marchés et cadres applicables.',
            ],
          },
          {
            title: '7. Confidentialité et éthique des données',
            list: [
              'Considérer les informations obtenues dans le cadre du travail comme confidentielles et exclusives.',
              'Partager les informations uniquement lorsqu’elles sont autorisées, équitables et nécessaires à des fins commerciales légitimes.',
              'Respecter les normes reconnues de cybersécurité et de protection des données.',
            ],
          },
          {
            title: '8. Responsabilité sociale et environnementale',
            list: [
              'Soutenir la durabilité, la diversité et l’inclusion dans toutes les activités commerciales.',
              'Promouvoir des investissements éthiques, une gouvernance sociale et des pratiques responsables.',
              'Favoriser la collaboration sans barrières culturelles ou linguistiques.',
            ],
          },
          {
            title: '9. Signalement et protection des lanceurs d’alerte',
            list: [
              'Encourager les employés à signaler les comportements contraires à l’éthique ou illégaux sans crainte de représailles.',
              'Fournir des canaux de signalement confidentiels et accessibles.',
              'Traiter les enquêtes de manière impartiale, rapide et avec le respect du processus.',
            ],
          },
          {
            title: '10. Mise en œuvre et révision',
            list: [
              'Les employés doivent reconnaître ce Code et s’engager à en respecter les principes.',
              'Le Code est révisé annuellement pour garantir son alignement avec l’évolution des normes.',
              'Toute violation entraînera des mesures disciplinaires appropriées.',
            ],
          },
          {
            title: '11. Déclaration d’engagement éthique',
            paragraph: 'Chez IRIS-Monde, nous considérons que l’éthique n’est pas optionnelle — elle est le fondement de la confiance. Chaque décision, chaque relation et chaque résultat doit refléter notre engagement envers l’Intégrité, la Transparence, la Résilience, l’Objectivité et la Conformité.',
          },
        ],
      },
    },
  };

  const content = codeModalContent[language];

  const renderSection = (section) => (
    <div key={section.title}>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h4>
      {section.paragraphs?.map((paragraph, idx) => (
        <p className="text-gray-700 leading-relaxed mb-2" key={idx}>{paragraph}</p>
      ))}
      {section.paragraph && (
        <p className="text-gray-800 leading-relaxed italic mb-4">{section.paragraph}</p>
      )}
      {section.note && (
        <p className="text-gray-700 leading-relaxed mt-2 italic">{section.note}</p>
      )}
      {section.orderedList && (
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          {section.orderedList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      )}
      {section.list && (
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          {section.list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                {section.table.headers.map((header) => (
                  <th key={header} className="border border-gray-300 px-4 py-2 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 1 ? 'bg-gray-50' : ''}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  const renderAcknowledgement = (acknowledgement) => (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{acknowledgement.title}</h4>
      <p className="text-gray-700 leading-relaxed">{acknowledgement.intro}</p>
      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
        {acknowledgement.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.logistics, href: '/logistics' },
    { name: t.nav.transport, href: '/transport' },
    { name: t.nav.tourism, href: '/tourism' },
    { name: t.nav.trading, href: '/trading' },
    { name: t.nav.digitalServices, href: '/digital-services' },
    { name: t.nav.crypto, href: '/crypto' },
    { name: t.nav.portfolio, href: '/portfolio' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)`
          }} />
        </div>

        {/* Top decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">GB</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                  Go Baraka Sarl
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A diversified business group committed to excellence and innovation across multiple sectors.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                {t.footer.quickLinks}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1"></div>
              </h3>
              <ul className="space-y-2">
                {navigation.slice(0, 6).map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Resources
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1"></div>
              </h3>
              <ul className="space-y-2">
                {navigation.slice(6).map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group w-full"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t.footer.codeOfConductButton}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact & Commitment */}
            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Get in Touch
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1"></div>
              </h3>
              
              {/* Contact Info */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                    <FiPhone className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    +77 2043677
                  </span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                    <FiMail className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    info@al-r.com
                  </span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                    <FiClock className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors block">
                      Mon-Fri: 9:00 - 18:00
                    </span>
                    <span className="text-gray-500 text-xs">(GMT+1)</span>
                  </div>
                </li>
              </ul>

              {/* Commitment Box */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">
                  {t.footer.ourCommitment}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-2">
                  {t.footer.commitmentText}
                </p>
                <p className="text-gray-500 text-xs italic">
                  {t.footer.companySummary}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Go Baraka Sarl. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full md:w-[90%] max-w-6xl h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FiFileText className="w-6 h-6 text-white" />
                  <h2 className="text-xl font-bold text-white">{content.title}</h2>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors self-start md:self-auto"
                >
                  <FiX className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="mt-2 text-xs text-white/80">{content.availableLabel}</p>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto h-[calc(90vh-64px)] p-6 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">
                  {content.codeOfConduct.heading}
                </h3>
                <p className="text-sm text-gray-500 mb-4 italic">
                  {content.codeOfConduct.subtitle}
                </p>
                <div className="space-y-6">
                  {content.codeOfConduct.sections.map(renderSection)}
                  {renderAcknowledgement(content.codeOfConduct.acknowledgement)}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-500">
                  {content.codeOfEthics.heading}
                </h3>
                <p className="text-sm text-gray-500 mb-4 italic">
                  {content.codeOfEthics.subtitle}
                </p>
                <div className="space-y-6">
                  {content.codeOfEthics.sections.map(renderSection)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;