import * as documentActions from "../actions/action.js";
import {v4 as uuidv4} from 'uuid';

export const setDocument=(skinCd)=>{
    return {
        type:documentActions.SET_SKIN,
        payload:{
            id:uuidv4(),
            skinCd:skinCd
        }
    }
}

export const updateDocument=(skinCd)=>{
    return{
        type:documentActions.UPDATE_SKIN,
        payload:{
            skinCd:skinCd
        }
    }
}