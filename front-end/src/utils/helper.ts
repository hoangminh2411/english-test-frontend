export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`; // Example: "2h 30m"
  } else if (minutes > 0) {
    return `${minutes}m ${remainingSeconds}s`; // Example: "30m 15s"
  } else {
    return `${remainingSeconds}s`; // Example: "45s"
  }
};