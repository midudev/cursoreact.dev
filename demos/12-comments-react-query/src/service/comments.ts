export interface Comment {
  title: string
  message: string
  preview?: boolean
}

export interface CommentWithId extends Comment {
  id: string
}

// The hosted demo keeps comments in this browser; React Query still manages async state.
const key = 'curso-react-comments-v1'
export const getComments = async (): Promise<CommentWithId[]> => {
  await new Promise(resolve => setTimeout(resolve, 250))
  return JSON.parse(localStorage.getItem(key) || '[]')
}
export const postComment = async (comment: Comment): Promise<CommentWithId> => {
  const comments = await getComments()
  const newComment = { ...comment, id: crypto.randomUUID() }
  localStorage.setItem(key, JSON.stringify([...comments, newComment]))
  return newComment
}
