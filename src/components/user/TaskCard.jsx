import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { formatDate } from '../../utils/helpers';

export const TaskCard = ({ task, onToggleStatus }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800 flex-1">{task.title}</h4>
        <button
          onClick={() => onToggleStatus(task.id)}
          className="ml-4"
        >
          {task.status === 'Completed' ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <Circle className="w-6 h-6 text-gray-400 hover:text-green-500 transition-colors" />
          )}
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-2">{task.description}</p>
      <div className="flex justify-between items-center">
        <span className={`text-xs px-2 py-1 rounded ${
          task.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {task.status}
        </span>
        <span className="text-xs text-gray-500">
          {formatDate(task.createdAt)}
        </span>
      </div>
    </div>
  );
};