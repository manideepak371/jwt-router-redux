const initialState={
    name:'',
    role:'',
    loggedIn:false,
}

const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'USER_LOGGED_IN':
            return {
                ...state,
                name:action.payload.name,
                role:action.payload.role,
                loggedIn:true
            }
        case 'RESET_STATE':
            return {
                name:'',
                role:'',
                loggedIn:false
            }
        default: return state
    }
}

export default Reducer