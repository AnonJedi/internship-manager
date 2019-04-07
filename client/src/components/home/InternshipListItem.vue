<template>
  <article>
    <img :src="icon">
    <div>
      <h4>{{ title }}</h4>
      <p>{{ preview }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
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
