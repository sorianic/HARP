# Build 003 — Evidence-Based Readiness Engine

## Completed
- evidence ledger with dated competency demonstrations
- configurable competency proficiency intervals
- weighted performance component
- recency component and time-based evidence decay
- evidence-coverage component
- critical-error penalty
- competency criticality adjustment
- readiness status thresholds
- explainable "Why this score?" view
- competency-specific training recommendations
- scenario completion writes new evidence and immediately recalculates readiness
- model configuration separated into `data/readiness_model.json`
- fictional seed evidence in `data/evidence_ledger.json`

## Prototype formula
Readiness is intentionally transparent:

`performance × 0.55 + recency × 0.30 + coverage × 0.15 − critical error penalties`

For stale evidence, criticality can add a small additional discount.

This is a portfolio/research model, not a validated safety metric. All thresholds and weights are illustrative and configurable.

## Key design decision
HARP does not claim that skill literally "decays" to a precise percentage. It measures the strength and recency of available evidence that a competency can currently be demonstrated. This makes the readiness concept more defensible.

## Next — Build 004
Qualification & Organizational Readiness:
- qualification matrix
- operator roster
- team heatmap
- organizational readiness roll-up
- staffing/coverage signal
- requalification queue
- targeted training block recommendations
