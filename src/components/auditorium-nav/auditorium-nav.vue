<template>
  <div class="auditorium-nav">
    <div class="autitorium-nav__wrapper">
      <div class="auditorium-nav__item" v-for="item in items" :key="item.id">
        <button :data-id="item.id" @click="playVideoOnScreen(item)" :class="{active:selectedItem === item.id}">
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auditorium-nav",
  data() {
    return {
      selectedItem: 0,
      items: [
        {
          id: 0,
          name: "Customer Engagement",
        },
        {
          id: 1,
          name: "Innovation Leadership",
        },
        {
          id: 2,
          name: "Sustainability",
        },
        {
          id: 3,
          name: "Talent & Leadership",
        },
        {
          id: 4,
          name: "Tools & Processes",
        },
      ],
    };
  },
  methods: {
    playVideoOnScreen: function (item) {
      const videoId = item.id;
      this.$emit("play", videoId);
      this.selectedItem = videoId;
    },
  },
};
</script>

<style scoped>
.auditorium-nav {
  width: 70%;
  background-color: rgba(0, 40, 90, 0.9);
  border:1px solid rgba(12, 68, 136, 0.95);
  transition:all 0.2s ease;
}
.auditorium-nav.inactive {
    opacity: 0;
    user-select: none;
    pointer-events: none;
}

.autitorium-nav__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.auditorium-nav__item {
  border-right: 1px solid rgba(12, 68, 136, 0.95);
  flex-basis:100%;
}
.auditorium-nav__item:last-child{
    border:none;
}
.auditorium-nav__item button {
  color: #fff;
  padding: 2rem;
  color: #fff;
  font-weight: bold;
  border: none;
  background-color: transparent;
  transition: all 0.4s ease;
  width:100%;
  height:100%;
}
.auditorium-nav__item button:hover,
.auditorium-nav__item button.active {
  background-color: #f48d27;
  color: #fff;
}
</style>
