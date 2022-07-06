import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import MyDispatch from "../Redux/mydispatch"

function RoleDetails(){
    const [details,setDetails]=useState({})
    const state=useSelector(state => state)
    const navigate=useNavigate()
    const dispatch=MyDispatch()

    useEffect(()=>{
        getRoleDetails()
    },[])

    const getRoleDetails=async ()=>{
        console.log(state.name)
        const response=await axios.post('http://localhost:9000/api/getRole',{username:state.name})
        const responseData=await response.data
        if(responseData.success){
            setDetails(responseData.result)
        }
        if(!responseData.success){
            dispatch({type:'RESET_STATE'})
            navigate('/login',{replace:true})
        }
    }


    return alert(JSON.stringify(details))
}

export default RoleDetails