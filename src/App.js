import React, {useState} from 'react';
import Search from './SearchBar'
import axios from 'axios'
//import Results from './Results'

function App() {
  // creating state to handle text changes
  const [text , setText] = useState({
    input : ""
  });

  const api = "https://api.themoviedb.org/3/movie/top_rated?api_key=468a3e5868a2156306ec2772e6c28f9e&language=en-US&page=1";
  
  const handelTextInput = (event) => {
    var input = event.target.value;
    setText(prevText => {
      return {...prevText, input: input}
    })
    //console.log(text.input)
  }

  const searching = (event) => {
    if (event.key === "Enter") {
      axios(api + "&s=" + text.input).then(({ data }) => {
        let SearchResults = data.Search;
        console.log(data)
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
        {/* <Search handelTextInput={handelTextInput} search={search} /> */}

        {/* <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false} */}
      </div>
    </div>
  );
}

export default App;
