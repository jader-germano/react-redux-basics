const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Initiating com React",
      lessons: [
        { id: 1, title: "First lesson" },
        { id: 2, title: "Second lesson" },
      ],
    },
    {
      id: 2,
      title: "Initiating com Redux",
      lessons: [
        { id: 1, title: "Terceira lesson" },
        { id: 2, title: "Forth lesson" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
