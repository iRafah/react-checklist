import './text-input.style.css'

export function TextInput({ children, ...props }) {

    return (
        <input {...props} className='text-input' />
    )
}