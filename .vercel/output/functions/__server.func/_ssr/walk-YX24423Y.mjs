import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as num, B as useBook, E as lEff, L as sci, O as morphology, P as preregComplete, R as sigmaPhiRad, S as formatSeconds, _ as clockIsolation, a as Field, b as formatBaseline, c as Plate, f as Shell, g as chromatic, h as betaNull, k as nodesReady, l as Readout, n as F_L1_HZ, o as NeedCampaign, p as Tag, s as PREREG, u as STEPS, v as clockReady, x as formatRad, z as useActive } from "./chrome-C6pvSZO-.mjs";
import { r as pairsOf } from "./report-1p7w2Tlt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/walk-YX24423Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WalkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkBody, {}) });
}
function gate(stepId, c) {
	if (stepId === "hypotheses" || stepId === "path" || stepId === "resolution") return c.acked.includes(stepId) ? null : "Acknowledge the step before leaving it.";
	if (stepId === "nodes") return nodesReady(c) ? null : "Two nodes, each with a name, GPSDO identity, σ_y, and f_loop.";
	if (stepId === "prereg") return preregComplete(c) ? null : "The registry fields above the clock floor are still blank.";
	if (stepId === "clock") return clockReady(c) ? null : "Enter the measured non-clock floor and the bias-file hash.";
	if (stepId === "inject") return c.logs.some((l) => l.kind === "injection") ? null : "Log an injection — recovered, failed, or still sealed.";
	if (stepId === "freeze") return c.frozen ? null : "Freeze the registry before science entries.";
	if (stepId === "analysis-a" || stepId === "analysis-b" || stepId === "chromatic" || stepId === "switches") {
		if (!c.frozen) return "Freeze first. Science entries wait on the hash.";
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
					tone: c.frozen ? "ok" : "steel",
					children: c.frozen ? "Registry frozen" : "Registry open"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1",
				children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": s.title,
					className: `h-1.5 flex-1 rounded-full ${i === index ? "bg-primary" : i < index ? "bg-accent" : "bg-border"}`,
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
		case "release": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReleaseHint, {});
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
				"fdr"
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
function ClockStep() {
	const c = useActive();
	const setField = useBook((s) => s.setField);
	const addLog = useBook((s) => s.addLog);
	const common = num(c.fields.clockFloorRad);
	const indep = num(c.fields.indepClockRms ?? "");
	const iso = common != null && indep != null ? clockIsolation(common, indep) : null;
	const [note, setNote] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Common-clock residual RMS (rad)",
				hint: "The non-clock floor. This number sets the Chain C bound.",
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
				hint: "Site-common plus relative clock. Not a second hypothesis.",
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
					value: iso == null ? "—" : formatRad(iso),
					hint: "√(σ²_indep − σ²_common). Blank if the common-clock run is noisier — that fails the decomposition and routes to Switch 3."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
					label: "Chain C bound",
					value: common == null ? "unbounded" : formatRad(common),
					hint: "No tighter number is allowed."
				})]
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
						title: iso == null ? "Common-clock run — decomposition failed" : "Common-clock calibration",
						body: `${note || "No narrative."} Floor ${common} rad. Independent ${indep ?? "∅"}. Isolation ${iso ?? "failed"}. Bias ${c.fields.biasHash || "∅"}.`
					});
					setNote("");
					setMsg("Calibration appended to the book.");
				},
				children: "Append the calibration"
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
	const [reason, setReason] = (0, import_react.useState)("");
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
					children: ["Frozen ", c.frozen.at]
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
						setMsg("Lock cleared. The previous digest stays in the book.");
					},
					children: "Amend and unlock"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				disabled: !ready,
				onClick: async () => {
					const digest = await freeze(c.id);
					setMsg(digest ? `Frozen ${digest.slice(0, 16)}…` : "Freeze refused. A required field is empty.");
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
			!c.frozen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: "You can draft the arithmetic. The log waits until the registry is frozen."
			}) : null,
			!c.logs.some((l) => l.kind === "injection" && l.title.includes("recovered")) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-warn",
				children: "No recovered injection is in the book. Switch 3 is live for any claim."
			}) : null,
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
				disabled: !c.frozen,
				onClick: () => {
					addLog(c.id, {
						kind: "analysis-a",
						chain,
						title: `Analysis A · Chain ${chain} · ${call}`,
						body: `γ̂ ${gamma || "∅"}. T ${tDur || "∅"} s. τ_corr ${tau || "∅"} s. L_eff ${L ?? "∅"}. E[γ] ${law ? law.eGamma : "∅"}.`
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
				disabled: !c.frozen || !result,
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
	const label = hit?.klass === "delay" ? "Delay class — candidate may proceed" : hit?.klass === "iono" ? "Ionospheric class — back to the null" : hit?.klass === "offset" ? "Phase-offset class — instrumental" : hit ? "No class inside tolerance" : "—";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card space-y-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Tolerance from the registry: ",
					sci(tol),
					". Uncombined radians or cycles."
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
				disabled: !c.frozen || !hit,
				onClick: () => {
					if (!hit) return;
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
							value: "4",
							children: "4 Möbius holonomy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "5",
							children: "5 Gravitating plenum"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-primary w-full",
				disabled: !c.frozen || n === "2" && status === "fired" && !c.logs.some((l) => l.kind === "analysis-a" || l.kind === "analysis-b"),
				onClick: () => {
					if (n === "2" && status === "candidate-passed" && !c.logs.some((l) => l.kind === "chromatic")) {
						setMsg("Switch 2 cannot pass without an uncombined L1/L5 entry.");
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
function ReleaseHint() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Export lives in the book. Take the JSON off the handset the way you take any other file. The nodes still hold the IQ."
	});
}
//#endregion
export { WalkPage as component };
