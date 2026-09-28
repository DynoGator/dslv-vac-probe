import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Plate, d as SWITCHES, f as Shell, p as Tag, t as ART, z as useActive } from "./chrome-C6pvSZO-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctrine-Q6GOofA2.js
var import_jsx_runtime = require_jsx_runtime();
function DoctrinePage() {
	const calls = useActive()?.logs.filter((l) => l.kind === "switch") ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "§7 · firewall"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					children: "Kill switches"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Instrument switches only. Nothing in the appendices is required to run the array, and a story about the vacuum is not a bound."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
				src: ART.null,
				alt: "A straight null fringe on a dark optical table.",
				caption: "Systematics-limited describes the bound, not a failure."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: SWITCHES.map((s) => {
					const latest = calls.find((l) => l.title.startsWith(`Switch ${s.n}`));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, { children: ["Switch ", s.n] }), latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
									tone: "warn",
									children: latest.title.replace(`Switch ${s.n} · `, "")
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
									tone: "steel",
									children: "No call"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: s.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-subtle",
									children: "Blast radius. "
								}), s.blast]
							})
						]
					}, s.n);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card space-y-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						tone: "steel",
						children: "[E] · [I] · [H]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: "How to read a sentence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "[E]"
							}), " Established result. GPS, IGS, the Beta law, the Holometer’s optical null, the ionospheric 1/f² delay."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "[I]"
							}), " Interpretive. Not required by the data. Appendix A."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "[H]"
							}), " This program’s hypothesis. Contingent. Kill-switched. H_S and H_C are the only two that the array is built to bound."] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
					src: ART.companion,
					alt: "Companion studies kept behind a closed laboratory door, the RF rack in front.",
					caption: "Appendix B. Gated separately. Aqueous, somatic, and Schumann work does not open or close Chain C."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "What this handset will not do"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-2 list-disc space-y-1 pl-5 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Invent a residual, a γ̂, or a lag." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Treat a GPS fix as carrier phase." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quote a Chain C bound tighter than the common-clock floor you typed." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Call a τ≈0 excess superluminal. Common-mode is not a channel." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Let Appendix A’s ontology into the detection statistic." })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card p-4 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prior art, so a reviewer does not have to reconstruct it: the Holometer is co-located optical strain (Chou et al., Phys. Rev. Lett. 117, 111102, 2016; arXiv:1611.08265). This program is RF carrier phase across geographic baselines. Clock-network dark-matter searches look for transients in frequency. This one looks for stationary phase coherence after geodetic subtraction. A bound here is a different channel." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: "Sibling stack: the node software and the existing handset shell live in DynoGator/dslv-zpdi, package labs.dynogator.dslvzpdi. This record is the Rev 3.4 campaign book beside that array, not a second simulator."
				})]
			})
		]
	}) });
}
//#endregion
export { DoctrinePage as component };
