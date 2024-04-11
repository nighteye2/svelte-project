import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/header.js";
const whoarewe = "/_app/immutable/assets/who%20we%20are%20(1).DxQuzV9W.png";
const css = {
  code: ".Heading1.svelte-1sdjz0q{font-size:150px;padding-top:30px;padding-left:195px;color:transparent;-webkit-text-stroke-color:rgb(242, 216, 139);-webkit-text-stroke-width:2px;font-family:'Anton', sans-serif;margin-bottom:0px;margin-top:0px}.sub-heading1.svelte-1sdjz0q{font-size:65px;padding-top:10px;color:rgb(242, 216, 139);font-family:'Oswald', sans-serif;transform:translateX(+150px);transform:translateY(-20px);padding-left:70px}.frontpagetext1.svelte-1sdjz0q{margin-right:20px;padding-top:30px;padding-bottom:30px;padding-right:10px;padding-left:10px;font-size:25px;font-family:'Bricolage Grotesque', sans-serif;background-color:rgb(242, 216, 139);border-radius:25px;color:rgb(0, 0, 0)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import whoarewe from \\"$lib/images/who we are (1).png\\"\\r\\n    import Header from \\"../../UI/header.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n    .Heading1{\\r\\n    font-size: 150px;\\r\\n    padding-top: 30px;\\r\\n    padding-left: 195px;\\r\\n    color:transparent;\\r\\n    -webkit-text-stroke-color: rgb(242, 216, 139);\\r\\n    -webkit-text-stroke-width: 2px;\\r\\n    font-family: 'Anton', sans-serif;\\r\\n    margin-bottom: 0px;\\r\\n    margin-top: 0px;\\r\\n}\\r\\n.sub-heading1{\\r\\n    font-size: 65px;\\r\\n    padding-top: 10px;\\r\\n   color: rgb(242, 216, 139);\\r\\n   font-family: 'Oswald', sans-serif;\\r\\n   transform: translateX(+150px);\\r\\n   transform: translateY(-20px);\\r\\n   padding-left: 70px;\\r\\n   \\r\\n}\\r\\n.frontpagetext1{\\r\\n    margin-right: 20px;\\r\\n    padding-top: 30px;\\r\\n    padding-bottom: 30px;\\r\\n   padding-right: 10px;\\r\\n   padding-left: 10px;\\r\\n   font-size: 25px;\\r\\n   font-family: 'Bricolage Grotesque', sans-serif;\\r\\n   background-color: rgb(242, 216, 139);\\r\\n   border-radius: 25px;\\r\\n   color: rgb(0, 0, 0);\\r\\n}\\r\\n</style>\\r\\n<Header />\\r\\n\\r\\n\\r\\n<div style=\\"display: flex;background-color:rgb(67, 51, 82);position:relative;\\"data-aos=\\"slide-up\\">\\r\\n    <div style=\\"height: 100%;width: 40%; margin-top: 70px;\\"><img src={whoarewe} style=\\"height: 500px;width: 600px;\\"data-aos=\\"slide-right\\" data-aos-delay=\\"1000\\" alt=\\"who are we\\"></div>\\r\\n    <div style=\\"height: 100%;width: 60%;background-color: rgb(67, 51, 82); margin-top: 90px;\\">\\r\\n        <h1 class=\\"Heading1\\"><b>Who</b><span class=\\"sub-heading1\\">are we??</span></h1><br><br>\\r\\n        <h3 class=\\"frontpagetext1\\"data-aos=\\"slide-left\\"><p>Frolic nation is hub that discovers a wide range of sports & provides\\r\\n            information on every aspect of sport, from popular sports like Football,\\r\\n            Cricket, Basketball to niche sports like Archery and table tennis.\\r\\n        </p></h3>\\r\\n    </div>\\r\\n</div>"],"names":[],"mappings":"AAMI,wBAAS,CACT,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,KAAK,CACnB,MAAM,WAAW,CACjB,yBAAyB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC7C,yBAAyB,CAAE,GAAG,CAC9B,WAAW,CAAE,OAAO,CAAC,CAAC,UAAU,CAChC,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAChB,CACA,4BAAa,CACT,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CAClB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,WAAW,CAAE,QAAQ,CAAC,CAAC,UAAU,CACjC,SAAS,CAAE,WAAW,MAAM,CAAC,CAC7B,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,YAAY,CAAE,IAEjB,CACA,8BAAe,CACX,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,CACrB,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,qBAAqB,CAAC,CAAC,UAAU,CAC9C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACrB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div style="display: flex;background-color:rgb(67, 51, 82);position:relative;" data-aos="slide-up" data-svelte-h="svelte-smk7la"><div style="height: 100%;width: 40%; margin-top: 70px;"><img${add_attribute("src", whoarewe, 0)} style="height: 500px;width: 600px;" data-aos="slide-right" data-aos-delay="1000" alt="who are we"></div> <div style="height: 100%;width: 60%;background-color: rgb(67, 51, 82); margin-top: 90px;"><h1 class="Heading1 svelte-1sdjz0q"><b>Who</b><span class="sub-heading1 svelte-1sdjz0q">are we??</span></h1><br><br> <h3 class="frontpagetext1 svelte-1sdjz0q" data-aos="slide-left"><p>Frolic nation is hub that discovers a wide range of sports &amp; provides
            information on every aspect of sport, from popular sports like Football,
            Cricket, Basketball to niche sports like Archery and table tennis.</p></h3></div></div>`;
});
export {
  Page as default
};
