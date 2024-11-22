<script setup>
import BackButton from '../component_1/BackButton.vue';


</script>

<template>
  <div class="wholePage">
    <BackButton />
    <div class="blueCircle"></div>
    <div class="cardHolder">
      <div class="card1">
        <div class="cardTop">
          <h1 class="cardTopHeader">Hobby</h1>
          <h1 class="amount">$29</h1>
          <p class="monthly">/month</p>
          <button class="getStarted"> Get Started</button>
        </div>
        <div class="cardBottom">
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">250 Subscribers</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">5 Team Members</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">2 Metricss</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">250 Subscribers</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">250 Subscribers</p>
          </div>
        </div>
      </div>
      <div class="card2">
        <div class="cardTop">
          <h1 class="cardTopHeader">Startup</h1>
          <h1 class="amount">$99</h1>
          <p class="monthly">/month</p>
          <button class="getStarted"> Get Started</button>
        </div>
        <div class="cardBottom">
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">1000 Subscribers</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">10 Team Members</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">10 Metrics</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Email/SMS/Webhook Applications</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Custom CSS</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Status & Authenticated Api</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Team Member SSO</p>
          </div>
        </div>
      </div>
      <div class="card3">
        <div class="cardTop">
          <h1 class="cardTopHeader">Enterprise</h1>
          <h1 class="amount">$399</h1>
          <p class="monthly">/month</p>
          <button class="getStarted"> Get Started</button>
        </div>
        <div class="cardBottom">
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">5000 Subscribers</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">25 Team Members</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">25 Metrics</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Email/SMS/Webhook Applications</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Custom CSS/HTML/JS</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Status & Authenticated Api</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Team Member SSO</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Component Subscriptions</p>
          </div>
          <div class="offers">
            <img src="/src/assets/Screenshot 2024-11-06 at 10.59.30.png" alt="tick" class="tick">
            <p class="offerText">Yearly PO & Invoicing Avg</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .wholePage{
    position: relative;
    background-color: #f7f8fc;
    height: 99vh;
    width: 99vw;
    padding-top: 180px;
    overflow-y: auto;
    font-family: Arial, Helvetica, sans-serif;
  }

  .blueCircle{
    height: 800px;
    width: 800px;
    background-color: #10182f;
    border-radius: 50%;
    margin: auto;
  }

  .cardHolder{
    position: absolute;
    top: 160px;
    left: 60px;
    display: flex;
    transform: rotate(-12deg);
  }

  .card1{
    width: 400px;
    border: 1px solid #e1e6f6;
    border-radius: 15px;
    margin-right: 15px;
    background-color: #ffffff;
    margin-top: 145px;
    margin-bottom: -120px;
  }

  .card2{
    width: 400px;
    border: 1px solid #e1e6f6;
    border-radius: 15px;
    margin-right: 15px;
    margin-top: -70px;
    background-color: #ffffff;
  }

  .card3{
    width: 400px;
    border: 1px solid #e1e6f6;
    border-radius: 15px;
    margin-right: 10px;
    background-color: #ffffff;
    margin-bottom: -190px;
    margin-top: 50px;
  }

  .cardTop{
    text-align: center;
    background-color: #f7f8fc;
    color: #10182f;
    padding: 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  .cardTopHeader{
    font-weight: 500;
  }

  .amount{
    font-size: 54px;
    margin-bottom: 0px;
  }

  .monthly{
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }

  .getStarted{
    padding: 15px 40px;
    border: none;
    background-color: #10182f;
    color: #ffffff;
    font-size: large;
    border-radius: 8px;
    margin-bottom: 40px;
  }

  .cardBottom{
    color: #3b4154;
    text-align: center;
    background-color: #ffffff;
    padding: 20px;
    padding-left: 40px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .offers{
    display: flex;
    text-align: center;
    margin-left: 20px;
    margin-top: 20px
  }
  
  .tick{
    width: 20px;
    transform: rotate(20deg);
  }

  .offerText{
    margin: 0;
    margin-left: 10px;
    color: #2c3347;
  }
</style>