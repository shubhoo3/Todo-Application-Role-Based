import { useState, useEffect, useCallback } from 'react';
import { getTasks, saveTasks } from '../utils/storage';
import { generateTaskId } from '../utils/helpers';

export const useTasks = (userId = null) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = useCallback(() => {
    const allTasks = getTasks();
    if (userId) {
      setTasks(allTasks.filter(t => t.assigneeId === userId));
    } else {
      setTasks(allTasks);
    }
  }, [userId]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const createTask = (taskData) => {
    const newTask = {
      id: generateTaskId(),
      ...taskData,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    const allTasks = getTasks();
    allTasks.push(newTask);
    saveTasks(allTasks);
    loadTasks();
    return newTask;
  };

  const updateTask = (taskId, updates) => {
    const allTasks = getTasks();
    const updatedTasks = allTasks.map(t => 
      t.id === taskId ? { ...t, ...updates } : t
    );
    saveTasks(updatedTasks);
    loadTasks();
  };

  const deleteTask = (taskId) => {
    const allTasks = getTasks();
    const filteredTasks = allTasks.filter(t => t.id !== taskId);
    saveTasks(filteredTasks);
    loadTasks();
  };

  const reassignTask = (taskId, newAssigneeId) => {
    updateTask(taskId, { assigneeId: newAssigneeId });
  };

  const toggleTaskStatus = (taskId) => {
    const allTasks = getTasks();
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
      const newStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
      updateTask(taskId, { status: newStatus });
    }
  };

  return {
    tasks,
    createTask,
    updateTask,
    deleteTask,
    reassignTask,
    toggleTaskStatus,
    loadTasks
  };
};