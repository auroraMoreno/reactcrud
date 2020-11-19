import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import {Redirect} from 'react-router-dom';

export default class InsertarHospital extends Component {

    cajaIdRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaDireccionRef = React.createRef();
    cajaTelefonoRef = React.createRef();
    cajaCamasRef = React.createRef();

    state = {
        status:false
    }

    nuevoHospital = (e)=>{
        e.preventDefault();

        var request ="/webresources/hospitales/post";
        var url = Global.urlhospitales + request;

        var id = parseInt(this.cajaIdRef.current.value);
        var nombre = this.cajaNombreRef.current.value;
        var direccion = this.cajaDireccionRef.current.value;
        var telefono = this.cajaTelefonoRef.current.value;
        var camas = parseInt(this.cajaCamasRef.current.value);
        var nuevoHospital = {
            idhospital: id,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            camas: camas
        }

        axios.post(url,nuevoHospital).then(res => {
            this.setState({
                status:true,
            })
        });
    }

    render() {
        if(this.state.status == true){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Insertar hospital</h1>
                <form onSubmit={this.nuevoHospital}>
                    <label>Id Hospital</label>
                    <input type="number"
                    name="cajaid"
                    className="form-control"
                    ref={this.cajaIdRef}/>
                    <br/>
                    <label>Nombre</label>
                    <input type="text"
                    name="cajanombre"
                    className="form-control"
                    ref={this.cajaNombreRef}/>
                    <br/>
                    <label>Direccion</label>
                    <input type="text"
                    name="cajadireccion"
                    className="form-control"
                    ref={this.cajaDireccionRef}/>
                    <br/>
                    <label>Telefono</label>
                    <input type="text"
                    name="cajatelefono"
                    className="form-control"
                    ref={this.cajaTelefonoRef}/>
                    <br/>
                    <label>Camas</label>
                    <input type="number"
                    name="cajacamas"
                    className="form-control"
                    ref={this.cajaCamasRef}/>
                    <br/>
                    <button>Insertar</button>
                </form>
            </div>
        )
    }
}
