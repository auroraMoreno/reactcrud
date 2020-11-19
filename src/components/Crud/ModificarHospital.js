import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import {Redirect} from 'react-router-dom';

export default class ModificarHospital extends Component {

    cajaIdRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaDireccionRef = React.createRef();
    cajaTelefonoRef = React.createRef();
    cajaCamasRef = React.createRef();

    state = {
        status: false
    }

    buscarHospital = (e) =>{
        e.preventDefault();

        var request = "/webresources/hospitales/put";
        var url = Global.urlhospitales + request;

        var id = parseInt(this.cajaIdRef.current.value);
        var nombre = this.cajaNombreRef.current.value;
        var telefono = this.cajaTelefonoRef.current.value;
        var direccion = this.cajaDireccionRef.current.value;
        var camas = parseInt(this.cajaCamasRef.current.value);

        var hospital = {
            idhospital: id,
            nombre: nombre,
            telefono: telefono,
            direccion: direccion,
            camas: camas
        }

        axios.put(url,hospital).then(res=>{
            this.setState({
                status:true
            });
            //console.log("Dentro");
        });


    }


    render() {
        if(this.state.status == true){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Modificar hospital {this.props.nombre}</h1>
                <form onSubmit={this.buscarHospital}>
                    <label>Id hospital: </label>
                    <input type="number"
                    name="cajaId"
                    className="form-control"
                    ref={this.cajaIdRef}
                    defaultValue={this.props.idhospital}
                    readOnly/>
                    <br/>
                    <label>Nombre </label>
                    <input type="text"
                    name="cajaNombre"
                    className="form-control"
                    ref={this.cajaNombreRef}
                    defaultValue={this.props.nombre}/>
                    <br/>
                    <label>Telefono </label>
                    <input type="text"
                    name="cajaTelefono"
                    className="form-control"
                    ref={this.cajaTelefonoRef}
                    defaultValue={this.props.telefono}/>
                    <br/>
                    <label>Direccion</label>
                    <input type="text"
                    name="cajaDireccion"
                    className="form-control"
                    ref={this.cajaDireccionRef}
                    defaultValue={this.props.direccion}/>
                    <br/>
                    <label>Camas </label>
                    <input type="number"
                    name="cajaCamas"
                    className="form-control"
                    ref={this.cajaCamasRef}
                    defaultValue={this.props.camas}/>
                    <br/>
                    <button>Modificar</button>
                </form>
            </div>
        )
    }
}
