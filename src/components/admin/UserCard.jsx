import React from 'react';
import { Users } from 'lucide-react';

export const UserCard = ({ user, taskCount, onDrop, onDragOver }) => {
  return (
    <div
      onDrop={(e) => onDrop(e, user.id)}
      onDragOver={onDragOver}
      className="bg-white rounded-lg shadow-md p-4 border-2 border-dashed border-gray-300 hover:border-indigo-500 transition-colors"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
          <Users className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{user.name}</h4>
          <p className="text-xs text-gray-500">@{user.username}</p>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        Tasks: <span className="font-semibold text-indigo-600">{taskCount}</span>
      </div>
    </div>
  );
};