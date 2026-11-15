import { useActionState, useOptimistic } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
function App() {
  const [messages, action, pending] = useActionState(async (previous, data) => {
    const text = String(data.get('message') || '').trim()
    if (!text) return previous
    addOptimistic(text)
    await new Promise(resolve => setTimeout(resolve, 1000))
    return [...previous, text]
  }, ['Prueba las Actions de React 19'])
  const [optimistic, addOptimistic] = useOptimistic(messages, (current, text) => [...current, text])
  return <main><span>React 19 · Actions + useOptimistic</span><h1>Una interfaz que responde al instante.</h1><p>Escribe un mensaje. Aparece antes de terminar la operación simulada de un segundo.</p><ul aria-live="polite">{optimistic.map((message,i) => <li key={i}>{message}{i >= messages.length && <small>Guardando…</small>}</li>)}</ul><form action={action}><label htmlFor="message">Tu mensaje</label><div><input id="message" name="message" required placeholder="Hola, React 19"/><button disabled={pending}>{pending ? 'Guardando…' : 'Enviar'}</button></div></form><p>Los mensajes viven en esta sesión. No se envían a un servidor.</p></main>
}
createRoot(document.getElementById('root')).render(<App />)
