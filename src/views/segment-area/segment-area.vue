<template>
  <transition name="fade" mode="out-in">
    <div class="segment-area">
      <!-- Dairy -->
      <router-link class="in-page-link in-page-link--dairy" to="/segment-dairy">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Dairy</div>
        </div>
      </router-link>
      <!-- Feed -->
      <router-link class="in-page-link in-page-link--feed" to="/segment-feed">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Feed</div>
        </div>
      </router-link>
      <!-- Grain -->
      <router-link class="in-page-link in-page-link--grain" to="/segment-grain">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Grain</div>
        </div>
      </router-link>
      <!-- Lab -->
      <router-link class="in-page-link in-page-link--lab" to="/segment-lab">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Lab</div>
        </div>
      </router-link>
      <!-- Meat -->
      <router-link class="in-page-link in-page-link--meat" to="/segment-meat">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Meat</div>
        </div>
      </router-link>
      <!-- Rmt -->
      <router-link class="in-page-link in-page-link--rmt" to="/segment-rmt">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">RMT</div>
        </div>
      </router-link>
      <!-- Wine -->
      <router-link class="in-page-link in-page-link--wine" to="/segment-wine">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Wine</div>
        </div>
      </router-link>
      <!-- Auditorium -->
      <router-link class="in-page-link in-page-link--auditorium" to="/auditorium-area">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Auditorium</div>
        </div>
      </router-link>
      <!-- Map -->
      <router-link class="in-page-link in-page-link--map" to="/map-area">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">map</div>
        </div>
      </router-link>
      <video
        id="segment-area"
        class="step-video"
        width="1280"
        height="720"
        autoplay
        preload
        loop
        disablePictureInPicture
      >
        <source src="../../assets/videos/startLoop.mp4" type="video/mp4" />
      </video>
    </div>
  </transition>
</template>

<style lang="scss" src="./segment-area.scss"></style>

<script>
export default {
  name: "segment-area",
  mounted() {
    document.getElementById("segment-area").play();
  },
};
</script>
