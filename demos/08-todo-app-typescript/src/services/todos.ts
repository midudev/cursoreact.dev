import { type TodoList } from '../types'

const STORAGE_KEY = 'curso-react-todos'

export const fetchTodos = async (): Promise<TodoList> => {
  try {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(todos) ? todos : []
  } catch {
    return []
  }
}

export const updateTodos = async ({ todos }: { todos: TodoList }): Promise<boolean> => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  return true
}
