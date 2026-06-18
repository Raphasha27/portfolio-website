import { useState } from 'react'

const JAVA_BANKING = [
  { name: 'smartbank-enterprise-platform', desc: 'Multi-module microservices platform: auth, accounts, transactions, loans, audit, notifications, gateway', tag: '★ FEATURED' },
  { name: 'securebank-360', desc: 'Core banking system with customer management, account operations, transfers, and fraud detection rules' },
  { name: 'smartbank-nextgen', desc: 'Next-gen banking API with digital wallet support, transaction history, and notification services' },
  { name: 'fraud-detection-system', desc: 'Real-time fraud detection engine using threshold rules and velocity checks on transactions' },
  { name: 'secure-auth-service', desc: 'Centralized authentication service with JWT, BCrypt, role-based access control (RBAC)' },
  { name: 'banking-api-gateway', desc: 'API Gateway pattern implementation for routing, rate limiting, and request validation' },
  { name: 'loan-management-system', desc: 'Loan origination, approval workflows, repayment scheduling, and interest calculation engine' },
  { name: 'kyc-platform', desc: 'Know Your Customer compliance platform with identity verification and document management' },
  { name: 'aml-monitoring-platform', desc: 'Anti-Money Laundering monitoring with transaction screening and suspicious activity reporting' },
  { name: 'enterprise-iam-platform', desc: 'Enterprise Identity and Access Management with user provisioning and role management' },
  { name: 'payment-gateway', desc: 'Payment processing gateway with transaction routing, merchant management, and settlement' },
  { name: 'real-time-payments-platform', desc: 'Real-time payment processing with instant clearing and settlement simulation' },
  { name: 'core-banking-system', desc: 'Core banking backend: accounts, deposits, withdrawals, transfers, and customer management' },
  { name: 'regulatory-reporting-platform', desc: 'Regulatory compliance reporting with automated report generation and audit trails' },
]

const SECURITY_REPOS = [
  { name: 'sentinel-ai-platform', desc: 'AI-driven security monitoring platform with ML-based anomaly detection' },
  { name: 'mini-siem-platform', desc: 'Security Information and Event Management with log aggregation and alerting' },
  { name: 'security-admin-portal', desc: 'Centralized security administration dashboard for policy management' },
  { name: 'incident-response-platform', desc: 'Incident response orchestration with playbook automation and case management' },
  { name: 'vulnerability-management-platform', desc: 'Vulnerability scanning, prioritization, and remediation tracking system' },
  { name: 'security-posture-dashboard', desc: 'Security posture visualization with compliance scoring and trend analysis' },
  { name: 'patch-management-tracker', desc: 'Patch lifecycle management with deployment scheduling and compliance checks' },
  { name: 'endpoint-inventory-system', desc: 'Endpoint discovery, asset tracking, and configuration management database' },
  { name: 'security-asset-register', desc: 'Security asset register with risk classification and ownership tracking' },
  { name: 'threat-modeling-studio', desc: 'Threat modeling tool with STRIDE/LINDDUN frameworks and diagramming' },
  { name: 'ai-log-analyzer', desc: 'AI-powered log analysis with pattern detection and root cause suggestions' },
  { name: 'ai-vulnerability-assistant', desc: 'Vulnerability assessment assistant using AI for remediation guidance' },
  { name: 'ai-security-chatbot', desc: 'Security knowledge base chatbot with incident response recommendations' },
  { name: 'security-project-template', desc: 'Reusable security project template with CI/CD, policies, and documentation' },
]

const SAAS_REPOS = [
  { name: 'kirov-security-api-suite', desc: 'Security SaaS API: password analysis, URL checking, hashing (bcrypt/argon2/SHA-256), email phishing classifier' },
]

