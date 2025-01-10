export const saveToLocalStorage = <T>(key: string, value: T[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};
