<script>
    import { goto } from "$app/navigation";
    import Header from "../../UI/header.svelte";
    import Card from "../../UI/card.svelte";
    import archery from "$lib/images/archery card1.jpg"
    import kabaddi from "$lib/images/kabaddi card1.jpg"
    import fencing from "$lib/images/fencing image1.jpg"
    import cricket from "$lib/images/cricket.jpg"
    import badminton from "$lib/images/voilet badminton.jpg"

    function visitarchery(){
        goto('/athletics/archery')
    }

    function visitkabaddi(){
        goto('/athletics/kabaddi')
    }

    function visitcricket(){
        goto('/athletics/cricket')
    }

    function visitfencing(){
        goto('/athletics/fencing')
    }

    function visitweightlifting(){
        goto('/athletics/weightlifting')
    }

    function visitbadminton(){
        goto('/athletics/badminton')
    }
</script>
<style>
    .heading3{
    font-size: 70px;
    padding-top: 30px;
    padding-left: 230px;
    color:rgb(67, 51, 82);
    font-family: 'Anton', sans-serif;
    border-bottom: 0;
}
</style>
<Header />
<div style="border-bottom: 1px solid black;">
    <h1 class="heading3" style="background-color:rgb(242, 216, 139)" id="Athletics"><b>Which Physical sport you want to see?</b></h1><br>
<div  style="display: flex;background-color:rgb(242, 216, 139);position:relative;margin-top: 0;">
    <Card 
    filename= {archery}
    sportsname="Archery"
    on:navigation={visitarchery}/>
    <Card 
    filename= {kabaddi}
    sportsname="Kabaddi"
    on:navigation={visitkabaddi}/>
    <Card 
    filename= {fencing}
    sportsname="Fencing"
    on:navigation={visitfencing}/>
</div>
<div  style="display: flex;background-color:rgb(242, 216, 139);position:relative;margin-top: 0;">
    <Card 
    filename= {kabaddi}
    sportsname="Weightlifting"
    on:navigation={visitweightlifting}/>
    <Card 
    filename= {cricket}
    sportsname="Cricket"
    on:navigation={visitcricket}/>
    <Card 
    filename= {badminton}
    sportsname="Badminton"
    on:navigation={visitbadminton}/>
</div>
</div>