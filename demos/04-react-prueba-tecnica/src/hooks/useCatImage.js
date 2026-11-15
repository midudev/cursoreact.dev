export function useCatImage ({ fact }) {
  if (!fact) return { imageUrl: null }
  const words = fact.split(' ').slice(0, 3).join(' ')
  return { imageUrl: `https://cataas.com/cat/says/${encodeURIComponent(words)}?fontSize=40&fontColor=white` }
}
