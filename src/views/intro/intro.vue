<template>
  <transition name="fade" mode="out-in">
    <div class="segment-area">
      <!-- Dairy -->
      <router-link class="in-page-link in-page-link--segments" to="/segment-area">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Segments</div>
        </div>
      </router-link>

      <video
        id="intro"
        class="step-video"
        width="1280"
        height="720"
        autoplay
        preload
        disablePictureInPicture
      >
        <source src="../../assets/videos/Kim_intro.mp4" type="video/mp4" />
      </video>
    </div>
  </transition>
</template>

<style lang="scss" scoped src="./intro.scss"></style>

<script>
import router from "../../router";

export default {
  name: "intro",

  mounted() {
    const video = document.getElementById("intro");

    video.addEventListener("ended", function () {
      router.push("/segment-area");
    });
  },
};
</script>
