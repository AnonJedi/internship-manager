import Vue from 'vue';
import Vuex from 'vuex';
import internships from './modules/internships';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    internships,
  },
});
