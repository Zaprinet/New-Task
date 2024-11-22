<script setup>
import BackButton from '../component_1/BackButton.vue';
import { ref } from 'vue';

const activeMonth = ref('may')
const linkActive = ref('home')
const showContent = ref(false)

const currentMonth = (newActive) => {
  activeMonth.value = newActive
}

// note that this will be @click of home then the v-show will activate
const activeLink = (newActiveButton) => {
  linkActive.value = newActiveButton
}
</script>

<template>
  <div class="wholePage">
    <BackButton />
    <div class="topBar">
      <div class="icons">
        <img src="/src/assets/ph--info.svg" alt="info" style="width: 100px; margin-right: -20px;">
        <img src="/src/assets/mi--notification.svg" alt="notification" style="width: 100px;">
        <img src="/src/assets/Screenshot 2023-09-15 at 12.39.16.png" alt="dp" class="dp">
      </div>
    </div>

    <div class="nav">
      <div class="mainNav">
        <div @click="activeLink('home')" class="eachNav">
          <p  class="navText">Home</p>
          <div :class="[linkActive === 'home' ? 'activeBar' : 'inActiveBar']"></div>
        </div>
        <div @click="activeLink('audience')" class="eachNav">
          <p class="navText">Audience</p>
          <div :class="[linkActive === 'audience' ? 'activeBar' : 'inActiveBar']"></div>
        </div>
        <div @click="activeLink('behaviour')" class="eachNav">
          <p class="navText">Behaviour</p>
          <div :class="[linkActive === 'behaviour' ? 'activeBar' : 'inActiveBar']"></div>
        </div>
        <div @click="activeLink('conversions')" class="eachNav">
          <p class="navText">Conversions</p>
          <div :class="[linkActive === 'conversions' ? 'activeBar' : 'inActiveBar']"></div>
        </div>
      </div>

      <p class="navText">Customize</p>
    </div>

    <div class="mainBody">
      <div class="analytics">
        <div class="firstRow">
          <div class="activeUsers">
            <p class="activeUsersText">Active User</p>
            <h1 class="activeUsersHeader">72</h1>
            <p class="activeUsersText2">View Refferals</p>
            <img src="/src/assets/Screenshot 2024-11-07 at 13.46.17.png" alt="arrow" class="arrowIcon">
          </div>
          <div class="pageViews">
            <p class="pageViewsText">Page views per minute</p>
              <div class="barGraphs">
                <div class="eachBar"></div>
                <div class="eachBar1"></div>
                <div class="eachBar2"></div>
                <div class="eachBar3"></div>
                <div @mouseover="showContent = true" @mouseleave="showContent = false" class="eachBar4"></div>
                <div class="eachBar5"></div>
                <div class="eachBar6"></div>
                <div class="eachBar7"></div>
                <div class="eachBar8"></div>
                <div class="eachBar9"></div>
                <div class="eachBar10"></div>
                <div class="eachBar11"></div>
                <div class="eachBar12"></div>
                <div class="eachBar"></div>
                <div class="eachBar1"></div>
                <div class="eachBar2"></div>
                <div class="eachBar3"></div>
                <div class="eachBar4"></div>
                <div class="eachBar5"></div>
                <div class="eachBar6"></div>
                <div class="eachBar7"></div>
                <div class="eachBar8"></div>
                <div class="eachBar9"></div>
                <div class="eachBar10"></div>
                <div class="eachBar11"></div>
                <div class="eachBar12"></div>
                <div class="eachBar7"></div>
                <div class="eachBar8"></div>
                <div class="eachBar9"></div>
                <div class="eachBar10"></div>
                <div class="eachBar11"></div>
                <div class="eachBar12"></div>
                <div class="eachBar11"></div>
                
                <div v-if="showContent" class="callOut">
                  <p class="viewCount">48 Page Views</p>
                  <p class="time">3 mins ago</p>
                  <div class="calloutSign"></div>
                </div>
          </div>
            <p class="pageViewsText2">View Refferals</p>
            <img src="/src/assets/Screenshot 2024-11-07 at 14.03.51.png" alt="arrow" class="arrowIcon">
          </div>
        </div>

        <div class="secondRow">
          <div class="eachCard">
            <div class="direction">
              <p class="cardText">Users</p>
              <div class="ratings">
                <img src="/src/assets/formkit--arrowup.svg" alt="" style="height: 17px;">
                <p class="ratingText">268%</p>
              </div>
            </div>
            <h1 class="cardHeader">15K</h1>
          </div>
          <div class="eachCard">
            <div class="direction">
              <p class="cardText">Sessions</p>
              <div class="ratings">
                <img src="/src/assets/formkit--arrowup.svg" alt="" style="height: 17px;">
                <p class="ratingText">268%</p>
              </div>
            </div>
            <h1 class="cardHeader">17K</h1>
          </div>
          <div class="eachCard">
            <div class="direction">
              <p class="cardText">Bounce Rate</p>
              <div class="ratings">
                <img src="/src/assets/formkit--arrowup.svg" alt="" style="height: 17px; fill: red;" class="redArrow">
                <p class="ratingText1">19.7%</p>
              </div>
            </div>
            <h1 class="cardHeader">62.57%</h1>
          </div>
          <div class="eachCard">
            <div class="direction">
              <p class="cardText">Session Duration</p>
              <div class="ratings">
                <img src="/src/assets/formkit--arrowup.svg" alt="" style="height: 17px; fill: red;" class="redArrow">
                <p class="ratingText1">29.7%</p>
              </div>
            </div>
            <h1 class="cardHeader">1m 37s</h1>
          </div>
        </div>

        <div class="thirdRow">
          <div class="noAlert">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="4em" viewBox="0 0 24 24">
              <path fill="#ffd36a" fill-rule="evenodd" d="M12 1a2 2 0 0 0-1.98 2.284A7 7 0 0 0 5 10v8H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-8a7 7 0 0 0-5.02-6.716Q14 3.144 14 3a2 2 0 0 0-2-2m2 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1" clip-rule="evenodd" />
            </svg>
            <div class="noAlertText">
              <h4 class="noAlertHeader">No alerts set</h4>
              <p class="noAlertText1">Get notified when your data drastically change</p>
            </div>
          </div>
  
          <div class="setAlert">Set Alert</div>
        </div>

        <div class="fourthRow">
          <div class="devices">
            <p class="devicesText">Devices</p>
            <div class="months">
              <p @click="currentMonth('may')" :class="[activeMonth === 'may' ? 'monthActive' : 'month']">May</p>
              <p @click="currentMonth('june')" :class="[activeMonth === 'june' ? 'monthActive' : 'month']">June</p>
              <p @click="currentMonth('july')" :class="[activeMonth === 'july' ? 'monthActive' : 'month']">July</p>
              <p @click="currentMonth('august')" :class="[activeMonth === 'august' ? 'monthActive' : 'month']">August</p>
            </div>
            <div class="device">
              <p class="devicetext">Desktop | 52%</p>
              <div class="bar1"></div>
            </div>
            <div class="device">
              <p class="devicetext">Tablet | 15%</p>
              <div class="bar2"></div>
            </div>
            <div class="device">
              <p class="devicetext">Mobile | 36%</p>
              <div class="bar3"></div>
            </div>
          </div>

          <div class="trafficSource">
            <p class="devicesText">Devices</p>
            <button class="tripledot">
              <p style="margin-top: 5px; font-weight: bolder;font-size: 18px;">...</p>
            </button>
            <div class="eachTrafficSource">
              <p class="trafficSourceText">Direct</p>
              <p class="trafficSourceText">24</p>
            </div>
            <div class="eachTrafficSource1">
              <p class="trafficSourceText">Organic</p>
              <p class="trafficSourceText">14</p>
            </div>
            <div class="eachTrafficSource1">
              <p class="trafficSourceText">Social</p>
              <p class="trafficSourceText">5</p>
            </div>
            <div class="eachTrafficSource1">
              <p class="trafficSourceText">Refferal</p>
              <p class="trafficSourceText">5</p>
            </div>
            <div class="eachTrafficSource1">
              <p class="trafficSourceText">Social</p>
              <p class="trafficSourceText">2</p>
            </div>
          </div>
        </div>

      </div>
      
      <div class="moreAnalytics">
        <div class="moreAnalyticsHeader">
          <p class="moreAnalyticsheading">Top pages</p>
          <p class="moreAnalyticsheading">Visits</p>
        </div>

        <div class="visitsAnalytics">
          <p class="visitsAnalyticsText">/</p>
          <p class="visitsAnalyticsText">23,956</p>
        </div>
        <div class="visitsAnalytics">
          <p class="visitsAnalyticsText">/about</p>
          <p class="visitsAnalyticsText">565</p>
        </div>
        <div class="visitsAnalytics">
          <p class="visitsAnalyticsText">/license</p>
          <p class="visitsAnalyticsText">477</p>
        </div>
        <div class="visitsAnalytics">
          <p class="visitsAnalyticsText" style="width: 75%;">/posts/sketch-help-ce...links-search-day-1120</p>
          <p class="visitsAnalyticsText">458</p>
        </div>
        <div class="visitsAnalytics">
          <p class="visitsAnalyticsText" style="width: 75%;">/posts/sketch-pricing-n...cards-search-day-1116</p>
          <p class="visitsAnalyticsText">447</p>
        </div>
        <div class="visitsAnalytics">
          <p class="visitsAnalyticsText" style="width: 75%;">/posts/sketch-stats-ca...plastic-bar-day-1119</p>
          <p class="visitsAnalyticsText">785</p>
        </div>
        <div class="visitsAnalytics">
          <p class="visitsAnalyticsText" style="width: 75%;">/posts/sketch-stats-dark-c...ogress-bar-day-1112</p>
          <p class="visitsAnalyticsText">962</p>
        </div>
        <div class="visitsAnalytics">
          <p class="visitsAnalyticsText" style="width: 75%;">/posts/sketch-stats-dark-c...messages-me...-messaging-ui-kit-day-5952</p>
          <p class="visitsAnalyticsText">558</p>
        </div>
        <div class="visitsAnalytics">
          <p class="visitsAnalyticsText" style="width: 75%;">/posts/sketch-stats-dark-c...ogress-bar-day-1061</p>
          <p class="visitsAnalyticsText">486</p>
        </div>

        <div class="moreStats">
          <div class="moreStatsHeader">
            <p class="moreStatsText">More Stats</p>
            <p class="moreStatsText1" >></p>
          </div>
          <p class="text2">More Stats</p>
          <h3 class="textHeader">42K</h3>
          <p class="text2">More Stats</p>
          <h3 class="textHeader">42K</h3>
        </div>
      </div> 
    </div>
  </div>
