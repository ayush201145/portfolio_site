/**
 * projectsData.js - Catalog of the 5 Core Flagship Engineering Projects
 * Removed legacy projects and populated exclusively with user-specified systems:
 * 1. Event-Driven E-Commerce & Inventory Checkout System
 * 2. Cloud-Native Asset Management & Video Transcoding Platform
 * 3. CityPulse-X – Adaptive Urban Traffic Control System
 * 4. School Management System
 * 5. Distributed URL Shortener
 */

export const PROJECTS = [
  {
    id: 'ecommerce-checkout',
    number: '01',
    title: 'Event-Driven E-Commerce & Inventory Checkout System',
    category: 'Original resume project',
    type: 'Backend · E-commerce · Event-driven architecture',
    shortCategory: 'Backend / Event-Driven',
    accentColor: '#f59e0b', // Ember Amber / Gold
    accentGlow: 'rgba(245, 158, 11, 0.25)',
    summary: 'High-throughput asynchronous checkout orchestrator coordinating inventory deduction, payment idempotency retries, and distributed concurrency locking under intense flash-sale traffic.',
    primaryTech: 'FastAPI, PostgreSQL, RabbitMQ, Redis',
    mainFocus: 'Distributed transactions and concurrency',
    techStackGrouped: [
      { category: 'Language', items: ['Python'] },
      { category: 'Backend', items: ['FastAPI'] },
      { category: 'Database', items: ['PostgreSQL'] },
      { category: 'Message Broker', items: ['RabbitMQ'] },
      { category: 'Caching / Pub-Sub', items: ['Redis'] },
      { category: 'Validation', items: ['Pydantic'] }
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Pydantic'],
    features: [
      {
        id: 'feat-1',
        name: 'Checkout workflow',
        detail: 'Handles customer checkout requests and coordinates order processing end-to-end.'
      },
      {
        id: 'feat-2',
        name: 'Inventory management',
        detail: 'Deducts product inventory atomically during successful checkout.'
      },
      {
        id: 'feat-3',
        name: 'Payment idempotency',
        detail: 'Prevents duplicate payment processing when the same request is retried across unstable connections.'
      },
      {
        id: 'feat-4',
        name: 'Event-driven processing',
        detail: 'Uses RabbitMQ message exchanges to communicate events decoupled across application components.'
      },
      {
        id: 'feat-5',
        name: 'Redis Pub/Sub',
        detail: 'Supports real-time event notifications and cache invalidations between microservices.'
      },
      {
        id: 'feat-6',
        name: 'Concurrency control',
        detail: 'Uses distributed locks to coordinate simultaneous inventory updates and avoid race hazards.'
      },
      {
        id: 'feat-7',
        name: 'Overselling prevention',
        detail: 'Adds rigorous safeguards and database constraints against selling more units than available stock.'
      },
      {
        id: 'feat-8',
        name: 'Request validation',
        detail: 'Uses Pydantic schemas with strict type validation on all incoming API request payloads.'
      }
    ],
    importantConcepts: [
      {
        name: 'Event-driven architecture',
        desc: 'Decoupling services through asynchronous domain events (OrderCreated, PaymentCaptured, InventoryReserved) instead of blocking synchronous HTTP calls.'
      },
      {
        name: 'Message queues',
        desc: 'Buffering peak checkout spikes via RabbitMQ persistent queues, message durability, and consumer acknowledgement (ACK/NACK) semantics.'
      },
      {
        name: 'Idempotency',
        desc: 'Using unique client-generated Idempotency-Keys cached in Redis to guarantee at-most-once payment side effects even under multiple retries.'
      },
      {
        name: 'Distributed locks',
        desc: 'Acquiring Redis-backed Redlock / SETNX mutex locks with TTL expiration to serialize inventory decrements across multiple worker nodes.'
      },
      {
        name: 'Race conditions',
        desc: 'Handling simultaneous checkout requests targeting the final unit of inventory without dirty reads or phantom updates.'
      },
      {
        name: 'Database transactions',
        desc: 'ACID transaction boundaries in PostgreSQL with SELECT FOR UPDATE row-level locking ensuring isolated atomic state transitions.'
      },
      {
        name: 'Inventory consistency',
        desc: 'Reconciling reservation expirations, order cancellations, and stock release workflows to eliminate ghost inventory.'
      }
    ],
    architecture: `[HTTP Client / Mobile App]
          │ POST /api/v1/checkout (Header: Idempotency-Key)
          ▼
   [FastAPI Gateway] ──(Pydantic Schema Validation)
          │
    ┌─────┴─────────────────────────────────────────────┐
    ▼ (Check Cache)                                     ▼ (Distributed Mutex)
[Redis Key Store]                                 [Redis Distributed Lock]
(Idempotency Result Match)                        (SETNX SKU_LOCK with 5s TTL)
    │                                                   │
    ▼ (Miss -> Continue)                                ▼ (Lock Acquired)
[PostgreSQL ACID Engine] ◀──────────────────────────────┘
  BEGIN TRANSACTION;
    SELECT stock FROM inventory WHERE sku = $1 FOR UPDATE;
    IF stock >= qty THEN UPDATE inventory SET stock = stock - qty;
  COMMIT;
    │
    ▼ (Publish Domain Event)
[RabbitMQ Exchange: 'orders'] ──(routing_key: 'order.placed')
    │
    ├──▶ Queue: 'payment.processor' ──▶ Payment Worker (Idempotent Charge)
    ├──▶ Queue: 'notification.service' ──▶ Email / SMS Worker
    └──▶ Queue: 'analytics.stream' ──▶ Warehouse Dispatch Worker`,
    simulationType: 'ecommerce'
  },
  {
    id: 'asset-transcoder',
    number: '02',
    title: 'Cloud-Native Asset Management & Video Transcoding Platform',
    category: 'Original resume project',
    type: 'Full-stack · Cloud-native · Video processing',
    shortCategory: 'Cloud-Native / Video',
    accentColor: '#a855f7', // Cyber Purple
    accentGlow: 'rgba(168, 85, 247, 0.25)',
    summary: 'Distributed media processing pipeline offloading compute-heavy video ingestion to background Celery workers, generating multi-bitrate HLS adaptive streaming packages with Dockerized FFmpeg.',
    primaryTech: 'FastAPI, React, Celery, Redis, FFmpeg, Docker',
    mainFocus: 'Async processing and video streaming',
    techStackGrouped: [
      { category: 'Backend', items: ['Python', 'FastAPI'] },
      { category: 'Frontend', items: ['React'] },
      { category: 'Background Tasks', items: ['Celery'] },
      { category: 'Message Broker / Caching', items: ['Redis'] },
      { category: 'Video Processing', items: ['FFmpeg'] },
      { category: 'Deployment', items: ['Docker'] },
      { category: 'Streaming Format', items: ['HLS'] }
    ],
    techStack: ['Python', 'FastAPI', 'React', 'Celery', 'Redis', 'FFmpeg', 'Docker', 'HLS'],
    features: [
      {
        id: 'feat-1',
        name: 'Asset management',
        detail: 'Uploads, categorizes, validates, and manages raw digital video assets.'
      },
      {
        id: 'feat-2',
        name: 'Asynchronous processing',
        detail: 'Uses Celery distributed workers to execute compute-intensive video transcoding in background queues.'
      },
      {
        id: 'feat-3',
        name: 'Video transcoding',
        detail: 'Converts uncompressed MP4/MOV source files into web and streaming-compatible standard codecs.'
      },
      {
        id: 'feat-4',
        name: 'Adaptive bitrate encoding',
        detail: 'Generates multi-quality renditions (1080p, 720p, 480p, 360p) tailored to variable network bandwidths.'
      },
      {
        id: 'feat-5',
        name: 'HLS streaming',
        detail: 'Produces master HLS (.m3u8) playlists and segmented MPEG-TS chunks for smooth adaptive video playback.'
      },
      {
        id: 'feat-6',
        name: 'Processing status',
        detail: 'Provides polling and WebSocket/REST APIs to track real-time progression of video-processing tasks.'
      },
      {
        id: 'feat-7',
        name: 'Asset APIs',
        detail: 'Exposes clean RESTful endpoints for CRUD asset metadata management and storage pointers.'
      },
      {
        id: 'feat-8',
        name: 'Playback APIs',
        detail: 'Provides high-speed CDN-friendly access to processed video manifest files and media segments.'
      },
      {
        id: 'feat-9',
        name: 'Containerization',
        detail: 'Uses Docker multi-stage builds to package application components with compiled FFmpeg binaries.'
      }
    ],
    importantConcepts: [
      {
        name: 'Celery workers',
        desc: 'Distributed Python task queue executing asynchronous compute tasks independently of the web API loop.'
      },
      {
        name: 'Redis queues',
        desc: 'In-memory transport message broker orchestrating task serialization, rate-limits, and worker prefetch settings.'
      },
      {
        name: 'FFmpeg',
        desc: 'Command-line audio/video processing powerhouse performing H.264/AAC transcoding, keyframe alignment, and muxing.'
      },
      {
        name: 'HLS playlists',
        desc: 'Master .m3u8 manifest files pointing to variant streams with bitrate/resolution tags and discrete .ts segment indexes.'
      },
      {
        name: 'Adaptive bitrate streaming',
        desc: 'Client-side automatic resolution switching based on real-time client throughput and buffer occupancy.'
      },
      {
        name: 'Docker containers',
        desc: 'Reproducible microservice containers bundling Linux FFmpeg libraries and isolated dependencies.'
      },
      {
        name: 'Asynchronous APIs',
        desc: 'Returning HTTP 202 Accepted with task execution UUIDs to prevent client HTTP request socket timeouts.'
      },
      {
        name: 'Background job management',
        desc: 'Task retry policies with exponential backoff, dead-letter task handling, and progress state tracking.'
      }
    ],
    architecture: `[React SPA Web Dashboard]
          │
          ├──▶ POST /api/v1/assets/upload (Raw MP4/MOV) ──▶ [Local/S3 Storage]
          └──▶ GET /api/v1/tasks/{task_id}/status
                     ▲
                     │
          [FastAPI Web Server]
                     │
          (Enqueue Task payload)
                     ▼
          [Redis Message Broker / Result Backend]
                     │
                     ▼ (Prefetch Task)
          [Celery Worker Cluster (Docker)]
                     │
          (Invoke Subprocess Pipeline)
                     ▼
             [FFmpeg Engine]
                     │
    ┌────────────────┼────────────────┐
    ▼ (1080p @ 4.5M) ▼ (720p @ 2.5M)  ▼ (480p @ 1.2M)
  1080p.m3u8       720p.m3u8        480p.m3u8
  seg_001.ts       seg_001.ts       seg_001.ts
    │                │                │
    └────────────────┼────────────────┘
                     ▼
          [Master Playlist: master.m3u8]
                     │
                     ▼
          [Playback API / HLS HTML5 Video Player]`,
    simulationType: 'transcoder'
  },
  {
    id: 'citypulse-x',
    number: '03',
    title: 'CityPulse-X – Adaptive Urban Traffic Control System',
    category: 'Existing project',
    type: 'Computer vision · Deep learning · Intelligent transportation',
    shortCategory: 'CV / Deep Learning',
    accentColor: '#00ff88', // Hyper Cyber Emerald
    accentGlow: 'rgba(0, 255, 136, 0.25)',
    summary: 'Real-time intelligent traffic management pipeline fusing YOLOv8m object detection with SORT multi-target tracking to dynamically calculate queue density and optimize urban signal timing.',
    primaryTech: 'PyTorch, YOLOv8m, SORT, FastAPI',
    mainFocus: 'Computer vision and real-time inference',
    techStackGrouped: [
      { category: 'Language', items: ['Python'] },
      { category: 'Deep Learning', items: ['PyTorch'] },
      { category: 'Object Detection', items: ['YOLOv8m'] },
      { category: 'Object Tracking', items: ['SORT'] },
      { category: 'Backend', items: ['FastAPI'] },
      { category: 'Computer Vision', items: ['Video/image processing pipeline', 'OpenCV'] }
    ],
    techStack: ['Python', 'PyTorch', 'YOLOv8m', 'SORT', 'FastAPI', 'OpenCV'],
    features: [
      {
        id: 'feat-1',
        name: 'Vehicle detection',
        detail: 'Uses YOLOv8m neural network to detect vehicles (cars, buses, trucks, motorcycles) in traffic camera footage.'
      },
      {
        id: 'feat-2',
        name: 'Object tracking',
        detail: 'Uses Simple Online and Realtime Tracking (SORT) to track detected vehicles persistently across consecutive frames.'
      },
      {
        id: 'feat-3',
        name: 'Vehicle analysis',
        detail: 'Uses detection and tracking trajectories to analyze velocity, lane occupancy, and congestion density.'
      },
      {
        id: 'feat-4',
        name: 'Adaptive signal logic',
        detail: 'Uses observed traffic conditions and queue lengths to dynamically calculate optimal traffic signal green times.'
      },
      {
        id: 'feat-5',
        name: 'Detection pipeline',
        detail: 'Connects live RTSP video input, frame preprocessing, model inference, and tracking state into a continuous pipeline.'
      },
      {
        id: 'feat-6',
        name: 'Inference API',
        detail: 'Exposes backend inference functionality, telemetry feeds, and intersection metrics through FastAPI endpoints.'
      }
    ],
    importantConcepts: [
      {
        name: 'YOLO architecture',
        desc: 'Single-stage object detector dividing images into grid cells, predicting bounding boxes and class probabilities simultaneously in one forward pass.'
      },
      {
        name: 'Detection vs classification',
        desc: 'Classification identifies what is in an image; detection additionally localizes multiple objects with coordinates.'
      },
      {
        name: 'Bounding boxes',
        desc: 'Spatial coordinates (x_min, y_min, x_max, y_max) or normalized center format (x_c, y_c, w, h) bounding detected objects.'
      },
      {
        name: 'Confidence scores',
        desc: 'Probability score representing model certainty that a box contains an object of the predicted category.'
      },
      {
        name: 'IoU (Intersection over Union)',
        desc: 'Metric measuring overlap ratio between predicted and ground-truth bounding boxes, crucial for detection accuracy.'
      },
      {
        name: 'Non-maximum suppression (NMS)',
        desc: 'Post-processing algorithm that eliminates redundant overlapping bounding boxes based on IoU thresholding.'
      },
      {
        name: 'SORT algorithm',
        desc: 'Fast tracking framework combining Kalman filtering for motion prediction and Hungarian algorithm for frame-to-frame data association.'
      },
      {
        name: 'Kalman filters',
        desc: 'Recursive mathematical filter estimating linear state (position & velocity) of a moving vehicle despite noisy bounding box measurements.'
      },
      {
        name: 'Hungarian algorithm',
        desc: 'Combinatorial optimization algorithm solving minimum-cost assignment bipartite matching between existing tracks and new detections.'
      },
      {
        name: 'FPS (Frames Per Second)',
        desc: 'Inference throughput rate indicating real-time performance viability (target: 30+ FPS on edge GPU hardware).'
      },
      {
        name: 'Adaptive traffic signal logic',
        desc: 'Algorithmic dynamic allocation replacing static timers with green-time durations proportional to lane queue length and velocity.'
      }
    ],
    architecture: `[CCTV / RTSP Video Feed]
          │ (OpenCV Frame Ingestion)
          ▼
   [Frame Preprocessing] ──(Letterbox resize to 640x640, RGB normalization)
          │
          ▼
   [YOLOv8m Neural Network] ──(PyTorch GPU / TensorRT Acceleration)
          │
          ├──▶ Raw Detections (xywh, confidence, class_id)
          ▼
   [Non-Maximum Suppression (NMS)] ──(Filter IoU > 0.45, Conf > 0.50)
          │
          ▼
   [SORT Tracking Engine]
          │
          ├──▶ Kalman Filter (Velocity & trajectory state estimation)
          └──▶ Hungarian Matcher (Assign Detection[t] to Tracklet[t-1])
          │
          ▼
   [Intersection Analytics Engine]
          │ (Count active tracks per lane, calculate density & wait times)
          ▼
   [Adaptive Traffic Signal Algorithm]
          │ (Dynamically calculate: Green_Time = Base_Time + k * Queue_Density)
          ▼
   [FastAPI Telemetry API & Signal Hardware Actuator]`,
    simulationType: 'traffic'
  },
  {
    id: 'school-management',
    number: '04',
    title: 'School Management System',
    category: 'Shipped and used',
    type: 'Full-stack · Web and mobile · Business management',
    shortCategory: 'Full-Stack / Mobile',
    accentColor: '#38bdf8', // Sky Cyan / Electric Azure
    accentGlow: 'rgba(56, 189, 248, 0.25)',
    summary: 'Commercial-grade dual-platform ERP powering educational institutions with Web (React) and Mobile (React Native/Expo) interfaces, Prisma ORM, offline-first data sync, and multi-tier fee collection.',
    primaryTech: 'React, React Native, Node.js, Prisma, PostgreSQL',
    mainFocus: 'Full-stack application development',
    techStackGrouped: [
      { category: 'Web Frontend', items: ['React'] },
      { category: 'Mobile Frontend', items: ['React Native', 'Expo', 'TypeScript'] },
      { category: 'Backend', items: ['Node.js', 'Express.js'] },
      { category: 'ORM', items: ['Prisma'] },
      { category: 'Database', items: ['PostgreSQL'] },
      { category: 'Authentication', items: ['JWT'] },
      { category: 'Mobile State Management', items: ['Zustand'] },
      { category: 'Mobile Networking', items: ['Axios'] },
      { category: 'Secure Storage', items: ['Expo SecureStore'] },
      { category: 'UI Library', items: ['React Native Paper'] }
    ],
    techStack: ['React', 'React Native', 'Expo', 'TypeScript', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT', 'Zustand'],
    features: [
      {
        id: 'feat-1',
        name: 'Student management',
        detail: 'Student profiles, academic records, enrollment details, and parent contact information.'
      },
      {
        id: 'feat-2',
        name: 'Teacher management',
        detail: 'Faculty profiles, assigned subjects, timetable scheduling, and qualification records.'
      },
      {
        id: 'feat-3',
        name: 'Academic management',
        detail: 'Hierarchical configuration of academic years, semesters, grades, classes, and sections.'
      },
      {
        id: 'feat-4',
        name: 'Attendance management',
        detail: 'Daily biometric/manual student attendance recording with automated absence notifications.'
      },
      {
        id: 'feat-5',
        name: 'Fee management',
        detail: 'Customizable fee structures, tuition schedules, lab charges, and recurring billing cycles.'
      },
      {
        id: 'feat-6',
        name: 'Payment management',
        detail: 'Online/offline payment recording supporting both full and partial payments with audit history.'
      },
      {
        id: 'feat-7',
        name: 'Dues management',
        detail: 'Automated tracking of outstanding fees, payment delinquency reminders, and ledger balances.'
      },
      {
        id: 'feat-8',
        name: 'Receipt generation',
        detail: 'Automated invoice and PDF payment receipt generation with instant sharing via print or email.'
      },
      {
        id: 'feat-9',
        name: 'Inventory management',
        detail: 'Tracks school equipment, classroom assets, library books, and consumable inventory items.'
      },
      {
        id: 'feat-10',
        name: 'Staff management',
        detail: 'Administrative and operational staff personnel records, attendance, and role assignment.'
      },
      {
        id: 'feat-11',
        name: 'Expense management',
        detail: 'Itemized institutional expenditure recording, voucher management, and cash withdrawals.'
      },
      {
        id: 'feat-12',
        name: 'Financial reporting',
        detail: 'Comprehensive monthly balance sheets, income statements, and institutional financial summaries.'
      },
      {
        id: 'feat-13',
        name: 'Authentication',
        detail: 'Secure JWT-based authentication with token rotation and encrypted session storage.'
      },
      {
        id: 'feat-14',
        name: 'Role-based access',
        detail: 'Granular RBAC enforcement distinguishing SuperAdmin, Principal, Teacher, Accountant, and Parent.'
      },
      {
        id: 'feat-15',
        name: 'Data synchronization',
        detail: 'Pushes and pulls batched delta changes between offline mobile clients and backend PostgreSQL.'
      },
      {
        id: 'feat-16',
        name: 'Conflict resolution',
        detail: 'Intelligent conflict resolution heuristics preserving server-side authoritative state or merging client edits.'
      }
    ],
    importantConcepts: [
      {
        name: 'React versus React Native',
        desc: 'Web Virtual DOM rendering HTML/CSS vs mobile rendering native iOS/Android bridge primitives (UIView / android.view) using a shared component mindset.'
      },
      {
        name: 'REST API design',
        desc: 'Predictable resource-oriented endpoints with standard HTTP verbs, status codes, query pagination, and filtering.'
      },
      {
        name: 'Prisma ORM',
        desc: 'Type-safe database client with declarative schema modeling, automated migrations, and SQL query generation.'
      },
      {
        name: 'Database relationships',
        desc: 'Relational 1:1, 1:N, and N:M relationships with foreign keys, cascading deletes, and indexed join performance.'
      },
      {
        name: 'JWT authentication',
        desc: 'Stateless signed tokens with short-lived access tokens and refresh tokens securely stored in Expo SecureStore / HTTP-only cookies.'
      },
      {
        name: 'Role-based authorization',
        desc: 'Middleware gates validating token claims against required permission scopes prior to route execution.'
      },
      {
        name: 'Partial payments',
        desc: 'Splitting fee invoices across multiple payment installments while tracking remaining outstanding balances.'
      },
      {
        name: 'Database transactions',
        desc: 'Multi-statement Prisma $transaction ensuring invoice generation and student balance update succeed or rollback together.'
      },
      {
        name: 'Synchronization',
        desc: 'Offline-first queue capturing mutations in local SQLite/AsyncStorage and batch-syncing upon network restoration.'
      },
      {
        name: 'Conflict resolution',
        desc: 'Last-write-wins (LWW) timestamp comparisons, client-side diff review, and server-side validation guards.'
      }
    ],
    architecture: `[Web Admin Portal (React)]          [Mobile App (React Native / Expo / Zustand)]
            │                                         │
            │ (Axios REST Calls)                      │ (Offline Cache + Expo SecureStore)
            └────────────────────┬────────────────────┘
                                 ▼
                     [Node.js + Express API Gateway]
                                 │
           ┌─────────────────────┴─────────────────────┐
           ▼                                           ▼
   [JWT Auth & RBAC Middleware]            [Sync & Conflict Engine]
   (Verify role: ADMIN | TEACHER)         (Delta push/pull reconciliation)
           │                                           │
           └─────────────────────┬─────────────────────┘
                                 ▼
                      [Prisma ORM Client]
              ($transaction atomic operations)
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     ▼                           ▼                           ▼
[Students & Classes]      [Fees & Payments]          [Staff & Attendance]
  (PostgreSQL Model)        (PostgreSQL Model)          (PostgreSQL Model)
     │                           │                           │
     └───────────────────────────┴───────────────────────────┘
                                 ▼
                      [PostgreSQL Central DB]`,
    simulationType: 'school'
  },
  {
    id: 'url-shortener',
    number: '05',
    title: 'Distributed URL Shortener',
    category: 'Backend project',
    type: 'Backend engineering · Caching · Event streaming',
    shortCategory: 'Backend / Kafka',
    accentColor: '#f43f5e', // Cyber Crimson
    accentGlow: 'rgba(244, 63, 94, 0.25)',
    summary: 'Ultra-low latency URL redirector handling high read-to-write ratios with Redis cache-aside lookups, Base62 token encoding, and non-blocking Apache Kafka click analytics event streaming.',
    primaryTech: 'Node.js, Express, Redis, Kafka, PostgreSQL',
    mainFocus: 'Caching and event-driven architecture',
    techStackGrouped: [
      { category: 'Language', items: ['JavaScript / Node.js'] },
      { category: 'Backend', items: ['Express.js'] },
      { category: 'Database', items: ['PostgreSQL'] },
      { category: 'Caching', items: ['Redis'] },
      { category: 'Event Streaming', items: ['Apache Kafka'] }
    ],
    techStack: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Apache Kafka'],
    features: [
      {
        id: 'feat-1',
        name: 'URL shortening',
        detail: 'Converts long destination URLs into compact Base62 encoded alphanumeric short identifiers.'
      },
      {
        id: 'feat-2',
        name: 'URL storage',
        detail: 'Stores original URL, short code, owner ID, and expiration metadata in indexed PostgreSQL tables.'
      },
      {
        id: 'feat-3',
        name: 'URL redirection',
        detail: 'Resolves incoming short codes and instantly redirects users to destination URLs via HTTP 302.'
      },
      {
        id: 'feat-4',
        name: 'Redis caching',
        detail: 'Caches hot and frequently accessed URL mappings in-memory to drastically reduce persistent DB load.'
      },
      {
        id: 'feat-5',
        name: 'Cache-assisted lookup',
        detail: 'Implements Cache-Aside strategy: checks Redis first before querying PostgreSQL on cache misses.'
      },
      {
        id: 'feat-6',
        name: 'Click analytics',
        detail: 'Captures rich click metadata (timestamp, user agent, IP geolocation, referrer) upon each visit.'
      },
      {
        id: 'feat-7',
        name: 'Asynchronous processing',
        detail: 'Uses Apache Kafka event producers to offload click logging asynchronously outside the critical redirect path.'
      },
      {
        id: 'feat-8',
        name: 'Separation of workloads',
        detail: 'Completely decouples sub-millisecond redirection performance from analytical computation and database writes.'
      }
    ],
    importantConcepts: [
      {
        name: 'URL encoding and hashing',
        desc: 'Converting database auto-increment IDs or MD5/Murmur3 hashes to Base62 strings ([0-9a-zA-Z]) to produce 6-7 character compact short links.'
      },
      {
        name: 'Unique identifiers',
        desc: 'Preventing hash collisions using distributed ID generators (Twitter Snowflake) or sequence counter offsets with collision retries.'
      },
      {
        name: 'HTTP redirects (301 vs. 302)',
        desc: '301 Moved Permanently causes browser local caching (bypassing analytics tracking), whereas 302 Found forces requests through the server to record analytics.'
      },
      {
        name: 'Redis cache-aside pattern',
        desc: 'Application reads from cache; on miss, reads from DB and writes back to cache; writes update DB and invalidate or set cache TTL.'
      },
      {
        name: 'Cache invalidation',
        desc: 'Managing TTL expirations and immediate key purge upon URL deletion or updates to prevent stale redirects.'
      },
      {
        name: 'Kafka producers and consumers',
        desc: 'Publishing click events to partitioned Kafka topics without waiting for consumer database inserts, achieving maximum redirect throughput.'
      },
      {
        name: 'PostgreSQL indexing',
        desc: 'B-tree index on short_code column for O(log N) lookup speeds on cache misses.'
      },
      {
        name: 'System design',
        desc: 'Scaling for 100:1 read-to-write ratios, CDN edge caching, partitioning, and high availability.'
      }
    ],
    architecture: `[Incoming User Request] ──▶ GET /:short_code
               │
               ▼
   [Express.js High-Speed Router]
               │
      ┌────────┴─────────────────────────────────┐
      ▼ (Step 1: In-Memory Lookup)               ▼ (Step 2: Cache Miss Fallback)
  [Redis Cache-Aside Store]                [PostgreSQL DB (B-Tree Index)]
  (O(1) Memory Key Read)                   (SELECT target_url WHERE code = $1)
      │                                          │
      ├──▶ [CACHE HIT: < 1ms]                    ├──▶ [Found: Populate Redis & Return]
      │                                          │
      └──────────────────┬───────────────────────┘
                         ▼
             [HTTP 302 Redirect Response] ──▶ User's Browser
                         │
             (Non-blocking async dispatch)
                         ▼
             [Kafka Producer Event Bus]
             (Topic: 'url-click-stream')
                         │
        ┌────────────────┴────────────────┐
        ▼                                 ▼
[Kafka Consumer 1: Analytics]     [Kafka Consumer 2: Geolocation]
  Aggregates hourly metrics         Parses IP & Referrer Headers
        │                                 │
        └────────────────┬────────────────┘
                         ▼
             [Analytics Timeseries Store]`,
    simulationType: 'shortener'
  }
];

export default PROJECTS;
