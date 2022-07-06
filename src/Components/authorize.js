import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function Authorize(){
    const URL_PATH=window.location.pathname.split('/')[1]
    const state=useSelector((state) => state)
    if(state.role.toLowerCase() === URL_PATH && state.loggedIn){
        console.log(URL_PATH)
        return(
            <Outlet/>
        )
    }
    return <Navigate to={'/login'} replace={true}/>
    // return <Outlet/>
}

export default Authorize