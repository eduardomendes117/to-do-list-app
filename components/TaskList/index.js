import TaskItem from "../TaskItem";

export default function TaskList({ items, toggleComplete, deleteItem, startEdit }) {
  return (
    <ol className="flex flex-col gap-3 mt-5 text-sm text-center sm:text-left min-w-80">
      {items.map((todo) => (
        <TaskItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          startEdit={startEdit}
        />
      ))}
    </ol>
  );
}
