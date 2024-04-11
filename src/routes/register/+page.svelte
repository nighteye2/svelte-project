<script lang="ts">
  import Header from '../../UI/header.svelte'
  import type { ActionData } from './$types'

  export let form: ActionData
  
</script>
<style>
  body {
background-color: rgb(217, 170, 26);
font-family: "Asap", sans-serif;
}

.login {
overflow: hidden;
background-color: rgb(238, 202, 93);
padding: 40px 30px 30px 30px;
border-radius: 10px;
position: absolute;
top: 50%;
left: 50%;
width: 400px;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
-webkit-transition: -webkit-transform 300ms, box-shadow 300ms;
-moz-transition: -moz-transform 300ms, box-shadow 300ms;
transition: transform 300ms, box-shadow 300ms;
box-shadow: 5px 10px 10px rgba(2, 128, 144, 0.2);
}
.login::before, .login::after {
content: "";
position: absolute;
width: 600px;
height: 600px;
border-top-left-radius: 40%;
border-top-right-radius: 45%;
border-bottom-left-radius: 35%;
border-bottom-right-radius: 40%;
z-index: -1;
}
.login::before {
left: 40%;
bottom: -130%;
background-color: rgb(168, 168, 204);
-webkit-animation: wawes 6s infinite linear;
-moz-animation: wawes 6s infinite linear;
animation: wawes 6s infinite linear;
}
.login::after {
left: 35%;
bottom: -125%;
background-color: rgb(165, 165, 211);
-webkit-animation: wawes 7s infinite;
-moz-animation: wawes 7s infinite;
animation: wawes 7s infinite;
}
.login > input {
font-family: "Asap", sans-serif;
display: block;
border-radius: 5px;
font-size: 16px;
background: white;
width: 100%;
border: 0;
padding: 10px 10px;
margin: 15px -10px;
}
.login > button {
font-family: "Asap", sans-serif;
cursor: pointer;
color: #fff;
font-size: 14px;
text-transform: uppercase;
width: 80px;
border: 0;
padding: 15px 0;
margin-top: 10px;
margin-left: -5px;
border-radius: 5px;
background-color: #090909;
-webkit-transition: background-color 300ms;
-moz-transition: background-color 300ms;
transition: background-color 300ms;
}
.login > button:hover {
background-color: #f24353;
}

@-webkit-keyframes wawes {
from {
  -webkit-transform: rotate(0);
}
to {
  -webkit-transform: rotate(360deg);
}
}
@-moz-keyframes wawes {
from {
  -moz-transform: rotate(0);
}
to {
  -moz-transform: rotate(360deg);
}
}
@keyframes wawes {
from {
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  -ms-transform: rotate(0);
  -o-transform: rotate(0);
  transform: rotate(0);
}
to {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
}
}
a {
text-decoration: none;
color: rgba(255, 255, 255, 0.6);
position: absolute;
right: 10px;
bottom: 10px;
font-size: 12px;
}
</style>
<Header />
<body>
<form class="login" action="?/register" method="POST">
  <input type="text" placeholder="Username" id="username" name="username" required>
  <input type="password" placeholder="Password" id="password" name="password" required>
  {#if form?.user}
  <p class="error">Username is taken.</p>
{/if}
  <button type="submit">Register</button>
</form>
</body>

  