</template>

<style lang="css" scoped>
  .wholePage{
    position: relative;
    width: 100vw;
    height: 122vh;
    background-color: #f7f8fc;
    border-radius: 50px;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 20px;
  }

  .topBar{
    width: 100%;
    height: 8%;
    background-color: #0e1731;
    display: flex;
    /* padding-right: 50px; */
    
  }

  .icons{
    position: absolute;
    right: 30px;
    padding-top: 20px;
    padding-right: 10px;
  }

  .dp{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin: -5px;
    margin-left: 5px;
    /* padding-top: 15px; */
  }

  .nav{
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }

  .mainNav{
    display: flex;
    width: 25%;
  }

  .eachNav{
    margin-right: 20px;
    cursor: pointer;
  }

  .navText{
    color: #5b6174;
    font-size: small;
    margin-bottom: 2px;
  }

  .navText:active{
    color: #1a233c;
  }

  .activeBar{
    width: 15px;
    height: 2px;
    background-color: #0e1731;
    border-radius: 2px;
    margin: auto;
    transition: 400ms;
  }

  .inActiveBar{
    display: none;
  }

  .mainBody{
    display: flex;
    justify-content: space-around;
    padding: 0px 20px;
  }

  .analytics {
    width: 70.5%;
    height: 50%;
    /* background-color: #0e1731; */
  }

  .firstRow{
    display: flex;
    justify-content: space-between;
  }

  .activeUsers{
    text-align: left;
    color: white;
    background-color: #0e1731;
    padding: 15px 30px;
    width: 30%;
    border-radius: 10px;
    box-shadow: 1px 15px 25px 1px #b9c0d3;
  }

  .activeUsersText{
    font-size: larger;
    color: #d2d4d9;
  }

  .activeUsersHeader{
    font-size: 45px;
    margin-top: 0px;
  }

  .activeUsersText2{
    font-size: large;
    color: #9498a3;
    display: inline;
  }

  .arrowIcon{
    width: 25px;
    margin-top: 10px;
    margin-left: 10px;
  }


  .pageViews{
    background-color: white;
    padding: 15px 25px;
    width: 57%;
    border-radius: 10px;
  }

  .pageViewsText{
    font-size: larger;
    color: #495063;
  }

  .barGraphs{
    position: relative;
    width: 87%;
    display: flex;
    justify-content: space-evenly;
    transform: rotate(180deg);
    margin-bottom: 10px;
  }

  .eachBar{
    height: 15px;
    width: 8px;
    background-color: #0e1731;
    transform: rotate(180);
  }

  /* .eachBar:hover + .callOut{
    display: block;
  } */

  .eachBar1{
    height: 10px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar2{
    height: 20px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar3{
    height: 20px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar4{
    height: 30px;
    width: 7px;
    background-color: #0e1731;
  }

  /* .eachBar4:hover + .callOut{
    display: block;
  } */

  .eachBar5{
    height: 15px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar6{
    height: 45px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar7{
    height: 10px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar8{
    height: 20px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar9{
    height: 40px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar10{
    height: 65px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar11{
    height: 25px;
    width: 7px;
    background-color: #0e1731;
  }

  .eachBar12{
    height: 55px;
    width: 7px;
    background-color: #0e1731;
  }

  .callOut{
    position: absolute;
    display: block;
    top: 39px;
    right: 397px;
    transform: rotate(180deg);
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    width: 100px;
    box-shadow: 1px 5px 10px 1px #dee2ef;
  }

  .calloutSign{
    padding: 2px;
    /* position: absolute; */
    transform: rotate(45deg);
    width: 2px;
    height: 2px;
    margin-bottom: -18px;
    margin-left: 5px;
    /* bottom: -5px;
    left: 20px; */
    background-color: white;
  }

  .viewCount{
    font-weight: bold;
    font-size: 13px;
    margin: 0;
    color: #18213a;
  }

  .time{
    font-size: 12px;
    margin: 0;
    margin-bottom: 8px;
    margin-top: 5px;
    color: #acb0b9;
  }

  .pageViewsText2{
    font-size: large;
    color: #565d6f;
    display: inline;
  }

  .secondRow{
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
  }

  .eachCard{
    background-color: #fff;
    width: 15%;
    border-radius: 10px;
    padding: 20px 35px;
  }

  .direction{
    display: flex;
    justify-content: space-between;
    height: 40%;
  }

  .cardText{
    color: #515769;
    width: 60px;
    font-size: 15px;
    margin: 0;
  }

  .ratings{
    color: #4ccf9e;
    /* background-color: #1a233c; */
    display: flex;
  }

  .ratingText{
    font-size: 12px;
    margin: 3px;
    margin-left: -13px;
  }

  .ratingText1{
    font-size: 12px;
    margin: 2px;
    margin-left: 4px;
    color: #ec6b88;
  }

  .redArrow{
    fill: red;
    transform: rotate(180deg);
  }

  .cardHeader{
    margin-bottom: 2px;
  }

  .thirdRow{
    padding: 30px;
    background-color: white;
    margin-top: 15px;
    border: 4px solid #edeff7;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }

  .noAlert{
    display: flex;
    padding: auto 20px;
  }

  .noAlertText{
    margin-left: 15px;
  }

  .noAlertHeader{
    font-size: 25px;
    margin-top: 7px;
    margin-bottom: 8px;
    color: #31394f;
  }

  .noAlertText1{
    color: #626879;
    font-size: 13px;
    font-weight: 400; 
    margin-top: 3px
  }

  .setAlert{
    color: #6579e6;
    background-color: #f7f8ff;
    border: 1px solid #dae0ff;
    padding: 0px 50px;
    border-radius: 5px;
    text-align: center;
    align-content: center;
    font-weight: 600;
  }


  .fourthRow{
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
  }

  .devices{
    padding: 20px 40px;
    background-color: white;
    border-radius: 5px;
    width: 41%;
  }

  .devicesText{
    font-size: larger;
  }

  .months{
    display: flex;
    width: 87%;
    padding: 4px 4px;
    border-radius: 10px;
    background-color: #f7f8fc;
    justify-content: space-between;
  }

  .month{
    padding: 12px 25px;
    margin: 0;
    /* background-color: #fff; */
    border-radius: 10px;
    cursor: pointer;
  }

  .monthActive{
    padding: 12px 25px;
    margin: 0;
    background-color: #fff;
    border-radius: 10px;
    transition: 100ms;
  }

  .device{
    color: #4c5366;
  }

  .devicetext{
    margin-bottom: 5px;
    margin-top: 15px;
  }

  .bar1{
    background-color: #0e1731;
    padding: 4px;
    width: 75%;
    margin-top: 0;
  }

  .bar2{
    background-color: #0e1731;
    padding: 4px;
    width: 25%;
    margin-top: 0;
  }

  .bar3{
    background-color: #0e1731;
    padding: 4px;
    width: 55%;
    margin-top: 0;
    margin-bottom: 25px;
  }

  .trafficSource{
    padding: 20px 40px;
    background-color: white;
    border-radius: 5px;
    width: 40%;
    position: relative;
  }

  .tripledot{
    align-content: center;
    /* margin-top: -5px; */
    padding: 1px 15px;
    border: none;
    border-radius: 10px;
    transform: rotate(90deg);
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .eachTrafficSource{
    display: flex;
    margin-top: 40px;
    margin-left: -10px;
    margin-right: -10px;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: transparent;
    justify-content: space-between;
  }

  .eachTrafficSource:hover{
   background-color: #edeff7;
  }
  
  .eachTrafficSource:active{
   background-color: #edeff7;
  }

  .eachTrafficSource1{
    display: flex;
    margin-top: 0px;
    margin-left: -10px;
    margin-right: -10px;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: transparent;
    justify-content: space-between;
  }

  .eachTrafficSource1:hover{
   background-color: #edeff7;
  }
  
  .eachTrafficSource1:active{
   background-color: #edeff7;
  }

  .trafficSourceText{
    margin: 0;
    color: #182139;
    font-weight: 400;
  }

  .moreAnalytics{
    width: 24%;
    height: 50%;
    background-color: #fff;
    border-radius: 10px;
    padding: 30px 20px;
  }

  .moreAnalyticsHeader{
    display: flex;
    justify-content: space-between;
    color: #172039;
    padding-left: 10px;
    margin-bottom: 15px;
  }

  .moreAnalyticsheading{
    margin: 0;
    margin-top: 5px;
    font-size: 20px;
  }

  .visitsAnalytics{
    display: flex;
    justify-content: space-between;
    padding: 7px 3px;
    padding-right: 0;
    border-radius: 10px;
  }

  .visitsAnalytics:hover{
    background-color: #edeff7;
  }

  .visitsAnalyticsText{
    color: #5a6072;
    font-size: 13px;
    margin: 3px
  }

  .moreStats{
    padding: 10px 35px;
    background-color: #6176e5;
    margin-top: 30px;
    border-radius: 5px;
    color: #fff;
    box-shadow: 1px 15px 25px 1px #b9c0d3;
  }

  .moreStatsHeader{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px
  }

  .moreStatsText{
    color: #edeffb;
    font-size: large;
    margin-top: 30px
  }

  .moreStatsText1{
    color: #edeffb;
    font-size: large;
    font-size: larger; 
    padding: 10px 15px;
    margin: 20px 0;
    margin-bottom: 10px;
    background-color: #5168e2;
    border-radius: 3px;
  }

  .text2{
    color: #edeffb;
    margin-bottom: 4px;
  }

  .textHeader{
    font-size: 32px;
    margin-top: 0px;
    margin-bottom: 30px;
  }

</style>