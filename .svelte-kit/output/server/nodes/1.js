

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BX1xOyA6.js","_app/immutable/chunks/scheduler.ox4Dc5vi.js","_app/immutable/chunks/index.gs1gY3dG.js","_app/immutable/chunks/entry.Bgib2pk-.js"];
export const stylesheets = [];
export const fonts = [];
