import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState, useEffect } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const TaskCard = ({ title, id, deleteTask, editTask }) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } =
    useSortable({
      id,
      data: {
        type: 'task',
        task: { id, title },
      },
    });

  const styles = {
    transition,
    transform: transform ? CSS.Transform.toString(transform) : undefined,
  };

  useEffect(() => {
    setNewTitle(title);
  }, [title]);

  const handleEdit = () => {
    if (isEditing && newTitle.trim() !== '') {
      editTask(id, newTitle);
      setIsEditing(false);
    } else if (!isEditing) {
      setIsEditing(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && newTitle.trim() !== '') {
      editTask(id, newTitle);
      setIsEditing(false);
    }
    if (e.key === 'Escape') {
      setNewTitle(title);
      setIsEditing(false);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={styles}
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      className={`
        relative bg-black/80 text-white p-4 
        min-h-[100px] flex items-center 
        rounded-xl transition-all duration-200
        hover:ring-2 hover:ring-rose-500 
        cursor-grab active:cursor-grabbing
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${isEditing ? 'ring-2 ring-blue-500' : ''}
      `}
    >
      <div {...attributes} {...listeners} className="w-full">
        {isEditing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-white border-b border-white/30 
                     outline-none focus:border-white px-1 py-0.5"
            autoFocus
            placeholder="Enter task title..."
          />
        ) : (
          <p className="h-full break-words">{title}</p>
        )}
      </div>

      {mouseIsOver && !isDragging && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEdit();
            }}
            className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 
                     transition-colors duration-200"
          >
            <MdEdit className="text-lg" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(id);
            }}
            className="bg-gray-700 p-2 rounded-lg hover:bg-red-600 
                     transition-colors duration-200"
          >
            <MdDeleteForever className="text-lg" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;