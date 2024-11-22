<script setup>
import BackButton from '../component_1/BackButton.vue';


</script>

<template>
  <div class="wholePage">
    <BackButton />
    <div class="nav">
      <img src="/src/assets/Screenshot 2024-11-05 at 09.58.21.png" alt="Logo" style="width: 20px; height: 17px; margin-top: 2px;">
      <h1 class="brandName">flow ui</h1>
    </div>
    <div class="textArea">
      <p class="commingSoon">COMMING SOON</p>
      <p class="description">
        A lightweight and modular front-end framework for developing fast and powerful web interface
      </p>
      <div class="getNotified">
        <h1 class="getNotifiedText">Get notified when we launch</h1>
      </div>
      <input type="email" placeholder="Email address">
      <button class="subscribe">Subscribe</button>
      <div class="icons">
        <img src="/src/assets/Screenshot 2024-11-06 at 09.46.32.png" alt="twitter" style="width: 16px; margin-right: 40px;">
        <img src="/src/assets/Screenshot 2024-11-06 at 09.46.57.png" alt="github" style="width: 16px; margin-right: 40px;">
        <img src="/src/assets/Screenshot 2024-11-06 at 09.47.17.png" alt="facebook" style="width: 12px; margin-right: 40px;">
        <img src="/src/assets/Screenshot 2024-11-06 at 09.47.51.png" alt="web" style="width: 16px;">
      </div>
    </div>
    <div class="pictureArea">
      <div class="row1">
        <div class="brewer">
          <div class="followers">
            <h3 class="barrie">
              Valarrie Brewer
            </h3>
            <p class="follows">4 Followers</p>
          </div>
          <button class="followButton">Follow</button>
        </div>

        <div class="brock">
          <div class="container2">
            <img src="/src/assets/Screenshot 2023-09-15 at 12.39.16.png" alt="" class="dp">
            <div class="profileText">
              <h5 class="profileName">Myrtle Brock</h5>
              <p class="username">@sallytheramos</p>
              <p class="username" style="margin-bottom: 40px;">San Fransisco</p>
            </div>
            <button class="followButton1">Follow</button>
          </div>
          <div class="followed">
            <img src="/src/assets/Screenshot 2023-09-15 at 12.39.16.png" alt="prof" class="followersDp">
            <img src="/src/assets/Screenshot 2023-09-15 at 12.39.16.png" alt="prof" class="followersDp">
            <img src="/src/assets/Screenshot 2023-09-15 at 12.39.16.png" alt="prof" class="followersDp">
            <p class="username1">Followed by <span style="text-decoration: underline;">3 people</span> you follow</p>
          </div>
        </div>

        <div class="intercompany">
          <div class="redCover">
            <div class="redSpot"></div>
          </div>
          <h5 class="profileName">Intercompany</h5>
          <p class="interDescription">A new and better way to acquire, engage and retain customers</p>
          <button class="signUpButton">Sign Up ></button>
        </div>

        <div class="mindnode">
          <div class="mindnodeLogo">
            <img src="/src/assets/Screenshot 2024-11-05 at 14.41.03.png" alt="logo" style="width: 50px;">
          </div>
          <div class="mindnodeText">
            <h3 class="header">Mindnode</h3>
            <p class="subheader">Productivity</p>
            <img src="/src/assets/Screenshot 2024-11-05 at 15.00.44.png" alt="rating" style="width: 55px;">
            <select class="install">
              <option value="Install">Install</option>
            </select>
          </div>
        </div>

        <div class="joinTheArtist">
            <img src="/src/assets/Screenshot 2024-11-05 at 15.13.14.png" alt="envelope" style="width: 50px;">
            <h3 class="artistHeader">
              Join the thousand of 
            </h3>
            <h3 class="artistHeader1">
              artist with a head stamp
            </h3>
            <div class="artistSubheader">
              Lorem ipsum dolor sit amet, consect adipisicing elit. Cum, exercitationem?
            </div>
            <input type="text" placeholder="Email Address">
            <button class="artistSubscribe">Subscribe</button>
        </div>

      </div>
      <div class="row2">
        <div class="accordian">
          <h3 class="accordianHeader">Stakes Of An Accordian</h3>
          <p class="accordianText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae qui nisi.</p>
          <div class="accordianOptions">
            <p class="accordianText" style="color: #9da2b3;">Cars used</p>
            <p class="accordianText" style="color: #9da2b3;">+</p>
          </div>
          <div class="accordianOptions1">
            <p class="accordianText" style="color: #9da2b3;">Cars </p>
            <p class="accordianText" style="color: #9da2b3;">-</p>
          </div>
        </div>

        <div class="norwagian">
          <img src="/src/assets/Screenshot 2024-11-05 at 15.00.44.png" alt="Rating" style="width: 70px;">
          <h4 class="norwagianHeader">Excellent norwagian food!</h4>
          <p class="norwagianText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum soluta vero est natus molestias cumque alias esse at expedita laboriosam?</p>
        </div>

        <div class="intercom">
          <div class="menuButton">...</div>
          <img src="/src/assets/Screenshot 2024-11-05 at 16.36.15.png" alt="" style="width: 30px;">
          <h4 class="intercomHeader">Intercom</h4>
          <p class="intercomText">APPLICATION</p>
          <p class="intercomText2">Convert your hottest leads</p>
        </div>

        <div class="more">
          <button class="follow">Follow</button>
          <div class="moreProfile">
            <img src="/src/assets/Screenshot 2023-09-15 at 12.39.16.png" alt="Dp" class="dp">
            <div class="moreDetails">
              <h5 class="moreHeader">Myrtle Brock</h5>
              <p class="moreText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam esse, saepe porro cumque reprehenderit temporibus.</p>
              <p class="moreText">103 following . 445 Followers</p>
            </div>
          </div>
        </div>

        <div class="freeTrial">
          <h5 class="freeTrialHeader">Free trial</h5>
          <img src="/src/assets/Screenshot 2024-11-06 at 09.48.11.png" alt="loading" style="width: 25px;">
          <p class="moreText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. reprehenderit temporibus.</p>
          <button class="upgrade">Upgrade</button>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .wholePage{
    height: 95vh;
    width: 90vw;
    overflow-x: hidden;
    overflow-y: auto;
    border: 4px solid black;
    border-radius: 10px;
    background-color: #f7f8fc;
    font-family: Arial, Helvetica, sans-serif;
    margin: 4vh auto;
  }

  .nav{
    display: flex;
    margin: 40px 40px 60px;
  }

  .brandName{
    font-weight: bolder;
    font-size: large;
    margin: 0px;
    margin-left: 10px;
    color: #171f35;
  }

  .textArea{
    margin-left: 12.5%;
    width: 35%;
  }

  .commingSoon{
    font-size: 10px;
    color: #8c92a6;
    margin-bottom: 15px;
  }

  .description{
    line-height: 23px;
    color: #5f6371;
  }

  .getNotified{
    width: 55%;
  }

  .getNotifiedText{
    color: #10182f;
    font-size: 30px;
    font-weight: 600;
  }

  input[type="email"] {
    padding: 10px 20px;
    padding-right: 50px;
    border: 1px solid #eaedf9;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .subscribe{
    background-color: #10182f;
    color: white;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
  }

  .icons{
    margin-top: 30px;
    margin-left: 20px;
  }

  .pictureArea{
    width: 120vw;
    height: 50%;
    margin-left: -3vw;
  }

  .row1{
    display: flex;
    margin-top: 150px;
    margin-bottom: 20px;
  }

  .brewer{
    display: flex;
    width: 13%;
    height: 25px !important;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
  }

  .followers{
    margin: 0;
    margin-right: 10px;
    justify-content: space-between;
    width: 130px;
  }

  .barrie{
    font-size: 10px;
    margin: 0px ;

  }
  .follows{
    font-size: 8px;
    margin-left: 25px;
    margin-top: 3px;
    color: #a6abba;
  }
  .followButton{
    height: 25px;
    padding-left: 18px;
    padding-right: 18px;
    background-color: transparent;
    border: 1px solid #f3f5fc;
    border-radius: 4px;
  }

  .brock{
    width: 15%;
    height: 130px;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    padding-bottom: 6px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
    margin-left: 20px;
    margin-right: 20px
  }
  .container2{
    display: flex;
  }
  .dp{
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .profileText{
    margin-left: 12px;
    margin-right: 15px; 
  }

  .profileName{
    margin: 0;
  }

  .username{
    font-size: small;
    margin-top: 3px;
    margin-bottom: 10px;
  }

  .followButton1{
    height: 25px;
    margin-top: 30px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #10182f;
    border: 1px solid #10182f;
    border-radius: 4px;
    color: white;
  }

  .followed{
    border-top: 1px solid #f3f5fc;
    width: 65%;
    margin-left: 25%;
    padding-top: 10px;
    display: flex;
  }

  .followersDp{
    width: 12px;
    height: 12px;
    margin-left: -5px;
    border-radius: 50%;
    border: 2px solid white;
    /* display: inline-block; */
  }

  .username1{
    font-size: 9px;
    margin-top: 2px;
    margin-left: 5px;
    color: #919496;
  }

  .intercompany{
    width: 13%;
    background-color: white;
    border-radius: 5px;
    padding: 25px;
    padding-bottom: 25px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
    margin-right: 20px;
    margin-top: -120px;
  }

  .redCover{
    height: 75px;
    width: 75px;
    background-color: #fff9fa;
    border-radius: 20px;
    position: relative;
    margin-bottom: 20px;
  }

  .redSpot{
    background-color: #df184a;
    height: 40px;
    width: 40px;
    top: 17px;
    left: 17px;
    border-radius: 50%;
    position: absolute;
  }

  .interDescription{
    color: #707583;
    font-size: 12px;
    margin-bottom: 50px;
  }

  .signUpButton{
    background-color: #10182f;
    border: 1px solid #10182f;
    border-radius: 4px;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .mindnode{
    width: 12%;
    background-color: white;
    border-radius: 5px;
    padding: 22px;
    padding-left: 17px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
    margin-right: 20px;
    display: flex;
    margin-top: -10px;
  }

  .mindnodeLogo{
    padding: 5px;
    border: 1px solid #f3f5fc;
    height: 50px;
    border-radius: 10px;
  }

  .mindnodeText{
    margin-left: 10px;
  }

  .header{
    margin: 0;
    margin-top: 5px;
    margin-bottom: 3px;
    font-size: 15px;
  }

  .subheader{
    color: #9da2b3;
    font-size: x-small;
    margin-top: 4px;
    margin-bottom: 2px;
  }

  .install{
    display: block;
    margin-top: 40px;
  }

  .joinTheArtist{
    width: 12%;
    background-color: white;
    border-radius: 5px;
    padding: 25px;
    padding-left: 17px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
    text-align: center;
    margin-top: -110px;
  }

  .artistHeader{
    font-size: 13px;
    margin-bottom: 0;
  }

  .artistHeader1{
    font-size: 13px;
    margin-top: 0;
  }

  .artistSubheader{
    font-size: 11px;
    margin-top: 0;
    margin-bottom: 20px;
    color: #979ba5;
  }

  input[type="text"]{
    font-size: 12px;
    padding-left: 13px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .artistSubscribe{
    margin-top: 10px;
    padding: 4px 58px;
    background-color: #10182f;
    border: 1px solid #10182f;
    border-radius: 4px;
    color: white;
  }


  .row2{
    display: flex;
    /* margin-top: 150px; */
  }

  .accordian{
    width: 13%;
    /* height: 25px; */
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
    text-align: center;
    margin-top: -90px;
    margin-right: 20px;
  }

  .accordianHeader{
    font-size: 15px;
  }

  .accordianText{
    font-size: 12px;
  }

  .accordianOptions{
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid #f0f3fb;
    margin-top: 20px;
  }

  .accordianOptions1{
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid #f0f3fb;
  }
  
  .norwagian{
    width: 20%;
    /* height: 25px; */
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
    margin-right: 40px;
  }

  .norwagianHeader{
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 0;
  }

  .norwagianText{
    font-size: small;
    margin-top: 8px;
  }

  .intercom{
    width: 7.5%;
    /* height: 25px; */
    background-color: #306bf3;
    border-radius: 3px;
    padding: 20px 20px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
    position: relative;
    text-align: center;
    margin-right: 25px;
  }

  .menuButton{
    position: absolute;
    top: 0;
    right: 10px;
    color: white;
    border: none;
    background-color: none;
    /* width: 50px; */
  }

  .intercomHeader{
    font-size: 11px;
    color: white;
    margin-top: 8px;
    margin-bottom: 0;
  }

  .intercomText{
    color: rgba(255, 255, 255, 0.754);
    background-color: #2f5cc6;
    font-size: 8px;
    display: inline;
    padding: 3px;
    margin: 0;
  }

  .intercomText2{
    color: white;
    font-size: 8px;
  }

  .more{
    position: relative;
    width: 17%;
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
    margin-right: 25px;
  }

  .follow{
    position: absolute;
    top: 20px;
    right: 40px;
    color: white;
    background-color: #10182f;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
  }

  .moreProfile{
    display: flex;
    margin-top: 30px;
  }

  .moreHeader{
    font-size: 13px;
    margin: 0;
  }

  .moreDetails{
    margin-left: 15px;
  }

  .moreText{
    font-size: 8px;
    color: #787c89;
  }

  .freeTrial{
    width: 7%;
    background-color: white;
    border-radius: 5px;
    padding: 10px 25px;
    box-shadow: 5px 10px 35px 1px rgba(11, 11, 11, 0.154);
  }

  .freeTrialHeader{
    margin: 0;
    margin-bottom: 5px;
    font-size: 12px;
  }

  .upgrade{
    font-size: 11px;
    color: white;
    background-color: #10182f;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
  }
</style>