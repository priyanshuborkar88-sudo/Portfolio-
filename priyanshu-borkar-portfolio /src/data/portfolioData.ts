export interface Project {
  id: string;
  name: string;
  category: 'System' | 'AI & Research' | 'Web & ML';
  shortDescription: string;
  problem: string;
  approach: string;
  technologies: string[];
  keyFeatures: string[];
  contribution: string;
  outcome: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  isResearch?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  status: 'Completed' | 'In Progress';
  isEditablePlaceholder?: boolean;
  notes?: string;
}

export interface LeadershipActivity {
  title: string;
  context: string;
  description: string;
  keyDetails: string[];
}

export interface LeadershipRole {
  role: string;
  organization: string;
  affiliation: string;
  period: string;
  description: string;
  responsibilities: string[];
  functionalAreas?: string[];
  activities?: LeadershipActivity[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Priyanshu Borkar',
    shortName: 'Priyanshu',
    tagline: 'Artificial Intelligence • Data Analytics • Business Analytics',
    corePositioning: 'AI foundation. Analytical direction. Builder mindset.',
    secondaryPositioning: 'Turning Data & Technology into Meaningful Insights',
    shortBio: 'B.Tech Artificial Intelligence Engineering student building practical solutions at the intersection of AI, data, analytics, and business thinking.',
    aboutLong: `Priyanshu Borkar is a B.Tech Artificial Intelligence Engineering student at JD College of Engineering & Management, Nagpur, with a growing focus on Data Analytics and Business Analytics.

His technical foundation includes Python, SQL, Excel, data analysis, machine learning fundamentals, databases, visualization, and development tools. He is expanding this foundation toward Python data libraries, Power BI, Business Analytics, and practical data-driven problem solving.

Alongside academics, he has developed leadership and organizational experience through the Competitive Exam Cell (CEC) at JDCOEM, where he has worked on student initiatives, event planning, coordination, communication, and team management.

He enjoys building practical projects that connect technology with real-world problems and is interested in developing a career where data, technology, and business decisions come together.`,
    phone: '+91 83296 87118',
    email: 'priyanshuborkar88@gmail.com',
    location: 'Nagpur, Maharashtra, India',
    linkedinUrl: 'https://www.linkedin.com/in/priyanshu-borkar-3340a1331',
    githubUrl: 'https://github.com/priyanshuborkar88-sudo',
    instagramUrl: 'https://instagram.com/thepriyanshubuilds',
    instagramHandle: '@thepriyanshubuilds',
    resumeFileName: 'Priyanshu_Borkar_Resume.pdf',
    resumeUrl: '/Priyanshu_Borkar_Resume.pdf',
    emailRecipient: 'priyanshuborkar88@gmail.com',
    photoUrl: '/priyanshu_portrait.jpg',
  },

  education: [
    {
      degree: 'B.Tech in Artificial Intelligence Engineering',
      institution: 'JD College of Engineering & Management (JDCOEM)',
      location: 'Nagpur, Maharashtra, India',
      period: '2023 — 2027 (Expected)',
      scoreLabel: 'Current CGPA',
      scoreValue: '8.72 (7th Semester)',
      status: 'In Progress',
      notes: 'Focusing on the transition: Artificial Intelligence → Data Analytics → Business Analytics.',
    },
    {
      degree: 'Higher Secondary School Certificate (12th Grade)',
      institution: 'Prerna International School',
      location: 'Nagpur, India',
      period: 'Secondary Education',
      scoreLabel: '12th Percentage',
      scoreValue: '65%',
      status: 'Completed',
      notes: 'Higher Secondary School Examination (Class XII). Verified academic credential.',
    },
    {
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'K John Public School',
      location: 'Nagpur, India',
      period: 'High School',
      scoreLabel: '10th Percentage',
      scoreValue: '77%',
      status: 'Completed',
      notes: 'Secondary School Examination (Class X). Verified academic credential.',
    },
  ] as EducationItem[],

