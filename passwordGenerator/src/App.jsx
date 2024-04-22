import { useState } from 'react'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import './App.css'

function App() {

  const [password, setPassword] = useState("");
  const [length,setLength]  = useState(6);
  const[character,setCharacter] = useState(false);
  const[number,setNumber] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenertor = useCallback(()=>{
    let  generatedPass = "";
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(number)      str += '1234567890'
    if(character)   str +=  "!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length +  1)
      generatedPass += str.charAt(char);
      
    }
    setPassword(generatedPass);

  },[length, character, number])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);    // To copy the selected range of password button
    window.navigator.clipboard.writeText(password);

  }, [password])

  useEffect(()=>{
    passwordGenertor();
  },[length,character,number,passwordGenertor]); 

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-orange-500 '>
        <h1 className = "text-4xl text-center text-white my-5">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          className='outline-none w-full py-1 px-3'
          value={password} 
          readOnly
          ref={passwordRef} />
          <button onClick={copyPassword} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 transition-colors duration-300 hover:bg-gray-700 hover:text-orange-400'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          value={length}
          minLength={6}
          maxLength={100}
          id='length' 
          onChange={(e)=>setLength(e.target.value)}/>
          <label htmlFor="length" >Length: {length}</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
          <input type='checkbox' 
          defaultChecked={number}
          id='number' 
          onChange={() => setNumber((previous) => !previous)}/>
          <label htmlFor="number">Number</label>
          
          <input type='checkbox' 
          defaultChecked={character}
          id='character' 
          onChange={() => setCharacter((previous) => !previous)}/>
          <label htmlFor="character">Character</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
