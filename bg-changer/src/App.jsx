import { useState } from 'react'

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen duration-200"  style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className='flex flex-wrap justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl '>
          <button className='outline-none px-4  rounded-full shadow-lg bg-white '
          style={{backgroundColor:"red"}}
          onClick={ () => setColor("red") }>Red</button>
          <button className='outline-none px-4  rounded-full shadow-lg bg-white '
          style={{backgroundColor:"lightgreen"}}
          onClick={ () => setColor("lightgreen") }>Green</button>
          <button className='outline-none px-4  rounded-full shadow-lg bg-white '
          style={{backgroundColor:"skyblue"}}
          onClick={ () => setColor("skyblue") }>Blue</button>
          <button className='outline-none px-4  rounded-full shadow-lg bg-white '
          style={{backgroundColor:"violet"}}
          onClick={ () => setColor("violet") }>Violet</button>
          <button className='outline-none px-4  rounded-full shadow-lg bg-white '
          style={{backgroundColor:"brown"}}
          onClick={ () => setColor("brown") }>Brown</button>
          <button className='outline-none px-4  rounded-full shadow-lg bg-white '
          style={{backgroundColor:"lavender"}}
          onClick={ () => setColor("lavender") }>Lavender</button>
          
        </div>
      </div>
      
    </div>
  )
}

export default App
