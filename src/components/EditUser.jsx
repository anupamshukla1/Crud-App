import { FormGroup,FormControl,InputLabel,Input,Typography,Button,styled } from "@mui/material"
import { useState,useEffect  } from "react";
import { getUsers, editUser } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";




const Container = styled(FormGroup)`

width:50%;
margin: 30px auto 0px auto;
& >div {
    margin-top:20px;
}
`;
const initialValue = {
    name: '',
    username:'',
    email:'',
    phone:''

}
const EditUser = () => {
    const [user,setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const {id}= useParams();

    let navigate = useNavigate();



    useEffect(() => {
        loadUserDetails();
    }, []);
    const loadUserDetails = async () => {
        let response = await getUsers(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value})
        
        
    }

const editUserDetails = async() => {
    const response = await editUser(id, user);
   navigate('/all');

}


  return (
    <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
  )
}

export default EditUser;