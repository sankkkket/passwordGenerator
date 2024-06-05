import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
 const passwordGenerator = useCallback (() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  if (numAllowed) str += "0123456789"
  if (charAllowed) str += "@#$!%^&*(){}`+-/<>_"

  for (let i = 0; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }

  setPassword(pass)

 }, [length, numAllowed, charAllowed, setPassword])

 useEffect(()=> {
  passwordGenerator()
 }, [length,numAllowed, charAllowed, passwordGenerator])



  return (
    <>
    <div className='bodyy'>
        <div className='main-div my-4'>
          <div className='title'>
            <h1> Password Generator </h1>
          </div>
        </div>
        <div className='main-box my-1'>
          <input 
            type='text'
            value={password}
            placeholder='password'
            readOnly
            className='text-input'
          />
          <button className='btn'>copy</button>
        </div>
        <div className='options'>
          <div className='options-name'>
            <input
              type='range'
              min={8}
              max={25}
              value={length}
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='len-lable'>Length: {length}</label>
          </div>
          <div className='check-box'>
              <input 
                type='checkbox'
                defaultChecked={numAllowed}
                id='numInput'
                onChange={() => {
                  setNumAllowed((prev) => !(prev))
                }}
              />
            <label className='len-lable'>Numbers</label>
            </div>
            <div className='check-box'>
              <input 
                type='checkbox'
                defaultChecked={charAllowed}
                id='charInput'
                onChange={() => {
                  setCharAllowed((prev) => !(prev))
                }}
              />
            <label className='len-lable'>Special characters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
