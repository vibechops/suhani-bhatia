* Women's agency working note
* Reproduces OLS on NFHS-5 Phase-II published factsheet totals
* Run from this folder after placing nfhs_phase2.csv beside the do-file

import delimited "nfhs_phase2.csv", clear
describe
summarize dec bank mobile
corr dec bank
corr dec mobile
corr bank mobile
reg dec bank
reg dec bank mobile
gen phone_gap = bank - mobile
list name phone_gap, sep(0)
