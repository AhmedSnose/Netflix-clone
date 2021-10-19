import {useEffect , useState} from 'react'
import './nav.css'
function Nav() {

    const [show , handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 100) handleShow(true)
            else handleShow(false)
        })
        // console.log("run one Times");
        return _=> window.removeEventListener("scroll")

    },[])
    // console.log("comp rerun");

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo" /> 

            <img
            className="nav__Avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar" />           
            
        </div>
    )
}

export default Nav
