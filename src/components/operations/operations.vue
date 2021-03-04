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
          id: 0,
          name: "Finance & Compliance Strategy",
        },
        {
          id: 1,
          name: "Innovation & Marketing",
        },
        {
          id: 2,
          name: "HR Smart Analytics Strategy",
        },
        {
          id: 3,
          name: "IT Strategy",
        },
        {
          id: 4,
          name: "Production & Supply Chain Strategy",
        },
        {
          id: 5,
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
  padding: 0.75rem 0 0.75rem 4rem;
}
.operations__item button:hover {
  color: #f48d27;
  
}
</style>