  careerDirection: {
    headline: "Where I'm Headed",
    subheadline: 'Connecting technical engineering discipline with analytical business outcomes.',
    summary: 'Building toward roles where technology, data, and business decisions intersect. The journey progresses from engineering fundamentals to business intelligence and strategic decision-making.',
    targetRoles: [
      'Business Analyst',
      'Data Analyst',
      'Business Intelligence Analyst',
      'Data Analytics Roles',
      'Business Analytics Roles',
      'AI + Data + Business Roles',
    ],
    progression: [
      {
        stage: '01. Foundation',
        title: 'Artificial Intelligence Engineering',
        focus: 'Engineering logic, systems thinking, computational principles, academic coursework at JDCOEM.',
      },
      {
        stage: '02. Technical Skills',
        title: 'Core Programming & Databases',
        focus: 'Python, SQL, Excel, DBMS, Git/GitHub, structured query design, data manipulation.',
      },
      {
        stage: '03. Analytics',
        title: 'Data Analysis & Exploration',
        focus: 'Pandas, NumPy, Matplotlib, statistics, exploratory data analysis (EDA), visual insights.',
      },
      {
        stage: '04. Business Intelligence',
        title: 'Applied BI & Decision Support',
        focus: 'Power BI dashboards, business metrics translation, KPI definition, problem structuring.',
      },
      {
        stage: '05. Target Direction',
        title: 'Data & Business Analyst',
        focus: 'Bridging engineering capability with business stakeholders to drive actionable outcomes.',
      },
    ],
  },

  skills: {
    categories: [
      {
        name: 'Programming & Querying',
        levelTag: 'Working Knowledge',
        items: [
          { name: 'Python', note: 'Primary language for analytics & problem solving' },
          { name: 'SQL', note: 'Relational querying, filtering, aggregations' },
          { name: 'Java', note: 'Object-oriented programming fundamentals' },
        ],
      },
      {
        name: 'Data Analytics',
        levelTag: 'Active Practice',
        items: [
          { name: 'Excel', note: 'Formulas, pivot tables, data structuring' },
          { name: 'Pandas', note: 'Data frames, cleaning, transformations' },
          { name: 'NumPy', note: 'Vectorized mathematical operations' },
          { name: 'Matplotlib', note: 'Data plotting & distribution visuals' },
          { name: 'Data Analysis', note: 'Exploratory data analysis & patterns' },
          { name: 'Data Visualization', note: 'Communicating data patterns clearly' },
          { name: 'Statistics', note: 'Descriptive & inferential fundamentals' },
        ],
      },
      {
        name: 'Business Intelligence',
        levelTag: 'Current Learning',
        items: [
          { name: 'Power BI', note: 'Learning reporting, dashboarding & KPI modeling' },
        ],
      },
      {
        name: 'Artificial Intelligence / Machine Learning',
        levelTag: 'Academic Foundation',
        items: [
          { name: 'Machine Learning Fundamentals', note: 'Supervised/unsupervised algorithms, evaluation' },
          { name: 'Artificial Intelligence', note: 'Computer vision principles, decision logic' },
          { name: 'Data-driven Problem Solving', note: 'Formulating business questions as analytical problems' },
        ],
      },
      {
        name: 'Database / Core Concepts',
        levelTag: 'Core Discipline',
        items: [
          { name: 'DBMS', note: 'Relational schemas, normalization, ACID properties' },
        ],
      },
      {
        name: 'Development / Version Control',
        levelTag: 'Applied Tools',
        items: [
          { name: 'Git', note: 'Branching, commit discipline, version control' },
          { name: 'GitHub', note: 'Code collaboration, open source repos' },
          { name: 'Web Development', note: 'Frontend interface fundamentals' },
          { name: 'HTML & CSS', note: 'Semantic web structure, layouts' },
          { name: 'JavaScript & React.js', note: 'Component-based web applications' },
        ],
      },
    ],
    currentlyExploring: [
      'Python revision & advanced syntax',
      'Python data libraries deep-dive',
      'Pandas & NumPy optimization',
      'Matplotlib data storytelling',
      'Power BI dashboard design',
      'Business Analytics case methodologies',
      'SQL complex joins & window functions',
      'Applied business statistics',
      'Machine Learning fundamentals revision',
      'Data Structures & Algorithms (DSA) in Python',
      'LeetCode analytical problem solving',
      'Exploring cloud computing fundamentals',
    ],
  },

