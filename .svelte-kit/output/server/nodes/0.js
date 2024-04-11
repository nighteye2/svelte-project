

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.UwqgTEQp.js","_app/immutable/chunks/scheduler.ox4Dc5vi.js","_app/immutable/chunks/index.gs1gY3dG.js"];
export const stylesheets = [];
export const fonts = [];
