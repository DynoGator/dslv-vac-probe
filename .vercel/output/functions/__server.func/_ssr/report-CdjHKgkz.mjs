import { A as lightTimeS, B as rowRad, C as formatBaseline, E as haversineM, H as sci, N as num, T as formatSeconds, U as sigmaPhiRad, V as rss, g as chainCBoundRad, h as betaNull, m as baselineForLags, n as F_L1_HZ, v as clockIsolation, w as formatRad, x as doubleDifferenceFloor } from "./chrome--h4omt2u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-CdjHKgkz.js
var APP_ID = "DSLV-ZPDI-Probing-The-Vacuum-Structure";
function campaignFilename(name) {
	return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "campaign";
}
function pairsOf(c) {
	const out = [];
	const fd = num(c.fields.fdHz);
	for (let i = 0; i < c.nodes.length; i++) for (let j = i + 1; j < c.nodes.length; j++) {
		const A = c.nodes[i];
		const B = c.nodes[j];
		const la = num(A.lat);
		const loa = num(A.lon);
		const lb = num(B.lat);
		const lob = num(B.lon);
		const baselineM = la != null && loa != null && lb != null && lob != null ? haversineM({
			lat: la,
			lon: loa
		}, {
			lat: lb,
			lon: lob
		}) : null;
		const tauS = baselineM != null ? lightTimeS(baselineM) : null;
		const resolutionLimited = tauS != null && fd != null && fd > 0 ? !(tauS > 10 / fd) : null;
		out.push({
			a: A.name || "unnamed",
			b: B.name || "unnamed",
			baselineM,
			tauS,
			resolutionLimited
		});
	}
	return out;
}
function chainSSpan(c) {
	const lows = [];
	const highs = [];
	let catalog = false;
	for (const row of c.budget) {
		if (row.name.startsWith("Multipath") || !row.rss) continue;
		const rad = rowRad(row);
		if (rad == null) continue;
		lows.push(rad);
		highs.push(rad);
		if (row.basis !== "measured") catalog = true;
	}
	const mpLo = c.budget.find((r) => r.name.includes("low"));
	const mpHi = c.budget.find((r) => r.name.includes("high"));
	const lo = mpLo ? rowRad(mpLo) : null;
	const hi = mpHi ? rowRad(mpHi) : null;
	if (lo != null) lows.push(lo);
	if (hi != null) highs.push(hi);
	if (mpLo && lo != null && mpLo.basis !== "measured" || mpHi && hi != null && mpHi.basis !== "measured") catalog = true;
	const sdLo = lows.length ? rss(lows) : null;
	const sdHi = highs.length ? rss(highs) : null;
	return {
		sdLo,
		sdHi,
		ddLo: sdLo == null ? null : doubleDifferenceFloor(sdLo),
		ddHi: sdHi == null ? null : doubleDifferenceFloor(sdHi),
		catalog
	};
}
/** Troposphere + multipath, single difference. Not the double-difference floor and not thermal noise. */
function atmosphericSpan(c) {
	const trop = c.budget.find((r) => r.name.startsWith("Tropospheric"));
	const mpLo = c.budget.find((r) => r.name.includes("low"));
	const mpHi = c.budget.find((r) => r.name.includes("high"));
	const t = trop ? rowRad(trop) : null;
	const lo = mpLo ? rowRad(mpLo) : null;
	const hi = mpHi ? rowRad(mpHi) : null;
	const pack = (mp) => {
		const vals = [t, mp].filter((v) => v != null);
		return vals.length ? rss(vals) : null;
	};
	const catalog = [
		trop,
		mpLo,
		mpHi
	].some((r) => r && rowRad(r) != null && r.basis !== "measured");
	return {
		lo: pack(lo ?? hi),
		hi: pack(hi ?? lo),
		catalog
	};
}
function chainCQuote(c) {
	const common = num(c.fields.clockFloorRad);
	const indep = num(c.fields.indepClockRms ?? "");
	const failed = common != null && indep != null && clockIsolation(common, indep) == null;
	const isolated = !failed && common != null && indep != null ? clockIsolation(common, indep) : null;
	const span = atmosphericSpan(c);
	const bound = (atmos) => failed || common == null ? null : chainCBoundRad([
		common,
		isolated,
		atmos
	]);
	const boundLo = bound(span.lo);
	const boundHi = bound(span.hi);
	return {
		common,
		isolated,
		failed,
		atmosLo: span.lo,
		atmosHi: span.hi,
		boundLo,
		boundHi,
		quotable: !failed && boundHi != null,
		catalog: span.catalog
	};
}
function campaignMarkdown(c) {
	const lines = [];
	lines.push(`# ${c.name}`);
	lines.push("");
	lines.push(`DSLV-ZPDI field book. White paper Rev 3.6 — upper bounds on anomalous distributed carrier-phase coherence.`);
	lines.push(`Instrument switches are 1, 2, 3, and 6. Switches 4 and 5 are withdrawn with Supplements S1 and S2.`);
	lines.push(`Optional environmental covariates in the log are not estimator inputs.`);
	lines.push(`The vacuum-structure question motivates the program. It is not a claim of §§1–8.`);
	lines.push(`Operator: ${c.operator || "—"}`);
	lines.push(`Site: ${c.site || "—"}`);
	lines.push(`Opened: ${c.createdAt}`);
	lines.push(c.frozen ? `Registry: FROZEN ${c.frozen.at}${c.frozen.anchorId.trim() ? "" : " — draft, no external anchor"}` : c.amendments.length ? `Registry: OPEN — amended ${c.amendments.length} time(s) after a prior freeze` : `Registry: OPEN — not frozen`);
	if (c.frozen) {
		lines.push(`SHA-256: ${c.frozen.sha256}`);
		lines.push(c.frozen.anchorId.trim() ? `External anchor: ${c.frozen.anchorKind || "unspecified"} ${c.frozen.anchorId}` : `External anchor: none. A handset stamp is self-attested.`);
	}
	for (const a of c.amendments) lines.push(`Amendment ${a.at}: ${a.reason} (previous ${a.previousSha})`);
	lines.push("");
	lines.push("This file contains operator entries and closed-form reductions of those entries. It contains no simulated residuals.");
	lines.push("");
	lines.push("## Nodes");
	if (!c.nodes.length) lines.push("None recorded.");
	for (const n of c.nodes) {
		const sy = num(n.sigmaY);
		const phi = sy != null ? sigmaPhiRad(F_L1_HZ, 1, sy) : null;
		lines.push(`- ${n.name || "unnamed"} · GPSDO ${n.gpsdo || "—"} · σ_y(1 s)=${n.sigmaY || "—"} · σ_φ(L1, 1 s)=${formatRad(phi)} · f_loop=${n.fLoopHz || "—"} Hz · antenna ${n.antenna || "—"}`);
		if (n.lat && n.lon) lines.push(`  - fix ${n.lat}, ${n.lon} alt ${n.altM || "—"} m · ${n.fixSource || "unspecified"} · ${n.fixAt || ""} · accuracy ${n.accuracyM || "—"} m`);
		else lines.push("  - no coordinates");
	}
	lines.push("");
	lines.push("## Pairs");
	const fd = num(c.fields.fdHz);
	lines.push(fd ? `f_d = ${fd} Hz · δτ = ${formatSeconds(1 / fd)} · baselines with τ_c ≤ 10 δτ are resolution-limited.` : "f_d not registered. Resolution flags withheld.");
	for (const p of pairsOf(c)) {
		const flag = p.resolutionLimited == null ? "baseline unknown" : p.resolutionLimited ? "RESOLUTION-LIMITED for |τ|≪τ_c" : "lag test admissible if σ_sync≪τ_c";
		lines.push(`- ${p.a} — ${p.b}: ${formatBaseline(p.baselineM)} · τ_c ${formatSeconds(p.tauS)} · ${flag}`);
	}
	if (c.nodes.length < 2) lines.push("Fewer than two nodes.");
	lines.push("");
	lines.push("## Reference distances at this f_d");
	if (fd && fd > 0) for (const n of [1, 10]) lines.push(`- τ_c = ${n} δτ → ${formatBaseline(baselineForLags(fd, n))}`);
	lines.push("");
	lines.push("## Pre-registration");
	for (const [k, v] of Object.entries(c.fields)) lines.push(`- ${k}: ${v.trim() ? v : "∅"}`);
	lines.push("");
	lines.push("## Chain bounds");
	lines.push("Three columns. The predicted budget does not imply the reported bound.");
	const span = chainSSpan(c);
	const quote = chainCQuote(c);
	lines.push(`Chain S predicted double-difference floor √2·(trop+multipath RSS): ${formatRad(span.ddLo)}–${formatRad(span.ddHi)}${span.catalog ? " (catalog until replaced)" : ""}.`);
	lines.push(`Chain S measured residual floor: ${c.fields.measuredFloorS?.trim() || "∅"}`);
	lines.push(`Chain S reported bound: ${c.fields.reportedBoundS?.trim() || "∅"}`);
	lines.push(`Chain S predicted column as typed: ${c.fields.predictedS?.trim() || "∅"}`);
	if (quote.failed) lines.push("Chain C: not quotable. The common-clock run is noisier than the independent-clock run. Switch 3.");
	else if (!quote.quotable) lines.push("Chain C: not quotable — common-clock non-clock floor is missing.");
	else lines.push(`Chain C per-baseline maximum: ${formatRad(quote.boundLo)}–${formatRad(quote.boundHi)} rad. Terms: co-located floor ${formatRad(quote.common)}, isolated clock ${formatRad(quote.isolated)}, atmospheric single-difference ${formatRad(quote.atmosLo)}–${formatRad(quote.atmosHi)}${quote.catalog ? " (catalog atmosphere)" : ""}.`);
	lines.push(`Chain C predicted column as typed: ${c.fields.predictedC?.trim() || "∅"}`);
	lines.push(`Chain C measured residual floor: ${c.fields.measuredFloorC?.trim() || "∅"}`);
	lines.push(`Chain C reported bound: ${c.fields.reportedBoundC?.trim() || "∅"}`);
	lines.push("Catalog rows are the Rev 3.6 worked example. They do not imply a measured floor or a reported bound.");
	lines.push("");
	lines.push("## Budget rows");
	for (const row of c.budget) lines.push(`- [${row.basis}] ${row.name}: ${row.value} ${row.kind} → ${formatRad(rowRad(row))} · RSS ${row.rss ? "in" : "out"} · ${row.note}`);
	lines.push("");
	lines.push("## Log");
	if (!c.logs.length) lines.push("No entries.");
	for (const log of c.logs) {
		lines.push(`- ${log.at} · ${log.kind}${log.chain ? " · Chain " + log.chain : ""} · ${log.title}`);
		lines.push(`  ${log.body}`);
	}
	const L = num(c.fields.windowS);
	if (L && L > 1) {
		const b = betaNull(L);
		if (b) {
			lines.push("");
			lines.push("## Analytic null at the registered window count (not a measurement)");
			lines.push(`If someone wrongly treated each ${c.fields.windowS} s window as independent, that is a different number from L_eff.`);
			lines.push(`Beta E[γ̂]=${sci(b.eGamma)} at L=${c.fields.windowS} only if that L is the effective count.`);
		}
	}
	lines.push("");
	lines.push("A null is the expected result.");
	return lines.join("\n");
}
function download(filename, text, type) {
	const blob = new Blob([text], { type });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
//#endregion
export { chainSSpan as a, chainCQuote as i, campaignFilename as n, download as o, campaignMarkdown as r, pairsOf as s, APP_ID as t };