  projects: [
    {
      id: 'smart-classroom-scheduler',
      name: 'Smart Classroom & Timetable Scheduler',
      category: 'System',
      shortDescription: 'A smart scheduling solution designed to simplify timetable and classroom allocation by considering academic constraints and reducing scheduling conflicts.',
      problem: 'College academic schedules frequently encounter complex resource collisions between faculty availability, physical classroom seating capacity, lab requirements, and departmental timetable slots.',
      approach: 'Modeled academic scheduling as a multi-variable constraint satisfaction problem. Structured logic to assign slots iteratively while evaluating faculty commitments and room capacities to prevent overlapping bookings.',
      technologies: ['Python', 'Constraint Logic', 'Algorithms', 'Resource Modeling'],
      keyFeatures: [
        'Automated classroom allocation matched to cohort sizes',
        'Faculty availability and preference constraint checking',
        'Time-slot conflict reduction algorithms',
        'Better utilization of physical campus infrastructure',
      ],
      contribution: 'Conceptualized the scheduling rules, built algorithmic logic for constraint verification, and structured data models for rooms, subjects, and faculty rosters.',
      outcome: 'Successfully modeled constraint conflict minimization for departmental schedules without manual spreadsheet collisions.',
      githubUrl: 'https://github.com/priyanshuborkar88-sudo',
    },
    {
      id: 'itms-traffic-management',
      name: 'Intelligent Traffic Management System (ITMS)',
      category: 'AI & Research',
      isResearch: true,
      shortDescription: 'An AI and computer-vision-based research project focused on dynamic signal timing, four-lane traffic density monitoring, and emergency vehicle priority.',
      problem: 'Static traffic light timers fail to adapt to asymmetric lane congestion and delay emergency vehicles, causing gridlock and avoidable transit delays at critical urban intersections.',
      approach: 'Conceptualized computer vision monitoring across four-lane intersections to measure real-time traffic density, dynamically adjust green signal phases, and provide priority clearance for emergency vehicles.',
      technologies: ['Computer Vision', 'AI Concepts', 'Traffic Density Analysis', 'Dashboard Architecture'],
      keyFeatures: [
        'Real-time traffic density evaluation across 4 intersection lanes',
        'Dynamic signal timing adjustment based on lane queue depth',
        'Emergency vehicle detection and green-corridor priority logic',
        'Next-intersection predictive awareness (e.g., school dismissals)',
        'Vehicle monitoring, number-plate data architecture, and command-center dashboard concept',
        'Exploration of low-cost RFID supplementary tracking',
      ],
      contribution: 'Researched signal timing algorithms, contributed to intersection flow logic, and designed the command-center monitoring schema with academic team members.',
      outcome: 'Academic research project guided by Dr. S. V. Sonekar at JDCOEM; authored collaborative research paper currently under academic review.',
      githubUrl: 'https://github.com/priyanshuborkar88-sudo',
    },
    {
      id: 'student-performance-dashboard',
      name: 'Student Performance Dashboard',
      category: 'System',
      shortDescription: 'An interactive BI dashboard engineered to analyze student performance metrics, attendance tracking, and academic subject trends.',
      problem: 'Institutional educators struggle to track multi-subject academic progress, attendance correlations, and early student performance risks across scattered spreadsheets.',
      approach: 'Executed robust data cleaning and transformation in Excel and wrote structured SQL queries to clean, model, and aggregate performance datasets for interactive dashboarding.',
      technologies: ['Power BI', 'SQL', 'Excel', 'Data Cleaning', 'Dashboarding'],
      keyFeatures: [
        'Interactive performance metric filtering by semester and subject',
        'Attendance tracking and academic correlation analysis',
        'Automated trend identification for at-risk student cohorts',
        'Executive-level visualization summaries for academic faculty',
      ],
      contribution: 'Engineered the Power BI dashboard, executed dataset cleaning in Excel, and wrote complex SQL queries to structure relational data.',
      outcome: 'Successfully created visual analytical model enabling multi-dimensional student performance exploration.',
      githubUrl: 'https://github.com/priyanshuborkar88-sudo',
    },
    {
      id: 'sales-analysis-dashboard',
      name: 'Sales Analysis Dashboard',
      category: 'System',
      shortDescription: 'A commercial KPI dashboard analyzing raw sales datasets to uncover market trends, top-performing product categories, and regional growth opportunities.',
      problem: 'Raw multi-region sales logs lack cohesive business intelligence, obscuring product margin variations and regional growth channels from leadership.',
      approach: 'Modeled transaction histories in Power BI, formulated key performance indicators (KPIs), and synthesized multi-channel sales metrics to support executive-level business decisions.',
      technologies: ['Power BI', 'Data Analytics', 'KPI Modeling', 'Business Intelligence'],
      keyFeatures: [
        'Top-performing product category segmentation',
        'Regional market growth and revenue distribution mapping',
        'Executive KPI scorecards tracking target vs actual sales',
        'Interactive date-range and regional drill-down capabilities',
      ],
      contribution: 'Synthesized raw sales datasets, formulated business KPIs, and designed executive dashboards for commercial decision support.',
      outcome: 'Formulated actionable KPI dashboards providing clear visibility into regional product category performance.',
      githubUrl: 'https://github.com/priyanshuborkar88-sudo',
    },
    {
      id: 'ml-learning-sandbox',
      name: 'ML Learning Sandbox',
      category: 'Web & ML',
      shortDescription: 'An interactive web-based experimentation platform created during a hackathon to understand and visualize machine learning algorithms hands-on.',
      problem: 'Beginners in machine learning often struggle to develop intuitive mental models of how decision boundaries, clustering, and regression models adapt to changing inputs.',
      approach: 'Built an interactive visual environment where users can tweak parameters, plot sample datasets, and observe algorithm convergence and decision surfaces in real time.',
      technologies: ['Web Development', 'Machine Learning Concepts', 'Data Visualization', 'Interactive UI'],
      keyFeatures: [
        'Interactive dataset parameter manipulation',
        'Visual demonstration of machine learning behavior',
        'Hands-on experimentation without local environment setup',
        'Educational focus designed for engineering peers',
      ],
      contribution: 'Built the concept, interface, and visual feedback loops during a hackathon sprint to facilitate peer learning.',
      outcome: 'Demonstrated at hackathon showcase as an effective educational tool for peer machine-learning concept comprehension.',
      githubUrl: 'https://github.com/priyanshuborkar88-sudo',
    },
  ] as Project[],

