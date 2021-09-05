import React, { Component } from 'react'
import axios from "axios";


export class main extends Component {


    constructor(props) {
        super(props);
        this.state = {
          name: "",
          age: Number,
          data: [],
          
        };
      }
    
      getData = async (e) => {

        e.preventDefault();
        let requestURL = `http://localhost:4000/all?name=${e.target.name.value}`;
    
        let retrivedURL = await axios.get(requestURL);
    
        this.setState({
            data: retrivedURL.data,
          
        });

        console.log(this.state.data.name);
      };




addData = async (e) => {
    e.preventDefault();

    
    let name = e.target.name.value;

    let age = e.target.age.value;

    let obj = {
     
      name,
      age,
    };
    
    let resData = await axios.post(
        `http://localhost:4000/add`,
        obj
    );

    await this.setState({
      data: resData.data,
    });

   
  };


  
  deleteData = async (id) => {
    let resData = await axios.delete(
      `http://localhost:4000/delete/${id}`
    );

    this.setState({
      data: resData.data,
    });
  };






    render() {
        return (
            <div>
                <form onSubmit={this.getData} >
<input type="text" name="name"></input>

<input type="submit"></input>

                </form>

                <form onSubmit={this.addData} >
<input type="text" name="name"></input>
<input type="number" name="age"></input>
<input type="submit"></input>

                </form>

{
    
    this.state.data.map(item => {

return (
    <>
        <h1>{item.name}</h1> 

        <h2>{item.age}</h2>
        <button onClick={() => this.deleteData(item._id)}>delete</button>
        </>
        )

    })
    
             

           
            }
             </div>    
        )
    }
}

export default main;