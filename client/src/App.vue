<template>
  <div class="app">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to bottom, #4d236d 0%, #171717 100%);
  color: white;
  font-family: Roboto;
}

.content {
  max-width: 1100px;
  padding: 0 50px;
  margin: auto;
  box-sizing: border-box;
}
</style>
