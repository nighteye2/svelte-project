import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { H as Header } from "../../../chunks/header.js";
const css$1 = {
  code: ".card1.svelte-17q5a3o{margin-top:130px;margin-left:50px;margin-bottom:30px;margin-right:50px;width:400px;height:400px;background-color:rgb(67, 51, 82);border-radius:20px}.cardtext.svelte-17q5a3o{margin-left:30%;padding-left:20px;font-size:25px;padding-right:20px;font-family:'Bricolage Grotesque', sans-serif;text-decoration:none;color:rgb(255, 255, 255);background-color:rgb(105, 70, 138);border:none}.cardtext.svelte-17q5a3o:hover{padding-left:20px;font-size:25px;padding-right:20px;font-family:'Bricolage Grotesque', sans-serif;color:rgb(105, 70, 138);background-color:rgb(255, 255, 255)}",
  map: `{"version":3,"file":"card.svelte","sources":["card.svelte"],"sourcesContent":["<script>\\r\\n  import { createEventDispatcher } from \\"svelte\\";\\r\\n    export let filename;\\r\\n    export let sportsname;\\r\\n\\r\\n    let dispatch= createEventDispatcher();\\r\\n\\r\\n    function navigate(){\\r\\n      dispatch('navigation');\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    .card1{\\r\\n    margin-top: 130px;\\r\\n    margin-left: 50px;\\r\\n    margin-bottom: 30px;\\r\\n    margin-right: 50px;\\r\\n    width: 400px;\\r\\n    height: 400px;\\r\\n    background-color: rgb(67, 51, 82);\\r\\n    border-radius: 20px;\\r\\n}\\r\\n.cardtext{\\r\\n  margin-left: 30%;\\r\\n  padding-left: 20px;\\r\\n  font-size: 25px;\\r\\n  padding-right: 20px;\\r\\n  font-family: 'Bricolage Grotesque', sans-serif;\\r\\n  text-decoration: none; \\r\\n  color: rgb(255, 255, 255); \\r\\n  background-color: rgb(105, 70, 138);\\r\\n  border: none;\\r\\n}\\r\\n.cardtext:hover{\\r\\n  padding-left: 20px;\\r\\n  font-size: 25px;\\r\\n  padding-right: 20px;\\r\\n  font-family: 'Bricolage Grotesque', sans-serif;\\r\\n  color: rgb(105, 70, 138);  \\r\\n  background-color: rgb(255, 255, 255);\\r\\n}\\r\\n</style>\\r\\n\\r\\n<div class=\\"card1\\"data-aos=\\"slide-right\\">\\r\\n    <img src={filename} style=\\"height: 350px;width: 400px;border-radius: 20px;\\" alt=\\"sportsImage\\">\\r\\n    <button class=\\"cardtext\\" on:click={navigate}>{sportsname}</button>\\r\\n</div>"],"names":[],"mappings":"AAYI,qBAAM,CACN,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,aAAa,CAAE,IACnB,CACA,wBAAS,CACP,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,qBAAqB,CAAC,CAAC,UAAU,CAC9C,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACnC,MAAM,CAAE,IACV,CACA,wBAAS,MAAM,CACb,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,qBAAqB,CAAC,CAAC,UAAU,CAC9C,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACxB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC"}`
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { filename } = $$props;
  let { sportsname } = $$props;
  createEventDispatcher();
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  if ($$props.sportsname === void 0 && $$bindings.sportsname && sportsname !== void 0)
    $$bindings.sportsname(sportsname);
  $$result.css.add(css$1);
  return `<div class="card1 svelte-17q5a3o" data-aos="slide-right"><img${add_attribute("src", filename, 0)} style="height: 350px;width: 400px;border-radius: 20px;" alt="sportsImage"> <button class="cardtext svelte-17q5a3o">${escape(sportsname)}</button></div>`;
});
const archery = "/_app/immutable/assets/archery%20card1.DS1ukmmb.jpg";
const kabaddi = "/_app/immutable/assets/kabaddi%20card1.Cr8CWOPX.jpg";
const fencing = "/_app/immutable/assets/fencing%20image1.RxgZa4l4.jpg";
const cricket = "/_app/immutable/assets/cricket.CXqCbeYp.jpg";
const badminton = "/_app/immutable/assets/voilet%20badminton.BHeinqRC.jpg";
const css = {
  code: ".heading3.svelte-1iulfij{font-size:70px;padding-top:30px;padding-left:230px;color:rgb(67, 51, 82);font-family:'Anton', sans-serif;border-bottom:0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import Header from \\"../../UI/header.svelte\\";\\r\\n    import Card from \\"../../UI/card.svelte\\";\\r\\n    import archery from \\"$lib/images/archery card1.jpg\\"\\r\\n    import kabaddi from \\"$lib/images/kabaddi card1.jpg\\"\\r\\n    import fencing from \\"$lib/images/fencing image1.jpg\\"\\r\\n    import cricket from \\"$lib/images/cricket.jpg\\"\\r\\n    import badminton from \\"$lib/images/voilet badminton.jpg\\"\\r\\n\\r\\n    function visitarchery(){\\r\\n        goto('/athletics/archery')\\r\\n    }\\r\\n\\r\\n    function visitkabaddi(){\\r\\n        goto('/athletics/kabaddi')\\r\\n    }\\r\\n\\r\\n    function visitcricket(){\\r\\n        goto('/athletics/cricket')\\r\\n    }\\r\\n\\r\\n    function visitfencing(){\\r\\n        goto('/athletics/fencing')\\r\\n    }\\r\\n\\r\\n    function visitweightlifting(){\\r\\n        goto('/athletics/weightlifting')\\r\\n    }\\r\\n\\r\\n    function visitbadminton(){\\r\\n        goto('/athletics/badminton')\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    .heading3{\\r\\n    font-size: 70px;\\r\\n    padding-top: 30px;\\r\\n    padding-left: 230px;\\r\\n    color:rgb(67, 51, 82);\\r\\n    font-family: 'Anton', sans-serif;\\r\\n    border-bottom: 0;\\r\\n}\\r\\n</style>\\r\\n<Header />\\r\\n<div style=\\"border-bottom: 1px solid black;\\">\\r\\n    <h1 class=\\"heading3\\" style=\\"background-color:rgb(242, 216, 139)\\" id=\\"Athletics\\"><b>Which Physical sport you want to see?</b></h1><br>\\r\\n<div  style=\\"display: flex;background-color:rgb(242, 216, 139);position:relative;margin-top: 0;\\">\\r\\n    <Card \\r\\n    filename= {archery}\\r\\n    sportsname=\\"Archery\\"\\r\\n    on:navigation={visitarchery}/>\\r\\n    <Card \\r\\n    filename= {kabaddi}\\r\\n    sportsname=\\"Kabaddi\\"\\r\\n    on:navigation={visitkabaddi}/>\\r\\n    <Card \\r\\n    filename= {fencing}\\r\\n    sportsname=\\"Fencing\\"\\r\\n    on:navigation={visitfencing}/>\\r\\n</div>\\r\\n<div  style=\\"display: flex;background-color:rgb(242, 216, 139);position:relative;margin-top: 0;\\">\\r\\n    <Card \\r\\n    filename= {kabaddi}\\r\\n    sportsname=\\"Weightlifting\\"\\r\\n    on:navigation={visitweightlifting}/>\\r\\n    <Card \\r\\n    filename= {cricket}\\r\\n    sportsname=\\"Cricket\\"\\r\\n    on:navigation={visitcricket}/>\\r\\n    <Card \\r\\n    filename= {badminton}\\r\\n    sportsname=\\"Badminton\\"\\r\\n    on:navigation={visitbadminton}/>\\r\\n</div>\\r\\n</div>"],"names":[],"mappings":"AAmCI,wBAAS,CACT,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,KAAK,CACnB,MAAM,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACrB,WAAW,CAAE,OAAO,CAAC,CAAC,UAAU,CAChC,aAAa,CAAE,CACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div style="border-bottom: 1px solid black;"><h1 class="heading3 svelte-1iulfij" style="background-color:rgb(242, 216, 139)" id="Athletics" data-svelte-h="svelte-1m6xfs8"><b>Which Physical sport you want to see?</b></h1><br> <div style="display: flex;background-color:rgb(242, 216, 139);position:relative;margin-top: 0;">${validate_component(Card, "Card").$$render($$result, { filename: archery, sportsname: "Archery" }, {}, {})} ${validate_component(Card, "Card").$$render($$result, { filename: kabaddi, sportsname: "Kabaddi" }, {}, {})} ${validate_component(Card, "Card").$$render($$result, { filename: fencing, sportsname: "Fencing" }, {}, {})}</div> <div style="display: flex;background-color:rgb(242, 216, 139);position:relative;margin-top: 0;">${validate_component(Card, "Card").$$render(
    $$result,
    {
      filename: kabaddi,
      sportsname: "Weightlifting"
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, { filename: cricket, sportsname: "Cricket" }, {}, {})} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      filename: badminton,
      sportsname: "Badminton"
    },
    {},
    {}
  )}</div></div>`;
});
export {
  Page as default
};
