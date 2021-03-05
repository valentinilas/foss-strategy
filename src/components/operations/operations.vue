<template>
  <div class="operations">
    <div class="operations__wrapper">
      <div class="operations__item" v-for="item in items" :key="item.id">
        <button
          :data-id="item.id"
          @click="playVideoOnScreen(item)"
          :class="{ active: selectedItem === item.id }"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "operations-nav",
  data() {
    return {
      selectedItem: 0,
      items: [
        {
          id: 10,
          name: "Finance & Compliance Strategy",
        },
        {
          id: 12,
          name: "Innovation & Marketing",
        },
        {
          id: 11,
          name: "HR Smart Analytics Strategy",
        },
        {
          id: 13,
          name: "IT Strategy",
        },
        {
          id: 14,
          name: "Production & Supply Chain Strategy",
        },
        {
          id: 15,
          name: "Service & Global Quality Strategy",
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
.operations {
  margin: 2rem 0;
}
.operations__wrapper {
}
.operations__item {
}
.operations__item button {
  color: #002858;
  border: none;
  width: 100%;
  background: none;
  text-align: left;
  font-size: 2rem;
  padding: 0.75rem 0 0.75rem 3rem;
  display: flex;
  flex-direction: row;
  align-items:center;
}
.operations__item button:hover {
  color: #f48d27;
}
.operations__item button::before {
  content: "";
  width: 1.5rem;
  height: 1.5rem;
  /* display:block; */
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: #f48d27;
  animation: pulseOrange 2s infinite;
}
</style>
