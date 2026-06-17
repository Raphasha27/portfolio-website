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
            <div className="hero-stat-value gradient-text">30+</div>
            <div className="hero-stat-label">Repositories</div>
          </div>
          <div>
            <div className="hero-stat-value gradient-text">14</div>
            <div className="hero-stat-label">Java Banking Systems</div>
          </div>
          <div>
            <div className="hero-stat-value gradient-text">7</div>
            <div className="hero-stat-label">Microservices (SmartBank)</div>
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
            <a href="https://github.com/Raphasha27/smartbank-enterprise-platform" className="btn btn-outline" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
          <div className="featured-tech">
            {['Java 21', 'Spring Boot 3.4', 'JWT/BCrypt', 'Kafka', 'PostgreSQL', 'Docker Compose', 'Maven'].map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
          <div className="featured-diagram">
            <pre>{`
  Client
    │
    ▼
  ┌─────────────────────────────────────────────────────────┐
  │                   API Gateway (:8080)                   │
  └────┬──────────┬──────────┬──────────┬──────────┬───────┘
       │          │          │          │          │
       ▼          ▼          ▼          ▼          ▼
  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
  │ Auth   │ │Account │ │Transact│ │ Loan   │ │ Audit  │
  │ (:8081)│ │(:8082) │ │(:8083) │ │(:8084) │ │(:8085) │
  └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘
      │          │          │          │          │
      ▼          ▼          ▼          ▼          ▼
  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
  │Postgres│ │Postgres│ │Postgres│ │Postgres│ │Postgres│
  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘

  Event Bus (Kafka) — Transaction → Audit → Notification
            `}</pre>
          </div>
          <div className="featured-details">
            <div className="featured-detail">
              <h4>Architecture</h4>
              <p>7 microservices with API Gateway pattern, each with dedicated PostgreSQL database</p>
            </div>
            <div className="featured-detail">
              <h4>Security</h4>
              <p>JWT-based authentication with BCrypt password hashing, JwtFilter for endpoint protection, RBAC</p>
            </div>
            <div className="featured-detail">
              <h4>Events</h4>
              <p>Kafka-ready event bus for async transaction processing, audit logging, and notification dispatch</p>
            </div>
            <div className="featured-detail">
              <h4>Data</h4>
              <p>ACID transactions, per-service database isolation, idempotency keys for safe retries</p>
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
            <a href="#" className="btn btn-primary">Download CV (PDF) →</a>
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
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
