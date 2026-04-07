import { useState } from 'react'
import { Gem, FileText, Scissors, RotateCcw } from 'lucide-react'

function LizardMascot({ mood }) {
  const config = {
    idle:  {
      anim:    'lizardBob 3s ease-in-out infinite',
      mouth:   'M 116 90 Q 126 95 136 90',
      brow:    'M 122 72 Q 128 70 133 72',
      pupilX:  128, pupilY: 77,
      color:   '#22c55e',
      speech:  'your turn! 👀',
      speechBg: 'rgba(34,197,94,0.15)',
      speechBorder: 'rgba(34,197,94,0.4)',
      tears:   false,
      stars:   false,
      wave:    false,
    },
    win:   {
      anim:    'lizardJump 0.5s ease-in-out infinite',
      mouth:   'M 112 89 Q 126 100 138 88',
      brow:    'M 121 70 Q 127 67 133 70',
      pupilX:  127, pupilY: 74,
      color:   '#22c55e',
      speech:  'YESSS!! 🎉',
      speechBg: 'rgba(34,197,94,0.2)',
      speechBorder: 'rgba(74,222,128,0.7)',
      tears:   false,
      stars:   true,
      wave:    false,
    },
    lose:  {
      anim:    'lizardSad 2s ease-in-out infinite',
      mouth:   'M 114 94 Q 126 87 138 93',
      brow:    'M 121 74 Q 127 78 133 74',
      pupilX:  128, pupilY: 80,
      color:   '#4ade80',
      speech:  'oof... 😔',
      speechBg: 'rgba(100,100,100,0.15)',
      speechBorder: 'rgba(150,150,150,0.35)',
      tears:   true,
      stars:   false,
      wave:    false,
    },
    draw:  {
      anim:    'lizardShrug 1.2s ease-in-out infinite',
      mouth:   'M 118 91 L 134 91',
      brow:    'M 121 73 Q 127 71 130 74',
      pupilX:  131, pupilY: 77,
      color:   '#22c55e',
      speech:  'seriously?? 🤷',
      speechBg: 'rgba(245,158,11,0.12)',
      speechBorder: 'rgba(245,158,11,0.4)',
      tears:   false,
      stars:   false,
      wave:    false,
    },
    reset: {
      anim:    'lizardWave 0.4s ease-in-out infinite',
      mouth:   'M 116 90 Q 126 96 136 90',
      brow:    'M 122 71 Q 128 69 133 71',
      pupilX:  127, pupilY: 76,
      color:   '#22c55e',
      speech:  "let's go! 🦎",
      speechBg: 'rgba(99,102,241,0.15)',
      speechBorder: 'rgba(129,140,248,0.5)',
      tears:   false,
      stars:   false,
      wave:    true,
    },
  }

  const c = config[mood] || config.idle

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 10, pointerEvents: 'none' }}>

      {/* Speech bubble */}
      <div style={{
        position: 'absolute',
        bottom: 148,
        left: 12,
        background: c.speechBg,
        border: `1.5px solid ${c.speechBorder}`,
        borderRadius: 12,
        padding: '6px 12px',
        fontSize: 13,
        fontWeight: 600,
        color: 'white',
        whiteSpace: 'nowrap',
        backdropFilter: 'blur(8px)',
        animation: 'resultPop 0.3s ease',
        boxShadow: `0 0 12px ${c.speechBorder}`,
      }}>
        {c.speech}
        {/* bubble tail */}
        <div style={{
          position: 'absolute',
          bottom: -8,
          left: 20,
          width: 0,
          height: 0,
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderTop: `8px solid ${c.speechBorder}`,
        }}/>
      </div>

      {/* Win stars */}
      {c.stars && <>
        <div style={{ position:'absolute', bottom:155, left:100, fontSize:16, animation:'sparkleAnim 0.6s ease-in-out infinite' }}>✦</div>
        <div style={{ position:'absolute', bottom:170, left:60,  fontSize:12, animation:'sparkleAnim 0.6s 0.2s ease-in-out infinite' }}>✦</div>
        <div style={{ position:'absolute', bottom:160, left:130, fontSize:10, animation:'sparkleAnim 0.6s 0.4s ease-in-out infinite' }}>✦</div>
      </>}

      {/* Lizard body */}
      <div style={{ animation: c.anim, width: 160, height: 160 }}>
        <svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg">

          {/* Tail */}
          <path d="M 52 110 Q 20 105 10 85 Q 2 68 18 58" stroke="#15803d" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M 52 110 Q 20 105 10 85 Q 2 68 18 58" stroke="#22c55e" strokeWidth="6"  fill="none" strokeLinecap="round"/>

          {/* Back legs */}
          <line x1="60" y1="118" x2="44" y2="142" stroke="#15803d" strokeWidth="7" strokeLinecap="round"/>
          <line x1="44" y1="142" x2="36" y2="142" stroke="#15803d" strokeWidth="5" strokeLinecap="round"/>
          <line x1="44" y1="142" x2="40" y2="148" stroke="#15803d" strokeWidth="4" strokeLinecap="round"/>
          <line x1="44" y1="142" x2="50" y2="148" stroke="#15803d" strokeWidth="4" strokeLinecap="round"/>

          {/* Front leg — normal (down), always visible */}
          {!c.wave && <>
            <line x1="95" y1="118" x2="108" y2="142" stroke="#15803d" strokeWidth="7" strokeLinecap="round"/>
            <line x1="108" y1="142" x2="100" y2="148" stroke="#15803d" strokeWidth="4" strokeLinecap="round"/>
            <line x1="108" y1="142" x2="108" y2="150" stroke="#15803d" strokeWidth="4" strokeLinecap="round"/>
            <line x1="108" y1="142" x2="116" y2="148" stroke="#15803d" strokeWidth="4" strokeLinecap="round"/>
          </>}

          {/* Shadow */}
          <ellipse cx="78" cy="122" rx="36" ry="8" fill="rgba(0,0,0,0.3)"/>

          {/* Body */}
          <ellipse cx="78" cy="108" rx="34" ry="22" fill="#16a34a"/>
          <ellipse cx="78" cy="108" rx="34" ry="22" fill="url(#bodyGrad)"/>
          <ellipse cx="78" cy="112" rx="22" ry="14" fill="#4ade80" opacity="0.5"/>

          {/* Spots */}
          <circle cx="64" cy="100" r="4" fill="#15803d" opacity="0.5"/>
          <circle cx="78" cy="96"  r="3" fill="#15803d" opacity="0.5"/>
          <circle cx="90" cy="100" r="4" fill="#15803d" opacity="0.5"/>

          {/* Neck */}
          <ellipse cx="104" cy="98" rx="14" ry="10" fill="#16a34a"/>

          {/* Head */}
          <ellipse cx="118" cy="83" rx="20" ry="16" fill={c.color}/>

          {/* Eyebrow */}
          <path d={c.brow} stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

          {/* Eye white */}
          <circle cx="126" cy="77" r="7" fill="white"/>
          {/* Pupil */}
          <circle cx={c.pupilX} cy={c.pupilY} r="4" fill="#1e1b4b"/>
          {/* Shine */}
          <circle cx={c.pupilX + 1} cy={c.pupilY - 2} r="1.5" fill="white"/>

          {/* Win: star pupils */}
          {mood === 'win' && <>
            <text x="123" y="80" fontSize="10" fill="#fbbf24" textAnchor="middle">★</text>
          </>}

          {/* Mouth */}
          <path d={c.mouth} stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

          {/* Tongue (idle/win only) */}
          {(mood === 'idle' || mood === 'win' || mood === 'reset') && <>
            <path d="M 128 93 L 135 99" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="134" cy="100" r="2.5" fill="#ef4444"/>
            <circle cx="138" cy="98"  r="2.5" fill="#ef4444"/>
          </>}

          {/* Lose: tears */}
          {c.tears && <>
            <ellipse cx="131" cy="84" rx="2" ry="3.5" fill="#60a5fa" opacity="0.85"/>
            <ellipse cx="131" cy="89" rx="1.5" ry="2"  fill="#93c5fd" opacity="0.7"/>
          </>}

          {/* Spikes */}
          <path d="M 106 74 L 110 65 L 114 73" fill="#15803d"/>
          <path d="M 114 70 L 118 60 L 122 69" fill="#15803d"/>
          <path d="M 122 70 L 125 62 L 128 70" fill="#15803d"/>

          {/* Wave arm — rendered LAST so it's on top of body/head */}
          {c.wave && (
            <g style={{
              transformOrigin: '95px 115px',
              animation: 'waveArm 0.35s ease-in-out infinite',
            }}>
              <path d="M 95 115 Q 112 88 120 58" stroke="#15803d" strokeWidth="9"  fill="none" strokeLinecap="round"/>
              <path d="M 95 115 Q 112 88 120 58" stroke="#22c55e" strokeWidth="5"  fill="none" strokeLinecap="round"/>
              {/* paw at tip */}
              <circle cx="120" cy="57" r="6" fill="#16a34a"/>
              <circle cx="115" cy="52" r="3.5" fill="#15803d"/>
              <circle cx="121" cy="50" r="3.5" fill="#15803d"/>
              <circle cx="127" cy="53" r="3.5" fill="#15803d"/>
            </g>
          )}

          <defs>
            <radialGradient id="bodyGrad" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#15803d" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

