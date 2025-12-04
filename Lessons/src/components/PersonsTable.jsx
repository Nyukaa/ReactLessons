import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const PersonsTable = ({ persons, onDelete, onToggleFavorite }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="persons table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Name</b>
            </TableCell>
            <TableCell>
              <b>Title</b>
            </TableCell>
            <TableCell>
              <b>Age</b>
            </TableCell>
            <TableCell>
              <b>Favorite</b>
            </TableCell>
            <TableCell>
              <b>Actions</b>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {persons.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.title}</TableCell>
              <TableCell>{person.age}</TableCell>

              <TableCell>{person.isFavorite ? "❤️ Yes" : "No"}</TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(person.id)}
                  sx={{ marginRight: 1 }}
                >
                  Delete
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => onToggleFavorite(person.id)}
                >
                  {person.isFavorite ? "Unfavorite" : "Favorite"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonsTable;
