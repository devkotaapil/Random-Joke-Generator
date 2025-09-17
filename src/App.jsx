import { useState, useEffect } from "react";
import axios from "axios";
import {motion} from 'motion/react';
import { useSpring } from "motion/react";
function App() {
  const x = useSpring(0)
  const y = useSpring("100vh")
  const [joke, setJoke] = useState([]);
  const url = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () =>{
    try{
      const response = await axios.get(url);
      setJoke(response.data)
    }
    catch(error){
      console.log('Error fetching the joke:', error);
      setJoke(`Opps, couldn't fetch the joke try again`); // fall back 
    }
  };

  useEffect(()=>{
    getJoke();
  },[]);
 


  return (
    <div className=" relative bg-gray-400 flex mx-80 py-10 px-5 flex-col text-center my-40 rounded-md shadow-lg shadow-indigo-800/90">
      <h1 className=" font-serif text-center text-white text-2xl">Generate a random joke</h1>
      <motion.button
        onClick={getJoke}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg mx-auto mt-5"
      >
        New Joke
      </motion.button>
      <p className="text-black text-2xl py-2 font-serif ">{joke.setup}</p>
      <p className="text-white text-xl py-1 font-serif">{joke.punchline}😉</p>

      <span className="text-white absolute bottom-0 right-1"><a className="hover:" href="https://github.com/devkotaapil">&copy; by DevkotaApil</a></span>
    </div>
  );
}

export default App;
