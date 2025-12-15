import { getUsers } from './storage';

export const generateTaskId = () => {
  return `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

export const getUserName = (userId) => {
  const users = getUsers();
  const user = users.find(u => u.id === userId);
  return user ? user.name : 'Unknown User';
};

export const getUsersByRole = (role) => {
  const users = getUsers();
  return users.filter(u => u.role === role);
};