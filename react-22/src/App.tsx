import { useState } from "react"
// import { Tweet } from "./components/Tweet"

import './App.css'
import { AppRoutes } from "./Routes"

function App() {
  // < types > chamado de Generics, para passar tipo de conteúdo obrigatório dentro do estado
  const [tweets, setTweets] = useState<string[]>([
    "tweet 1",
    "tweet 2",
    "tweet 3"
  ])

  function createTweet() {
    const text = `tweet ${tweets.length + 1}`
    setTweets([...tweets, text])
  }

  return (
    <AppRoutes />
    // <div>
    //   {tweets.map(tweet => {
    //     return <Tweet text={tweet} />
    //   })}
    //   <button onClick={createTweet}>Add...</button>
    // </div>
  )
}

export default App
