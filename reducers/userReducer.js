const intialState = {
  users:[],
  currentUser:{},
  isLoading:false
}

const userReducer = (state=intialState,action) => {
    switch(action.type) {
        case 'CREATE_USER':
          return Object.assign({},state,{users:state.users.concat(action.payload),isLoading:false});
        case 'CURRENT_USER':
          return Object.assign({},state,{currentUser:action.payload});
        case 'UPDATE_USER':
          const newUser = action.payload.user;
          const userId = action.payload.user.id;
          const usersCopy = [...state.users];
          usersCopy[userId]=newUser;
          return Object.assign({},state,{users:usersCopy});
        case 'DELETE_USER':
          const users = state.users.filter((user)=>user.username!==action.payload.username);
          return Object.assign({},state,{users});
        case 'LOADING_USER':
          return Object.assign({},state,{isLoading:true});

        default:
        return state;
    }
}

export default userReducer;
