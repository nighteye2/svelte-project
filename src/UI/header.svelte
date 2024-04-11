<script>
    import logo from "$lib/images/frolic nation white logo.png"
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
    height: 30px;
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
        <a href="/" class="link">Home</a>
        <a href="/athletics" class="link">Athletics</a>
        <a href="#Esports" class="link">Esports</a>
        <a href="/about" class="link">About</a>
        <a href="/login" class="link">Login</a>
    </div>
</div>