  researchHighlight: {
    title: 'AI-Based Intelligent Traffic Management System',
    paperDirection: 'Intelligent Traffic Management System using AI / Computer Vision',
    authors: [
      { name: 'Priyanshu Borkar', role: 'Student Researcher' },
      { name: 'Pranoti Dangore', role: 'Student Researcher' },
      { name: 'Prajwal Zade', role: 'Student Researcher' },
      { name: 'Taral Thorat', role: 'Student Researcher' },
    ],
    guide: 'Dr. S. V. Sonekar',
    department: 'Department of Artificial Intelligence',
    institution: 'JD College of Engineering & Management, Nagpur',
    summary: 'A formal research initiative investigating computer-vision driven intersection management. Explores dynamic signal cycles based on real-time vehicle density, automated emergency corridor signaling, and predictive flow coordination across sequential urban intersections.',
    status: 'Academic Research Project / Under Review (Honest academic standing; no unverified claims)',
  },

  leadership: {
    cec: {
      role: 'Founder / CEO',
      organization: 'Competitive Exam Cell (CEC)',
      institution: 'JD College of Engineering & Management, Nagpur',
      period: 'Active Leadership',
      overview: 'Founded and led the Competitive Exam Cell (CEC) at JDCOEM to support engineering students preparing for competitive examinations (GATE, Civil Services, Public Sector) and exploring diverse professional opportunities beyond traditional recruitment tracks.',
      responsibilities: [
        'Coordinated cross-functional student teams and delegated operational objectives.',
        'Planned, scheduled, and supervised student-led competitive exam preparation drives.',
        'Managed institutional communication, student outreach, and administrative coordination.',
        'Maintained structured documentation, event planning, and student engagement.',
      ],
      functionalTeams: [
        'Administration',
        'Event',
        'Nexus',
        'Discipline',
        'Media',
        'Publicity',
        'Videography',
        'Current Affairs',
        'Technical',
        'Exam Cell',
        'VSA',
        'Creative',
      ],
      highlights: [
        {
          title: 'Brain-Spark 2K25',
          context: 'Inter-Departmental Student Event in collaboration with Pragyan Forum',
          description: 'A multi-faceted intellectual event featuring a competitive general/technical quiz and a Canva Creator competition for creative design.',
          keyDetails: ['Student participation coordination', 'Cross-forum event management', 'Creative & technical evaluation rounds'],
        },
        {
          title: 'GATE 2026 Mock Test Series',
          context: 'Academic Preparation Initiative',
          description: 'Structured mock examination sessions and study routines for engineering students targeting GATE preparation.',
          keyDetails: ['Syllabus pacing', 'Simulated testing conditions', 'Peer study support'],
        },
        {
          title: 'Constitution Day Book Donation Drive',
          context: 'Student & Social Community Outreach',
          description: 'Student-led community initiative collecting and distributing educational reading material and textbooks.',
          keyDetails: ['Book collection logistics', 'Student volunteer coordination', 'Community contribution'],
        },
        {
          title: '15 August Futala Flag Hoisting Initiative',
          context: 'Civic & Institutional Representation',
          description: 'Coordinated student representation and logistics for Independence Day observance at Futala Lake, Nagpur.',
          keyDetails: ['Student team mobilization', 'Event presence coordination'],
        },
      ],
    },
    otherInitiatives: {
      title: 'Leadership & Student Initiatives',
      institution: 'JD College of Engineering & Management',
      rolesReferenced: 'Publicity Committee Co-Head • Forum In-Charge • Departmental Initiatives',
      description: 'Actively contributed across college forum activities including the AI Department (Aavinya Forum). Responsibilities centered on student mobilization, technical forum activities, event publicity, and cross-team coordination.',
    },
  },

