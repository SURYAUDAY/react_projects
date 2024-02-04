import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch(); // dispatch uses reducers to make changes in store
    const addTodoHandler = (e) => {
        console.log(e)
        e.preventDefault()
        dispatch(addTodo(input));
        setInput('')
    }
  return (
    <form className="w-full max-w-sm mt-10" onSubmit={addTodoHandler}>
  <div className="md:flex md:items-center mb-6">
    <div>
      <input className="bg-gray-800 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a Todo...."/>
    </div>
  
  <div className="md:flex md:items-center ml-2">
    <div>
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Add todo
      </button>
    </div>
  </div>
  </div>
</form>
  )
}

export default AddTodo