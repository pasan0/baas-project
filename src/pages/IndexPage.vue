<template>
    <div class="page-container">
      <q-toolbar class="bg-blue-10 text-white shadow-2" style="height: 80%; display: flex; justify-content: flex-end;">
      <q-separator dark vertical inset />

      <q-space />

      <q-separator dark vertical />

      <router-link to="/home" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="Home" icon="home" />
      </router-link>
      <q-separator dark vertical />

      <router-link to="/about" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="About" icon="error" />
      </router-link>
      <q-separator dark vertical />

      <router-link to="/contact" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="Contact" icon="call" />
      </router-link>
      <q-separator dark vertical />


        <q-btn @click="logoutAction" stretch flat label="LogOut" icon="logout" />

      <q-separator dark vertical />


    </q-toolbar>
      <q-layout view="lHh Lpr lFf">

        <q-page-container>
          <q-page class="q-pa-md" style="margin: 0px;">
            <div class="row q-gutter-md" style="background: #dfeefb; display: flex;justify-content: center;">

              <div class="parent" style="display: flex; align-items: center; width: 100%;">

                <div class="text" style="width: 75%;">

                  <h1><span style="font-weight: 400;">Welcome to</span> <span style="font-size: 55px; ">PK Blog site</span></h1>
                  <p style="font-size: 18px;font-style: italic;color: #5d2020;">Stay updated with the latest news from PK BLOGGERS..!</p>
                </div>

                <div class="image" style="justify-content: center;display: flex; width: 25%;">

                  <img src="../assets/pki.jpg" style="width: 40%; padding: 0; margin: 0;">
                </div>

              </div>
            </div>
            <div class="row1">
              <div class="col-md-4 d-flex flex-column align-center" style="margin-top: 10px;">
                <div class="image-container">
                  <q-img src="../assets/col1.jpg" style="width: 100%;" />
                  <router-link to="/technology" style="text-decoration: none;" v-slot="{ navigate }">
                    <q-btn class="q-mt-md go-to-button" @click="navigate" stretch flat label="TECHNOLOGY" icon="biotech" />
                  </router-link>
                </div>
              </div>
              <div class="col-md-4 d-flex flex-column align-center" style="margin-top: 10px;">
                <div class="image-container">
                  <q-img src="../assets/col2.jpg" style="width: 100%; height: 110%;" />
                  <router-link to="/sports" style="text-decoration: none;" v-slot="{ navigate }">
                    <q-btn class="q-mt-md go-to-button" @click="navigate" stretch flat label="SPORTS" icon="sports_soccer" />
                  </router-link>
                </div>
              </div>
              <div class="col-md-4 d-flex flex-column align-center" style="margin-top: 10px;">
                <div class="image-container">
                  <q-img src="../assets/col3.jpg" style="width: 100%;" />
                  <router-link to="/movies" style="text-decoration: none;" v-slot="{ navigate }">
                    <q-btn class="q-mt-md go-to-button" @click="navigate" stretch flat label="MOVIES" icon="theaters"/>
                  </router-link>
                </div>
              </div>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </template>

  <script setup>
  defineOptions({
    name: 'MainLayout'
  })
import {signOutUser} from 'src/firebase/firebase-signout'
import {useRouter} from 'vue-router'

const router = useRouter();

const logoutAction = () => {
  console.log('Button Clicked')
  signOutUser().then(()=>{
    router.push('/login')
  })
}
</script>

<style>


  h1 {
    color: rgb(30, 58, 148);
    margin: 8px 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 50px;
  }

  p {
    margin: 0;
  }

  .mainheader {
    padding: 10px;
    color: rgb(104, 2, 2);
  }

  .q-mt-md {
    margin-top: 20px;
  }

  .image-container {
    position: relative;
  }

  .go-to-button {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 70%;
    background-color: darkcyan;
    color: #ffffff;
    border: 5px transparent;
    border-radius: 5px;
    font-size: 25px;
    font-weight: bolder;
    font-style: italic;
    padding: 5px 10px;
  }
  </style>

