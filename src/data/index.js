export const SKILLS = {
  Languages: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  Web: [
    'React.js', 'Node.js', 'Express.js', 'Flask',
    'MongoDB', 'TailwindCSS', 'Socket.io', 'WebSockets', 'JWT',
  ],
  'AI / ML': [
    'PyTorch', 'Scikit-Learn', 'YOLOv8', 'OpenCV',
    'spaCy', 'NLTK', 'NumPy', 'Pandas',
  ],
  'DevOps & Tools': ['Git', 'GitHub', 'Docker', 'VS Code', 'npm'],
};

export const PROJECTS = [
  {
    id: '01',
    title: 'CityPulse-X',
    subtitle: 'Adaptive Urban Traffic Control',
    desc: 'Containerized real-time monitoring platform using Docker microservices, integrating YOLOv8 video processing with a live React dashboard. Reduced simulated intersection wait times by 25% via ensemble clustering.',
    stack: ['Python', 'YOLOv8', 'OpenCV', 'Node.js', 'React.js', 'MongoDB', 'WebSockets', 'Docker'],
    tag: 'AI / IoT',
  },
  {
    id: '02',
    title: 'ADDFormer',
    subtitle: "Alzheimer's Disease Detection",
    desc: 'Full-stack diagnostic app using a Fusion Transformer architecture, containerized with Docker. REST API bridges Python model inference with UI. Achieved 94% diagnostic accuracy.',
    stack: ['Python', 'PyTorch', 'Node.js', 'React.js', 'MongoDB', 'Docker'],
    tag: 'Deep Learning',
  },
  {
    id: '03',
    title: 'AI Chat App',
    subtitle: 'Real-Time Messaging + NLP',
    desc: 'Full-stack messaging platform with WebSocket-based real-time communication and a Naive Bayes NLP model for smart reply suggestions. Includes role-based admin dashboard.',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Python', 'Scikit-Learn'],
    tag: 'Full Stack',
  },
  {
    id: '04',
    title: 'Smart Recruit',
    subtitle: 'AI-Driven Applicant Tracking',
    desc: 'Recruitment portal with automated resume parsing and NLP pipeline using spaCy and Cosine Similarity for candidate ranking. Decoupled ML engine via Flask microservice.',
    stack: ['React', 'Node.js', 'MongoDB', 'Flask', 'spaCy', 'NLTK'],
    tag: 'NLP',
  },
  {
    id: '05',
    title: 'MediCheck',
    subtitle: 'Predictive Healthcare Analytics',
    desc: 'Secure health tracking portal with a Random Forest model for disease probability prediction. JWT-authenticated with visual analytics via Recharts.',
    stack: ['React', 'Node.js', 'MongoDB', 'Scikit-Learn', 'Pandas', 'Recharts'],
    tag: 'ML / Health',
  },
  {
    id: '06',
    title: 'OmniVision',
    subtitle: 'Edge AI Video Streaming',
    desc: 'Edge computing pipeline using C++ on ESP32-CAM broadcasting raw UDP packets. Python/Flask ML engine runs YOLO inference on the stream for real-time object detection.',
    stack: ['C++', 'Python', 'Flask', 'UDP', 'YOLO', 'ESP32-CAM'],
    tag: 'Edge AI',
  },
  {
    id: '07',
    title: 'Smart Pricing',
    subtitle: 'ML Challenge 2025',
    desc: 'Predictive pricing ML model built for ML Challenge 2025 (Team DeepHack). Analysed large datasets to dynamically adjust pricing based on market conditions.',
    stack: ['Python', 'Pandas', 'Scikit-Learn'],
    tag: 'ML',
  },
  {
    id: '08',
    title: 'IoT Home Auto',
    subtitle: 'Home Automation & Security',
    desc: 'Integrated home automation system with secure keypad door lock, smart lighting/fan control, and MQTT+TLS encrypted IoT communication on ESP32.',
    stack: ['C++', 'ESP32', 'MQTT', 'TLS'],
    tag: 'IoT',
  },
];

export const BLOG_POSTS = [
  {
    title: 'Building Real-Time Systems with WebSockets',
    desc: 'Lessons from CityPulse-X — architecting low-latency data pipelines.',
    tag: 'Backend',
    coming: true,
  },
  {
    title: 'Deploying ML Models with Docker Microservices',
    desc: 'How to decouple your AI inference engine from your web stack cleanly.',
    tag: 'DevOps',
    coming: true,
  },
  {
    title: 'NLP Pipelines from Scratch',
    desc: 'Building candidate ranking with spaCy and Cosine Similarity.',
    tag: 'AI / NLP',
    coming: true,
  },
];

export const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/ayush201145' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ayush-nitp-20jk45' },
  { label: 'Phone',    href: 'tel:+916207885970' },
];

export const STATS = [
  { val: '8+',   label: 'Projects Built' },
  { val: '300+', label: 'DSA Problems' },
  { val: '94%',  label: 'Model Accuracy' },
  { val: 'MERN', label: 'Primary Stack' },
];
