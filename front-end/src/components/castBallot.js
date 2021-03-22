import React , {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
class CastBalot extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <center>
            
            <Navbar/>
              <form style={{height:"49.5rem"}} onSubmit="">
                  <label className="pr-2" htmlFor="">
                      <img width= " 200px" src="/dmk.png" alt=""/> <br/>
                      <b><input style={{fontSize:'30px'}}  type="radio" name="vote"/> <em style={{fontSize:'20px'}} className="text-dark"> DMK
                          </em></b> 
                  </label>
                  <label className="pr-2" htmlFor="">
                      <img  width= " 160px"src="/cong.png" alt=""/> <br/>
                     <b> <input type="radio" name="vote"/>  <em style={{fontSize:'20px'}} className="text-dark"> CONGRESS </em></b>
                  </label> 
                  <label htmlFor=""> 
                      <img width= " 150" src="/bjp.png" alt=""/> <br/>
                      <b><input type="radio" name="vote"/>  <em style={{fontSize:'20px'}} className="text-dark">  BJP</em></b>
                  </label>
                  <label className="pr-2" htmlFor="">
                      <img width= " 220px"src="/admk.png" alt=""/> <br/>
                     <b> <input type="radio" name="vote"/>  <em style={{fontSize:'20px'}} className="text-dark">  ADMK </em></b>
                  </label>
                 
                  <div className="pr-2" className="form-group mt-5">
                                <label htmlFor="voter"> <h4> Enter Voter ID to submit Vote</h4></label>
                                <input  style={{width:'20rem'}}  type="text" className="form-control" placeholder="Voter Id..." id="voter" value = {this.state.VoterID} onChange={this.UpdateVoter} required minLength="10" maxLength ="10" />
                                <input type="submit" className="btn btn-info mt-2" />
                            </div>
              </form>
              <Footer/>
            </center>

         );
    }
}
 
export default CastBalot;
