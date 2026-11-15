import { type FromLanguage, type Language } from '../types'
// Public translation service for the hosted demo. No private API key is shipped.
export async function translate ({ fromLanguage, toLanguage, text }: { fromLanguage: FromLanguage; toLanguage: Language; text: string }) {
  if (fromLanguage === 'auto') throw new Error('Selecciona el idioma de origen')
  if (fromLanguage === toLanguage) return text
  if (new TextEncoder().encode(text).length > 500) throw new Error('Máximo 500 bytes por traducción')
  const params = new URLSearchParams({ q: text, langpair: `${fromLanguage}|${toLanguage}` })
  const response = await fetch(`https://api.mymemory.translated.net/get?${params}`)
  const result = await response.json()
  if (!response.ok || Number(result.responseStatus) !== 200) throw new Error(result.responseDetails || 'No se pudo traducir')
  const decoded = document.createElement('textarea')
  decoded.innerHTML = result.responseData.translatedText
  return decoded.value
}
