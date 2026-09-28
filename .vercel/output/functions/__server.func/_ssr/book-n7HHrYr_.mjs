import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as useBook, W as useActive, a as Field, f as Shell, o as NeedCampaign, p as Tag } from "./chrome--h4omt2u.mjs";
import { n as campaignFilename, o as download, r as campaignMarkdown, t as APP_ID } from "./report-CdjHKgkz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-n7HHrYr_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookBody, {}) });
}
function BookBody() {
	const c = useActive();
	const campaigns = useBook((s) => s.campaigns);
	const addLog = useBook((s) => s.addLog);
	const remove = useBook((s) => s.remove);
	const importBook = useBook((s) => s.importBook);
	const [note, setNote] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Archive"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					children: "Campaign book"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						campaigns.length,
						" record",
						campaigns.length === 1 ? "" : "s",
						" on this handset. Export is the way out. Import appends; it does not overwrite."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-ghost",
					onClick: () => {
						download(`dslv-zpdi-vacuum-book.json`, JSON.stringify({
							app: APP_ID,
							rev: "3.6",
							campaigns
						}, null, 2), "application/json");
					},
					children: "Export the book"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "btn btn-ghost",
					children: ["Import JSON", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "application/json,.json",
						className: "sr-only",
						onChange: async (e) => {
							const file = e.target.files?.[0];
							e.target.value = "";
							if (!file) return;
							try {
								const parsed = JSON.parse(await file.text());
								const result = importBook(parsed);
								setMsg(result.ok ? `Imported ${result.n}.` : result.error);
							} catch {
								setMsg("That file did not parse.");
							}
						}
					})]
				})]
			}),
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			}) : null,
			!c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeedCampaign, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "card space-y-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									c.operator || "Operator unset",
									" · ",
									c.site || "Site unset",
									" · opened ",
									c.createdAt
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								tone: c.frozen?.anchorId.trim() ? "ok" : c.frozen ? "warn" : "steel",
								children: c.frozen?.anchorId.trim() ? "Anchored" : c.frozen ? "Draft freeze" : "Open"
							})]
						}),
						c.frozen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "break-all font-mono text-xs text-primary",
							children: [c.frozen.sha256, c.frozen.anchorId.trim() ? ` · ${c.frozen.anchorKind} ${c.frozen.anchorId}` : " · no external anchor"]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-primary",
								onClick: () => {
									addLog(c.id, {
										kind: "export",
										title: "Milestone export · campaign-close",
										body: `campaign-close. SHA-256 ${c.frozen?.sha256 ?? "unfrozen"}. Anchor ${c.frozen?.anchorId.trim() || "∅"}.`
									});
									const next = useBook.getState().campaigns.find((x) => x.id === c.id) ?? c;
									download(`${campaignFilename(next.name)}.json`, JSON.stringify({
										app: APP_ID,
										rev: "3.6",
										campaign: next
									}, null, 2), "application/json");
								},
								children: "Campaign-close export"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-ghost",
								onClick: () => download(`${campaignFilename(c.name)}.md`, campaignMarkdown(c), "text/markdown"),
								children: "Markdown"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "card space-y-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "Housekeeping covariate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Optional E-field, barometer, or radon note. Logged beside the campaign. Not an estimator input, and not part of the detection statistic."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "What was observed, if you choose to record it",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field textarea",
								value: note,
								onChange: (e) => setNote(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-ghost",
								disabled: !note.trim(),
								onClick: () => {
									addLog(c.id, {
										kind: "covariate",
										title: "Covariate — not an estimator input",
										body: note.trim()
									});
									setNote("");
								},
								children: "Append covariate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-ghost",
								disabled: !note.trim(),
								onClick: () => {
									addLog(c.id, {
										kind: "note",
										title: "Field note",
										body: note.trim()
									});
									setNote("");
								},
								children: "Append note"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "Log"
					}), !c.logs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "No entries. The walk appends calibrations, injections, and calls. This page does not invent them."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-2",
						children: c.logs.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "card p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: log.kind }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
										className: "font-mono text-xs text-muted",
										children: log.at
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-sm font-semibold",
									children: log.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 whitespace-pre-wrap text-sm text-muted",
									children: log.body
								})
							]
						}, log.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "card space-y-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "Remove this campaign"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Deletes one record from this handset. Export first if you want it. There is no cloud copy."
						}),
						confirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "btn btn-hot flex-1",
								onClick: () => remove(c.id),
								children: ["Delete ", c.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-ghost flex-1",
								onClick: () => setConfirm(false),
								children: "Keep it"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-ghost",
							onClick: () => setConfirm(true),
							children: "I want to delete this record"
						})
					]
				})
			] })
		]
	});
}
//#endregion
export { BookPage as component };
