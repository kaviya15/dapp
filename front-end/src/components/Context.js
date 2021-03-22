import React ,{Component,createContext} from 'react'
import 'axios'
export const ContextCreator = createContext()
class Contextprovider extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            AadharNo:"5656565",
            VoterId:"98989489849",
            // A_V_verified:"",
            // face_verified:"",
            // fingerprint_verified:""
         }
    }
    // UpdateAadhar=(e)=>{
    //     this.setState({ AadharNo : e.target.value})
    // }
    // UpdateVoter=(e)=>{
    //     this.setState({ VoterId : e.target.value})
    // }
    // onSubmit=(e)=>{
    //     e.preventDefault()
    //     const userobject = {
    //         Aadhar : this.state.AadharNo,
    //         Voter : this.state.VoterId
    //     }
    //     axios({
    //         url:"http://localhost:4000/Validateuser",
    //         method :"POST",
    //         data : userobject
    //     }).then(res=>{
    //         console.log(res)
    //         if(res.data =="success")this.setState({verified:true})
    //         else this.setState({verified:false})
    //     }).catch(error=>{
    //         console.log(error);
    //     })
    // }

    render(){
        return(
                <ContextCreator.Provider value={this.state.AadharNo}>
                    {
                        this.props.children
                    }
                </ContextCreator.Provider>
        )
    }
    
}

export default Contextprovider
