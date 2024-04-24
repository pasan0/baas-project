<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-toolbar class="bg-blue-10 text-white shadow-2" style="height: 80%;">
      <q-separator dark vertical inset />

      <q-space />

      <q-separator dark vertical />

      <router-link to="/home" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="Home" />
      </router-link>
      <q-separator dark vertical />

      <router-link to="/about" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="About" />
      </router-link>
      <q-separator dark vertical />

      <router-link to="/contact" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="Contact" />
      </router-link>
      <q-separator dark vertical />


    </q-toolbar>

      <q-page-container>
        <q-page class="q-pa-md">
          <div class="q-gutter-md">
            <div class="q-col-gutter-md">
              <div class="text-h6 bg-blue-10 text-white p-2">About Us</div>
              <div class="bg-blue-10 text-white p-2 ml-10">
                <div>
              <img src="../assets/OIG3..jpg" style="align-items: center; width: 20%; ">
            </div>
                Welcome to our
                <span style="font-weight: bold; font-size: 18px;">PK BLOG SITE..!</span>  We aim to provide informative and engaging content in the technology, sport & movies field.</div>
              <div class="bg-blue-10 text-white p-2 ml-10">Our team is dedicated to delivering high-quality articles, tutorials, and news updates to keep you informed about the latest trends and developments in technology.</div>
              <div class="bg-blue-10 text-white p-2 ml-10">Feel free to explore our site and discover a wealth of valuable information to enhance your knowledge and stay up-to-date with the rapidly evolving world of technology.</div>

            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
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

<style scoped>
.bg-blue-10 {
  background-color: #4b6fa8;
}

.q-col-gutter-md{
  padding:20px;
  height: fit-content;
  width: fit-content;
}
</style>
