import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { H as Header } from "../../chunks/header.js";
import Page$1 from "./Physicalsportshome/_page.svelte.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Page$1, "Physicalsportshome").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
