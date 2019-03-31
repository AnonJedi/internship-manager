<template>
  <h2>Internship list</h2>
</template>

<script>
import { mapActions } from 'vuex';
import { GET_INTERNSHIP_LIST } from '@/store/constants';

export default {
  name: 'InternshipList',

  methods: {
    ...mapActions({
      getInternshipList: GET_INTERNSHIP_LIST,
    }),
  },

  beforeMount() {
    this.getInternshipList(0, 15);
  },
}
</script>

