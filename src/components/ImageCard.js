import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ShowModel.css'
import M from 'materialize-css';
import {connect} from 'react-redux';
import './ImageCard.css'

class ImageCard extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div className="card-flex">
                    {this.props.data.map((item, index)=>
                    <div className="card image-card" key = {index}>
                        <div className="card-image">
                            <img src="/images/alex-iby-Pd585pphU-4-unsplash.jpg" alt = {item.factoryName}/>
                    <span className="card-title">{item.factoryName}</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                    <Link to="#">{item.designName}</Link>
                        </div>
                    </div>
                    )}
                </div>
        );
    }
}

const mapStateToProps = (state)=>({
    data : state.data
})

export default connect(mapStateToProps)(ImageCard);