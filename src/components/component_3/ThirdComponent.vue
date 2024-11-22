<script setup>
import BackButton from '../component_1/BackButton.vue';
import { ref } from 'vue';

const selectedFile = ref('No file uploaded')
const onFileSelected = (event) => {
  const file = event.target.files[0]
  selectedFile.value = file ? file.name : "No file chosen"
  
}
</script>

<template>
<div class="whole">
  <div class="circle1"></div>
  <div class="circle2"></div>
  <div class="circle3"></div>
  <BackButton/>
  <div class="modal">
    <p class="header">UIDesignDaily</p>
    <h2 class="title">Upload Files</h2>
    <div class="authentication">
      <div class="authorization">
        <p class="label">Authorisation Key</p>
        <input type="text" placeholder="********************" class="labelInput">
      </div>
      <div class="authorization">
        <p class="label">Tags (comma seperated)</p>
        <input type="text" placeholder="Tags (comma seperated)" class="labelInput1">
      </div>
    </div>

    <div class="authentication">
      <div class="authorization">
        <p class="label">Title</p>
        <input type="text" placeholder="File name" class="labelInput" v-model="selectedFile">
      </div>
      <div class="authorization">
        <p class="label">Date</p>
        <input type="date" placeholder="DD/MM/YYYY" class="dateInput">
      </div>
    </div>

    <div class="authentication">
      <div class="authorization">
        <p class="label">Description</p>
        <textarea type="text" placeholder="Description" class="description"></textarea>
      </div>
      <div class="authorization">
        <div class="software">
          <p class="label">Software</p>
          <select class="softwareBox">
            <option value="option 1" class="options"> Sketch </option>
            <option value="option 2" class="options"> option 2 </option>
          </select>

          <div class="uploadSection">
            <div class="thumbnail">
              <p class="label">Thumbnail Image</p>
              <label for="file-upload" class="custom-file-upload" accept=".png, .jpeg">
                <p class="labelInput3">Upload File</p>
              </label>
              <input id="file-upload" type="file" @change="onFileSelected" placeholder="Upload File" class="labelInput2" >
              <p class="label">{{ selectedFile }}</p>
            </div>
            <div class="sourceFile">
              <p class="label">Source File</p>
              <label for="file-upload" class="custom-file-upload">
                <p class="labelInput3">Upload File</p>
              </label>
              <input id="file-upload" type="file" @change="onFileSelected" placeholder="Upload File" class="labelInput2" >
              <p class="label">{{selectedFile}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- #677398 #84899a -->
    <button class="submit">Submit</button>

  </div>
</div>
</template>

<style lang="css" scoped>
  .whole{
    background-color: #171f38;
    height: 100vh;
    position: relative;
  }

  .circle1{
    position: absolute;
    top: 350px;
    left: 90px;
    height: 127px;
    width: 127px;
    border-radius: 70% 35% 45% 35%;
    background: linear-gradient(150deg, #f073c7, #ff6a94 70.71%);
  }

  .circle2{
    position: absolute;
    top: 520px;
    left: 200px;
    height: 250px;
    width: 250px;
    border-radius: 65% 70% 45% 55%;
    background: linear-gradient(150deg, #f073c7, #ff6a94 70.71%);
  }

  .circle3{
    position: absolute;
    bottom: -30px;
    right: -50px;
    height: 400px;
    width: 400px;
    border-radius: 50% 50% 45% 55%;
    background: linear-gradient(150deg, #f073c7, #ff6a94 70.71%);
  }

  .modal{
    background-color: #242e4ce6;
    height: 80%;
    width: 80%;
    position: absolute;
    top: 10%;
    left: 10%;
    border-radius: 15px;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    text-align: center;
    color: #e4e4ec;
  }

  .header{
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .title{

  }

  .authentication{
    display: flex;
    margin: auto;
    /* align-items: center; */
    width: 60%;
    /* align-content: center; */
    /* justify-content: space-evenly; */
  }

  .authorization{
    text-align: left;
    margin-bottom: 7px;
  }

  .label{
    color: #7b88ae;
    font-size: 12px;
    margin-bottom: 3px;
    font-weight: 600;
  }

  .labelInput{
    padding: 15px 10px;
    width: 310px;
    margin-right: 40px;
    background-color: rgba(0, 0, 0, 0.001);
    border-radius: 10px;
    border: 1px solid rgba(19, 19, 19, 0.587);
    color: #677398;
  }

  .labelInput1{
    padding: 15px 10px;
    width: 310px;
    background-color: rgba(0, 0, 0, 0.001);
    border-radius: 10px;
    border: 1px solid rgba(19, 19, 19, 0.587);
    color: #677398;
    font-family: Arial, Helvetica, sans-serif;
    appearance: none; 
    -webkit-appearance: none; 
    -moz-appearance: none;
  }

  .dateInput[type="date"]{
    padding: 15px 10px;
    width: 310px;
    background-color: rgba(0, 0, 0, 0.001);
    border-radius: 10px;
    border: 1px solid rgba(19, 19, 19, 0.587);
    color: #677398;
    font-family: Arial, Helvetica, sans-serif;
    appearance: none; 
    -webkit-appearance: none; 
    -moz-appearance: none;
    -webkit-calendar-picker-indicator { background: transparent; }
    text-transform: uppercase;
  }

  /* .dateInput::placeholder{
    
  } */

  /* .labelInput1[type='date']::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
} */

  .softwareBox{
    padding: 15px 10px;
    /* margin-bottom: 7px; */
    width: 330px;
    background-color: rgba(0, 0, 0, 0.001);
    border-radius: 10px;
    border: 1px solid rgba(19, 19, 19, 0.587);
    color: #c8cad198;
  }

  input:focus{
    border: 1.5px solid #9a558d;
    outline: none
  }

  .description{
    padding: 15px 10px;
    width: 310px;
    height: 110px;
    margin-right: 40px;
    background-color: rgba(0, 0, 0, 0.001);
    border-radius: 10px;
    border: 1px solid rgba(19, 19, 19, 0.587);
    color: #c8cad198;
    position: relative;
    resize: none;
  }

  .description::placeholder { 
    transform: translateY(-50%);
    white-space: pre-wrap;
    font-family: Arial, Helvetica, sans-serif;
  } 

  textarea:focus{
    border: 1.5px solid #9a558d;
    outline: none;
  }

  .uploadSection{
    display: flex;
    text-align: left;
  }

  .thumbnail{
    width: 170px; 
    margin-right: 30px; 
  }

  .labelInput2{
    margin-top: 8px;
    padding: 8px 15px;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.001);
    border-radius: 7px;
    border: 1px solid rgba(19, 19, 19, 0.587);
    color: #c8cad198;
    display:  none;
  }

  .labelInput3{
    margin-top: 8px;
    padding: 8px 15px;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.001);
    border-radius: 7px;
    border: 1px solid rgba(19, 19, 19, 0.587);
    color: #677398;
    font-size: small;
  }

  .sourceFile{
    width: 170px;
  }

  .submit{
    color: #fdf6fa;
    padding: 14px 130px;
    margin-top: 20px;
    background: linear-gradient(150deg, #f073c7, #ff6a94 70.71%);
    border: none;
    border-radius: 5px;
    font-weight: 600;
  }
</style>