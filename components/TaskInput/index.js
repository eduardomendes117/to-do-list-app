"use client";
import { IoIosAdd } from "react-icons/io";

export default function TaskInput({ item, setItem, addItem }) {
  return (
    <div className="flex gap-4 items-center justify-between w-full">
      <input
        type="text"
        placeholder="Digite os itens que deseja adicionar"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] text-black hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-56 w-full"
      />
      <button
        onClick={addItem}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-3xl h-10 sm:h-12 px-2"
      >
        <IoIosAdd />
      </button>
    </div>
  );
}
