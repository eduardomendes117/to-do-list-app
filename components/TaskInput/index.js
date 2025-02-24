"use client";
import { IoIosAdd } from "react-icons/io";

export default function TaskInput({ item, setItem, addItem }) {
  return (
    <div className="flex gap-4 items-center justify-between w-full bg-white hover:bg-[#f2f2f2] rounded-lg">
      <input
        type="text"
        placeholder="Digite os itens que deseja adicionar"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="bg-transparent rounded-lg text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-72 w-full"
      />
      <button
        onClick={addItem}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-500 text-background gap-2 text-3xl p-1 m-1"
      >
        <IoIosAdd />
      </button>
    </div>
  );
}
