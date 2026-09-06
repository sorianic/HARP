# HARP — Human-Autonomy Readiness Protocol

## Release Status

**v0.1 Portfolio Release — feature scope frozen.**

> **Autonomy doesn't eliminate humans. It changes where humans enter the system. HARP measures whether they're ready when that moment arrives.**

HARP is an independently developed operational architecture prototype exploring a human-readiness layer for safety-critical autonomous systems and Physical AI.

---

## The 60-Second Version

Autonomous systems can reduce how often humans are needed without eliminating the moments when human judgment matters.

Traditional training systems are good at answering questions like:

**Did this person complete training? Are they qualified?**

HARP explores the next question:

**What current evidence do we have that this person can still demonstrate the competencies required when human support is needed?**

The prototype demonstrates a possible operational chain:

**Scenario performance → competency evidence → individual readiness → team coverage → operational readiness signal**

---

## Live Prototype

### [Launch HARP →](https://sorianic.github.io/HARP/)

Experience the HARP workflow from operator scenario performance through organizational readiness.

1. Enter the **Operations Center** and work a Remote Assistance scenario.
2. Receive deterministic after-action feedback and generate competency evidence.
3. See how that evidence affects individual readiness.
4. Open **Organizational Readiness** to see how individual competency evidence translates into team-level coverage.

> **HARP v0.1 uses entirely fictional and synthetic operational data.**

---

## The Core Idea

### Qualification ≠ Readiness

An operator can remain formally qualified while the evidence supporting a rare or safety-critical competency becomes stale.

HARP keeps those concepts separate.

**Qualification** answers whether established requirements were completed.

**Readiness** asks how strong and recent the available evidence is that required competencies can currently be demonstrated.

HARP does **not** claim that a person's actual skill can be reduced to a precise percentage.

The readiness score in this prototype represents the **strength and recency of available evidence of demonstrated proficiency**.

---

## How HARP Works

HARP follows a continuous operational readiness loop:

**Train → Demonstrate → Qualify → Operate → Measure → Reinforce → Requalify**

At the prototype level:

```text
Scenario
   ↓
Operator Decision
   ↓
Deterministic Evaluation
   ↓
Competency Evidence
   ↓
Readiness Engine
   ↓
Individual Readiness
   ↓
Organizational Coverage
   ↓
Training / Reinforcement / Requalification
```

The simulator is therefore not the product by itself.

It is one mechanism for creating structured evidence that can feed a broader readiness-management system.

---

## v0.1 Capabilities

- 10 synthetic Remote Assistance scenarios
- 8 competency areas
- deterministic decision trees and critical-error paths
- scenario-based after-action feedback
- competency evidence ledger
- performance, recency, and coverage-based readiness
- explainable readiness calculations
- qualification/readiness separation
- synthetic 12-person operator roster
- team competency heatmap
- shift-level competency coverage
- requalification and action signals
- targeted training recommendations
- organizational Mission Readiness concept

---

## Competency Model

HARP v0.1 evaluates eight competency areas:

| ID | Competency |
| --- | --- |
| HARP-01 | System Fundamentals |
| HARP-02 | Situational Awareness |
| HARP-03 | Remote Assistance |
| HARP-04 | Escalation |
| HARP-05 | Emergency Response |
| HARP-06 | Communication |
| HARP-07 | Incident Documentation |
| HARP-08 | Human Factors |

The model is designed to demonstrate how individual scenario performance could create evidence across multiple operational competencies.

---

## Remote Assistance Scenario Set

HARP v0.1 uses a fictional Autonomous Operations Center and ten synthetic Remote Assistance scenarios:

| Scenario | Event |
| --- | --- |
| RA-001 | Ambiguous Construction Flagger |
| RA-002 | Emergency Vehicle Approach |
| RA-003 | Sensor Obstruction |
| RA-004 | Passenger Medical Event |
| RA-005 | Network Degradation |
| RA-006 | Conflicting Police Direction |
| RA-007 | Blocked Roadway |
| RA-008 | Post-Collision Response |
| RA-009 | Vulnerable Road User |
| RA-010 | Incomplete Information |

RA-010 intentionally tests whether an operator recognizes that **insufficient information can itself be an operational condition requiring restraint or escalation**.

---

## Evidence-Based Readiness

HARP treats demonstrated competency events as evidence.

The prototype Readiness Engine considers:

- demonstrated performance
- recency of evidence
- competency coverage
- scenario difficulty
- critical errors
- remediation
- repeated demonstrations

Conceptually:

**Readiness Evidence = Performance × Recency × Coverage × Criticality Adjustment**

The exact formulas, thresholds, weights, and proficiency intervals used in v0.1 are illustrative.

They are **not validated human-performance or safety metrics**.

---

## Individual Readiness

HARP maintains the distinction between:

**Qualified**

and

**Ready based on current evidence**

An operator might still hold a formal qualification while HARP identifies that evidence supporting a particular competency is becoming old or insufficient.

For example:

```text
Operator: Qualified

Situational Awareness      READY
Remote Assistance          READY
Communication              READY
Emergency Response         WATCH
```

The `WATCH` condition does not mean the operator has forgotten the competency.

It means the organization has weaker or older evidence supporting current demonstrated proficiency in that area.

---

## Organizational Readiness

Individual qualification records do not necessarily answer whether a team has the right competency coverage for an operation.

HARP therefore rolls individual evidence into an organizational view.

The prototype explores questions such as:

- Do we have enough qualified operators?
- Do we have sufficient Emergency Response readiness?
- Do we have sufficient Escalation competency coverage?
- Which competencies are becoming stale across the team?
- Who should receive reinforcement or requalification?
- What should the next training block prioritize?

This creates an important distinction:

**Headcount ≠ Capability Coverage**

