'use client';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      logistics: 'Logistics',
      transport: 'Transport',
      tourism: 'Tourism',
      trading: 'Trading',
      digitalServices: 'Digital Services',
      crypto: 'Crypto',
      portfolio: 'Portfolio',
      careers: 'Careers',
      contact: 'Contact',
    },
    header: {
      switchLabel: 'FR',
      switchTitle: 'Switch to French',
    },
    footer: {
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      ourCommitment: 'Our Commitment',
      commitmentText: 'Delivering excellence across all our business verticals with a focus on growth and innovation.',
      note: 'All rights reserved.',
      companySummary: 'We`re building sustainable partnerships, business integrity for long-term success.',
      codeOfConductButton: 'Code of Conduct & Ethics',
    },
    hero: {
      label: 'What We Do',
      line1: 'Investing For',
      line2: "Go Baraka's",
      line3: 'Economic Growth',
      description: 'A diversified business group building long-term value through strategic investments in logistics, transport, tourism, trading, and digital innovation.',
      portfolioButton: 'View Portfolio',
      contactButton: 'Contact Us',
    },
    home: {
      sectorsTitle: 'Our Business Sectors',
      sectorsDescription: 'We operate across six key sectors, delivering excellence and driving growth in each vertical.',
      whyTitle: 'Why Choose Go Baraka Sarl',
      whySubtitle: 'Partner with a business group committed to excellence and sustainable growth',
      cards: [
        {
          title: 'Logistics',
          description: 'Comprehensive logistics solutions for businesses across Africa and beyond. We provide end-to-end supply chain management with cutting-edge technology.',
          href: '/logistics',
          color: '#002B5C',
        },
        {
          title: 'Transport',
          description: 'Modern fleet management and transportation services ensuring reliable and timely delivery of goods across the region.',
          href: '/transport',
          color: '#003D7A',
        },
        {
          title: 'Professional Tourism',
          description: 'Curated travel experiences for business and leisure travelers. We create memorable journeys with exceptional service.',
          href: '/tourism',
          color: '#0056A0',
        },
        {
          title: 'Trading',
          description: 'Strategic trading operations in commodities and goods, leveraging strong market relationships and expertise.',
          href: '/trading',
          color: '#002B5C',
        },
        {
          title: 'Digital Services',
          description: 'Innovative digital solutions including web development, IT consulting, and digital transformation services.',
          href: '/digital-services',
          color: '#003D7A',
        },
        {
          title: 'Crypto / Innovation',
          description: 'Exploring the future of finance through blockchain technology and cryptocurrency investments.',
          href: '/crypto',
          color: '#0056A0',
        },
      ],
      whyPoints: [
        {
          number: '1',
          title: 'Diversified Portfolio',
          description: 'Multiple business verticals providing balanced risk and multiple growth opportunities',
        },
        {
          number: '2',
          title: 'Innovation Focus',
          description: 'Embracing technology and innovation across all our business sectors',
        },
        {
          number: '3',
          title: 'Growth Potential',
          description: 'Scalable business model designed for sustainable long-term growth',
        },
      ],
      learnMore: 'Learn More',
    },
    about: {
      heroTitle: 'About Go Baraka Sarl',
      heroDescription: 'A diversified business group committed to excellence, innovation, and sustainable growth across multiple sectors.',
      missionTitle: 'Our Mission',
      missionText: 'To deliver exceptional value to our investors and stakeholders by building and managing a diversified portfolio of businesses that leverage innovation, operational excellence, and strategic partnerships.',
      visionTitle: 'Our Vision',
      visionText: 'To become a leading diversified business group in Africa, recognized for our commitment to excellence, innovation, and sustainable growth across all our business sectors.',
      stats: [
        { label: 'Years of Experience', value: '10+', icon: 'award' },
        { label: 'Business Sectors', value: '6', icon: 'globe' },
        { label: 'Projects Completed', value: '50+', icon: 'trending' },
        { label: 'Team Members', value: '100+', icon: 'users' },
      ],
      valuesTitle: 'Our Core Values',
      values: [
        { title: 'Integrity', description: 'We conduct our business with the highest ethical standards, transparency, and accountability.' },
        { title: 'Innovation', description: 'We continuously seek new ways to improve and stay ahead through technology and creative thinking.' },
        { title: 'Excellence', description: 'We strive for excellence in everything we do, delivering quality results that exceed expectations.' },
      ],
    },
    logistics: {
      heroTitle: 'Logistics',
      heroDescription: 'Comprehensive logistics solutions powered by technology and operational excellence.',
      overviewTitle: 'Moving Business Forward',
      overviewLines: [
        'Our logistics division provides end-to-end supply chain solutions that help businesses optimize their operations, reduce costs, and improve efficiency.',
        'With advanced tracking systems, strategic warehouse locations, and a dedicated team of logistics experts, we ensure your goods move seamlessly from origin to destination.',
      ],
      advantagesTitle: 'Key Advantages',
      advantages: [
        'Real-time tracking and visibility',
        'Strategic warehouse network',
        'Customs clearance expertise',
        'Scalable solutions for growing businesses',
      ],
      servicesTitle: 'Our Logistics Services',
      services: [
        { title: 'Supply Chain Management', description: 'End-to-end supply chain solutions optimized for efficiency and cost-effectiveness.' },
        { title: 'International Freight', description: 'Air, sea, and land freight services connecting businesses across continents.' },
        { title: 'Last Mile Delivery', description: 'Reliable and timely delivery services for the final leg of transportation.' },
        { title: 'Warehousing', description: 'Modern warehousing facilities with advanced inventory management systems.' },
      ],
      growthTitle: 'Growth Potential',
      growthDescription: 'The logistics sector in Africa is experiencing rapid growth. With strategic investments in technology and infrastructure, we are positioned to capture significant market share and deliver strong returns for investors.',
    },
    transport: {
      heroTitle: 'Transport',
      heroDescription: 'Modern fleet management and transportation services ensuring reliable and timely delivery.',
      overviewTitle: 'Moving Goods and People',
      overviewLines: [
        'Our transport division operates a modern fleet of vehicles equipped with the latest tracking and safety technologies.',
        'We specialize in providing reliable transportation solutions for businesses across various industries, ensuring that goods reach their destination safely and on time.',
      ],
      metrics: [
        { value: '50+', label: 'Vehicles' },
        { value: '100+', label: 'Drivers' },
        { value: '98%', label: 'On-time Delivery' },
        { value: '30%', label: 'Annual Growth' },
      ],
      fleetTitle: 'Our Fleet',
      fleet: [
        { type: 'Heavy Trucks', description: 'Long-haul transportation for bulk goods and heavy cargo', capacity: 'Up to 40 tons' },
        { type: 'Medium Vehicles', description: 'Regional distribution and inter-city transport', capacity: '5-15 tons' },
        { type: 'Light Vehicles', description: 'Last-mile delivery and urban logistics', capacity: 'Up to 3.5 tons' },
        { type: 'Specialized Fleet', description: 'Refrigerated and temperature-controlled transport', capacity: 'Custom solutions' },
      ],
      techTitle: 'Technology Integration',
      techDescription: 'We leverage cutting-edge technology to optimize routes, track shipments in real-time, and ensure maximum efficiency.',
      techCards: [
        { title: 'GPS Tracking', description: 'Real-time vehicle location and status monitoring' },
        { title: 'Route Optimization', description: 'AI-powered route planning for efficiency' },
        { title: 'Digital Documentation', description: 'Paperless operations for faster processing' },
      ],
    },
    tourism: {
      heroTitle: 'Professional Tourism',
      heroDescription: 'Creating unforgettable travel experiences for business and leisure travelers.',
      overviewTitle: 'Your Journey Begins Here',
      overviewLines: [
        'Our professional tourism division specializes in creating curated travel experiences that exceed expectations.',
        'From business travel arrangements to luxury vacations, we handle every detail to ensure a seamless and memorable journey.',
      ],
      metrics: [
        { value: '50+', label: 'Destinations' },
        { value: '10k+', label: 'Happy Travelers' },
      ],
      experiencesTitle: 'Travel Experiences',
      experiences: [
        { title: 'Business Travel', description: 'Tailored travel solutions for corporate clients including VIP services and concierge support.' },
        { title: 'Luxury Tourism', description: 'Premium travel experiences to the most exclusive destinations worldwide.' },
        { title: 'Adventure Travel', description: 'Exciting adventure packages for thrill-seekers and outdoor enthusiasts.' },
        { title: 'Cultural Tours', description: 'Immersive cultural experiences exploring local traditions and heritage.' },
      ],
      marketTitle: 'Market Opportunity',
      marketDescription: 'The tourism sector is poised for significant growth post-pandemic. Our strategic positioning and focus on quality service delivery position us to capture this growing market.',
    },
    trading: {
      heroTitle: 'Trading',
      heroDescription: 'Strategic trading operations leveraging market expertise and strong partnerships.',
      overviewTitle: 'Global Trading Expertise',
      overviewLines: [
        'Our trading division focuses on sourcing and distributing high-quality commodities and goods across international markets.',
        'With strong relationships with suppliers and buyers worldwide, we facilitate seamless trade transactions that create value for all stakeholders.',
      ],
      strengthsTitle: 'Key Strengths',
      strengths: [
        'Global supplier network',
        'Risk management expertise',
        'Quality assurance systems',
        'Logistics integration',
      ],
      commoditiesTitle: 'Trading Portfolio',
      commodities: [
        { category: 'Agricultural Products', items: ['Grains', 'Coffee', 'Tea', 'Cotton'] },
        { category: 'Metals & Minerals', items: ['Copper', 'Iron Ore', 'Gold', 'Silver'] },
        { category: 'Consumer Goods', items: ['Electronics', 'Textiles', 'Household Items'] },
        { category: 'Industrial Materials', items: ['Steel', 'Cement', 'Chemicals'] },
      ],
      marketTitle: 'Market Position',
      marketDescription: 'We are strategically positioned to capitalize on growing trade corridors and emerging market opportunities in Africa and beyond.',
    },
    digitalServices: {
      heroTitle: 'Digital Services',
      heroDescription: 'Innovative digital solutions driving business transformation.',
      overviewTitle: 'Powering Digital Transformation',
      overviewLines: [
        'Our digital services division helps businesses leverage technology to improve operations, enhance customer experiences, and drive growth.',
        'From custom software development to digital strategy consulting, we provide comprehensive solutions that deliver measurable results.',
      ],
      approachTitle: 'Our Approach',
      approachPoints: [
        'Agile development methodology',
        'User-centered design',
        'Scalable architectures',
        'Continuous support & maintenance',
      ],
      servicesTitle: 'Our Services',
      services: [
        { title: 'Web Development', description: 'Custom websites and web applications built with modern technologies.' },
        { title: 'Mobile Apps', description: 'iOS and Android applications for businesses and consumers.' },
        { title: 'Cloud Solutions', description: 'Cloud infrastructure, migration, and management services.' },
        { title: 'Cybersecurity', description: 'Security audits, penetration testing, and protection systems.' },
      ],
      technologyTitle: 'Technology Stack',
      technologyDescription: 'We work with cutting-edge technologies to deliver robust, scalable, and future-proof solutions.',
      technologyList: ['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Tailwind'],
    },

    careers: {
      heroLabel: 'Join Our Team',
      heroTitle: 'Build Your Career With Us',
      heroDescription: 'Join a dynamic team where innovation meets excellence. We are looking for talented individuals to help shape the future of our diverse business sectors.',
      exploreLabel: 'Explore',
      whyTitle: 'Why Join Go Baraka?',
      whySubtitle: 'We offer more than just a job — we offer a career with purpose and growth.',
      currentOpportunitiesLabel: 'Current Opportunities',
      openPositionsTitle: 'Open Positions',
      openPositionsDescription: 'Find your perfect role and join our growing team.',
      keyRequirementsTitle: 'Key Requirements',
      applyNow: 'Apply Now',
      cultureSectionLabel: 'Our Culture',
      lifeTitle: 'Life at Go Baraka',
      lifeDescription: 'We believe in creating an environment where everyone can thrive.',
      callToAction: "Don't see the perfect role? We're always looking for talented individuals.",
      generalApplicationButton: 'Send General Application',
      jobs: [
        {
          title: 'Senior Logistics Coordinator',
          department: 'Logistics',
          location: 'Casablanca, Morocco',
          type: 'Full-time',
          salary: 'Competitive',
          experience: '5+ years',
          description: 'Manage supply chain operations and ensure efficient delivery of goods across our network.',
          requirements: [
            'Bachelor’s degree in Logistics or related field',
            '5+ years of experience in logistics coordination',
            'Excellent communication and problem-solving skills',
            'Proficiency in logistics software',
            'Fluent in English and French'
          ]
        },
        {
          title: 'Transport Operations Manager',
          department: 'Transport',
          location: 'Tangier, Morocco',
          type: 'Full-time',
          salary: 'Negotiable',
          experience: '7+ years',
          description: 'Lead transport operations to optimize routes, manage fleet, and ensure timely deliveries.',
          requirements: [
            'Master’s degree in Supply Chain Management',
            '7+ years in transport management',
            'Strong leadership and analytical skills',
            'Knowledge of transport regulations',
            'Fleet management experience'
          ]
        },
        {
          title: 'Tourism Experience Designer',
          department: 'Tourism',
          location: 'Marrakech, Morocco',
          type: 'Full-time',
          salary: 'Competitive',
          experience: '3+ years',
          description: 'Create unique travel experiences and customize tours for business and leisure clients.',
          requirements: [
            'Degree in Tourism or Hospitality',
            '3+ years in tour design',
            'Excellent knowledge of Moroccan tourism',
            'Creative and detail-oriented',
            'Multiple language proficiency'
          ]
        },
        {
          title: 'Commodities Trading Specialist',
          department: 'Trading',
          location: 'Dubai, UAE',
          type: 'Full-time',
          salary: 'High',
          experience: '5+ years',
          description: 'Execute commodity trades, analyze market trends, and develop trading strategies.',
          requirements: [
            'Finance or Economics degree',
            '5+ years in commodities trading',
            'Strong analytical and risk management skills',
            'Knowledge of global markets',
            'Trading certifications preferred'
          ]
        },
        {
          title: 'Full Stack Developer',
          department: 'Digital Services',
          location: 'Remote',
          type: 'Full-time',
          salary: 'Competitive',
          experience: '3+ years',
          description: 'Develop and maintain web applications for digital transformation projects.',
          requirements: [
            'Computer Science degree or equivalent',
            '3+ years with React/Node.js',
            'Experience with databases and APIs',
            'Strong problem-solving skills',
            'Portfolio of previous work'
          ]
        },
        {
          title: 'Blockchain Developer',
          department: 'Crypto',
          location: 'Remote',
          type: 'Full-time',
          salary: 'High',
          experience: '2+ years',
          description: 'Build smart contracts, deploy blockchain solutions, and work on crypto innovation projects.',
          requirements: [
            'Strong knowledge of blockchain technology',
            'Experience with Solidity and Web3',
            'Understanding of DeFi and NFTs',
            'Problem-solving mindset',
            'GitHub portfolio required'
          ]
        }
      ],
      culturePoints: [
        {
          title: 'Innovation First',
          description: 'We encourage creative thinking and embrace new technologies to stay ahead.'
        },
        {
          title: 'Work-Life Balance',
          description: 'Flexible hours, remote options, and a supportive environment for personal growth.'
        },
        {
          title: 'Continuous Learning',
          description: 'Regular training, workshops, and learning budgets for professional development.'
        },
        {
          title: 'Collaborative Culture',
          description: 'Team-oriented environment with open communication and mutual respect.'
        }
      ],
      form: {
        applyFor: 'Apply for',
        departmentLocation: '{department} • {location}',
        fullName: 'Full Name *',
        email: 'Email *',
        phone: 'Phone *',
        experience: 'Years of Experience *',
        coverLetter: 'Cover Letter *',
        resume: 'Resume/CV *',
        resumeHelp: 'PDF, DOC, or DOCX (Max 5MB)',
        submit: 'Submit Application',
        submitting: 'Submitting...',
        success: 'Application submitted successfully! We will review and get back to you soon.',
        placeholders: {
          fullName: 'John Doe',
          email: 'john@example.com',
          phone: '+212 XXX XXX XXX',
          experience: 'Select experience',
          coverLetter: "Tell us why you're the perfect fit..."
        }
      },
      generalApplication: 'General Application',
      futureOpportunities: 'Future Opportunities',
      flexible: 'Flexible'
    },
    crypto: {
      heroTitle: 'Crypto & Innovation',
      heroDescription: 'Exploring the future of finance through blockchain technology and digital assets.',
      overviewTitle: 'The Future of Finance',
      overviewLines: [
        'Our crypto and innovation division focuses on identifying and investing in transformative blockchain technologies that will shape the future of finance.',
        'We combine deep industry expertise with rigorous analysis to make informed investment decisions in the rapidly evolving crypto space.',
      ],
      focusTitle: 'Investment Focus',
      focusPoints: [
        'Established cryptocurrencies',
        'DeFi platforms',
        'NFT marketplaces',
        'Blockchain infrastructure',
      ],
      initiativesTitle: 'Our Initiatives',
      initiatives: [
        { title: 'Investment Strategy', description: 'Strategic investments in promising blockchain projects and cryptocurrencies.' },
        { title: 'Risk Management', description: 'Sophisticated risk assessment and portfolio diversification strategies.' },
        { title: 'Global Partnerships', description: 'Collaborations with leading blockchain innovators worldwide.' },
        { title: 'Technology Research', description: 'Continuous research into emerging blockchain technologies and applications.' },
      ],
      approachTitle: 'Investment Approach',
      approachDescription: 'We take a disciplined approach to crypto investments, focusing on long-term value creation while managing risk through diversification and strategic allocation.',
      characteristics: [
        { title: 'Research-Driven', description: 'In-depth analysis before any investment' },
        { title: 'Diversified', description: 'Spreading risk across multiple assets' },
        { title: 'Long-Term Focus', description: 'Patient capital for sustainable growth' },
      ],
    },
    portfolio: {
      heroTitle: 'Our Portfolio',
      heroDescription: 'Explore our diverse portfolio of projects and investments across all business sectors.',
      projects: [
        { title: 'Logistics Hub Expansion', category: 'Logistics', description: 'Development of a 10,000 sqm logistics center with advanced automation systems.', status: 'Planned' },
        { title: 'Fleet Modernization Program', category: 'Transport', description: 'Investment in 50 new vehicles with GPS tracking and real-time monitoring.', status: 'In Progress' },
        { title: 'Luxury Tourism Platform', category: 'Tourism', description: 'Digital platform for premium travel experiences and concierge services.', status: 'Planned' },
        { title: 'Commodities Trading Desk', category: 'Trading', description: 'Expansion of trading operations into new international markets.', status: 'Planned' },
        { title: 'Digital Transformation Suite', category: 'Digital Services', description: 'Enterprise software solutions for business process automation.', status: 'Planned' },
        { title: 'Blockchain Investment Fund', category: 'Crypto', description: 'Strategic investment vehicle for blockchain and crypto assets.', status: 'Planned' },
        { title: 'Green Logistics Initiative', category: 'Logistics', description: 'Sustainable transportation solutions with electric vehicle fleet.', status: 'Planned' },
        { title: 'Regional Distribution Network', category: 'Transport', description: 'Expansion of distribution centers across key locations.', status: 'Planned' },
        { title: 'Business Intelligence Platform', category: 'Digital Services', description: 'Data analytics platform for business insights.', status: 'Planned' },
      ],
      metricsTitle: 'Portfolio Performance',
      metrics: [
        { value: '15+', label: 'Active Projects' },
        { value: '8', label: 'Completed Projects' },
        { value: '5', label: 'Planned Initiatives' },
      ],
    },
    contact: {
      heroTitle: 'Contact Us',
      heroDescription: 'Get in touch with us to discuss investment opportunities or learn more about our business sectors.',
      contactTitle: 'Get In Touch',
      contactInfo: [
        { title: 'Address', details: ['Go Baraka Sarl', 'NINEA 012905686', 'Dakar Sénégal'], link: null },
        { title: 'Phone', details: ['76 647 83 65'], link: 'tel:766478365' },
        { title: 'Email', details: ['info@al-r.com'], link: 'mailto:info@al-r.com' },
        { title: 'Business Hours', details: ['Monday - Friday: 9:00 - 18:00', 'Saturday - Sunday: Closed'], link: null },
      ],
      formTitle: 'Send Us a Message',
      fullName: 'Full Name *',
      email: 'Email Address *',
      phone: 'Phone Number',
      message: 'Message *',
      sendButton: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully! We will get back to you soon.',
      quickNote: 'Quick Response:',
      quickNoteText: 'We typically respond within 24 hours during business days.',
    },
    statusLabels: {
      inProgress: 'In Progress',
      completed: 'Completed',
      launched: 'Launched',
      active: 'Active',
      planned: 'Planned',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      logistics: 'Logistique',
      transport: 'Transport',
      tourism: 'Tourisme',
      trading: 'Commerce',
      digitalServices: 'Services numériques',
      crypto: 'Crypto',
      portfolio: 'Portefeuille',
      contact: 'Contact',
      careers: 'Carrières',
    },
    header: {
      switchLabel: 'EN',
      switchTitle: 'Passer à l’anglais',
    },
    footer: {
      quickLinks: 'Liens rapides',
      contactInfo: 'Coordonnées',
      ourCommitment: 'Notre engagement',
      commitmentText: 'Offrir l’excellence dans toutes nos activités avec un accent sur la croissance et l’innovation.',
      note: 'Tous droits réservés.',
      companySummary: 'Nous construisons des partenariats durables et une intégrité commerciale pour un succès à long terme.',
      codeOfConductButton: 'Code de conduite et d’éthique',
    },
    hero: {
      label: 'Ce que nous faisons',
      line1: 'Investir pour',
      line2: 'La croissance',
      line3: 'économique de Go Baraka',
      description: 'Un groupe d’entreprises diversifié construisant de la valeur à long terme grâce à des investissements stratégiques dans la logistique, le transport, le tourisme, le commerce et l’innovation numérique.',
      portfolioButton: 'Voir le portefeuille',
      contactButton: 'Contactez-nous',
    },
    careers: {
      heroLabel: 'Rejoignez notre équipe',
      heroTitle: 'Construisez votre carrière avec nous',
      heroDescription: 'Rejoignez une équipe dynamique où l’innovation rencontre l’excellence. Nous recherchons des talents pour façonner l’avenir de nos secteurs d’activité diversifiés.',
      exploreLabel: 'Explorez',
      whyTitle: 'Pourquoi rejoindre Go Baraka ?',
      whySubtitle: 'Nous offrons plus qu’un emploi — nous offrons une carrière avec du sens et de la croissance.',
      currentOpportunitiesLabel: 'Opportunités actuelles',
      openPositionsTitle: 'Postes ouverts',
      openPositionsDescription: 'Trouvez le rôle idéal et rejoignez notre équipe en croissance.',
      keyRequirementsTitle: 'Exigences clés',
      applyNow: 'Postuler',
      cultureSectionLabel: 'Notre culture',
      lifeTitle: 'La vie chez Go Baraka',
      lifeDescription: 'Nous croyons en un environnement où chacun peut s’épanouir.',
      callToAction: "Vous ne trouvez pas le poste parfait ? Nous sommes toujours à la recherche de talents.",
      generalApplicationButton: 'Envoyer une candidature générale',
      jobs: [
        {
          title: 'Coordinateur logistique senior',
          department: 'Logistique',
          location: 'Casablanca, Maroc',
          type: 'Temps plein',
          salary: 'Compétitif',
          experience: '5+ ans',
          description: 'Gérez les opérations de la chaîne d’approvisionnement et assurez la livraison efficace des marchandises.',
          requirements: [
            'Bac+3 en logistique ou domaine similaire',
            '5+ ans d’expérience en coordination logistique',
            'Excellentes compétences en communication et résolution de problèmes',
            'Maîtrise des logiciels logistiques',
            'Français et anglais courants'
          ]
        },
        {
          title: 'Responsable des opérations de transport',
          department: 'Transport',
          location: 'Tanger, Maroc',
          type: 'Temps plein',
          salary: 'Négociable',
          experience: '7+ ans',
          description: 'Dirigez les opérations de transport pour optimiser les itinéraires, gérer la flotte et garantir des livraisons ponctuelles.',
          requirements: [
            'Master en gestion de la chaîne d’approvisionnement',
            '7+ ans en gestion du transport',
            'Solides compétences en leadership et en analyse',
            'Connaissance de la réglementation du transport',
            'Expérience en gestion de flotte'
          ]
        },
        {
          title: 'Concepteur d’expériences touristiques',
          department: 'Tourisme',
          location: 'Marrakech, Maroc',
          type: 'Temps plein',
          salary: 'Compétitif',
          experience: '3+ ans',
          description: 'Créez des expériences de voyage uniques et personnalisez des circuits pour les clients professionnels et de loisirs.',
          requirements: [
            'Diplôme en tourisme ou hôtellerie',
            '3+ ans en conception de circuits',
            'Excellente connaissance du tourisme marocain',
            'Créatif et attentif aux détails',
            'Maîtrise de plusieurs langues'
          ]
        },
        {
          title: 'Spécialiste en trading de matières premières',
          department: 'Commerce',
          location: 'Dubaï, EAU',
          type: 'Temps plein',
          salary: 'Élevé',
          experience: '5+ ans',
          description: 'Exécutez des transactions de matières premières, analysez les tendances du marché et développez des stratégies de trading.',
          requirements: [
            'Diplôme en finance ou économie',
            '5+ ans en trading de matières premières',
            'Solides compétences analytiques et en gestion des risques',
            'Connaissance des marchés mondiaux',
            'Certifications en trading souhaitées'
          ]
        },
        {
          title: 'Développeur Full Stack',
          department: 'Services numériques',
          location: 'À distance',
          type: 'Temps plein',
          salary: 'Compétitif',
          experience: '3+ ans',
          description: 'Développez et maintenez des applications web pour des projets de transformation numérique.',
          requirements: [
            'Diplôme en informatique ou équivalent',
            '3+ ans avec React/Node.js',
            'Expérience avec bases de données et API',
            'Solides compétences en résolution de problèmes',
            'Portfolio de travaux antérieurs'
          ]
        },
        {
          title: 'Développeur Blockchain',
          department: 'Crypto',
          location: 'À distance',
          type: 'Temps plein',
          salary: 'Élevé',
          experience: '2+ ans',
          description: 'Créez des contrats intelligents, déployez des solutions blockchain et travaillez sur des projets crypto innovants.',
          requirements: [
            'Solide connaissance de la blockchain',
            'Expérience avec Solidity et Web3',
            'Compréhension de la DeFi et des NFT',
            'Esprit de résolution de problèmes',
            'Portfolio GitHub requis'
          ]
        }
      ],
      culturePoints: [
        {
          title: 'L’innovation avant tout',
          description: 'Nous encourageons la pensée créative et adoptons les nouvelles technologies pour rester en avance.'
        },
        {
          title: 'Équilibre vie pro/vie perso',
          description: 'Horaires flexibles, options à distance et environnement favorable à l’épanouissement personnel.'
        },
        {
          title: 'Apprentissage continu',
          description: 'Formations régulières, ateliers et budgets de développement professionnel.'
        },
        {
          title: 'Culture collaborative',
          description: 'Environnement d’équipe avec communication ouverte et respect mutuel.'
        }
      ],
      form: {
        applyFor: 'Postuler pour',
        departmentLocation: '{department} • {location}',
        fullName: 'Nom complet *',
        email: 'Email *',
        phone: 'Téléphone *',
        experience: 'Années d’expérience *',
        coverLetter: 'Lettre de motivation *',
        resume: 'CV *',
        resumeHelp: 'PDF, DOC ou DOCX (Max 5 Mo)',
        submit: 'Envoyer la candidature',
        submitting: 'Envoi...',
        success: 'Candidature envoyée avec succès ! Nous reviendrons vers vous bientôt.',
        placeholders: {
          fullName: 'Jean Dupont',
          email: 'jean@example.com',
          phone: '+212 XXX XXX XXX',
          experience: 'Sélectionnez l’expérience',
          coverLetter: 'Expliquez pourquoi vous êtes le bon candidat...'
        }
      },
      generalApplication: 'Candidature générale',
      futureOpportunities: 'Opportunités futures',
      flexible: 'Flexible'
    },
    home: {
      sectorsTitle: 'Nos secteurs d’activité',
      sectorsDescription: 'Nous opérons dans six secteurs clés, offrant l’excellence et stimulant la croissance dans chaque domaine.',
      whyTitle: 'Pourquoi choisir Go Baraka Sarl',
      whySubtitle: 'Associez-vous à un groupe engagé pour l’excellence et une croissance durable',
      cards: [
        {
          title: 'Logistique',
          description: 'Solutions logistiques complètes pour les entreprises en Afrique et au-delà. Nous fournissons une gestion de la chaîne d’approvisionnement de bout en bout avec une technologie de pointe.',
          href: '/logistics',
          color: '#002B5C',
        },
        {
          title: 'Transport',
          description: 'Gestion de flotte moderne et services de transport garantissant une livraison fiable et ponctuelle des marchandises dans la région.',
          href: '/transport',
          color: '#003D7A',
        },
        {
          title: 'Tourisme professionnel',
          description: 'Expériences de voyage personnalisées pour les voyageurs d’affaires et de loisirs. Nous créons des voyages mémorables avec un service exceptionnel.',
          href: '/tourism',
          color: '#0056A0',
        },
        {
          title: 'Commerce',
          description: 'Opérations commerciales stratégiques dans les matières premières et les biens, en tirant parti de relations solides et d’une expertise approfondie.',
          href: '/trading',
          color: '#002B5C',
        },
        {
          title: 'Services numériques',
          description: 'Solutions numériques innovantes incluant le développement web, le conseil en informatique et la transformation numérique.',
          href: '/digital-services',
          color: '#003D7A',
        },
        {
          title: 'Crypto / Innovation',
          description: 'Explorer l’avenir de la finance grâce à la technologie blockchain et aux investissements en crypto-monnaies.',
          href: '/crypto',
          color: '#0056A0',
        },
      ],
      whyPoints: [
        {
          number: '1',
          title: 'Portefeuille diversifié',
          description: 'Plusieurs secteurs d’activité offrant un risque équilibré et de multiples opportunités de croissance',
        },
        {
          number: '2',
          title: 'Focalisation sur l’innovation',
          description: 'Adopter la technologie et l’innovation dans tous nos secteurs d’activité',
        },
        {
          number: '3',
          title: 'Potentiel de croissance',
          description: 'Modèle d’affaires évolutif conçu pour une croissance durable à long terme',
        },
      ],
      learnMore: 'En savoir plus',
    },
    about: {
      heroTitle: 'À propos de Go Baraka Sarl',
      heroDescription: 'Un groupe d’entreprises diversifié engagé dans l’excellence, l’innovation et une croissance durable à travers plusieurs secteurs.',
      missionTitle: 'Notre mission',
      missionText: 'Offrir une valeur exceptionnelle à nos investisseurs et partenaires en construisant et en gérant un portefeuille diversifié d’entreprises qui exploitent l’innovation, l’excellence opérationnelle et des partenariats stratégiques.',
      visionTitle: 'Notre vision',
      visionText: 'Devenir un groupe d’entreprises diversifié de premier plan en Afrique, reconnu pour son engagement envers l’excellence, l’innovation et une croissance durable dans tous nos secteurs d’activité.',
      stats: [
        { label: 'Années d’expérience', value: '10+', icon: 'award' },
        { label: 'Secteurs d’activité', value: '6', icon: 'globe' },
        { label: 'Projets réalisés', value: '50+', icon: 'trending' },
        { label: 'Membres de l’équipe', value: '100+', icon: 'users' },
      ],
      valuesTitle: 'Nos valeurs fondamentales',
      values: [
        { title: 'Intégrité', description: 'Nous menons nos activités avec les normes éthiques les plus élevées, la transparence et la responsabilité.' },
        { title: 'Innovation', description: 'Nous recherchons continuellement de nouvelles façons d’améliorer et de rester en avance grâce à la technologie et à la réflexion créative.' },
        { title: 'Excellence', description: 'Nous nous efforçons d’exceller dans tout ce que nous faisons, en offrant des résultats de qualité qui dépassent les attentes.' },
      ],
    },
    logistics: {
      heroTitle: 'Logistique',
      heroDescription: 'Solutions logistiques complètes alimentées par la technologie et l’excellence opérationnelle.',
      overviewTitle: 'Faire avancer les entreprises',
      overviewLines: [
        'Notre division logistique propose des solutions de chaîne d’approvisionnement de bout en bout qui aident les entreprises à optimiser leurs opérations, réduire les coûts et améliorer l’efficacité.',
        'Grâce à des systèmes de suivi avancés, des emplacements d’entrepôts stratégiques et une équipe dédiée d’experts en logistique, nous veillons à ce que vos marchandises se déplacent sans encombre de l’origine à la destination.',
      ],
      advantagesTitle: 'Avantages clés',
      advantages: [
        'Suivi et visibilité en temps réel',
        'Réseau d’entrepôts stratégique',
        'Expertise en dédouanement',
        'Solutions évolutives pour les entreprises en croissance',
      ],
      servicesTitle: 'Nos services logistiques',
      services: [
        { title: 'Gestion de la chaîne d’approvisionnement', description: 'Solutions de chaîne d’approvisionnement de bout en bout optimisées pour l’efficacité et la rentabilité.' },
        { title: 'Fret international', description: 'Services de fret aérien, maritime et terrestre connectant les entreprises à travers les continents.' },
        { title: 'Dernier kilomètre', description: 'Services de livraison fiables et ponctuels pour la dernière étape du transport.' },
        { title: 'Entreposage', description: 'Installations d’entreposage modernes avec systèmes avancés de gestion des stocks.' },
      ],
      growthTitle: 'Potentiel de croissance',
      growthDescription: 'Le secteur de la logistique en Afrique connaît une croissance rapide. Avec des investissements stratégiques dans la technologie et l’infrastructure, nous sommes positionnés pour capturer une part de marché significative et offrir de solides rendements aux investisseurs.',
    },
    transport: {
      heroTitle: 'Transport',
      heroDescription: 'Gestion de flotte moderne et services de transport garantissant une livraison fiable et ponctuelle.',
      overviewTitle: 'Déplacer des biens et des personnes',
      overviewLines: [
        'Notre division transport exploite une flotte moderne de véhicules équipés des dernières technologies de suivi et de sécurité.',
        'Nous sommes spécialisés dans la fourniture de solutions de transport fiables pour les entreprises de divers secteurs, garantissant que les marchandises atteignent leur destination en toute sécurité et à temps.',
      ],
      metrics: [
        { value: '50+', label: 'Véhicules' },
        { value: '100+', label: 'Conducteurs' },
        { value: '98%', label: 'Livraison à l’heure' },
        { value: '30%', label: 'Croissance annuelle' },
      ],
      fleetTitle: 'Notre flotte',
      fleet: [
        { type: 'Camions lourds', description: 'Transport longue distance pour marchandises en vrac et charges lourdes', capacity: 'Jusqu’à 40 tonnes' },
        { type: 'Véhicules moyens', description: 'Distribution régionale et transport interurbain', capacity: '5-15 tonnes' },
        { type: 'Véhicules légers', description: 'Livraison du dernier kilomètre et logistique urbaine', capacity: 'Jusqu’à 3,5 tonnes' },
        { type: 'Flotte spécialisée', description: 'Transport frigorifique et sous température contrôlée', capacity: 'Solutions personnalisées' },
      ],
      techTitle: 'Intégration technologique',
      techDescription: 'Nous utilisons des technologies de pointe pour optimiser les itinéraires, suivre les expéditions en temps réel et garantir une efficacité maximale.',
      techCards: [
        { title: 'Suivi GPS', description: 'Localisation et statut des véhicules en temps réel' },
        { title: 'Optimisation des itinéraires', description: 'Planification des itinéraires alimentée par l’IA pour plus d’efficacité' },
        { title: 'Documentation numérique', description: 'Opérations sans papier pour un traitement plus rapide' },
      ],
    },
    tourism: {
      heroTitle: 'Tourisme professionnel',
      heroDescription: 'Créer des expériences de voyage inoubliables pour les voyageurs d’affaires et de loisirs.',
      overviewTitle: 'Votre voyage commence ici',
      overviewLines: [
        'Notre division tourisme professionnel se spécialise dans la création d’expériences de voyage personnalisées qui dépassent les attentes.',
        'Des voyages d’affaires aux vacances de luxe, nous prenons en charge chaque détail pour assurer un voyage fluide et inoubliable.',
      ],
      metrics: [
        { value: '50+', label: 'Destinations' },
        { value: '10k+', label: 'Voyageurs satisfaits' },
      ],
      experiencesTitle: 'Expériences de voyage',
      experiences: [
        { title: 'Voyage d’affaires', description: 'Solutions de voyage adaptées aux clients professionnels, y compris des services VIP et de conciergerie.' },
        { title: 'Tourisme de luxe', description: 'Expériences de voyage haut de gamme vers les destinations les plus exclusives du monde.' },
        { title: 'Voyage d’aventure', description: 'Forfaits d’aventure passionnants pour les amateurs de sensations fortes et les passionnés de plein air.' },
        { title: 'Tours culturels', description: 'Expériences culturelles immersives explorant les traditions et le patrimoine locaux.' },
      ],
      marketTitle: 'Opportunité de marché',
      marketDescription: 'Le secteur du tourisme est prêt pour une croissance significative après la pandémie. Notre position stratégique et notre concentration sur la qualité du service nous permettent de capturer ce marché en expansion.',
    },
    trading: {
      heroTitle: 'Commerce',
      heroDescription: 'Opérations commerciales stratégiques tirant parti de l’expertise du marché et de partenariats solides.',
      overviewTitle: 'Expertise commerciale mondiale',
      overviewLines: [
        'Notre division commerce se concentre sur l’approvisionnement et la distribution de matières premières et de biens de haute qualité sur les marchés internationaux.',
        'Grâce à des relations solides avec des fournisseurs et des acheteurs du monde entier, nous facilitons des transactions commerciales sans faille qui créent de la valeur pour toutes les parties prenantes.',
      ],
      strengthsTitle: 'Forces clés',
      strengths: [
        'Réseau mondial de fournisseurs',
        'Expertise en gestion des risques',
        'Systèmes d’assurance qualité',
        'Intégration logistique',
      ],
      commoditiesTitle: 'Portefeuille commercial',
      commodities: [
        { category: 'Produits agricoles', items: ['Céréales', 'Café', 'Thé', 'Coton'] },
        { category: 'Métaux et minéraux', items: ['Cuivre', 'Minerai de fer', 'Or', 'Argent'] },
        { category: 'Biens de consommation', items: ['Électronique', 'Textiles', 'Articles ménagers'] },
        { category: 'Matériaux industriels', items: ['Acier', 'Ciment', 'Produits chimiques'] },
      ],
      marketTitle: 'Position sur le marché',
      marketDescription: 'Nous sommes stratégiquement positionnés pour tirer parti des corridors commerciaux en croissance et des opportunités de marché émergentes en Afrique et au-delà.',
    },
    digitalServices: {
      heroTitle: 'Services numériques',
      heroDescription: 'Solutions numériques innovantes stimulant la transformation des entreprises.',
      overviewTitle: 'Favoriser la transformation numérique',
      overviewLines: [
        'Notre division des services numériques aide les entreprises à tirer parti de la technologie pour améliorer leurs opérations, améliorer l’expérience client et stimuler la croissance.',
        'Du développement logiciel personnalisé au conseil en stratégie numérique, nous fournissons des solutions complètes qui offrent des résultats mesurables.',
      ],
      approachTitle: 'Notre approche',
      approachPoints: [
        'Méthodologie de développement agile',
        'Conception centrée sur l’utilisateur',
        'Architectures évolutives',
        'Support et maintenance continus',
      ],
      servicesTitle: 'Nos services',
      services: [
        { title: 'Développement web', description: 'Sites web et applications web personnalisés construits avec des technologies modernes.' },
        { title: 'Applications mobiles', description: 'Applications iOS et Android pour les entreprises et les consommateurs.' },
        { title: 'Solutions cloud', description: 'Infrastructure cloud, migration et services de gestion.' },
        { title: 'Cybersécurité', description: 'Audits de sécurité, tests d’intrusion et systèmes de protection.' },
      ],
      technologyTitle: 'Pile technologique',
      technologyDescription: 'Nous utilisons des technologies de pointe pour livrer des solutions robustes, évolutives et tournées vers l’avenir.',
      technologyList: ['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Tailwind'],
    },
    crypto: {
      heroTitle: 'Crypto et innovation',
      heroDescription: 'Explorer l’avenir de la finance grâce à la technologie blockchain et aux actifs numériques.',
      overviewTitle: 'L’avenir de la finance',
      overviewLines: [
        'Notre division crypto et innovation se concentre sur l’identification et l’investissement dans des technologies blockchain transformatrices qui façonneront l’avenir de la finance.',
        'Nous combinons une expertise approfondie du secteur avec une analyse rigoureuse pour prendre des décisions d’investissement éclairées dans l’espace crypto en évolution rapide.',
      ],
      focusTitle: 'Axes d’investissement',
      focusPoints: [
        'Cryptomonnaies établies',
        'Plateformes DeFi',
        'Marchés NFT',
        'Infrastructure blockchain',
      ],
      initiativesTitle: 'Nos initiatives',
      initiatives: [
        { title: 'Stratégie d’investissement', description: 'Investissements stratégiques dans des projets blockchain et cryptomonnaies prometteurs.' },
        { title: 'Gestion des risques', description: 'Stratégies sophistiquées d’évaluation des risques et de diversification de portefeuille.' },
        { title: 'Partenariats mondiaux', description: 'Collaborations avec des innovateurs blockchain de premier plan dans le monde entier.' },
        { title: 'Recherche technologique', description: 'Recherche continue sur les technologies et les applications blockchain émergentes.' },
      ],
      approachTitle: 'Approche d’investissement',
      approachDescription: 'Nous adoptons une approche disciplinée des investissements crypto, axée sur la création de valeur à long terme tout en gérant les risques par la diversification et l’allocation stratégique.',
      characteristics: [
        { title: 'Basé sur la recherche', description: 'Analyse approfondie avant tout investissement' },
        { title: 'Diversifié', description: 'Répartition des risques sur plusieurs actifs' },
        { title: 'Vision long terme', description: 'Capital patient pour une croissance durable' },
      ],
    },
    portfolio: {
      heroTitle: 'Notre portefeuille',
      heroDescription: 'Découvrez notre portefeuille diversifié de projets et d’investissements dans tous les secteurs d’activité.',
      projects: [
        { title: 'Expansion du hub logistique', category: 'Logistique', description: 'Développement d’un centre logistique de 10 000 m² avec des systèmes d’automatisation avancés.', status: 'Planifié' },
        { title: 'Programme de modernisation de la flotte', category: 'Transport', description: 'Investissement dans 50 nouveaux véhicules avec suivi GPS et surveillance en temps réel.', status: 'En cour' },
        { title: 'Plateforme de tourisme de luxe', category: 'Tourisme', description: 'Plateforme numérique pour des expériences de voyage premium et des services de conciergerie.', status: 'Planifié' },
        { title: 'Bureau de commerce des matières premières', category: 'Commerce', description: 'Extension des opérations commerciales vers de nouveaux marchés internationaux.', status: 'Planifié' },
        { title: 'Suite de transformation numérique', category: 'Services numériques', description: 'Solutions logicielles d’entreprise pour l’automatisation des processus métier.', status: 'Planifié' },
        { title: 'Fonds d’investissement blockchain', category: 'Crypto', description: 'Véhicule d’investissement stratégique pour les actifs blockchain et crypto.', status: 'Planifié' },
        { title: 'Initiative logistique verte', category: 'Logistique', description: 'Solutions de transport durables avec flotte de véhicules électriques.', status: 'Planifié' },
        { title: 'Réseau de distribution régional', category: 'Transport', description: 'Extension des centres de distribution dans des emplacements clés.', status: 'Planifié' },
        { title: 'Plateforme d’intelligence d’affaires', category: 'Services numériques', description: 'Plateforme d’analyse de données pour des insights métier.', status: 'Planifié' },
      ],
      metricsTitle: 'Performances du portefeuille',
      metrics: [
        { value: '15+', label: 'Projets actifs' },
        { value: '8', label: 'Projets terminés' },
        { value: '5', label: 'Initiatives planifiées' },
      ],
    },
    contact: {
      heroTitle: 'Contactez-nous',
      heroDescription: 'Contactez-nous pour discuter des opportunités d’investissement ou en savoir plus sur nos secteurs d’activité.',
      contactTitle: 'Entrer en contact',
      contactInfo: [
        { title: 'change me later', details: ['Go Baraka Sarl', 'NINEA 012905686', 'Dakar Sénégal'], link: null },
        { title: 'Téléphone', details: ['76 647 83 65'], link: 'tel: 766478365' },
        { title: 'E-mail', details: ['info@al-r.com'], link: 'mailto:info@al-r.com' },
        { title: 'Horaires', details: ['Lundi - Vendredi : 9h00 - 18h00', 'Samedi - Dimanche : fermé'], link: null },
      ],
      formTitle: 'Envoyez-nous un message',
      fullName: 'Nom complet *',
      email: 'Adresse e-mail *',
      phone: 'Numéro de téléphone',
      message: 'Message *',
      sendButton: 'Envoyer le message',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès ! Nous vous répondrons bientôt.',
      quickNote: 'Réponse rapide :',
      quickNoteText: 'Nous répondons généralement sous 24 heures pendant les jours ouvrables.',
    },
    statusLabels: {
      inProgress: 'En cours',
      completed: 'Terminé',
      launched: 'Lancé',
      active: 'Actif',
      planned: 'Planifié',
    },
  },
};

export default translations;
