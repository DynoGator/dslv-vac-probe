# DSLV-ZPDI field book — Rev 3.5 install and user guide

Phone-ready campaign record for GrapheneOS on a Pixel 9 Pro XL.

The handset keeps the campaign record. The SDR, the GPS-disciplined oscillator, and the prompt correlator stay on the DSLV-ZPDI nodes. This book does not synthesize IQ, residuals, magnitude-squared coherence, or a detection.

**Install address:** [https://dslv-vac-probe.grok.me](https://dslv-vac-probe.grok.me)

Documents in the app:

- [Rev 3.5 white paper](/rev-3.5-white-paper.pdf) — *Upper Bounds on Anomalous Distributed Carrier-Phase Coherence from a GNSS Receiver Array*
- [Rev 3.5 install and user guide (PDF)](/rev-3.5-user-guide.pdf)
- This page

Node software: [DynoGator/dslv-zpdi](https://github.com/DynoGator/dslv-zpdi), package `labs.dynogator.dslvzpdi`.

A chat preview or another hostname is a different site and a different book. Records do not sync.

## Read this first

- No Play Store package. Install the published web app from its HTTPS address.
- No account. The campaign book lives in on-device site storage in the browser profile where you install it.
- No cloud copy. Export at every frozen milestone, and before clearing site data.
- A local SHA-256 is not a pre-registration. Anchor it externally and record the transaction ID beside the digest, not inside the hashed preimage.
- A null is a valid result. Chain S and Chain C produce separate bounds.
- The paper reports upper bounds. “Probe of vacuum structure” is the motivating question, not a claim of §§1–8. Supplements S1 and S2 are firewalled and are not the submitted instrument paper.
- Do not invent a residual, γ̂, lag, coordinate, calibration value, or anchor ID.

## Install on GrapheneOS

1. On the Pixel, open [Vanadium](https://grapheneos.org/features#vanadium). It does not require Play Services.
2. Use a **normal tab**, not Incognito. Open [https://dslv-vac-probe.grok.me](https://dslv-vac-probe.grok.me).
3. Confirm the padlock and the host `dslv-vac-probe.grok.me`.
4. Tap the three-dot menu.
5. Tap **Install app**, or **Add to home screen** if that is what the menu says.
6. Confirm the name, place the icon, and open the field book from the home screen.

If Add to home screen seems to do nothing, press and hold the shortcut icon in the placement sheet and drag it onto the home screen.

Stock Chrome uses the same menu. Do not install in Incognito. Allow Vanadium network access. Leave JIT off unless a loaded screen stays blank, then allow JIT for this origin only. Location is optional and is not carrier phase. Do not clear site data until you have exported.

## Five screens

| Screen | Address | Job |
| --- | --- | --- |
| Deck | [https://dslv-vac-probe.grok.me/](https://dslv-vac-probe.grok.me/) | Open a campaign. Freeze, roster, formula identity. |
| Walk | [https://dslv-vac-probe.grok.me/walk](https://dslv-vac-probe.grok.me/walk) | Thirteen gated steps. |
| Bench | [https://dslv-vac-probe.grok.me/bench](https://dslv-vac-probe.grok.me/bench) | Closed-form calculators. No automatic log writes. |
| Book | [https://dslv-vac-probe.grok.me/book](https://dslv-vac-probe.grok.me/book) | Notes, log, export, import, delete. |
| Switches | [https://dslv-vac-probe.grok.me/doctrine](https://dslv-vac-probe.grok.me/doctrine) | Kill switches and handset limits. |

The formula identity count compares closed forms with Rev 3.5. A miss is an app bug, not a residual.

## Walk gates

Next stays disabled until the gate is satisfied. Back is always allowed.

| Step | Gate to leave it |
| --- | --- |
| 1, 2, 7 | Tick “I have read this step against the paper.” |
| 3 | At least two fully identified nodes (name, GPSDO, σ_y, f_loop). Four nodes are required for detection-grade disjoint-pair analysis. |
| 4 | All pre-registration fields except the calibration floor and the bias hash. |
| 5 | Measured floor and bias-file hash. Export is prompted when you append the calibration. |
| 6 | At least one injection log: recovered, missed, or sealed. |
| 8 | SHA-256 frozen, external anchor ID recorded beside the digest, and JSON exported. |
| 9–12 | Frozen and externally anchored registry, plus acknowledgement. An empty science log is allowed. |
| 13 | Campaign-close export. |

## What changed in Rev 3.5

- **H_C** is anomalous phase common to the tracked carriers at each site and correlated across sites, with a non-vanishing inter-site differential. A phase literally identical at every antenna cancels in every inter-node difference and is unobservable.
- **Chain S input** is the between-node double difference of between-satellite single differences. Per-node post-IGS single differences are a diagnostic, not the detection input. The shared IGS clock residual, 75 ps ≈ 0.7 rad at L1, cancels in the double difference.
- The observable is **NCO carrier phase plus the prompt discriminator residual**, not atan2(Q, I) alone. L1 C/A needs data-bit wipeoff. Unrepaired cycle slips are excluded.
- Detection-grade Analysis A needs **four nodes** (two disjoint pairs). Two or three nodes are Phase 0: floor, injection recovery, null characterization, single-baseline Analysis B. The book refuses an excess-hold detection claim below four nodes.
- Ionospheric **carrier phase scales as 1/f**, not 1/f². 0.1 TECU is ≈ 8.4 rad at 100 MHz and ≈ 0.53 rad at L1, a factor of ≈ 15.75, not (15.75)². Delay and range still scale as 1/f².
- The **Chain C bound is a maximum** of (i) the common-clock co-located non-clock floor, (ii) the isolated relative-clock term √(σ²_indep − σ²_common), and (iii) the baseline atmospheric differential (troposphere + multipath, single difference, not ×√2). Never quote tighter. If the common-clock run is noisier, the decomposition failed and Switch 3 fires; do not quote a bound.
- The common-clock run does not transfer troposphere, far-site multipath, or independent GPSDO drift. Drift variance between repeats is added in quadrature. A spot-check miss is Switch 3.
- The Chain S double-difference floor is **√2 times** the single-difference troposphere-plus-multipath RSS, about 0.4–1.1 rad in the worked example. Catalog rows stay labeled catalog until you replace them.
- Weak phase uses σ_φ = 0.42 rad. Calendar r_min = 7.7×10⁻³ gives φ_s ≈ 37 mrad ≈ 1.1 mm at L1. The L_eff = 300 illustration uses r ∼ 10⁻¹: φ_s ≈ 0.13 rad ≈ 4.0 mm.
- **Switch 2 is necessary, not sufficient.** Delay class (φ₁/φ₂ ≈ 1.339) also includes troposphere, multipath, and clock. Uncombined L1/L5 only. Both radians or both cycles, never metres. It cannot fire on a null.
- **Freeze.** Hash the canonical registry first. Record the OSF, signed git tag, OpenTimestamps, or RFC-3161 transaction ID beside the digest. Without an anchor the freeze is a draft. An amendment needs a fresh anchor and a new export before science entries.
- Export JSON at registry freeze (after the anchor ID), amendment re-freeze, calibration append, and campaign close.
- Each chain reports three columns: predicted budget, measured residual floor, and reported bound. The first does not imply the third.
- Phase 0 publishes the achieved residual floor, measured L_eff, injection recovery, empirical false-alarm rate, and bound coverage before any search claim.

## Steps, short form

1. **Hypotheses.** H_S is the sky gradient on Chain S. H_C is the correlated site-common differential on Chain C. Neither null constrains the other.
2. **Carrier path.** IQ stays on the nodes. Record NCO phase plus prompt residual, wipeoff, and the slip rule. Chain S uses the double difference. Chain C keeps the receiver clock. Below f_loop the nodes are one clock; those frequencies are excluded on both chains.
3. **Nodes.** Name, installed GPSDO and serial, measured σ_y(1 s), measured f_loop, antenna, surveyed coordinates or a labeled device fix. A handset fix is not a monument and is not uploaded.
4. **Registry.** Band, spectrum hash, f_d, elevation mask, Analysis A window, block length, Allan cross-check, FDR, catalog and G_km versions, named estimator inputs, wipeoff and slip rule, Phase 0 plan, calibration-transfer plan, injection plan, Switch 2 tolerance. Nothing is seeded. The clock floor and bias hash wait for step 5.
5. **Clock.** Enter the common-clock residual RMS, the independent-clock co-located RMS, and the L1/L5 bias-file hash. Append the calibration and export JSON.
6. **Injection.** Isotropic site-common phase appears on Chain C and vanishes on Chain S. Direction-differential phase appears on Chain S. Off-injection returns to the null floor. Log recovered, missed, or sealed. End-to-end trials into realistic residuals are required before a search claim.
7. **Resolution.** τ_c = d/c. The claim |τ| ≪ τ_c needs τ_c ≫ 1/f_d and σ_sync ≪ τ_c. No coordinates, no lag claim. Resolution-limited pairs may still enter Analysis A.
8. **Freeze and anchor.** Freeze only when nodes, registry, calibration floor, and bias hash are present. Anchor the hash. Record the transaction ID. Export JSON.
9. **Analysis A.** Type γ̂ from the node reduction. The page computes L_eff = T/τ_corr and the Beta null. The ratio is not a detection threshold. L = 86400 is the paper’s trap, not the program floor. With fewer than four nodes, only a Phase 0 floor or “no measurement” can be logged.
10. **Analysis B.** Enter a peak only if the reduction produced one. The classifier does not invent a peak. A near-zero lag, even if every switch passes, is common-mode noise, not a signaling channel.
11. **Switch 2.** Delay ≈ 1.339 may proceed and is not specific evidence of anomalous coherence. Ionosphere ≈ 0.747 returns to the null. Ratio 1 is instrumental. A mixture that matches no class is not promoted.
12. **Switches.** Null holds, fired, candidate passed, or not applicable. The book does not mark a switch passed because a field was left at its default. Switch 6 does not pass unless the excess survived a common-clock spot-check substitution.
13. **Close.** Write the three columns. Campaign-close export downloads JSON. Take Markdown from Book. Raw IQ remains on the nodes.

## Kill switches

1. **Array residual.** Blast: that chain’s hypothesis. The array remains a disciplined SDR network.
2. **Chromaticity.** Necessary, not sufficient. Cannot fire on a null. Blast: the candidate, not the array.
3. **Pipeline.** Failed injection, empirical false-alarm or coverage failure, common-clock failure, or a spot check outside tolerance. Blast: the campaign until repair.
4. **Möbius holonomy.** Blast: Supplement S1 as physics. Bookkeeping may remain.
5. **Gravitating plenum.** Already thrown by cosmology. Blast: literal Dirac-sea ontology.
6. **Simultaneity.** A short-lag excess that moves under an independent time transfer, or that does not survive a common-clock spot-check. Blast: any non-local reading of that dataset. Load-bearing on Chain C.

[E] established. [I] interpretive — Supplement S1. [H] kill-switched — H_S and H_C.

Closest optical precedent: Chou et al., [Phys. Rev. Lett. 117, 111102 (2016)](https://doi.org/10.1103/PhysRevLett.117.111102), instrument paper [arXiv:1611.08265](https://arxiv.org/abs/1611.08265). That null is co-located optical strain. This program is RF carrier phase across geographic baselines.

## Bench

Copy a Bench result into Walk only when it is the measured value or the exact closed form you intend to record. Bench never appends the campaign log.

Phase stability σ_φ = 2π f τ σ_y. Light time. Beta null and the L = 86400 trap. Weak phase. Chromatic class. Ionospheric phase, including the 15.75 factor. Per-dump phase. Guard band. Haversine baseline, not a geodetic reduction. Campaign RSS with the √2 double-difference floor and the Chain C maximum. Rev 3.5 identity self-check.

## Book

- **Export the book** downloads `dslv-zpdi-vacuum-book.json`, tagged Rev 3.5, every local campaign.
- **Campaign-close export** downloads one campaign as JSON and writes an export line.
- **Markdown** is the human-readable note, including the anchor ID and the three columns.
- **Import JSON** appends. It does not overwrite a campaign already on the phone.
- **Remove** deletes one local record after a second confirmation. Export first.

Storage key remains `dslv-zpdi-vacuum-book-v1`. An older frozen book without an anchor ID loads, and it stays a draft until you anchor it. New registry fields start empty; a frozen book must be amended before those fields can be filled, then re-frozen and re-anchored.

## If something fails

| What you see | What to do |
| --- | --- |
| No Install app line | Add to home screen from a normal Vanadium tab on the published origin. |
| Add to home screen does nothing | Drag the icon from the placement sheet onto the home screen. |
| Blank page | Allow network. If the page loaded but stayed white, allow JIT for this origin only. |
| Next stays grey | Read the amber gate under the buttons. |
| Edits rejected | The registry is frozen. Amend, re-freeze, create a fresh anchor, record its ID, export JSON. |
| Freeze shows only a handset time | Anchor it through OSF, a signed tag in the public DSLV-ZPDI repo, or OpenTimestamps / RFC-3161. |
| Identity row fails | The app is wrong. Do not publish that row as a residual. |
| Chain C says not quotable | The common-clock run was noisier than the independent-clock run. Switch 3. Do not invent a tighter floor. |

Stop rather than improvise. Record the failure and fix the underlying condition.

Document date: 28 September 2026. Revision 3.5.
