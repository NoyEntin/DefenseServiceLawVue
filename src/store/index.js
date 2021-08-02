import { createStore } from 'vuex';
import exerciseQuestions from './exerciseQuestions.json';
import allTestQuestions from './testQuestions.json';
import InteractiveExamplesData from './InteractiveExamplesData.json';

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
    arePagesViewed: [],
    InteractiveExamplesData: InteractiveExamplesData,
    // *****
    //!attention! each test questions must contain at least n SINGLE questions for each chapter
    //n is the number of questions required for this chapter according to testQuestionsAmountByChapter
    // *****
    allTestQuestions: allTestQuestions,
    testQuestionsAmountByChapter: [5, 10, 5, 5], //stores how many questions from each chapter, last value is how many mixed from all chapters
    testQuestionsByChapter: [], //stores which question indexes (of allTestQuestions) belong to which chapter, by order
    testQuestions: [], //the array which will eventually store the selected questions for the currently loaded test
    userTestAnswers: [],
    userTestAnswersBoolean: [],
    failingGrade: 70,
    grade: -1,
    isFeedbackMode: false,
    userInfo: 'empty'
  },
  getters: {
    isContentScreen: state => {
      return state.currentScreenIndex === 1;
    },
    isTestScreen: state => {
      return state.currentScreenIndex === 2;
    },
    contentPageName: state => {
      return "Chapter" + state.currentContentChapter + "Page" + (state.currentContentPageIndex + 1);
    },
    contentDone: state => {
      for(var i = 0; i < state.areExerciseQuestionsAnswered.length; i++) {
        for(var j = 0; j < state.areExerciseQuestionsAnswered[i].length; j++) {
          if(state.areExerciseQuestionsAnswered[i][j].includes(false)){
            return false;
          }
        }
      }
      // return true;
      return !state.arePagesViewed.includes(false);
    },
    prevChaptersDone: (state) => (clickedChapter) => {
      for(var i = 0; i < clickedChapter; i++) {
        for(var j = 0; j < state.areExerciseQuestionsAnswered[i].length; j++) {
          if(state.areExerciseQuestionsAnswered[i][j].includes(false)){
            return false;
          }
        }
      }
      return true;
    },
    isChapterDone: (state) => (currChapter) => {
      for(var j = 0; j < state.areExerciseQuestionsAnswered[currChapter].length; j++) {
        if(state.areExerciseQuestionsAnswered[currChapter][j].includes(false)){
          return false;
        }
      }
      return true;
    },
    isPassingGrade: state => {
      return state.grade > state.failingGrade
    },
  },
  mutations: {
    updateCurrentContentChapter(state, contentChapterIndex) {
      state.currentContentChapter = contentChapterIndex;
    },
    updateCurrentContentPage(state, contentPageIndex) {
      state.currentContentPageIndex = contentPageIndex;
    },
    backToHome(state) {
      state.currentScreenIndex = 0;
    },
    loadContentScreen(state) {
      state.currentScreenIndex = 1;
    },
    loadTestScreen(state, mode) {
      state.currentScreenIndex = 2;
      state.isFeedbackMode = mode.isFeedbackMode;
    },
    loadEndScreen(state) {
      state.currentScreenIndex = 3;
    },
    initArePagesViewed(state) {
      for (var i = 0; i < state.totalChapterNumber; i++) {
        state.arePagesViewed.push([]);
        for (var j = 0; j < state.navigationData[i].length; j++) {
          state.arePagesViewed[i].push(false);
        }
      }
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
    buildTestQuestionsByChapter(state) {
      for (var i = 0; i < state.chapterNames.length; i++) {
        state.testQuestionsByChapter.push(new Array());
      }
      var currentQuestion;
      for (var i = 0; i < state.allTestQuestions.length; i++){
        currentQuestion = state.allTestQuestions[i];
        state.testQuestionsByChapter[Number(currentQuestion[0].relatedChapter)].push(i);
      }
    },
    randomizeChapterQuestions(state, whatToRandomize) {
      var array = whatToRandomize.array;
      var howMany = whatToRandomize.howMany;
      var randomIndex = 0;
      var randomQuestion = [];
      var counter = 0;
      while (counter < howMany) {
        randomIndex = Math.floor(Math.random() * array.length);
        randomQuestion = state.allTestQuestions[array[randomIndex]];
        if (counter + randomQuestion.length <= howMany) {
          for (var i = 0; i < randomQuestion.length; i++) {
            state.testQuestions.push(randomQuestion[i]);
            counter++;
          }
          array.splice(randomIndex, 1);
        }
      }
    },
    clearTestQuestions(state) {
      state.testQuestionsByChapter = [];
      state.testQuestions = [];
    },
    mergeQuestionArrays(state) {
      state.testQuestionsByChapter = [].concat.apply([], state.testQuestionsByChapter);
    },
    updateViewedPages(state) {
      state.arePagesViewed[state.currentContentChapter - 1][state.currentContentPageIndex] = true;
    },
    updateAnsweredQuestion(state, questionNum) {
      state.areExerciseQuestionsAnswered[state.currentContentChapter - 1][state.currentContentPageIndex][questionNum] = true;
    },
    setUserTestAnswers(state, userAnswers) {
      state.userTestAnswers = userAnswers;
    },
    calculateGrade(state) {
      state.grade = 0;
      var pointsForEach = 100 / state.testQuestions.length;
      var questionType = "";
      
      for (var i = 0; i < state.testQuestions.length; i++){
        questionType = state.testQuestions[i].questionType;
        if (questionType === "MultipleChoice" || questionType === "NumberChoice" || questionType === "CalendarChoice") {
          if (String(state.testQuestions[i].rightAnswer) === String(state.userTestAnswers[i])) {
            state.grade += pointsForEach;
            state.userTestAnswersBoolean[i] = true;
          } else {
            state.userTestAnswersBoolean[i] = false;
          }
        } else if (questionType === "TableSelection" || questionType === "DragChoice" || questionType === "CompleteText" ) {
          var numOfRightAnswers = 0;
          for (var j = 0; j < state.userTestAnswers[i].length; j++) {
            console.log("u answer:" + state.userTestAnswers[i][j])
            console.log("r answer:" + state.testQuestions[i].rightAnswer[j])
            console.log("is same?" + state.testQuestions[i].rightAnswer[j] === state.userTestAnswers[i][j])
            if (state.testQuestions[i].rightAnswer[j] === state.userTestAnswers[i][j]) {
              numOfRightAnswers++;
            }
          }
          console.log("num r answer:" + numOfRightAnswers)
          console.log("num all answer:" + state.userTestAnswers[i].length)

          if (numOfRightAnswers === state.userTestAnswers[i].length) {
            state.grade += pointsForEach;
            state.userTestAnswersBoolean[i] = true;
          } else {
            state.userTestAnswersBoolean[i] = false;
          }
        }
      }
      state.grade = Math.round(state.grade);
    },
    updateUserInfo(state, userInfo) {
      state.userInfo= userInfo;
    }
  },
  actions: {
    initializeTest({ commit, state }) {
      //empties testQuestionsByChapter and testQuestions
      commit('clearTestQuestions');
      //stores each index of allTestQuestions in the array that represents the chapter to which it relates
      commit('buildTestQuestionsByChapter');
      //for each of the chapters, add n random questions to testQuestions, where n is loaded from testQuestionsAmountByChapter
      var array, howMany;
      for (var i = 0; i < state.testQuestionsByChapter.length; i++) {
        array = state.testQuestionsByChapter[i];
        howMany = state.testQuestionsAmountByChapter[i];
        commit('randomizeChapterQuestions', { array: array, howMany: howMany});
      }
      //merge the arrays, testQuestionsByChapter now stores all remaining question indexes
      commit('mergeQuestionArrays');
      //add n more random questions (from any chapter), where n is loaded from testQuestionsAmountByChapter
      commit('randomizeChapterQuestions', { array: state.testQuestionsByChapter, howMany: state.testQuestionsAmountByChapter[state.testQuestionsAmountByChapter.length - 1] });
      commit('loadTestScreen', { isFeedbackMode: false });
    }
  },
  modules: {
  }
})
