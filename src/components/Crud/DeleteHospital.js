import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export default class DeleteHospital extends Component {

    state = {
        hospital: {},
        status: false,
        satusEliminar: false,
        idhospital:0
    }

    eliminarHospital = ()=>{
        var request ="/webresources/hospitales/delete/" + this.props.idhospital;
        var url = Global.urlhospitales + request;
        axios.delete(url).then(res=>{
            alert("Seguro que desea eliminar este elemento?");
            this.setState({
                satusEliminar:true
            });
        });
        
    }

    buscarHospital = ()=>{
        var request = "/webresources/hospitales/" + this.props.idhospital; 
        var url = Global.urlhospitales + request;
        axios.get(url).then(res=>{
            this.setState({
                hospital:res.data,
                status:true
            })
        })
    }

    componentDidMount = ()=>{
        this.buscarHospital();
    }


    render() {
          if(this.state.satusEliminar == true){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Eliminar hospital {this.props.idhospital} ?</h1>
                {this.state.status == true && (
                     <div>
                     <h2>Nombre hospital: {this.state.hospital.nombre}</h2>
                     <h3>Telefono: {this.state.hospital.telefono}</h3>
                     <h3>Direccion: {this.state.hospital.direccion}</h3>
                     <h3>Camas: {this.state.hospital.camas}</h3>
                     <button onClick={this.eliminarHospital}>Eliminar</button>
                 </div>
                )}
            </div>
        )
    }
}
