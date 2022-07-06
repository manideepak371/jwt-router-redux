import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MyDispatch from "../Redux/mydispatch"

function Accounts(){
    const [details,setDetails]=useState([])
    const dispatch=MyDispatch()
    const navigate=useNavigate()
    
    useEffect(()=>{
        getDetails()
    },[])

    const getDetails=async ()=>{
        const response=await axios.get('http://localhost:9000/api/accounts')
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
            welcome Accountant!
            <div className="results-div">
                {
                    details.length > 0 ?
                    <table className="results-table">
                        <tr style={{backgroundColor:"rgb(216, 146, 121)"}}>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Due</td>
                        </tr>
                        {
                            details.map(student => (
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.department}</td>
                                    <td>{student.due}</td>
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

export default Accounts