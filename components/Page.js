import React, { Component } from 'react'            // bring react components from react


class Page extends Component {
    render() {
        return (
            <div>
                <p>hey I am the page components</p>
                {this.props.children}
            </div>
        )
    }
}

export default Page;