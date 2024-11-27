import { DndContext, DragOverlay } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import React, { useState, useMemo } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import ColumnsItem from '../ColumnsItem/ColumnsItem';

const KanbanBoard = () => {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const generateID = () => Math.floor(Math.random() * 10001);

  const createColumn = () => {
    const newColumn = {
      id: generateID(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, newColumn]);
  };

 const createTask = (columnId) => {
   const newTask = {
     id: generateID(),
     title: `Task ${tasks.length + 1}`,
     columnId,
   };
   setTasks([...tasks, newTask]);
 };

  const deleteColumn = (id) => {
    setColumns((prevColumns) =>
      prevColumns.filter((column) => column.id !== id)
    );
    setTasks((prevTasks) => prevTasks.filter((task) => task.columnId !== id));
  };

  const editColumn = (id, newTitle) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === id ? { ...column, title: newTitle } : column
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  const onDragStart = (event) => {
    if (event.active.data.current?.type === 'task') {
      setActiveTask(event.active.id);
    }
  };

  const onDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeTask = tasks.find((task) => task.id === active.id);
    const overTask = tasks.find((task) => task.id === over.id);

    if (!activeTask || !overTask) return;

    if (activeTask.columnId !== overTask.columnId) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeTask.id);
        const overIndex = tasks.findIndex((t) => t.id === overTask.id);

        return arrayMove(tasks, activeIndex, overIndex).map((task) => {
          if (task.id === activeTask.id) {
            return { ...task, columnId: overTask.columnId };
          }
          return task;
        });
      });
    }
  };

  const onDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      setActiveTask(null);
      return;
    }

    if (active.id !== over.id) {
      const activeTask = tasks.find((task) => task.id === active.id);
      const overTask = tasks.find((task) => task.id === over.id);

      if (activeTask && overTask) {
        setTasks((tasks) => {
          const activeIndex = tasks.findIndex((t) => t.id === active.id);
          const overIndex = tasks.findIndex((t) => t.id === over.id);

          if (activeTask.columnId === overTask.columnId) {
            return arrayMove(tasks, activeIndex, overIndex);
          }

          return tasks.map((task) => {
            if (task.id === active.id) {
              return { ...task, columnId: overTask.columnId };
            }
            return task;
          });
        });
      }
    }

    setActiveTask(null);
  };

  return (
    <div className="min-h-screen h-full w-full mt-5">
      <DndContext
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
      >
        <div className="overflow-x-auto overflow-y-hidden px-[40px] !mb-6">
          <button
            onClick={createColumn}
            className="mt-6 mb-4 flex items-center justify-center gap-3 !text-white h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg !bg-black/80 border-2 border-slate-950 p-4 ring-rose-500 hover:ring-2"
          >
            <FaPlusCircle className="text-xl" />
            Add Column
          </button>

          <SortableContext items={columnsId}>
            <div className="flex gap-4 flex-wrap">
              {columns.map((col) => (
                <ColumnsItem
                  key={col.id}
                  id={col.id}
                  title={col.title}
                  deleteColumn={deleteColumn}
                  editColumn={editColumn}
                  createTask={createTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              ))}
            </div>
          </SortableContext>
        </div>

        <DragOverlay>
          {activeTask && (
            <div className="flex items-center justify-center bg-black/80 p-4 rounded-xl text-white">
              Dragging task:{' '}
              {tasks.find((task) => task.id === activeTask)?.title}
            </div>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
