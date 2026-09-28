import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as formatBaseline, G as useBook, H as sci, L as preregComplete, M as nodesReady, N as num, R as registryAnchored, T as formatSeconds, U as sigmaPhiRad, W as useActive, _ as chromatic, a as Field, b as detectionReady, c as Plate, f as Shell, h as betaNull, j as morphology, k as lEff, l as Readout, n as F_L1_HZ, o as NeedCampaign, p as Tag, s as PREREG, u as STEPS, v as clockIsolation, w as formatRad, y as clockReady, z as registryExported } from "./chrome--h4omt2u.mjs";
import { i as chainCQuote, n as campaignFilename, o as download, r as campaignMarkdown, s as pairsOf, t as APP_ID } from "./report-CdjHKgkz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/walk-B31Seez9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WalkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkBody, {}) });
}
function gate(stepId, c) {
	if (stepId === "hypotheses" || stepId === "path" || stepId === "resolution") return c.acked.includes(stepId) ? null : "Acknowledge the step before leaving it.";
	if (stepId === "nodes") return nodesReady(c) ? null : "Two identified nodes for Phase 0. Each needs a name, GPSDO, σ_y, and f_loop. Four nodes are required before a detection claim.";
	if (stepId === "prereg") return preregComplete(c) ? null : "The registry fields above the clock floor and bias hash are still blank.";
	if (stepId === "clock") return clockReady(c) ? null : "Enter the measured non-clock floor and the bias-file hash.";
	if (stepId === "inject") return c.logs.some((l) => l.kind === "injection") ? null : "Log an injection — recovered, missed, or still sealed.";
	if (stepId === "freeze") {
		if (!c.frozen) return "Hash the registry. A missing digest is not a pre-registration.";
		if (!registryAnchored(c)) return "Record the external anchor ID beside the digest. A handset stamp alone is a draft.";
		if (!registryExported(c)) return "Export the campaign JSON after the anchor ID is recorded.";
		return null;
	}
	if (stepId === "analysis-a" || stepId === "analysis-b" || stepId === "chromatic" || stepId === "switches") {
		if (!registryAnchored(c)) return "Science waits on a frozen registry and an external anchor. Without the anchor this is a draft.";
		return c.acked.includes(stepId) ? null : "Acknowledge the step. An empty log is allowed. A silent skip is not.";
	}
	return null;
}
function WalkBody() {
	const c = useActive();
	const setStep = useBook((s) => s.setStep);
	const ack = useBook((s) => s.ack);
	if (!c) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeedCampaign, {});
	const index = Math.max(0, STEPS.findIndex((s) => s.id === c.stepId));
	const step = STEPS[index];
	const reason = gate(step.id, c);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "kicker",
					children: [
						"Step ",
						index + 1,
						" / ",
						STEPS.length,
						" · ",
						step.section
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
					tone: registryAnchored(c) ? "ok" : c.frozen ? "warn" : "steel",
					children: registryAnchored(c) ? "Anchored" : c.frozen ? "Draft freeze" : "Registry open"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1",
				children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": s.title,
					className: `step-jump ${i === index ? "step-jump-on" : i < index ? "step-jump-done" : ""}`,
					onClick: () => setStep(c.id, s.id)
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
				src: step.image,
				alt: step.imageAlt,
				caption: step.caption
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: step.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-2 text-sm text-muted",
				children: step.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-ghost flex-1",
					disabled: index === 0,
					onClick: () => setStep(c.id, STEPS[index - 1].id),
					children: "Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-primary flex-1",
					disabled: index === STEPS.length - 1 || !!reason,
					onClick: () => {
						ack(c.id, step.id);
						setStep(c.id, STEPS[index + 1].id);
					},
					children: "Next"
				})]
			}),
			reason ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: reason
			}) : null
		]
	});
}
function StepPanel() {
	const c = useActive();
	if (!c) return null;
	switch (c.stepId) {
		case "hypotheses":
		case "path":
		case "resolution":
		case "analysis-a":
		case "analysis-b":
		case "chromatic":
		case "switches": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AckAndExtra, {});
		case "nodes": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nodes, {});
		case "prereg": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prereg, {});
		case "clock": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClockStep, {});
		case "inject": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InjectStep, {});
		case "freeze": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FreezeStep, {});
		case "release": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReleaseStep, {});
		default: return null;
	}
}
function AckAndExtra() {
	const c = useActive();
	const ack = useBook((s) => s.ack);
	const on = c.acked.includes(c.stepId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			c.stepId === "resolution" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResolutionList, {}) : null,
			c.stepId === "analysis-a" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisA, {}) : null,
			c.stepId === "analysis-b" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisB, {}) : null,
			c.stepId === "chromatic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChromaticStep, {}) : null,
			c.stepId === "switches" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchStep, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "card flex items-start gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "mt-1 h-5 w-5",
					checked: on,
					onChange: () => {
						if (!on) ack(c.id, c.stepId);
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: "I have read this step against the paper. Leaving it blank is not the same as a null result."
				})]
			})
		]
	});
}
function Nodes() {
	const c = useActive();
	const addNode = useBook((s) => s.addNode);
	const updateNode = useBook((s) => s.updateNode);
	const removeNode = useBook((s) => s.removeNode);
	const [err, setErr] = (0, import_react.useState)("");
	function capture(node) {
		setErr("");
		if (!navigator.geolocation) {
			setErr("This browser has no geolocation. Type a surveyed coordinate.");
			return;
		}
		navigator.geolocation.getCurrentPosition((pos) => {
			if (!updateNode(c.id, node.id, {
				lat: pos.coords.latitude.toFixed(7),
				lon: pos.coords.longitude.toFixed(7),
				altM: pos.coords.altitude == null ? "" : pos.coords.altitude.toFixed(1),
				accuracyM: pos.coords.accuracy.toFixed(1),
				fixSource: "device",
				fixAt: new Date(pos.timestamp).toISOString()
			})) setErr("The registry is frozen. Amend it before editing nodes.");
		}, (e) => setErr(e.message || "Location denied. Nothing was invented."), {
			enableHighAccuracy: true,
			timeout: 2e4,
			maximumAge: 0
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			c.frozen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: "Nodes are locked with the registry."
			}) : null,
			c.nodes.map((n, i) => {
				const sy = num(n.sigmaY);
				const phi = sy == null ? null : sigmaPhiRad(F_L1_HZ, 1, sy);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "card space-y-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
							className: "px-1 text-sm font-semibold",
							children: ["Node ", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										disabled: !!c.frozen,
										value: n.name,
										onChange: (e) => updateNode(c.id, n.id, { name: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "GPSDO identity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										disabled: !!c.frozen,
										value: n.gpsdo,
										onChange: (e) => updateNode(c.id, n.id, { gpsdo: e.target.value }),
										placeholder: "LBE-1421 serial"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Measured σ_y at 1 s",
									hint: "Unitless Allan deviation. 1e-12 is the paper's mid-grade example, not your unit.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field font-mono",
										disabled: !!c.frozen,
										value: n.sigmaY,
										onChange: (e) => updateNode(c.id, n.id, { sigmaY: e.target.value }),
										placeholder: "1e-12"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Steering loop f_loop (Hz)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field font-mono",
										disabled: !!c.frozen,
										value: n.fLoopHz,
										onChange: (e) => updateNode(c.id, n.id, { fLoopHz: e.target.value }),
										placeholder: "0.01"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Antenna",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								disabled: !!c.frozen,
								value: n.antenna,
								onChange: (e) => updateNode(c.id, n.id, { antenna: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Latitude",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field font-mono",
									disabled: !!c.frozen,
									value: n.lat,
									onChange: (e) => updateNode(c.id, n.id, {
										lat: e.target.value,
										fixSource: "surveyed"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Longitude",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field font-mono",
									disabled: !!c.frozen,
									value: n.lon,
									onChange: (e) => updateNode(c.id, n.id, {
										lon: e.target.value,
										fixSource: "surveyed"
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
							label: "σ_φ at L1, τ = 1 s",
							value: formatRad(phi),
							hint: "2π f τ σ_y. Chain S cancels this clock. Chain C does not."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-ghost flex-1",
								disabled: !!c.frozen,
								onClick: () => capture(n),
								children: "Capture a device fix"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-hot",
								disabled: !!c.frozen,
								onClick: () => removeNode(c.id, n.id),
								children: "Remove"
							})]
						}),
						n.fixSource ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								n.fixSource,
								" · accuracy ",
								n.accuracyM || "—",
								" m · ",
								n.fixAt || "time unset"
							]
						}) : null
					]
				}, n.id);
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-hot",
				children: err
			}) : null,
			c.nodes.length > 0 && c.nodes.length < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-warn",
				children: [
					c.nodes.length,
					" node",
					c.nodes.length === 1 ? "" : "s",
					". Phase 0 can validate one pair. Detection-grade Analysis A needs four nodes and two disjoint pairs."
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				disabled: !!c.frozen,
				onClick: () => addNode(c.id),
				children: "Add a node"
			})
		]
	});
}
function Prereg() {
	const c = useActive();
	const setField = useBook((s) => s.setField);
	const [locked, setLocked] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [PREREG.filter((f) => f.id !== "clockFloorRad" && f.id !== "biasHash").map((f) => {
			const long = [
				"allanNote",
				"transfer",
				"openPlan",
				"holdout",
				"slideCount",
				"gkm",
				"fdr",
				"namedInputs",
				"wipeoff",
				"phase0",
				"calibTransfer",
				"blindCount"
			].includes(f.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: f.label,
				hint: f.hint,
				children: long ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field textarea",
					disabled: !!c.frozen,
					placeholder: f.placeholder,
					value: c.fields[f.id] ?? "",
					onChange: (e) => {
						const ok = setField(c.id, f.id, e.target.value);
						setLocked(!ok);
					}
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					disabled: !!c.frozen,
					placeholder: f.placeholder,
					value: c.fields[f.id] ?? "",
					onChange: (e) => {
						const ok = setField(c.id, f.id, e.target.value);
						setLocked(!ok);
					}
				})
			}, f.id);
		}), locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-warn",
			children: "Frozen. Amend the registry to edit these fields."
		}) : null]
	});
}
function exportMilestone(c, milestone) {
	const digest = c.frozen?.sha256 ?? "unfrozen";
	const anchor = c.frozen?.anchorId.trim() ?? "";
	useBook.getState().addLog(c.id, {
		kind: "export",
		title: `Milestone export · ${milestone}`,
		body: `${milestone}. SHA-256 ${digest}. Anchor ${anchor || "∅"}.`
	});
	const next = useBook.getState().campaigns.find((x) => x.id === c.id) ?? c;
	download(`${campaignFilename(next.name)}.json`, JSON.stringify({
		app: APP_ID,
		rev: "3.6",
		campaign: next
	}, null, 2), "application/json");
}
function ClockStep() {
	const c = useActive();
	const setField = useBook((s) => s.setField);
	const addLog = useBook((s) => s.addLog);
	const common = num(c.fields.clockFloorRad);
	const indep = num(c.fields.indepClockRms ?? "");
	const iso = common != null && indep != null ? clockIsolation(common, indep) : null;
	const quote = chainCQuote(c);
	const [note, setNote] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Common-clock residual RMS (rad)",
				hint: "Co-located non-clock floor for this hardware and site. One term of the Chain C maximum.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					disabled: !!c.frozen,
					value: c.fields.clockFloorRad ?? "",
					onChange: (e) => setField(c.id, "clockFloorRad", e.target.value),
					placeholder: "measured"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Independent-clock co-located RMS (rad)",
				hint: "Site-common plus relative clock. Blank stays blank. A noisier common-clock run is Switch 3.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					disabled: !!c.frozen,
					value: c.fields.indepClockRms ?? "",
					onChange: (e) => setField(c.id, "indepClockRms", e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Inter-channel bias file hash",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					disabled: !!c.frozen,
					value: c.fields.biasHash ?? "",
					onChange: (e) => setField(c.id, "biasHash", e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
					label: "Isolated clock term",
					value: common != null && indep != null && iso == null ? "failed" : formatRad(iso),
					hint: "√(σ²_indep − σ²_common). Failed means the common-clock run is noisier. Do not quote a Chain C bound."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
					label: "Chain C maximum",
					value: quote.failed ? "not quotable" : quote.boundHi == null ? "unbounded" : `${formatRad(quote.boundLo)} – ${formatRad(quote.boundHi)}`,
					hint: "Max of the co-located floor, the isolated clock, and the troposphere-plus-multipath single difference. Catalog atmosphere stays labeled until replaced. Never quote tighter."
				})]
			}),
			indep == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: "Independent-clock RMS is blank. The maximum omits the isolated clock term until you enter it."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "The run measures front-end and splitter phase, inter-channel bias, thermal drift in the calibration environment, and co-located multipath. It does not reproduce far-site troposphere, far-site multipath, or independent GPSDO drift. Add repeat-run drift in quadrature. A spot check outside the frozen tolerance is Switch 3."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "What the run actually did",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field textarea",
					value: note,
					onChange: (e) => setNote(e.target.value),
					placeholder: "Predicted-null pass or fail, in your words."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				onClick: () => {
					if (common == null) {
						setMsg("No floor entered. The log was not written.");
						return;
					}
					addLog(c.id, {
						kind: "calibration",
						chain: "C",
						title: iso == null && indep != null ? "Common-clock run — decomposition failed" : "Common-clock calibration",
						body: `${note || "No narrative."} Floor ${common} rad. Independent ${indep ?? "∅"}. Isolation ${iso ?? "failed"}. Bias ${c.fields.biasHash || "∅"}. Chain C maximum ${quote.failed ? "not quotable" : quote.boundHi == null ? "unbounded" : quote.boundHi + " rad"}.`
					});
					setNote("");
					exportMilestone(c, "calibration-append");
					setMsg("Calibration appended. Campaign JSON download started. Move it off the handset.");
				},
				children: "Append the calibration and export JSON"
			}),
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			}) : null
		]
	});
}
function InjectStep() {
	const c = useActive();
	const addLog = useBook((s) => s.addLog);
	const [sealed, setSealed] = (0, import_react.useState)(false);
	const [chain, setChain] = (0, import_react.useState)("C");
	const [klass, setKlass] = (0, import_react.useState)("H_C isotropic");
	const [amp, setAmp] = (0, import_react.useState)("");
	const [lag, setLag] = (0, import_react.useState)("");
	const [recovered, setRecovered] = (0, import_react.useState)("recovered");
	const [msg, setMsg] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card space-y-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "h-5 w-5",
					checked: sealed,
					onChange: (e) => setSealed(e.target.checked)
				}), "Still sealed — do not type the amplitude"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Chain class",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "select",
					value: klass,
					onChange: (e) => setKlass(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "H_C isotropic" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "H_S direction-differential" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Where it was recovered",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "select",
					value: chain,
					onChange: (e) => setChain(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "C",
						children: "Chain C"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "S",
						children: "Chain S"
					})]
				})
			}),
			!sealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Amplitude (rad)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: amp,
						onChange: (e) => setAmp(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Lag (s)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: lag,
						onChange: (e) => setLag(e.target.value)
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Outcome",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "select",
					value: recovered,
					onChange: (e) => setRecovered(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "recovered",
							children: "Recovered inside tolerance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "missed",
							children: "Not recovered — Switch 3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "sealed",
							children: "Sealed, not yet opened"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				onClick: () => {
					addLog(c.id, {
						kind: "injection",
						chain,
						title: sealed ? `Blind injection sealed (${klass})` : `Injection ${recovered} (${klass})`,
						body: sealed ? "Seed not recorded. Holder and count live in the registry, not here." : `Amplitude ${amp || "∅"} rad. Lag ${lag || "∅"} s. Outcome ${recovered}. Recovered on Chain ${chain}.`
					});
					setMsg("Injection appended.");
					setAmp("");
					setLag("");
				},
				children: "Append injection"
			}),
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			}) : null
		]
	});
}
function ResolutionList() {
	const c = useActive();
	const pairs = pairsOf(c);
	const fd = num(c.fields.fdHz);
	if (!pairs.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-warn",
		children: "No pairs yet. Add two nodes."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2",
		children: pairs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "card p-3 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-semibold",
					children: [
						p.a,
						" — ",
						p.b
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "tabular mt-1 font-mono text-muted",
					children: [
						formatBaseline(p.baselineM),
						" · τ_c ",
						formatSeconds(p.tauS),
						fd ? ` · δτ ${formatSeconds(1 / fd)}` : " · f_d unset"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted",
					children: p.baselineM == null ? "No coordinates. No lag claim." : p.resolutionLimited ? "Resolution-limited for |τ| ≪ τ_c. Analysis A only." : "Light time clears 10 dump samples. σ_sync still has to."
				})
			]
		}, p.a + p.b))
	});
}
function FreezeStep() {
	const c = useActive();
	const freeze = useBook((s) => s.freeze);
	const amend = useBook((s) => s.amend);
	const setAnchor = useBook((s) => s.setAnchor);
	const [reason, setReason] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)("osf");
	const [anchorId, setAnchorId] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const ready = preregComplete(c) && nodesReady(c) && clockReady(c);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card space-y-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-1 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
						ok: nodesReady(c),
						text: "Two identified nodes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
						ok: preregComplete(c),
						text: "Pre-registration fields filled"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
						ok: clockReady(c),
						text: "Common-clock floor and bias hash"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
						ok: !!c.frozen,
						text: "SHA-256 of the canonical registry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
						ok: registryAnchored(c),
						text: "External anchor ID, stored beside the digest"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
						ok: registryExported(c),
						text: "JSON exported after that anchor"
					})
				]
			}),
			c.frozen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "break-all font-mono text-xs text-primary",
					children: c.frozen.sha256
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						"Handset stamp ",
						c.frozen.at,
						". Self-attested until an external anchor exists."
					]
				}),
				c.frozen.anchorId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm",
					children: [
						"Anchor ",
						c.frozen.anchorKind || "unspecified",
						": ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "break-all font-mono",
							children: c.frozen.anchorId
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-warn",
					children: "No external anchor. This freeze is a draft, not a pre-registration."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Anchor kind",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "select",
						value: kind,
						onChange: (e) => setKind(e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "osf",
								children: "OSF preregistration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "git",
								children: "Signed git tag in DynoGator/dslv-zpdi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "ots",
								children: "OpenTimestamps"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "rfc3161",
								children: "RFC-3161 timestamp"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Anchor transaction ID",
					hint: "Paste the OSF, git, or timestamp ID. Do not invent one. It is not hashed into the digest.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: anchorId,
						onChange: (e) => setAnchorId(e.target.value),
						placeholder: "transaction id"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-primary w-full",
					disabled: !anchorId.trim(),
					onClick: () => {
						const ok = setAnchor(c.id, kind, anchorId);
						setMsg(ok ? "Anchor recorded beside the digest. Export the JSON before science entries." : "Anchor refused.");
						if (ok) setAnchorId("");
					},
					children: "Record the anchor ID"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-ghost w-full",
					disabled: !registryAnchored(c),
					onClick: () => {
						const current = useBook.getState().campaigns.find((x) => x.id === c.id);
						if (!current) return;
						exportMilestone(current, "registry-freeze");
						setMsg("Campaign JSON download started. Move it off the handset.");
					},
					children: "Export JSON"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Amendment reason",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "field textarea",
						value: reason,
						onChange: (e) => setReason(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-hot w-full",
					disabled: !reason.trim(),
					onClick: () => {
						amend(c.id, reason);
						setReason("");
						setMsg("Lock cleared. The previous digest stays in the book. Re-freeze, anchor again, and export before science entries.");
					},
					children: "Amend and unlock"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				disabled: !ready,
				onClick: async () => {
					const digest = await freeze(c.id);
					setMsg(digest ? `Frozen ${digest.slice(0, 16)}… Anchor it, then export. The handset time is not the pre-registration.` : "Freeze refused. A required field is empty.");
				},
				children: "Freeze and hash"
			}),
			c.amendments.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1 text-xs text-warn",
				children: c.amendments.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					a.at,
					": ",
					a.reason
				] }, a.at))
			}) : null,
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			}) : null
		]
	});
}
function Li({ ok, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: ok ? "text-ok" : "text-muted",
		children: [
			ok ? "Ready" : "Open",
			" — ",
			text
		]
	});
}
function AnalysisA() {
	const c = useActive();
	const addLog = useBook((s) => s.addLog);
	const [chain, setChain] = (0, import_react.useState)("S");
	const [gamma, setGamma] = (0, import_react.useState)("");
	const [tDur, setTDur] = (0, import_react.useState)("");
	const [tau, setTau] = (0, import_react.useState)("");
	const [call, setCall] = (0, import_react.useState)("consistent-with-null");
	const [msg, setMsg] = (0, import_react.useState)("");
	const L = lEff(num(tDur) ?? NaN, num(tau) ?? NaN);
	const law = L != null ? betaNull(L) : null;
	const g = num(gamma);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card space-y-3 p-4",
		children: [
			!registryAnchored(c) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: "You can draft the arithmetic. The log waits until the registry is frozen and externally anchored."
			}) : null,
			!detectionReady(c) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: "Fewer than four nodes. This step can record a Phase 0 floor. It cannot record a detection."
			}) : null,
			!c.logs.some((l) => l.kind === "injection" && l.title.includes("recovered")) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: "No recovered injection is in the book. Switch 3 is live for any claim."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "Named inputs",
				value: c.fields.namedInputs?.trim() ? "in the registry" : "blank",
				hint: c.fields.namedInputs?.trim() || "Chain S needs two disjoint double-difference series. Chain C needs two disjoint same-satellite inter-node series."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Chain",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "select",
					value: chain,
					onChange: (e) => setChain(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "S",
						children: "Chain S · H_S"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "C",
						children: "Chain C · H_C"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Measured γ̂",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field font-mono",
							value: gamma,
							onChange: (e) => setGamma(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Duration T (s)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field font-mono",
							value: tDur,
							onChange: (e) => setTDur(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "τ_corr (s)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field font-mono",
							value: tau,
							onChange: (e) => setTau(e.target.value)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
						label: "L_eff",
						value: L == null ? "—" : sci(L, 4),
						hint: "T / τ_corr"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
						label: "E[γ̂] null",
						value: law ? sci(law.eGamma) : "—",
						hint: "1/L_eff"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
						label: "γ̂ / E[γ̂]",
						value: law && g != null ? sci(g / law.eGamma) : "—",
						hint: "Not a detection threshold."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Operator call",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "select",
					value: call,
					onChange: (e) => setCall(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "consistent-with-null",
							children: "Consistent with the null"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "excess-hold",
							children: "Excess — hold for switches"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "no-measurement",
							children: "No measurement this session"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				disabled: !registryAnchored(c),
				onClick: () => {
					if (call === "excess-hold" && !detectionReady(c)) {
						setMsg("Detection refused. Four nodes and two disjoint pairs are the minimum. Log a floor or no-measurement.");
						return;
					}
					addLog(c.id, {
						kind: "analysis-a",
						chain,
						title: `Analysis A · Chain ${chain} · ${call}`,
						body: `Named inputs: ${c.fields.namedInputs?.trim() || "∅"}. γ̂ ${gamma || "∅"}. T ${tDur || "∅"} s. τ_corr ${tau || "∅"} s. L_eff ${L ?? "∅"}. E[γ] ${law ? law.eGamma : "∅"}. Phase ${detectionReady(c) ? "detection-grade roster" : "Phase 0"}.`
					});
					setMsg("Analysis A appended. The residual itself was not generated here.");
				},
				children: "Append Analysis A"
			}),
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			}) : null
		]
	});
}
function AnalysisB() {
	const c = useActive();
	const addLog = useBook((s) => s.addLog);
	const pairs = pairsOf(c);
	const [pair, setPair] = (0, import_react.useState)(0);
	const [chain, setChain] = (0, import_react.useState)("S");
	const [tau, setTau] = (0, import_react.useState)("");
	const [sync, setSync] = (0, import_react.useState)("");
	const [flags, setFlags] = (0, import_react.useState)({
		colocated: false,
		alsoOnSeparated: false,
		catalogMultipath: false,
		vanishesWithIgs: false,
		commonClockExcludesHardware: false,
		delayClass: false
	});
	const [msg, setMsg] = (0, import_react.useState)("");
	const chosen = pairs[pair];
	const fd = num(c.fields.fdHz);
	const result = chosen?.baselineM != null && fd != null && num(tau) != null && num(sync) != null ? morphology({
		tauS: num(tau),
		baselineM: chosen.baselineM,
		fdHz: fd,
		sigmaSyncS: num(sync),
		chain,
		...flags
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card space-y-3 p-4",
		children: [
			!pairs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: "No surveyed pair. Classification withheld."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Pair",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: "select",
					value: pair,
					onChange: (e) => setPair(Number(e.target.value)),
					children: pairs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: i,
						children: [
							p.a,
							" — ",
							p.b,
							" (",
							formatBaseline(p.baselineM),
							")"
						]
					}, p.a + p.b))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Chain",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "select",
					value: chain,
					onChange: (e) => setChain(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "S",
						children: "Chain S"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "C",
						children: "Chain C"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Peak lag τ (s)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: tau,
						onChange: (e) => setTau(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "σ_sync (s)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: sync,
						onChange: (e) => setSync(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 text-sm sm:grid-cols-2",
				children: [
					["colocated", "Also on the co-located pair"],
					["alsoOnSeparated", "Also on a separated pair"],
					["catalogMultipath", "Matches catalogued multipath"],
					["vanishesWithIgs", "Vanishes when IGS / iono applied"],
					["commonClockExcludesHardware", "Common-clock run excluded hardware"],
					["delayClass", "Switch 2 delay class already passed"]
				].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "h-5 w-5",
						checked: flags[key],
						onChange: (e) => setFlags({
							...flags,
							[key]: e.target.checked
						})
					}), label]
				}, key))
			}),
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-border bg-elevated p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						tone: result.code === "chain-c-candidate" ? "warn" : "sage",
						children: result.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-semibold",
						children: result.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: result.detail
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Enter a surveyed pair, f_d in the registry, a lag, and σ_sync."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				disabled: !registryAnchored(c) || !result,
				onClick: () => {
					if (!result || !chosen) return;
					addLog(c.id, {
						kind: "analysis-b",
						chain,
						title: `Analysis B · ${result.code}`,
						body: `${chosen.a}—${chosen.b}. ${result.title}. ${result.detail}`
					});
					setMsg("Lag classification appended.");
				},
				children: "Append the classification"
			}),
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			}) : null
		]
	});
}
function ChromaticStep() {
	const c = useActive();
	const addLog = useBook((s) => s.addLog);
	const [p1, setP1] = (0, import_react.useState)("");
	const [p2, setP2] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const tol = num(c.fields.switch2tol) ?? .05;
	const hit = num(p1) != null && num(p2) != null ? chromatic(num(p1), num(p2), tol) : null;
	const label = hit?.klass === "delay" ? "Delay class — necessary, not sufficient. Troposphere, multipath, and clock are also delay-class." : hit?.klass === "iono" ? "Ionospheric class — back to the null" : hit?.klass === "offset" ? "Phase-offset class — instrumental" : hit ? "No class inside tolerance" : "—";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card space-y-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Tolerance from the registry: ",
					sci(tol),
					". Uncombined radians or cycles, both the same unit. A delay-class pass rejects ionosphere and a digital artifact. It is not evidence of anomalous coherence. Switch 2 cannot fire on a null."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "φ₁ (L1)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: p1,
						onChange: (e) => setP1(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "φ₂ (L5)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: p2,
						onChange: (e) => setP2(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "φ₁/φ₂",
				value: hit ? sci(hit.ratio, 4) : "—",
				hint: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				disabled: !registryAnchored(c) || !hit,
				onClick: () => {
					if (!hit) return;
					const a = num(p1);
					const b = num(p2);
					if (a != null && b != null && Math.abs(a) < 1e-4 && Math.abs(b) < 1e-4) {
						setMsg("Switch 2 cannot fire on a null. Both entries are consistent with zero.");
						return;
					}
					addLog(c.id, {
						kind: "chromatic",
						title: `Switch 2 · ${hit.klass}`,
						body: `φ1 ${p1}, φ2 ${p2}, ratio ${hit.ratio}, nearest ${hit.klass} (target ${hit.target}), relative error ${hit.relErr}. Tolerance ${tol}.`
					});
					setMsg("Chromatic call appended.");
				},
				children: "Append Switch 2"
			}),
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			}) : null
		]
	});
}
function SwitchStep() {
	const c = useActive();
	const addLog = useBook((s) => s.addLog);
	const [n, setN] = (0, import_react.useState)("1");
	const [status, setStatus] = (0, import_react.useState)("null-holds");
	const [note, setNote] = (0, import_react.useState)("");
	const [spot, setSpot] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card space-y-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Switch",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "select",
					value: n,
					onChange: (e) => setN(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "1",
							children: "1 Array residual"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "2",
							children: "2 Chromaticity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "3",
							children: "3 Pipeline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "6",
							children: "6 Simultaneity"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Call",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "select",
					value: status,
					onChange: (e) => setStatus(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "null-holds",
							children: "Null holds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "fired",
							children: "Fired — blast radius applies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "candidate-passed",
							children: "Candidate passed this switch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "not-applicable",
							children: "Not applicable on a null"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Note",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field textarea",
					value: note,
					onChange: (e) => setNote(e.target.value)
				})
			}),
			n === "6" && status === "candidate-passed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "mt-1 h-5 w-5",
					checked: spot,
					onChange: (e) => setSpot(e.target.checked)
				}), "The excess survived a common-clock spot-check substitution. If it did not, Switch 6 has fired."]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				disabled: !registryAnchored(c) || n === "2" && status === "fired" && !c.logs.some((l) => l.kind === "analysis-a" || l.kind === "analysis-b"),
				onClick: () => {
					if (n === "2" && status === "fired" && !c.logs.some((l) => l.kind === "analysis-a" || l.kind === "analysis-b")) {
						setMsg("Switch 2 cannot fire without an Analysis A or Analysis B entry, and it cannot fire on a null.");
						return;
					}
					if (n === "4" || n === "5") {
						setMsg("Switches 4 and 5 are withdrawn with Supplements S1 and S2. They are not instrument calls.");
						return;
					}
					if (n === "2" && status === "candidate-passed" && !c.logs.some((l) => l.kind === "chromatic")) {
						setMsg("Switch 2 cannot pass without an uncombined L1/L5 entry.");
						return;
					}
					if (n === "6" && status === "candidate-passed" && !spot) {
						setMsg("Switch 6 does not pass unless the excess survived a common-clock spot-check. Record Fired if it moved.");
						return;
					}
					addLog(c.id, {
						kind: "switch",
						title: `Switch ${n} · ${status}`,
						body: note || "No note."
					});
					setNote("");
					setMsg(`Switch ${n} recorded.`);
				},
				children: "Record the switch"
			}),
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			}) : null
		]
	});
}
function ReleaseStep() {
	const c = useActive();
	const setField = useBook((s) => s.setField);
	const quote = chainCQuote(c);
	const [msg, setMsg] = (0, import_react.useState)("");
	const columns = [
		["predictedS", "Chain S predicted budget"],
		["measuredFloorS", "Chain S measured residual floor"],
		["reportedBoundS", "Chain S reported bound"],
		["predictedC", "Chain C predicted budget"],
		["measuredFloorC", "Chain C measured residual floor"],
		["reportedBoundC", "Chain C reported bound"]
	];
	function boundError() {
		const reportedS = num(c.fields.reportedBoundS ?? "");
		const measuredS = num(c.fields.measuredFloorS ?? "");
		if (reportedS != null && measuredS != null && reportedS + 1e-9 < measuredS) return "Chain S reported bound is tighter than the measured double-difference floor. The first column does not tighten the third.";
		const reportedC = num(c.fields.reportedBoundC ?? "");
		if (reportedC != null && quote.failed) return "Chain C is not quotable. The common-clock decomposition failed. Switch 3. Clear the reported bound.";
		if (reportedC != null && quote.boundHi != null && reportedC + 1e-9 < quote.boundHi) return `Chain C reported bound is tighter than the per-baseline maximum (${formatRad(quote.boundHi)}).`;
		if (reportedC != null && !quote.quotable) return "Chain C has no co-located floor yet. Do not report a bound.";
		return null;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Predicted budget, measured residual floor, and reported bound are three different numbers. Chain S uses the measured double-difference floor. Chain C uses the per-baseline maximum from the clock step",
					quote.quotable ? ` (${formatRad(quote.boundLo)} – ${formatRad(quote.boundHi)})` : "",
					". Catalog rows stay catalog until you replace them. This page does not invent a residual."
				]
			}),
			columns.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					value: c.fields[id] ?? "",
					onChange: (e) => setField(c.id, id, e.target.value),
					placeholder: "rad, or leave blank"
				})
			}, id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				onClick: () => {
					const err = boundError();
					if (err) {
						setMsg(err);
						return;
					}
					exportMilestone(c, "campaign-close");
					setMsg("Campaign-close JSON download started. Export Markdown from Book and move both off the handset.");
				},
				children: "Close the campaign and export JSON"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-ghost w-full",
				onClick: () => download(`${campaignFilename(c.name)}.md`, campaignMarkdown(c), "text/markdown"),
				children: "Export Markdown"
			}),
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			}) : null
		]
	});
}
//#endregion
export { WalkPage as component };
