import * as contactActions from "../actions/action.js";
import initialState from "./initialState.json";

const contactRducer=(state=initialState.contact,action)=>{
    switch(action.type){
        case contactActions.SET_CONTACT:
            return{...action.payload};
        case contactActions.UPDATE_CONTACT:
            return{...action.payload};
            default:return state
    }
}

export default contactRducer;