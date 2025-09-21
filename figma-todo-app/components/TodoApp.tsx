"use client"
import { useMemo, useState } from 'react'

type Todo = {
  id: string
  text: string
  done: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState("")
  const remaining = useMemo(() => todos.filter(t => !t.done).length, [todos])

  function addTodo(e?: React.FormEvent) {
    e?.preventDefault()
    const value = text.trim()
    if (!value) return
    setTodos(prev => [{ id: crypto.randomUUID(), text: value, done: false }, ...prev])
    setText("")
  }

  function toggle(id: string) {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function remove(id: string) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  function clearCompleted() {
    setTodos(prev => prev.filter(t => !t.done))
  }

  return (
    <section className="todo">
      <form onSubmit={addTodo} className="add">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a task..."
          aria-label="New todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="list" role="list">
        {todos.map(t => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span>{t.text}</span>
            </label>
            <button className="delete" onClick={() => remove(t.id)} aria-label="Delete">
              ×
            </button>
          </li>
        ))}
      </ul>

      <div className="toolbar">
        <span>{remaining} left</span>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </section>
  )
}

