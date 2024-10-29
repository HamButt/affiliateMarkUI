import { Link } from "react-router-dom";
import React,{ useEffect, useState} from 'react'


const Header = () => {
    const [pathName, setPathName] = useState(false)

    useEffect(()=>{
        const path = window.location.pathname.split('/').reverse()[0]
        
        if(path === 'baby-collection'){
            setPathName(true)
        }else{
            setPathName(false)
        }
    }, [])

    return (
    
    <div className="navbar bg-white shadow px-8 fixed top-0 right-0 left-0 z-50">
        <div className="flex-1">
            <Link className="text-2xl font-sans ">AliExpress Products</Link>
        </div>
      <div className="flex space-x-3">
            <Link className="text-lg font-semibold" to={pathName ? `/` : "/baby-collection"} >{pathName ? "Home" : "Baby collection"}</Link>
      </div>    
    </div>
    )
}

export default Header