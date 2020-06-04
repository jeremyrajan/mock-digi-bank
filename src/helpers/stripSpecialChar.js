export default (string, char = '_') => {
  if (!string) {
    return '';
  }
  return string.split(char).join(' ');
}