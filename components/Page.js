import React, { Component } from 'react'            // bring react components from react
import Header from '../components/Header';

class Page extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Page;