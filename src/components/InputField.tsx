import React, { useRef } from 'react'
import './Styles.css'

interface Props {
    toDo: string,
    setToDo: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleSubmit }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className='input' onSubmit={(e) => {
            handleSubmit(e)
            inputRef.current?.blur()
        }} >
            <input
                ref={inputRef}
                type='input'
                placeholder='Add items here...'
                className='InputBox'
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
            />
            <button
                type='submit'
                className='SubmitButton'>
                Go
            </button>
        </form>
    )
}

export default InputField