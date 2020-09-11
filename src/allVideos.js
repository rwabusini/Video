import React,{Button} from 'react'
//import SelectedVideo from './selectedVideo'

function AllVideos({results}) {
//console.log(results)
var baseUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"

const openMoviePage = () =>{
   results.map(result => {
    var moviePage = "https://www.themoviedb.org/movie/" + result.id
    window.location.href = moviePage;
    })
}
    return (
        <div className="results">
            {results.map(result => {
              var ImgUrl = ''.concat(baseUrl, result.poster_path);
                return(
                    <div className="result" onClick={openMoviePage}>
                        <img src={ImgUrl}/>
                        <h3>{result.title}</h3>
                        <div>
                        </div>
                    </div>
                
			)})
            }
        </div>
    )
}

export default AllVideos
