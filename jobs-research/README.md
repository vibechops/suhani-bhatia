# Jobs research

Raw India job postings scraped for Suhani Bhatia's career lanes. About 50 per stream (live first, then closed in the last 12 months). One org can sit in many streams via frontmatter tags.

## Streams

| # | Folder slug | Name |
|---|-------------|------|
| 01 | consulting | Social-sector / development consulting |
| 02 | government | Government and public-sector consulting, fellowships, ministry roles |
| 03 | research-evidence | Research, evidence, MEL |
| 04 | legal-policy | Legal, regulatory and public policy |
| 05 | csr | CSR and corporate foundations |
| 06 | esg | ESG, sustainability, BRSR |
| 07 | gender-rights | Gender, LGBTQ+ and rights implementation |
| 08 | migrant-livelihoods | Migrant labour, urban welfare, livelihoods |
| 09 | un-multilateral | UN and multilateral, India-based |
| 10 | knowledge-comms | Knowledge, communications, development media |
| 11 | education | Education systems and FLN |
| 12 | corporate-regulatory | Corporate public policy, regulatory affairs, government affairs |

## Layout

- `postings/` — one markdown file per JD (frontmatter + raw text)
- `streams/` — indexes built from frontmatter
- `orgs/` — Big 4, UN/multilateral, and org × stream matrix
- `scripts/build_index.py` — regenerates indexes from `postings/`

## Posting frontmatter

```yaml
org: string
title: string
location: string
streams: [consulting, research-evidence, ...]
seniority: eligible-now | where-it-leads
years_required: string
degree: string
status: live | closed
posted: YYYY-MM-DD | null
deadline: YYYY-MM-DD | null
source: URL
scraped: YYYY-MM-DD
```

## Rebuild indexes

```bash
python3 jobs-research/scripts/build_index.py
```

## Counts

Run `build_index.py` after each wave. Counts live in this README under **Scrape report** (filled after indexes run).

## Scrape report

- Total postings: **667**
- Live: **373** · Closed (backfill): **294**
- Big 4 tagged: **42**
- UN / multilateral tagged: **48**

| Stream | Count | Live | Closed | Short of 50? |
|--------|------:|-----:|-------:|:------------|
| 01. Social-sector / development consulting | 164 | 106 | 58 | no |
| 02. Government and public-sector consulting, fellowships, ministry roles | 166 | 110 | 56 | no |
| 03. Research, evidence, MEL | 215 | 153 | 62 | no |
| 04. Legal, regulatory and public policy | 137 | 68 | 69 | no |
| 05. CSR and corporate foundations | 67 | 50 | 17 | no |
| 06. ESG, sustainability, BRSR | 90 | 55 | 35 | no |
| 07. Gender, LGBTQ+ and rights implementation | 128 | 74 | 54 | no |
| 08. Migrant labour, urban welfare, livelihoods | 78 | 25 | 53 | no |
| 09. UN and multilateral, India-based | 62 | 18 | 44 | no |
| 10. Knowledge, communications, development media | 102 | 68 | 34 | no |
| 11. Education systems and FLN | 147 | 120 | 27 | no |
| 12. Corporate public policy, regulatory affairs, government affairs | 59 | 24 | 35 | no |
