import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
function createData(id, date, proofofdelivery, revenue, net, paymentStatus, remit, invoicing, brokerage, rateConfirmation, weight, agent, email, phoneNumber, miles, perMileRate, shipper, pickUpDateShipperDate, receiver, deliveryDateReceiverDate, secondConsignee, secondDeliveryDateSecondReceiverDate, thirdConsignee, commodity) {
  return { id, date, proofofdelivery, revenue, net, paymentStatus, remit, invoicing, brokerage, rateConfirmation, weight, agent, email, phoneNumber, miles, perMileRate, shipper, pickUpDateShipperDate, receiver, deliveryDateReceiverDate, secondConsignee, secondDeliveryDateSecondReceiverDate, thirdConsignee, commodity };
}

const rows = [
  createData(1, '2024-07-01', 'Invoice123', 1100.00, 1083.50, 'Paid', 'Bank Transfer', 'Invoice 8093770', 'Trinity Logistics, Inc', '8093770', 40000, 'David Newberry', 'david.newberry@trinitylogistics.com', '(817) 789-4168', 318, 3.46, '1301 Forum Way S, Fort Worth, TX 76140', '2024-07-02', '11717 West, CR 125, Odessa, TX 79765', '2024-07-05', 'None', '2024-07-07', 'None', 'Machine Parts'),
  createData(2, '2024-07-02', 'Invoice124', 1200.00, 1180.00, 'Paid', 'Credit Card', 'Invoice 8093771', 'Logistics Co', '8093771', 35000, 'Jane Doe', 'jane.doe@logisticsco.com', '(123) 456-7890', 280, 4.29, '1502 Market St, Austin, TX 73301', '2024-07-03', '4501 Industrial Blvd, Houston, TX 77002', '2024-07-06', 'None', '2024-07-08', 'None', 'Electronics'),
  createData(3, '2024-07-03', 'Invoice125', 1300.00, 1280.00, 'Pending', 'Bank Transfer', 'Invoice 8093772', 'Freight Movers', '8093772', 38000, 'Alice Smith', 'alice.smith@freightmovers.com', '(234) 567-8901', 290, 4.48, '2901 Commerce Rd, Dallas, TX 75201', '2024-07-04', '5002 Distribution Ave, San Antonio, TX 78201', '2024-07-07', 'None', '2024-07-09', 'None', 'Automotive Parts'),
  // Add more data as needed
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'date', numeric: false, disablePadding: true, label: 'Date' },
  { id: 'revenue', numeric: true, disablePadding: false, label: 'Revenue' },
  { id: 'shipper', numeric: false, disablePadding: false, label: 'Shipper Address' },
  { id: 'delivery', numeric: false, disablePadding: false, label: 'Delivery Address' },
  { id: 'miles', numeric: true, disablePadding: false, label: 'Miles' },
  { id: 'perMileRate', numeric: true, disablePadding: false, label: 'Per Mile Rate' },
  { id: 'brokerage', numeric: false, disablePadding: false, label: 'Brokerage' },
  { id: 'rateConfirmation', numeric: false, disablePadding: false, label: 'Rate Confirmation' },
  { id: 'weight', numeric: true, disablePadding: false, label: 'Weight' },
  { id: 'agent', numeric: false, disablePadding: false, label: 'Agent' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'phoneNumber', numeric: false, disablePadding: false, label: 'Phone Number' },
  { id: 'proofofdelivery', numeric: false, disablePadding: false, label: 'Proof of Delivery' },
  { id: 'paymentStatus', numeric: false, disablePadding: false, label: 'Payment Status' },
  { id: 'remit', numeric: false, disablePadding: false, label: 'Remit' },
  { id: 'invoicing', numeric: false, disablePadding: false, label: 'Invoicing' },
  { id: 'pickUpDateShipperDate', numeric: false, disablePadding: false, label: 'Pick Up Date' },
  { id: 'receiver', numeric: false, disablePadding: false, label: 'Receiver' },
  { id: 'deliveryDateReceiverDate', numeric: false, disablePadding: false, label: 'Delivery Date' },
  { id: 'secondConsignee', numeric: false, disablePadding: false, label: 'Second Consignee' },
  { id: 'secondDeliveryDateSecondReceiverDate', numeric: false, disablePadding: false, label: 'Second Delivery Date' },
  { id: 'thirdConsignee', numeric: false, disablePadding: false, label: 'Third Consignee' },
  { id: 'commodity', numeric: false, disablePadding: false, label: 'Commodity' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all items' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          2024 Freight Book Life on the Road
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            {/* <DeleteIcon /> */}
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            {/* <FilterListIcon /> */}
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.date}
                    </TableCell>
                    <TableCell align="right">{row.revenue}</TableCell>
                    <TableCell>{row.shipper}</TableCell>
                    <TableCell>{row.delivery}</TableCell>
                    <TableCell align="right">{row.miles}</TableCell>
                    <TableCell align="right">{row.perMileRate}</TableCell>
                    <TableCell>{row.brokerage}</TableCell>
                    <TableCell>{row.rateConfirmation}</TableCell>
                    <TableCell align="right">{row.weight}</TableCell>
                    <TableCell>{row.agent}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.proofofdelivery}</TableCell>
                    <TableCell>{row.paymentStatus}</TableCell>
                    <TableCell>{row.remit}</TableCell>
                    <TableCell>{row.invoicing}</TableCell>
                    <TableCell>{row.pickUpDateShipperDate}</TableCell>
                    <TableCell>{row.receiver}</TableCell>
                    <TableCell>{row.deliveryDateReceiverDate}</TableCell>
                    <TableCell>{row.secondConsignee}</TableCell>
                    <TableCell>{row.secondDeliveryDateSecondReceiverDate}</TableCell>
                    <TableCell>{row.thirdConsignee}</TableCell>
                    <TableCell>{row.commodity}</TableCell>

                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={headCells.length} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
