import React, { useState } from 'react'
import { ToDo } from '../model'
import './Styles.css'
import { AiFillEdit, AiFillDelete, AiOutlineCheckSquare } from 'react-icons/ai'
import ToDoList from './ToDoList'

type Props = {
    toDo: ToDo,
    list: ToDo[],
    setList: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleToDo: React.FC<Props> = ({ toDo, list, setList }) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editText, setEditText] = useState<string>(toDo.toDo)

    const handleDone = (id: number) => {
        setList(list.map((toDo) =>
            toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
        ))
    }

    const handleDelete = (id: number) => {
        setList(list.filter(toDo => toDo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        // e.preventDefault()
        // setList(list.map(toDo => (
        //     toDo.id === id ? { ...list, toDo: editText } : toDo
        // ))
        // setEdit(false)
        console.log('Hello')
    }

    return (
        <form className='ToDo'
            onSubmit={(e) => handleEdit(e, toDo.id)}>
            {edit ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className='toDo'
                />
            ) : toDo.isDone ? (
                <s className='SingleToDo'>{toDo.toDo}</s>
            ) : (
                <span className="SingleToDo">
                    {toDo.toDo}
                </span>
            )}

            <div className="Icons">
                <span className="Icon">
                    <AiFillEdit className='ActualIcon'
                        onClick={() => {
                            if (!edit && !toDo.isDone) {
                                setEdit(!edit)
                            }
                        }}
                    />
                </span>
                <span className="Icon" onClick={() => handleDelete(toDo.id)}>
                    <AiFillDelete className='ActualIcon' />
                </span>
                <span className="Icon" onClick={() => handleDone(toDo.id)} >
                    <AiOutlineCheckSquare className='ActualIcon' />
                </span>
            </div>
        </form >
    )
}

export default SingleToDo