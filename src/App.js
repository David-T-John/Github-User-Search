import './App.css';
import { useState} from 'react';
import User from './Components/User';

function App() {

  const [query, setQuery] = useState("")
  const [queryResults, setQueryResults] = useState([])
  
  const handleQuery = e => {
    setQuery(e.target.value)
    let qString = 'q=' + encodeURIComponent(`${e.target.value} in:login ${e.target.value} in:name ${e.target.value} in:email  `);
    userSearch(qString)
  }

  const userSearch = async (q) => {
    await fetch(`https://api.github.com/search/users?${q}&per_page=9`)
    .then(res=> res.json())
    .then(res=> {
      setQueryResults(res.items);
      console.log(res.items); 
      return res;
    })
    .catch(err => console.log(err))
  }
  
  return (
    <div className="App">
      
      <header className="App-header">
        <input placeholder="Search Github Users" onChange={e=>handleQuery(e)} type="text"/>
      </header>
      
      { query.length > 0 ? <h4>Search results for: "{query}"</h4> : <h4>Search for Github users</h4>}
      
      <div id="results">
      {queryResults !== undefined ? queryResults.map( result => {
          return(
          <User 
            html_url={result.html_url}
            url={result.url}
            login={result.login} 
            avatar_url={result.avatar_url}
            key={result.html_url}/>) 
        }) : "No results found"}
      </div>

    </div>
  );
}

export default App;
