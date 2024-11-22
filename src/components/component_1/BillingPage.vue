<script setup>
import BackButton from './BackButton.vue';


</script>

<template>
  <section id="whole">
    <BackButton />
    <div class="redSide"></div>
    <div class="mainSide">
      <div class="sideBar">
        <div class="profile">
          <img src="/src/assets/Screenshot 2023-09-15 at 12.39.16.png" alt="Profile Picture" class="dp">
          <div class="username">
            <p class="realName">Prince EN</p>
            <p class="fakeName">@zaprinet</p>
          </div>
        </div>
        <div class="sidebarNav">
          <div class="eachNav">
            <div class="isActiveBar"></div>
            <img src="/src/assets/charm--layout-dashboard.png" alt="General" class="navIcons">
            <p class="navIconsText">General</p>
          </div>
          <div class="eachNav">
            <div class="isActiveBar"></div>
            <img src="/src/assets/mdi--password-outline.png" alt="Password" class="navIcons">
            <p class="navIconsText">Password</p>
          </div>
          <div class="eachNav">
            <div class="isActiveBar"></div>
            <img src="/src/assets/lets-icons--message-light.png" alt="Password" class="navIcons">
            <p class="navIconsText">Invitations</p>
          </div>
          <div class="eachNav">
            <div class="isActiveBar1"></div>
            <img src="/src/assets/material-symbols--payments-rounded.png" alt="Password" class="navIcons">
            <p class="navIconsText">Billing</p>
          </div>
          <div class="eachNav">
            <div class="isActiveBar"></div>
            <img src="/src/assets/material-symbols-light--apps.png" alt="Password" class="navIcons">
            <p class="navIconsText">Apps</p>
          </div>
          <div class="logout">
            <img src="/src/assets/humbleicons--logout.png" alt="Password" class="navIcons">
            <p class="navIconsText">Logout</p>
          </div>
        </div>
      </div>
      <div class="mainArea">
        <h1 class="billPage">Billing</h1>
        <p class="orderHistory">Order History</p>
        <p class="normalText">
          Manage billing information and view reciept
        </p>
        <div class="tableHeaders">
          <p class="normalText">Date</p>
          <p class="normalText">Type</p>
          <p class="normalText">Reciept</p>
        </div>
        <div class="tableContents">
          <p class="transHistory1">Oct 2, 2023</p>
          <p class="transHistory2">Pro Annual</p>
          <button class="transHistory3">Download</button>
        </div>
        <div class="tableContents">
          <p class="transHistory1">Nov 3, 2023</p>
          <p class="transHistory2">Pro Portfolio</p>
          <button class="transHistory3">Download</button>
        </div>
        <div class="tableContents">
          <p class="transHistory1">Nov 7, 2023</p>
          <p class="transHistory2">Sponsored Post</p>
          <button class="transHistory3">Download</button>
        </div>
        <div class="tableContents">
          <p class="transHistory1">Nov 7, 2023</p>
          <p class="transHistory2">Sponsored Post</p>
          <button class="transHistory3">Download</button>
        </div>
        <a href="/index.html" style="color: red; text-decoration: underline;">Load more</a>
        <p class="paymentMethod">Payment Method</p>
        <p class="normalText">
          Manage billing information and view reciept
        </p>
        <div class="tableContents">
          <button class="transHistory1">VISA</button>
          <p class="transHistory2">Visa ending 2235</p>
          <button class="transHistory3">Remove</button>
        </div>
        <div class="planType">
          <p class="yourplanText2">Your plan</p>
          <h3 class="yourplanText1">Pro Annual</h3>
          <p class="yourplanText2">Renews on Nov, 2021.</p>
          <button class="cancelSub">Cancel Subscription</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
  section{
    background-color: rgba(210, 213, 249, 0.855);
    height: 100vh;
    width: 100vw;
    margin: 0 ;
    position: relative;
    border-radius: 15px;
    font-family: Arial, Helvetica, sans-serif
  }

  .redSide{
    background-color: rgb(236, 76, 45);
    height: 85%;
    width: 13.5%;
    border-radius: 25px;
    position: absolute;
    top: 10%;
    left: 5%;
    /* display: flex; */
    /* flex-direction: row; */
  }

  .mainSide{
    background-color: rgb(250, 250, 250);
    height: 75%;
    width: 84%;
    position: absolute;
    top: 15%;
    left: 8%;
    border-radius: 25px;
      display: flex; 
      flex-direction: row;
  }

  .sideBar{
    background-color:  rgba(240, 232, 254, 0.615);
    width: 17%;
    height: 100%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    position: relative;
  }

  .mainArea{
    width: 83%;
    height: 100%;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    padding-top: 35px;
    padding-left: 70px;
  }

  .planType{
    background-color:rgb(236, 76, 45);
    height: 140px;
    width: 150px;
    border-radius: 15px;
    position: absolute;
    top: 19%;
    right: 4%;
    color: white;
    padding: 20px 10px;
  }

  .profile{
    display: flex;
    flex-direction: row;
    padding-top: 40px;
    padding-left: 20px;
    align-items: center;
    font-size: small;
  }

  .dp{
    width: 25%;
    height: 25%;
    border-radius: 10px;
  }
  
  .username{
    margin-left: 10px;
  }

  .realName{
    font-weight: 700;
    padding-top: 2px;
  }

  .fakeName{
    margin-top: -5px;
    color: rgba(0, 0, 0, 0.447);
  }

  .sidebarNav{
    margin-top: 20px;
  }
  
  .eachNav{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  .isActiveBar1{
    background-color: rgb(221, 56, 23);
    width: 2.5%;
    margin-left: 10px;
    margin-right: 12px;
    border-radius: 2px;
  }

  .isActiveBar{
    background-color: rgba(221, 56, 23, 0);
    width: 2.5%;
    margin-left: 10px;
    margin-right: 12px;
    border-radius: 2px;
  }

  .navIcons{
    width: 10%;
    height: 10%;
    opacity: 0.447;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 12px;
  }

  .navIconsText{
    color: rgba(0, 0, 0, 0.447);
    margin: 5px;
    padding-bottom: 5px;
  }

  .logout{
    display: flex;
    flex-direction: row;
    /* margin-top: 200px; */
    margin-left: 17px;
    position: absolute;
    bottom: 20px;
  }

  .billPage{
    font-weight: bolder;
    margin-bottom: 40px;
  }

  .orderHistory{
    font-weight: bold;
    margin-bottom: -10px;
  }

  .normalText{
    color: rgba(0, 0, 0, 0.49);
  }

  .tableHeaders{
    width: 67%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }

  .tableContents{
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .transHistory1{
    font-weight: bold;
    margin-right: 20%;
    margin-top: 0;
    margin-bottom: 0;
  }
  .transHistory2{
    font-weight: bold;
    margin-right: 18%;
    margin-top: 0;
    margin-bottom: 0;
  }
  .transHistory3{
    font-weight: bold;
    margin-left: 5.5%;
    height: 30px;
  }

  .paymentMethod{
    margin-top: 4%;
    margin-bottom: -1.5%;
    font-weight: bold;
  }

  .yourplanText1{
    font-weight: bolder;
    margin-top: 7px;
  }

  .yourplanText2{
    font-size: 12px;
    font-weight: 500;
  }

  .cancelSub{
    background-color: rgba(240, 248, 255, 0);
    color: white;
    font-size: 12px;
    font-weight: bold;
    display: block;
    margin-top: 2px;
    padding: 5px 5px;
    border: 1px solid rgb(224, 221, 221);
    border-radius: 5px;
  }

</style>