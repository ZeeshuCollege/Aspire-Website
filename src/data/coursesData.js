export const coursesData = [
  {
    id: "jee",
    title: "JEE (Main + Adv.)",
    slug: "jee",
    category: "Competitive",
    tagline: "Engineering Excellence — From Main to IIT",
    heroDesc: "Comprehensive JEE coaching combining conceptual depth, mathematical agility, and advanced problem-solving mastery to crack both JEE Main and JEE Advanced.",
    duration: "1-Year / 2-Year Integrated Programs",
    schedule: "Mon - Sat | Flexible Batches",
    batchSize: "25-30 Students",
    color: "var(--color-violet)",
    badgeClass: "badge-violet",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    icon: "Compass",
    features: [
      "Extensive Computer-Based Test (CBT) practice in our lab",
      "Multi-concept synthesis problems (Irodov, Pathfinder, Cengage level)",
      "10-Year JEE Main & Advanced Past Papers dissected chapter-wise",
      "IITian faculty team with 10+ years mentoring experience",
      "Detailed test analysis identifying weak areas and silly mistakes"
    ],
    overview: "Scoring high in JEE Main requires conceptual clarity combined with computer-based test mastery, while JEE Advanced demands deep problem-solving under pressure. Our integrated batch covers both with seamless progression.",
    curriculum: [
      { module: "Mathematics", topics: ["Coordinate Geometry", "Differential & Integral Calculus", "Algebra & Matrices", "Vectors & 3D Geometry", "Probability & Complex Numbers"] },
      { module: "Physics", topics: ["Rotational Motion", "Electromagnetism", "Modern Physics", "Wave Optics", "Rigid Body Dynamics"] },
      { module: "Chemistry", topics: ["Thermodynamics", "Chemical Kinetics", "Coordination Compounds", "General Organic Chemistry", "Multi-step Organic Synthesis"] }
    ]
  },
  {
    id: "neet",
    title: "NEET",
    slug: "neet",
    category: "Competitive",
    tagline: "Your Gateway to Top Medical Colleges",
    heroDesc: "Specialized medical entrance coaching with NCERT line-by-line mastery, high-yield biology notes, and high-speed problem-solving techniques in Physics & Chemistry.",
    duration: "1-Year (Target) / 2-Year (Class 11+12)",
    schedule: "Mon - Sat | Morning & Evening Batches",
    batchSize: "25-30 Students",
    color: "var(--color-teal)",
    badgeClass: "badge-teal",
    subjects: ["Biology (Botany & Zoology)", "Physics", "Chemistry"],
    icon: "Stethoscope",
    features: [
      "NCERT fingertip memorization & diagram drills",
      "30+ Full-Syllabus OMR Mock Tests mimicking real NTA patterns",
      "Speed & negative marking elimination strategies",
      "Senior medical faculty with proven 650+ NEET alumni",
      "Full access to ASPIRE Test Series analytics & rank predictor"
    ],
    overview: "NEET demands both speed and absolute precision across 180 questions. ASPIRE's NEET medical division breaks down every chapter into high-yield points, accompanied by rigorous timed mock tests.",
    curriculum: [
      { module: "Biology", topics: ["Diversity in Living World", "Structural Organisation", "Cell Biology", "Human & Plant Physiology", "Reproduction & Genetics", "Biotechnology & Ecology"] },
      { module: "Physics", topics: ["Mechanics", "Thermodynamics", "Oscillations & Waves", "Electrostatics & Current", "Magnetism", "Optics & Modern Physics"] },
      { module: "Chemistry", topics: ["Physical Chemistry (Equilibrium, Kinetics)", "Inorganic Chemistry (NCERT deep dive)", "Organic Chemistry Mechanisms & Reactions"] }
    ]
  },
  {
    id: "foundation",
    title: "Foundation",
    slug: "foundation",
    category: "Foundation",
    tagline: "Build a Strong Base from the Start",
    heroDesc: "Early conceptual building in Science & Mathematics for junior students, fostering analytical thinking and problem-solving habits that last a lifetime.",
    duration: "1 Year Academic Program",
    schedule: "Mon - Fri | 4:00 PM - 6:00 PM",
    batchSize: "20-25 Students",
    color: "var(--color-orange)",
    badgeClass: "badge-orange",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Mental Ability"],
    icon: "GraduationCap",
    features: [
      "School syllabus mastery + Olympiad foundation",
      "Interactive conceptual experiments & visual models",
      "Weekly diagnostic tests with detailed parent reports",
      "Daily Doubt Resolution Counter (DDRC)",
      "Printed topic-wise concept workbooks"
    ],
    overview: "Our Foundation program transitions students from memorization to logical conceptual understanding. Designed to prepare students early for school excellence and future competitive exams like NTSE and Olympiads.",
    curriculum: [
      { module: "Mathematics", topics: ["Number Systems", "Rational Numbers", "Linear Equations", "Geometry & Mensuration", "Algebraic Expressions", "Data Handling"] },
      { module: "Science (Physics & Chem)", topics: ["Force & Pressure", "Sound & Light", "Synthetic Materials", "Metals & Non-metals", "Combustion & Flame"] },
      { module: "Biology & Reasoning", topics: ["Cell Structure & Functions", "Crop Production", "Logical Reasoning", "Pattern Recognition"] }
    ]
  },
  {
    id: "std-10",
    title: "10th",
    slug: "std-10",
    category: "Foundation",
    tagline: "Ace Your Boards with Confidence",
    heroDesc: "Intensive board examination mastery coupled with rigorous test series to guarantee 90%+ in CBSE/State Boards and build a launchpad for JEE/NEET.",
    duration: "1 Year Comprehensive Board Program",
    schedule: "Mon - Fri | 5:00 PM - 7:00 PM",
    batchSize: "22-25 Students",
    color: "var(--color-orange)",
    badgeClass: "badge-orange",
    subjects: ["Mathematics", "Science (Phy, Chem, Bio)", "Social Science Guidance"],
    icon: "BookOpenCheck",
    features: [
      "100% syllabus completion by October",
      "15+ Full-Length Board Mock Test Series with paper analysis",
      "Answer sheet presentation & examiner marking tips",
      "Past 10 years question paper drills (PYQ Mastery)",
      "Dedicated doubt counters open 6 days a week"
    ],
    overview: "Our 10th programme delivers consistent 90%+ board achievers year after year. We combine thorough subject teaching with meticulous answer-writing practice.",
    curriculum: [
      { module: "Mathematics", topics: ["Real Numbers & Polynomials", "Quadratic Equations & AP", "Triangles & Coordinate Geometry", "Trigonometry & Applications", "Surface Areas & Volumes", "Statistics & Probability"] },
      { module: "Physics", topics: ["Light - Reflection & Refraction", "Human Eye & Colourful World", "Electricity", "Magnetic Effects of Electric Current"] },
      { module: "Chemistry", topics: ["Chemical Reactions & Equations", "Acids, Bases and Salts", "Metals and Non-metals", "Carbon and its Compounds"] },
      { module: "Biology", topics: ["Life Processes", "Control and Coordination", "How do Organisms Reproduce?", "Heredity and Evolution"] }
    ]
  },
  {
    id: "std-9",
    title: "9th",
    slug: "std-9",
    category: "Foundation",
    tagline: "Build Concepts, Gain Confidence",
    heroDesc: "Deep conceptual grounding in CBSE & ICSE 9th fundamentals — the crucial bridge for senior secondary and competitive success.",
    duration: "1 Year Academic Program",
    schedule: "Mon - Fri | 6:30 PM - 8:30 PM",
    batchSize: "20-25 Students",
    color: "var(--color-emerald)",
    badgeClass: "badge-emerald",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    icon: "BookOpen",
    features: [
      "Complete coverage of NCERT & Board syllabus",
      "Early introduction to higher-order competitive thinking",
      "Bi-weekly objective & subjective tests",
      "Individual homework evaluation and correction",
      "Personal academic mentor assigned per student"
    ],
    overview: "9th is recognized as the academic turning point where concepts become substantially more rigorous. ASPIRE provides step-by-step guidance ensuring zero knowledge gaps.",
    curriculum: [
      { module: "Mathematics", topics: ["Number Systems", "Polynomials", "Coordinate Geometry", "Euclid & Lines", "Triangles & Quadrilaterals", "Circles & Heron's Formula"] },
      { module: "Physics", topics: ["Motion & Equations", "Force and Laws of Motion", "Gravitation", "Work, Energy & Power", "Sound"] },
      { module: "Chemistry", topics: ["Matter in Our Surroundings", "Is Matter Around Us Pure", "Atoms and Molecules", "Structure of the Atom"] },
      { module: "Biology", topics: ["The Fundamental Unit of Life", "Tissues", "Improvement in Food Resources"] }
    ]
  }
];
