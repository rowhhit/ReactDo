import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const Reminders = () => {
  const { tasks } = useContext(TaskContext);

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    const now = new Date();

    tasks.forEach((task) => {
      if (task.deadline && !task.completed) {
        const deadline = new Date(task.deadline);
        const timeDiff = deadline - now;

        // Notify if deadline is within the next hour and not already notified
        if (timeDiff > 0 && timeDiff < 3600000 && !task.notified) {
          new Notification('Task Reminder', {
            body: `Your task "${task.title}" is due at ${deadline.toLocaleString()}`,
          });
          // Optionally, mark as notified
          // updateTask(task.id, { notified: true });
        }
      }
    });
  }, [tasks]);

  return null;
};

export default Reminders;
