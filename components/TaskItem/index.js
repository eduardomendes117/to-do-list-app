import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function TaskItem({ todo, toggleComplete, deleteItem, startEdit }) {
  return (
    <li className="flex items-center gap-3 p-3 rounded-xl bg-[#EEEEEE] text-black/90 max-w-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="w-5 h-5"
      />
      <span className={`break-words max-w-xs ${todo.completed ? 'line-through' : ''}`}>
        {todo.text}
      </span>
      <div className="flex gap-1 text-2xl text-[#31363F] mb-auto ml-auto">
        <MdDeleteForever
          onClick={() => deleteItem(todo.id)}
          className="hover:bg-[#ccc] p-1 rounded-full cursor-pointer"
        />
        <MdEdit
          onClick={() => startEdit(todo.id)}
          className="hover:bg-[#ccc] p-1 rounded-full cursor-pointer"
        />
      </div>
    </li>
  );
}
