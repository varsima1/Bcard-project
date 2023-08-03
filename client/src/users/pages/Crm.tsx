import React, { useEffect, useState } from "react";
import useHandleUser from "../hooks/useHandleUser";
import { useUser } from "../providers/UserProvider";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const Crm = () => {
  const {
    handleGetAllUsersInfo,
    handleChangeUserStatus,
    handleDeleteUser,
    value,
  } = useHandleUser();

  const { filteredUsers } = value;
  const { user } = useUser();

  useEffect(() => {
    handleGetAllUsersInfo();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "red",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const write = (admin: boolean, business: boolean) => {
    if (admin) return "Admin";
    if (!admin && business) return "Business";
    if (!admin && !business) return "Regular";
  };

  const [Status, setStatus] = useState<boolean | void>(() => {
    Boolean(filteredUsers?.map((user) => user.isBusiness));
  });

  const ChangeStatus = async (someUserId: string) => {
    setStatus((prev) => !prev);
    await handleChangeUserStatus(someUserId);
    await handleGetAllUsersInfo();
  };

  const DeleteUser = async (userId: string) => {
    await handleDeleteUser(userId);
    await handleGetAllUsersInfo();
  };

  if (!user?.isAdmin) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <>
      <Container
        sx={{
          // height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h4"
          color="darkgoldenrod"
          fontFamily={"fantasy"}
          textAlign={"center"}
          mt={4}
          mb={4}
        >
          {" "}
          Customer Relationship Management
        </Typography>
        {user && user.isAdmin && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Number</StyledTableCell>
                  <StyledTableCell>User Name</StyledTableCell>
                  <StyledTableCell>Delete User</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers?.map((user, key) => (
                  <StyledTableRow key={key}>
                    <StyledTableCell component="th" scope="row">
                      {key + 1}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {`${user.name.first} ${user.name.last}`}
                    </StyledTableCell>
                    <StyledTableCell>
                      <Button
                        onClick={() => DeleteUser(user._id)}
                        disabled={user.isAdmin}
                        color="error"
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell>{user.email}</StyledTableCell>
                    <StyledTableCell>{user.phone}</StyledTableCell>
                    <StyledTableCell>{`${user.address.city}, ${user.address.street} ${user.address.houseNumber}`}</StyledTableCell>
                    <StyledTableCell>
                      <Button onClick={() => ChangeStatus(user._id)}>
                        {write(user.isAdmin, user.isBusiness)}{" "}
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default Crm;
