<script>
	import Sportsheader from "../../../UI/sportsheader.svelte";
    import archeryimage from "$lib/images/archery.jpg";
    import archery from "$lib/stores/archery-data.js";

    let data = $archery[0];

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
  padding-top: 10px;
  padding-left: 40px;
  color:white;
  -webkit-text-stroke-color: rgb(67, 51, 82);
  -webkit-text-stroke-width: 2px;
  font-family: 'Anton', sans-serif;
  margin-top: 40px;
  margin-left: 100px;
}
.frontpagetext{
  margin-top: 170px;
  margin-left: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
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
    <div style="height: 750px; width: 100%;"><img src={archeryimage} style="height: 750px; width: 100%;" alt="archery"></div>
        <div style="position: absolute;">
            <h1 class="heading">{data.name}</h1>
            <h3 class="frontpagetext" style="width: 50%;"><p>{data.definition}</p></h3>
        </div>
</div>
{:else if rules==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
    <h2 class="Rulesheading1" style="text-align: center;">Rules of Archery</h2>
    <ol class="Rules">
    <li><p>Archers must adhere to all official rules in terms of the equipment they use in the performance of their sport, with the main emphasis being on them using no equipment or accessories that would give an unfair advantage over an opponent.</p></li>
    <li><p>The maximum time permitted to shoot an end of three arrows is two minutes, and four minutes for an end of six arrows.</p></li>
    <li><p>Athletes may not raise the bow arm until the signal to start is given and penalties can be given – in the form of points forfeits – if the bow is drawn after the official practice has been closed.</p></li>
    <li><p>An arrow cannot be re-shot under any circumstances. The arrow may be considered not to have been shot if it falls from the bow or misfires, or if the target blows or falls over. Extra time would be given in such circumstances.</p></li>
    <li><p>An arrow that rebounds or hangs from the target will still score based on the mark it makes on the target face. Arrows that stick – Robin Hood-style – in the nock of another shall score the same as the arrow in which they are embedded.</p></li>
    <li><p>Athletes can be disqualified, have points deducted or be banned from competition for various breaches of rules, based on the severity of the offence.</p></li>
    <li><p>If equipment is damaged, appeals can be made to the judge for such equipment to be replaced or fixed, and any time allowances will be at the judge’s discretion.</p></li>
    </ol>
</div>
{:else if Past==true}
<div style="background-color: rgb(220, 178, 130);">
    <h2 class="Rulesheading1" style="text-align: center;">Previous Events</h2>
    <div style="display: flex;padding-top: 50px;">
        <div class="card1">
            <h2 class="cardtext">PILSEN 2023,PILSEN<br>
                17 - 23 JULY 2023,<br>
                "WORLD ARCHERY PARA CHAMPIONSHIPS"<br><br>
                Medals :-<br>
                </h2>
                <h2 class="cardtext1">1. Sheetal Devi-SILVER[Compound Women Individual]<br><br>
                    2.Sarita and Jyoti-BRONZE[Compound Women Doubles]<br><br>
                    3.Sarita and Rakesh Kumar-GOLD[Compound Mixed Team]<br><br>
                    </h2>
        </div>
        <div class="card1">
            <h2 class="cardtext">LIMERICK 2023,LIMERICK<br>
                3 - 9 JULY 2023<br>
                WORLD ARCHERY YOUTH CHAMPIONSHIPS<br><br>
                Medals :-<br>
                </h2>
                <h2 class="cardtext1" style="font-size: 15px;">1.Parth Salunkhe-GOLD [Men's Individual Recurve-Junior]<br>
                    2.Bhajan Kaur-BRONZE [Women's Individual Recurve-Junior]<br>
                    3.Ridhi and Parth-BRONZE[Recurve Mixed Team-Junior]<br>
                    4.Priyansh-GOLD[Men's Individual Compound-Junior]<br>
                    5.Avneet, Parneet and Pragati-GOLD[Women's Compound Team-Junior]<br>
                    6.Avneet and Priyansh-GOLD[Mixed Compound Team-Junior]<br>
                    7.Ujjwal, Goldi and Agastay-BRONZE[Men's Recurve Team-Cadet]<br>
                    8.Aditi Swami Gopichand-GOLD[Women's Individual Compound-Cadet]<br>
                    9.Aishwarya, Aditi and Ekta-GOLD[Women's Compound Team-Cadet]<br>
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
    <div style="display: flex;padding-top: 50px;">
        <div class="card1">
            <h2 class="cardtext">SHANGHAI 2023,SHANGHAI<br>
                16 - 21 MAY 2023<br>
                WORLD CUP STAGE-2<br><br>
                Medals:-<br>
                </h2>
                <h2 class="cardtext1">Prathamesh Jawkar-GOLD [Men's Individual Compound]<br><br>
                    Avneet Kaur-BRONZE [Women's Individual Compound]<br><br>
                    Jyothi Surekha Vennam and Ojas Deotale-GOLD [Compound Mixed Team]<br><br>
                    </h2>
        </div>
        <div class="card1">
            <h2 class="cardtext">ANTALYA 2023 ,ANTALYA<br>
                18 - 23 APRIL 2023<br>
                WORLD CUP STAGE-1<br><br>
                Medals:-<br>
                </h2>
                <h2 class="cardtext1">1. Dhiraj Bommadevara-BRONZE [Men's Individual Recurve]<br>
                    2. Dhiraj Bommadevara, Tarundeep Rai and Atanu Das-SILVER [Men's Recurve Team]<br>
                    3. Jyothi Surekha Vennam-GOLD [Women's Individual Compound]<br>
                    4. Jyothi Surekha Vennam-GOLD [Mixed Compound Team]<br>
                    </h2>
        </div>
        <div class="card1">
            <h2 class="cardtext">Other events:-</h2>
            <h2 class="cardtext1" style="font-size: 15px;">1. COPA MERENGUE,SANTO DOMINGO<br>
                11 - 15 APRIL 2023<br>
                OTHER INTERNATIONAL EVENT<br><br>
                
                2. LILLESHALL 2023 LILLESHALL NSCC, SHROPSHIRE<br>
                3 - 8 APRIL 2023<br>
                EUROPEAN GRAND PRIX CIRCUIT<br><br>
                
                3. 2023 KAHRAMAN BAGATIR,ANTALYA<br>
                27 - 31 MARCH 2023<br>
                OTHER INTERNATIONAL EVENT<br><br>

                4. INDOOR WORLD SERIES FINALS,LAS VEGAS<br>
                4 FEBRUARY 2023<br>
                INDOOR WORLD SERIES<br><br>

                5. VEGAS SHOOT,LAS VEGAS<br>
                3 - 5 FEBRUARY 2023<br>
                INDOOR WORLD SERIES<br><br>

                </h2>
                <h2 class="cardtext">& Many more.</h2>
        </div>
    </div>
</div>
{:else if Future==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
    <h2 class="Rulesheading1" style="text-align: center;">Future Events</h2>
    <ul class="Rules" style="list-style: none;">
    <li><p>1. BERLIN 2023,<br>
        BERLIN GERMANY<br>	
        31 JULY - 6 AUGUST 2023<br>
        WORLD ARCHERY CHAMPIONSHIPS<br><br>
        </p></li>
    <li><p>2. 2023 CHICAGO PARA-ARCHERY CHAMPIONSHIP,<br>
        CHICAGO USA<br>	
        3 - 6 AUGUST 2023<br>
        OTHER INTERNATIONAL EVENT<br><br>
        </p></li>
    <li><p>3. <b>ROTTERDAM 2023,<br>
        ROTTERDAM NETHERLANDS<br>
        14 - 20 AUGUST 2023<br>
        CONTINENTAL GAMES<br><br>
        </p></li>
    <li><p>4. PARIS 2023,<br>
        PARIS FRANCE<br>	
        15 - 20 AUGUST 2023<br>
        WORLD CUP STAGE-3<br><br>
        </p></li>
    <li><p>5. HERMOSILLO 2023,<br>
        HERMOSILLO MEXICO<br>	
        9 - 10 SEPTEMBER 2023<br>
        WORLD CUP FINAL<br><br>
        </p></li>
    <li><p>6. 2023 EUROPEAN FIELD CHAMPIONSHIPS<br>	
        CESANA SANSICARIO,ITALY	<br>
        18 - 23 SEPTEMBER 2023<br>
        CONTINENTAL GAMES<br><br>
        </p></li>
    <li><p>7. HANGZHOU 2022,<br>
        HANGZHOU PR CHINA<br>
        2 - 8 OCTOBER 2023<br>
        MULTISPORT CONTINENTAL EVENT<br><br>
        </p></li>
        <li><p>8. HANGZHOU 2022,<br>
            HANGZHOU PR CHINA<br>
            22 - 28 OCTOBER 2023<br>
            MULTISPORT CONTINENTAL EVENT<br><br>
            </p></li>
        <li><p>9. LAUSANNE EXCELLENCE CHALLENGE,<br>
            LAUSANNE SWITZERLAND<br>
            27 - 29 OCTOBER 2023<br>
            INDOOR WORLD SERIES<br><br>
            </p></li>
        <li><p>
            10. BANGKOK 2023,<br>
             ASIAN ARCHERY CHAMPIONSHIPS<br>	
            BANGKOK, THAILAND<br>
            3 - 10 NOVEMBER 2023<br>
            CONTINENTAL GAMES<br><br>
            </p></li>
        <li><p>11. IGUAZÚ 2023,<br>
            PAN AMERICAN FIELD CHAMPIONSHIP<br>	
            PUERTO IGUAZÚ,ARGENTINA	<br>
            7 - 13 NOVEMBER 2023<br>
            CONTINENTAL GAMES<br><br>
            </p></li>
        <li><p>12. ASIAN CONTINENTAL QUALIFIER,<br>
            TOURNAMENT FOR THE PARIS 2024,<br>
            OLYMPIC GAMES,<br>	
            BANGKOK, THAILAND<br>
            9 - 12 NOVEMBER 2023<br><br>
            </p></li>
        <li><p>13. GT OPEN,STRASSEN LUXEMBOURG<br>	
            17 - 19 NOVEMBER 2023<br>
            INDOOR WORLD SERIES<br><br>
            </p></li>
        <li><p>14. BANGKOK 2023<br>
             ASIAN PARA ARCHERY<br>
             CHAMPIONSHIPS & CQT 2024<br>	
            BANGKOK, THAILAND<br>
            16 - 25 NOVEMBER 2023<br>
            CONTINENTAL GAMES<br><br>
            </p></li>
        <li><p>15. HONIARA 2023,<br>
            HONIARA SOLOMON ISLANDS<br>
            21 - 24 NOVEMBER 2023<br>
            MULTISPORT CONTINENTAL EVENT<br><br>
            </p></li>
        <li><p>16. TAIPEI ARCHERY OPEN,<br>
            CHINESE TAIPEI<br>
            8 - 10 DECEMBER 2023<br>
            INDOOR WORLD SERIES<br><br>
            </p></li>
    </ul>
</div>
{/if}


