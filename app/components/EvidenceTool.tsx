"use client";

import { useMemo, useState } from "react";

type Row = {
  id: string;
  question: string;
  source: string;
  method: string;
  finding: string;
  confidence: "high" | "medium" | "low";
  implication: string;
};

const seed: Row[] = [
  {
    id: "1",
    question: "Did women’s own-use bank accounts rise faster than household decision-making?",
    source: "IIPS / MoHFW, NFHS-4 and NFHS-5 India reports",
    method: "Published national totals, women 15–49",
    finding: "Accounts 53.0% to 78.6% (+25.6 pp). Three household decisions 84.0% to 88.7% (+4.7 pp).",
    confidence: "high",
    implication: "The two measures moved very differently. Financial inclusion is a weak proxy for agency in scheme monitoring.",
  },
  {
    id: "2",
    question: "Where does the migrant PDS journey break?",
    source: "CLRA, One Nation Unequal Access (Dec 2024), n=1,012",
    method: "Survey funnel",
    finding: "Awareness 71%; attempted claim 51%; served 30%.",
    confidence: "medium",
    implication: "A Mumbai grant should buy the served stage, pending a local diagnostic.",
  },
  {
    id: "3",
    question: "What does the Act require of a state protection cell?",
    source: "Transgender Persons (Protection of Rights) Act 2019; Rules 2020",
    method: "Statutory reading",
    finding: "Rules require a Transgender Protection Cell under the DGP to monitor offences.",
    confidence: "high",
    implication: "Pride Place is the Telangana instantiation. Performance is an empirical question.",
  },
];

export function EvidenceTool() {
  const [rows, setRows] = useState<Row[]>(seed);
  const [draft, setDraft] = useState<Omit<Row, "id">>({
    question: "",
    source: "",
    method: "",
    finding: "",
    confidence: "medium",
    implication: "",
  });

  const csv = useMemo(() => {
    const header = "question,source,method,finding,confidence,implication";
    const body = rows
      .map((r) =>
        [r.question, r.source, r.method, r.finding, r.confidence, r.implication]
          .map((c) => `"${c.replaceAll('"', '""')}"`)
          .join(",")
      )
      .join("\n");
    return `${header}\n${body}`;
  }, [rows]);

  function addRow() {
    if (!draft.question.trim()) return;
    setRows((prev) => [...prev, { ...draft, id: String(Date.now()) }]);
    setDraft({
      question: "",
      source: "",
      method: "",
      finding: "",
      confidence: "medium",
      implication: "",
    });
  }

  function download() {
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "evidence-matrix.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="tool-wrap">
      <table className="data">
        <thead>
          <tr>
            <th>Question</th>
            <th>Source</th>
            <th>Method</th>
            <th>Finding</th>
            <th>Confidence</th>
            <th>Implication</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.question}</td>
              <td>{r.source}</td>
              <td>{r.method}</td>
              <td>{r.finding}</td>
              <td>{r.confidence}</td>
              <td>{r.implication}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label>
          Question
          <input
            value={draft.question}
            onChange={(e) => setDraft({ ...draft, question: e.target.value })}
          />
        </label>
        <label>
          Source
          <input
            value={draft.source}
            onChange={(e) => setDraft({ ...draft, source: e.target.value })}
          />
        </label>
        <label>
          Method
          <input
            value={draft.method}
            onChange={(e) => setDraft({ ...draft, method: e.target.value })}
          />
        </label>
        <label>
          Finding
          <textarea
            value={draft.finding}
            onChange={(e) => setDraft({ ...draft, finding: e.target.value })}
          />
        </label>
        <label>
          Confidence
          <select
            value={draft.confidence}
            onChange={(e) =>
              setDraft({ ...draft, confidence: e.target.value as Row["confidence"] })
            }
          >
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </label>
        <label>
          Implication
          <input
            value={draft.implication}
            onChange={(e) => setDraft({ ...draft, implication: e.target.value })}
          />
        </label>
        <div className="tool-actions">
          <button type="button" onClick={addRow}>
            Add row
          </button>
          <button type="button" onClick={download}>
            Download CSV
          </button>
        </div>
      </div>
      <p className="note">
        Rows live in this browser until you download them. Built with AI-assisted
        coding. The seed rows are from sources cited on this site.
      </p>
    </div>
  );
}
