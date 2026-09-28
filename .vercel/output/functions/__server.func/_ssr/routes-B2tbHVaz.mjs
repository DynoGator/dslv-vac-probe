import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as identityPassCount, G as useBook, L as preregComplete, M as nodesReady, N as num, R as registryAnchored, U as sigmaPhiRad, W as useActive, a as Field, b as detectionReady, c as Plate, f as Shell, n as F_L1_HZ, p as Tag, t as ART, u as STEPS, w as formatRad, y as clockReady } from "./chrome--h4omt2u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B2tbHVaz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Deck() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeckBody, {}) });
}
function DeckBody() {
	const campaign = useActive();
	const create = useBook((s) => s.createCampaign);
	const [name, setName] = (0, import_react.useState)("");
	const [operator, setOperator] = (0, import_react.useState)("");
	const [site, setSite] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const idn = identityPassCount();
	const step = campaign ? STEPS.find((s) => s.id === campaign.stepId) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ART.hero,
						alt: "Two geodetic antennas and a field rack in the high desert at night.",
						className: "h-64 w-full object-cover sm:h-80"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "plate-scrim absolute inset-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "Rev 3.6 · Resonant Genesis LLC"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 text-2xl font-semibold",
								children: "Upper bounds on carrier-phase coherence"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-prose text-sm text-accent",
								children: "The vacuum-structure question motivates DSLV-ZPDI. The paper reports two upper bounds. A null is the expected result."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "H_S · Chain S" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-semibold",
							children: "Sky gradient"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Between-node double difference of between-satellite single differences. Blind to isotropic site phase. The shared IGS clock residual cancels. A null here does not constrain H_C."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: "warn",
							children: "H_C · Chain C"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-semibold",
							children: "Correlated site-common differential"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Same-satellite inter-node difference. A phase identical at every antenna cancels and is unobservable. The bound is the per-baseline maximum, or it is not quoted."
						})
					]
				})]
			}),
			!campaign ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "card space-y-3 p-4",
				onSubmit: (e) => {
					e.preventDefault();
					if (!name.trim()) {
						setError("A campaign needs a name. The operator and site can stay blank, but they belong in the registry.");
						return;
					}
					setError("");
					create({
						name,
						operator,
						site
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: "Open a campaign record"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Stored on this handset only. No account, no upload, no seeded run. Catalog budget rows from the paper are labeled catalog until you replace them."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Campaign name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Penrose pair, campaign 01"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Operator",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							value: operator,
							onChange: (e) => setOperator(e.target.value),
							placeholder: "Name on the registry"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Site",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							value: site,
							onChange: (e) => setSite(e.target.value),
							placeholder: "Penrose, Fremont County"
						})
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-hot",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-primary w-full",
						type: "submit",
						children: "Create the record"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card space-y-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: campaign.frozen ? "Frozen registry" : "Open registry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: campaign.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									campaign.operator || "Operator unset",
									" · ",
									campaign.site || "Site unset"
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: registryAnchored(campaign) ? "ok" : campaign.frozen ? "warn" : "steel",
							children: registryAnchored(campaign) ? "Anchored" : campaign.frozen ? "Draft freeze" : "Unlocked"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-2 gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-elevated px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Nodes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular font-mono",
									children: campaign.nodes.length
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-elevated px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Log entries"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular font-mono",
									children: campaign.logs.length
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-elevated px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Pre-registration"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: preregComplete(campaign) ? "Fields filled" : "Incomplete" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-elevated px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Common-clock floor"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: clockReady(campaign) ? formatRad(num(campaign.fields.clockFloorRad)) : "Not measured" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							nodesReady(campaign) ? detectionReady(campaign) ? "Four nodes. Detection-grade disjoint pairs are possible." : "Roster meets the Phase 0 pair. Detection-grade Analysis A still needs four nodes." : "Roster still needs two identified nodes with measured σ_y and f_loop.",
							" ",
							"Walk is on ",
							step?.section,
							" — ",
							step?.title,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/walk",
						className: "btn btn-primary w-full",
						children: "Continue the walk"
					}),
					campaign.frozen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "break-all font-mono text-xs text-muted",
						children: [campaign.frozen.sha256, campaign.frozen.anchorId.trim() ? ` · ${campaign.frozen.anchorKind} ${campaign.frozen.anchorId}` : " · no external anchor"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1 text-sm",
						children: campaign.nodes.map((n) => {
							const sy = num(n.sigmaY);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3 border-t border-border pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.name || "Unnamed node" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular font-mono text-muted",
									children: sy == null ? "σ_y blank" : formatRad(sigmaPhiRad(F_L1_HZ, 1, sy))
								})]
							}, n.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card grid gap-3 p-4 sm:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "GrapheneOS · Pixel 9 Pro XL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-semibold",
						children: "The handset keeps the book"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Vanadium can install this as a standalone window. No Play Services. No account. The campaign book stays in on-device storage. Location, if you grant it, fills a site fix you can read before it is saved. It is not uploaded."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "The SDR, the GPSDO, and the prompt correlator stay on the DSLV-ZPDI nodes. This app does not synthesize IQ, residuals, or a detection."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ART.field,
					alt: "Handset, antenna cable, and hard hat on a flight case.",
					className: "h-40 w-full rounded-md object-cover"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card flex items-center justify-between gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Formula identity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Closed forms checked against the numbers quoted in Rev 3.6. A miss here is an app bug, not a measurement."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "tabular font-mono text-2xl text-primary",
					children: [
						idn.pass,
						"/",
						idn.total
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
				src: ART.companion,
				alt: "An RF rack in front of a closed glass door, companion studies kept out of the array.",
				caption: "Supplements S1 and S2 are withheld from the Rev 3.6 submission. They do not gate a chain."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card space-y-2 p-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Rev 3.6 submission"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hit-link",
							href: "/rev-3.6-submission.pdf",
							children: "Mission, white paper, and field-book guide"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hit-link",
							href: "/DSLV-ZPDI-Probing-The-Vacuum-Structure-GUIDE.md",
							children: "Install guide, markdown"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: [
							"Production origin",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hit-link",
								href: "https://dslv-vac-probe.grok.me",
								children: "dslv-vac-probe.grok.me"
							}),
							". A preview is a different book."
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Deck as component };
