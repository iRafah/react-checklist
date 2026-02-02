import { TextInput } from '../TextInput'
import { ActionButton } from '../ActionButton'
import './todo-form.style.css'

export function ToDoForm(onSubmit) {
    return (
        <form action={onSubmit} className='todo-form'>
            <TextInput
                placeholder="Inform the item you want to add"
                required />
            <ActionButton>
                Save item
            </ActionButton>
        </form>
    )
}