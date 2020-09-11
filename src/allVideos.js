import React from 'react'
//import SelectedVideo from './selectedVideo'

function AllVideos({results}) {
console.log(results)
    return (
        <div className="results">
            {results.map(result => {
              
                return(
                    <div className="result" >
                    <img src="https://image.tmdb.org/t/p/w185/{result.poster_path}" />
                    <h3>{result.title}</h3>
                </div>
			)})}
        </div>
    )
}

export default AllVideos