A shift can contain enough formally qualified people while still having weak current evidence in a critical competency.

---

## Architecture

```text
                 HUMAN-AUTONOMY READINESS PROTOCOL
                                |
        +-----------------------+-----------------------+
        |                       |                       |
  SCENARIO ENGINE        READINESS ENGINE        QUALIFICATION
        |                       |                       |
  Decision Trees          Evidence Ledger          Lifecycle
  Critical Errors         Performance              Status
  AAR Feedback            Recency                  Requirements
        |                 Coverage
        +-----------+-----------+-----------------------+
                    |
              OPERATOR PROFILE
                    |
          +---------+---------+
          |                   |
   INDIVIDUAL READINESS   ORGANIZATIONAL READINESS
                              |
                        Competency Heatmap
                        Coverage Requirements
                        Requalification Queue
                        Training Priorities
                        Mission Readiness
```

More detail is available in [`docs/architecture.md`](docs/architecture.md).

---

## Repository Map

```text
HARP/
├── .github/
│   └── workflows/       GitHub Pages deployment
├── data/                Synthetic readiness and operator data
├── docs/                Architecture, concept paper, and documentation
├── organizational/      Organizational readiness prototype source
├── prototype/           Operator simulator source
├── scenarios/           Structured Remote Assistance scenarios
├── site/                Published GitHub Pages experience
│
├── DISCLAIMER.md
├── INDEPENDENCE.md
├── LICENSE
├── README.md
└── RELEASE_NOTES_v0.1.md
```

Development history, validation records, and release-preparation materials are retained under `docs/development/`.

---

## Why This Project Exists

HARP explores how principles from safety-critical qualification, proficiency management, operational readiness, structured training, abnormal-event response, and human oversight might apply as autonomous systems become increasingly capable.

The central premise is that increasing autonomy does not necessarily remove humans from the safety architecture.

It can change **where, when, and why human judgment is required**.

That creates a readiness problem worth exploring:

> **The less frequently humans are required to intervene, the more important it becomes to know they are ready when intervention is necessary.**

---

## Potential Applications

HARP v0.1 focuses on autonomous-vehicle Remote Assistance, but the architecture is intentionally broader.

Potential future domains could include:

- autonomous trucking
- warehouse robotics
- delivery robotics
- industrial robotics
- humanoid systems
- unmanned aircraft
- autonomous maritime systems
- advanced manufacturing
- other Physical AI environments

The underlying question remains the same:

**How does an organization maintain evidence that the humans supporting increasingly autonomous systems are ready for the moments when human judgment still matters?**

---

## Design Principles

HARP is built around several principles:

**Human-centered**  
Technology should support operational decision-making rather than obscure it.

**Evidence-based**  
Readiness should be connected to demonstrated performance rather than training completion alone.

**Explainable**  
Operators and leaders should be able to understand why a readiness signal changed.

**Deterministic where safety matters**  
The v0.1 scenario engine uses predetermined decision logic rather than allowing generative AI to independently determine whether a safety-critical response is correct.

**Operationally focused**  
The system is designed around decisions, competencies, readiness, and organizational capability rather than software features for their own sake.

---

## What HARP Is Not

HARP is **not**:

- autonomous-driving software
- a remote-driving platform
- a vehicle-control system
- a production learning-management system
- a regulatory framework
- a certification standard
- a validated human-performance model
- a validated safety model
- a replacement for an ADS safety case
- a representation of any company's internal procedures

HARP is an **operational architecture and portfolio prototype**.

---

## Public-Release Boundary

HARP is independently developed from general principles of safety-critical operations, training, qualification, proficiency, readiness management, and human oversight.

It does not contain or represent proprietary procedures, operational data, software, systems, controlled information, confidential information, or intellectual property belonging to any current or former employer, government organization, customer, or technology company.

All people, fleets, scores, thresholds, staffing requirements, scenarios, procedures, and operational data shown in the prototype are fictional or synthetic.

HARP is not sponsored by, endorsed by, affiliated with, or developed on behalf of any employer, government organization, autonomous-vehicle company, robotics company, or regulatory body.

See:

- [`INDEPENDENCE.md`](INDEPENDENCE.md)
- [`DISCLAIMER.md`](DISCLAIMER.md)
- [`LICENSE`](LICENSE)

---

## Methodology Boundary

The readiness equation, proficiency intervals, competency weights, thresholds, staffing requirements, scenario logic, and synthetic data used by HARP v0.1 are illustrative.

HARP does not claim that a person's true skill or operational capability can be represented by an exact percentage.

The prototype's readiness score represents the **strength and recency of available evidence of demonstrated proficiency**.

No HARP output should be used for real-world safety, qualification, staffing, certification, or operational decision-making.

---

## Documentation

Additional project documentation:

- [`HARP Concept Paper`](docs/HARP_CONCEPT_PAPER.md)
- [`System Architecture`](docs/architecture.md)
- [`60-Second Recruiter Walkthrough`](docs/RECRUITER_WALKTHROUGH.md)
- [`Release Notes`](RELEASE_NOTES_v0.1.md)

---

## Project Origin

HARP grew from a simple operational question:

**How do we know someone is ready, rather than simply qualified?**

The project applies transferable concepts from safety-critical operations, qualification systems, proficiency management, training, readiness reporting, and structured decision-making to the emerging human layer surrounding autonomous systems.

The goal is not to predict exactly how any particular autonomous-vehicle or robotics company should operate.

The goal is to demonstrate a framework for thinking about the problem.

---

## North Star

> **The less frequently humans are required to intervene, the more important it becomes to know they are ready when intervention is necessary.**

---

**HARP v0.1 — Human-Autonomy Readiness Protocol**

[**Launch the Live Prototype →**](https://sorianic.github.io/HARP/)
