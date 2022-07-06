function USER_LOGGED_IN(payload){
    console.log(payload)
    return{
        type:'USER_LOGGED_IN',
        name:payload.name,
        role:payload.role,
        loggedIn:true
    }
}

function RESET_STATE(){
    return{
        type:'RESET_STATE',
        name:'',
        role:'',
        loggedIn:false
    }
}

exports.USER_LOGGED_IN='USER_LOGGED_IN'
