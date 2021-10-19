import {useState , useEffect } from 'react'
import YouTube from 'react-youtube'
import axios from './axios'
import './Row.css'
import movieTralier from "movie-trailer"
const base_url = "https://image.tmdb.org/t/p/original/"


export default function Row({fetchUrl , title ,isLargRow}) {


    const [movies , setMoives] = useState([])
    const [trailerUrl , setTrailerUrl] = useState('')



    useEffect(()=>{
       async function fetchData(){
           const request = await axios.get(fetchUrl)
           setMoives(request.data.results);

           return request
       }
       fetchData() 

    },[fetchUrl])

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }

    const handelClik = (movie)=>{
        if(trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTralier(movie?.title || '')
            .then((url)=> {
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get("v"))
            console.log(trailerUrl);
            }).catch((error) => alert("the trailer Url is not available now , Try another Moive"))
        }
    }
    
    return (
        <div className="row">
              <h2> {title} </h2>
                <div className={`row__posters`}>
                    {movies.map(movie => (
                        <img 
                        key={movie.id}
                        className={`row__poster ${isLargRow && "row__posterLarg"}`}
                        src={ `${base_url}${isLargRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
                        onClick={handelClik.bind(null , movie)}
                        />
                    
                    ))}
                </div>
               { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
