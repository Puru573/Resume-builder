import {combineReducers} from 'redux';
import documentRducer from './documentReducer';
import contactRducer from './contactReducer';
import educationRducer from './educationReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';

const rootReducer=combineReducers({
    document:documentRducer,
    contact:contactRducer,
    education:educationRducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    auth:authReducer
})

export default rootReducer;