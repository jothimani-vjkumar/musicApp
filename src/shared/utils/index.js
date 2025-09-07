// Shared utilities will be exported here
export function secondsToMinutes(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function getYear(date) {
  return new Date(date).getFullYear();
}

export function removeSpaceFromName(name) {
  return name.replace(/\s+/g, '_');
}
