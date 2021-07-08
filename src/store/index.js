import { createStore } from 'vuex';
import exerciseQuestions from './exerciseQuestions.json';

export default createStore({
  state: {
    totalChapterNumber: 3,
    currentScreenIndex: 0,
    currentContentChapter: 0,
    currentContentPageIndex: 0,
    chapterNames: [
        "חוק שירות ביטחון",
        "סעיף 20",
        "משתמטים"
    ],
    exerciseQuestions: exerciseQuestions,
    navigationData: [
      [
        'יוצאים לדרך',
        'סעיפים בנושא הצו הראשון',
        'סעיפים בנושא צו הגיוס',
        'סעיפים בנושא בני ישיבות',
        'סעיפים בנושא דחיות גיוס ופטור'
      ],
      [
        'סעיף 20 לחוק שירות ביטחון',
        'משך תקופת סעיף 20 למלש"ב',
        'אופן חישוב בתקופות בלתי נמנות',
        'חישוב הארכת סעיף 20',
        'העמקה שנה שלישית',
        'משך טיפול בקשה מותר'
      ],
      [
        'קודם כל - מי הוא משתמט',
        'לפני ההכרזה',
        'הכרזת השתמטות',
        'סוגי משתמטים',
        'התייצבות משתמט'
      ]
    ],
    areExerciseQuestionsAnswered: [],
    arePagesViewed: []
  },
  getters: {
    isContentScreen: state => {
      return state.currentScreenIndex === 1;
    },
    contentPageName: state => {
      return "Chapter" + state.currentContentChapter + "Page" + (state.currentContentPageIndex + 1);
    },
    contentDone: state => {
      for(var i = 0; i< state.areExerciseQuestionsAnswered.length; i++) {
        for(var j = 0; j< state.areExerciseQuestionsAnswered[i].length; j++) {
          if(state.areExerciseQuestionsAnswered[i][j].includes(false)){
            return false;
          }
        }
      }
      return true;
      // return !state.arePagesViewed.includes(false);
    },
    prevChaptersDone: (state) => (clickedChapter) => {
      for(var i = 0; i< clickedChapter; i++) {
        for(var j = 0; j< state.areExerciseQuestionsAnswered[i].length; j++) {
          if(state.areExerciseQuestionsAnswered[i][j].includes(false)){
            console.log("in return false");
            return false;
          }
        }
      }
      console.log("in return true");
      return true;
    },
  },
  mutations: {
    updateCurrentContentChapter(state, contentChapterIndex) {
      state.currentContentChapter = contentChapterIndex;
    },
    updateCurrentContentPage(state, contentPageIndex) {
      state.currentContentPageIndex = contentPageIndex;
    },
    loadContentScreen(state) {
      state.currentScreenIndex = 1;
    },
    loadTestScreen(state) {
      state.currentScreenIndex = 2;
    },
    backToHome(state) {
      state.currentScreenIndex = 0;
    },
    initArePagesViewed(state) {
      for (var i = 0; i < state.totalChapterNumber; i++) {
        state.arePagesViewed.push([]);
        for (var j = 0; j < state.navigationData[i].length; j++) {
          state.arePagesViewed[i].push(false);
        }
      }
      // console.table(state.arePagesViewed);
    },
    initAreExerciseQuestionsAnswered(state) {
      for (var i = 0; i < state.totalChapterNumber; i++) {
        state.areExerciseQuestionsAnswered.push([]);
        for (var j = 0; j < state.navigationData[i].length; j++) {
          state.areExerciseQuestionsAnswered[i].push([]);
          for (var q = 0; q < state.exerciseQuestions[i][j].length; q++) {
            state.areExerciseQuestionsAnswered[i][j].push(false);
          }
        }
      }
    },
    updateViewedPages(state) {
      state.arePagesViewed[state.currentContentChapter - 1][state.currentContentPageIndex] = true;
    },
    updateAnsweredQuestion(state, questionNum) {
      state.areExerciseQuestionsAnswered[state.currentContentChapter - 1][state.currentContentPageIndex][questionNum] = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
