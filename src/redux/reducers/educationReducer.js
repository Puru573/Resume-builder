import * as educationActions from "../actions/action.js";
import initialState from "./initialState.json";

const educationRducer=(state=initialState.education,action)=>{
    switch(action.type){
        case educationActions.SET_EDUCATION:
            return{...action.payload};
        case educationActions.UPDATE_EDUCATION:
            return{...action.payload};

        default:return state
    } 
}

export default educationRducer;