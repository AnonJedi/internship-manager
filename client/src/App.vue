<template>
  <div class="app">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar';

export default {
  name: 'App',
  // components: { NavBar },
};
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(to bottom, #4d236d 0%, #171717 100%);
  color: white;
}

.content {
  max-width: 1100px;
  padding: 0 50px;
  margin: auto;
  box-sizing: border-box;
}
</style>
