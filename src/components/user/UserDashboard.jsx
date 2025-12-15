import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useTasks } from '../../hooks/useTasks';
import { TaskCard } from './TaskCard';

export const UserDashboard = () => {
  const { currentUser } = useAuth();
  const { tasks, toggleTaskStatus } = useTasks(currentUser.id);

  const pendingTasks = tasks.filter(t => t.status === 'Pending');
  const completedTasks = tasks.filter(t => t.status === 'Completed');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Pending Tasks</h3>
          <p className="text-4xl font-bold">{pendingTasks.length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Completed Tasks</h3>
          <p className="text-4xl font-bold">{completedTasks.length}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">My Tasks</h3>
        {tasks.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
            No tasks assigned to you yet.
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onToggleStatus={toggleTaskStatus}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};