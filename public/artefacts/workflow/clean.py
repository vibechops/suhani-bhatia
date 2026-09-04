"""Read published NFHS Phase-II totals, check them, write a phone-gap extract.

Beginner workflow. No scraping. Input: artefacts/agency/nfhs_phase2.csv
"""
from pathlib import Path
import csv

src = Path(__file__).resolve().parents[1] / "agency" / "nfhs_phase2.csv"
out = Path(__file__).resolve().parent / "phone_gap.csv"

rows = []
with src.open() as f:
    reader = csv.DictReader(f)
    for row in reader:
        bank = float(row["bank"])
        mobile = float(row["mobile"])
        dec = float(row["dec"])
        assert 0 <= bank <= 100
        assert 0 <= mobile <= 100
        assert 0 <= dec <= 100
        rows.append(
            {
                "code": row["code"],
                "name": row["name"],
                "bank": bank,
                "mobile": mobile,
                "phone_gap": round(bank - mobile, 1),
            }
        )

rows.sort(key=lambda r: r["phone_gap"], reverse=True)
with out.open("w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=rows[0].keys())
    writer.writeheader()
    writer.writerows(rows)

print(f"wrote {out} ({len(rows)} states)")
