
import { AppBar,Toolbar,styled } from "@mui/material";
import {NavLink} from 'react-router-dom';


const Header = styled(AppBar)`

`

const Tabs = styled(NavLink)`

font-size: 20px;
margin-right:2rem;
color:inherit;
text-decoration:none;

`;

const Navbar = () => {
  return (
    
    <Header position="static">
        <Toolbar>
            <Tabs to="./" exact><img src="/images/crud.png" alt="crud" width="50" height="45"/></Tabs>
            <Tabs to="all" exact>All Users</Tabs>
            <Tabs to="add" exact>Add Users</Tabs>
            
        </Toolbar>
    </Header>
  );
};

export default Navbar;