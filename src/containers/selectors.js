import { createSelector } from 'reselect';


const getState= (state) => state.get('data')
const getState1= (state) => state.get('registryname')
export const getdataState = createSelector(
  [ getState ],
  (data) => data,
)

export const getdataState1 = createSelector(
  [ getState1 ],
  (registryname) => registryname,
)
