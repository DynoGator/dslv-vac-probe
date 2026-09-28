import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { W as useActive, c as Plate, d as SWITCHES, f as Shell, p as Tag, t as ART } from "./chrome--h4omt2u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctrine-CeTEjsa6.js
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
					children: "Four instrument switches: 1, 2, 3, and 6. Switches 4 and 5 are withdrawn with Supplements S1 and S2. They are not calls in this book. A story about the vacuum is not a bound."
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "card p-4 text-sm text-muted",
				children: "Switches 4 and 5 from earlier drafts are not in this compilation. Numbering keeps Switch 6 so the field book and the repository do not fork."
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
							}), " Established result. GPS, IGS, the Beta law, the Holometer’s optical null. Carrier phase scales as 1/f. Delay and range scale as 1/f²."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "[I]"
							}), " Interpretive. Not required by the data. Supplement S1 is withheld from this submission."] }),
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
					caption: "Supplements S1 and S2 are withheld. They do not open or close Chain S or Chain C."
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quote a Chain C bound tighter than the maximum of the co-located non-clock floor, the isolated relative-clock term, and the baseline atmospheric differential." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Call a τ≈0 excess superluminal. Common-mode is not a channel." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Let withheld Supplement S1 ontology into the detection statistic." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Treat an E-field, barometer, or radon note as an estimator input." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Adjudicate withdrawn switches 4 or 5." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Treat a handset hash as a pre-registration without an external anchor." })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card p-4 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prior art, so a reviewer does not have to reconstruct it: the Holometer is co-located optical strain (Chou et al., Phys. Rev. Lett. 117, 111102, 2016; arXiv:1611.08265). This program is RF carrier phase across geographic baselines. Clock-network dark-matter searches look for transients in frequency. This one looks for stationary phase coherence after geodetic subtraction. A bound here is a different channel." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2",
						children: [
							"Sibling stack: the node software and the existing handset shell live in",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hit-link",
								href: "https://github.com/DynoGator/dslv-zpdi",
								children: "DynoGator/dslv-zpdi"
							}),
							", package labs.dynogator.dslvzpdi. This record is the Rev 3.6 campaign book beside that array, not a second simulator."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hit-link",
							href: "/rev-3.6-submission.pdf",
							children: "Rev 3.6 submission packet"
						})
					})
				]
			})
		]
	}) });
}
//#endregion
export { DoctrinePage as component };
