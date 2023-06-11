import React, {useState} from 'react';
import './App.css';  

// app key
// srhonZp01DJS_45_9Am52OnPYrkdPjNt7s553WanW04
function App() {

  const[value, setValue] = useState("")
  const[results, setResults] = useState([])
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=srhonZp01DJS_45_9Am52OnPYrkdPjNt7s553WanW04&query=${value}&per_page=${20}&orientation=squarish`)
    .then((response) => {
    return response.json()
  })
    .then((data) => {
      console.log(data)
     value ? setResults(data.results) : alert("Search cannot be blank!")
    })
  }
  return (
    <div className="App">
      <div className='mydiv'>
        <span>Search</span>
        <input style={{width: "60%", height: "30px"}} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className='btn' onClick={() => fetchImages()}>Send</button>
      </div>
      <div className='gallery'>
       {
        results.map((result) => {
          return <img alt='' className='item' key={result.id} src={result.urls.regular} />
        })
       }
      </div>
    </div>
  );
}

export default App;
