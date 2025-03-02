import { Box, CircularProgress } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridCellParams,
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
  onSelect,
  onUpdate,
  onDelete,
  ...props
}: IATableProps) => {
  const columns: GridColDef[] = [
    ...headers.map(
      ({ field, headerName, sortable = true, valueGetter, width }) => ({
        field,
        headerName:
          headerName ?? field.charAt(0).toUpperCase() + field.slice(1),
        sortable,
        width,
        valueGetter: (value: any, row: any) => {
          return valueGetter ? valueGetter(value, row) : value;
        },
        flex: 1,
      })
    ),
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
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
        {...props}
      />
    </Box>
  );
};

export default IATable;
export type { IATableProps };
