import { useAppSelector } from '../store'

export function TodoList() {

  // search information  of state
  const todos = useAppSelector( store => {
    return store.todo
  })
  return (
    <ul>
    {todos.map(todo => <li key={todo}>{todo}</li>)}
    </ul>
  )
}