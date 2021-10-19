import axios from './axios'
import {useState , useEffect} from 'react'
import requests from './request'
import './Banner.css'
function Banner() {
    const [moive , setMoive] = useState([])
    useEffect(()=>{
        async function fetchApi(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            
            setMoive(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ])

              return request
              
        }
        fetchApi()
    },[])

function truncate(str , n){
    return str?.length > n ? str.substr(0 , n -1) + "..." : str
    // truncate
}
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
             backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${moive?.backdrop_path}"
             )` , backgroundPosition: "center center"}}
        > 
        
            <div className="banner__contents">
               <h1 className="banner__title"> 
                   {moive?.title || moive?.name || moive?.original_name}
               </h1>

               <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                </div>
                
                <h1 className="banner__description"> 
                   {truncate(moive?.overview , 150)}
                   
                </h1>    
            </div>
            <div className="banner__fadebutton" />

        </header>
    )
}

export default Banner
