/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  CREATING_SMURF,
  CREATING_SMURF_SUCCESS,
  CREATING_SMURF_FAILURE
  } from '../actions';

  const initialState = {
   smurfs: [
        ],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: null
  }

const rootReducer = (state = initialState, action) => {
      switch(action.type){

        case FETCHING_START :
          return {
            ...state,
            fetchingSmurfs: true,
          }
        case FETCHING_SUCCESS: 
          return {
            ...state,
            fetchingSmurfs: false,
            smurfs:action.payload
          }
        case FETCHING_FAILURE:
          return {
            ...state,
            fetchingSmurfs: false,
            error: action.payload
          }
        case CREATING_SMURF:
          return {
            ...state,
            addingSmurf: true
          }
        case CREATING_SMURF_SUCCESS: 
          return{
            ...state,
            addingSmurf:false,
            smurfs: action.payload
          }
        case CREATING_SMURF_FAILURE: 
          return{
            ...state,
            addingSmurf:false,
            error: action.payload
          }
        

        default : return state;
      }
  }

  export default rootReducer;
