import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Head(){
    const [details,setDetails]=useState([])
    const navigate=useNavigate()
    const dispatch=useDispatch()

    useEffect(()=>{
        getDetails()
    },[])
    
    const getDetails=async ()=>{
        const response=await axios.get('http://localhost:9000/api/head')
        const responseData=await response.data
        if(responseData.success){
            setDetails(responseData.result)
        }
        if(!responseData.success){
            dispatch({type:'RESET_STATE'})
            navigate('/login',{replace:true})
            return
        }
    }
    return(
        <div >
            welcome HOC!
            <div className="results-div">
                {
                    details.length > 0 ?
                    <table className="results-table">
                        <tr style={{backgroundColor:"rgb(216, 146, 121)"}}>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Due</td>
                            <td>Offers</td>
                        </tr>
                        {
                            details.map(student => (
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.department}</td>
                                    <td>{student.due}</td>
                                    <td>
                                        {
                                            student.placements.length > 0 &&
                                            student.placements.join(',')
                                        }
                                    </td>
                                </tr>  
                            ))
                        }
                    </table>    :
                    "No data available."
                }
            </div>
        </div>
    )
}

export default Head