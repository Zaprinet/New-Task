<script setup>
import BackButton from '../component_1/BackButton.vue';


</script>

<template >
  <section class="squareBackground">
      <BackButton />
      <div class="circleBackground"></div>
      <div class="navHolder">
        <div class="nav">
          <div class="navIcons">
            <p class="navText">Road Trip</p>
            <img src="/src/assets/mingcute--down-fill.svg" alt="drop" style="width: 23px;">
          </div>
          <div class="navIcons">
            <p class="navText">1 Passenger</p>
            <img src="/src/assets/mingcute--down-fill.svg" alt="drop" style="width: 23px;">
          </div>
          <div class="navIcons">
            <p class="navText">Economy</p>
            <img src="/src/assets/mingcute--down-fill.svg" alt="drop" style="width: 23px;">
          </div>
        </div>
        <div class="destinationTab">
          <div class="destination">
            <div class="bergen">
              <img src="/src/assets/oui--dot.svg" alt="Dot">
              <p class="cities1">Bergen</p>
            </div>
            <div class="bergen">
              <img src="/src/assets/typcn--location.svg" alt="Location" style="margin-left: 15px;">
              <p class="cities" >Try Amsterdam</p>
            </div>
            <div class="arrowButton">
              <img src="/src/assets/tabler--arrows-double-nw-se.svg" alt="arrows" style="margin-top: 14px; transform: rotate(135deg)">
            </div>
          </div>
          <div class="date">
            <div class="coming">
              <img src="/src/assets/lets-icons--date-fill.svg" alt="Date" style="margin-right: -42px;">
              <p class="cities"  style="margin: auto;">Sat, 17 Oct</p>
              <img src="/src/assets/mingcute--down-fill.svg" alt="" class="toggleLeft">
              <img src="/src/assets/mingcute--down-fill.svg" alt="" class="toggleRight">
            </div>
            <div class="going">
              <p class="cities"  style="margin: auto;">Sat, 17 Oct</p>
              <img src="/src/assets/mingcute--down-fill.svg" alt="" class="toggleLeft">
              <img src="/src/assets/mingcute--down-fill.svg" alt="" class="toggleRight">
            </div>
          </div>
          <div class="search">
            <p class="searchText">Search</p>
          </div>
        </div>
      </div>
      <div class="chartHolder">
        <div class="bars">
          <div class="buttonAmount">
            <button class="chartButton1">$0</button>
            <button class="chartButton2">$10,000+</button>
          </div>
          <div class="line"></div>
          <div class="chartDot">
            <div class="dotStart"></div>
            <div class="dotEnd"></div>
          </div>
          <div class="barGraphs">
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
          </div>
        </div>
      </div>
      <div class="buildTrip">
        <p style="font-weight: bold; font-size: 30px; margin-bottom: 40px">Build your trip</p>
        <div class="tryButton">
          <img src="/src/assets/typcn--location.svg" alt="Location" style="margin-left: 15px;">
          <p class="cities" >Try Amsterdam</p>
        </div>
        <div class="tryButton">
          <img src="/src/assets/lets-icons--date-fill.svg" alt="Location" style="margin-left: 15px; width: 27px;">
          <p class="cities" >Thu, Oct 1 - Fri, Oct 2</p>
        </div>
        <div class="tryButton1">
          <img src="/src/assets/cuida--plus-outline.svg" alt="Location" style="margin-left: 15px; width: 27px;">
          <p class="cities" style="color: #6d92f9;">Add a destination</p>
        </div>
      </div>
  </section>
</template>

