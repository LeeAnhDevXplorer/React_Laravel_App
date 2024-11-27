import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import TaskCard from '../TaskCard/TaskCard';

const ColumnsItem = ({
  id,
  title,
  deleteColumn,
  editColumn,
  createTask,
  tasks = [],
  deleteTask,
  editTask,
}) => {
  const [editMode, setEditMode] = useState(false);
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id,
      data: {
        type: 'column',
        column: { id, title },
      },
    });

  const styles = {
    transition,
    transform: transform ? CSS.Transform.toString(transform) : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={styles}
      className="bg-gray-200 w-[450px] min-h-[300px] max-h-[66vh] rounded-lg shadow-lg flex flex-col"
    >
      <div className="bg-black/80 p-4 rounded-t-lg border-b-2 border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-gray-700 px-3 py-1 rounded-full text-white text-sm">
              {tasks.length}
            </span>
            {!editMode ? (
              <h2 className="text-white font-semibold text-lg">{title}</h2>
            ) : (
              <input
                value={title}
                onChange={(e) => editColumn(id, e.target.value)}
                className="bg-white text-black px-2 py-1 rounded w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
                onBlur={() => setEditMode(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setEditMode(false);
                }}
              />
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setEditMode(!editMode)}
              className="text-white hover:bg-gray-700 rounded p-1 transition-colors"
            >
              <MdEdit className="text-xl" />
            </button>
            <button
              onClick={() => deleteColumn(id)}
              className="text-white hover:bg-red-600 rounded p-1 transition-colors"
            >
              <MdDeleteForever className="text-xl" />
            </button>
          </div>
        </div>
        <button
          onClick={() => createTask(id)}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
        >
          <FaPlusCircle />
          <span>Add Task</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              id={task.id}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="p-4 rounded-lg border-2 border-dashed border-gray-400 w-full h-[100px] flex items-center justify-center text-gray-500">
              Drop tasks here
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColumnsItem;
