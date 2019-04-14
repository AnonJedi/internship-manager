import {
  GET_INTERNSHIP_LIST,
  GET_INTERNSHIP_LIST_REQUESTING,
  GET_INTERNSHIP_LIST_SUCCESS,
  GET_INTERNSHIP_LIST_FAIL,

  GET_INTERNSHIP_DETAILS,
  GET_INTERNSHIP_DETAILS_REQUESTING,
  GET_INTERNSHIP_DETAILS_SUCCESS,
  GET_INTERNSHIP_DETAILS_FAIL,
} from '../constants';
import { getInternshipList, getInternshipDetails } from '../../api/internships';

// TODO: move loading to a separate store
export default {
  state: {
    internshipList: [],
    loading: false,
    internship: null,
  },

  getters: {
    internshipList(state) {
      return state.internshipList;
    },

    internship(state) {
      return state.internship;
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

    [GET_INTERNSHIP_DETAILS_REQUESTING](state) {
      state.loading = true;
    },

    [GET_INTERNSHIP_DETAILS_SUCCESS](state, payload) {
      state.internship = payload;
      state.loading = false;
    },

    [GET_INTERNSHIP_DETAILS_FAIL](state) {
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

    async [GET_INTERNSHIP_DETAILS]({ commit }, internshipId) {
      commit(GET_INTERNSHIP_DETAILS_REQUESTING);

      try {
        const internship = await getInternshipDetails(internshipId);
        commit(GET_INTERNSHIP_DETAILS_SUCCESS, internship);
      } catch (err) {
        commit(GET_INTERNSHIP_DETAILS_FAIL);
      }
    },
  },
};
