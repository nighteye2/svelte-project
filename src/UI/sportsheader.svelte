<script>
    import logo from "$lib/images/frolic nation white logo.png";
    import { createEventDispatcher } from "svelte";
    import { goto } from "$app/navigation";

    const dispatch = createEventDispatcher();

    function visithome(){
        goto('/')
    }

    function showhome(){
        dispatch('show-home', {id:'b1'});
    }

    function showrules(){
        dispatch('show-rules', {id:'b2'});
    }

    function showpast(){
        dispatch('show-past', {id:'b3'});
    }

    function showfuture(){
        dispatch('show-future', {id:'b4'});
    }
</script>

<style>
    *{
    margin: 0;
}
.navigation{
    display: flex;
    height: 100px;
    background-color:rgb(67, 51, 82);
    width: 100%;
    border-bottom: 1px solid rgb(32, 32, 32);
    border-top: 1px solid rgb(32, 32, 32);
}
.Logo{
    height: 100px;
    width: 100px;
}
.navigation h1{
    padding-right: 15%;
    margin-top: 8px;
    font-size: 60px;
    color: rgb(255, 255, 255);
    font-family: 'Oswald', sans-serif;
}
.link{
    height: 50px;
    width: 85px;
    margin-top: 30px;
    margin-bottom: 56px;
    font-family: 'Yatra One', cursive;
    font-size: 20px;
    text-align: center;
    transition: 0.5s;
    border: 1px transparent black;
    padding: 10px;
    border-radius: 10px;
    margin-right: 2%;
    color: rgb(255, 255, 255);
    text-decoration: none;
    background-color: rgb(105, 70, 138);
}
.link:hover{
    border: 1px solid rgb(255, 255, 255);
    padding: 10px;
    background-color: rgb(255, 255, 255);
    color: rgb(105, 70, 138);
    transition: 0.5s;
}
</style>


<div class="navigation">
    <img src={logo} class="Logo" style="margin-left: 8%;margin-right: 2%;" alt="logo">
    <h1 class="logoname" >FROLIC NATION</h1>
    <div style="display: flex; gap: 10%;">
        <button class="link" on:click={visithome}>Home</button>
        <button class="link" on:click={showrules}>Rules</button>
        <button class="link" style="font-size: 12px;" on:click={showfuture}>Future Events</button>
        <button class="link" style="font-size: 12px;" on:click={showpast}>Past events</button>
        <button class="link" on:click>Login</button>
    </div>
</div>