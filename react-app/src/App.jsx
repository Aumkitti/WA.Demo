import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostClassComponent from './components/PostClassComPonent'
import PostFunctionComponent from './components/postFunctionComponent'
import Comment from './components/Comment'
import StateInClass from './components/StateInClass'
import StateInFunction from './components/StateInFunction'
import Card from './components/Card'
import Example from './components/Example'
import CardReact from './components/CardReact'
import CardReact from './components/CardReact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React demo</h1>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
        
        <PostFunctionComponent/>
      <PostClassComponent userId="Kittipong" message="ง่วงมากๆเลย">
        <Comment userId="Dek" message="ง่วงด้วย" />
      </PostClassComponent>

      <StateInClass/>
      
      <StateInFunction />

      <Card />
      <CardReact/>
    </>
  )
}

export default App
