export const saveGameToStorage = ({ board, turn }) => {
  // guardar aqui partida
  window.localStorage.setItem('curso-react-board', JSON.stringify(board))
  window.localStorage.setItem('curso-react-turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('curso-react-board')
  window.localStorage.removeItem('curso-react-turn')
}
