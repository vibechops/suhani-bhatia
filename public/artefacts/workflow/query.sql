-- SQLite sketch against nfhs_phase2.csv imported as nfhs_phase2
-- Beginner queries. Percentages are published factsheet totals.

SELECT name, bank, mobile, ROUND(bank - mobile, 1) AS phone_gap
FROM nfhs_phase2
ORDER BY phone_gap DESC;

SELECT
  ROUND(AVG(dec), 1) AS mean_dec,
  ROUND(AVG(bank), 1) AS mean_bank,
  ROUND(AVG(mobile), 1) AS mean_mobile
FROM nfhs_phase2;

SELECT name, bank, dec
FROM nfhs_phase2
WHERE bank >= 85
ORDER BY dec DESC;
