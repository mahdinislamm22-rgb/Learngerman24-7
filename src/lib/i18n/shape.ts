/**
 * The shape of the interface dictionary.
 *
 * Every language file must implement this exactly — a missing key is a
 * TypeScript error, not a blank space that shows up in the UI at runtime.
 *
 * Note the difference from `Multi` in lib/types.ts:
 *   Multi        = teaching content (a grammar explanation in four languages)
 *   Dict (here)  = interface chrome (buttons, headings, navigation)
 */
export type Dict = {
  lang: {
    label: string;
    switchHint: string;
  };

  nav: {
    dashboard: string;
    grammar: string;
    vocab: string;
    reading: string;
    langElements: string;
    writing: string;
    listening: string;
    exams: string;
    mistakes: string;
    review: string;
    tutor: string;
    progress: string;
    plan: string;
    lessons: string;
    practice: string;
    groupLearn: string;
    groupPractice: string;
    groupExam: string;
    groupPersonal: string;
    switchToA0: string;
    switchToB1: string;
  };

  common: {
    save: string;
    saving: string;
    back: string;
    backToDashboard: string;
    soon: string;
    soonBadge: string;
    signOut: string;
    signIn: string;
    signUp: string;
    start: string;
    next: string;
    check: string;
    correct: string;
    wrong: string;
    tryAgain: string;
    showAnswer: string;
    oneMoment: string;
    practiceMaterial: string;
    memoryTrick: string;
    notTheWholeRule: string;
  };

  home: {
    badge: string;
    heroLine1: string;
    heroLine2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    b1Title: string;
    b1Text: string;
    b1Cta: string;
    a0Title: string;
    a0Text: string;
    a0Cta: string;
    featuresTitle: string;
    featuresSub: string;
    f: Record<
      | "grammar"
      | "vocab"
      | "reading"
      | "langElements"
      | "writing"
      | "tutor"
      | "exams"
      | "progress",
      { title: string; text: string }
    >;
    disclaimer: string;
  };

  auth: {
    loginTitle: string;
    loginSub: string;
    registerTitle: string;
    registerSub: string;
    forgotTitle: string;
    forgotSub: string;
    newPassTitle: string;
    newPassSub: string;
    email: string;
    password: string;
    newPassword: string;
    name: string;
    nameHint: string;
    passwordHint: string;
    forgotLink: string;
    noAccount: string;
    hasAccount: string;
    backToLogin: string;
    sendLink: string;
    savePassword: string;
    errNoCredentials: string;
    errShortPassword: string;
    errWrongCredentials: string;
    errNotConfirmed: string;
    errTooManyTries: string;
    errAlreadyRegistered: string;
    errNoEmail: string;
    resetSent: string;
    linkExpired: string;
  };

  dash: {
    greeting: string;
    greetingNoName: string;
    sub: string;
    examWhen: string;
    examWhenText: string;
    examDate: string;
    pickDate: string;
    daysLeft: string;
    day: string;
    days: string;
    examToday: string;
    passMark: string;
    passMarkNote: string;
    nextUpTitle: string;
    nextUpText: string;
    strengthsTitle: string;
    noDataBadge: string;
    noDataText: string;
    statExercises: string;
    statOpenMistakes: string;
    statTexts: string;
    statMocks: string;
    examTableTitle: string;
    examTableSub: string;
    colPart: string;
    colItems: string;
    colPoints: string;
    colTime: string;
    inBlock: string;
    sourceNote: string;
    phaseNote: string;
    saveFailed: string;
    notSignedIn: string;
  };

  soon: {
    heading: string;
    phase: string;
    /** One sentence per unbuilt section, saying what will be there. */
    s: Record<
      | "grammar"
      | "vocab"
      | "reading"
      | "langElements"
      | "writing"
      | "listening"
      | "exams"
      | "mistakes"
      | "review"
      | "tutor"
      | "progress"
      | "plan",
      string
    >;
  };

  schreiben: {
    intro: string;
    pointsLabel: string;
    pointsNote: string;
    tasksDone: string;
    historyTitle: string;
    taskNote: string;
    words: string;
    draftSaved: string;
    yourText: string;
    spellcheckOff: string;
    leitpunkte: string;
    leitpunkteNote: string;
    register: string;
    useDu: string;
    useSie: string;
    submit: string;
    correcting: string;
    submitNote: string;
    stillWorking: string;
    minWords: string;
    phrasesTitle: string;
    phrasesSub: string;
    resultTitle: string;
    yourScore: string;
    wouldPass: string;
    wouldNotPass: string;
    scoreDisclaimer: string;
    patternTitle: string;
    leitpunkteCheck: string;
    correctionsTitle: string;
    noCorrections: string;
    betterVersion: string;
    yourOriginal: string;
    modelAnswer: string;
    tryAgain: string;
    correctedBy: string;
    feedbackUnreadable: string;
    crit: Record<
      "inhalt" | "kommunikation" | "grammatik" | "wortschatz",
      string
    >;
    cat: Record<
      | "einladung"
      | "beschwerde"
      | "absage"
      | "bitte"
      | "entschuldigung"
      | "termin"
      | "wohnung"
      | "kurs"
      | "bewerbung",
      string
    >;
    mistakeCat: Record<
      | "artikel"
      | "kasus"
      | "praeposition"
      | "wortstellung"
      | "verbform"
      | "wortschatz"
      | "rechtschreibung"
      | "konnektor"
      | "register",
      string
    >;
  };

  gram: {
    title: string;
    sub: string;
    weight: string;
    lessonTab: string;
    practiceTab: string;
    testTab: string;
    startLesson: string;
    continueLesson: string;
    mastered: string;
    notStarted: string;
    exercises: string;
    telcRelevance: string;
    whatIsIt: string;
    whyNeeded: string;
    inShort: string;
    pattern: string;
    compareTitle: string;
    compareSub: string;
    tablesTitle: string;
    tablesSub: string;
    tricksTitle: string;
    tricksSub: string;
    mistakesTitle: string;
    mistakesSub: string;
    butNot: string;
    examTip: string;
    finished: string;
    again: string;
    seeResult: string;
    tapWords: string;
    reset: string;
    trainerTitle: string;
    trainerSub: string;
    trainerCta: string;
    trainerDone: string;
    trainerDoneNote: string;
    bestStreak: string;
    level: string;
  };

  fehler: {
    intro: string;
    empty: string;
    emptyCta: string;
    mostCommon: string;
    mostCommonNote: string;
    openTab: string;
    learnedTab: string;
    allClear: string;
    noneLearned: string;
    timesWrong: string;
    markLearned: string;
    markOpen: string;
    addNote: string;
    notePlaceholder: string;
    delete: string;
    confirmDelete: string;
  };

  sb: {
    title: string;
    sub: string;
    formatTitle: string;
    formatText: string;
    notStarted: string;
    teil1: string;
    teil1Hint: string;
    teil2: string;
    teil2Hint: string;
    wordBank: string;
    bankNote: string;
    chooseWord: string;
    usedTwice: string;
    submit: string;
    answered: string;
    yourScore: string;
    scoreNote: string;
    gradeFailed: string;
  };

  lesen: {
    title: string;
    sub: string;
    formatTitle: string;
    formatText: string;
    notStarted: string;
    tapHint: string;
    teil1: string;
    teil2: string;
    teil3: string;
    headings: string;
    headingsNote: string;
    chooseAd: string;
    noneFits: string;
    submit: string;
    answered: string;
    yourScore: string;
    scoreNote: string;
    part: string;
    gradeFailed: string;
  };

  hoeren: {
    title: string;
    sub: string;
    formatTitle: string;
    formatText: string;
    voiceTitle: string;
    voiceText: string;
    notStarted: string;
    onceHint: string;
    part: string;
    listen: string;
    play: string;
    playAgain: string;
    stop: string;
    speed: string;
    limitReached: string;
    noSpeech: string;
    noGermanVoice: string;
    showText: string;
    hideText: string;
    submit: string;
    answered: string;
    yourScore: string;
    scoreNote: string;
    practiceNote: string;
    gradeFailed: string;
  };

  vokabeln: {
    title: string;
    sub: string;
    yourProgress: string;
    learnedNote: string;
    startTraining: string;
    themes: string;
    allThemes: string;
    allWords: string;
    allWordsNote: string;
    trainerNote: string;
    priority: string;
    seenIn: string;
    roundDone: string;
    roundNote: string;
    nextRound: string;
    finish: string;
  };

  pruefungen: {
    title: string;
    sub: string;
    formatTitle: string;
    formatText: string;
    available: string;
    comingSoon: string;
    beforeYouStart: string;
    rule1: string;
    rule2: string;
    rule3: string;
    rule4: string;
    passLine: string;
    startExam: string;
    toListening: string;
    toWriting: string;
    finishExam: string;
    noGoingBack: string;
    overtime: string;
    grading: string;
    gradingNote: string;
    gradeFailed: string;
    passed: string;
    notYet: string;
    passNeeds: string;
    marginOver: string;
    marginUnder: string;
    bySection: string;
    itemsCorrect: string;
    writingNotMarked: string;
    whatWentWrong: string;
    whatWentWrongNote: string;
    wrong: string;
    recurring: string;
    questions: string;
    reviewLesson: string;
    noMistakes: string;
    yourLetter: string;
    seeAllCorrections: string;
    allAnswers: string;
    allAnswersNote: string;
    noAnswer: string;
    backToList: string;
  };

  a0: {
    title: string;
    sub: string;
    dashGreeting: string;
    startHere: string;
    lessonsTitle: string;
    lessonsSub: string;
    lesson: string;
    lessonsDone: string;
    wordsLearned: string;
    vocabTitle: string;
    vocabSub: string;
    practiceTitle: string;
    practiceSub: string;
    progressTitle: string;
    listen: string;
    sayIt: string;
    meaning: string;
    example: string;
    whatYouLearn: string;
    tip: string;
    watchOut: string;
    quickCheck: string;
    finishLesson: string;
    lessonDone: string;
    nextLesson: string;
    allDone: string;
    notStarted: string;
    inProgress: string;
    done: string;
  };
};

export const UI_LANGS = ["de", "en", "it", "bn"] as const;
export type UiLang = (typeof UI_LANGS)[number];
export const DEFAULT_UI_LANG: UiLang = "en";

export const UI_LANG_META: Record<
  UiLang,
  { flag: string; native: string; short: string }
> = {
  de: { flag: "🇩🇪", native: "Deutsch", short: "DE" },
  en: { flag: "🇬🇧", native: "English", short: "EN" },
  it: { flag: "🇮🇹", native: "Italiano", short: "IT" },
  bn: { flag: "🇧🇩", native: "বাংলা", short: "BN" },
};
