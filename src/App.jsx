import { useState } from 'react'


function App() {
  const [round, setRound] = useState(0)
  const [win, setWin] = useState(0)
  const [lose, setLose] = useState(0)
  const [draw, setDraw] = useState(0)
  const [streak, setStreak] = useState(0)
  const [history, setHistory] = useState([])
  const [myChoice, setMyChoice] = useState('')
  const [computerChoice, setcomputerChoice] = useState('')
  const [result, setResult] = useState('')

  function play(choice) {
    setMyChoice(choice)

    let computer = ''
    let random = Math.random()
    if (random < 0.33) {
      computer = 'Rock'
    } else if (random < 0.66) {
      computer = 'Paper'
    } else {
      computer = 'Scissor'
    }
    setcomputerChoice(computer)

    let gameResult = ''
    if (choice === computer) {
      gameResult = 'Draw'
    } else if (choice === 'Rock' && computer === 'Scissor') {
      gameResult = 'Win'
    } else if (choice === 'Paper' && computer === 'Rock') {
      gameResult = 'Win'
    } else if (choice === 'Scissor' && computer === 'Paper') {
      gameResult = 'Win'
    } else {
      gameResult = 'Lose'
    }
    setResult(gameResult)

    setRound(round + 1)

    if (gameResult === 'Win') {
      setWin(win + 1)
      setStreak(streak + 1)
      if (streak + 1 > bestStreak) {
        setBestStreak(streak + 1)
      }
    } else if (gameResult === 'Lose') {
      setLose(lose + 1)
      setStreak(0)
    } else {
      setDraw(draw + 1)
    }

    let newHistory = [...history]
    newHistory.unshift({ player: choice, computer: computer, result: gameResult })
    setHistory(newHistory)
  }

  function reset() {
    setRound(0)
    setWin(0)
    setLose(0)
    setDraw(0)
    setStreak(0)
    setHistory([])
    setMyChoice('')
    setcomputerChoice('')
    setResult('')
  }

  return (
    <>
      <div style={{display: "flex", justifyContent: "center"}}>
        <h1>ROCK PAPER SCISSOR</h1>
      </div>
      <div style={{display: "flex", gap: 55, justifyContent: "center"}}>
        <h1>🪨</h1>
        <h1>📜</h1>
        <h1>✂️</h1>
        <h1>↩️</h1>
      </div>
      <div style={{display: "flex", gap: 30, justifyContent: "center"}}>
        <button onClick={() => play('Rock')}>Rock</button>
        <button onClick={() => play('Paper')}>Paper</button>
        <button onClick={() => play('Scissor')}>Scissor</button>
        <button style={{color:'red'}} onClick={reset}>Reset</button>
      </div>
 
      <div style={{outline: "1px solid blue"}}>
        {result === 'Win' && <h2 style={{textAlign: "center"}}>🎉 You Win!</h2>}
        {result === 'Lose' && <h2 style={{textAlign: "center"}}>💀 You Lose!</h2>}
        {result === 'Draw' && <h2 style={{textAlign: "center"}}>🤝 Draw!</h2>}
      </div>

      {myChoice !== '' && (
        <div style={{textAlign: "center"}}>
          <p>You picked: {myChoice} — computer picked: {computerChoice}</p>
        </div>
      )}

      <div style={{display: "flex", gap: 30, justifyContent: "center", }}>
        <p style={{outline: "2px solid blue"}}>Round: {round}</p>
        <p style={{outline: "2px solid blue"}}>Win: {win}</p>
        <p style={{outline: "2px solid blue"}}>Lose: {lose}</p>
        <p style={{outline: "2px solid blue"}}>Draw: {draw}</p>
        <p style={{outline: "2px solid blue"}}>Streak: {streak}</p>
      </div>

  
        <div>
          <h1>Move History</h1>
          {history.map((h, i) => (
            <div key={i} style={{display: "flex", gap: 10}}>
              <h5>#{history.length - i}</h5>
              <h5>You: {h.player}</h5>
              <h5>computer: {h.computer}</h5>
              <h5>{h.result}</h5>
            </div>
          ))}
        </div>
 
    </>
  )
}

export default App
