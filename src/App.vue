<template>
  <div id="app">
    <app-navigation @fs="fsMode" />
    <transition :name="transition" mode="out-in">
      <router-view class="main-view" />
    </transition>
    <!-- Preload -->
    <!-- <div class="video-preload-container">
      <video width="1280" height="720" preload="auto">
        <source src="./assets/videos/waiting-01.mp4" type="video/mp4" />
      </video>
      <video width="1280" height="720" preload="auto">
        <source src="./assets/videos/waiting-02.mp4" type="video/mp4" />
      </video>
      <video width="1280" height="720" preload="auto">
        <source src="./assets/videos/waiting-03.mp4" type="video/mp4" />
      </video>
      <video width="1280" height="720" preload="auto">
        <source src="./assets/videos/waiting-04.mp4" type="video/mp4" />
      </video>
      <video width="1280" height="720" preload="auto">
        <source src="./assets/videos/waiting-05.mp4" type="video/mp4" />
      </video>
      <video width="1280" height="720" preload="auto">
        <source src="./assets/videos/waiting-06.mp4" type="video/mp4" />
      </video>
      <video width="1280" height="720" preload="auto">
        <source src="./assets/videos/waiting-07.mp4" type="video/mp4" />
      </video>
    </div> -->
  </div>
</template>

<script>
import Navigation from "./components/navigation/navigation.vue";

export default {
  name: "App",
  data() {
    return {
      transition: null,
    };
  },

  components: {
    "app-navigation": Navigation,
  },
  watch: {
    $route(to, from) {
      // this.transition = to.path.indexOf("talk") > -1 || from.path.indexOf("talk") > -1 ? "fade" : "zoom";
      if(to.path.indexOf("segment") > -1 || from.path.indexOf("segment") > -1){
        this.transition = 'fade';
      }
      if (to.query.source === "main") {
        this.transition = "zoom";
      }
    },
  },

  methods: {
    fsMode(fs) {
      const app = document.getElementById("app");
      if (fs === "scale-up") {
        app.classList.add("scale-up");
        this.onResize();
      } else {
        app.classList.remove("scale-up");
        this.onResize();
      }
    },
    onResize() {
      let scale;
      let rootEl = document.getElementById("app");
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
      let elWidth = rootEl.clientWidth;
      let elHeight = rootEl.clientHeight;
      scale = Math.min(windowWidth / elWidth, windowHeight / elHeight);

      if (windowWidth < 1920) {
        rootEl.style.transformOrigin = "left top";
      } else {
        rootEl.style.transformOrigin = "center top";
      }

      rootEl.style.transform = "scale(" + scale + ")";
    },
  },

  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" src="./app.scss"></style>
