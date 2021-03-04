<template>
 <div class="main-nav">
     <!--  -->
     <router-link class="main-nav__step-wrapper" to="/step-1?source=main">
         <div class="main-nav__step main-nav__step--1">
             <div class="main-nav__step-image"></div>
             <div class="main-nav__step-text">START</div>
         </div>
     </router-link>
     <!--  -->
     <!--  -->
     <router-link class="main-nav__step-wrapper" to="/step-2?source=main">
         <div class="main-nav__step main-nav__step--2">
             <div class="main-nav__step-image"></div>
             <div class="main-nav__step-text">Malt grinding</div>
         </div>
     </router-link>
     <!--  -->
     <!--  -->
     <router-link class="main-nav__step-wrapper" to="/step-3?source=main">
         <div class="main-nav__step main-nav__step--3">
             <div class="main-nav__step-image"></div>
             <div class="main-nav__step-text">Mashing</div>
         </div>
     </router-link>
     <!--  -->
     <!--  -->
     <router-link class="main-nav__step-wrapper" to="/step-4?source=main">
         <div class="main-nav__step main-nav__step--4">
             <div class="main-nav__step-image"></div>
             <div class="main-nav__step-text">Lautering</div>
         </div>
     </router-link>
     <!--  -->
     <!--  -->
     <router-link class="main-nav__step-wrapper" to="/step-5?source=main">
         <div class="main-nav__step main-nav__step--5">
             <div class="main-nav__step-image"></div>
             <div class="main-nav__step-text">Boiling</div>
         </div>
     </router-link>
     <!--  -->
     <!--  -->
     <router-link class="main-nav__step-wrapper" to="/step-6?source=main">
         <div class="main-nav__step main-nav__step--6">
             <div class="main-nav__step-image"></div>
             <div class="main-nav__step-text">Fermentation</div>
         </div>
     </router-link>
     <!--  -->
     <!--  -->
     <router-link class="main-nav__step-wrapper" to="/step-7?source=main">
         <div class="main-nav__step--7">
             <div class="main-nav__step-image"></div>
             <div class="main-nav__step-text">Finished beer</div>
         </div>
     </router-link>
     <div class="main-nav__step-wrapper full-screen-btn" @click="toggleFSMode()">
         <div class="main-nav__step main-nav__step--fs">
             <div class="main-nav__step-image"></div>
             <div class="main-nav__step-text" v-text="FsText"></div>
         </div>
     </div>
     <!--  -->

 </div>
 

</template>



<script lang="js" src="./navigation.js"></script>
<style lang="scss" src="./navigation.scss" ></style>