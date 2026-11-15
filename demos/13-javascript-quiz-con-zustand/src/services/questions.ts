export const getAllQuestions = async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}data.json`)
  const json = await res.json()
  return json
}
