import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { S as Sportsheader } from "../../../../chunks/sportsheader.js";
const kabaddi = "/_app/immutable/assets/kabaddi.CRUqjEVX.png";
const css = {
  code: ".heading.svelte-qlafhc{font-size:130px;padding-top:70px;padding-left:40px;color:white;-webkit-text-stroke-color:rgb(67, 51, 82);-webkit-text-stroke-width:2px;font-family:'Anton', sans-serif}.frontpagetext.svelte-qlafhc{margin-top:70px;margin-left:40px;padding-top:20px;padding-bottom:20px;padding-left:20px;font-size:20px;font-family:'Bricolage Grotesque', sans-serif;background-color:rgb(67, 51, 82);border-radius:25px;color:rgb(250, 250, 250)}.Rulesheading1.svelte-qlafhc{font-size:70px;padding-top:30px;color:rgb(67, 51, 82);font-family:'Anton', sans-serif}.Rules.svelte-qlafhc{font-size:25px;margin-top:20px;margin-left:250px;margin-right:250px;padding-top:30px;padding-bottom:30px;padding-right:10px;padding-left:45px;font-size:25px;font-family:'Bricolage Grotesque', sans-serif;background-color:rgb(67, 51, 82);border-radius:25px;color:rgb(250, 250, 250)}.card1.svelte-qlafhc{margin-top:50px;margin-left:30px;margin-bottom:30px;margin-right:30px;width:500px;height:500px;background-color:rgb(67, 51, 82);border-radius:20px}.cardtext.svelte-qlafhc{padding-left:25px;font-size:25px;padding-top:20px;font-family:'Bricolage Grotesque', sans-serif;color:white}.cardtext1.svelte-qlafhc{padding-left:25px;padding-right:15px;font-size:20px;padding-top:20px;font-family:'Bricolage Grotesque', sans-serif;color:white}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    \\timport Sportsheader from \\"../../../UI/sportsheader.svelte\\";\\r\\n        import kabaddi from \\"$lib/images/kabaddi.png\\";\\r\\n\\r\\n    let Home=true;\\r\\n    let rules=false;\\r\\n    let Past=false;\\r\\n    let Future=false;\\r\\n\\r\\n    function displayhome(){\\r\\n        Home=true;\\r\\n        rules=false;\\r\\n        Past=false;\\r\\n        Future=false;\\r\\n    }\\r\\n\\r\\n    function displayrules(){\\r\\n        Home=false;\\r\\n        rules=true;\\r\\n        Past=false;\\r\\n        Future=false;\\r\\n    }\\r\\n\\r\\n    function displaypast(){\\r\\n        Home=false;\\r\\n        rules=false;\\r\\n        Past=true;\\r\\n        Future=false;\\r\\n    }\\r\\n\\r\\n    function displayfuture(){\\r\\n        Home=false;\\r\\n        rules=false;\\r\\n        Past=false;\\r\\n        Future=true;\\r\\n    }\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    .heading{\\r\\n    font-size: 130px;\\r\\n    padding-top: 70px;\\r\\n    padding-left: 40px;\\r\\n    color:white;\\r\\n    -webkit-text-stroke-color: rgb(67, 51, 82);\\r\\n    -webkit-text-stroke-width: 2px;\\r\\n    font-family: 'Anton', sans-serif;\\r\\n}\\r\\n.frontpagetext{\\r\\n    margin-top: 70px;\\r\\n    margin-left: 40px;\\r\\n    padding-top: 20px;\\r\\n    padding-bottom: 20px;\\r\\n   padding-left: 20px;\\r\\n   font-size: 20px;\\r\\n   font-family: 'Bricolage Grotesque', sans-serif;\\r\\n   background-color: rgb(67, 51, 82);\\r\\n   border-radius: 25px;\\r\\n   color: rgb(250, 250, 250);\\r\\n}\\r\\n.Rulesheading1{\\r\\n    font-size: 70px;\\r\\n    padding-top: 30px;\\r\\n    color:rgb(67, 51, 82);\\r\\n    font-family: 'Anton', sans-serif;\\r\\n}\\r\\n.Rules{\\r\\n    font-size: 25px;\\r\\n    margin-top: 20px;\\r\\n    margin-left: 250px;\\r\\n    margin-right: 250px;\\r\\n    padding-top: 30px;\\r\\n    padding-bottom: 30px;\\r\\n   padding-right: 10px;\\r\\n   padding-left: 45px;\\r\\n   font-size: 25px;\\r\\n   font-family: 'Bricolage Grotesque', sans-serif;\\r\\n   background-color: rgb(67, 51, 82);\\r\\n   border-radius: 25px;\\r\\n   color: rgb(250, 250, 250);\\r\\n}\\r\\n.card1{\\r\\n    margin-top: 50px;\\r\\n    margin-left: 30px;\\r\\n    margin-bottom: 30px;\\r\\n    margin-right: 30px;\\r\\n    width: 500px;\\r\\n    height: 500px;\\r\\n    background-color: rgb(67, 51, 82);\\r\\n    border-radius: 20px;\\r\\n}\\r\\n.cardtext{\\r\\n   padding-left: 25px;\\r\\n   font-size: 25px;\\r\\n   padding-top: 20px;\\r\\n   font-family: 'Bricolage Grotesque', sans-serif;\\r\\n   color: white;\\r\\n}\\r\\n.cardtext1{\\r\\n    padding-left: 25px;\\r\\n    padding-right: 15px;\\r\\n    font-size: 20px;\\r\\n    padding-top: 20px;\\r\\n    font-family: 'Bricolage Grotesque', sans-serif;\\r\\n    color: white;\\r\\n }\\r\\n</style>\\r\\n<Sportsheader \\r\\non:show-home={displayhome}\\r\\non:show-rules={displayrules}\\r\\non:show-past={displaypast}\\r\\non:show-future={displayfuture}/>\\r\\n{#if Home==true}\\r\\n<div style=\\"display: flex;background-color:rgb(242, 216, 139);position:relative;border-bottom: 1px solid black;\\">\\r\\n    <div style=\\"height: 750px; width: 100%;\\"><img src={kabaddi} style=\\"height: 750px; width: 100%;\\" alt=\\"kabaddi\\"></div>\\r\\n        <div style=\\"position: absolute;\\">\\r\\n            <h1 class=\\"heading\\">Kabaddi</h1>\\r\\n            <h3 class=\\"frontpagetext\\" style=\\"width: 50%;\\"><p>Kabaddi (also known as Kaudi) , is a contact team sport played between two teams of seven players.</p></h3>\\r\\n        </div>\\r\\n</div>\\r\\n{:else if rules==true}\\r\\n<div style=\\"background-color:rgb(220, 178, 130); padding-bottom: 150px;\\">\\r\\n    <h2 class=\\"Rulesheading1\\" style=\\"text-align: center;\\">Rules of Kabbadi</h2>\\r\\n    <ol class=\\"Rules\\">\\r\\n    <li><p>Each team shall consist of no more than 12 players with only 7 taking to the field at any one time.</p></li>\\r\\n    <li><p>Because of the physical nature of Kabaddi, matches are categorized in age and weight categories.</p></li>\\r\\n    <li><p>There are six officials looking after each Kabaddi match. The officials comprise of a referee, a scorer, two assistant scorers and two umpires.</p></li>\\r\\n    <li><p>The duration of the match is two halves of 20 minutes with a half time break of 5 minutes.</p></li>\\r\\n    <li><p>At the start of a Kabaddi match, there is a coin toss with the winner having the choice as to whether to have the first raid or not. In the second half of the match, the team that did not raid first shall begin the second half with a raid.</p></li>\\r\\n    <li><p>To win a point when raiding, the raider must take a breath and run into the opposition’s half and tag one or more members of the opposing team and then return to their own half of the pitch before inhaling again.</p></li>\\r\\n    <li><p>To prove that another breath hasn’t been taken, the rider must continue to repeatedly yell the word ‘Kabaddi’. Failure to do this, even for just a moment means that the rider must return to their own side of the court without points and the opposite team is awarded a point for a successful defense play.</p></li>\\r\\n    <li><p>The team being raided is defending, and the players must prevent the raiders from tagging them and returning back over the halfway line. Whilst in defence, a team may score a point by successfully preventing the raider returning to their own half after tagging them. Raiders may only be grabbed by their limbs or torso, not by their hair, clothes or anywhere else, and defenders are not permitted to cross the centre line.</p></li>\\r\\n    <li><p>Each team will take turns in raiding and defending. Following halftime, the two teams switch sides of the court and the team who defended first in the first half begin the second half by raiding.</p></li>\\r\\n    <li><p>The game continues in this way until the time is up, the team with the most points at the end of the match is declared the winner.</p></li>\\r\\n    </ol>\\r\\n</div>\\r\\n{:else if Past==true}\\r\\n<div style=\\"background-color: rgb(220, 178, 130);\\">\\r\\n    <h2 class=\\"Rulesheading1\\" style=\\"text-align: center;\\">Previous Events</h2>\\r\\n    <div style=\\"display: flex;padding-top: 50px;\\">\\r\\n        <div class=\\"card1\\">\\r\\n            <h2 class=\\"cardtext\\">Asian Kabaddi Championships 2023<br>\\r\\n                27 June-30 June 2023<br><br>\\r\\n                Champions:INDIA<br><br>                  \\r\\n                Team :-<br>\\r\\n                </h2>\\r\\n                <h2 class=\\"cardtext1\\">Team India: Arjun Deshwal, Naveen Kumar, Sachin, Aslam Inamdar, \\r\\n                    Mohit Goyat, Sunil Kumar, Parvesh Bhainswal, Nitin Rawal, Nitesh Kumar, Surjeet Singh, \\r\\n                    Vishal Bhardwaj, Pawan Sehrawat\\r\\n                    </h2>\\r\\n        </div>\\r\\n        <div class=\\"card1\\">\\r\\n            <h2 class=\\"cardtext\\">Junior Kabaddi World Championships 2023<br>\\r\\n                26th February-5th March 2023<br><br>\\r\\n                Champions:INDIA<br><br>                   \\r\\n                Team :-<br>\\r\\n                </h2>\\r\\n                <h2 class=\\"cardtext1\\">Team India: Ankush Rathee (captain, left corner), Nardender Kandola (right raider), \\r\\n                    Jai Bhagwan (right raider), Manjeet Sharma (right raider), Sagar Kumar (all rounder), Ashish Malik (left corner), \\r\\n                    Sachin (right cover), Rohit Kumar (left cover), Manu Deshwal (left raider), Abhijit Malik (right raider),\\r\\n                     Vijyant Jaglan (right cover), Yogesh Dahiya (right corner)\\r\\n                    </h2>\\r\\n        </div>\\r\\n        <div class=\\"card1\\">\\r\\n            <h2 class=\\"cardtext\\">MEDELLIN 2023,MEDELLIN<br>\\r\\n                13 - 18 JUNE 2023<br>\\r\\n                WORLD CUP STAGE-3<br><br>\\r\\n                Medals:-<br>\\r\\n                </h2>\\r\\n                <h2 class=\\"cardtext1\\">1. Dhiraj Bommadevara, Mrinal Chauhan and Tushar Shelke-BRONZE [Men's Recurve Team]<br>\\r\\n                    2. Abhishek Verma-GOLD [Men's Individual Compound]<br>\\r\\n                    3. Ojas Deotale, Prathamesh Jawkar and Abhishek Verma-BRONZE [Men's Compound Team]<br>\\r\\n                    4. Parneet Kaur, Aditi Swami and Jyothi Vennam-BRONZE [Women's Compound Team]<br>\\r\\n                    </h2>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n</div>\\r\\n{:else if Future==true}\\r\\n<div style=\\"background-color:rgb(220, 178, 130); padding-bottom: 150px;\\">\\r\\n    <h2 class=\\"Rulesheading1\\" style=\\"text-align: center;\\">Future Events</h2>\\r\\n    <ul class=\\"Rules\\" style=\\"list-style: none;\\">\\r\\n    <li><p>1. Asian Games 2023<br>\\r\\n        Multisport Event<br>\\r\\n        23 September-8 October 2023<br><br>\\r\\n        </p></li>\\r\\n    <li><p>2. Pro Kabaddi League (PKL)<br>\\r\\n        Season 10<br>\\r\\n        Starts:7 October 2023<br><br>\\r\\n        </p></li>\\r\\n    <li><p>3. Men's Kabaddi World Cup 2023<br>\\r\\n           7 October-23 October 2023<br><br>\\r\\n        </p></li>\\r\\n    </ul>\\r\\n</div>\\r\\n{/if}"],"names":[],"mappings":"AAuCI,sBAAQ,CACR,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,CAClB,MAAM,KAAK,CACX,yBAAyB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAC1C,yBAAyB,CAAE,GAAG,CAC9B,WAAW,CAAE,OAAO,CAAC,CAAC,UAC1B,CACA,4BAAc,CACV,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,CACrB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,qBAAqB,CAAC,CAAC,UAAU,CAC9C,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,4BAAc,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,MAAM,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACrB,WAAW,CAAE,OAAO,CAAC,CAAC,UAC1B,CACA,oBAAM,CACF,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,KAAK,CAClB,YAAY,CAAE,KAAK,CACnB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,CACrB,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,qBAAqB,CAAC,CAAC,UAAU,CAC9C,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oBAAM,CACF,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,aAAa,CAAE,IACnB,CACA,uBAAS,CACN,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,qBAAqB,CAAC,CAAC,UAAU,CAC9C,KAAK,CAAE,KACV,CACA,wBAAU,CACN,YAAY,CAAE,IAAI,CAClB,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,qBAAqB,CAAC,CAAC,UAAU,CAC9C,KAAK,CAAE,KACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Sportsheader, "Sportsheader").$$render($$result, {}, {}, {})} ${`<div style="display: flex;background-color:rgb(242, 216, 139);position:relative;border-bottom: 1px solid black;" data-svelte-h="svelte-1ni7lc7"><div style="height: 750px; width: 100%;"><img${add_attribute("src", kabaddi, 0)} style="height: 750px; width: 100%;" alt="kabaddi"></div> <div style="position: absolute;"><h1 class="heading svelte-qlafhc">Kabaddi</h1> <h3 class="frontpagetext svelte-qlafhc" style="width: 50%;"><p>Kabaddi (also known as Kaudi) , is a contact team sport played between two teams of seven players.</p></h3></div></div>`}`;
});
export {
  Page as default
};
