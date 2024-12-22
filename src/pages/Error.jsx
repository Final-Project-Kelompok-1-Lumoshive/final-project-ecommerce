import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';

const Error = ({type="404"}) => {
    const [errorType, setErrorType] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
    if (type === "404") {
        setErrorType("404 Not Found");
        setDescription("Your visited page not found. You may go home page.");
    } else if (type === "500") {
        setErrorType("Error Code 500");
        setDescription("We apologize for the inconvenience and appreciate your patience.");
    } else {
        setErrorType("Access Denied 401");
        setDescription("You do not have permission to view this page.");
    }
    }, [type]);
    
  return (
    <div>
        <BreadCrumbs linkError={type} />
        <div className='flex flex-col justify-center items-center gap-10 min-h-screen'>
            <h1 className='font-inter font-bold md:text-8xl text-4xl'>{errorType}</h1>
            <p className='font-poppins text-center'>{description}</p>
            <Link to="/" className='font-poppins bg-red text-white py-4 px-12 rounded-lg'>Back To Homepage</Link>
        </div>
    </div>
  )
}

export default Error