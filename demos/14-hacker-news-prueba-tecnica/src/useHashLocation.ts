import { useState, useEffect } from 'react'
export const useHashLocation = (): [string, (to: string) => void] => {
  const [path, setPath] = useState(() => location.hash.slice(1) || '/')
  useEffect(() => {
    const update = () => setPath(location.hash.slice(1) || '/')
    addEventListener('hashchange', update)
    return () => removeEventListener('hashchange', update)
  }, [])
  return [path, to => { location.hash = to }]
}
