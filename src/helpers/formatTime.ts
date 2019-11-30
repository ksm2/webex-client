const formatTime = (date: string): string =>
  new Date(date).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });

export default formatTime;
