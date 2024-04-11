<script>
    import whoarewe from "$lib/images/who we are (1).png"
    import Header from "../../UI/header.svelte";
</script>

<style>
    .Heading1{
    font-size: 150px;
    padding-top: 30px;
    padding-left: 195px;
    color:transparent;
    -webkit-text-stroke-color: rgb(242, 216, 139);
    -webkit-text-stroke-width: 2px;
    font-family: 'Anton', sans-serif;
    margin-bottom: 0px;
    margin-top: 0px;
}
.sub-heading1{
    font-size: 65px;
    padding-top: 10px;
   color: rgb(242, 216, 139);
   font-family: 'Oswald', sans-serif;
   transform: translateX(+150px);
   transform: translateY(-20px);
   padding-left: 70px;
   
}
.frontpagetext1{
    margin-right: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
   padding-right: 10px;
   padding-left: 10px;
   font-size: 25px;
   font-family: 'Bricolage Grotesque', sans-serif;
   background-color: rgb(242, 216, 139);
   border-radius: 25px;
   color: rgb(0, 0, 0);
}
</style>
<Header />


<div style="display: flex;background-color:rgb(67, 51, 82);position:relative;"data-aos="slide-up">
    <div style="height: 100%;width: 40%; margin-top: 70px;"><img src={whoarewe} style="height: 500px;width: 600px;"data-aos="slide-right" data-aos-delay="1000" alt="who are we"></div>
    <div style="height: 100%;width: 60%;background-color: rgb(67, 51, 82); margin-top: 90px;">
        <h1 class="Heading1"><b>Who</b><span class="sub-heading1">are we??</span></h1><br><br>
        <h3 class="frontpagetext1"data-aos="slide-left"><p>Frolic nation is hub that discovers a wide range of sports & provides
            information on every aspect of sport, from popular sports like Football,
            Cricket, Basketball to niche sports like Archery and table tennis.
        </p></h3>
    </div>
</div>