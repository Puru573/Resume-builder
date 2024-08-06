import * as educationActions from "./action.js";

export const setEcucation=(education)=>{
    return{
        type:educationActions.SET_EDUCATION,
        payload:education
    }
}

export const updateEducation=(education)=>{
    return{
        type:educationActions.UPDATE_EDUCATION,
        payload:education
    }
}


