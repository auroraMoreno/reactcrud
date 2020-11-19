import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import {NavLink} from 'react-router-dom';

export default class Hospitales extends Component {

    state = {
        hospitales: [],
        status: false
    }

    cargarHospitales = ()=>{
        var request = "/webresources/hospitales";
        var url = Global.urlhospitales + request;
        axios.get(url).then(res => {
            this.setState({
                hospitales: res.data,
                status: true
            });
        });
    }

    componentDidMount = ()=>{
        this.cargarHospitales();
    }

    render() {
        return (
            <div>
                <h1>Hospitales</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id Hospital</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Telefono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status == true && (
                            this.state.hospitales.map((hosp, index) => {
                                return(
                                    <tr key={index}>
                                    <td>{hosp.idhospital}</td>
                                    <td>{hosp.nombre}</td>
                                    <td>{hosp.direccion}</td>
                                    <td>{hosp.telefono}</td>
                                    <td>{hosp.camas}</td>
                                    <td><NavLink to={"/details/" + hosp.idhospital}>Detalles</NavLink></td>
                                </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
