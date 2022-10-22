import React from 'react'
import { ToDo } from '../model'
import SingleToDo from './SingleToDo'
import './Styles.css'

interface Props {
    list: ToDo[],
    setList: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoList: React.FC<Props> = ({ list, setList }) => {
    return (
        <div className='ToDoList'>
            {list.map(toDo => {
                return (
                    <SingleToDo
                        toDo={toDo}
                        key={toDo.id}
                        list={list}
                        setList={setList} />
                )
            })}
        </div>
    )
}

export default ToDoList