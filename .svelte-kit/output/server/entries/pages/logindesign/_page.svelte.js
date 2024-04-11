import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1 data-svelte-h="svelte-1wsy7a9">Login</h1> <form action="?/login" method="POST"><div data-svelte-h="svelte-rgu6sd"><label for="username">Username</label> <input id="username" name="username" type="text" required></div> <div data-svelte-h="svelte-l898hr"><label for="password">Password</label> <input id="password" name="password" type="password" required></div> ${form?.invalid ? `<p class="error" data-svelte-h="svelte-1ar3ney">Username and password is required.</p>` : ``} ${form?.credentials ? `<p class="error" data-svelte-h="svelte-koq2j1">You have entered the wrong credentials.</p>` : ``} <button type="submit" data-svelte-h="svelte-1h04br6">Log in</button></form>`;
});
export {
  Page as default
};
