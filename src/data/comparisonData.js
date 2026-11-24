/**
 * comparisonData.js - Consolidated Technology Comparison Matrix
 * Exact comparison provided by user requirements:
 * 1. E-Commerce | FastAPI, PostgreSQL, RabbitMQ, Redis | Distributed transactions and concurrency
 * 2. Asset Management | FastAPI, React, Celery, Redis, FFmpeg, Docker | Async processing and video streaming
 * 3. CityPulse-X | PyTorch, YOLOv8m, SORT, FastAPI | Computer vision and real-time inference
 * 4. School Management | React, React Native, Node.js, Prisma, PostgreSQL | Full-stack application development
 * 5. URL Shortener | Node.js, Express, Redis, Kafka, PostgreSQL | Caching and event-driven architecture
 */

export const CONSOLIDATED_COMPARISON = [
  {
    id: 'ecommerce-checkout',
    number: 1,
    project: 'E-Commerce',
    fullTitle: 'Event-Driven E-Commerce & Inventory Checkout System',
    primaryTechnologies: 'FastAPI, PostgreSQL, RabbitMQ, Redis',
    mainEngineeringFocus: 'Distributed transactions and concurrency',
    paradigm: 'Microservices & Event Bus',
    criticalBottleneckSolved: 'Overselling under high-concurrency flash sales',
    dataConsistency: 'ACID Row Locks (SELECT FOR UPDATE) + Redis SETNX',
    asyncMechanism: 'RabbitMQ Message Exchanges & Pub/Sub',
    productionStatus: 'Original Resume Project',
    accentColor: '#f59e0b'
  },
  {
    id: 'asset-transcoder',
    number: 2,
    project: 'Asset Management',
    fullTitle: 'Cloud-Native Asset Management & Video Transcoding Platform',
    primaryTechnologies: 'FastAPI, React, Celery, Redis, FFmpeg, Docker',
    mainEngineeringFocus: 'Async processing and video streaming',
    paradigm: 'Distributed Task Queue & Transcoding Ladder',
    criticalBottleneckSolved: 'CPU-bound video encode blocking web HTTP connections',
    dataConsistency: 'Task state transitions (PENDING -> PROCESSING -> SUCCESS)',
    asyncMechanism: 'Celery Distributed Workers with Redis backend',
    productionStatus: 'Original Resume Project',
    accentColor: '#a855f7'
  },
  {
    id: 'citypulse-x',
    number: 3,
    project: 'CityPulse-X',
    fullTitle: 'CityPulse-X – Adaptive Urban Traffic Control System',
    primaryTechnologies: 'PyTorch, YOLOv8m, SORT, FastAPI',
    mainEngineeringFocus: 'Computer vision and real-time inference',
    paradigm: 'Edge AI Stream Pipeline & Recursive Tracking',
    criticalBottleneckSolved: 'Static signal timer delays causing intersection gridlock',
    dataConsistency: 'Frame-to-frame Hungarian algorithm cost association',
    asyncMechanism: 'Real-time frame ingestion & asynchronous inference loop',
    productionStatus: 'Existing Project',
    accentColor: '#00ff88'
  },
  {
    id: 'school-management',
    number: 4,
    project: 'School Management',
    fullTitle: 'School Management System',
    primaryTechnologies: 'React, React Native, Node.js, Prisma, PostgreSQL',
    mainEngineeringFocus: 'Full-stack application development',
    paradigm: 'Multi-Client ERP (Web + Mobile) with Offline Sync',
    criticalBottleneckSolved: 'Manual fee reconciliation, fragmented records & offline sync conflicts',
    dataConsistency: 'Prisma Multi-Table $transaction & Conflict Resolution Engine',
    asyncMechanism: 'Batched delta push/pull background sync',
    productionStatus: 'Shipped & Used',
    accentColor: '#38bdf8'
  },
  {
    id: 'url-shortener',
    number: 5,
    project: 'URL Shortener',
    fullTitle: 'Distributed URL Shortener',
    primaryTechnologies: 'Node.js, Express, Redis, Kafka, PostgreSQL',
    mainEngineeringFocus: 'Caching and event-driven architecture',
    paradigm: 'High-Throughput Cache-Aside & Event Streaming',
    criticalBottleneckSolved: 'Persistent database saturation during high read-to-write traffic',
    dataConsistency: 'Redis Cache-Aside TTL with B-tree PostgreSQL fallback',
    asyncMechanism: 'Apache Kafka Partitioned Producer & Consumer stream',
    productionStatus: 'Backend Project',
    accentColor: '#f43f5e'
  }
];

export default CONSOLIDATED_COMPARISON;
