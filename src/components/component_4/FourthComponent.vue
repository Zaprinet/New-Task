<script setup>
import BackButton from '../component_1/BackButton.vue';


</script>

<template>
<div class="wholePage">
  <BackButton />
  <div class="container1">
    <div class="permission">
      <h2 class="text">Who can see your content</h2>
      <div class="labels">
        <label for="me" class="label-text">
          <input id="me" type="checkbox" >
          Only me
          <span class="checkbox-container"></span>
        </label>
        <label for="everyone" class="label-text">
          <input id="everyone" type="checkbox" checked="checked">
          Everyone
          <span class="checkbox-container"></span>
        </label>
        <label for="cus" class="label-text">
          <input id="cus"  type="checkbox">
          Customize
          <span class="checkbox-container"></span>
        </label>
      </div>
    </div>
  </div>
  <div class="container2">
    <p class="plus">
      +
    </p>
  </div>
  <div class="container3">
    <div class="menu">
      <button class="addNewButton">
        <p class="sign">+</p>
        <p class="addNew">Add new</p>
      </button>
      <div class="options">
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="1em" viewBox="0 0 24 24">
	        <path d="M14 2H4v20h16V8zm-1 13v4h-2v-4H8l4.01-4L16 15zm0-6V3.5L18.5 9z" />
        </svg>
        <p class="optionText">Upload Files</p>
      </div>
      <div class="options">
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="1.5em" viewBox="0 0 24 24">
	        <path  d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V8h16zM8 13.01l1.41 1.41L11 12.84V17h2v-4.16l1.59 1.59L16 13.01L12.01 9z" />
        </svg>
        <p class="optionText">Upload Folder</p>
      </div>
      <div class="options">
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="1em" viewBox="0 0 24 24">
	        <path d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-2 8h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1" />
        </svg>
        <p class="optionText">New Folder</p>
      </div>
      <div class="options">
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="1em" viewBox="0 0 24 24">
	        <g >
		        <path  d="m12 14l-.707.707l.707.707l.707-.707zm1-9a1 1 0 1 0-2 0zM6.293 9.707l5 5l1.414-1.414l-5-5zm6.414 5l5-5l-1.414-1.414l-5 5zM13 14V5h-2v9z" />
		        <path  d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" />
	        </g>
      </svg>
        <p class="optionText">Import</p>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="css" scoped>
  .wholePage{
    background-color: #ffd1cf;
    position: relative;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
  }

  .container1{
    position: absolute;
    top: 7%;
    left: 10%;
    width: 600px;
    height: 400px;
    background-color: #ff6f73;
    border-radius: 80% 60% 90% 50% / 60% ;
    align-items: center;
    padding-top: 40px;
  }

  .permission{
    background-color: #21183c;
    width: 57%;
    margin: 15px auto 20px auto;
    padding: 23px 15px 35px 15px;
    border-radius: 10px;
  }

  .text{
    color: #ffffff;
    margin-left: 20px;
    font-size: 22px;
  }

  .labels{
    display: flex;
    flex-direction: column;
  }

  .label-text input[type="checkbox"] {
    visibility: hidden;
  }

  .label-text:hover input~.checkbox-container {
    background-color: rgba(255, 0, 0, 0);
  }

  .label-text input:active~.checkbox-container {
    background-color: rgba(236, 236, 231, 0);
  }

  .checkbox-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: transparent;
    border: 2px solid #7a83bd;
    border-radius: 3px;
  }

  .label-text input[type=checkbox]:before {
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  border: none;
  border-radius: 3px;
  background-color: #00AEEF;
  padding: 1px;
  outline: none;
  }

  .label-text {
    font-size: 20px;
    margin-left:20px;
    color: #7a83bd;
    margin-top: 20px;
    margin-bottom: 10px;
    position: relative;
    padding-left: 20px;
    /* display: block; */
  }

  .label-text input:checked~.checkbox-container {
    background-color: none;
    border-color: white;
  }

.checkbox-container::after {
  content: "";
  position: absolute;
  display: none;
  left: 7px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.label-text input:checked~.checkbox-container::after {
    display: block;
}

.container2{
  position: absolute;
  bottom: 15%;
  left: 30%;
  width: 140px;
  height: 140px;
  background-color: #21183c;
  border-radius: 50%;
  color: white;
  text-align: center;
  font-size: 80px;
  padding: 0;
}

.plus{
  margin: 0;
  font-weight: 300;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-top: 25px;
  cursor: pointer;
}

.plus:hover{
  font-weight: 400;
}

.container3{
    position: absolute;
    bottom: 7%;
    right: 10%;
    width: 550px;
    height: 400px;
    background-color: #ff6f73;
    border-radius: 50% 70% 30% 60% / 60% ;
    align-items: center;
    padding-top: 40px;
  }

  .menu{
    width: 52%;
    height: 105%;
    background-color: #21183c;
    margin: auto;
    margin-top: -150px;
    border-radius: 10px;
    padding: 0px;
    padding-top: 50px;
    padding-bottom: 30px;
  }

  .addNewButton{
    background-color: #fab337;
    margin: auto;
    display: flex;
    color: #21183b;
    padding: 0px 45px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .addNewButton:hover{
    border: 2px solid #f6e8d0;
  }

  .sign{
    font-size: 35px;
    margin: auto;
    margin-top: 10px;
    margin-right: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .addNew{
    font-size: 18px;
    font-weight: bolder;
  }

  .options{
    display: flex;
    padding-left: 40px;
    margin-top: 29px;
    cursor: pointer;
    color: #7a83bd;
    fill: #808ac5;
  }

  .options:hover{
    background-color: #ffffff;
    margin-left: -20px;
    width: 80%;
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 60px;
    padding-right: 0px;
    color: #21183c;
    fill: #21183c;
  }

  .optionText {
    font-size: 20px;
    margin-left: 20px;
    margin-top: 18px;
    margin-bottom: 10px;
  }

  .options svg {
    height: 50px;
  }

  .options svg:hover {
    fill: #21183c !important;
  }

</style>