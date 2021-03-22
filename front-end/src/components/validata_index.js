import React from 'react'
import 'axios'
import Navbar from './Navbar'
import axios from 'axios';
import Footer from './Footer'

class ValidateIdentity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            AadharNo:"",
            VoterId:"",
            verified:""
         }
    }
    UpdateAadhar=(e)=>{
        this.setState({ AadharNo : e.target.value})
    }
    UpdateVoter=(e)=>{
        this.setState({ VoterId : e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault()
        const userobject = {
            Aadhar : this.state.AadharNo,
            Voter : this.state.VoterId
        }
        console.log(userobject)
        axios({
            url:"http://localhost:4000/Validateuser",
            method :"POST",
            data : userobject
        })
        // fetch('http://localhost:4000/Validateuser',userobject)
        .then(res=>{
            console.log(res)
            if(res.data =="success"){
                this.setState({verified:true})
            }
            else{
                this.setState({verified:false})
            }

        }).catch(error=>{
            console.log(error);
        })
    }

    render() { 
        return (  
            <center>
                <Navbar/>
                  <div style={{height:"47rem"}} className="container mt-5">
                  <form  onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="Aadhar"> <h4> Enter Your Aadhar ID</h4></label>
                                <input style={{width:'20rem'}} type="text" className="form-control" placeholder="Aadhar Number..." id="Aadhar" value={this.state.AadharNo} onChange={this.UpdateAadhar} required minLength="12" maxLength ="12"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="voter"> <h4> Enter Your Voter ID</h4></label>
                                <input  style={{width:'20rem'}}  type="text" className="form-control" placeholder="Voter Id..." id="voter" value = {this.state.VoterID} onChange={this.UpdateVoter} required minLength="10" maxLength ="10" />
                            </div>
                               
                        <button type="submit" className="btn btn-success">Validate</button>
                     </form>
                        </div>

                        {
                            this.state.verified&&<h1>You are authorized</h1>
                        }
                        <Footer/>
                        </center>
                    
                    
                    );
                }
            }
 
export default ValidateIdentity;
