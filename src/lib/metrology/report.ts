import type { Campaign } from "@/lib/book";
import { rowRad } from "@/lib/book";
import { formatBaseline, formatRad, formatSeconds, sci } from "@/lib/metrology/format";
import {
  F_L1_HZ,
  baselineForLags,
  betaNull,
  chainCBoundRad,
  clockIsolation,
  doubleDifferenceFloor,
  haversineM,
  lightTimeS,
  num,
  rss,
  sigmaPhiRad,
} from "@/lib/metrology/physics";

export const APP_ID = "DSLV-ZPDI-Probing-The-Vacuum-Structure";
export const APP_REV = "3.5";

export function campaignFilename(name: string): string {
  const s = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return s || "campaign";
}

export function pairsOf(c: Campaign) {
  const out: {
    a: string;
    b: string;
    baselineM: number | null;
    tauS: number | null;
    resolutionLimited: boolean | null;
  }[] = [];
  const fd = num(c.fields.fdHz);
  for (let i = 0; i < c.nodes.length; i++) {
    for (let j = i + 1; j < c.nodes.length; j++) {
      const A = c.nodes[i]!;
      const B = c.nodes[j]!;
      const la = num(A.lat);
      const loa = num(A.lon);
      const lb = num(B.lat);
      const lob = num(B.lon);
      const baselineM =
        la != null && loa != null && lb != null && lob != null
          ? haversineM({ lat: la, lon: loa }, { lat: lb, lon: lob })
          : null;
      const tauS = baselineM != null ? lightTimeS(baselineM) : null;
      const resolutionLimited =
        tauS != null && fd != null && fd > 0 ? !(tauS > 10 / fd) : null;
      out.push({
        a: A.name || "unnamed",
        b: B.name || "unnamed",
        baselineM,
        tauS,
        resolutionLimited,
      });
    }
  }
  return out;
}

export function chainSRss(c: Campaign): { measured: number | null; catalog: number | null; mixed: number | null } {
  const measured: number[] = [];
  const catalog: number[] = [];
  const mixed: number[] = [];
  for (const row of c.budget) {
    if (!row.rss) continue;
    if (row.name.startsWith("Multipath")) continue;
    const rad = rowRad(row);
    if (rad == null) continue;
    mixed.push(rad);
    if (row.basis === "measured") measured.push(rad);
    else catalog.push(rad);
  }
  const mp = c.budget.filter((r) => r.name.startsWith("Multipath") && r.rss);
  for (const row of mp) {
    const rad = rowRad(row);
    if (rad == null) continue;
    mixed.push(rad);
    if (row.basis === "measured") measured.push(rad);
    else catalog.push(rad);
  }
  return {
    measured: measured.length ? rss(measured) : null,
    catalog: catalog.length ? rss(catalog) : null,
    mixed: mixed.length ? rss(mixed) : null,
  };
}

export function chainSSpan(c: Campaign): {
  sdLo: number | null;
  sdHi: number | null;
  ddLo: number | null;
  ddHi: number | null;
  catalog: boolean;
} {
  const lows: number[] = [];
  const highs: number[] = [];
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
  if ((mpLo && lo != null && mpLo.basis !== "measured") || (mpHi && hi != null && mpHi.basis !== "measured")) {
    catalog = true;
  }
  const sdLo = lows.length ? rss(lows) : null;
  const sdHi = highs.length ? rss(highs) : null;
  return {
    sdLo,
    sdHi,
    ddLo: sdLo == null ? null : doubleDifferenceFloor(sdLo),
    ddHi: sdHi == null ? null : doubleDifferenceFloor(sdHi),
    catalog,
  };
}

/** Troposphere + multipath, single difference. Not the double-difference floor and not thermal noise. */
export function atmosphericSpan(c: Campaign): { lo: number | null; hi: number | null; catalog: boolean } {
  const trop = c.budget.find((r) => r.name.startsWith("Tropospheric"));
  const mpLo = c.budget.find((r) => r.name.includes("low"));
  const mpHi = c.budget.find((r) => r.name.includes("high"));
  const t = trop ? rowRad(trop) : null;
  const lo = mpLo ? rowRad(mpLo) : null;
  const hi = mpHi ? rowRad(mpHi) : null;
  const pack = (mp: number | null) => {
    const vals = [t, mp].filter((v): v is number => v != null);
    return vals.length ? rss(vals) : null;
  };
  const catalog = [trop, mpLo, mpHi].some((r) => r && rowRad(r) != null && r.basis !== "measured");
  return { lo: pack(lo ?? hi), hi: pack(hi ?? lo), catalog };
}

export function chainCQuote(c: Campaign): {
  common: number | null;
  isolated: number | null;
  failed: boolean;
  atmosLo: number | null;
  atmosHi: number | null;
  boundLo: number | null;
  boundHi: number | null;
  quotable: boolean;
  catalog: boolean;
} {
  const common = num(c.fields.clockFloorRad);
  const indep = num(c.fields.indepClockRms ?? "");
  const failed = common != null && indep != null && clockIsolation(common, indep) == null;
  const isolated = !failed && common != null && indep != null ? clockIsolation(common, indep) : null;
  const span = atmosphericSpan(c);
  const bound = (atmos: number | null) =>
    failed || common == null ? null : chainCBoundRad([common, isolated, atmos]);
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
    catalog: span.catalog,
  };
}

