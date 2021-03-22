import React from 'react'

import Navbar from './Navbar'
class Failed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <>
                <Navbar/>
            <h1 >

                   Sorry ! Your Authentication Failed ... Try Again 
            </h1>
            </>
         );
    }
}
 
export default Failed;
