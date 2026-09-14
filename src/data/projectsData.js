/**
 * projectsData.js - Complete catalog of 18 Production Projects across 6 Tracks
 */

export const PROJECTS = [
  // --- TRACK 1: SDE ---
  {
    id: 'sde-1',
    trackId: 'sde',
    title: 'Distributed Rate Limiter & API Gateway',
    subtitle: 'Sub-Millisecond HTTP Reverse Proxy & Atomic Redis Sliding Windows',
    timeline: 'Sep 2025 – Dec 2025',
    featured: true,
    repoUrl: 'https://github.com/ayush201145/distributed-rate-limiter-api-gateway',
    techStack: ['Go 1.21', 'Redis', 'gRPC', 'HTTP Reverse Proxy', 'Docker', 'Docker Compose'],
    summary: 'High-throughput distributed API gateway proxying 50k+ requests/sec with sub-millisecond overhead and dynamic rate-limiting rule management.',
    deliverables: [
      'Designed and implemented a high-throughput, distributed API Gateway in Go capable of proxying 50k+ requests/sec with sub-millisecond overhead.',
      'Engineered thread-safe Token Bucket and Leaky Bucket rate-limiting algorithms backed by Redis atomic sliding windows to mitigate DDoS attacks and API abuse.',
      'Formulated dynamic rule configuration REST/gRPC endpoints allowing zero-downtime rate limit updates without restarting proxy instances.',
      'Containerized system topology using Docker Compose with automated health checks, standard HTTP rate-limit headers (X-RateLimit-Remaining), and graceful error degradation (HTTP 429).'
    ],
    architecture: `[Client Requests] ──> [Go Reverse Proxy (50k req/s)] ──> [Atomic Redis Window] 
                                  │ 
                                  ├──> [Allowed]  ──> [Upstream Backend Services]
                                  └──> [Exceeded] ──> [HTTP 429 Rate Limit Response]`
  },
  {
    id: 'sde-2',
    trackId: 'sde',
    title: 'Real-Time Collaborative Code Editor',
    subtitle: 'Low-Latency CRDT Multiplayer Engine & Docker Execution Sandbox',
    timeline: 'Jan 2026 – Mar 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/realtime-collaborative-code-editor',
    techStack: ['Node.js', 'TypeScript', 'WebSockets', 'CRDT', 'Express', 'Docker Sandbox'],
    summary: 'Multiplayer code editor supporting sub-50ms concurrent editing conflict resolution via CRDTs and isolated Docker code execution.',
    deliverables: [
      'Built a real-time multiplayer code editor supporting low-latency (<50ms) concurrent text synchronization over WebSockets.',
      'Integrated Conflict-free Replicated Data Types (CRDTs) to resolve concurrent editing conflicts deterministically without central lock contention.',
      'Developed a secure, ephemeral code execution sandbox in Docker to run untrusted user scripts (JS/Python) with strict 5-second timeouts and memory limits.',
      'Created a modern responsive web interface with live cursor tracking, language selection, and execution console output.'
    ],
    architecture: `[Browser Clients] <── WebSocket (CRDT Sync <50ms) ──> [Node.js Engine] 
                                                                 │
                                                   [Isolated Docker Sandbox]`
  },
  {
    id: 'sde-3',
    trackId: 'sde',
    title: 'Custom Distributed In-Memory Key-Value Store',
    subtitle: 'RESP Protocol, Raft Consensus FSM & Write-Ahead Logging',
    timeline: 'Apr 2026 – Jun 2026',
    featured: true,
    repoUrl: 'https://github.com/ayush201145/distributed-inmemory-kv-store',
    techStack: ['Go 1.21', 'TCP Sockets', 'Raft Consensus', 'Write-Ahead Log (WAL)', 'RESP Protocol'],
    summary: 'High-concurrency distributed key-value database in Go implementing RESP protocol, Raft leader election, and 100% crash durability.',
    deliverables: [
      'Implemented a low-level, high-concurrency in-memory key-value store in Go implementing RESP TCP socket protocol supporting SET, GET, DEL, and TTL operations.',
      'Developed Write-Ahead Logging (WAL) with synchronous disk flushing, guaranteeing 100% crash recovery and data durability upon process restart.',
      'Built a Raft consensus finite-state machine supporting automatic leader elections, follower state synchronization, and heartbeat ticker channels.',
      'Designed an asynchronous background TTL ticker worker to purge expired keys without blocking main client TCP connection event loops.'
    ],
    architecture: `[TCP Clients] ──> [Go RESP Server] ──> [Raft FSM State Machine] ──> [WAL Disk Flush]
                                                  │
                                         [Async TTL Worker]`
  },

  // --- TRACK 2: SWE ---
  {
    id: 'swe-1',
    trackId: 'swe',
    title: 'Multi-Tenant SaaS Workspace with RBAC',
    subtitle: 'PostgreSQL Tenant Isolation, Granular RBAC & Stripe Billing Lifecycle',
    timeline: 'Sep 2025 – Dec 2025',
    featured: true,
    repoUrl: 'https://github.com/ayush201145/multitenant-saas-rbac',
    techStack: ['Next.js 14', 'React 18', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Stripe API'],
    summary: 'Scalable workspace SaaS platform featuring database-level tenant schema scoping, granular role permissions, and automated Stripe webhooks.',
    deliverables: [
      'Engineered a scalable multi-tenant task management SaaS platform featuring tenant schema scoping and strict data isolation at the database level.',
      'Built a granular Role-Based Access Control (RBAC) permission matrix enforcing ADMIN, EDITOR, and VIEWER access gates across UI components and API endpoints.',
      'Integrated Stripe Billing Webhooks for automated subscription lifecycle management across FREE, PRO, and ENTERPRISE tiers.',
      'Developed a modern, responsive dashboard interface leveraging Next.js App Router and server actions for optimal rendering speed.'
    ],
    architecture: `[Next.js 14 App Router] ──> [Tenant Context Scoper] ──> [PostgreSQL Prisma ORM]
                                               │
                                      [Stripe Webhooks Engine]`
  },
  {
    id: 'swe-2',
    trackId: 'swe',
    title: 'Event-Driven E-Commerce & Inventory Checkout',
    subtitle: 'Idempotent Payments, Overselling Guard Locks & Pub/Sub Event Bus',
    timeline: 'Jan 2026 – Mar 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/event-driven-ecommerce-checkout',
    techStack: ['Python FastAPI', 'PostgreSQL', 'RabbitMQ / Redis', 'Pydantic', 'Uvicorn'],
    summary: 'Microservices checkout engine with idempotent payment retries, asynchronous inventory reservation, and concurrency lock protection.',
    deliverables: [
      'Constructed an event-driven e-commerce microservices engine handling shopping cart checkout, payment processing, and stock deduction.',
      'Implemented idempotent payment processing with X-Idempotency-Key headers to prevent duplicate transactions during network retries.',
      'Developed an asynchronous Pub/Sub event bus (ORDER_PLACED) to decouple checkout completion from inventory stock reservation.',
      'Implemented concurrency locks and overselling guard logic to guarantee inventory transactional consistency under high peak demand.'
    ],
    architecture: `[Cart Checkout API] ──> [Idempotency Key Verifier] ──> [Pub/Sub Event Bus]
                                                                        │
                                                         [Inventory Stock Reservation]`
  },
  {
    id: 'swe-3',
    trackId: 'swe',
    title: 'Cloud-Native Asset Management & Video Transcoder',
    subtitle: 'Celery/Redis Async Distributed Workers & HLS Multi-Bitrate Encoding',
    timeline: 'Apr 2026 – Jun 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/cloud-native-asset-transcoder',
    techStack: ['React', 'Python FastAPI', 'Celery', 'Redis Queue', 'FFmpeg Pipeline', 'HLS'],
    summary: 'Cloud-native media pipeline offloading video transcode jobs to Celery workers for multi-bitrate HLS adaptive playback.',
    deliverables: [
      'Architected a cloud-native media processing pipeline offloading heavy video encoding tasks to background Celery workers backed by Redis.',
      'Integrated FFmpeg pipeline converting MP4/MOV uploads into multi-bitrate HTTP Live Streaming (HLS) master .m3u8 adaptive streams (720p/480p).',
      'Built RESTful status polling and streaming endpoints enabling seamless video playback on modern web browsers.',
      'Containerized media worker processes in Docker with pre-compiled Linux FFmpeg binaries for cross-environment reproducibility.'
    ],
    architecture: `[FastAPI Upload API] ──> [Redis Task Queue] ──> [Celery FFmpeg Worker] ──> [HLS .m3u8 Stream]`
  },

  // --- TRACK 3: AI / ML ---
  {
    id: 'aiml-1',
    trackId: 'aiml',
    title: 'Production-Ready Multimodal RAG System',
    subtitle: 'Cross-Encoder Reranking, Groundedness Guardrails & PDF Chunk Extraction',
    timeline: 'Sep 2025 – Dec 2025',
    featured: true,
    repoUrl: 'https://github.com/ayush201145/production-multimodal-rag',
    techStack: ['Python', 'FastAPI', 'ChromaDB / Qdrant', 'Sentence-Transformers', 'Cross-Encoder', 'Streamlit'],
    summary: 'Enterprise Multimodal RAG pipeline with hybrid vector retrieval, Cross-Encoder semantic reranking (+35% precision), and hallucination guardrails.',
    deliverables: [
      'Developed a production-grade Multimodal RAG system extracting text, markdown tables, and chart metadata from complex PDF documents.',
      'Implemented hybrid vector retrieval combined with a Cross-Encoder semantic reranker to improve document context precision by 35%.',
      'Engineered automated hallucination guardrails evaluating output claims against source chunks with groundedness scoring.',
      'Built an interactive Streamlit UI rendering citation cards, confidence metrics, and groundedness evaluations in real time.'
    ],
    architecture: `[PDF Parsing Engine] ──> [ChromaDB Hybrid Vectors] ──> [Cross-Encoder Reranker] ──> [Groundedness Check]`
  },
  {
    id: 'aiml-2',
    trackId: 'aiml',
    title: 'Real-Time Fraud & Anomaly Detection Pipeline',
    subtitle: 'Sub-50ms Inference Latency, Streaming Feature Store & Cost-Sensitive XGBoost',
    timeline: 'Jan 2026 – Mar 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/realtime-fraud-detection',
    techStack: ['Python', 'XGBoost', 'Scikit-Learn', 'Feature Store', 'FastAPI', 'Latency Benchmark'],
    summary: 'Real-time transaction stream fraud detection engine maintaining sub-50ms P99 latency SLA on extreme 98:2 class imbalance.',
    deliverables: [
      'Built an end-to-end real-time fraud detection pipeline processing transaction streams with sub-50ms inference latency.',
      'Developed an in-memory streaming Feature Store computing 1-hour and 24-hour rolling velocity features per user.',
      'Trained a cost-sensitive XGBoost classifier optimized for extreme class imbalance (98:2 legit-to-fraud ratio).',
      'Built an automated latency benchmarking harness validating P95 and P99 latency SLA compliance (<50ms) under simulated load.'
    ],
    architecture: `[Transaction Stream] ──> [Velocity Feature Store] ──> [XGBoost Inference (<50ms)] ──> [Risk Score]`
  },
  {
    id: 'aiml-3',
    trackId: 'aiml',
    title: 'Domain-Specific LLM Fine-Tuning & Evaluation',
    subtitle: '4-Bit QLoRA Parameter Efficient Tuning, vLLM Engine & Ragas Metric Suite',
    timeline: 'Apr 2026 – Jun 2026',
    featured: true,
    repoUrl: 'https://github.com/ayush201145/domain-llm-finetuning-bench',
    techStack: ['PyTorch', 'HuggingFace', 'PEFT / QLoRA', 'vLLM Engine', 'DeepEval / Ragas'],
    summary: 'Fine-tuned open-weight LLMs (Llama 3/Mistral) for Text-to-SQL tasks with 140+ token/sec vLLM inference and execution benchmarks.',
    deliverables: [
      'Fine-tuned open-weight LLMs (Llama 3 / Mistral) for specialized SQL generation using 4-bit NormalFloat (NF4) QLoRA parameter-efficient training.',
      'Curated synthetic domain-specific instruction datasets with automated quality filtering and validation.',
      'Built a high-throughput vLLM evaluation harness measuring token generation speed (140+ tokens/sec) and P90 response latencies.',
      'Implemented DeepEval/Ragas metric scoring for SQL exact-match accuracy, execution accuracy, and claim faithfulness.'
    ],
    architecture: `[Instruction Dataset] ──> [4-bit NF4 QLoRA Fine-Tune] ──> [vLLM Serving (140 tok/s)] ──> [DeepEval Metric Bench]`
  },

  // --- TRACK 4: DATA ANALYST ---
  {
    id: 'da-1',
    trackId: 'da',
    title: 'Executive Revenue & Cohort Retention Dashboard',
    subtitle: 'Advanced PostgreSQL Window Functions, LTV/CAC Modeling & Heatmaps',
    timeline: 'Sep 2025 – Dec 2025',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/executive-revenue-cohort-dashboard',
    techStack: ['PostgreSQL SQL', 'Python Pandas', 'Streamlit', 'Seaborn', 'Financial Analytics'],
    summary: 'Executive financial reporting suite calculating MRR/ARR churn metrics, unit economics (3.85x LTV/CAC), and 12-month cohort retention.',
    deliverables: [
      'Engineered advanced SQL queries (CTEs, Window Functions DATE_TRUNC, SUM OVER) to calculate SaaS financial metrics: MRR, ARR, and Churn.',
      'Developed a unit economics framework tracking Customer Acquisition Cost (CAC), Lifetime Value (LTV), and LTV/CAC ratios (3.85x target).',
      'Built a dynamic month-over-month user cohort retention heatmap analyzing 12-month customer churn behaviors.',
      'Published an interactive Streamlit reporting dashboard translating raw transactional database tables into executive visual storyboards.'
    ],
    architecture: `[Transactional DB] ──> [SQL CTE & Window Query Engine] ──> [Pandas Cohort Heatmap] ──> [Streamlit Executive Board]`
  },
  {
    id: 'da-2',
    trackId: 'da',
    title: 'E-Commerce Customer Segmentation (RFM)',
    subtitle: 'Mathematical RFM Scoring, Unsupervised K-Means & Marketing Playbook',
    timeline: 'Jan 2026 – Mar 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/ecommerce-rfm-segmentation',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn K-Means', 'Seaborn', 'Matplotlib'],
    summary: 'RFM segmentation engine clustering 1,000+ customer profiles into actionable marketing cohorts to maximize retention ROI.',
    deliverables: [
      'Formulated mathematical Recency, Frequency, and Monetary (RFM) scoring across 1,000+ customer transaction profiles.',
      'Trained an unsupervised K-Means clustering model (StandardScaler, optimal k-clusters) segmenting users into actionable marketing cohorts.',
      'Categorized customer base into Champions, At Risk, Need Attention, and Hibernating segments to optimize retention spend.',
      'Authored a strategic marketing playbook detailing campaign triggers, win-back discounts, and referral rewards per segment.'
    ],
    architecture: `[1,000+ User Profiles] ──> [RFM Mathematical Matrix] ──> [K-Means Cluster Model] ──> [Retention Playbook]`
  },
  {
    id: 'da-3',
    trackId: 'da',
    title: 'Marketing Multi-Touch Attribution & ROI Analysis',
    subtitle: 'First-Touch, Last-Touch, Linear & Time-Decay Channel Credit Models',
    timeline: 'Apr 2026 – Jun 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/marketing-attribution-roi',
    techStack: ['SQL Window Functions', 'Python Pandas', 'NumPy', 'Attribution Modeling'],
    summary: 'Multi-touch clickstream attribution model evaluating channel ROI and discovering top-of-funnel acquisition drivers.',
    deliverables: [
      'Built a multi-touch attribution analytical engine comparing First-Touch, Last-Touch, Linear, and Time-Decay credit models.',
      'Executed SQL window functions (ROW_NUMBER() OVER) partitioning multi-channel clickstream customer conversion funnels.',
      'Identified top-of-funnel discovery drivers, revealing Google Search generated 42% of customer acquisition touchpoints.',
      'Delivered an executive campaign ROI optimization report recommending budget re-allocation across paid ad channels.'
    ],
    architecture: `[Clickstream Log Data] ──> [SQL Conversion Funnel Query] ──> [Time-Decay Attribution Engine] ──> [Ad Spend Allocation Report]`
  },

  // --- TRACK 5: BUSINESS ANALYST ---
  {
    id: 'ba-1',
    trackId: 'ba',
    title: 'Digital Process Re-Engineering & Loan BRD/BPMN',
    subtitle: 'IEEE 830 BRD/FRD Standard, As-Is/To-Be BPMN 2.0 & 40% TAT Reduction',
    timeline: 'Sep 2025 – Dec 2025',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/loan-origination-brd-bpmn',
    techStack: ['BPMN 2.0 Mermaid', 'IEEE 830 Specification', 'Jira Backlog', 'Gherkin Syntax'],
    summary: 'Comprehensive BRD/FRD documentation reducing loan approval turnaround time from 5 days to under 24 hours (40% TAT gain).',
    deliverables: [
      'Authored comprehensive Business Requirement (BRD) and Functional Requirement (FRD) documents targeting automated retail loan approvals.',
      'Designed As-Is and To-Be BPMN 2.0 process flow diagrams demonstrating a 40% reduction in Customer Turnaround Time (TAT) from 5 days to <24h.',
      'Specified automated credit scoring decision rules (CreditScore >= 720, DTI <= 0.35) for instant auto-approval.',
      'Formulated Jira backlog user stories with Gherkin acceptance criteria (Given-When-Then) for seamless engineering execution.'
    ],
    architecture: `[Manual Loan Approval (5 Days)] ──> [BPMN 2.0 Re-Engineering] ──> [Auto-Scoring Engine (<24h)]`
  },
  {
    id: 'ba-2',
    trackId: 'ba',
    title: 'Cost-Benefit & Feasibility Study for CRM Migration',
    subtitle: '5-Year Financial Model ($216k NPV @ 10% WACC), IRR & Vendor Matrix',
    timeline: 'Jan 2026 – Mar 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/crm-migration-cost-benefit',
    techStack: ['Python Financial Modeling', 'NPV / IRR Analysis', 'Sensitivity Matrix', 'C-Level Pitch Deck'],
    summary: 'Financial NPV/IRR migration analysis evaluating Salesforce vs. HubSpot with 2.1-year payback period.',
    deliverables: [
      'Built a 5-year financial model calculating Net Present Value (NPV @ 10% WACC: $216,420), IRR, and a 2.1-year payback period.',
      'Developed a multi-attribute weighted vendor decision matrix comparing Salesforce Sales Cloud vs. HubSpot Enterprise.',
      'Performed financial sensitivity analysis across optimistic, base, and pessimistic licensing cost scenarios.',
      'Created an executive C-level pitch presentation deck outlining migration CapEx, OpEx savings, and risk mitigations.'
    ],
    architecture: `[Legacy CRM Expenses] ──> [5-Year Financial NPV/IRR Model] ──> [Weighted Vendor Decision Matrix] ──> [C-Level Board Deck]`
  },
  {
    id: 'ba-3',
    trackId: 'ba',
    title: 'Supply Chain Fulfillment Optimization & UAT Plan',
    subtitle: '5-Whys Diagnostic, Fishbone Root Cause Analysis & RTM Framework',
    timeline: 'Apr 2026 – Jun 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/supply-chain-uat-rtm',
    techStack: ['5-Whys Root Cause', 'Fishbone Diagram', 'Requirements Traceability (RTM)', 'UAT Plan'],
    summary: 'Supply chain diagnostic eliminating 4.2-hour regional warehouse dispatch delays via RTM specs and UAT sign-off gates.',
    deliverables: [
      'Conducted 5-Whys diagnostic and Ishigawa Fishbone root-cause analysis isolating 4.2-hour regional warehouse dispatch delays.',
      'Developed a full Requirements Traceability Matrix (RTM) linking operational business needs to functional scanner specs.',
      'Authored a comprehensive User Acceptance Testing (UAT) plan detailing test cases, preconditions, and sign-off criteria.',
      'Defined operational sign-off gates requiring 100% execution of P1 test cases prior to logistics dispatch automation rollout.'
    ],
    architecture: `[4.2h Warehouse Delays] ──> [5-Whys & Fishbone Diagnosis] ──> [RTM Requirement Linking] ──> [P1 UAT Sign-Off]`
  },

  // --- TRACK 6: DEVOPS ---
  {
    id: 'devops-1',
    trackId: 'devops',
    title: 'Production Kubernetes Cluster with GitOps',
    subtitle: 'Terraform AWS EKS, ArgoCD Declarative Delivery & Helm v3 Packaging',
    timeline: 'Sep 2025 – Dec 2025',
    featured: true,
    repoUrl: 'https://github.com/ayush201145/k8s-gitops-terraform',
    techStack: ['Terraform HCL', 'AWS EKS', 'ArgoCD GitOps', 'Helm v3', 'GitHub Actions'],
    summary: 'Modular Infrastructure-as-Code Terraform provisioning AWS EKS with ArgoCD declarative GitOps self-healing state sync.',
    deliverables: [
      'Provisioned multi-environment AWS EKS Kubernetes cloud infrastructure using modular Terraform HCL scripts.',
      'Implemented ArgoCD declarative GitOps continuous delivery with automated cluster state synchronization and self-healing.',
      'Packaged microservices using Helm v3 charts with parameterized values.yaml for environment scaling.',
      'Automated CI/CD syntax verification using GitHub Actions workflows running terraform validate on pull requests.'
    ],
    architecture: `[GitHub Repo Commit] ──> [ArgoCD GitOps Operator] ──> [AWS EKS Kubernetes Cluster] ──> [Helm v3 Deploy]`
  },
  {
    id: 'devops-2',
    trackId: 'devops',
    title: 'Zero-Downtime Blue-Green / Canary CI/CD Pipeline',
    subtitle: '90/10 Traffic Shifting, Trivy Vulnerability Guard & Auto-Rollback Shell',
    timeline: 'Jan 2026 – Mar 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/bluegreen-canary-cicd',
    techStack: ['GitHub Actions', 'Docker', 'Trivy Scanner', 'Nginx Reverse Proxy', 'Bash Automation'],
    summary: 'Automated CI/CD deployment pipeline executing 90/10 canary traffic shifts, Trivy CVE blocking, and zero-downtime rollbacks.',
    deliverables: [
      'Engineered a zero-downtime deployment pipeline managing automated canary rollouts (90/10 initial traffic split).',
      'Integrated Trivy security scanner into CI pipeline to automatically halt deployments on HIGH/CRITICAL CVE detections.',
      'Configured Nginx weighted upstream proxy rules for seamless canary traffic shifting and zero drop-rate deployments.',
      'Wrote an automated rollback monitoring shell script that detects 5xx error rate spikes and auto-reverts to stable releases.'
    ],
    architecture: `[Code Push] ──> [Trivy CVE Security Scan] ──> [Nginx 90/10 Traffic Split] ──> [Auto-Rollback on 5xx Spikes]`
  },
  {
    id: 'devops-3',
    trackId: 'devops',
    title: 'Centralized Observability & Automated Alerting Stack',
    subtitle: 'OpenTelemetry Collector, Prometheus 15s Scrapes & Grafana SLO Boards',
    timeline: 'Apr 2026 – Jun 2026',
    featured: false,
    repoUrl: 'https://github.com/ayush201145/observability-alerting-stack',
    techStack: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Alertmanager', 'Docker Compose'],
    summary: 'Centralized telemetry stack gathering OTLP traces and Prometheus metrics with Grafana dashboards and Alertmanager routing.',
    deliverables: [
      'Deployed a centralized observability stack consuming OTLP gRPC/HTTP traces and metrics via OpenTelemetry Collector.',
      'Configured Prometheus metric scrapers with 15s evaluation intervals monitoring system availability and P99 latency.',
      'Designed pre-built Grafana JSON dashboards visualizing Service Level Objectives (SLOs), error budgets, and latency histograms.',
      'Configured Alertmanager incident routing rules sending high-priority alerts to Slack channels with detailed runbooks.'
    ],
    architecture: `[OTLP Microservice Traces] ──> [OpenTelemetry Collector] ──> [Prometheus Metric Storage] ──> [Grafana & Alertmanager]`
  }
];
