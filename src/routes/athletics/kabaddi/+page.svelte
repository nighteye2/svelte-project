<script>
    	import Sportsheader from "../../../UI/sportsheader.svelte";
        import kabaddi from "$lib/images/kabaddi.png";

    let Home=true;
    let rules=false;
    let Past=false;
    let Future=false;

    function displayhome(){
        Home=true;
        rules=false;
        Past=false;
        Future=false;
    }

    function displayrules(){
        Home=false;
        rules=true;
        Past=false;
        Future=false;
    }

    function displaypast(){
        Home=false;
        rules=false;
        Past=true;
        Future=false;
    }

    function displayfuture(){
        Home=false;
        rules=false;
        Past=false;
        Future=true;
    }

</script>
<style>
    .heading{
    font-size: 130px;
    padding-top: 70px;
    padding-left: 40px;
    color:white;
    -webkit-text-stroke-color: rgb(67, 51, 82);
    -webkit-text-stroke-width: 2px;
    font-family: 'Anton', sans-serif;
}
.frontpagetext{
    margin-top: 70px;
    margin-left: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
   padding-left: 20px;
   font-size: 20px;
   font-family: 'Bricolage Grotesque', sans-serif;
   background-color: rgb(67, 51, 82);
   border-radius: 25px;
   color: rgb(250, 250, 250);
}
.Rulesheading1{
    font-size: 70px;
    padding-top: 30px;
    color:rgb(67, 51, 82);
    font-family: 'Anton', sans-serif;
}
.Rules{
    font-size: 25px;
    margin-top: 20px;
    margin-left: 250px;
    margin-right: 250px;
    padding-top: 30px;
    padding-bottom: 30px;
   padding-right: 10px;
   padding-left: 45px;
   font-size: 25px;
   font-family: 'Bricolage Grotesque', sans-serif;
   background-color: rgb(67, 51, 82);
   border-radius: 25px;
   color: rgb(250, 250, 250);
}
.card1{
    margin-top: 50px;
    margin-left: 30px;
    margin-bottom: 30px;
    margin-right: 30px;
    width: 500px;
    height: 500px;
    background-color: rgb(67, 51, 82);
    border-radius: 20px;
}
.cardtext{
   padding-left: 25px;
   font-size: 25px;
   padding-top: 20px;
   font-family: 'Bricolage Grotesque', sans-serif;
   color: white;
}
.cardtext1{
    padding-left: 25px;
    padding-right: 15px;
    font-size: 20px;
    padding-top: 20px;
    font-family: 'Bricolage Grotesque', sans-serif;
    color: white;
 }
