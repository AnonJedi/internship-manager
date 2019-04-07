<template>
  <div>
    <Description />
    <InternshipList />
  </div>
</template>

<script>

import Description from '@/components/home/Description.vue';
import InternshipList from '@/components/home/InternshipList.vue';

export default {
  name: 'home',
  components: { Description, InternshipList },
};
</script>
