/**
 * skillsData.js - Categorized Multi-Track Technical Skills Matrix
 */

export const SKILL_CATEGORIES = [
  {
    title: 'Languages & Core',
    trackId: 'sde',
    icon: '💻',
    skills: [
      { name: 'C++', level: 90, desc: 'Systems Programming & ESP32' },
      { name: 'Go (Golang)', level: 92, desc: 'API Gateways, Microservices, Raft Consensus' },
      { name: 'Python', level: 95, desc: 'AI/ML Pipelines, PyTorch, FastAPI, Pandas' },
      { name: 'TypeScript / JS', level: 92, desc: 'Node.js, React 18, Next.js 14, WebSockets' },
      { name: 'SQL', level: 94, desc: 'PostgreSQL CTEs, Window Functions, Optimization' },
      { name: 'Java', level: 85, desc: 'OOP Data Structures & Backend APIs' }
    ]
  },
  {
    title: 'Web & Distributed Systems',
    trackId: 'swe',
    icon: '🌐',
    skills: [
      { name: 'React 18 / Next.js 14', level: 94, desc: 'App Router, Server Actions, Responsive UI' },
      { name: 'Node.js / Express', level: 92, desc: 'REST APIs, Socket.io, Microservices' },
      { name: 'Redis', level: 90, desc: 'Atomic Sliding Windows, Task Queues, Caching' },
      { name: 'PostgreSQL & Prisma', level: 92, desc: 'Multi-Tenant Schema Scoping, RBAC' },
      { name: 'FastAPI & Celery', level: 90, desc: 'Async Python APIs & FFmpeg Background Workers' },
      { name: 'gRPC & Protocol Buffers', level: 88, desc: 'Low-Latency Microservice RPCs' }
    ]
  },
  {
    title: 'AI / ML & NLP Engine',
    trackId: 'aiml',
    icon: '🧠',
    skills: [
      { name: 'PyTorch & HuggingFace', level: 92, desc: 'Transformer Architecture & Fine-Tuning' },
      { name: 'QLoRA / PEFT', level: 90, desc: '4-bit NF4 Parameter-Efficient Fine-Tuning' },
      { name: 'ChromaDB / Qdrant', level: 92, desc: 'Vector Embeddings & Hybrid RAG Retrieval' },
      { name: 'Cross-Encoders & Reranking', level: 90, desc: 'Semantic Context Precision Boosts' },
      { name: 'XGBoost & Scikit-Learn', level: 94, desc: 'Streaming Velocity Feature Stores & Fraud AI' },
      { name: 'vLLM & DeepEval', level: 88, desc: '140+ tok/sec Serving & Ragas Metric Suites' }
    ]
  },
  {
    title: 'Data & Financial Analytics',
    trackId: 'da',
    icon: '📊',
    skills: [
      { name: 'Pandas & NumPy', level: 95, desc: 'Large Dataset Wrangling & Financial Models' },
      { name: 'RFM & K-Means Clustering', level: 92, desc: 'Unsupervised Customer Segmentation' },
      { name: 'SaaS Metric Frameworks', level: 94, desc: 'MRR, ARR, Churn, CAC, LTV / CAC (3.85x)' },
      { name: 'Attribution Modeling', level: 90, desc: 'First-Touch, Last-Touch, Time-Decay Models' },
      { name: 'Streamlit & Seaborn', level: 92, desc: 'Interactive Executive Storyboards & Heatmaps' }
    ]
  },
  {
    title: 'Business Analysis & Strategy',
    trackId: 'ba',
    icon: '📋',
    skills: [
      { name: 'BPMN 2.0 Process Modeling', level: 92, desc: 'As-Is/To-Be Diagrams (40% TAT Reduction)' },
      { name: 'IEEE 830 BRD / FRD', level: 94, desc: 'Business & Functional Requirement Specs' },
      { name: 'NPV & Financial Modeling', level: 90, desc: '5-Year Migration NPV ($216k @ 10% WACC)' },
      { name: 'Requirements Traceability (RTM)', level: 92, desc: 'Operational Requirement Matrix' },
      { name: 'UAT Framework & Gherkin', level: 92, desc: 'P1 Acceptance Criteria & Sign-Off Gates' }
    ]
  },
  {
    title: 'DevOps, Cloud & Security',
    trackId: 'devops',
    icon: '🛠️',
    skills: [
      { name: 'Docker & Docker Compose', level: 95, desc: 'Container Topology & Ephemeral Sandboxes' },
      { name: 'Terraform & AWS EKS', level: 90, desc: 'Declarative Infrastructure as Code (HCL)' },
      { name: 'ArgoCD & GitOps', level: 92, desc: 'Kubernetes Cluster State Sync & Self-Healing' },
      { name: 'GitHub Actions & Trivy', level: 92, desc: 'CI/CD Automated Security Vulnerability Gates' },
      { name: 'Prometheus, Grafana & OTel', level: 92, desc: 'OpenTelemetry Observability & Alerting' },
      { name: 'Nginx Canary Shifting', level: 90, desc: '90/10 Zero-Downtime Traffic Rollouts' }
    ]
  }
];
