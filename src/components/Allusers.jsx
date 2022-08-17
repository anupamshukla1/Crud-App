import { Table, TableHead,TableBody,TableRow,TableCell, styled,Button} from '@mui/material';
import { getUsers,deleteUser} from '../service/api';

import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'


const StyledTable = styled(Table)`

width: 80%;
margin: 50px 0 0 50px;

`;
const THead = styled(TableRow)`

background:#000;
& > th {
  background:#000;
  font-size:20px;
  color: #FFFFFF;
}


`;

const TRow = styled(TableRow)`

& > td {
  color:#000;
  font-size:20px;
}
`;


const AllUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect (() => {
    getAllUsers();
  },[])

  const getAllUsers = async () => {
    let response = await getUsers();
    
    setUsers(response.data);
  }

const deleteUserData= async (id) => {
  await deleteUser(id);
  getAllUsers();
}


  return (
    <StyledTable>
      <TableHead>
<THead>
  <TableCell>Id</TableCell>
  <TableCell>Name</TableCell>
  <TableCell>UserName</TableCell>
  <TableCell>Email</TableCell>
  <TableCell>Phone</TableCell>
  <TableCell></TableCell>
</THead>
      </TableHead>

      <TableBody>

{ users.map(user => (
  <TRow key={user.id}>
    
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>

    <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
    <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>delete</Button>

      </TableCell>
    </TRow>
  ))
}
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers;