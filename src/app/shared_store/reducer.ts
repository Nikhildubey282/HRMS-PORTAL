import { createReducer, on } from "@ngrx/store";
import { foodAction, getReferFriendDataAction, myPitchAction, profileAction, requesttrainingAction } from "./actions";
import { food_total_amount, myPitch, profile_image, referFreiend, requestTraining } from "./state";

export const getReferFriendDataReducer = createReducer(
  referFreiend,
      on(getReferFriendDataAction,(state,data)=>{
          let newReferFriendData = [...state];
          let referFriendData = {
              s_no:newReferFriendData.length+1,
              candidate_name:data.empName,
              experience:data.candidateExperience,
              department:'',
              position:'',
              date_of_referal:new Date(),
              candidate_status:"Pending",
              resume_cv:data.file
          }
          newReferFriendData.push(referFriendData);
          return newReferFriendData
      })
)

export const requestTrainingReducer = createReducer(
  requestTraining,
      on(requesttrainingAction,(state,data)=>{
        // console.log(data,'nikkkkkkkkkkkkkkkkkkkkkk')
          let newReferFriendData = [...state];
          let referFriendData = {
              sNo:newReferFriendData.length+1,
              trainingname:data.trainingName,
              timeline:data.coduct,
              date:new Date(),
              status:"Pending",
              action:'pending'
          }
          newReferFriendData.push(referFriendData);
          return newReferFriendData
      })
)

export const myPitchReducer = createReducer(
  myPitch,
      on(myPitchAction,(state,data)=>{
        console.log(data,'nikkkkkkkkkkkkkkkkkkkkkk')
          let newReferFriendData = [...state];
          let referFriendData = {
              sNo:newReferFriendData.length+1,
              title:data.pitchTitle,
              industry:data.industry,
              technical:data.type1,
              date:'17/05/2023',
              action:'pending'
          }
          newReferFriendData.push(referFriendData);
          return newReferFriendData
      })
)
export const foodReducer = createReducer(
  food_total_amount,
      on(foodAction,(state,data)=>{

          let newReferFriendData = state;
          newReferFriendData=data.total_amount;
          return newReferFriendData
      })
)

export const profileReducer = createReducer(
  profile_image,
      on(profileAction,(state,data)=>{
        console.log(data,'nikkkkkkkkkkkkkkkkkkkkkkkk')
        // const charArray = Object.values(data);
        // const resultString = charArray.join('');
        // console.log(resultString,'nikkkkkkkkkkk');
          let newReferFriendData = state;
          newReferFriendData=data.data;
          return newReferFriendData
      })
)
