import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { useDispatch,useSelector } from "react-redux"
import { USER_LOGGED_IN } from "../Redux/actions"
import { useNavigate } from "react-router-dom"

function Login(){
    const userRef=useRef()
    const roleRef=useRef()
    const [username,setName]=useState('')
    const [role,setRole]=useState('')
    const [errMsg,setErrorMessage]=useState('')
    const [userLoggedIn,setLogged]=useState(false)
    const [userState,setUserState]=useState({})
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const state=useSelector(state => state)
    if(state.role !== '' && state.loggedIn){}

    if(userLoggedIn){
        var payload={
            name:username,
            role:role,
            loggedIn:true
        }
        dispatch({type:'USER_LOGGED_IN',payload:payload})
        if(role === 'Student'){
            navigate(`/student/${username}`,{replace:true})
            return
        }
        if(role === 'Head'){
            navigate('/head',{replace:true})
            return
        }
        if(role === 'Accounts'){
            navigate('/accounts',{replace:true})
            return
        }
        if(role === 'Placements'){
            navigate('/placements',{replace:true})
            return
        }
    }

    const signIn=async ()=>{
        setName(userRef.current.value)
        setRole(roleRef.current.value)
        const repsonse=await axios.post('http://localhost:9000/api/login',{username:userRef.current.value,role:roleRef.current.value})
        const responseData=await repsonse.data
        console.log(responseData)
        if(responseData.errors){
            setErrorMessage(responseData.errors[0].msg)
            console.log("hello1")
        }
        if((responseData.errors === undefined || responseData.errors === null || !responseData.errors) && !responseData.success){
            setErrorMessage('profile & role combination does not exist')
        }
        if(responseData.success){
            setErrorMessage('')
            setLogged(true)
            console.log("hello3")
        }
    }
    /*
        send login details to server
        on resolve? store refresh token , role , logged in flag
            navigate to appropriate page based on role
        on reject/error? display no access message & stay in login screen only
    */
    
    return(
        <div className="login-div">
            <p><input type="text" placeholder="Enter your name" ref={userRef}/></p>
            <p>
                <select ref={roleRef}>
                    <option>Student</option>
                    <option>Accounts</option>
                    <option>Placements</option>
                    <option>Head</option>
                </select>
            </p>
            <p><button onClick={signIn}>Login</button></p>
            <p>{errMsg}</p>
        </div>
    )
}

export default Login