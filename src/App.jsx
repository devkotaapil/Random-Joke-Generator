import { useState, useEffect } from "react";
import axios from 'axios';

function App(){
  const [joke, setJoke] = useState([]);
  const url = 'https://official-joke-api.appspot.com/random_joke';

  useEffect(()=>{
    axios.get(url).then(response => {
      setJoke(response.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);

  return(
    <div className="bg-gray-400 flex mx-50 py-10 flex-col text-center my-50 rounded-md shadow-lg shadow-cyan-500/50">
      <h1 className="text-white text-2xl">Generate a random joke</h1>
      <button className="font-serif text-white text-xl block bg-cyan-500 mx-auto p-2 mt-10 hover:cursor-pointer hover:bg-cyan-300">GetIt</button>
      <p className="text-white text-2xl py-2">{joke.setup}</p>
      <p className="text-white text-2xl py-1">{joke.punchline}</p>
    </div>
  );
}

export default App;