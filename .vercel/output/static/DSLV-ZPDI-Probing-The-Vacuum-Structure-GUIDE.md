# DSLV-ZPDI field book — Rev 3.6 install and user guide

Phone-ready campaign record for GrapheneOS on a Pixel 9 Pro XL. The handset keeps the book. The SDR, the GPSDO, and the prompt correlator stay on the nodes.

The claim is two upper bounds. The vacuum-structure question motivates the program. It is not a result of §§1–8. Supplements S1 and S2 are withheld from the submission.

- [Rev 3.6 submission packet (PDF)](/rev-3.6-submission.pdf) — mission cover, instrument white paper, and this field book as Appendix A
- Install address: [https://dslv-vac-probe.grok.me](https://dslv-vac-probe.grok.me)
- [Deck](/) · [Walk](/walk) · [Bench](/bench) · [Book](/book) · [Switches](/doctrine)
- Node software: [DynoGator/dslv-zpdi](https://github.com/DynoGator/dslv-zpdi), package `labs.dynogator.dslvzpdi`

A chat preview is a different origin and a different book. Install from the published HTTPS address in a normal Vanadium tab, not Incognito.

## Install

1. Open Vanadium. Allow network for the browser.
2. Open [https://dslv-vac-probe.grok.me](https://dslv-vac-probe.grok.me) and confirm the host.
3. Menu → **Install app**. If the menu says **Add to home screen**, use that.
4. If the shortcut does nothing, press and hold it on the placement sheet and drag it onto the home screen.
5. Location is optional. A device fix is not carrier phase. Deny is allowed; type a surveyed coordinate.
6. Leave JIT off unless a loaded page stays blank, then allow JIT for this origin only.
7. Do not clear site data until you have exported. There is no cloud copy.

## What the book will not do

- Invent a residual, a γ̂, a lag, a coordinate, a calibration, or an anchor id.
- Treat `atan2(Q, I)` alone as the carrier. The observable is NCO phase plus the prompt discriminator residual.
- Treat a per-node single difference as the Chain S detection input. Chain S uses the between-node double difference. The single difference is a diagnostic. The shared IGS clock residual, about 0.74 rad at L1 in equation (3), cancels in that double difference.
- Quote a Chain C bound tighter than the maximum of the co-located non-clock floor, the isolated relative-clock term, and the baseline atmospheric differential.
- Run an Analysis A detection claim with fewer than four nodes. Two or three nodes are Phase 0.
- Fire Switch 2 on a null, or treat a delay-class pass as sufficient. Troposphere, multipath, and clock error are also delay-class.
- Adjudicate switches 4 or 5. They are withdrawn with S1 and S2. Instrument switches are **1, 2, 3, and 6**. Switch 6 keeps its number so labels do not fork.
- Treat an E-field, barometer, or radon note as an estimator input. Those covariates may be logged on Book. They are not detection inputs. Γext(t) is not in the instrument symbol table.
- Let a catalog budget row stand in for a measured floor. Phase 0 publishes the achieved floor. The catalog does not imply one.

Ionospheric carrier phase scales as 1/f. A 0.1 TECU residual is about 8.4 rad at 100 MHz and about 0.53 rad at L1, a factor of about 15.75, not its square. Delay and range still scale as 1/f².

## Screens

| Screen | Path | Job |
|---|---|---|
| Deck | [/](/) | Open a campaign. Freeze state, roster, formula identity. |
| Walk | [/walk](/walk) | Thirteen gated steps. |
| Bench | [/bench](/bench) | Closed forms only. Never writes the log. |
| Book | [/book](/book) | Notes, covariates, export, import, delete. |
| Switches | [/doctrine](/doctrine) | Kill switches 1, 2, 3, and 6. |

The formula identity count is an app self-check against Rev 3.6. A miss is an app bug, not a residual.

## Walk gates

| Step | Leave it when |
|---|---|
| 1, 2, 7 | You acknowledge the step. |
| 3 | Two identified nodes (name, GPSDO, σ_y, f_loop). Four nodes before any detection claim. |
| 4 | Registry fields filled, except the clock floor and bias hash. |
| 5 | Measured floor and bias hash. Export JSON after the calibration append. |
| 6 | At least one injection line: recovered, missed, or sealed. |
| 8 | SHA-256 frozen, external anchor id recorded beside the digest, JSON exported. |
| 9–12 | Frozen and anchored, and you acknowledge the step. |
| 13 | Campaign-close export from Book. |

The anchor id is stored beside the digest, not inside the hashed preimage, so an OSF, signed git tag, or OpenTimestamps / RFC-3161 stamp of that digest still matches. A handset timestamp alone is a draft.

Science entries stay closed until that anchor id exists. Analysis A refuses an excess call below four nodes. A reported Chain C bound tighter than the per-baseline maximum is rejected. Each chain publishes three columns: predicted budget | measured residual floor | reported bound. The first does not imply the third.

## Kill switches

1. **Array residual.** Per chain. Blast radius: that hypothesis. The array remains a disciplined SDR network.
2. **Chromaticity.** Uncombined L1/L5. Necessary, not sufficient. Cannot fire on a null. Blast radius: the candidate.
3. **Pipeline.** Missed injection, failed return to the floor, FAR or coverage miss, or a common-clock / spot-check failure. Blast radius: the campaign. No science claim.
6. **Simultaneity.** A short-lag excess that moves under an independent time transfer or a common-clock spot-check. Load-bearing on Chain C.

A null is a publishable pair of upper bounds.

## Export

Export JSON at registry freeze (after the anchor id), amendment re-freeze, calibration append, and campaign close. Move the file off the handset. Raw IQ stays on the nodes.

Document date: 28 September 2026. Revision 3.6.
