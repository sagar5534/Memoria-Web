import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import helper from "./helper";

function createData(id: number, name: string, status: boolean) {
  return { id, name, status };
}

const rows = [
  createData(1, "Sagar Patel", true),
  createData(2, "Om Patel", false),
];

const UsersDash = () => {
  return (
    <Box>
      <Box p={2}>
        <Typography variant="h4" component="div">
          Users Management
        </Typography>
        <Typography variant="body1" gutterBottom>
          All users that have access to store media on this system
        </Typography>
      </Box>

      <Box>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            mb={3}
          >
            <Typography variant="h5" component="div"></Typography>
            <Button variant="contained">New User</Button>
          </Stack>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <caption></caption>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                      >
                        <Avatar {...helper.stringAvatar(row.name)} />
                        <Typography variant="body1">{row.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      {row.status ? (
                        <Chip label="success" color="success" />
                      ) : (
                        <Chip label="disabled" color="error" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Box>
    </Box>
  );
};

export default UsersDash;
