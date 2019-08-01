import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //check type of action
    //change to first search result
    //change on click in videoList
  switch(action.type){
    case 'CHANGE_VIDEO':
      return action.video;
    default:
      return state;
  }
};

export default currentVideoReducer;
