<script>
    import game from "$lib/images/games illustration.png"
</script>

<style>
    .heading{
    padding-top: 5px;
    margin-bottom: 0px;
    font-size: 120px;
    padding-left: 195px;
    color:transparent;
    -webkit-text-stroke-color: rgb(67, 51, 82);
    -webkit-text-stroke-width: 2px;
    font-family: 'Anton', sans-serif;
}
.sub-heading{
    font-size: 70px;
    margin-top: 5px;
   color: rgb(67, 51, 82);
   font-family: 'Anton', sans-serif;
   transform: translateX(+150px);
   transform: translateY(-20px);
   padding-left: 70px;
   margin-bottom: 0px;
}
.frontpagetext{
    margin-top: 10px;
    margin-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
   padding-left: 20px;
   font-size: 25px;
   font-family: 'Bricolage Grotesque', sans-serif;
   background-color: rgb(67, 51, 82);
   border-radius: 25px;
   color: rgb(250, 250, 250);
}
</style>

<div style="display: flex;background-color:rgb(242, 216, 139);position:relative;border-bottom: 1px solid black;" data-aos="fade">
    <div style="height: 650px;width: 55%;background-color: rgb(242, 216, 139);">
        <h1 class="heading"data-aos="fade" data-aos-duration="2000"><b>Where</b></h1><br>
        <h2 class="sub-heading">Passion &nbsp; meets &nbsp; play.</h2><br><br>
        <h3 class="frontpagetext"data-aos="fade-up" data-aos-delay="1000"><p>Frolic nation is hub that discovers a wide range of sports & provides
            information on every aspect of sport, from popular sports like Football,
            Cricket, Basketball to niche sports like Archery and table tennis.
        </p></h3>
    </div>
    <div style="height: 650px;width: 35%;"><img src={game} style="height: 650px;width: 600px;margin-left: 30px;" alt="game"></div>
</div>