import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    informations: any,
    workAndEducation :any,
    areasOfInterest : any,
    aboutUs : any
}

const initialState: CounterState = {
    informations : [],
    workAndEducation : [],
    areasOfInterest : [],
    aboutUs : []
}

export const cvAllState = createSlice({
  name: 'cv',
  initialState,
  reducers: {

    _cvInformations: (state, action: PayloadAction<any>) => {
      state.informations = action.payload
    },
    _cvWorkAndEducation : (state, action: PayloadAction<any>) => {
      state.workAndEducation = action.payload
    },
    _cvAreasOfInterest :  (state, action: PayloadAction<any>) => {
      state.areasOfInterest = action.payload
    },
    _aboutUs : (state, action: PayloadAction<any>) => {
      state.aboutUs = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  _cvInformations ,_cvWorkAndEducation,_cvAreasOfInterest , _aboutUs} = cvAllState.actions

export default cvAllState.reducer