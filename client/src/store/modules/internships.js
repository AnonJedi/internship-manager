import {
  GET_INTERNSHIP_LIST,
  GET_INTERNSHIP_LIST_REQUESTING,
  GET_INTERNSHIP_LIST_SUCCESS,
  GET_INTERNSHIP_LIST_FAIL,
} from '../constants';
import { getInternshipList } from '../../api/internships';

export default {
  state: {
    internshipList: [],
    loading: false,
  },

  getters: {
    internshipList(state) {
      return state.internshipList;
    },
  },

  mutations: {
    [GET_INTERNSHIP_LIST_REQUESTING](state) {
      state.loading = true;
    },

    [GET_INTERNSHIP_LIST_SUCCESS](state, payload) {
      state.internshipList = payload;
      state.loading = false;
    },

    [GET_INTERNSHIP_LIST_FAIL](state) {
      state.loading = false;
    },
  },

  actions: {
    async [GET_INTERNSHIP_LIST]({ commit }, params) {
      commit(GET_INTERNSHIP_LIST_REQUESTING);

      try {
        const internshipList = await getInternshipList(params.page, params.perPage);
        commit(GET_INTERNSHIP_LIST_SUCCESS, internshipList);
      } catch (err) {
        commit(GET_INTERNSHIP_LIST_FAIL, err.message);
      }
    },
  },
};
