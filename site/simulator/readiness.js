
const READINESS_MODEL = {"version": "0.1", "as_of": "2026-09-05", "description": "Prototype evidence-based readiness model. Scores are illustrative, configurable, and not validated for production safety decisions.", "competencies": {"System Fundamentals": {"criticality": 0.85, "target_interval_days": 120}, "Situational Awareness": {"criticality": 1.0, "target_interval_days": 60}, "Remote Assistance": {"criticality": 1.0, "target_interval_days": 60}, "Escalation": {"criticality": 1.05, "target_interval_days": 75}, "Emergency Response": {"criticality": 1.2, "target_interval_days": 60}, "Communication": {"criticality": 0.9, "target_interval_days": 90}, "Incident Documentation": {"criticality": 0.8, "target_interval_days": 120}, "Human Factors": {"criticality": 1.05, "target_interval_days": 75}}, "weights": {"performance": 0.55, "recency": 0.3, "coverage": 0.15}, "critical_error_penalty": 8, "status_thresholds": {"ready": 85, "watch": 70, "requalification_recommended": 55}};
let evidenceLedger = [{"date": "2026-09-03", "scenario": "RA-001", "competency": "Situational Awareness", "score": 94, "difficulty": 1.0, "critical_error": false}, {"date": "2026-09-03", "scenario": "RA-001", "competency": "Remote Assistance", "score": 92, "difficulty": 1.0, "critical_error": false}, {"date": "2026-08-28", "scenario": "RA-006", "competency": "Escalation", "score": 91, "difficulty": 1.1, "critical_error": false}, {"date": "2026-08-28", "scenario": "RA-006", "competency": "Situational Awareness", "score": 95, "difficulty": 1.1, "critical_error": false}, {"date": "2026-08-24", "scenario": "RA-010", "competency": "Human Factors", "score": 90, "difficulty": 1.2, "critical_error": false}, {"date": "2026-08-20", "scenario": "RA-005", "competency": "System Fundamentals", "score": 93, "difficulty": 1.1, "critical_error": false}, {"date": "2026-08-19", "scenario": "RA-007", "competency": "Remote Assistance", "score": 90, "difficulty": 0.9, "critical_error": false}, {"date": "2026-08-15", "scenario": "RA-008", "competency": "Incident Documentation", "score": 88, "difficulty": 1.2, "critical_error": false}, {"date": "2026-08-10", "scenario": "RA-004", "competency": "Communication", "score": 94, "difficulty": 1.2, "critical_error": false}, {"date": "2026-05-31", "scenario": "RA-004", "competency": "Emergency Response", "score": 91, "difficulty": 1.2, "critical_error": false}, {"date": "2026-05-20", "scenario": "RA-008", "competency": "Emergency Response", "score": 88, "difficulty": 1.2, "critical_error": false}];
const AS_OF = new Date(READINESS_MODEL.as_of+"T12:00:00");

function daysSince(dateStr){
  return Math.max(0, Math.round((AS_OF-new Date(dateStr+"T12:00:00"))/86400000));
}
function competencyEvidence(name){return evidenceLedger.filter(e=>e.competency===name).sort((a,b)=>b.date.localeCompare(a.date))}
function recencyScore(days,target){
  // 100 through target interval, then explainable linear decay to a 35-point floor by 3x target.
  if(days<=target) return 100;
  const over=(days-target)/(target*2);
  return Math.max(35,100-(over*65));
}
function coverageScore(ev){
  // Prototype confidence rises with repeated evidence; 3 demonstrations = full coverage.
  return Math.min(100, 40 + ev.length*20);
}
function performanceScore(ev){
  if(!ev.length) return 0;
  let num=0,den=0;
  ev.slice(0,5).forEach(e=>{const w=e.difficulty||1;num+=e.score*w;den+=w});
  return num/den;
}
function calculateReadiness(name){
  const cfg=READINESS_MODEL.competencies[name], ev=competencyEvidence(name);
  if(!ev.length) return {name,score:0,status:"NO EVIDENCE",last:null,days:null,performance:0,recency:0,coverage:0,errors:0};
  const days=daysSince(ev[0].date), perf=performanceScore(ev), rec=recencyScore(days,cfg.target_interval_days), cov=coverageScore(ev);
  const errors=ev.slice(0,5).filter(e=>e.critical_error).length;
  const w=READINESS_MODEL.weights;
  let raw=perf*w.performance+rec*w.recency+cov*w.coverage-errors*READINESS_MODEL.critical_error_penalty;
  // Criticality makes stale evidence matter slightly more; it does not inflate good performance.
  if(rec<100 && cfg.criticality>1) raw-=((100-rec)*(cfg.criticality-1)*0.25);
  const score=Math.max(0,Math.min(100,Math.round(raw)));
  const t=READINESS_MODEL.status_thresholds;
  const status=score>=t.ready?"READY":score>=t.watch?"WATCH":score>=t.requalification_recommended?"REQUALIFICATION RECOMMENDED":"REQUALIFICATION REQUIRED";
  return {name,score,status,last:ev[0].date,days,performance:Math.round(perf),recency:Math.round(rec),coverage:Math.round(cov),errors,target:cfg.target_interval_days,evidence:ev.length};
}
function allReadiness(){return Object.keys(READINESS_MODEL.competencies).map(calculateReadiness)}
function overallReadiness(){let r=allReadiness();return Math.round(r.reduce((a,b)=>a+b.score,0)/r.length)}
function recommendation(r){
  if(!r.last) return "Establish initial qualification evidence.";
  if(r.status==="READY") return "Maintain normal proficiency cycle.";
  const mapping={"Emergency Response":"Complete RA-004 or RA-008.","Escalation":"Complete RA-002, RA-005, RA-006, or RA-010.","Human Factors":"Complete RA-005, RA-009, or RA-010.","Situational Awareness":"Complete RA-001, RA-002, RA-006, RA-009, or RA-010.","Remote Assistance":"Complete RA-001, RA-003, RA-006, RA-007, or RA-009."};
  return mapping[r.name]||"Complete a scenario that demonstrates this competency.";
}
function explain(r){
  if(!r.last)return "No current evidence exists for this competency.";
  let reason=`${r.performance}% recent weighted performance; ${r.days} days since last demonstration; ${r.evidence} evidence record${r.evidence===1?"":"s"}.`;
  if(r.days>r.target) reason+=` Evidence is beyond the ${r.target}-day prototype proficiency interval, so recency is discounted.`;
  if(r.errors) reason+=` ${r.errors} recent critical error${r.errors===1?"":"s"} applied a penalty.`;
  return reason;
}
