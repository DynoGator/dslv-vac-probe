export const ART = {
  hero: "/art/hero.jpg",
  clock: "/art/clock.jpg",
  chainS: "/art/chain-s.jpg",
  chainC: "/art/chain-c.jpg",
  chromatic: "/art/chromatic.jpg",
  null: "/art/null.jpg",
  companion: "/art/companion.jpg",
  field: "/art/field.jpg",
} as const;

export type PreregField = {
  id: string;
  label: string;
  hint: string;
  placeholder?: string;
};

export const PREREG: PreregField[] = [
  {
    id: "band",
    label: "Science band",
    hint: "L1 + L5. Any other band needs its own ionospheric row and a spectrum-survey hash.",
    placeholder: "GPS L1 + L5",
  },
  {
    id: "surveyHash",
    label: "Spectrum-survey hash",
    hint: "SHA-256 of the frozen survey. Paste the digest. This app does not invent one.",
    placeholder: "hex digest",
  },
  {
    id: "fdHz",
    label: "Prompt dump rate f_d (Hz)",
    hint: "Pre-registered. Nominal 1–10 kHz. Not tuned after the registry timestamp.",
    placeholder: "1000",
  },
  {
    id: "elevMask",
    label: "Elevation mask (degrees)",
    hint: "Satellites below the mask never enter a chain.",
    placeholder: "15",
  },
  {
    id: "windowS",
    label: "Analysis A window (s)",
    hint: "Non-overlapped. Overlapped windows are not used in the science run.",
    placeholder: "1",
  },
  {
    id: "block",
    label: "Frozen Politis–White block length",
    hint: "Selected on pilot data, reconciled with the Allan turnover, then frozen.",
    placeholder: "samples or seconds",
  },
  {
    id: "allanNote",
    label: "Allan cross-check",
    hint: "Quote the measured σ_y(τ) turnover of the installed units, not a catalog class.",
  },
  {
    id: "fdr",
    label: "FDR procedure",
    hint: "Benjamini–Hochberg under PRDS. Chain S and Chain C are separate families.",
    placeholder: "BH, PRDS, per chain",
  },
  {
    id: "catalog",
    label: "Transmitter catalog version",
    hint: "Frozen version string. Leakage is bounded by injection, not by hope.",
  },
  {
    id: "gkm",
    label: "G_km version per site",
    hint: "Multipath phase-error model identity.",
  },
  {
    id: "tauM",
    label: "Analysis B half-width M (in τ_c)",
    hint: "Grid contains {0, ±τ_c, ±τ_iono, ±τ_trop} and ±M τ_c.",
    placeholder: "4",
  },
  {
    id: "slideCount",
    label: "Time-slide count and joint FAR",
    hint: "Slides run on the post-subtraction residual streams.",
  },
  {
    id: "holdout",
    label: "Hold-out window",
    hint: "Post-window data, excluded from the detection statistic, must show the morphology on its own.",
  },
  {
    id: "iqDepth",
    label: "IQ ring-buffer depth (s)",
    hint: "Paper example is 300 s. Trigger dump is simultaneous across nodes.",
    placeholder: "300",
  },
  {
    id: "transfer",
    label: "Time transfer per baseline class",
    hint: "10 km: common-view GNSS. Sub-km: White Rabbit or two-way optical. State σ_sync.",
  },
  {
    id: "openPlan",
    label: "Open injection plan",
    hint: "Amplitudes, lags, and chain class. Include isotropic (Chain C only) and direction-differential (Chain S).",
  },
  {
    id: "blindCount",
    label: "Blind-injection count and distributions",
    hint: "The mechanism is registered. The seed is not.",
  },
  {
    id: "blindHolder",
    label: "Injection holder",
    hint: "A person who is not on the analysis team. Identity only.",
  },
  {
    id: "switch2tol",
    label: "Switch 2 relative tolerance",
    hint: "On φ₁/φ₂, radians or cycles. Passing the delay class is necessary, not sufficient. Example: 0.05.",
    placeholder: "0.05",
  },
  {
    id: "clockFloorRad",
    label: "Common-clock non-clock floor (rad)",
    hint: "Measured co-located non-clock floor. One term of the Chain C maximum, not the whole bound. Leave blank until the run exists.",
  },
  {
    id: "biasHash",
    label: "L1/L5 inter-channel bias hash",
    hint: "SHA-256 of the bias file from the common-clock run. Filled on the clock step, not here.",
  },
  {
    id: "namedInputs",
    label: "Named estimator inputs",
    hint: "Chain S: two disjoint double-difference series. Chain C: two disjoint same-satellite inter-node series. A 2–3 node array is Phase 0, not a search.",
  },
  {
    id: "wipeoff",
    label: "Data-bit wipeoff and cycle slips",
    hint: "L1 C/A wipeoff method, and the slip detect, repair, and exclusion rule. Unrepaired slips never enter an Analysis A window.",
  },
  {
    id: "phase0",
    label: "Phase 0 validation",
    hint: "Residual floor, measured L_eff, injection recovery, empirical false-alarm rate, and bound coverage. Publish these before any search claim.",
  },
  {
    id: "calibTransfer",
    label: "Calibration transfer",
    hint: "Repeat schedule, interleaved spot checks, drift tolerance, and the per-baseline atmospheric treatment. A spot check outside tolerance is Switch 3.",
  },
];

