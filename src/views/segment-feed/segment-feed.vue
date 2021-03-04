<template>
   <div>
     <router-link class="in-page-link in-page-link--back" to="/segment-area">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Back</div>
         </div>
     </router-link>
    <video id="segment-feed" class="step-video" width="1280" height="720" autoplay preload  disablePictureInPicture>
      <source src="../../assets/videos/Feed.mp4" type="video/mp4" />
    </video>
    </div>
</template>


<script lang="js" src="./segment-feed.js"></script>
<style lang="scss" src="./segment-feed.scss" ></style>