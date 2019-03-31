<template>
  <div>
    <Description />
    <InternshipList />
  </div>
</template>

<script>

import Description from '@/components/home/Description';
import InternshipList from '@/components/home/InternshipList';
export default {
  name: 'home',
  components: { Description, InternshipList },
};
</script>
