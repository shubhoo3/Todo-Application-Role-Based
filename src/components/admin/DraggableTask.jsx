import React from 'react';

export const DraggableTask = ({ task, onDragStart, userName }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      className="bg-white rounded-lg shadow-md p-4 mb-3 cursor-move hover:shadow-lg transition-shadow border-l-4 border-indigo-500"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">{task.title}</h4>
        <span className={`text-xs px-2 py-1 rounded ${
          task.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {task.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{task.description}</p>
      <div className="text-xs text-gray-500">
        Assigned to: <span className="font-medium">{userName}</span>
      </div>
    </div>
  );
};