</style>
<Sportsheader 
on:show-home={displayhome}
on:show-rules={displayrules}
on:show-past={displaypast}
on:show-future={displayfuture}/>
{#if Home==true}
<div style="display: flex;background-color:rgb(242, 216, 139);position:relative;border-bottom: 1px solid black;">
    <div style="height: 750px; width: 100%;"><img src={kabaddi} style="height: 750px; width: 100%;" alt="kabaddi"></div>
        <div style="position: absolute;">
            <h1 class="heading">Kabaddi</h1>
            <h3 class="frontpagetext" style="width: 50%;"><p>Kabaddi (also known as Kaudi) , is a contact team sport played between two teams of seven players.</p></h3>
        </div>
</div>
{:else if rules==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
    <h2 class="Rulesheading1" style="text-align: center;">Rules of Kabbadi</h2>
    <ol class="Rules">
    <li><p>Each team shall consist of no more than 12 players with only 7 taking to the field at any one time.</p></li>
    <li><p>Because of the physical nature of Kabaddi, matches are categorized in age and weight categories.</p></li>
    <li><p>There are six officials looking after each Kabaddi match. The officials comprise of a referee, a scorer, two assistant scorers and two umpires.</p></li>
    <li><p>The duration of the match is two halves of 20 minutes with a half time break of 5 minutes.</p></li>
    <li><p>At the start of a Kabaddi match, there is a coin toss with the winner having the choice as to whether to have the first raid or not. In the second half of the match, the team that did not raid first shall begin the second half with a raid.</p></li>
    <li><p>To win a point when raiding, the raider must take a breath and run into the opposition’s half and tag one or more members of the opposing team and then return to their own half of the pitch before inhaling again.</p></li>
    <li><p>To prove that another breath hasn’t been taken, the rider must continue to repeatedly yell the word ‘Kabaddi’. Failure to do this, even for just a moment means that the rider must return to their own side of the court without points and the opposite team is awarded a point for a successful defense play.</p></li>
    <li><p>The team being raided is defending, and the players must prevent the raiders from tagging them and returning back over the halfway line. Whilst in defence, a team may score a point by successfully preventing the raider returning to their own half after tagging them. Raiders may only be grabbed by their limbs or torso, not by their hair, clothes or anywhere else, and defenders are not permitted to cross the centre line.</p></li>
    <li><p>Each team will take turns in raiding and defending. Following halftime, the two teams switch sides of the court and the team who defended first in the first half begin the second half by raiding.</p></li>
    <li><p>The game continues in this way until the time is up, the team with the most points at the end of the match is declared the winner.</p></li>
    </ol>
</div>
{:else if Past==true}
<div style="background-color: rgb(220, 178, 130);">
    <h2 class="Rulesheading1" style="text-align: center;">Previous Events</h2>
    <div style="display: flex;padding-top: 50px;">
        <div class="card1">
            <h2 class="cardtext">Asian Kabaddi Championships 2023<br>
                27 June-30 June 2023<br><br>
                Champions:INDIA<br><br>                  
                Team :-<br>
                </h2>
                <h2 class="cardtext1">Team India: Arjun Deshwal, Naveen Kumar, Sachin, Aslam Inamdar, 
                    Mohit Goyat, Sunil Kumar, Parvesh Bhainswal, Nitin Rawal, Nitesh Kumar, Surjeet Singh, 
                    Vishal Bhardwaj, Pawan Sehrawat
                    </h2>
        </div>
        <div class="card1">
            <h2 class="cardtext">Junior Kabaddi World Championships 2023<br>
                26th February-5th March 2023<br><br>
                Champions:INDIA<br><br>                   
                Team :-<br>
                </h2>
                <h2 class="cardtext1">Team India: Ankush Rathee (captain, left corner), Nardender Kandola (right raider), 
                    Jai Bhagwan (right raider), Manjeet Sharma (right raider), Sagar Kumar (all rounder), Ashish Malik (left corner), 
                    Sachin (right cover), Rohit Kumar (left cover), Manu Deshwal (left raider), Abhijit Malik (right raider),
                     Vijyant Jaglan (right cover), Yogesh Dahiya (right corner)
                    </h2>
        </div>
        <div class="card1">
            <h2 class="cardtext">MEDELLIN 2023,MEDELLIN<br>
                13 - 18 JUNE 2023<br>
                WORLD CUP STAGE-3<br><br>
                Medals:-<br>
                </h2>
                <h2 class="cardtext1">1. Dhiraj Bommadevara, Mrinal Chauhan and Tushar Shelke-BRONZE [Men's Recurve Team]<br>
                    2. Abhishek Verma-GOLD [Men's Individual Compound]<br>
                    3. Ojas Deotale, Prathamesh Jawkar and Abhishek Verma-BRONZE [Men's Compound Team]<br>
                    4. Parneet Kaur, Aditi Swami and Jyothi Vennam-BRONZE [Women's Compound Team]<br>
                    </h2>
        </div>
    </div>

</div>
{:else if Future==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
    <h2 class="Rulesheading1" style="text-align: center;">Future Events</h2>
    <ul class="Rules" style="list-style: none;">
    <li><p>1. Asian Games 2023<br>
        Multisport Event<br>
        23 September-8 October 2023<br><br>
        </p></li>
    <li><p>2. Pro Kabaddi League (PKL)<br>
        Season 10<br>
        Starts:7 October 2023<br><br>
        </p></li>
    <li><p>3. Men's Kabaddi World Cup 2023<br>
           7 October-23 October 2023<br><br>
        </p></li>
    </ul>
</div>
{/if}