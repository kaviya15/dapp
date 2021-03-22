import React , {Component}  from 'react'
import Navbar from './Navbar'
class Imagecapture extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            face_verified : false
         }
    }
    
    fingerprint_verification=()=>{
        fetch('/fingerprint_verification')
        .then(res=>{

        })
    }


    render() { 
        return ( 
            <>
              <Navbar/>
              <button onClick={this.fingerprint_verification} className="btn btn-primary">
                 upload 
              </button>
              </>



         );
    }
}
 
export default Imagecapture;