const SKILLS = [
  {
    category: 'Languages',
    icon: '⌨',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks',
    icon: '⚡',
    items: ['Spring Boot', 'Spring Security', 'FastAPI', 'React', 'Node.js'],
  },
  {
    category: 'Databases',
    icon: '🗄',
    items: ['PostgreSQL', 'MySQL', 'H2', 'Redis'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🔧',
    items: ['Docker', 'Git', 'Maven', 'Kafka', 'GitHub Actions', 'Vercel'],
  },
  {
    category: 'Architecture',
    icon: '🏗',
    items: ['Microservices', 'REST APIs', 'Event-Driven', 'API Gateway', 'JWT/RBAC', 'ACID'],
  },
  {
    category: 'Security',
    icon: '🔒',
    items: ['BCrypt', 'JWT', 'OAuth2', 'CSP Headers', 'Input Validation', 'Audit Logging'],
  },
]

import { useState } from 'react'

const JAVA_BANKING = [
  { name: 'smartbank-enterprise-platform', desc: 'Multi-module microservices platform: auth, accounts, transactions, loans, audit, notifications, gateway', tag: '★ FEATURED' },
  { name: 'securebank-360', desc: 'Core banking system with customer management, account operations, transfers, and fraud detection rules' },
  { name: 'smartbank-nextgen', desc: 'Next-gen banking API with digital wallet support, transaction history, and notification services' },
  { name: 'fraud-detection-system', desc: 'Real-time fraud detection engine using threshold rules and velocity checks on transactions' },
  { name: 'secure-auth-service', desc: 'Centralized authentication service with JWT, BCrypt, role-based access control (RBAC)' },
  { name: 'banking-api-gateway', desc: 'API Gateway pattern implementation for routing, rate limiting, and request validation' },
  { name: 'loan-management-system', desc: 'Loan origination, approval workflows, repayment scheduling, and interest calculation engine' },
  { name: 'kyc-platform', desc: 'Know Your Customer compliance platform with identity verification and document management' },
  { name: 'aml-monitoring-platform', desc: 'Anti-Money Laundering monitoring with transaction screening and suspicious activity reporting' },
  { name: 'enterprise-iam-platform', desc: 'Enterprise Identity and Access Management with user provisioning and role management' },
  { name: 'payment-gateway', desc: 'Payment processing gateway with transaction routing, merchant management, and settlement' },
  { name: 'real-time-payments-platform', desc: 'Real-time payment processing with instant clearing and settlement simulation' },
  { name: 'core-banking-system', desc: 'Core banking backend: accounts, deposits, withdrawals, transfers, and customer management' },
  { name: 'regulatory-reporting-platform', desc: 'Regulatory compliance reporting with automated report generation and audit trails' },
]

const SECURITY_REPOS = [
  { name: 'sentinel-ai-platform', desc: 'AI-driven security monitoring platform with ML-based anomaly detection' },
  { name: 'mini-siem-platform', desc: 'Security Information and Event Management with log aggregation and alerting' },
  { name: 'security-admin-portal', desc: 'Centralized security administration dashboard for policy management' },
  { name: 'incident-response-platform', desc: 'Incident response orchestration with playbook automation and case management' },
  { name: 'vulnerability-management-platform', desc: 'Vulnerability scanning, prioritization, and remediation tracking system' },
  { name: 'security-posture-dashboard', desc: 'Security posture visualization with compliance scoring and trend analysis' },
  { name: 'patch-management-tracker', desc: 'Patch lifecycle management with deployment scheduling and compliance checks' },
  { name: 'endpoint-inventory-system', desc: 'Endpoint discovery, asset tracking, and configuration management database' },
  { name: 'security-asset-register', desc: 'Security asset register with risk classification and ownership tracking' },
  { name: 'threat-modeling-studio', desc: 'Threat modeling tool with STRIDE/LINDDUN frameworks and diagramming' },
  { name: 'ai-log-analyzer', desc: 'AI-powered log analysis with pattern detection and root cause suggestions' },
  { name: 'ai-vulnerability-assistant', desc: 'Vulnerability assessment assistant using AI for remediation guidance' },
  { name: 'ai-security-chatbot', desc: 'Security knowledge base chatbot with incident response recommendations' },
  { name: 'security-project-template', desc: 'Reusable security project template with CI/CD, policies, and documentation' },
]

const SAAS_REPOS = [
  { name: 'kirov-security-api-suite', desc: 'Security SaaS API: password analysis, URL checking, hashing (bcrypt/argon2/SHA-256), email phishing classifier' },
]

const SKILLS = [
  {
    category: 'Languages',
    icon: '⌨',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks',
    icon: '⚡',
    items: ['Spring Boot', 'Spring Security', 'FastAPI', 'React', 'Node.js'],
  },
  {
    category: 'Databases',
    icon: '🗄',
    items: ['PostgreSQL', 'MySQL', 'H2', 'Redis'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🔧',
    items: ['Docker', 'Git', 'Maven', 'Kafka', 'GitHub Actions', 'Vercel'],
  },
  {
    category: 'Architecture',
    icon: '🏗',
    items: ['Microservices', 'REST APIs', 'Event-Driven', 'API Gateway', 'JWT/RBAC', 'ACID'],
  },
  {
    category: 'Security',
    icon: '🔒',
    items: ['BCrypt', 'JWT', 'OAuth2', 'CSP Headers', 'Input Validation', 'Audit Logging'],
  },
]

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">Kirov <span>Dynamics</span></a>
        <ul className="nav-links">
          <li><a href="#featured">Featured</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#store">Store</a></li>
          <li><a href="#cv">CV</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for backend engineering opportunities
        </div>
        <h1>
          Koketso Raphasha
          <span className="gradient-text">Java Backend Engineer</span>
        </h1>
        <p>
          I build distributed backend systems that simulate real-world banking infrastructure.
          Focused on fintech, microservices architecture, secure authentication, and event-driven design.
        </p>
        <div className="hero-actions">
          <a href="#featured" className="btn btn-primary">View Featured Project</a>
          <a href="#projects" className="btn btn-outline">All Projects</a>
        </div>
          <div className="hero-stats">
          <div>
            <div className="hero-stat-value gradient-text">50+</div>
            <div className="hero-stat-label">Public Repositories</div>
          </div>
          <div>
            <div className="hero-stat-value gradient-text">14</div>
            <div className="hero-stat-label">Java Banking Systems</div>
          </div>
          <div>
            <div className="hero-stat-value gradient-text">8</div>
            <div className="hero-stat-label">SmartBank Microservices</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SmartBankSection() {
  return (
    <section className="featured" id="featured">
      <div className="container">
        <div className="section-label">// Featured Project</div>
        <h2 className="section-title">SmartBank Enterprise Platform</h2>
        <p className="section-desc">
          A distributed fintech backend system simulating real-world banking architecture
          with microservices, event-driven communication, and enterprise security patterns.
        </p>
        <div className="featured-card">
          <div className="featured-header">
            <div>
              <h3 className="featured-name">smartbank-enterprise-platform</h3>
              <p className="featured-tagline">Spring Boot · Kafka · PostgreSQL · Docker · JWT</p>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <a href="https://github.com/Raphasha27/smartbank-enterprise-platform" className="btn btn-outline" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              <a href="https://render.com/deploy?repo=https://github.com/Raphasha27/smartbank-enterprise-platform" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Deploy to Render</a>
            </div>
          </div>
          <div className="featured-tech">
            {['Java 21', 'Spring Boot 3.4', 'JWT/BCrypt', 'Kafka', 'PostgreSQL', 'Docker Swarm', 'Maven'].map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
          <div className="featured-diagram">
            <div className="arch-diagram">
              <div className="arch-layer">
                <div className="arch-box arch-client">🌐 Client</div>
                <div className="arch-arrow">↓ HTTPS</div>
              </div>
              <div className="arch-layer">
                <div className="arch-box arch-gateway">API Gateway :8080</div>
                <div className="arch-row">
                  <span className="arch-label">JWT validation, routing, rate limiting</span>
                </div>
                <div className="arch-arrow">↓ ↓ ↓ ↓ ↓ ↓</div>
              </div>
              <div className="arch-layer arch-services">
                <div className="arch-box arch-auth">Auth :8081</div>
                <div className="arch-box arch-acc">Account :8082</div>
                <div className="arch-box arch-tx">Transact :8083</div>
                <div className="arch-box arch-loan">Loan :8084</div>
                <div className="arch-box arch-audit">Audit :8085</div>
                <div className="arch-box arch-notif">Notify :8086</div>
                <div className="arch-box arch-ledger">Ledger :8087</div>
              </div>
              <div className="arch-arrow">↓ ↓ ↓ ↓ ↓ ↓ ↓</div>
              <div className="arch-layer arch-dbs">
                <span className="arch-db">PostgreSQL (×7)</span>
              </div>
              <div className="arch-divider">━━━━━ Kafka Event Bus ━━━━━</div>
              <div className="arch-layer arch-kafka">
                <span className="arch-kafka-item">Audit Consumer</span>
                <span className="arch-kafka-item">Fraud Detector</span>
                <span className="arch-kafka-item">Ledger Journal</span>
                <span className="arch-kafka-item">Notification</span>
                <span className="arch-kafka-item">Reconciler</span>
              </div>
              <div className="arch-badge-row">
                <span className="arch-badge">✅ Saga Pattern</span>
                <span className="arch-badge">✅ Optimistic Locking</span>
                <span className="arch-badge">✅ Idempotency Keys</span>
                <span className="arch-badge">✅ OpenTelemetry</span>
              </div>
            </div>
          </div>
          <div className="featured-details">
            <div className="featured-detail">
              <h4>Architecture</h4>
              <p>8 microservices with API Gateway pattern, each with dedicated PostgreSQL database, event bus</p>
            </div>
            <div className="featured-detail">
              <h4>Security</h4>
              <p>JWT authentication with BCrypt hashing, RBAC, Spring Security filter chain</p>
            </div>
            <div className="featured-detail">
              <h4>Consistency</h4>
              <p>Saga pattern with Kafka reconciler, optimistic locking via @Version, idempotency keys for safe retries</p>
            </div>
            <div className="featured-detail">
              <h4>Observability</h4>
              <p>OpenTelemetry tracing across all services, Zipkin export, Spring Boot Actuator health checks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RepoGrid({ repos, label }) {
  return (
    <div>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: 'var(--text-secondary)' }}>{label}</h3>
      <div className="repo-grid">
        {repos.map(r => (
          <a key={r.name} href={`https://github.com/Raphasha27/${r.name}`} target="_blank" rel="noopener noreferrer" className="repo-card">
            <div className="repo-card-name">
              {r.name}
              {r.tag && <span style={{ fontSize: 10, padding: '2px 8px', background: 'var(--gradient)', color: '#0b1120', borderRadius: 4, fontWeight: 700, marginLeft: 8 }}>{r.tag}</span>}
            </div>
            <div className="repo-card-desc">{r.desc}</div>
            <div className="repo-card-tech">
              {r.name.includes('enterprise') ? ['Java', 'Spring Boot', 'Kafka', 'Docker'].map(t => <span key={t} className="repo-card-tag">{t}</span>)
                : r.name.includes('security-api') ? ['Python', 'FastAPI', 'Docker'].map(t => <span key={t} className="repo-card-tag">{t}</span>)
                : ['Java', 'Spring Boot'].map(t => <span key={t} className="repo-card-tag">{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

const CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'java', label: 'Java Banking' },
  { key: 'security', label: 'Cybersecurity' },
  { key: 'saas', label: 'Security SaaS' },
]

function Projects() {
  const [active, setActive] = useState('all')

  const showAll = active === 'all'

  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">// Repositories</div>
        <h2 className="section-title">All Projects</h2>
        <p className="section-desc">
          30+ professionally structured repositories with git history, CI/CD, security policies, and documentation.
        </p>
        <div className="category-tabs">
          {CATEGORIES.map(c => (
            <button key={c.key} className={`category-tab ${active === c.key ? 'active' : ''}`} onClick={() => setActive(c.key)}>
              {c.label}
            </button>
          ))}
        </div>
        {(showAll || active === 'java') && (
          <div style={{ marginBottom: 40 }}>
            <RepoGrid repos={JAVA_BANKING} label="Java Banking Systems (14 repos)" />
          </div>
        )}
        {(showAll || active === 'security') && (
          <div style={{ marginBottom: 40 }}>
            <RepoGrid repos={SECURITY_REPOS} label="Cybersecurity Defense Platforms (14 repos)" />
          </div>
        )}
        {(showAll || active === 'saas') && (
          <div>
            <RepoGrid repos={SAAS_REPOS} label="Security SaaS (1 repo)" />
          </div>
        )}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-label">// Skills</div>
        <h2 className="section-title">Tech Stack & Expertise</h2>
        <p className="section-desc">
          Backend engineering focused on Java ecosystem, fintech systems, and distributed architecture.
        </p>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div key={s.category} className="skill-category">
              <h3><span className="skill-category-icon">{s.icon}</span> {s.category}</h3>
              <div className="skill-items">
                {s.items.map(item => (
                  <span key={item} className="skill-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const STORE_PRODUCTS = [
  {
    id: 'smartbank',
    name: 'SmartBank Enterprise Platform',
    category: 'Full System',
    price: 'R 1,499',
    desc: '8-microservice banking system with Kafka, PostgreSQL, JWT auth, Saga pattern, and full Docker Swarm deployment. Production-grade fintech template.',
    tags: ['Java 21', 'Spring Boot 3.4', 'Kafka', 'Docker', 'PostgreSQL'],
    demo: 'https://portfolio-iota-eight-90.vercel.app/#featured',
    repo: 'https://github.com/Raphasha27/smartbank-enterprise-platform',
    badge: '⭐ FLAGSHIP',
    badgeColor: '#F59E0B',
  },
  {
    id: 'security-api',
    name: 'Kirov Security API Suite',
    category: 'SaaS API',
    price: 'R 799',
    desc: 'Production FastAPI security SaaS: bcrypt/argon2/SHA-256 hashing, URL phishing classifier, password entropy analyzer. Deployable in minutes.',
    tags: ['Python', 'FastAPI', 'Docker', 'JWT'],
    demo: 'https://github.com/Raphasha27/kirov-security-api-suite',
    repo: 'https://github.com/Raphasha27/kirov-security-api-suite',
    badge: '🔐 API',
    badgeColor: '#8B5CF6',
  },
  {
    id: 'sentinel-ai',
    name: 'Sentinel AI Security Platform',
    category: 'Security Dashboard',
    price: 'R 999',
    desc: 'AI-driven SIEM with ML anomaly detection, log aggregation, real-time alerting, and incident response playbooks. Full admin portal included.',
    tags: ['Python', 'React', 'PostgreSQL', 'Docker'],
    demo: 'https://github.com/Raphasha27/sentinel-ai-platform',
    repo: 'https://github.com/Raphasha27/sentinel-ai-platform',
    badge: '🛡️ SOC',
    badgeColor: '#22C55E',
  },
  {
    id: 'fraud-detection',
    name: 'Real-Time Fraud Detection Engine',
    category: 'Fintech Module',
    price: 'R 599',
    desc: 'Plug-in fraud detection using velocity checks, threshold rules, and device fingerprinting. Spring Boot module ready to integrate into any banking API.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'Redis'],
    demo: 'https://github.com/Raphasha27/fraud-detection-system',
    repo: 'https://github.com/Raphasha27/fraud-detection-system',
    badge: '⚡ Fintech',
    badgeColor: '#0EA5E9',
  },
  {
    id: 'iam-platform',
    name: 'Enterprise IAM Platform',
    category: 'Auth System',
    price: 'R 699',
    desc: 'Identity and Access Management: user provisioning, role hierarchy, OAuth2, RBAC, Spring Security filter chain. Drop-in auth for any enterprise app.',
    tags: ['Java', 'Spring Security', 'OAuth2', 'JWT'],
    demo: 'https://github.com/Raphasha27/enterprise-iam-platform',
    repo: 'https://github.com/Raphasha27/enterprise-iam-platform',
    badge: '🔑 Auth',
    badgeColor: '#F59E0B',
  },
  {
    id: 'kyc-aml',
    name: 'KYC + AML Compliance Bundle',
    category: 'Compliance Suite',
    price: 'R 899',
    desc: 'Combined KYC identity verification and AML transaction screening — document management, risk scoring, and automated SAR report generation.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'PDF'],
    demo: 'https://github.com/Raphasha27/kyc-platform',
    repo: 'https://github.com/Raphasha27/kyc-platform',
    badge: '📋 Compliance',
    badgeColor: '#EC4899',
  },
]

function StoreCard({ product }) {
  const [showContact, setShowContact] = useState(false)
  return (
    <div className="store-card">
      <div className="store-card-header">
        <span className="store-badge" style={{ background: product.badgeColor + '22', color: product.badgeColor, border: `1px solid ${product.badgeColor}44` }}>{product.badge}</span>
        <span className="store-category">{product.category}</span>
      </div>
      <h3 className="store-card-name">{product.name}</h3>
      <p className="store-card-desc">{product.desc}</p>
      <div className="store-card-tags">
        {product.tags.map(t => <span key={t} className="repo-card-tag">{t}</span>)}
      </div>
      <div className="store-price">{product.price}</div>
      <div className="store-actions">
        <a href={product.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, textAlign: 'center', fontSize: 13 }}>🔍 Live Demo</a>
        <button
          className="btn btn-primary"
          style={{ flex: 1, fontSize: 13 }}
          onClick={() => setShowContact(!showContact)}
        >🛒 Get Source</button>
      </div>
      {showContact && (
        <div className="store-contact-box">
          <p>To purchase, reach out directly:</p>
          <a href={`mailto:koketso@kirovdynamics.com?subject=Purchase: ${product.name}&body=Hi Koketso, I'd like to purchase ${product.name} (${product.price}).`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center', marginBottom: 8, fontSize: 13 }}>✉ Email Koketso</a>
          <a href="https://ko-fi.com/raphasha27" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', textAlign: 'center', fontSize: 13 }}>☕ Ko-fi Payment</a>
        </div>
      )}
    </div>
  )
}

function Store() {
  return (
    <section id="store" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-label">// Digital Store</div>
        <h2 className="section-title">Professional Dev Templates</h2>
        <p className="section-desc">
          Production-grade starter kits built from real fintech systems. Each includes full source code,
          README setup guide, Docker config, and GitHub Actions CI. Priced in ZAR.
        </p>
        <div className="store-grid">
          {STORE_PRODUCTS.map(p => <StoreCard key={p.id} product={p} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40, padding: '24px', background: 'var(--bg-primary)', borderRadius: 12, border: '1px solid var(--border)' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 16, fontSize: 15 }}>
            💬 Need a custom enterprise system or want to bundle multiple products?
          </p>
          <a href="#contact" className="btn btn-primary">Request Custom Quote →</a>
        </div>
      </div>
    </section>
  )
}

function CV() {
  return (
    <section className="cv-section" id="cv">
      <div className="container">
        <div className="section-label">// Resume</div>
        <h2 className="section-title">Curriculum Vitae</h2>
        <div className="cv-card">
          <h3>Koketso Raphasha</h3>
          <p>
            Java Backend Developer specializing in fintech systems and distributed architectures.
            Built SmartBank Enterprise Platform — a banking simulation system with microservices,
            event-driven processing, fraud detection, and secure authentication.
            <br /><br />
            <strong>Key competencies:</strong> Java, Spring Boot, Microservices, REST APIs,
            PostgreSQL, Kafka, Docker, JWT/BCrypt, System Design.
          </p>
          <div className="cv-download">
            <a href="/cv.md" className="btn btn-primary" download>Download CV (Markdown) →</a>
            <a href="/job-plan.md" className="btn btn-outline" download>Job Plan</a>
            <a href="/outreach-scripts.md" className="btn btn-outline" download>Outreach Scripts</a>
            <a href="https://github.com/Raphasha27" className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">// Contact</div>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-desc">
          Open to backend engineering opportunities in fintech, banking, and enterprise systems.
        </p>
        <div className="contact-links">
          <a href="https://github.com/Raphasha27" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">⌨</span> GitHub /Raphasha27
          </a>
          <a href="https://za.linkedin.com/in/koketso-raphasha-517954387" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">🔗</span> LinkedIn
          </a>
          <a href="mailto:koketso@kirovdynamics.com" className="contact-link">
            <span className="contact-link-icon">✉</span> koketso@kirovdynamics.com
          </a>
          <a href='https://gitpay.app/Raphasha27' className='contact-link' target='_blank' rel='noopener noreferrer'>
            <span className='contact-link-icon'>💳</span> GitPay /Support
          </a>
          <a href="https://bitbucket.org/raphasha27" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">🔵</span> Bitbucket /raphasha27
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          <span className="footer-brand">Kirov Dynamics Technology</span> &middot;
          Built with Java, Spring Boot, and a lot of caffeine &middot;
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SmartBankSection />
        <Projects />
        <Skills />
        <Store />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
