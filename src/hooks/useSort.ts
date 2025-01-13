import { useState, useMemo } from 'react';

type SortableKeys = 'name' | 'pages' | 'email' | 'id' | 'author_id';

const useSort = <T extends object>(data: T[], initialKey: SortableKeys) => {
  const [sortConfig, setSortConfig] = useState<{
    key: SortableKeys;
    direction: 'asc' | 'desc';
  }>({
    key: initialKey,
    direction: 'asc',
  });

  const sortedData = useMemo(() => {
    const dataCopy = [...data];
    if (sortConfig.key) {
      dataCopy.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof T];
        const bValue = b[sortConfig.key as keyof T];
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return dataCopy;
  }, [data, sortConfig]);

  const handleSort = (key: SortableKeys) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return { sortedData, handleSort };
};

export default useSort;
