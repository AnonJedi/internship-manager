<template>
  <div v-if="internship">
    <img :src="internship.icon" class="icon">
    <h2>{{ internship.title }}</h2>
    <div v-html="internship.body"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { GET_INTERNSHIP_DETAILS } from '@/store/constants';

export default {
  computed: {
    ...mapGetters(['internship']),
  },

  methods: {
    ...mapActions({
      getInternshipDetails: GET_INTERNSHIP_DETAILS,
    }),
  },

  beforeMount() {
    this.getInternshipDetails(this.$route.params.id);
  },
};
</script>
