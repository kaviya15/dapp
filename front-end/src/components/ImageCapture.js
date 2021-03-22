import axios from 'axios';
import React , {Component}  from 'react'
import Navbar from './Navbar'
class Imagecapture extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            face_verified : false
         }
    }
    
    face_verification=()=>{
        axios({
            url:"http://localhost:4000/face_verification",
            method :"GET",
  })
        .then(res=>{
            
        })
    }

    render() { 
        return ( 
            <center>
              <Navbar/>
            <h2 className="text-dark mt-5">
                <b><em>Authenticate Your Identity </em></b> 
            </h2>
              <img className='mt-5' src="/face_.png" alt=""/> <br/>
              <button onClick={this.face_verification} className="btn btn-primary">
                  Capture Image
              </button>
              </center>
         );
    }
}
 
export default Imagecapture;
