import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Compass, i as FlaskConical, n as Shield, o as BookOpen, r as Radio } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome--h4omt2u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ART = {
	hero: "/art/hero.jpg",
	clock: "/art/clock.jpg",
	chainS: "/art/chain-s.jpg",
	chainC: "/art/chain-c.jpg",
	chromatic: "/art/chromatic.jpg",
	null: "/art/null.jpg",
	companion: "/art/companion.jpg",
	field: "/art/field.jpg"
};
var PREREG = [
	{
		id: "band",
		label: "Science band",
		hint: "L1 + L5. Any other band needs its own ionospheric row and a spectrum-survey hash.",
		placeholder: "GPS L1 + L5"
	},
	{
		id: "surveyHash",
		label: "Spectrum-survey hash",
		hint: "SHA-256 of the frozen survey. Paste the digest. This app does not invent one.",
		placeholder: "hex digest"
	},
	{
		id: "fdHz",
		label: "Prompt dump rate f_d (Hz)",
		hint: "Pre-registered. Nominal 1–10 kHz. Not tuned after the registry timestamp.",
		placeholder: "1000"
	},
	{
		id: "elevMask",
		label: "Elevation mask (degrees)",
		hint: "Satellites below the mask never enter a chain.",
		placeholder: "15"
	},
	{
		id: "windowS",
		label: "Analysis A window (s)",
		hint: "Non-overlapped. Overlapped windows are not used in the science run.",
		placeholder: "1"
	},
	{
		id: "block",
		label: "Frozen Politis–White block length",
		hint: "Selected on pilot data, reconciled with the Allan turnover, then frozen.",
		placeholder: "samples or seconds"
	},
	{
		id: "allanNote",
		label: "Allan cross-check",
		hint: "Quote the measured σ_y(τ) turnover of the installed units, not a catalog class."
	},
	{
		id: "fdr",
		label: "FDR procedure",
		hint: "Benjamini–Hochberg under PRDS. Chain S and Chain C are separate families.",
		placeholder: "BH, PRDS, per chain"
	},
	{
		id: "catalog",
		label: "Transmitter catalog version",
		hint: "Frozen version string. Leakage is bounded by injection, not by hope."
	},
	{
		id: "gkm",
		label: "G_km version per site",
		hint: "Multipath phase-error model identity."
	},
	{
		id: "tauM",
		label: "Analysis B half-width M (in τ_c)",
		hint: "Grid contains {0, ±τ_c, ±τ_iono, ±τ_trop} and ±M τ_c.",
		placeholder: "4"
	},
	{
		id: "slideCount",
		label: "Time-slide count and joint FAR",
		hint: "Slides run on the post-subtraction residual streams."
	},
	{
		id: "holdout",
		label: "Hold-out window",
		hint: "Post-window data, excluded from the detection statistic, must show the morphology on its own."
	},
	{
		id: "iqDepth",
		label: "IQ ring-buffer depth (s)",
		hint: "Paper example is 300 s. Trigger dump is simultaneous across nodes.",
		placeholder: "300"
	},
	{
		id: "transfer",
		label: "Time transfer per baseline class",
		hint: "10 km: common-view GNSS. Sub-km: White Rabbit or two-way optical. State σ_sync."
	},
	{
		id: "openPlan",
		label: "Open injection plan",
		hint: "Amplitudes, lags, and chain class. Include isotropic (Chain C only) and direction-differential (Chain S)."
	},
	{
		id: "blindCount",
		label: "Blind-injection count and distributions",
		hint: "The mechanism is registered. The seed is not."
	},
	{
		id: "blindHolder",
		label: "Injection holder",
		hint: "A person who is not on the analysis team. Identity only."
	},
	{
		id: "switch2tol",
		label: "Switch 2 relative tolerance",
		hint: "On φ₁/φ₂, radians or cycles. Passing the delay class is necessary, not sufficient. Example: 0.05.",
		placeholder: "0.05"
	},
	{
		id: "clockFloorRad",
		label: "Common-clock non-clock floor (rad)",
		hint: "Measured co-located non-clock floor. One term of the Chain C maximum, not the whole bound. Leave blank until the run exists."
	},
	{
		id: "biasHash",
		label: "L1/L5 inter-channel bias hash",
		hint: "SHA-256 of the bias file from the common-clock run. Filled on the clock step, not here."
	},
	{
		id: "namedInputs",
		label: "Named estimator inputs",
		hint: "Chain S: two disjoint double-difference series. Chain C: two disjoint same-satellite inter-node series. A 2–3 node array is Phase 0, not a search."
	},
	{
		id: "wipeoff",
		label: "Data-bit wipeoff and cycle slips",
		hint: "L1 C/A wipeoff method, and the slip detect, repair, and exclusion rule. Unrepaired slips never enter an Analysis A window."
	},
	{
		id: "phase0",
		label: "Phase 0 validation",
		hint: "Residual floor, measured L_eff, injection recovery, empirical false-alarm rate, and bound coverage. Publish these before any search claim."
	},
	{
		id: "calibTransfer",
		label: "Calibration transfer",
		hint: "Repeat schedule, interleaved spot checks, drift tolerance, and the per-baseline atmospheric treatment. A spot check outside tolerance is Switch 3."
	}
];
var STEPS = [
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
			"The paper reports upper bounds. The vacuum-structure question motivates the program and is not a claim of §§1–8. A null is the expected result, and the bound is the product."
		]
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
			"Chain C is the same-satellite inter-node difference. The satellite clock cancels. The receiver clock does not. Below the GPSDO steering bandwidth the nodes are one clock, and those frequencies are excluded on both chains. Detection-grade work uses two disjoint pairs, which means four nodes. Two or three nodes are Phase 0."
		]
	},
	{
		id: "nodes",
		section: "§3",
		title: "Put the array on the page",
		image: ART.hero,
		imageAlt: "Two choke-ring antennas and a field rack under a desert night sky.",
		caption: "Two front ends are Phase 0. Detection-grade work needs four nodes.",
		paragraphs: ["Each node is a GNSS-disciplined oscillator, an SDR, and a surveyed antenna. Record the installed unit. Catalog ADEV is not accepted where the paper says the measured curve is load-bearing.", "Two identified nodes are enough for Phase 0: floor, injection recovery, and a single-baseline lag class. Detection-grade Analysis A needs four nodes so the statistic can use two disjoint pairs. A device fix is not carrier phase and not a monument. Empty coordinates stay empty. Optional E-field, barometer, or radon notes may be logged on the book. They are not estimator inputs."]
	},
	{
		id: "prereg",
		section: "§6",
		title: "Write the registry before the run",
		image: ART.null,
		imageAlt: "A dark optical table with a straight null fringe.",
		caption: "Frozen means frozen. The analysis of record is not tuned on the science data.",
		paragraphs: ["Every item below is a blank until you fill it from the real plan: survey hash, dump rate, block length, catalog version, slide count, holder identity. Nothing here is seeded from a simulator.", "Chain S and Chain C stay separate families. The resolution-limited baseline list is part of the registry, computed on the next step from the coordinates and f_d you actually entered."]
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
			"Per baseline, the Chain C bound is the maximum of the co-located non-clock floor, the isolated relative-clock term, and the baseline atmospheric differential. No tighter number is quoted. Drift variance between repeats is added in quadrature to the floor."
		]
	},
	{
		id: "inject",
		section: "§4.4",
		title: "Prove the pipeline on both classes",
		image: ART.chainC,
		imageAlt: "Two co-located antennas under one even glow.",
		caption: "Isotropic injection must appear on Chain C and vanish on Chain S. The reverse pattern is H_S.",
		paragraphs: ["Open injections test the pipeline. Blind injections test the analysts. Before any detection claim, run end-to-end trials into realistic residuals and record the empirical false-alarm rate and bound coverage. A sealed injection is logged as sealed.", "Isotropic site-common phase must appear on Chain C and vanish on Chain S. Direction-differential phase must appear on Chain S. Off-injection must return to the null floor. A chain that misses its signature, the false-alarm target, or the coverage target has no standing to report an excess."]
	},
	{
		id: "resolution",
		section: "§4.3",
		title: "Mark the baselines that cannot see a lag",
		image: ART.chainS,
		imageAlt: "Sky gradient over the desert, the direction-differential chain.",
		caption: "At 1 kHz, a 10 km pair is resolution-limited for |τ| ≪ τ_c. That is arithmetic, not a mood.",
		paragraphs: ["The morphology test |τ| ≪ τ_c requires τ_c ≫ f_d⁻¹. This step lists every pair from the coordinates on the nodes. No coordinate, no baseline, no claim.", "Regional baselines still enter Analysis A. They do not get a spacelike sentence in the book."]
	},
	{
		id: "freeze",
		section: "§6",
		title: "Timestamp the registry",
		image: ART.null,
		imageAlt: "Null fringe on an optical table, the expected picture.",
		caption: "SHA-256 of the canonical registry. Amendments stay visible.",
		paragraphs: ["Freezing hashes the nodes, the pre-registration fields, and the budget rows. The handset time is self-attested. Without an external anchor — OSF, a signed git tag, or OpenTimestamps / RFC-3161 — the freeze is a draft, not a pre-registration.", "Record the anchor transaction ID beside the digest, then export the JSON. An amendment clears the lock, stores the previous digest, and needs a new anchor and a new export before science entries."]
	},
	{
		id: "analysis-a",
		section: "§4.2",
		title: "Enter Analysis A as measured",
		image: ART.hero,
		imageAlt: "The field array the residuals actually come from.",
		caption: "Type γ̂ from the node reduction. The Beta law is computed. The residual is not.",
		paragraphs: ["Chain S consumes two disjoint double-difference series. Chain C consumes two disjoint same-satellite inter-node series. With fewer than four nodes this step can record a Phase 0 floor. It cannot record a detection.", "The large-L floor with L = 86400 is the paper's trap. It is not the program floor. Report predicted budget, measured residual floor, and reported bound as three different numbers."]
	},
	{
		id: "analysis-b",
		section: "§4.3",
		title: "Classify a lag you actually saw",
		image: ART.chainS,
		imageAlt: "Two bearings in the sky — lag is a place, not a vibe.",
		caption: "The classifier quotes the pre-registered rules. It does not invent a peak.",
		paragraphs: ["Enter the peak lag from the reduction, the baseline, and the flags. The book applies the §4.3 reading: propagation, Switch 3, resolution limit, Chain S hardware, or a Chain C candidate that is still not signaling.", "A τ≈0 excess, even if every switch is passed, is common-mode noise. No information transfer is possible via a common-mode field."]
	},
	{
		id: "chromatic",
		section: "§7.2",
		title: "Switch 2 on the uncombined pair",
		image: ART.chromatic,
		imageAlt: "A short copper helix and a longer amber helix over a survey mark.",
		caption: "φ in radians or cycles. Delay class tracks f₁/f₂. Ionosphere tracks the inverse. Equal radians is a processing artifact.",
		paragraphs: ["The iono-free combination mixes the carriers and destroys the chromatic ratio. It is never the Switch 2 observable. Both entries must be radians, or both cycles. Do not substitute metres.", "Delay class, ratio ≈ 1.339, is the only class that may proceed, and passing it is necessary, not sufficient: troposphere, multipath, and clock error are also delay-class. Ionosphere ≈ 0.747 returns to the null. Ratio 1 is instrumental. A mixture that matches no class is not promoted."]
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
			"Record the call you are actually making. The book will not mark a switch passed because a field was left on its default."
		]
	},
	{
		id: "release",
		section: "§6",
		title: "Publish the book, null included",
		image: ART.field,
		imageAlt: "The handset that carries the record off the hill.",
		caption: "JSON for the archive. Markdown for a human. Both are the campaign you typed.",
		paragraphs: ["Raw IQ stays on the nodes. Export at every frozen milestone: registry freeze, amendment re-freeze, calibration append, and campaign close. A null is a publishable pair of upper bounds.", "For each chain write three columns: predicted budget, measured residual floor, and reported bound. Chain S uses the measured double-difference floor. Chain C uses the per-baseline maximum. The first column does not imply the third."]
	}
];
var SWITCHES = [
	{
		n: 1,
		title: "Array residual",
		blast: "The hypothesis as tested by that chain. The array remains a disciplined SDR network.",
		body: "Analysis A consistent with the Beta or bootstrap null, FDR-controlled, separately for Chain S and Chain C. Analysis B's bootstrap-max consistent with the time-slide null. The |τ| ≪ τ_c class is claimed only on baselines with τ_c ≫ f_d⁻¹."
	},
	{
		n: 2,
		title: "Chromaticity",
		blast: "The candidate, not the array. This switch cannot fire on a null.",
		body: "Uncombined L1 and L5, with uncertainty. Delay class φ₁/φ₂ ≈ 1.339 may proceed, but passing is necessary, not sufficient: troposphere, multipath, and clock error are also delay-class. Ionospheric class ≈ 0.747 returns to the null. Phase-offset class = 1 is instrumental. A mixture that matches no class is not promoted. Hardware frequency dependence is bounded by the common-clock run."
	},
	{
		n: 3,
		title: "Pipeline non-recovery",
		blast: "The campaign, until the pipeline is repaired. No science claim.",
		body: "Open or blind injection not recovered, including the distinctive chain pattern, or off-injection not back on the null floor, or the time-slide background disagrees with the bootstrap, or the empirical false-alarm rate misses its target, or the common-clock pair or a spot check misses its predicted null."
	},
	{
		n: 6,
		title: "Simultaneity convention",
		blast: "Any non-local reading of that dataset. Load-bearing on Chain C.",
		body: "If a |τ| ≪ τ_c excess moves under an independent time transfer — two-way optical, common-view versus all-in-view, or a second constellation — or does not survive substitution of the common-clock calibration, it is a clock-ensemble or hardware artifact."
	}
];
/** Closed-form metrology from Rev 3.6. No measured residuals live here. */
var C_MPS = 299792458;
var F_L1_HZ = 157542e4;
var F_L5_HZ = 117645e4;
var F_RATIO = 154 / 115;
var IONO_RATIO = 115 / 154;
C_MPS / F_L1_HZ;
function num(raw) {
	if (typeof raw === "number") return Number.isFinite(raw) ? raw : null;
	if (raw == null) return null;
	const t = raw.trim().replace(/,/g, "");
	if (!t) return null;
	const n = Number(t);
	return Number.isFinite(n) ? n : null;
}
/** σ_φ ≈ 2π f τ σ_y  (rad). Rev 3.6 §3.4. */
function sigmaPhiRad(fHz, tauS, sigmaY) {
	return 2 * Math.PI * fHz * tauS * sigmaY;
}
function lightTimeS(baselineM) {
	return baselineM / C_MPS;
}
/** Baseline whose light time equals n dump samples. */
function baselineForLags(fdHz, nLags) {
	return nLags / fdHz * C_MPS;
}
function nyquistHz(fdHz) {
	return fdHz / 2;
}
/** Carrier-phase radians for a geometric path at frequency f. */
function pathToPhaseRad(pathM, fHz) {
	return pathM * 2 * Math.PI * fHz / C_MPS;
}
function phaseToPathM(phiRad, fHz) {
	return phiRad * C_MPS / (2 * Math.PI * fHz);
}
/**
* Magnitude-squared coherence null for L non-overlapped windows.
* γ̂ ~ Beta(1, L−1). Goodman / Carter / Gish & Cochran.
*/
function betaNull(L) {
	if (!(L > 1)) return null;
	const eGamma = 1 / L;
	const varGamma = (L - 1) / (L * L * (L + 1));
	const eR = Math.sqrt(Math.PI / (4 * L));
	const sigmaR = Math.sqrt((4 - Math.PI) / (4 * L));
	return {
		eGamma,
		varGamma,
		eR,
		sigmaR,
		rMin3: eR + 3 * sigmaR
	};
}
function lEff(durationS, tauCorrS) {
	if (!(durationS > 0) || !(tauCorrS > 0)) return null;
	return durationS / tauCorrS;
}
/**
* Shared-phase amplitude from coherence.
* Exact: r = φ² / (φ² + σ²) ⇒ φ = σ √(r / (1−r)), for 0<r<1.
* Paper's small-signal map φ ≈ σ √r is returned alongside it.
*/
function weakPhase(sigmaPhi, r) {
	if (!(sigmaPhi > 0) || !(r > 0) || !(r < 1)) return null;
	return {
		approx: sigmaPhi * Math.sqrt(r),
		exact: sigmaPhi * Math.sqrt(r / (1 - r))
	};
}
/**
* |ionospheric carrier phase| in radians.
* Range scales as 1/f². Phase in radians or cycles scales as 1/f, because
* φ = 2π Δρ / λ and λ scales as 1/f. TEC argument is TECU (10¹⁶ m⁻²).
*/
function ionoPhaseRad(tecTecU, fHz) {
	const tec = tecTecU * 0x2386f26fc10000;
	return Math.abs(40.3 * tec * 2 * Math.PI / (fHz * C_MPS));
}
/** σ_φ,dump ≈ 1/√(2 · C/N0 · T), T = 1/f_d. C/N0 in dB-Hz. */
function dumpPhaseSigma(cn0DbHz, fdHz) {
	if (!(fdHz > 0)) return null;
	const cn0 = 10 ** (cn0DbHz / 10);
	const T = 1 / fdHz;
	if (!(cn0 > 0) || !(T > 0)) return null;
	return 1 / Math.sqrt(2 * cn0 * T);
}
function rss(values) {
	return Math.sqrt(values.reduce((s, v) => s + v * v, 0));
}
var EARTH_R_M = 6371008.8;
function haversineM(a, b) {
	const φ1 = a.lat * Math.PI / 180;
	const φ2 = b.lat * Math.PI / 180;
	const dφ = (b.lat - a.lat) * Math.PI / 180;
	const dλ = (b.lon - a.lon) * Math.PI / 180;
	const h = Math.sin(dφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(dλ / 2) ** 2;
	return 2 * EARTH_R_M * Math.asin(Math.min(1, Math.sqrt(h)));
}
function chromatic(phi1, phi2, tolRel) {
	if (!(phi2 !== 0) || !Number.isFinite(phi1) || !Number.isFinite(phi2)) return null;
	const ratio = phi1 / phi2;
	const options = [
		{
			klass: "delay",
			target: F_RATIO
		},
		{
			klass: "iono",
			target: IONO_RATIO
		},
		{
			klass: "offset",
			target: 1
		}
	];
	let best = options[0];
	let bestErr = Math.abs(ratio - best.target) / best.target;
	for (const opt of options.slice(1)) {
		const err = Math.abs(ratio - opt.target) / Math.abs(opt.target);
		if (err < bestErr) {
			best = opt;
			bestErr = err;
		}
	}
	return {
		ratio,
		klass: bestErr <= tolRel ? best.klass : "none",
		target: best.target,
		relErr: bestErr
	};
}
function morphology(input) {
	const { baselineM, fdHz } = input;
	if (!(baselineM > 0) || !(fdHz > 0)) return null;
	const tauC = lightTimeS(baselineM);
	const deltaTau = 1 / fdHz;
	const resolutionLimited = !(tauC > 10 * deltaTau);
	const syncOk = input.sigmaSyncS < tauC;
	const absT = Math.abs(input.tauS);
	const nearZero = absT <= Math.max(input.sigmaSyncS, deltaTau) || absT < .1 * tauC;
	const base = {
		tauC,
		deltaTau,
		resolutionLimited,
		syncOk,
		nearZero,
		notSignaling: nearZero
	};
	if (input.vanishesWithIgs) return {
		...base,
		code: "removed-by-null",
		title: "Removed by the null",
		detail: "The peak vanishes when common-view, ionosphere, or IGS terms are applied. That is subtraction working. Switch 1 does not promote it."
	};
	if (input.catalogMultipath && (absT >= tauC || !nearZero)) return {
		...base,
		code: "propagation",
		title: "Catalogued multipath",
		detail: "The lag matches a catalogued multipath extra delay. Ordinary propagation. Switch 1 fails for this candidate."
	};
	if (absT > tauC * 1.05) return {
		...base,
		code: "switch3",
		title: "Outside the light cone of the baseline",
		detail: "A peak at |τ| > τ_c cannot be direct propagation. With no catalogued multipath delay, treat it as dispersive or instrumental and open Switch 3. It is not a detection."
	};
	if (!nearZero && absT >= tauC * .8) return {
		...base,
		code: "propagation",
		title: "Direct propagation",
		detail: "Peak at |τ| ≈ τ_c. Equality is the on-axis source. Ordinary propagation. Switch 1 fails for this candidate."
	};
	if (resolutionLimited) return {
		...base,
		code: "resolution-limited",
		title: "Resolution-limited baseline",
		detail: `τ_c = ${tauC.toExponential(2)} s is not ≫ δτ = ${deltaTau.toExponential(2)} s at this f_d. The pair still belongs in Analysis A. No |τ| ≪ τ_c claim is allowed. A 1 s average is not a spacelike sample.`
	};
	if (!syncOk) return {
		...base,
		code: "resolution-limited",
		title: "Time transfer is not finer than the baseline",
		detail: "σ_sync is not ≪ τ_c. An excess at τ≈0 is not meaningful on this baseline until the pre-registered transfer method gets there. Switch 6 is the reading if it moves under another clock."
	};
	if (input.chain === "S" && input.colocated) return {
		...base,
		code: "chain-s-hardware",
		title: "Co-located excess on Chain S",
		detail: "A |τ| ≪ τ_c peak that also appears on the co-located pair is site-common hardware on Chain S. Co-located excess is not anomalous under H_S."
	};
	if (input.chain === "C" && input.colocated && input.alsoOnSeparated && input.commonClockExcludesHardware && input.delayClass) return {
		...base,
		notSignaling: true,
		code: "chain-c-candidate",
		title: "Chain C morphology — still not signaling",
		detail: "Present on co-located and separated pairs, common-clock decomposition has excluded the hardware reading, and Switch 2 landed in the delay class. This is the only Chain-C morphology the paper says is worth a data paper. It is common-mode. It is not superluminal signaling. No information transfer is possible via a common-mode field. It still needs a hold-out window."
	};
	return {
		...base,
		code: "follow-up",
		title: input.chain === "C" ? "Chain C follow-up, not yet a candidate" : "Chain S follow-up",
		detail: input.chain === "C" ? "Near-zero lag on a resolved baseline. H_C still has to clear the common-clock floor, Switch 2 on the uncombined L1/L5 pair (delay class only), and Switch 6 under an independent time transfer. Until then it is a queue entry, not a result." : "Near-zero lag that is not confined to the co-located control. Label it H_S and send it to Switch 2. The iono-free combination is not the Switch 2 observable."
	};
}
/** 75 ps IGS final clock residual, in radians at a carrier. Identical at every node using that product. */
function igsClockRad(fHz, dtS = 75e-12) {
	return 2 * Math.PI * fHz * dtS;
}
/** Chain-S double-difference floor is √2 times the single-difference RSS. */
function doubleDifferenceFloor(singleDifferenceRad) {
	return singleDifferenceRad * Math.SQRT2;
}
/**
* Per-baseline Chain C bound. The maximum of the co-located non-clock floor,
* the isolated relative-clock term, and the baseline atmospheric differential.
* Missing terms are omitted. An empty list means the bound is not yet quotable.
*/
function chainCBoundRad(parts) {
	const vals = parts.filter((v) => typeof v === "number" && Number.isFinite(v) && v >= 0);
	if (!vals.length) return null;
	return Math.max(...vals);
}
/** Variance split stated in §4.4. Valid only if the two runs differ by the clock. */
function clockIsolation(commonClockRms, independentRms) {
	if (!(commonClockRms >= 0) || !(independentRms >= 0)) return null;
	const diff = independentRms ** 2 - commonClockRms ** 2;
	if (diff < 0) return null;
	return Math.sqrt(diff);
}
function paperIdentityChecks() {
	const phi = sigmaPhiRad(F_L1_HZ, 1, 1e-12);
	const ionoL1 = ionoPhaseRad(.1, F_L1_HZ);
	const ionoHf = ionoPhaseRad(.1, 1e8);
	const tau10 = lightTimeS(1e4);
	const d1 = baselineForLags(1e3, 1);
	const floor = betaNull(86400);
	const weak = weakPhase(.42, floor?.rMin3 ?? 0);
	const weakO = weakPhase(.42, .1);
	const pathMm = weak ? phaseToPathM(weak.approx, F_L1_HZ) * 1e3 : NaN;
	const pathO = weakO ? phaseToPathM(weakO.approx, F_L1_HZ) * 1e3 : NaN;
	const phiO = weakO?.approx ?? NaN;
	const sdLo = rss([pathToPhaseRad(.01, F_L1_HZ), pathToPhaseRad(.005, F_L1_HZ)]);
	const sdHi = rss([pathToPhaseRad(.01, F_L1_HZ), pathToPhaseRad(.02, F_L1_HZ)]);
	const ddLo = doubleDifferenceFloor(sdLo);
	const ddHi = doubleDifferenceFloor(sdHi);
	const igs = igsClockRad(F_L1_HZ);
	const ionoScale = ionoHf / ionoL1;
	const near = (got, exp, frac) => Math.abs(got - exp) <= Math.abs(exp) * frac;
	return [
		{
			id: "phi",
			label: "GPSDO σ_φ at L1, σ_y(1 s)=10⁻¹²",
			got: phi.toExponential(3) + " rad",
			expect: "9.9×10⁻³ rad",
			pass: near(phi, .0099, .02)
		},
		{
			id: "ratio",
			label: "f₁/f₂",
			got: F_RATIO.toFixed(6),
			expect: "154/115 ≈ 1.339",
			pass: near(F_RATIO, 154 / 115, 1e-12)
		},
		{
			id: "iono-l1",
			label: "0.1 TECU carrier phase at L1",
			got: ionoL1.toFixed(3) + " rad",
			expect: "≈ 0.53 rad",
			pass: near(ionoL1, .53, .04)
		},
		{
			id: "iono-hf",
			label: "0.1 TECU carrier phase at 100 MHz",
			got: ionoHf.toFixed(2) + " rad",
			expect: "≈ 8.4 rad",
			pass: near(ionoHf, 8.4, .03)
		},
		{
			id: "iono-scale",
			label: "0.1 TECU, 100 MHz / L1",
			got: ionoScale.toFixed(2),
			expect: "≈ 15.75, not its square",
			pass: near(ionoScale, 157542e4 / 1e8, .01) && ionoScale < 20
		},
		{
			id: "igs",
			label: "IGS clock residual, 75 ps at L1",
			got: igs.toFixed(3) + " rad",
			expect: "≈ 0.74 rad",
			pass: near(igs, .74, .02)
		},
		{
			id: "tau",
			label: "Light time, 10 km",
			got: (tau10 * 1e6).toFixed(2) + " µs",
			expect: "≈ 33 µs",
			pass: near(tau10, 33e-6, .02)
		},
		{
			id: "res",
			label: "δτ = 1 ms baseline",
			got: (d1 / 1e3).toFixed(1) + " km",
			expect: "300 km",
			pass: near(d1, 3e5, .01)
		},
		{
			id: "beta",
			label: "Naive L=86400 magnitude floor",
			got: floor ? floor.eR.toExponential(2) + " / " + floor.sigmaR.toExponential(2) : "—",
			expect: "E[r]≈3.0×10⁻³, σ≈1.6×10⁻³",
			pass: !!floor && near(floor.eR, .003, .03) && near(floor.sigmaR, .0016, .05)
		},
		{
			id: "rmin",
			label: "Calendar r_min (κ=3), not the program floor",
			got: floor ? floor.rMin3.toExponential(2) : "—",
			expect: "≈ 7.7×10⁻³",
			pass: !!floor && near(floor.rMin3, .0077, .05)
		},
		{
			id: "weak",
			label: "σ_φ=0.42 rad, calendar r_min → path at L1",
			got: Number.isFinite(pathMm) ? pathMm.toFixed(2) + " mm" : "—",
			expect: "≈ 1.1 mm",
			pass: near(pathMm, 1.1, .08)
		},
		{
			id: "weak300",
			label: "L_eff=300 illustration, r∼10⁻¹, σ_φ=0.42 rad",
			got: Number.isFinite(pathO) ? `${phiO.toFixed(3)} rad · ${pathO.toFixed(2)} mm` : "—",
			expect: "φ_s≈0.13 rad ≈ 4.0 mm",
			pass: near(phiO, .13, .05) && near(pathO, 4, .08)
		},
		{
			id: "rss",
			label: "Chain S double-difference floor, trop + multipath",
			got: ddLo.toFixed(2) + "–" + ddHi.toFixed(2) + " rad",
			expect: "inside 0.4–1.1 rad",
			pass: ddLo >= .4 && ddLo <= .7 && ddHi >= .9 && ddHi <= 1.15
		}
	];
}
function sci(n, sig = 3) {
	if (n == null || !Number.isFinite(n)) return "—";
	const a = Math.abs(n);
	if (a !== 0 && (a < .01 || a >= 1e4)) return n.toExponential(sig);
	const digits = a >= 100 ? 1 : a >= 10 ? 2 : sig;
	return n.toFixed(digits);
}
function formatBaseline(m) {
	if (m == null || !Number.isFinite(m)) return "not surveyed";
	if (m < 1e3) return `${m.toFixed(m < 10 ? 2 : 1)} m`;
	return `${(m / 1e3).toFixed(3)} km`;
}
function formatSeconds(s) {
	if (s == null || !Number.isFinite(s)) return "—";
	const a = Math.abs(s);
	if (a >= 1) return `${s.toFixed(3)} s`;
	if (a >= .001) return `${(s * 1e3).toFixed(3)} ms`;
	if (a >= 1e-6) return `${(s * 1e6).toFixed(2)} µs`;
	return `${(s * 1e9).toFixed(1)} ns`;
}
function formatRad(rad) {
	if (rad == null || !Number.isFinite(rad)) return "—";
	const a = Math.abs(rad);
	if (a !== 0 && a < .01) return `${rad.toExponential(2)} rad`;
	return `${rad.toFixed(3)} rad`;
}
function uid() {
	return crypto.randomUUID();
}
function stamp(d = /* @__PURE__ */ new Date()) {
	return d.toISOString();
}
var KEY = "dslv-zpdi-vacuum-book-v1";
function blankNode() {
	return {
		id: uid(),
		name: "",
		gpsdo: "",
		sigmaY: "",
		fLoopHz: "",
		antenna: "",
		lat: "",
		lon: "",
		altM: "",
		accuracyM: "",
		fixSource: "",
		fixAt: ""
	};
}
function catalogBudget() {
	return [
		{
			id: uid(),
			name: "Tropospheric wet delay",
			kind: "path-cm",
			value: "1",
			basis: "catalog",
			note: "Saastamoinen-class worked example, 1 cm at L1. Replace with the mapped residual you measured.",
			rss: true
		},
		{
			id: uid(),
			name: "Multipath, low case",
			kind: "path-cm",
			value: "0.5",
			basis: "catalog",
			note: "0.5 cm specular floor used only for the low RSS. Not both multipath rows at once.",
			rss: false
		},
		{
			id: uid(),
			name: "Multipath, high case",
			kind: "path-cm",
			value: "2",
			basis: "catalog",
			note: "2 cm. Use this or the low case in a single RSS, then quote the span.",
			rss: false
		},
		{
			id: uid(),
			name: "Antenna PCV + cable + front end",
			kind: "phase-rad",
			value: "0.1",
			basis: "catalog",
			note: "Placeholder. Catalog values are not accepted. Excluded from the RSS until you mark it measured.",
			rss: false
		},
		{
			id: uid(),
			name: "Thermal noise on the carrier",
			kind: "phase-rad",
			value: "0.001",
			basis: "catalog",
			note: "1 mrad, high-SNR broadcast carriers. Not the systematic floor.",
			rss: true
		}
	];
}
function emptyFields() {
	const fields = {};
	for (const f of PREREG) fields[f.id] = "";
	return fields;
}
function makeCampaign(input) {
	return {
		id: uid(),
		name: input.name.trim(),
		operator: input.operator.trim(),
		site: input.site.trim(),
		createdAt: stamp(),
		stepId: STEPS[0].id,
		acked: [],
		fields: emptyFields(),
		nodes: [],
		budget: catalogBudget(),
		logs: [],
		frozen: null,
		amendments: []
	};
}
var LOCKED_WHEN_FROZEN = new Set(PREREG.map((f) => f.id));
function canonical(c) {
	const payload = {
		rev: "3.6",
		app: "DSLV-ZPDI-Probing-The-Vacuum-Structure",
		name: c.name,
		operator: c.operator,
		site: c.site,
		createdAt: c.createdAt,
		nodes: c.nodes.map((n) => ({
			name: n.name,
			gpsdo: n.gpsdo,
			sigmaY: n.sigmaY,
			fLoopHz: n.fLoopHz,
			antenna: n.antenna,
			lat: n.lat,
			lon: n.lon,
			altM: n.altM,
			fixSource: n.fixSource
		})),
		fields: c.fields,
		budget: c.budget.map((b) => ({
			name: b.name,
			kind: b.kind,
			value: b.value,
			basis: b.basis,
			rss: b.rss
		})),
		acked: [...c.acked].sort()
	};
	return JSON.stringify(payload);
}
async function sha256(text) {
	const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
	return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function isNode(x) {
	if (!x || typeof x !== "object") return false;
	const n = x;
	return typeof n.id === "string" && typeof n.name === "string";
}
function isLog(x) {
	if (!x || typeof x !== "object") return false;
	const n = x;
	return typeof n.id === "string" && typeof n.title === "string" && typeof n.kind === "string";
}
function isBudget(x) {
	if (!x || typeof x !== "object") return false;
	const n = x;
	return typeof n.id === "string" && typeof n.name === "string" && typeof n.value === "string";
}
function isCampaign(x) {
	if (!x || typeof x !== "object") return false;
	const c = x;
	return typeof c.id === "string" && typeof c.name === "string" && c.fields != null && typeof c.fields === "object" && Array.isArray(c.nodes) && c.nodes.every(isNode) && Array.isArray(c.logs) && c.logs.every(isLog) && Array.isArray(c.budget) && c.budget.every(isBudget);
}
function normalize(c) {
	const fields = emptyFields();
	for (const [k, v] of Object.entries(c.fields)) if (typeof v === "string") fields[k] = v;
	return {
		...c,
		operator: c.operator ?? "",
		site: c.site ?? "",
		stepId: STEPS.some((s) => s.id === c.stepId) ? c.stepId : STEPS[0].id,
		acked: Array.isArray(c.acked) ? c.acked.filter((a) => typeof a === "string") : [],
		fields,
		amendments: Array.isArray(c.amendments) ? c.amendments : [],
		frozen: c.frozen && typeof c.frozen.sha256 === "string" ? {
			at: c.frozen.at ?? "",
			sha256: c.frozen.sha256,
			anchorKind: c.frozen.anchorKind ?? "",
			anchorId: c.frozen.anchorId ?? ""
		} : null
	};
}
function preregComplete(c) {
	return PREREG.every((f) => {
		if (f.id === "clockFloorRad" || f.id === "biasHash") return true;
		return (c.fields[f.id] ?? "").trim().length > 0;
	});
}
function clockReady(c) {
	return (c.fields.clockFloorRad ?? "").trim().length > 0 && (c.fields.biasHash ?? "").trim().length > 0;
}
function nodesReady(c) {
	return c.nodes.length >= 2 && c.nodes.every((n) => n.name.trim() && n.gpsdo.trim() && n.sigmaY.trim() && n.fLoopHz.trim());
}
function detectionReady(c) {
	return nodesReady(c) && c.nodes.length >= 4;
}
function registryAnchored(c) {
	return Boolean(c.frozen?.sha256 && c.frozen.anchorId.trim());
}
function registryExported(c) {
	if (!c.frozen?.sha256 || !c.frozen.anchorId.trim()) return false;
	const sha = c.frozen.sha256;
	const anchor = c.frozen.anchorId.trim();
	return c.logs.some((l) => l.kind === "export" && l.body.includes(sha) && l.body.includes(anchor));
}
var useBook = create((set, get) => ({
	campaigns: [],
	activeId: null,
	createCampaign: (input) => {
		const c = makeCampaign(input);
		set((s) => ({
			campaigns: [c, ...s.campaigns],
			activeId: c.id
		}));
		return c.id;
	},
	select: (id) => set({ activeId: id }),
	remove: (id) => set((s) => {
		const campaigns = s.campaigns.filter((c) => c.id !== id);
		return {
			campaigns,
			activeId: s.activeId === id ? campaigns[0]?.id ?? null : s.activeId
		};
	}),
	patch: (id, fn) => set((s) => ({ campaigns: s.campaigns.map((c) => c.id === id ? fn(c) : c) })),
	setField: (id, key, value) => {
		const c = get().campaigns.find((x) => x.id === id);
		if (!c) return false;
		if (c.frozen && LOCKED_WHEN_FROZEN.has(key)) return false;
		get().patch(id, (cur) => ({
			...cur,
			fields: {
				...cur.fields,
				[key]: value
			}
		}));
		return true;
	},
	ack: (id, stepId) => get().patch(id, (c) => ({
		...c,
		acked: c.acked.includes(stepId) ? c.acked : [...c.acked, stepId]
	})),
	setStep: (id, stepId) => get().patch(id, (c) => ({
		...c,
		stepId
	})),
	addNode: (id) => {
		const c = get().campaigns.find((x) => x.id === id);
		if (!c || c.frozen) return;
		get().patch(id, (cur) => ({
			...cur,
			nodes: [...cur.nodes, blankNode()]
		}));
	},
	updateNode: (id, nodeId, patch) => {
		const c = get().campaigns.find((x) => x.id === id);
		if (!c || c.frozen) return false;
		get().patch(id, (cur) => ({
			...cur,
			nodes: cur.nodes.map((n) => n.id === nodeId ? {
				...n,
				...patch
			} : n)
		}));
		return true;
	},
	removeNode: (id, nodeId) => {
		const c = get().campaigns.find((x) => x.id === id);
		if (!c || c.frozen) return false;
		get().patch(id, (cur) => ({
			...cur,
			nodes: cur.nodes.filter((n) => n.id !== nodeId)
		}));
		return true;
	},
	updateBudget: (id, rowId, patch) => {
		const c = get().campaigns.find((x) => x.id === id);
		if (!c || c.frozen) return false;
		get().patch(id, (cur) => ({
			...cur,
			budget: cur.budget.map((r) => r.id === rowId ? {
				...r,
				...patch
			} : r)
		}));
		return true;
	},
	addLog: (id, entry) => get().patch(id, (c) => ({
		...c,
		logs: [{
			...entry,
			id: uid(),
			at: entry.at ?? stamp(),
			chain: entry.chain ?? ""
		}, ...c.logs]
	})),
	freeze: async (id) => {
		const c = get().campaigns.find((x) => x.id === id);
		if (!c || c.frozen) return null;
		if (!preregComplete(c) || !nodesReady(c) || !clockReady(c)) return null;
		const digest = await sha256(canonical(c));
		const at = stamp();
		get().patch(id, (cur) => ({
			...cur,
			frozen: {
				at,
				sha256: digest,
				anchorKind: "",
				anchorId: ""
			},
			logs: [{
				id: uid(),
				at,
				kind: "freeze",
				title: "Registry frozen",
				body: digest,
				chain: ""
			}, ...cur.logs]
		}));
		return digest;
	},
	setAnchor: (id, anchorKind, anchorId) => {
		const c = get().campaigns.find((x) => x.id === id);
		const trimmed = anchorId.trim();
		if (!c?.frozen || !trimmed) return false;
		const at = stamp();
		get().patch(id, (cur) => ({
			...cur,
			frozen: cur.frozen ? {
				...cur.frozen,
				anchorKind,
				anchorId: trimmed
			} : cur.frozen,
			logs: [{
				id: uid(),
				at,
				kind: "freeze",
				title: "External anchor recorded",
				body: `${anchorKind || "unspecified"} ${trimmed}. Digest ${cur.frozen?.sha256 ?? ""}. The anchor ID is stored beside the digest, not inside it, so an external timestamp of that digest still matches.`,
				chain: ""
			}, ...cur.logs]
		}));
		return true;
	},
	amend: (id, reason) => {
		const c = get().campaigns.find((x) => x.id === id);
		if (!c?.frozen) return;
		const previousSha = c.frozen.sha256;
		const at = stamp();
		get().patch(id, (cur) => ({
			...cur,
			frozen: null,
			amendments: [...cur.amendments, {
				at,
				reason: reason.trim(),
				previousSha
			}],
			logs: [{
				id: uid(),
				at,
				kind: "amendment",
				title: "Registry amended",
				body: `${reason.trim()} Previous ${previousSha}`,
				chain: ""
			}, ...cur.logs]
		}));
	},
	importBook: (raw) => {
		const body = raw;
		const list = Array.isArray(raw) ? raw : Array.isArray(body?.campaigns) ? body.campaigns : body?.campaign ? [body.campaign] : null;
		if (!list) return {
			ok: false,
			error: "That file is not a campaign book."
		};
		const campaigns = list.filter(isCampaign).map(normalize);
		if (!campaigns.length) return {
			ok: false,
			error: "No campaign records in that file."
		};
		set((s) => {
			const ids = new Set(s.campaigns.map((c) => c.id));
			const fresh = campaigns.map((c) => ids.has(c.id) ? {
				...c,
				id: uid()
			} : c);
			return {
				campaigns: [...fresh, ...s.campaigns],
				activeId: fresh[0].id
			};
		});
		return {
			ok: true,
			n: campaigns.length
		};
	}
}));
var started = false;
function useHydrateBook() {
	const [ready, setReady] = (0, import_react.useState)(started);
	(0, import_react.useEffect)(() => {
		if (started) {
			setReady(true);
			return;
		}
		started = true;
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				const campaigns = Array.isArray(parsed.campaigns) ? parsed.campaigns.filter(isCampaign).map(normalize) : [];
				const activeId = typeof parsed.activeId === "string" && campaigns.some((c) => c.id === parsed.activeId) ? parsed.activeId : campaigns[0]?.id ?? null;
				useBook.setState({
					campaigns,
					activeId
				});
			}
		} catch {}
		useBook.subscribe((s) => {
			localStorage.setItem(KEY, JSON.stringify({
				campaigns: s.campaigns,
				activeId: s.activeId
			}));
		});
		setReady(true);
	}, []);
	return ready;
}
function useActive() {
	return useBook((s) => s.campaigns.find((c) => c.id === s.activeId) ?? null);
}
function rowRad(row) {
	const v = Number(row.value);
	if (!Number.isFinite(v)) return null;
	if (row.kind === "path-cm") return pathToPhaseRad(v / 100, 157542e4);
	return v;
}
function identityPassCount() {
	const rows = paperIdentityChecks();
	return {
		pass: rows.filter((r) => r.pass).length,
		total: rows.length
	};
}
var NAV = [
	{
		to: "/",
		label: "Deck",
		icon: Radio
	},
	{
		to: "/walk",
		label: "Walk",
		icon: Compass
	},
	{
		to: "/bench",
		label: "Bench",
		icon: FlaskConical
	},
	{
		to: "/book",
		label: "Book",
		icon: BookOpen
	},
	{
		to: "/doctrine",
		label: "Switches",
		icon: Shield
	}
];
function Shell({ children }) {
	useHydrateBook();
	const path = useRouterState({ select: (s) => s.location.pathname });
	const campaigns = useBook((s) => s.campaigns);
	const activeId = useBook((s) => s.activeId);
	const select = useBook((s) => s.select);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-grid min-h-dvh text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "shell-top sticky top-0 z-20 border-b border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl items-center gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/favicon.svg",
							alt: "",
							className: "h-9 w-9 shrink-0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "kicker",
								children: "DSLV-ZPDI · Rev 3.6"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-base font-semibold",
								children: "Upper bounds on carrier phase"
							})]
						}),
						campaigns.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: "campaign-select",
							children: "Active campaign"
						}),
						campaigns.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "campaign-select",
							className: "select max-w-40 truncate",
							value: activeId ?? "",
							onChange: (e) => select(e.target.value),
							children: campaigns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.id,
								children: c.name
							}, c.id))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-3xl px-4 pb-28 pt-4",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "shell-nav fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto grid max-w-3xl grid-cols-5 gap-1 px-2 py-1",
					children: NAV.map((item) => {
						const on = item.to === "/" ? path === "/" : path.startsWith(item.to);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: `nav-hit ${on ? "nav-hit-on" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 18,
								"aria-hidden": true
							}), item.label]
						}) }, item.to);
					})
				})
			})
		]
	});
}
function Plate({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "card overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "aspect-video w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "px-3 py-2 text-xs text-muted",
			children: caption
		})]
	});
}
function Tag({ children, tone = "sage" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `font-mono text-xs tracking-wide uppercase ${tone === "hot" ? "text-hot" : tone === "warn" ? "text-warn" : tone === "ok" ? "text-ok" : tone === "steel" ? "text-accent" : "text-primary"}`,
		children
	});
}
function Readout({ label, value, unit, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-elevated px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tabular mt-1 font-mono text-xl text-foreground",
				children: [value, unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 text-sm text-muted",
					children: unit
				}) : null]
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-subtle",
				children: hint
			}) : null
		]
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1 block text-sm text-foreground",
				children: label
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
function NeedCampaign() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-semibold",
				children: "No campaign is open"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "The book starts empty. Open a campaign on the deck, then walk the registry. Nothing is simulated in the meantime."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "btn btn-primary mt-4",
				children: "Open the deck"
			})
		]
	});
}
//#endregion
export { lightTimeS as A, rowRad as B, formatBaseline as C, identityPassCount as D, haversineM as E, paperIdentityChecks as F, useBook as G, sci as H, phaseToPathM as I, weakPhase as K, preregComplete as L, nodesReady as M, num as N, ionoPhaseRad as O, nyquistHz as P, registryAnchored as R, dumpPhaseSigma as S, formatSeconds as T, sigmaPhiRad as U, rss as V, useActive as W, chromatic as _, Field as a, detectionReady as b, Plate as c, SWITCHES as d, Shell as f, chainCBoundRad as g, betaNull as h, F_RATIO as i, morphology as j, lEff as k, Readout as l, baselineForLags as m, F_L1_HZ as n, NeedCampaign as o, Tag as p, F_L5_HZ as r, PREREG as s, ART as t, STEPS as u, clockIsolation as v, formatRad as w, doubleDifferenceFloor as x, clockReady as y, registryExported as z };
