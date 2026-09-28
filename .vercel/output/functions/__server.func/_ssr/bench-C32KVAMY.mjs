import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as num, B as useBook, C as haversineM, D as lightTimeS, E as lEff, F as rowRad, I as rss, L as sci, M as paperIdentityChecks, N as phaseToPathM, R as sigmaPhiRad, S as formatSeconds, T as ionoPhaseRad, V as weakPhase, a as Field, b as formatBaseline, f as Shell, g as chromatic, h as betaNull, i as F_RATIO, j as nyquistHz, l as Readout, m as baselineForLags, n as F_L1_HZ, p as Tag, r as F_L5_HZ, x as formatRad, y as dumpPhaseSigma, z as useActive } from "./chrome-C6pvSZO-.mjs";
import { a as CartesianGrid, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bench-C32KVAMY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function pathLabel(m) {
	if (m == null || !Number.isFinite(m)) return "—";
	const mm = m * 1e3;
	if (Math.abs(mm) < 100) return `${mm.toFixed(2)} mm`;
	return `${m.toFixed(3)} m`;
}
function BenchPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Closed form"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					children: "Bench"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Every number on this page is an evaluation of a formula, or a row you typed. Placeholders are the Rev 3.4 worked example. They are not measurements, and they are not written into the book unless you are on the walk."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Adev, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resolution, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coherence, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weak, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chroma, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iono, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dump, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaselineTool, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetTool, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identity, {})
		]
	}) });
}
function Adev() {
	const [sy, setSy] = (0, import_react.useState)("");
	const [tau, setTau] = (0, import_react.useState)("");
	const s = num(sy);
	const t = num(tau);
	const l1 = s != null && t != null ? sigmaPhiRad(F_L1_HZ, t, s) : null;
	const l5 = s != null && t != null ? sigmaPhiRad(F_L5_HZ, t, s) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Phase stability",
		section: "§3.4",
		hint: "σ_φ = 2π f τ σ_y. Quote the installed unit.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "σ_y(τ)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					value: sy,
					placeholder: "1e-12",
					onChange: (e) => setSy(e.target.value)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "τ (s)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					value: tau,
					placeholder: "1",
					onChange: (e) => setTau(e.target.value)
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "L1",
				value: formatRad(l1)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "L5",
				value: formatRad(l5)
			})]
		})]
	});
}
function Resolution() {
	const [fd, setFd] = (0, import_react.useState)("");
	const [base, setBase] = (0, import_react.useState)("");
	const f = num(fd);
	const b = num(base);
	const rows = f != null && f > 0 ? [1, 10].map((n) => ({
		n,
		d: baselineForLags(f, n)
	})) : [];
	const tau = b != null ? lightTimeS(b) : null;
	const limited = tau != null && f != null && f > 0 ? !(tau > 10 / f) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Light time and lag resolution",
		section: "§4.3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "f_d (Hz)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: fd,
						placeholder: "1000",
						onChange: (e) => setFd(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Baseline (m)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: base,
						placeholder: "10000",
						onChange: (e) => setBase(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
						label: "δτ",
						value: f ? formatSeconds(1 / f) : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
						label: "τ_c",
						value: formatSeconds(tau)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
						label: "|τ| ≪ τ_c",
						value: limited == null ? "—" : limited ? "Not claimable" : "Resolved"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1 text-sm text-muted",
				children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "tabular font-mono",
					children: [
						"τ_c = ",
						r.n,
						" δτ → ",
						formatBaseline(r.d)
					]
				}, r.n))
			})
		]
	});
}
function Coherence() {
	const [t, setT] = (0, import_react.useState)("");
	const [corr, setCorr] = (0, import_react.useState)("");
	const L = lEff(num(t) ?? NaN, num(corr) ?? NaN);
	const law = L != null && L > 1 ? betaNull(L) : null;
	const curve = (0, import_react.useMemo)(() => [
		30,
		100,
		300,
		1e3,
		3e3,
		1e4,
		86400
	].map((n) => {
		const b = betaNull(n);
		return {
			L: n,
			floor: b.eR,
			three: b.rMin3
		};
	}), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Stationary coherence floor",
		section: "§4.2",
		hint: "The curve is E[r] ≈ √(π / 4L) under the complex-Gaussian null. It is not a spectrum.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Record length T (s)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: t,
						placeholder: "86400",
						onChange: (e) => setT(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "τ_corr (s)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: corr,
						placeholder: "288",
						onChange: (e) => setCorr(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
						label: "L_eff",
						value: L == null ? "—" : sci(L, 4)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
						label: "E[γ̂]",
						value: law ? sci(law.eGamma) : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
						label: "r_min κ=3",
						value: law ? sci(law.rMin3) : "—",
						hint: "Large-L magnitude check. The bootstrap decides."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-48 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: curve,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: "var(--color-border)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "L",
								type: "number",
								scale: "log",
								domain: ["auto", "auto"],
								stroke: "var(--color-muted)",
								tick: {
									fill: "var(--color-muted)",
									fontSize: 11
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								scale: "log",
								domain: ["auto", "auto"],
								stroke: "var(--color-muted)",
								tick: {
									fill: "var(--color-muted)",
									fontSize: 11
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								contentStyle: {
									background: "var(--color-card)",
									border: "1px solid var(--color-border)",
									color: "var(--color-foreground)"
								},
								formatter: (v) => sci(typeof v === "number" ? v : Number(v))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "floor",
								name: "E[r]",
								stroke: "#8eb4ad",
								dot: false,
								strokeWidth: 2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "three",
								name: "r_min",
								stroke: "#d4524a",
								dot: false,
								strokeWidth: 2
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: "Sage: null expectation. Hot: κ=3 check. Log axes. Not campaign data."
			})
		]
	});
}
function Weak() {
	const [sig, setSig] = (0, import_react.useState)("");
	const [r, setR] = (0, import_react.useState)("");
	const w = num(sig) != null && num(r) != null ? weakPhase(num(sig), num(r)) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Weak common phase",
		section: "§5",
		hint: "The paper reports φ ≈ σ √r. Exact inversion is beside it.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "σ_φ (rad)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					value: sig,
					placeholder: "0.3",
					onChange: (e) => setSig(e.target.value)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "r",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					value: r,
					placeholder: "0.0077",
					onChange: (e) => setR(e.target.value)
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "Paper map → L1 path",
				value: w ? pathLabel(phaseToPathM(w.approx, F_L1_HZ)) : "—",
				hint: w ? formatRad(w.approx) : ""
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "Exact inversion → L1 path",
				value: w ? pathLabel(phaseToPathM(w.exact, F_L1_HZ)) : "—",
				hint: w ? formatRad(w.exact) : ""
			})]
		})]
	});
}
function Chroma() {
	const [a, setA] = (0, import_react.useState)("");
	const [b, setB] = (0, import_react.useState)("");
	const [tol, setTol] = (0, import_react.useState)("");
	const hit = num(a) != null && num(b) != null ? chromatic(num(a), num(b), num(tol) ?? .05) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Chromatic class",
		section: "Switch 2",
		hint: `Targets: delay ${sci(F_RATIO, 4)}, ionosphere ${sci(1 / F_RATIO, 4)}, offset 1.`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "φ₁",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: a,
						placeholder: "1.339",
						onChange: (e) => setA(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "φ₂",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: b,
						placeholder: "1",
						onChange: (e) => setB(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Tolerance",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: tol,
						placeholder: "0.05",
						onChange: (e) => setTol(e.target.value)
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
			label: "Class",
			value: hit ? hit.klass : "—",
			hint: hit ? `ratio ${sci(hit.ratio, 4)} · relative error ${sci(hit.relErr)}` : "Radians or cycles, not metres."
		})]
	});
}
function Iono() {
	const [tec, setTec] = (0, import_react.useState)("");
	const t = num(tec);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Ionospheric carrier phase",
		section: "§3",
		hint: "0.1 TECU is the paper's optimistic single-frequency residual, not a forecast.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "TEC (TECU)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field font-mono",
				value: tec,
				placeholder: "0.1",
				onChange: (e) => setTec(e.target.value)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "L1",
				value: t == null ? "—" : formatRad(ionoPhaseRad(t, F_L1_HZ))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "100 MHz",
				value: t == null ? "—" : formatRad(ionoPhaseRad(t, 1e8)),
				hint: "Why the science band is L-band."
			})]
		})]
	});
}
function Dump() {
	const [cn, setCn] = (0, import_react.useState)("");
	const [fd, setFd] = (0, import_react.useState)("");
	const s = num(cn) != null && num(fd) != null ? dumpPhaseSigma(num(cn), num(fd)) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Per-dump phase",
		section: "§4.0",
		hint: "σ ≈ 1/√(2 C/N0 T), T = 1/f_d.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "C/N0 (dB-Hz)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					value: cn,
					placeholder: "45",
					onChange: (e) => setCn(e.target.value)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "f_d (Hz)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field font-mono",
					value: fd,
					placeholder: "1000",
					onChange: (e) => setFd(e.target.value)
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
			label: "σ_φ,dump",
			value: formatRad(s)
		})]
	});
}
function Guard() {
	const [f, setF] = (0, import_react.useState)("");
	const [loop, setLoop] = (0, import_react.useState)("");
	const [fd, setFd] = (0, import_react.useState)("");
	const ff = num(f);
	const lp = num(loop);
	const d = num(fd);
	let call = "—";
	if (ff != null && lp != null && d != null) {
		if (ff < lp) call = "Excluded — inside the steering loop";
		else if (ff > nyquistHz(d)) call = "Above Nyquist of the dump";
		else call = "Inside the testable band";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Guard band",
		section: "§3.4",
		hint: "Below f_loop the GPSDOs are one clock. Mandatory on Chain C, conservative on Chain S.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Fourier frequency (Hz)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: f,
						onChange: (e) => setF(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "f_loop (Hz)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: loop,
						placeholder: "0.01",
						onChange: (e) => setLoop(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "f_d (Hz)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: fd,
						placeholder: "1000",
						onChange: (e) => setFd(e.target.value)
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
			label: "Band call",
			value: call
		})]
	});
}
function BaselineTool() {
	const [a, setA] = (0, import_react.useState)("");
	const [b, setB] = (0, import_react.useState)("");
	const [c, setC] = (0, import_react.useState)("");
	const [d, setD] = (0, import_react.useState)("");
	const la = num(a);
	const loa = num(b);
	const lb = num(c);
	const lob = num(d);
	const m = la != null && loa != null && lb != null && lob != null ? haversineM({
		lat: la,
		lon: loa
	}, {
		lat: lb,
		lon: lob
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Sphere baseline",
		section: "§4.3",
		hint: "Mean-Earth haversine. Not a geodetic reduction. Empty coordinates stay empty.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Lat A",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: a,
						onChange: (e) => setA(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Lon A",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: b,
						onChange: (e) => setB(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Lat B",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: c,
						onChange: (e) => setC(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Lon B",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field font-mono",
						value: d,
						onChange: (e) => setD(e.target.value)
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "Baseline",
				value: formatBaseline(m)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "τ_c",
				value: formatSeconds(m == null ? null : lightTimeS(m))
			})]
		})]
	});
}
function BudgetTool() {
	const c = useActive();
	const update = useBook((s) => s.updateBudget);
	if (!c) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
		title: "Campaign RSS",
		section: "§5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Open a campaign to edit budget rows. Catalog defaults appear with the record, labeled catalog."
		})
	});
	const lows = [];
	const highs = [];
	for (const row of c.budget) {
		if (row.name.startsWith("Multipath")) continue;
		if (!row.rss) continue;
		const rad = rowRad(row);
		if (rad == null) continue;
		lows.push(rad);
		highs.push(rad);
	}
	const mpLo = c.budget.find((r) => r.name.includes("low"));
	const mpHi = c.budget.find((r) => r.name.includes("high"));
	const lo = mpLo ? rowRad(mpLo) : null;
	const hi = mpHi ? rowRad(mpHi) : null;
	if (lo != null) lows.push(lo);
	if (hi != null) highs.push(hi);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
		title: "Chain S differential floor",
		section: "§5",
		hint: "RSS of included rows, with the low and high multipath cases shown as a span. Chain C is not this number.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "RSS, multipath low",
				value: formatRad(lows.length ? rss(lows) : null)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
				label: "RSS, multipath high",
				value: formatRad(highs.length ? rss(highs) : null)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: c.budget.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-md border border-border p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold",
							children: row.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: row.basis === "measured" ? "ok" : "warn",
							children: row.basis
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: row.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid gap-2 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field font-mono",
								disabled: !!c.frozen,
								value: row.value,
								onChange: (e) => update(c.id, row.id, { value: e.target.value })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "select",
								disabled: !!c.frozen,
								value: row.basis,
								onChange: (e) => update(c.id, row.id, { basis: e.target.value }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "catalog",
									children: "catalog"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "measured",
									children: "measured"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "h-5 w-5",
									disabled: !!c.frozen || row.name.startsWith("Multipath"),
									checked: row.name.startsWith("Multipath") ? false : row.rss,
									onChange: (e) => update(c.id, row.id, { rss: e.target.checked })
								}), "In the shared RSS"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "tabular mt-1 font-mono text-xs text-muted",
						children: [formatRad(rowRad(row)), " at L1"]
					})
				]
			}, row.id))
		})]
	});
}
function Identity() {
	const rows = paperIdentityChecks();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
		title: "Identity against Rev 3.4",
		section: "Self-check",
		hint: "If a row fails, the app is wrong. Do not interpret it as a residual.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-3 border-b border-border pb-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: r.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono text-xs text-muted",
					children: [
						r.got,
						" · paper ",
						r.expect
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
					tone: r.pass ? "ok" : "hot",
					children: r.pass ? "Hold" : "Fail"
				})]
			}, r.id))
		})
	});
}
function Tool({ title, section, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "card space-y-3 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: section
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold",
				children: title
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: hint
			}) : null
		] }), children]
	});
}
//#endregion
export { BenchPage as component };
