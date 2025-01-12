export function capitalizeName(name: string): string {
  return name
    .trim()
    .split(' ')
    .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
    .join(' ');
}
