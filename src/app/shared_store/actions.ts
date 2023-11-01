import { createAction, props } from "@ngrx/store";

export const getReferFriendDataAction = createAction(
  '[Refer a Friend] get data of refer a friend ',
  props<any>()
)

export const requesttrainingAction = createAction(
  '[Request training] get data of request training ',
  props<any>()
)
export const myPitchAction = createAction(
  '[my pitch] get data of rmy pitch ',
  props<any>()
)
export const foodAction = createAction(
  '[food]',
  props<any>()
)

export const profileAction = createAction(
  'p',
  props<any>()
)
