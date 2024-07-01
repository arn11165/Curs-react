import { useEffect, useState } from "react"

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})  
  console.log(enabled)

  useEffect(() => {

    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }
  
    if(enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.style.cursor = enabled ? 'none' : 'default'
    
  })

  return (
    <>
    <div style={{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -20,
      top: -20, 
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px)`,
    }}>

    </div>
    <button onClick={() => setEnabled(!enabled)}>
    {enabled ? 'Desactivar' : 'Activar'} seguir punter
    </button>
    </>
  )
}

function App() {

  const [mounted, setMounted] = useState(true)

  return (
    <>
      <main>
        {mounted && <FollowMouse />}
        
      </main>
      
    </>
     
  )
}

export default App

