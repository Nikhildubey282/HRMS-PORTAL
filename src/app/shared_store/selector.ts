import { createFeatureSelector } from "@ngrx/store";

export const GET_REFER_FRIEND = 'get_refer_friend';
export const getReferFriendDataSelector = createFeatureSelector(GET_REFER_FRIEND);

export const REQUEST_FOR_TRAINING='request_training';
export const requestTrainingDataSelector = createFeatureSelector(REQUEST_FOR_TRAINING);

export const MY_PITCH='MY PITCH';
export const myPitchDataSelector = createFeatureSelector(MY_PITCH);


export const FOOD='FOOD';
export const foodSelector = createFeatureSelector(FOOD);

export const IMAGE='IMAGE';
export const imageSelector = createFeatureSelector(IMAGE);
