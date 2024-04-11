<script>
  import { createEventDispatcher } from "svelte";
    export let filename;
    export let sportsname;

    let dispatch= createEventDispatcher();

    function navigate(){
      dispatch('navigation');
    }
</script>
<style>
    .card1{
    margin-top: 130px;
    margin-left: 50px;
    margin-bottom: 30px;
    margin-right: 50px;
    width: 400px;
    height: 400px;
    background-color: rgb(67, 51, 82);
    border-radius: 20px;
}
.cardtext{
  margin-left: 30%;
  padding-left: 20px;
  font-size: 25px;
  padding-right: 20px;
  font-family: 'Bricolage Grotesque', sans-serif;
  text-decoration: none; 
  color: rgb(255, 255, 255); 
  background-color: rgb(105, 70, 138);
  border: none;
}
.cardtext:hover{
  padding-left: 20px;
  font-size: 25px;
  padding-right: 20px;
  font-family: 'Bricolage Grotesque', sans-serif;
  color: rgb(105, 70, 138);  
  background-color: rgb(255, 255, 255);
}
</style>

<div class="card1"data-aos="slide-right">
    <img src={filename} style="height: 350px;width: 400px;border-radius: 20px;" alt="sportsImage">
    <button class="cardtext" on:click={navigate}>{sportsname}</button>
</div>