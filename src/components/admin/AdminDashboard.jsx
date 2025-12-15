import React, { useState } from 'react';
import { ClipboardList, Users } from 'lucide-react';
import { useTasks } from '../../hooks/useTasks';
import { getUsersByRole, getUserName } from '../../utils/helpers';
import { TaskForm } from './TaskForm';
import { DraggableTask } from './DraggableTask';
import { UserCard } from './UserCard';
import { Notification } from '../shared/Notification';

export const AdminDashboard = () => {
  const { tasks, createTask, reassignTask } = useTasks();
  const [draggedTask, setDraggedTask] = useState(null);
  const [notification, setNotification] = useState('');

  const users = getUsersByRole('user');

  const handleTaskCreated = (taskData) => {
    createTask(taskData);
    setNotification('Task created successfully!');
  };

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, newAssigneeId) => {
    e.preventDefault();
    
    if (draggedTask && draggedTask.assigneeId !== newAssigneeId) {
      reassignTask(draggedTask.id, newAssigneeId);
      
      const user = users.find(u => u.id === newAssigneeId);
      setNotification(`Task "${draggedTask.title}" reassigned to ${user.name}`);
    }
    
    setDraggedTask(null);
  };

  const getTasksByUser = (userId) => {
    return tasks.filter(t => t.assigneeId === userId);
  };

  return (
    <div className="space-y-6">
      {notification && (
        <Notification 
          message={notification} 
          onClose={() => setNotification('')} 
        />
      )}
      
      <TaskForm onTaskCreated={handleTaskCreated} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <ClipboardList className="w-5 h-5" />
            All Tasks ({tasks.length})
          </h3>
          <div className="space-y-3">
            {tasks.length === 0 ? (
              <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
                No tasks created yet. Create your first task above!
              </div>
            ) : (
              tasks.map(task => (
                <DraggableTask
                  key={task.id}
                  task={task}
                  userName={getUserName(task.assigneeId)}
                  onDragStart={handleDragStart}
                />
              ))
            )}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Users (Drop to Reassign)
          </h3>
          <div className="space-y-3">
            {users.map(user => (
              <UserCard
                key={user.id}
                user={user}
                taskCount={getTasksByUser(user.id).length}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};