  achievements: [
    {
      title: 'Founder & CEO — Competitive Exam Cell (CEC)',
      organization: 'JD College of Engineering & Management',
      description: 'Conceived and built a dedicated student organization with 12 functional teams supporting competitive exam aspirants.',
      category: 'Leadership',
    },
    {
      title: 'Consistent Academic Record — 8.72 CGPA',
      organization: 'JDCOEM, Department of Artificial Intelligence',
      description: 'Maintained strong academic performance through 7 semesters in the Artificial Intelligence Engineering curriculum.',
      category: 'Academics',
    },
    {
      title: 'Hackathon Project Development',
      organization: 'Engineering Hackathon',
      description: 'Designed and built the ML Learning Sandbox, an interactive peer-learning platform for machine learning algorithms.',
      category: 'Technical',
    },
    {
      title: 'Institutional Event Execution — Brain-Spark 2K25',
      organization: 'CEC & Pragyan Forum',
      description: 'Coordinated quiz and creative design competitions fostering student engagement across engineering cohorts.',
      category: 'Organization',
    },
    {
      title: '1st Rank in College-Level Badminton',
      organization: 'JDCOEM Collegiate Sports',
      description: 'Secured first rank championship in collegiate badminton tournament demonstrating physical agility and focus.',
      category: 'Athletics & Discipline',
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      organization: 'Coursera (In Progress)',
      description: 'Industry credential in data cleaning, SQL query analysis, and data-driven business insight generation.',
      category: 'Certifications',
    },
    {
      title: 'Power BI Data Analyst Certification',
      organization: 'Microsoft',
      description: 'Data transformation, DAX modeling, KPI architecture, and interactive business intelligence dashboarding.',
      category: 'Certifications',
    },
    {
      title: 'SQL for Data Science',
      organization: 'Coursera (UC Davis)',
      description: 'Advanced data manipulation, relational database querying, multi-table joins, and aggregation.',
      category: 'Certifications',
    },
    {
      title: 'Data Analytics with Excel',
      organization: 'Simplilearn',
      description: 'Advanced spreadsheet analysis, statistical functions, pivot modeling, and automated analysis.',
      category: 'Certifications',
    },
    {
      title: 'Python for Data Science',
      organization: 'Udemy',
      description: 'Data manipulation, algorithmic data processing, and analytical scripting with Python.',
      category: 'Certifications',
    },
  ],

  humanSide: {
    philosophy: 'Discipline beyond code.',
    summary: 'A disciplined lifestyle translates directly into analytical focus, consistency in technical practice, and steady personal growth.',
    interests: [
      {
        title: 'Fitness & Strength Training',
        theme: 'Discipline, Patience & Consistency',
        description: 'Treating physical training as a daily practice in patience, gradual progression, and mental stamina that carries over into problem solving.',
        instagram: '@thepriyanshubuilds',
        instagramUrl: 'https://instagram.com/thepriyanshubuilds',
      },
      {
        title: 'Sketching & Visual Art',
        theme: 'Spatial Awareness & Creative Balance',
        description: 'Drawing and sketching to explore perspective, proportion, and visual detail—grounding technical work with visual clarity.',
      },
      {
        title: "Rubik's Cube & Logic Puzzles",
        theme: 'Algorithmic Intuition',
        description: 'Speed-solving and spatial algorithms that exercise pattern recognition and step-by-step state resolution.',
      },
      {
        title: 'Badminton',
        theme: 'Agility & Reflexes',
        description: 'Fast-paced sport that sharpens coordination, tactical decision-making, and teamwork.',
      },
      {
        title: 'Continuous Learning',
        theme: 'Curiosity & Growth',
        description: 'Consistently reviewing Python libraries, business case studies, and modern data analytics workflows.',
      },
    ],
  },
};
