import * as server from '../entries/pages/register/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.CeZYSp69.js","_app/immutable/chunks/scheduler.ox4Dc5vi.js","_app/immutable/chunks/index.gs1gY3dG.js","_app/immutable/chunks/header.BXhAztxr.js","_app/immutable/chunks/frolic nation white logo.CvGMxIBS.js"];
export const stylesheets = ["_app/immutable/assets/10.QzcFiprs.css","_app/immutable/assets/header.mTxjBTbA.css"];
export const fonts = [];
