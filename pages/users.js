// https://medium.com/better-programming/how-to-use-async-await-with-axios-in-react-e07daac2905f
import Header from './layouts/Header';
import { Table } from "react-bootstrap";
import React from "react";
import axios from "axios";
export default class App extends React.Component {
    state = {
       users: []
    };
    componentDidMount() {
       this.getUsers();
       
    }
    // getUsers =  () => {
    //    axios
    //        .get("https://reqres.in/api/users?page=1")
    //        .then(data => this.setState({ users: data.data.data }))
    //        .catch(err => {
    //            console.log(err);
    //            return null;
    //        });
           
    // };
    
getUsers = async () => {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    let { data } = res.data;
    this.setState({ users: data });
    console.log(data);
};
    
    render() {
    // console.log(this.state);
       return (
           <div>
           <Header />
           <h3 style={{ textAlign: 'center', marginBottom:'10px' }}>Users</h3>
           <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
               {this.state.users.length === 0 ? (
                   <span>Loading...</span>
               ) : (
                   this.state.users.map((e, i) => {
                       return (
                           <>
                           <tr key={i}>
                            <td>{i+1}</td>      
                            <td><img style={{width:'20%',height:'auto', borderRadius:'50%'}} src={e.avatar} /></td>
                            <td>{e.first_name}</td>
                            <td>{e.last_name}</td>
                            <td>{e.email}</td>
      
                        </tr>
                       </>
                       )
                       
                    })
               )}
               </tbody>
            </Table>
           </div>
       );
     }
}