export const formatter = name => {
  name = name.toLowerCase();
  const parts = name.split(' ');

  for (let i = 0; i < parts.length; i++) {
    parts[i] = parts[i][0].toUpperCase() + parts[i].substr(1);
  }

  return parts.join(' ');
};
