# HR Screening Prep — Bank Interview Answers

---

## Q1: Tell me about yourself

**Answer (60 seconds):**

> I'm a backend developer focused on Java and Spring Boot, with a strong interest in fintech systems. I recently built SmartBank — a distributed banking backend that simulates real financial infrastructure. It's built with microservices architecture, JWT authentication, Kafka event-driven communication, and Docker deployment.
>
> I designed it to demonstrate how real banking systems handle secure transactions, data consistency, and failure recovery. Beyond the code, I think deeply about system design — how services interact, where failures happen, and how to make distributed systems reliable.
>
> I'm now looking for a junior backend or graduate role where I can contribute to production systems and grow alongside experienced engineers.

---

## Q2: Why this company?

**Answer structure:** Company signal + your fit + SmartBank connection

> [Company Name] is one of South Africa's leading financial institutions with a strong engineering culture. I've followed your work on [mention a specific initiative, e.g., digital banking platform / mobile app / fintech innovation].
>
> My SmartBank project directly aligns with the kind of backend engineering you do — distributed systems, secure transactions, and scalable architecture. I want to work somewhere I can learn production engineering practices and contribute to systems that handle real customer impact.
>
> A graduate/junior role at [Company Name] is exactly where I can apply what I've built and grow into a strong backend engineer.

**Pre-research:** Before every interview, find one specific thing the company did recently (new app feature, acquisition, tech blog post, etc.)

---

## Q3: Tell me about your project (SmartBank)

**Answer (90 seconds):**

> SmartBank is a distributed fintech backend built with Java 21 and Spring Boot 3.4. It has 7 microservices: API Gateway, Auth, Account, Transaction, Fraud Detection, Audit, and Notification — each in its own container with its own PostgreSQL database.
>
> The core flow is a money transfer. The user authenticates via JWT through the API Gateway. The Transaction Service coordinates the saga: it debits the sender's account, credits the receiver's account — each in local ACID transactions — and publishes events to Kafka so Fraud, Audit, and Ledger services can process asynchronously.
>
> For consistency, I use optimistic locking on account balances and idempotency keys to prevent duplicate transfers. If a service crashes mid-transfer, a Kafka-driven reconciler detects the incomplete saga and reverses the debit. No money is ever lost.
>
> The whole system runs with `docker-compose up --build` — designed for cloud-ready deployment with stateless services and environment-based configuration.

---

## Q4: What is your biggest weakness?

**Answer:** Real weakness + what you're doing about it

> I sometimes spend too much time getting the architecture right before writing code. I want the design to be clean from the start, which can slow down initial delivery.
>
> I've been working on this by setting timeboxes for design decisions — I give myself a clear deadline, build a working version first, then iterate. SmartBank itself started as a simpler monolith before I extracted services, which taught me that iteration beats perfection.

---

## Q5: Where do you see yourself in 5 years?

**Answer:**

> In 5 years, I want to be a senior backend engineer — someone who can design and own critical systems, mentor junior developers, and make good architectural decisions under pressure.
>
> In the shorter term, I want to join a strong engineering team, learn production engineering practices, and contribute meaningfully to systems that handle real customer transactions and data.

---

## Q6: Do you have experience with [technology you don't know]?

**Answer:** Don't lie, show adaptability

> I haven't used [technology] in production yet, but I'm confident I can pick it up quickly. I built SmartBank from scratch learning Spring Boot, Kafka, and Docker along the way — I'm comfortable learning new technologies independently. If you give me a week with the docs and a small task, I'll be productive.

---

## Q7: Why should we hire you over a CS graduate?

**Answer:**

> I don't just have theoretical knowledge — I've built a complete distributed backend system. I understand trade-offs: when to use synchronous vs async communication, how to handle distributed failures, and why idempotency matters in financial systems.
>
> A CS graduate might know algorithms and data structures. I know those too, but I also know how to design, build, and deploy a working fintech backend. I can start contributing from day one.

---

## Q8: Do you have any questions for us?

**Always ask 2-3 questions.** Never say "no."

Good options:

> 1. What does the onboarding process look like for junior engineers here?
> 2. What's the tech stack your team works with day to day?
> 3. What's the most important thing a junior engineer can do in their first 90 days?

---

## Delivery Rules

- Answers should take 60-90 seconds max
- Pause briefly between key points
- Keep SmartBank as your anchor example for everything
- If you don't know something, say "I don't know yet, but here's how I'd figure it out"
- Never interrupt — let the interviewer finish every question
