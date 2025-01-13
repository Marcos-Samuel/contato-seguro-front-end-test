import React from 'react';
import { TableHead, TableRow, THeader } from '../styles';
import AlphabeticIcon from '../../../assets/alphabetic.Icon';

type SortableKeys = 'name' | 'pages' | 'email' | 'id' | 'author_id';
interface TableHeadersProps {
  headers: { key: string; label: string }[];
  onSort: (key: SortableKeys) => void;
}

const TableHeaders: React.FC<TableHeadersProps> = ({ headers, onSort }) => {
  return (
    <THeader>
      <TableRow>
        {headers.map((header, index) => (
          <TableHead
            key={header.key}
            onClick={() => header.key && onSort(header.key as SortableKeys)}
            style={{
              cursor: index === 0 ? 'pointer' : 'default',
            }}
          >
            {index === 0 && <AlphabeticIcon width="16" height="16" />}
            {header.label}
          </TableHead>
        ))}
      </TableRow>
    </THeader>
  );
};

export default TableHeaders;
