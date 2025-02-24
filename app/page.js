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
    <main className="flex flex-col gap-8 justify-center items-center p-5 h-svh">
      <section>
        <h1 className="font-medium text-4xl text-center p-5">Lista de Tarefas</h1>
        <TaskInput item={item} setItem={setItem} addItem={addItem} />
        <TaskList
          items={items}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          startEdit={startEdit}
        />
      </section>
    </main>
  );
}
