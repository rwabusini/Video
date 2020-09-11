import React,{useState} from 'react'
//import SelectedVideo from './selectedVideo'

function AllVideos({results}) {
//console.log(results)
const [id , setId] = useState(0)
var baseUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"


results.map(result => {})


// const openMoviePage = () =>{
//    results.map(result => {
//     var moviePage = "https://www.themoviedb.org/movie/" + id
//     window.location.href = moviePage;
//     console.log(moviePage)
//     })
// }
    return (
        <div className="results">
            {results.map(result => {
              var ImgUrl = ''.concat(baseUrl, result.poster_path);
             
                return(
                    <div className="result" onClick= {function openMoviePage () {
                         var moviePage = "https://www.themoviedb.org/movie/" + result.id
                         window.location.href = moviePage;
                         console.log(moviePage)
                    }}>
                        <img src={ImgUrl}/>
                        <h3>{result.title}</h3>
                    </div>
                
			)})
            }
        </div>
    )
}

export default AllVideos
