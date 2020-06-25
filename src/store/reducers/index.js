import { combineReducers } from "redux";

import course from "./course";
// import users from './users';

export default combineReducers({
  course,
  /*user*/
});

/**
 * {
 *     course: { modules: [], activeLesson: {}, activeModule: {}},
 *     user: { name:'', avatar: ''}
 * }
 *
 */
