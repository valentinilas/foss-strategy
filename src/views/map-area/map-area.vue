<template>
  <div>
    <!-- Dairy -->
    <router-link class="in-page-link in-page-link--back" to="/segment-area">
      <div class="in-page-link__wrapper">
        <div class="in-page-link__icon"></div>
        <div class="in-page-link__text">Back</div>
      </div>
    </router-link>
    <div class="map-zones">
      <div class="map-zones__regions">
        <h2>Regions</h2>
        <div class="map-zones__buttons">
          <!-- NA -->
          <button class="in-page-link in-page-link--na">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">NA</div>
            </div>
          </button>
          <!-- ASIA -->
          <button class="in-page-link in-page-link--asia">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">ASIA</div>
            </div>
          </button>
          <!-- CHINA -->
          <button class="in-page-link in-page-link--china">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">CHINA</div>
            </div>
          </button>
          <!-- EMEA -->
          <button class="in-page-link in-page-link--emea">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">EMEA</div>
            </div>
          </button>
          <!-- INDIA -->
          <button class="in-page-link in-page-link--india">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">INDIA</div>
            </div>
          </button>
          <!-- LAT -->
          <button class="in-page-link in-page-link--lat">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">LAT</div>
            </div>
          </button>
          <!-- PAC -->
          <button class="in-page-link in-page-link--pac">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">PAC</div>
            </div>
          </button>
        </div>

        <video
          id="map-area"
          class="step-video"
          width="1280"
          height="720"
          autoplay
          preload
          disablePictureInPicture
        >
          <source src="../../assets/videos/map.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="map-zones__operations">
        <h2>Operations</h2>
        <operations-nav />
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./map-area.scss"></style>

<script>
import Operations from "../../components/operations/operations";
export default {
  name: "map-area",
  components: {
    "operations-nav": Operations,
  },
  mounted() {
    const mapZones = document.querySelector(".map-zones");
    const bgVideo = document.getElementById("map-area");
    bgVideo.addEventListener("timeupdate", showMapDots);
    function showMapDots() {
      var currentTime = bgVideo.currentTime;
      var watchPoint = Math.floor((currentTime / bgVideo.duration) * 100);
      if (watchPoint > 50) {
        mapZones.classList.add("active");
        bgVideo.removeEventListener("timeupdate", showMapDots);
      }
      bgVideo.addEventListener("ended", function () {
        mapZones.classList.add("active");
      });
    }
  },
  methods: {},
};
</script>
