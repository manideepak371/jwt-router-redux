import { Link } from "react-router-dom"

function PageLinks(){
    return(
        <>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/login">Login</Link></p>
            <p><Link to='/placements'>Placements</Link></p>
            <p><Link to='/accounts'>Accounts</Link></p>
        </>
    )
}

export default PageLinks