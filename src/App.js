import React, {useState} from 'react';
import Search from './SearchBar'
import axios from 'axios'
import AllVideos from './allVideos';


function App() {
  // creating state to handle text changes
  const [text , setText] = useState({
    input : "",
    results: [],
  });

  const api = "https://api.themoviedb.org/3/search/movie?api_key=468a3e5868a2156306ec2772e6c28f9e";
  
  const handelTextInput = (event) => {
    var input = event.target.value;
    setText(prevText => {
      return {...prevText, input: input}
    })
    //console.log(text.input)
  }

  const searching = (event) => {
    if (event.key === "Enter") {
      axios(api + "&query=" + text.input).then(({ data }) => {
        var SearchResults = data.results;
       //console.log(data)
        setText(prevText => {
          return { ...prevText, results: SearchResults }
        })
      });
    }
   
  }


  return (
    <div className="App">
      <header>
        <h1>Movie Application</h1>
      </header>
      <div className="searching">
      <Search handelTextInput ={handelTextInput} searching ={searching}/>
        <AllVideos results={text.results}/>
      </div>
    </div>
  );
}

export default App;
