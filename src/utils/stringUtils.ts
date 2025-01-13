export function capitalizeName(name: string): string {
  return name
    .trim()
    .split(' ')
    .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
    .join(' ');
}

export const limitText = (text: string) => {
  return text.length > 30 ? `${text.slice(0, 30)}...` : text;
};