export type StepDef = {
  id: string;
  section: string;
  title: string;
  image: string;
  imageAlt: string;
  caption: string;
  paragraphs: string[];
};

export const STEPS: StepDef[] = [
  {
    id: "hypotheses",
    section: "§1",
    title: "Name the two hypotheses",
    image: ART.chainS,
    imageAlt: "Night sky with two satellite glints and a survey tripod, standing in for a sky gradient.",
    caption: "H_S lives on direction. H_C does not. A null on one chain does not constrain the other.",
    paragraphs: [
      "H_S is a direction-dependent anomalous phase — a sky gradient. Chain S, the between-node double difference of between-satellite single differences, cancels isotropic site-common phase and both clocks exactly. A null on Chain S does not touch H_C.",
      "H_C is anomalous phase common to the tracked carriers at a site and correlated across sites, with a non-vanishing inter-site differential. A phase literally identical at every antenna cancels in every inter-node difference and is unobservable. Only Chain C keeps that surviving differential. It inherits the receiver clock.",
      "The paper reports upper bounds. The vacuum-structure question motivates the program and is not a claim of §§1–8. A null is the expected result, and the bound is the product.",
    ],
  },
  {
    id: "path",
    section: "§4.0",
    title: "From carrier to estimator",
    image: ART.field,
    imageAlt: "A field kit: handset, antenna cable, and hard hat on a flight case at dusk.",
    caption: "The phone keeps the book. The node tracks the carrier. Do not swap them.",
    paragraphs: [
      "Raw wideband IQ stays in a ring buffer on the nodes. The per-dump observable is NCO carrier phase plus the prompt discriminator residual. atan2(Q, I) alone is the loop residual, not the carrier. L1 C/A needs data-bit wipeoff. Cycle slips follow the pre-registered rule; unrepaired slips are excluded.",
      "Chain S forms a between-satellite single difference per node, then the between-node double difference. That double difference is the Analysis A and B input. It cancels the shared IGS clock residual, about 0.7 rad at L1, exactly. The per-node post-IGS single difference is a diagnostic of the subtraction, not a detection input.",
      "Chain C is the same-satellite inter-node difference. The satellite clock cancels. The receiver clock does not. Below the GPSDO steering bandwidth the nodes are one clock, and those frequencies are excluded on both chains. Detection-grade work uses two disjoint pairs, which means four nodes. Two or three nodes are Phase 0.",
    ],
  },
  {
    id: "nodes",
    section: "§3",
    title: "Put the array on the page",
    image: ART.hero,
    imageAlt: "Two choke-ring antennas and a field rack under a desert night sky.",
    caption: "Two front ends are Phase 0. Detection-grade work needs four nodes.",
    paragraphs: [
      "Each node is a GNSS-disciplined oscillator, an SDR, and a surveyed antenna. Record the installed unit. Catalog ADEV is not accepted where the paper says the measured curve is load-bearing.",
      "Two identified nodes are enough for Phase 0: floor, injection recovery, and a single-baseline lag class. Detection-grade Analysis A needs four nodes so the statistic can use two disjoint pairs. A device fix is not carrier phase and not a monument. Empty coordinates stay empty. Optional E-field, barometer, or radon notes may be logged on the book. They are not estimator inputs.",
    ],
  },
  {
    id: "prereg",
    section: "§6",
    title: "Write the registry before the run",
    image: ART.null,
    imageAlt: "A dark optical table with a straight null fringe.",
    caption: "Frozen means frozen. The analysis of record is not tuned on the science data.",
    paragraphs: [
      "Every item below is a blank until you fill it from the real plan: survey hash, dump rate, block length, catalog version, slide count, holder identity. Nothing here is seeded from a simulator.",
      "Chain S and Chain C stay separate families. The resolution-limited baseline list is part of the registry, computed on the next step from the coordinates and f_d you actually entered.",
    ],
  },
  {
    id: "clock",
    section: "§4.4",
    title: "Split one clock",
    image: ART.clock,
    imageAlt: "One oscillator, a splitter, and two SDR front ends on a bench.",
    caption: "Common-clock Chain C has site phase and inter-channel bias, and no relative clock wander by construction.",
    paragraphs: [
      "One GPSDO output drives two complete front ends at one site, antennas a metre apart. That pair measures the non-clock floor. The independent-clock co-located pair measures site-common plus relative clock. Differencing the configurations isolates the clock term.",
      "If the common-clock pair does not sit on its predicted null, or a later spot check leaves the frozen tolerance, the campaign stops at Switch 3. The calibration measures this site's hardware. It does not reproduce far-site troposphere, far-site multipath, or independent GPSDO drift.",
      "Per baseline, the Chain C bound is the maximum of the co-located non-clock floor, the isolated relative-clock term, and the baseline atmospheric differential. No tighter number is quoted. Drift variance between repeats is added in quadrature to the floor.",
    ],
  },
  {
    id: "inject",
    section: "§4.4",
    title: "Prove the pipeline on both classes",
    image: ART.chainC,
    imageAlt: "Two co-located antennas under one even glow.",
    caption: "Isotropic injection must appear on Chain C and vanish on Chain S. The reverse pattern is H_S.",
    paragraphs: [
      "Open injections test the pipeline. Blind injections test the analysts. Before any detection claim, run end-to-end trials into realistic residuals and record the empirical false-alarm rate and bound coverage. A sealed injection is logged as sealed.",
      "Isotropic site-common phase must appear on Chain C and vanish on Chain S. Direction-differential phase must appear on Chain S. Off-injection must return to the null floor. A chain that misses its signature, the false-alarm target, or the coverage target has no standing to report an excess.",
    ],
  },
  {
    id: "resolution",
    section: "§4.3",
    title: "Mark the baselines that cannot see a lag",
    image: ART.chainS,
    imageAlt: "Sky gradient over the desert, the direction-differential chain.",
    caption: "At 1 kHz, a 10 km pair is resolution-limited for |τ| ≪ τ_c. That is arithmetic, not a mood.",
    paragraphs: [
      "The morphology test |τ| ≪ τ_c requires τ_c ≫ f_d⁻¹. This step lists every pair from the coordinates on the nodes. No coordinate, no baseline, no claim.",
      "Regional baselines still enter Analysis A. They do not get a spacelike sentence in the book.",
    ],
  },
  {
    id: "freeze",
    section: "§6",
    title: "Timestamp the registry",
    image: ART.null,
    imageAlt: "Null fringe on an optical table, the expected picture.",
    caption: "SHA-256 of the canonical registry. Amendments stay visible.",
    paragraphs: [
      "Freezing hashes the nodes, the pre-registration fields, and the budget rows. The handset time is self-attested. Without an external anchor — OSF, a signed git tag, or OpenTimestamps / RFC-3161 — the freeze is a draft, not a pre-registration.",
      "Record the anchor transaction ID beside the digest, then export the JSON. An amendment clears the lock, stores the previous digest, and needs a new anchor and a new export before science entries.",
    ],
  },
  {
    id: "analysis-a",
    section: "§4.2",
    title: "Enter Analysis A as measured",
    image: ART.hero,
    imageAlt: "The field array the residuals actually come from.",
    caption: "Type γ̂ from the node reduction. The Beta law is computed. The residual is not.",
    paragraphs: [
      "Chain S consumes two disjoint double-difference series. Chain C consumes two disjoint same-satellite inter-node series. With fewer than four nodes this step can record a Phase 0 floor. It cannot record a detection.",
      "The large-L floor with L = 86400 is the paper's trap. It is not the program floor. Report predicted budget, measured residual floor, and reported bound as three different numbers.",
    ],
  },
  {
    id: "analysis-b",
    section: "§4.3",
    title: "Classify a lag you actually saw",
    image: ART.chainS,
    imageAlt: "Two bearings in the sky — lag is a place, not a vibe.",
    caption: "The classifier quotes the pre-registered rules. It does not invent a peak.",
    paragraphs: [
      "Enter the peak lag from the reduction, the baseline, and the flags. The book applies the §4.3 reading: propagation, Switch 3, resolution limit, Chain S hardware, or a Chain C candidate that is still not signaling.",
      "A τ≈0 excess, even if every switch is passed, is common-mode noise. No information transfer is possible via a common-mode field.",
    ],
  },
  {
    id: "chromatic",
    section: "§7.2",
    title: "Switch 2 on the uncombined pair",
    image: ART.chromatic,
    imageAlt: "A short copper helix and a longer amber helix over a survey mark.",
    caption: "φ in radians or cycles. Delay class tracks f₁/f₂. Ionosphere tracks the inverse. Equal radians is a processing artifact.",
    paragraphs: [
      "The iono-free combination mixes the carriers and destroys the chromatic ratio. It is never the Switch 2 observable. Both entries must be radians, or both cycles. Do not substitute metres.",
      "Delay class, ratio ≈ 1.339, is the only class that may proceed, and passing it is necessary, not sufficient: troposphere, multipath, and clock error are also delay-class. Ionosphere ≈ 0.747 returns to the null. Ratio 1 is instrumental. A mixture that matches no class is not promoted.",
    ],
  },
  {
    id: "switches",
    section: "§7",
    title: "Adjudicate the kill switches",
    image: ART.null,
    imageAlt: "The null fringe is a result, not a failure.",
    caption: "Four instrument switches: 1, 2, 3, and 6. Switches 4 and 5 are withdrawn with S1.",
    paragraphs: [
      "Four instrument switches are pre-registered: 1, 2, 3, and 6. Numbering keeps Switch 6 so labels do not fork. Switches 4 and 5 are withheld with Supplements S1 and S2 and are not adjudicable here. A null on Chain S is not a null on Chain C.",
      "Switch 2 cannot fire on a null, and a delay-class pass is not evidence of anomalous coherence. Switch 3 stops the campaign until the pipeline is repaired. Switch 6 is load-bearing on H_C. Optional E/B, barometer, or radon notes are covariates. They are not estimator inputs.",
      "Record the call you are actually making. The book will not mark a switch passed because a field was left on its default.",
    ],
  },
  {
    id: "release",
    section: "§6",
    title: "Publish the book, null included",
    image: ART.field,
    imageAlt: "The handset that carries the record off the hill.",
    caption: "JSON for the archive. Markdown for a human. Both are the campaign you typed.",
    paragraphs: [
      "Raw IQ stays on the nodes. Export at every frozen milestone: registry freeze, amendment re-freeze, calibration append, and campaign close. A null is a publishable pair of upper bounds.",
      "For each chain write three columns: predicted budget, measured residual floor, and reported bound. Chain S uses the measured double-difference floor. Chain C uses the per-baseline maximum. The first column does not imply the third.",
    ],
  },
];

