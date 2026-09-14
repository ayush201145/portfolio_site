/**
 * tracksData.js - Configuration for 6 Specialized Engineering Tracks
 */

export const TRACKS = [
  {
    id: 'sde',
    name: 'SDE & Systems',
    shortName: 'SDE',
    icon: '⚡',
    color: '#06b6d4', // Cyan
    bgGradient: 'from-cyan-500/20 to-cyan-500/5',
    tagline: 'High-Throughput Systems, Consensus Protocols & Low-Level Distributed Storage',
    metric: '50k+ req/s',
    metricLabel: 'Gateway Overhead',
    projectIds: ['sde-1', 'sde-2', 'sde-3']
  },
  {
    id: 'swe',
    name: 'Software Engineering (SWE)',
    shortName: 'SWE',
    icon: '🚀',
    color: '#8b5cf6', // Purple
    bgGradient: 'from-purple-500/20 to-purple-500/5',
    tagline: 'Multi-Tenant SaaS, Event-Driven Architectures & HLS Media Pipelines',
    metric: '100%',
    metricLabel: 'Tenant Data Isolation',
    projectIds: ['swe-1', 'swe-2', 'swe-3']
  },
  {
    id: 'aiml',
    name: 'AI / ML Engineering',
    shortName: 'AI / ML',
    icon: '🧠',
    color: '#10b981', // Emerald
    bgGradient: 'from-emerald-500/20 to-emerald-500/5',
    tagline: 'Multimodal RAG, QLoRA Fine-Tuning & Sub-50ms Streaming Inference',
    metric: '+35%',
    metricLabel: 'Retrieval Rerank Precision',
    projectIds: ['aiml-1', 'aiml-2', 'aiml-3']
  },
  {
    id: 'da',
    name: 'Data Analytics & Insights',
    shortName: 'Data Analyst',
    icon: '📊',
    color: '#f59e0b', // Amber
    bgGradient: 'from-amber-500/20 to-amber-500/5',
    tagline: 'Financial Cohort Modeling, RFM Clustering & Multi-Touch Attribution',
    metric: '3.85x',
    metricLabel: 'LTV / CAC Target',
    projectIds: ['da-1', 'da-2', 'da-3']
  },
  {
    id: 'ba',
    name: 'Business Architecture (BA)',
    shortName: 'Business Analyst',
    icon: '📋',
    color: '#f43f5e', // Rose
    bgGradient: 'from-rose-500/20 to-rose-500/5',
    tagline: 'Process Re-Engineering, Financial NPV Models & UAT Quality Gates',
    metric: '40%',
    metricLabel: 'Process TAT Reduction',
    projectIds: ['ba-1', 'ba-2', 'ba-3']
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud Native',
    shortName: 'DevOps',
    icon: '🛠️',
    color: '#3b82f6', // Blue
    bgGradient: 'from-blue-500/20 to-blue-500/5',
    tagline: 'GitOps Kubernetes, Zero-Downtime Canary CI/CD & OTel Observability',
    metric: '0%',
    metricLabel: 'Deployment Downtime',
    projectIds: ['devops-1', 'devops-2', 'devops-3']
  }
];