const sparklePositions = [
  { top: '8%',  left: '5%',  delay: '0s',    size: 14, duration: '3s' },
  { top: '15%', left: '90%', delay: '0.5s',  size: 10, duration: '2.5s' },
  { top: '30%', left: '3%',  delay: '1s',    size: 8,  duration: '4s' },
  { top: '50%', left: '95%', delay: '1.5s',  size: 12, duration: '3.5s' },
  { top: '70%', left: '8%',  delay: '0.8s',  size: 9,  duration: '2.8s' },
  { top: '85%', left: '88%', delay: '2s',    size: 11, duration: '3.2s' },
  { top: '20%', left: '50%', delay: '0.3s',  size: 7,  duration: '2.2s' },
  { top: '60%', left: '45%', delay: '1.8s',  size: 13, duration: '4s' },
  { top: '40%', left: '75%', delay: '0.6s',  size: 8,  duration: '3s' },
  { top: '75%', left: '55%', delay: '1.2s',  size: 10, duration: '2.6s' },
  { top: '5%',  left: '65%', delay: '2.5s',  size: 6,  duration: '3.8s' },
  { top: '90%', left: '30%', delay: '0.4s',  size: 9,  duration: '2.9s' },
]

function Sparkle({ top, left, delay, size, duration }) {
  return (
    <div style={{
      position: 'absolute',
      top,
      left,
      width: size,
      height: size,
      pointerEvents: 'none',
      animation: `sparkleAnim ${duration} ${delay} infinite ease-in-out`,
    }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
  )
}

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
  const [lizardMood, setLizardMood] = useState('idle')

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
      setLizardMood('win')
    } else if (gameResult === 'Lose') {
      setLose(lose + 1)
      setStreak(0)
      setLizardMood('lose')
    } else {
      setDraw(draw + 1)
      setLizardMood('draw')
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
    setLizardMood('reset')
    setTimeout(() => setLizardMood('idle'), 2000)
  }

  function getChoiceIcon(choice, size = 20) {
    if (choice === 'Rock') return <Gem size={size} />
    if (choice === 'Paper') return <FileText size={size} />
    if (choice === 'Scissor') return <Scissors size={size} />
    return null
  }

  function getResultColor() {
    if (result === 'Win') return '#22c55e'
    if (result === 'Lose') return '#ef4444'
    if (result === 'Draw') return '#f59e0b'
    return 'transparent'
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* CSS Keyframes injected inline */}
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #000000; }
        @keyframes lizardBob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes lizardJump {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          40%       { transform: translateY(-22px) scale(1.08) rotate(-4deg); }
        }
        @keyframes lizardSad {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50%       { transform: translateY(4px) rotate(-5deg); }
        }
        @keyframes lizardShrug {
          0%, 100% { transform: rotate(-4deg) translateY(0px); }
          50%       { transform: rotate(4deg) translateY(-4px); }
        }
        @keyframes lizardWave {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-6px) rotate(3deg); }
        }
        @keyframes waveArm {
          0%, 100% { transform: rotate(0deg); }
          50%       { transform: rotate(-28deg); }
        }
        @keyframes sparkleAnim {
          0%   { opacity: 0;   transform: scale(0.3) rotate(0deg); }
          25%  { opacity: 1;   transform: scale(1.1) rotate(45deg); }
          50%  { opacity: 0.6; transform: scale(0.8) rotate(90deg); }
          75%  { opacity: 1;   transform: scale(1.2) rotate(135deg); }
          100% { opacity: 0;   transform: scale(0.3) rotate(180deg); }
        }
        @keyframes floatUp {
          0%   { opacity: 0; transform: translateY(0px) scale(0.5); }
          20%  { opacity: 1; transform: translateY(-15px) scale(1); }
          80%  { opacity: 1; transform: translateY(-40px) scale(1); }
          100% { opacity: 0; transform: translateY(-60px) scale(0.5); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3); }
          50%       { box-shadow: 0 0 40px rgba(168,85,247,0.6); }
        }
        @keyframes resultPop {
          0%   { transform: scale(0.7); opacity: 0; }
          60%  { transform: scale(1.1); }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .btn-choice:hover {
          transform: translateY(-4px) scale(1.05) !important;
          box-shadow: 0 8px 30px rgba(99,102,241,0.4) !important;
        }
        .btn-reset:hover {
          transform: translateY(-4px) scale(1.05) !important;
          box-shadow: 0 8px 30px rgba(239,68,68,0.4) !important;
        }
      `}</style>

      {/* Floating Sparkles */}
      {sparklePositions.map((s, i) => (
        <Sparkle key={i} {...s} />
      ))}

      {/* Ambient glow orbs — corners only, no center bleed */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-80px',
        width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 65%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: 48, position: 'relative' }}>
        <h1 style={{
          fontSize: 38,
          fontWeight: 900,
          letterSpacing: 5,
          margin: 0,
          background: 'linear-gradient(90deg, #818cf8 0%, #c084fc 40%, #f472b6 70%, #818cf8 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'shimmer 4s linear infinite',
        }}>
          ROCK PAPER SCISSORS
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', marginTop: 10, fontSize: 13, letterSpacing: 2 }}>
          ROUND {round} — CHALLENGE THE COMPUTER
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 36, flexWrap: 'wrap' }}>
        {[
          { label: 'Rock',    icon: <Gem size={34} />,      color: '#818cf8' },
          { label: 'Paper',   icon: <FileText size={34} />, color: '#c084fc' },
          { label: 'Scissor', icon: <Scissors size={34} />, color: '#f472b6' },
        ].map(({ label, icon, color }) => {
          const isSelected = myChoice === label
          return (
            <button
              key={label}
              className="btn-choice"
              onClick={() => play(label)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                width: 120,
                padding: '24px 16px',
                background: isSelected
                  ? `linear-gradient(145deg, ${color}33, ${color}22)`
                  : 'rgba(255,255,255,0.04)',
                border: isSelected
                  ? `1.5px solid ${color}`
                  : '1.5px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                color: isSelected ? color : 'rgba(255,255,255,0.8)',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.5,
                backdropFilter: 'blur(16px)',
                transition: 'all 0.2s ease',
                animation: isSelected ? 'pulseGlow 2s ease-in-out infinite' : 'none',
                position: 'relative',
              }}
            >
              {/* Selected sparkle badge */}
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  top: -8, right: -8,
                  width: 18, height: 18,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill={color}/>
                  </svg>
                </div>
              )}
              {icon}
              {label.toUpperCase()}
            </button>
          )
        })}

        <button
          className="btn-reset"
          onClick={reset}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            width: 120,
            padding: '24px 16px',
            background: 'rgba(239,68,68,0.06)',
            border: '1.5px solid rgba(239,68,68,0.25)',
            borderRadius: 20,
            color: '#f87171',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1.5,
            backdropFilter: 'blur(16px)',
            transition: 'all 0.2s ease',
          }}
        >
          <RotateCcw size={34} />
          RESET
        </button>
      </div>

      {/* Result Banner */}
      <div style={{
        textAlign: 'center',
        minHeight: 100,
        marginBottom: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: '16px 0',
      }}>
        {result && (
          <>
            <div style={{
              fontSize: 36,
              fontWeight: 900,
              color: getResultColor(),
              letterSpacing: 4,
              animation: 'resultPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              textShadow: `0 0 30px ${getResultColor()}88`,
            }}>
              {result === 'Win'  && '✦ YOU WIN ✦'}
              {result === 'Lose' && 'YOU LOSE'}
              {result === 'Draw' && '— DRAW —'}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'white' }}>
                {getChoiceIcon(myChoice)} You
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 20 }}>|</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.7)' }}>
                CPU {getChoiceIcon(computerChoice)}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 44 }}>
        {[
          { label: 'Rounds', value: round,  color: '#818cf8' },
          { label: 'Wins',   value: win,    color: '#22c55e' },
          { label: 'Losses', value: lose,   color: '#ef4444' },
          { label: 'Draws',  value: draw,   color: '#f59e0b' },
          { label: 'Streak', value: streak, color: '#c084fc' },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${color}33`,
              borderRadius: 14,
              padding: '16px 24px',
              textAlign: 'center',
              backdropFilter: 'blur(12px)',
              minWidth: 82,
              boxShadow: value > 0 ? `0 0 20px ${color}18` : 'none',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 800, color }}>{value}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 3, letterSpacing: 1.5 }}>
              {label.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      {/* Move History */}
      {history.length > 0 && (
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'center',
            marginBottom: 14,
          }}>
            <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ fontSize: 11, letterSpacing: 2.5, color: 'rgba(255,255,255,0.3)' }}>
              MOVE HISTORY
            </span>
            <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.08)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {history.map((h, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: i === 0 ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
                  border: i === 0 ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  padding: '10px 16px',
                  backdropFilter: 'blur(8px)',
                  animation: i === 0 ? 'resultPop 0.35s ease' : 'none',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, minWidth: 30, fontWeight: 600 }}>
                  #{history.length - i}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                  {getChoiceIcon(h.player, 14)} {h.player}
                </span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>vs</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                  {h.computer} {getChoiceIcon(h.computer, 14)}
                </span>
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  minWidth: 40,
                  textAlign: 'right',
                  color: h.result === 'Win' ? '#22c55e' : h.result === 'Lose' ? '#ef4444' : '#f59e0b',
                }}>
                  {h.result.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      <LizardMascot mood={lizardMood} />
    </div>
  )
}

export default App
