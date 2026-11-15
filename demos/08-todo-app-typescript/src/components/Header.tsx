import { CreateTodo } from './CreateTodo'
import reactLogo from '../assets/react.svg'

interface Props {
  saveTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
  return (
    <header className='header'>
      <h1>todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src={reactLogo}
          alt="React"
        />
      </h1>

      <CreateTodo saveTodo={saveTodo} />
    </header>
  )
}
