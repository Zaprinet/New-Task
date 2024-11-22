<script setup>
import BackButton from '../component_1/BackButton.vue';
import { ref } from 'vue';


const toggleButton = ref('togglerAnnually')
const toggler = () => {
  if (toggleButton.value === 'togglerAnnually') {
    toggleButton.value = 'togglerMonthly'
  } else {
    toggleButton.value = 'togglerAnnually'
  }
}
</script>

<template>
<div class="wholeArea">
  <BackButton/>
  <div class="smallCircle"></div>
  <div class="smallCircle1"></div>
  <div class="bigCircle"></div>
  <div class="bigCircle1"></div>

    <div class="pricingTable">
    <div class="textArea">
      <h1 class="textHeader">Choose your plan</h1>
      <p class="textAreaText">
        Be the first to know when Boardme launches. Early access users will recieve
        <br>
        an extended free trial and early bird pricing options.
      </p>
      <div class="buttonArea">
        <div class="buttonText1">Billed monthly</div>
        <button class="radioButton" @click="toggler"><div :class="toggleButton"></div></button>
        <div class="buttonText2">Billed annually</div>
      </div>
    </div>

    <div class="cardArea">
      <div class="cards">
        <div class="eachCard">
          <h3 class="cardHeader">Free</h3>
          <h1 class="amount">$0</h1>
          <div class="offers">
            <ul>
              <li><p class="offerText">500 request</p></li>
              <li><p class="offerText">Unlimited projects</p></li>
              <li><p class="offerText">Free extended trial <span>FOR EARLY USERS</span></p></li>
            </ul>
          </div>
          <button class="createAccount">Create Account</button>
        </div>
        <div class="eachCard">
          <h3 class="cardHeader">Standard</h3>
          <h1 class="amount">$99<span class="per">/ month</span></h1>
          <div class="offers1">
            <select name="" id="pricing">
              <option value="2500">2500 request</option>
            </select>
            <ul>
              <p class="activeUsers">Monthly active users</p>
              <li><p class="offerText">2500 request</p></li>
              <li><p class="offerText">Unlimited projects</p></li>
              <li><p class="offerText">Free extended trial <span>FOR EARLY USERS</span></p></li>
            </ul>
          </div>
          <button class="createAccount">Create Account</button>
        </div>
        <div class="eachCard">
          <h3 class="cardHeader">Enterprise</h3>
          <h1 class="amount1">Let's Talk</h1>
          <div class="offers">
            <ul>
              <li><p class="offerText">500 request</p></li>
              <li><p class="offerText">Unlimited projects</p></li>
              <li><p class="offerText">Free extended trial <span>FOR EARLY USERS</span></p></li>
            </ul>
          </div>
          <button class="createAccount">Create Account</button>
        </div>
      </div>

      <p class="noCredit">No credit card required</p>
    </div>
  </div>
</div>
</template>

<style lang="css" scoped>
  .wholeArea{
    position: relative;
    background-color: #f7f9fd;
    height: 100vh;
    width: 100vw;
    font-family: Arial, Helvetica, sans-serif;
    /* padding: 50px; */
    padding-top: 40px;
  }

  .smallCircle{
    position: absolute;
    bottom: 40px;
    left: -10p;
    background-color: #f0f4fd;
    height: 400px;
    width: 400px;
    border-radius: 50% 35% 40% 30%;
    z-index: 0;
  }

  .smallCircle1{
    position: absolute;
    bottom: 40px;
    left: -10px;
    /* background-color: #f0f4fd; */
    height: 500px;
    width: 600px;
    border-radius: 50% 35% 50% 50%;
    border: 1px solid #eceef7;
    z-index: 1;
  }

  .bigCircle{
    position: absolute;
    bottom: 40px;
    right: 50px;
    background-color: #f0f4fd;
    height: 600px;
    width: 600px;
    border-radius: 50% 35% 40% 30%;
    z-index: 0;
  }

  .bigCircle1{
    position: absolute;
    bottom: 40px;
    right: -5px;
    height: 400px;
    width: 500px;
    border-radius: 50% 35% 50% 50%;
    border: 1px solid #eceef7;
    z-index: 1;
  }

  .pricingTable{
    position: relative;
    z-index: 10;
  }

  .textArea{
    margin: auto;
    text-align: center;
  }

  .textHeaders{
    color: #202842;
  }

  .textAreaText{
    color: #202842be;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .buttonArea{
    display: flex;
    justify-content: center;
  }

  .radioButton{
    font-size: larger;
    background-color: #3457dc;
    border: none;
    padding: 2px 20px;
    border-radius: 15px;
    color: white;
    
  }

  .togglerMonthly{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #fff;
    margin-left: -18px;
    transition: 400ms;
  }

  .togglerAnnually{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: -18px;
    transition: 400ms;
  }

  .buttonText1{
    color: #202842be;
    font-size: small;
    margin-top: 5px;
    margin-right: 8px;
  }

  .buttonText2{
    color: #202842be;
    font-size: small;
    margin-top: 5px;
    margin-left: 8px;
  }

  .cardArea{
    margin-top: 10px;
    /* justify-content: center; */
  }

  .cards{
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  .eachCard{
    width: 250px;
    background-color: #fff;
    padding: 40px;
    text-align: center;
    margin-right: 30px;
    box-shadow: 1px 25px 25px 1px #d9e2f9;
  }

  .cardHeader{
    margin: 0;
  }
  
  .amount{
    font-size: 45px;
    margin-bottom: 50px;
  }

  .amount1{
    font-size: 35px;
    margin-top: 40px;
    margin-bottom: 50px;
  }

  .offers{
    text-align: left;
    margin-bottom: 130px;
  }

  .offers1{
    text-align: left;
    margin-bottom: 20px;
  }

  .offerText{
    color: #202842be;
    font-size: small;
    margin-top: 20px;
    /* margin-left: -30px; */
  }

  li{
    margin-left: -28px;
  }

  li::marker{
    color: #a8afc4;
  }

  span{
    border: 1px solid #d5d9e2;
    font-size: 8px;
    margin-left: 8px;
    color: #d5d9e2;
    padding: 4px;
    border-radius: 5px;
  }

  .createAccount{
    border: 1px solid #d5d9e2;
    background-color: transparent;
    font-size: larger;
    margin-top: 8px;
    color: #d5d9e2;
    padding: 10px;
    border-radius: 5px;
    box-shadow: none;
  }

  .createAccount:hover{
    background-color: #4265e2;
    color: rgba(255, 255, 255, 0.765);
    box-shadow: 25px 20px 30px 50px;
  }

  .per{
    color: #000000;
    border: none;
    margin: 0;
    font-size: large;
  }

  #pricing{
   width: 100%;
   padding: 18px 20px;
   background-color: transparent;
   border: 1px solid #d5d9e2;
   border-radius: 5px;
   color: #474d63;
   font-size: 15px;
  }

  .activeUsers{
    text-align: left;
    margin-left: -45px;
    font-size: smaller;
    color: #99aefd;
  }

  .noCredit{
    padding: 3px 15px;
    background-color: #fbfbfe;
    width: 200px;
    text-align: center;
    margin: 10px auto;
    border-radius: 20px;
    color: #7781a0;
  }
  
</style>