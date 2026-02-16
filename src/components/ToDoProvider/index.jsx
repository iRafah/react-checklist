import ToDoContext from "./ToDoContext";
import { useState, useEffect } from "react";

const TODOS_KEY = 'todos'

export function ToDoProvider({ children }) {

    const storedTodos = localStorage.getItem(TODOS_KEY)

    const [todos, setTodos] = useState(storedTodos ? JSON.parse(storedTodos) : [])
    const [showDialog, setShowDialog] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState()

    const openFormTodoDialog = (todo) => {
        if (todo) {
            setSelectedTodo(todo)
        }
        setShowDialog(true)
    }

    const closeFormTodoDialog = () => {
        setShowDialog(false)
        setSelectedTodo(null)
    }

    useEffect(() => {
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    }, [todos])

    const addTodo = (formData) => {
        const description = formData.get('description')

        setTodos(prevState => {
            const todo = {
                id: prevState.length + 1,
                description: description,
                completed: false,
                createdAt: new Date().toISOString()
            }
            return [...prevState, todo]
        })
    }

    const toggleTodoCompleted = (todo) => {
        setTodos(prevState => {
            return prevState.map(t => {
                if (t.id === todo.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                return t
            })
        })
    }

    const deleteTodo = (todo) => {
        setTodos(prevState => {
            return prevState.filter(t => t.id !== todo.id)
        })
    }

    const editTodo = (formData) => {
        setTodos(prevState => {
            return prevState.map(t => {
                if (t.id === selectedTodo.id) {
                    return {
                        ...t,
                        description: formData.get('description')
                    }
                }
                return t
            })
        })
    }

    return (
        <ToDoContext
            value={{
                todos,
                addTodo,
                toggleTodoCompleted,
                deleteTodo,
                showDialog,
                openFormTodoDialog,
                closeFormTodoDialog,
                selectedTodo,
                editTodo
            }}
        >
            {children}
        </ToDoContext>
    )
}