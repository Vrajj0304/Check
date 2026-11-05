// Add leading zero for numbers under 10
function addZero(num) {
  if (num < 10) {
    return '0' + num;
  }
  return String(num);
}

// Calculate remaining days, hours, minutes, and seconds
export function calculateTimeLeft(dateString) {
  const targetTime = new Date(dateString).getTime();
  const now = new Date().getTime();
  const difference = targetTime - now;

  // Check if target date has passed
  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isPast: true
    };
  }

  // Calculate time components
  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: addZero(days),
    hours: addZero(hours),
    minutes: addZero(minutes),
    seconds: addZero(seconds),
    isPast: false
  };
}

// Format date string to readable format
export function formatReadableDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return dateString;
  }
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
