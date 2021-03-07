<template>
  <transition name="fade" mode="out-in">
    <div class="auditorium-area">
      <auditorium-nav class="inactive" @play="playVideoOnScreen" />
      <!-- Dairy -->
      <router-link class="in-page-link in-page-link--back" to="/segment-area">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Back</div>
        </div>
      </router-link>
      <div id="auditorium-screen" class="inactive">
        <video
          data-video="0"
          class="visible"
          src="../../assets/videos/customer-engagement.mp4"
          poster="../../assets/images/placeholder.jpg"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="1"
          src="../../assets/videos/innovation-leadership.mp4"
          poster="../../assets/images/placeholder.jpg"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="2"
          src="../../assets/videos/sustainability.mp4"
          poster="../../assets/images/placeholder.jpg"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="3"
          src="../../assets/videos/talent-leadership.mp4"
          poster="../../assets/images/placeholder.jpg"
          preload
          controls
          disablePictureInPicture
        ></video>
        <video
          data-video="4"
          src="../../assets/videos/tools-processes.mp4"
          poster="../../assets/images/placeholder.jpg"
          preload
          controls
          disablePictureInPicture
        ></video>
      </div>

      <video
        id="auditorium-area"
        class="step-video"
        width="1280"
        height="720"
        autoplay
        preload
        disablePictureInPicture
      >
        <source src="../../assets/videos/auditorium.mp4" type="video/mp4" />
      </video>
      <audio id="audio" autoplay preload>
        <source src="../../assets/sounds/auditorium.mp3" type="audio/mp3" />
      </audio>
    </div>
  </transition>
</template>

<style lang="scss"  src="./auditorium-area.scss"></style>

<script>
import auditoriumNav from "../../components/auditorium-nav/auditorium-nav";
export default {
  name: "auditorium-area",
  components: {
    "auditorium-nav": auditoriumNav,
  },

  mounted() {
    // Audio
    const audio = document.getElementById("audio");
    audio.addEventListener("ended", () => {
      audio.pause();
      audio.currentTime = 0;
    });

    // Video
    const bgVideo = document.getElementById("auditorium-area");
    const screen = document.getElementById("auditorium-screen");
    // const firstVideo = document.querySelector('video[data-video="0"]');
    const nav = document.querySelector(".auditorium-nav");

    bgVideo.addEventListener("timeupdate", loadFirstVideo);
    function loadFirstVideo() {
      var currentTime = bgVideo.currentTime;
      var watchPoint = Math.floor((currentTime / bgVideo.duration) * 100);
      if (watchPoint > 90) {
        screen.classList.remove("inactive");
        nav.classList.remove("inactive");
        nav.classList.add("active");
        // firstVideo.currentTime = 0.2;
        bgVideo.removeEventListener("timeupdate", loadFirstVideo);
      }
    }
    bgVideo.addEventListener("ended", function () {
      screen.classList.remove("inactive");
    });
    // Screen Videos
    const screenVideos = document.querySelectorAll("#auditorium-screen video");
    screenVideos.forEach((video) => {
      video.addEventListener("ended", () => {
        video.pause();
        video.currentTime = 0;
      });
      video.addEventListener("play", () => {
        audio.pause();
      });
    });

    // bgVideo.play();
  },
  methods: {
    playVideoOnScreen(videoId) {
      const screenVideos = document.querySelectorAll("#auditorium-screen video");

      screenVideos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
        video.classList.remove("visible");

        const currentId = Number(video.getAttribute("data-video"));
        if (currentId === videoId) {
          video.classList.add("visible");
          video.play();
        }
      });
    },
  },
};
</script>
