import { Box, CircularProgress } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridCellParams,
  gridClasses,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import { IATableProps } from "./index.type";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .no-rows-message": {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <CircularProgress />
      <Box className="no-rows-message">No rows</Box>
    </StyledGridOverlay>
  );
}

const IATable = ({
  rows,
  headers,
  loading = false,
  isAggregationAllowed = false,
  disableColumnFilter = true,
  onSelect,
  onUpdate,
  onDelete,
  ...props
}: IATableProps) => {
  const columns: GridColDef[] = [
    ...headers.map(({ field, headerName, sortable = true, valueGetter }) => ({
      field,
      headerName: headerName ?? field.charAt(0).toUpperCase() + field.slice(1),
      sortable,
      width: 150,
      valueGetter: (value: any, row: any) => {
        if (
          isAggregationAllowed &&
          row.id === rows[rows.length - 1]?.id &&
          value !== "" &&
          value !== undefined
        ) {
          return `Toplam: ${valueGetter ? valueGetter(value, row) : value}`;
        }
        return valueGetter ? valueGetter(value, row) : value;
      },
    })),
    ...(onSelect || onUpdate || onDelete
      ? [
          {
            field: "actions",
            headerName: "Actions",
            type: "actions" as const,
            width: 150,
            renderCell: (params: GridCellParams) => (
              <Box sx={{ display: "flex", gap: 1 }}>
                {onSelect && (
                  <GridActionsCellItem
                    icon={<Visibility />}
                    label="Select"
                    onClick={() => onSelect(params.row.id)}
                    color="success"
                  />
                )}
                {onUpdate && (
                  <GridActionsCellItem
                    icon={<Edit />}
                    label="Update"
                    onClick={() => onUpdate(params.row)}
                    color="primary"
                  />
                )}
                {onDelete && (
                  <GridActionsCellItem
                    icon={<Delete />}
                    label="Delete"
                    onClick={() => onDelete(params.row.id)}
                    color="error"
                  />
                )}
              </Box>
            ),
          },
        ]
      : []),
  ];

  const getRowClassName = (params: GridCellParams<any, any, number>) => {
    if (!isAggregationAllowed) return "";

    const lastRowIndex = rows.length - 1;
    return params.row.id === rows[lastRowIndex].id ? "last-row" : "";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        [`.${gridClasses.cell}.last-row`]: {
          backgroundColor: "#e0f7fa",
          color: "#0277bd",
          border: 1,
          borderColor: "#b3e5fc",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ noRowsOverlay: loading ? CustomNoRowsOverlay : undefined }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15, 50, 100]}
        disableRowSelectionOnClick
        loading={loading}
        disableColumnFilter={disableColumnFilter}
        getCellClassName={getRowClassName}
        {...props}
      />
    </Box>
  );
};

export default IATable;
export type { IATableProps };
