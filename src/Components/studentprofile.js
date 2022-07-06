import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import MyDispatch from "../Redux/mydispatch"

function StudentProfile(){
    const [details,setDetails]=useState({})
    const params=useParams()
    const navigate=useNavigate()
    const dispatch=MyDispatch()

    useEffect(()=>{
        getDetails()
    },[])

    
    if(details === null){
        return "No data available"
    }

    const getDetails=async ()=>{
        const response=await axios.post('http://localhost:9000/api/getProfile',{username:params.name})
        const responseData=await response.data
        console.log(responseData)
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
        <div>
            student profile page
            <div className="results-div">
                <table className="results-table">
                    <tr style={{backgroundColor:"rgb(216, 146, 121)"}}>
                        <td>Name</td>
                        <td>Department</td>
                        <td>Offers</td>
                    </tr>
                    <tr>
                        <td>{details.name}</td>
                        <td>{details.department}</td>
                        {<td>
                            {
                                details?.placements?.length > 0 &&
                                details?.placements?.join(',')
                            }
                        </td>
                        }
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default StudentProfile