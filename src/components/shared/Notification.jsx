import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export const Notification = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  if (!message) return null;

  return (
    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
      <CheckCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
};