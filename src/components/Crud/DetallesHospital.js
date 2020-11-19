import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import {NavLink} from 'react-router-dom';

export default class DetallesHospital extends Component {

    constructor(props){
        super(props);
        this.setState({
            idhospital:props.idhospital
        });
    }

    state = {
        hospital: {},
        status: false,
        idhospital: 0
    }

    buscarHospital = ()=>{
        var request="/webresources/hospitales/" + this.props.idhospital;
        var url = Global.urlhospitales + request
        axios.get(url).then(res=>{
            this.setState({
                hospital: res.data,
                status:true
            });
            console.log(this.state.hospital);
        });


    }

    componentDidMount = () => {
        this.buscarHospital();
    }

    render() {
        return (
            <div>
                {this.state.status == true && (
                    <React.Fragment>
                        <h1>Detalles del hospital: {this.state.hospital.nombre}</h1>
                        <h3>Direccion: {this.state.hospital.direccion}</h3>
                        <h3>Número de camas: {this.state.hospital.camas}</h3>
                        <NavLink to={"/update/" 
                        + this.state.hospital.idhospital 
                        + "/" + this.state.hospital.nombre 
                        + "/" + this.state.hospital.telefono 
                        + "/" + this.state.hospital.direccion 
                        + "/" + this.state.hospital.camas}>Modificar</NavLink>
                        <NavLink to={"/delete/" + this.state.hospital.idhospital}>Eliminar</NavLink>
                    </React.Fragment>
                )}
            </div>
        )
    }
}