export function campaignMarkdown(c: Campaign): string {
  const lines: string[] = [];
  lines.push(`# ${c.name}`);
  lines.push("");
  lines.push(`DSLV-ZPDI field book. White paper Rev 3.5 — upper bounds on anomalous distributed carrier-phase coherence.`);
  lines.push(`The vacuum-structure question motivates the program. It is not a claim of §§1–8.`);
  lines.push(`Operator: ${c.operator || "—"}`);
  lines.push(`Site: ${c.site || "—"}`);
  lines.push(`Opened: ${c.createdAt}`);
  lines.push(
    c.frozen
      ? `Registry: FROZEN ${c.frozen.at}${c.frozen.anchorId.trim() ? "" : " — draft, no external anchor"}`
      : c.amendments.length
        ? `Registry: OPEN — amended ${c.amendments.length} time(s) after a prior freeze`
        : `Registry: OPEN — not frozen`,
  );
  if (c.frozen) {
    lines.push(`SHA-256: ${c.frozen.sha256}`);
    lines.push(
      c.frozen.anchorId.trim()
        ? `External anchor: ${c.frozen.anchorKind || "unspecified"} ${c.frozen.anchorId}`
        : `External anchor: none. A handset stamp is self-attested.`,
    );
  }
  for (const a of c.amendments) {
    lines.push(`Amendment ${a.at}: ${a.reason} (previous ${a.previousSha})`);
  }
  lines.push("");
  lines.push("This file contains operator entries and closed-form reductions of those entries. It contains no simulated residuals.");
  lines.push("");
  lines.push("## Nodes");
  if (!c.nodes.length) lines.push("None recorded.");
  for (const n of c.nodes) {
    const sy = num(n.sigmaY);
    const phi = sy != null ? sigmaPhiRad(F_L1_HZ, 1, sy) : null;
    lines.push(
      `- ${n.name || "unnamed"} · GPSDO ${n.gpsdo || "—"} · σ_y(1 s)=${n.sigmaY || "—"} · σ_φ(L1, 1 s)=${formatRad(phi)} · f_loop=${n.fLoopHz || "—"} Hz · antenna ${n.antenna || "—"}`,
    );
    if (n.lat && n.lon) {
      lines.push(
        `  - fix ${n.lat}, ${n.lon} alt ${n.altM || "—"} m · ${n.fixSource || "unspecified"} · ${n.fixAt || ""} · accuracy ${n.accuracyM || "—"} m`,
      );
    } else {
      lines.push("  - no coordinates");
    }
  }
  lines.push("");
  lines.push("## Pairs");
  const fd = num(c.fields.fdHz);
  lines.push(fd ? `f_d = ${fd} Hz · δτ = ${formatSeconds(1 / fd)} · baselines with τ_c ≤ 10 δτ are resolution-limited.` : "f_d not registered. Resolution flags withheld.");
  for (const p of pairsOf(c)) {
    const flag =
      p.resolutionLimited == null ? "baseline unknown" : p.resolutionLimited ? "RESOLUTION-LIMITED for |τ|≪τ_c" : "lag test admissible if σ_sync≪τ_c";
    lines.push(`- ${p.a} — ${p.b}: ${formatBaseline(p.baselineM)} · τ_c ${formatSeconds(p.tauS)} · ${flag}`);
  }
  if (c.nodes.length < 2) lines.push("Fewer than two nodes.");
  lines.push("");
  lines.push("## Reference distances at this f_d");
  if (fd && fd > 0) {
    for (const n of [1, 10]) {
      lines.push(`- τ_c = ${n} δτ → ${formatBaseline(baselineForLags(fd, n))}`);
    }
  }
  lines.push("");
  lines.push("## Pre-registration");
  for (const [k, v] of Object.entries(c.fields)) {
    lines.push(`- ${k}: ${v.trim() ? v : "∅"}`);
  }
  lines.push("");
  lines.push("## Chain bounds");
  lines.push("Three columns. The predicted budget does not imply the reported bound.");
  const span = chainSSpan(c);
  const quote = chainCQuote(c);
  lines.push(
    `Chain S predicted double-difference floor √2·(trop+multipath RSS): ${formatRad(span.ddLo)}–${formatRad(span.ddHi)}${span.catalog ? " (catalog until replaced)" : ""}.`,
  );
  lines.push(`Chain S measured residual floor: ${c.fields.measuredFloorS?.trim() || "∅"}`);
  lines.push(`Chain S reported bound: ${c.fields.reportedBoundS?.trim() || "∅"}`);
  lines.push(`Chain S predicted column as typed: ${c.fields.predictedS?.trim() || "∅"}`);
  if (quote.failed) {
    lines.push("Chain C: not quotable. The common-clock run is noisier than the independent-clock run. Switch 3.");
  } else if (!quote.quotable) {
    lines.push("Chain C: not quotable — common-clock non-clock floor is missing.");
  } else {
    lines.push(
      `Chain C per-baseline maximum: ${formatRad(quote.boundLo)}–${formatRad(quote.boundHi)} rad. Terms: co-located floor ${formatRad(quote.common)}, isolated clock ${formatRad(quote.isolated)}, atmospheric single-difference ${formatRad(quote.atmosLo)}–${formatRad(quote.atmosHi)}${quote.catalog ? " (catalog atmosphere)" : ""}.`,
    );
  }
  lines.push(`Chain C predicted column as typed: ${c.fields.predictedC?.trim() || "∅"}`);
  lines.push(`Chain C measured residual floor: ${c.fields.measuredFloorC?.trim() || "∅"}`);
  lines.push(`Chain C reported bound: ${c.fields.reportedBoundC?.trim() || "∅"}`);
  lines.push("Catalog rows are the worked example, not this campaign's measurement.");
  lines.push("");
  lines.push("## Budget rows");
  for (const row of c.budget) {
    lines.push(
      `- [${row.basis}] ${row.name}: ${row.value} ${row.kind} → ${formatRad(rowRad(row))} · RSS ${row.rss ? "in" : "out"} · ${row.note}`,
    );
  }
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

export function download(filename: string, text: string, type: string) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
