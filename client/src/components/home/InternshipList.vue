<template>
  <div>
    <h2>Internship list</h2>
    <internship-list-item
      v-for="internship in internships"
      :key="internship.id"
      :id="internship.id"
      :title="internship.title"
      :preview="internship.preview"
      :icon="internship.icon"
    ></internship-list-item>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { GET_INTERNSHIP_LIST } from '@/store/constants';
import InternshipListItem from './InternshipListItem.vue';

export default {
  components: { InternshipListItem },

  computed: {
    ...mapGetters({
      internships: 'internshipList',
    })
  },

  methods: {
    ...mapActions({
      getInternshipList: GET_INTERNSHIP_LIST,
    }),
  },

  beforeMount() {
    this.getInternshipList(0, 15);
  },
};
</script>
