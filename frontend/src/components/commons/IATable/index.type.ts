import { DataGridProps } from "@mui/x-data-grid";

export type IATableProps = {
  headers: {
    field: string;
    headerName?: string;
    sortable?: boolean;
    valueGetter?: (value: any, row: any) => any;
  }[];
  isAggregationAllowed?: boolean;
  onDelete?: (id: number) => void;
  onUpdate?: (data: any) => void;
} & DataGridProps;
