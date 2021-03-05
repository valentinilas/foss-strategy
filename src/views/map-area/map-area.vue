<template>
  <div>
    <!-- Dairy -->
    <router-link
      class="in-page-link in-page-link--back in-page-link--map-back"
      to="/segment-area"
    >
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
          <button class="in-page-link in-page-link--na" @click="playVideo(0)">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">NA</div>
            </div>
          </button>
          <!-- ASIA -->
          <button class="in-page-link in-page-link--asia" @click="playVideo(1)">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">ASIA</div>
            </div>
          </button>
          <!-- CHINA -->
          <button class="in-page-link in-page-link--china" @click="playVideo(2)">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">CHINA</div>
            </div>
          </button>
          <!-- EMEA -->
          <button class="in-page-link in-page-link--emea" @click="playVideo(6)">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">EMEA</div>
            </div>
          </button>
          <!-- INDIA -->
          <button class="in-page-link in-page-link--india" @click="playVideo(3)">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">INDIA</div>
            </div>
          </button>
          <!-- LAT -->
          <button class="in-page-link in-page-link--lat" @click="playVideo(4)">
            <div class="in-page-link__wrapper">
              <div class="in-page-link__icon"></div>
              <div class="in-page-link__text">LATAM</div>
            </div>
          </button>
          <!-- PAC -->
          <button class="in-page-link in-page-link--pac" @click="playVideo(5)">
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
        <audio id="audio-map" autoplay preload>
          <source src="../../assets/sounds/world-map.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div class="map-zones__operations">
        <h2>Operations</h2>
        <operations-nav  @play="playVideo"/>
      </div>
    </div>
    <div class="map-video-container">
      <div id="map-screen" class="map-screen">
        <div class="close"><button>Close</button></div>
        <video
          data-video="0"
          class="visible"
          src="../../assets/videos/na.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="1"
          src="../../assets/videos/asia.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="2"
          src="../../assets/videos/china.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="3"
          src="../../assets/videos/india.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="4"
          src="../../assets/videos/lat.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>

        <video
          data-video="5"
          src="../../assets/videos/pac.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="6"
          src="../../assets/videos/emea.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <!-- Operations -->
        <video
          data-video="10"
          src="../../assets/videos/operations_finance.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="11"
          src="../../assets/videos/operations_hr.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="12"
          src="../../assets/videos/operations_innovation.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="13"
          src="../../assets/videos/operations_it.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="14"
          src="../../assets/videos/operations_production.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="15"
          src="../../assets/videos/operations_service.mp4"
          preload
          controls
          disablePictureInPicture
        ></video>
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
    // Audio
    const audio = document.getElementById("audio-map");
    audio.addEventListener("ended", () => {
      audio.pause();
      audio.currentTime = 0;
    });
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

    const videoContainer = document.querySelector(".map-video-container");
    const videos = videoContainer.querySelectorAll("video");

    videos.forEach((video) => {
      video.addEventListener("ended", () => {
        video.pause();
        video.currentTime = 0;
      });
      video.addEventListener("play", () => {
        audio.pause();
      });
    });

    videoContainer.addEventListener("click", (event) => {
      if (!event.target.closest("video")) {
        videoContainer.classList.remove("active");
        videos.forEach((video) => {
          video.pause();
          video.currentTime = 0;
        });
      }
    });
  },
  methods: {
    playVideo(videoId) {
      const videoContainer = document.querySelector(".map-video-container");
      const videoScreen = document.getElementById("map-screen");
      const videos = videoContainer.querySelectorAll("video");
      videos.forEach((video) => {
        const currentVideoId = video.getAttribute("data-video");
        if (Number(currentVideoId) === videoId) {
          video.classList.add("visible");
          video.play();
        } else {
          video.classList.remove("visible");
        }
      });
      videoContainer.classList.add("active");
      if ([12,6].indexOf(videoId) > -1) {
        videoScreen.setAttribute("data-orientation", "vertical");
      } else {
        videoScreen.setAttribute("data-orientation", "horizontal");
      }
    },
  },
};
</script>