<style lang="css" scoped>
  .circleBackground{
    margin: -10px auto;
    height: 950px;
    width: 950px;
    border: 2px black;
    border-radius: 50%;
    background: linear-gradient(150deg, #d383b2, #f9da98 70.71%);
    position: relative;
  }

  .squareBackground{
    height: 100%;
    width: 100%;
    background: linear-gradient(150deg, #c1c5d4, #eef0f7 50.71%);
    margin: auto auto;
    overflow-y: hidden;
    overflow-x: hidden;
    font-family: Arial, Helvetica, sans-serif;
  }

  .navHolder{
    width: 110vw;
    height: 28vh;
    background-color: white;
    position: absolute;
    top: 20%;
    transform: rotate(9deg);
    margin-left: -27px;
    box-shadow: 20px 25px 20px 5px rgba(11, 11, 11, 0.2)
  }

  .nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
    margin-top: 20px;
    margin-left: 20px;
  }

  .navIcons{
    display: flex;
    flex-direction: row;
    padding-right: 25px;
    /* justify-content: space-between; */
  }

  .navText{
    color: #696e8c;
  }

  .destinationTab{
    display: flex;
    flex-direction: row;
  }

  .destination{
    width: 44%;
    height: 65px;
    margin-top: 20px;
    margin-left: 20px;
    border: 2px solid rgba(153, 176, 192, 0.544);
    border-radius: 5px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .bergen{
    width: 45%;
    margin-left: 5%;
    display: flex;
  }

  .cities1{
    margin-left: 6%;
    font-size: large;
    color: #696e8c;
  }
  
  .cities{
    margin-left: 6%;
    font-size: large;
    color: rgba(72, 78, 82, 0.616);
  }
  
  .arrowButton{
    position: absolute;
    left: 43%;
    height: 65px;
    width: 65px;
    border-radius: 50%;
    border: 2px solid rgba(153, 176, 192, 0.544);
    text-align: center;
  }

  .date{
    width: 34%;
    height: 65px;
    margin-top: 20px;
    margin-left: 20px;
    border: 2px solid rgba(153, 176, 192, 0.544);
    border-radius: 5px;
    display: flex;
  }

  .going{
    width: 40%;
    display: flex;
    padding-left: 15px;
    padding-right: 15px
  }

  .coming{
    width: 60%;
    border-right: 2px solid rgba(153, 176, 192, 0.544);
    display: flex;
    padding-left: 15px;
    padding-right: 15px
  }

  .toggleLeft{
    width: 23px;
    transform: rotate(90deg);
  }

  .toggleRight{
    width: 23px;
    transform: rotate(-90deg);
  }

  .search{
    width: 20%;
    height: 65px;
    margin-top: 20px;
    margin-left: 20px;
    border: 2px solid rgba(153, 176, 192, 0.544);
    background: linear-gradient(150deg, #8fcdff, #6d92f9 70.71%);
    border-radius: 5px;
    text-align: center;
    align-items: center;
    color: white;
    box-shadow: 20px 25px 20px 5px rgba(109,146,249, 0.2)
  }

  .searchText{
    font-size: larger;
  }

  .chartHolder{
    width: 33vw;
    height: 29vh;
    background-color: white;
    position: absolute;
    top: 47%;
    left: 15%;
    transform: rotate(9deg);
    box-shadow: 2px 20px 20px 3px rgba(11, 11, 11, 0.2)
  }

  .bars{
    position: relative;
  }

  .buttonAmount{
    position: absolute;
    top: 115px;
    left: 33px;
    display: flex;
    justify-content: space-between;
  }

  .chartButton1{
    height: 40px;
    margin-right: 125px;
    margin-left: 20px;
    padding: 12px 15px;
    border-radius:10px;
    background-color: #1a2250;
    color: white;
    border: none;
    font-size: 16px;
  }

  .chartButton2{
    height: 40px;
    margin-left: 120px;
    padding: 12px 15px;
    border-radius: 10px;
    background-color: #1a2250;
    color: white;
    border: none;
    font-size: 16px;
  }

  .line{
    width: 70%;
    height: 10px;
    position: absolute;
    background: linear-gradient(150deg, #8fcdff, #6d92f9 80.71%);
    border-radius: 5px;
    top: 170px;
    left: 70px;
    box-shadow: 3px 3px 10px 1px rgba(11, 11, 11, 0.2)
  }

  .chartDot{
    position: absolute;
    top: 160px;
    left: 65px;
    display: flex;
    justify-content: space-between;
  }

  .dotStart{ 
    width: 25px;
    height: 25px; 
    background: linear-gradient(150deg, #8fcdff, #6d92f9 80.71%);
    border: 4px solid white;
    border-radius: 50%;
    margin-right: 140px;
    box-shadow: 3px 3px 10px 1px rgba(11, 11, 11, 0.2);
  }

  .dotEnd{
    width: 25px;
    height: 25px;
    background: linear-gradient(150deg, #8fcdff, #6d92f9 80.71%);
    border: 4px solid white;
    border-radius: 50%;
    margin-left: 140px;
    box-shadow: 3px 3px 10px 1px rgba(11, 11, 11, 0.2)
  }

  .barGraphs{
    position: absolute;
    width: 50%;
    top: 75px;
    left: 120px;
    display: flex;
    justify-content: space-evenly;
    transform: rotate(180deg);
  }

  .eachBar{
    height: 15px;
    width: 13px;
    background-color: #ebedf5;
    transform: rotate(180);
  }

  .eachBar1{
    height: 10px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar2{
    height: 20px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar3{
    height: 35px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar4{
    height: 50px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar5{
    height: 60px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar6{
    height: 35px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar7{
    height: 10px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar8{
    height: 20px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar9{
    height: 40px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar10{
    height: 75px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar11{
    height: 95px;
    width: 13px;
    background-color: #ebedf5;
  }

  .eachBar12{
    height: 55px;
    width: 13px;
    background-color: #ebedf5;
  }

  .buildTrip{
    width: 31vw;
    height: 45vh;
    background-color: white;
    position: absolute;
    top: 64%;
    left: 50.5%;
    transform: rotate(9deg);
    display: block;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
    
  }

  .tryButton{
    width: 80%;
    display: flex;
    border: 2px solid rgba(153, 176, 192, 0.544);
    margin: auto;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 8px;
  }

  .tryButton1{
    width: 60%;
    display: flex;
    border: 3px solid;
    border-image: linear-gradient( 150deg, #8fcdff, #6d92f9 70.71%) 1;
    margin: auto;
    margin-top: 40px;
    padding: 5px;
    border-radius: 8px;
  }
</style>