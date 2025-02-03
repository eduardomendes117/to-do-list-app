"use client";
import { useState, useEffect } from "react";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";

export default function Home() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("todos");
      return saved
        ? JSON.parse(saved)
        : [
            {
              id: 1,
              text: "Bem-vindo! Esta é uma tarefa exemplo. Marque como concluída ou delete-a.",
              completed: false,
            },
          ];
    }
    return [];
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!item.trim()) return;

    if (editId !== null) {
      setItems(
        items.map((todo) =>
          todo.id === editId ? { ...todo, text: item } : todo
        )
      );
      setEditId(null);
    } else {
      setItems([
        ...items,
        {
          id: Date.now(),
          text: item,
          completed: false,
        },
      ]);
    }
    setItem("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const startEdit = (id) => {
    const todoToEdit = items.find((item) => item.id === id);
    setItem(todoToEdit.text);
    setEditId(id);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-5 bg-[#76ABAE] rounded-xl shadow-xl">
        <h1 className="font-medium text-4xl">Lista de Tarefas</h1>
        <TaskInput item={item} setItem={setItem} addItem={addItem} />
        <TaskList items={items} toggleComplete={toggleComplete} deleteItem={deleteItem} startEdit={startEdit} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
