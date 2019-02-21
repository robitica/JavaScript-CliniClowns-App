import React, { Component } from 'react'
import { getClown } from '../../functions/Functions'

class Clowns extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            imageUrl: '',
        }
    }

    componentDidMount() {
        // get param from url query with -> this.props.match.params.id
        getClown(this.props.match.params.id).then(res => {
            this.setState({
                firstName: res.data.first_name,
                lastName: res.data.last_name,
                imageUrl: '../src/logo.svg',
            })
        });
    }

    render () {
        return (
            <div className="container">
                <div>
                    <h1 className="text-center">{this.state.firstName} {this.state.lastName}</h1>
                </div>
            </div>
        )
    }
}

export default Clowns