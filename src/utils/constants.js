export const STORAGE_KEYS = {
  USERS: 'task_mgmt_users',
  TASKS: 'task_mgmt_tasks',
  CURRENT_USER: 'task_mgmt_current_user'
};

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user'
};

export const TASK_STATUS = {
  PENDING: 'Pending',
  COMPLETED: 'Completed'
};

export const DEFAULT_USERS = [
  { 
    id: 'admin-1', 
    username: 'admin', 
    password: 'admin123', 
    role: 'admin', 
    name: 'Admin User' 
  },
  { 
    id: 'user-1', 
    username: 'user1', 
    password: 'user123', 
    role: 'user', 
    name: 'John Doe' 
  },
  { 
    id: 'user-2', 
    username: 'user2', 
    password: 'user123', 
    role: 'user', 
    name: 'Jane Smith' 
  },
  { 
    id: 'user-3', 
    username: 'user3', 
    password: 'user123', 
    role: 'user', 
    name: 'Bob Wilson' 
  }
];
