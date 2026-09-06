# HARP Architecture — v0.1

```text
                     HUMAN-AUTONOMY READINESS PROTOCOL
                                   |
        +--------------------------+--------------------------+
        |                          |                          |
  SCENARIO ENGINE            READINESS ENGINE          QUALIFICATION
        |                          |                          |
  deterministic paths       evidence ledger            status / lifecycle
  critical errors           performance                qualified vs ready
  AAR feedback              recency
        |                   coverage
        +-----------+--------------+--------------------------+
                    |
              OPERATOR PROFILE
                    |
          +---------+---------+
          |                   |
   INDIVIDUAL READINESS   ORGANIZATIONAL READINESS
                              |
                    competency heatmap
                    coverage requirements
                    requalification queue
                    training priorities
                    mission-readiness signal
```

## Architectural principle
HARP treats demonstrated competency events as evidence. The prototype converts that evidence into explainable individual readiness signals, then aggregates those signals into fictional organizational coverage decisions.

## Safety boundary
The architecture is illustrative. It is not a validated human-performance model, regulatory framework, or production safety system.
