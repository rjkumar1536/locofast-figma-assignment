import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import M from 'materialize-css';
import './ShowModel.css'
import {connect} from 'react-redux';

import {setNext, setBack, setFactoryName, setDesignName, setFileName, setQuantity, assignFactory} from '../redux/actions/modalAction'
class ShowModel extends Component {
    componentDidMount(){
        var elems = document.querySelectorAll('select');
        //eslint-disable-next-line
        var instances = M.FormSelect.init(elems);
    }
     handleClose = (event)=>{
        var elem = document.querySelector('.modal');
        var instance = M.Modal.getInstance(elem);
        instance.close();
    }
    handleSelect = (event)=>{
        if(event.target.id === "quantity"){
            this.props.dispatch(setQuantity(event.target.value))
            return;
        }
        else if(event.target.id === "files"){
            if(this.props.nextClicked){
                return;
            }
            this.props.dispatch(setFileName(event.target.value.slice(12)))
            return;
        }
        else if(event.target.id === "designName"){
            this.props.dispatch(setDesignName(event.target.querySelectorAll('option')[event.target.selectedIndex].value))
        }
        else if(event.target.id === "factoryName"){
            this.props.dispatch(setFactoryName(event.target.querySelectorAll('option')[event.target.selectedIndex].value))
        }
        
    }

    handleClick = (event)=>{
        if(event.target.id === "next"){
            if(this.props.nextClicked){
                var elem = document.querySelector('.modal');
                var instance = M.Modal.getInstance(elem);
                instance.close();
                this.props.dispatch(assignFactory())
            }
            else{
                this.props.dispatch(setNext())
            }
        }
        else if(event.target.id === "back"){
            this.props.dispatch(setBack())
        }
    }
    render() {
        return (
            <div>
                <div  id = "model" className="modal modal-fixed-footer">
                    <div className="modal-content modal-container">
                        <div className = "modal-header">
                            <h5 className = "left">Material details</h5>
                            <div>
                                <i className = "material-icons right" style = {{cursor : "pointer"}} onClick = {(e)=> {this.handleClose(e)}}>close</i>
                            </div>
                        </div>
                        <div className = "modal-full-content" >
                            <div className = "modal-left-content">
                                <img  src = "/images/alexi-romano-CCx6Fz_CmOI-unsplash.jpg" className = "responsive-img card" alt = "alexi-romano-CCx6Fz_CmOI-unsplash" />
                            </div>
                            <div className = "modal-right-content">
                                <div className = "assign-to-factory">
                                    <i className = "material-icons left">arrow_back</i>
                                    <div>Assign to factory</div>
                                </div>
                                {this.props.nextClicked ? <div className = "warning lime lighten-5">
                                    <i className = "material-icons blue-text">error</i>
                                    <p>You won't be able to change the details later</p>
                                    </div> : null}
                                <div className = "factory">
                                    <h6 className = "label">Factory<sup>*</sup></h6>
                                    {this.props.nextClicked ? <p>{this.props.factoryName}</p> : 
                                    <select className="browser-default" id = "factoryName" onChange = {(event)=>{this.handleSelect(event)}}>
                                        <option value={this.props.factoryName} disabled>Select factory</option>
                                        <option value="Amaya Creations">Amaya Creations</option>
                                        <option value="Jara">Jara</option>
                                        <option value="Manyavara">Manyavara</option>
                                    </select>}
                                </div>
                                    <div className="assign-to-design">
                                        <h6>Assign for design<sup>*</sup></h6>
                                        <select className="icons" id = "designName" onChange = {(event)=>{this.handleSelect(event)}} disabled = {this.props.nextClicked  ? true : false}>
                                            <option value={this.props.designName} disabled >Choose your option</option>
                                            <option value="Design name 1" data-icon="/images/alexi-romano-CCx6Fz_CmOI-unsplash.jpg" className="left circle black-text">Design name 1</option>
                                            <option value="Design name 2" data-icon="/images/artificial-photography-vB5qtt8X4NA-unsplash.jpg" className="left circle">Design name 2</option>
                                            <option value="Design name 3" data-icon="/images/freestocks-_3Q3tsJ01nc-unsplash.jpg" className="right circle">Design name 3</option>
                                        </select></div>
                               {this.props.designName !== "" ?  
                                <div className = "inventory">
                                    <div className = "assign-quantity">
                                        <h6>Assign quantity<sup>*</sup></h6>
                                        {this.props.nextClicked ? <p>{this.props.quantity}</p> : 
                                        <input  type = "text" id = "quantity" value = {this.props.quantity} placeholder = "Enter quantity" onChange = {(event)=>{this.handleSelect(event)}}/>}
                                    </div>
                                    {this.props.nextClicked ? null  : 
                                    <div className = "available-inventory">
                                        <h6>Available Inventory</h6>
                                        <h6>{this.props.inventory - this.props.quantity} meter</h6>
                                    </div>}
                                </div> : null}
                                {this.props.designName !== "" ?  
                                <div className = "attach-challan">
                                    <h6>Attach challan<sup>*</sup></h6>
                                    <div  className = {this.props.nextClicked ? "challan grey lighten-4" : "challan white"}>
                                        <div className = "file-input">
                                            <label htmlFor="files" className= "file-label">{this.props.fileName === "" ? "Select File" : this.props.fileName }</label>
                                            <input id="files" style = { {visibility:"hidden"}} className = {this.props.nextClicked ? "disabled" : "enabled"}type = "file" onChange = {(event)=>{this.handleSelect(event)}}/>
                                        </div>
                                        <div className = "attach-file">
                                            <i className = "material-icons left">{this.props.nextClicked ? "remove_red_eye" : "attach_file"}</i>
                                        </div>
                                    </div>
                                </div> : null}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Link to="#!" className="btn" id = "back" onClick = {(event)=> this.handleClick(event)}>Back</Link>
                        <Link to = "#!" className={`btn ${this.props.designName !== "" && this.props.factoryName !== "" && this.props.quantity !== 0 && this.props.fileName !== "" ? "enabled" : "disabled" }`} id = "next" onClick = {(event)=> this.handleClick(event)}>{this.props.nextClicked ? "Assign to factory" : "Next"}</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    factoryName : state.factoryName,
    designName : state.designName,
    quantity : state.quantity,
    fileName : state.fileName,
    inventory : state.inventory,
    nextClicked : state.nextClicked,
    backClicked : state.backClicked
})
export default connect(mapStateToProps)(ShowModel);