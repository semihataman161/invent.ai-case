import { DataGridProps } from "@mui/x-data-grid";

export type IATableProps = {
  headers: {
    field: string;
    headerName?: string;
    sortable?: boolean;
    valueGetter?: (value: any, row: any) => any;
    width: number;
  }[];
  onSelect?: (id: number) => void;
  onUpdate?: (data: any) => void;
  onDelete?: (id: number) => void;
} & Omit<DataGridProps, "columns">;
