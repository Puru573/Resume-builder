 import { getFirebase } from "react-redux-firebase";
import * as authActions from "./action";
import { getFirestore } from "redux-firestore";

 const registerReq=()=>{
    return{
        type:authActions.SIGN_UP_REQUEST
    }
 }

 const registerFail=(err)=>{
    return{
        type:authActions.SIGN_UP_FAILED,
        payload:err.message
    }
 }

 const registerSuc=()=>{
    return {
        type:authActions.SIGN_UP_SUCCESS
    }
 }

 const removeError=()=>{
    return{
        type:authActions.REMOVE_ERROR
    }
 }

 export const register= (userData)=>{
    return async (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(registerReq())
        const firebase=getFirebase();
        const firestore=getFirestore();

        try{ 
            const data= await firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password);
            await firestore.collection('users').doc(data.user.uid).set({
             email:userData.email,
             resumeIds:[]
            });
         //succ
         dispatch(registerSuc())
        }
        catch(err){
            dispatch(registerFail(err))
            setTimeout(()=>{
                dispatch(removeError())
            },2000);
        }
}}

//sign in

const signinReq=()=>{
    return{
        type:authActions.SIGN_IN_REQUEST
    }
 }

 const signinFail=(err)=>{
    return{
        type:authActions.SIGN_IN_FAILED,
        payload:err.message
    }
 }

 const signinSuc=()=>{
    return {
        type:authActions.SIGN_IN_SUCCESS
    }
 }

 export const signin= (userData)=>{
    return async (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(signinReq())
        const firebase=getFirebase();
        try{
        await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password);
         //succ
         dispatch(signinSuc())
        }
        catch(err){
            dispatch(signinFail(err))
            setTimeout(()=>{
                dispatch(removeError())
            },2000);
        }
}}

// signout

export const signout=()=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        try{
            await firebase.auth().signOut();
            dispatch({type:authActions.SIGN_OUT_SUCCESS})
            
        }
        catch(err){
            dispatch({type:authActions.SIGN_OUT_FAILED,payload:err})
            setTimeout(()=>{
                dispatch(removeError());
            },2000);
        }  
    }
}