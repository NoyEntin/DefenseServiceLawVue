import { createStore } from 'vuex';
import exerciseQuestions from './exerciseQuestions.json';

export default createStore({
  state: {
    totalChapterNumber: 3,
    currentScreenIndex: 0,
    currentContentChapter: 0,
    chapterNames: [
        "חוק שירות ביטחון",
        "סעיף 20",
        "משתמטים"
    ],
    exerciseQuestions: exerciseQuestions

  },
  mutations: {
    updateCurrentContentChapter(state, contentChapterIndex) {
      state.currentContentChapter = contentChapterIndex;
    },
    loadContentScreen(state) {
      state.currentScreenIndex = 1;
    },
    loadTestScreen(state) {
      state.currentScreenIndex = 2;
    },
    backToHome(state) {
      state.currentScreenIndex = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})