export const SWITCHES: {
  n: number;
  title: string;
  blast: string;
  body: string;
}[] = [
  {
    n: 1,
    title: "Array residual",
    blast: "The hypothesis as tested by that chain. The array remains a disciplined SDR network.",
    body: "Analysis A consistent with the Beta or bootstrap null, FDR-controlled, separately for Chain S and Chain C. Analysis B's bootstrap-max consistent with the time-slide null. The |τ| ≪ τ_c class is claimed only on baselines with τ_c ≫ f_d⁻¹.",
  },
  {
    n: 2,
    title: "Chromaticity",
    blast: "The candidate, not the array. This switch cannot fire on a null.",
    body: "Uncombined L1 and L5, with uncertainty. Delay class φ₁/φ₂ ≈ 1.339 may proceed, but passing is necessary, not sufficient: troposphere, multipath, and clock error are also delay-class. Ionospheric class ≈ 0.747 returns to the null. Phase-offset class = 1 is instrumental. A mixture that matches no class is not promoted. Hardware frequency dependence is bounded by the common-clock run.",
  },
  {
    n: 3,
    title: "Pipeline non-recovery",
    blast: "The campaign, until the pipeline is repaired. No science claim.",
    body: "Open or blind injection not recovered, including the distinctive chain pattern, or off-injection not back on the null floor, or the time-slide background disagrees with the bootstrap, or the empirical false-alarm rate misses its target, or the common-clock pair or a spot check misses its predicted null.",
  },
  {
    n: 6,
    title: "Simultaneity convention",
    blast: "Any non-local reading of that dataset. Load-bearing on Chain C.",
    body: "If a |τ| ≪ τ_c excess moves under an independent time transfer — two-way optical, common-view versus all-in-view, or a second constellation — or does not survive substitution of the common-clock calibration, it is a clock-ensemble or hardware artifact.",
  },
];

/** Withdrawn with Supplements S1/S2. Not adjudicable. Kept so old logs stay readable. */
export const WITHDRAWN_SWITCHES = [4, 5] as const;
