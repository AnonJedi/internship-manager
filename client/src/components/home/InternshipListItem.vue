<template>
  <article class="container">
    <router-link :to="`/internships/${id}`">
      <img :src="icon" class="icon">
    </router-link>

    <div class="body">
      <router-link class="link" :to="`/internships/${id}`">
        <h3 class="title">{{ title }}</h3>
      </router-link>

      <p>{{ preview }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: start;
  margin-bottom: 20px;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
}

.icon {
  width: 250px;
  height: auto;
  margin-right: 20px;
}

.body {
  color: #4d236d;
}

.title {
  display: inline-block;
  margin-top: 0;
}

.link {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
