# HARP — Human-Autonomy Readiness Protocol

## Release status
**v0.1 Portfolio Release Candidate — feature scope frozen.**

> **Autonomy doesn't eliminate humans. It changes where humans enter the system. HARP measures whether they're ready when that moment arrives.**

HARP is an independently developed operational architecture prototype exploring a human-readiness layer for safety-critical autonomous systems and Physical AI.

## The 60-second version

Autonomous systems can reduce how often humans are needed without eliminating the moments when human judgment matters. HARP asks whether organizations should measure more than training completion and qualification status.

The prototype demonstrates a possible chain:

**Scenario performance → competency evidence → individual readiness → team coverage → operational readiness signal**

### Try it

Start with `site/index.html`.

From there:

1. Enter the **Operations Center** and work a Remote Assistance scenario.
2. See deterministic after-action feedback create new competency evidence.
3. Inspect why an individual readiness score changed.
4. Open **Organizational Readiness** and see how qualified headcount can still contain competency coverage gaps.

## v0.1 capabilities

- 10 synthetic Remote Assistance scenarios
- 8 competency areas
- deterministic decision trees and critical-error paths
- evidence ledger
- performance, recency and coverage-based readiness
- explainable readiness calculations
- qualification/readiness separation
- synthetic 12-person operator roster
- team competency heatmap
- coverage and requalification signals
- targeted training recommendation
- organizational Mission Readiness concept

## Why this project exists

The project transfers principles from high-reliability operational qualification, proficiency, readiness reporting, abnormal-event response, and structured training into an emerging Physical AI problem.

It is an **operations architecture prototype**, not an attempt to build autonomous-driving software.

## Repository map

- `site/` — GitHub Pages-ready unified experience
- `prototype/` — operator simulator source
- `organizational/` — team readiness source
- `scenarios/` — structured RA-001 through RA-010 definitions
- `data/` — fictional evidence, roster and model configuration
- `docs/architecture.md` — system architecture
- `docs/HARP_CONCEPT_PAPER.md` — short concept paper
- `BUILD_00X_NOTES.md` — build history

## Public-release boundary

HARP is independently developed from general principles of safety-critical
operations, training, qualification, proficiency, readiness management, and
human oversight. It does not contain or represent proprietary procedures,
operational data, software, systems, controlled information, confidential
information, or intellectual property belonging to any current or former
employer, government organization, customer, or technology company.

All people, fleets, scores, thresholds, staffing requirements, scenarios, and
procedures in the prototype are fictional or synthetic. HARP is not sponsored
by, endorsed by, affiliated with, or developed on behalf of any employer,
government organization, autonomous-vehicle company, robotics company, or
regulatory body.

See [`INDEPENDENCE.md`](INDEPENDENCE.md), [`DISCLAIMER.md`](DISCLAIMER.md), and
[`LICENSE`](LICENSE) before reuse.

## Methodology boundary

The readiness equation, proficiency intervals, thresholds, staffing rules, scenario logic, and synthetic data are illustrative. HARP does **not** claim that a person's true skill can be reduced to a precise percentage. The prototype score represents the strength and recency of available evidence of demonstrated proficiency.

HARP is not a validated safety model, regulatory standard, vehicle-control system, or representation of any company's internal procedures.

## North Star

> **The less frequently humans are required to intervene, the more important it becomes to know they are ready when intervention is necessary.**
