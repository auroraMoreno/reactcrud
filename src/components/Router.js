import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Hospitales from './Crud/Hospitales';
import MenuHospitales from './Crud/MenuHospitales';
import InsertarHospital from './Crud/InsertarHospital';
import DetallesHospital from './Crud/DetallesHospital';
import ModificarHospital from './Crud/ModificarHospital';
import DeleteHospital from './Crud/DeleteHospital';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuHospitales/>
                    <Switch>
                        <Route exact path="/" component={Hospitales} />
                        <Route exact path="/create" component={InsertarHospital}/>
                        <Route exact path="/delete/:id" 
                        render = {props =>{
                            var id = props.match.params.id;
                            return <DeleteHospital idhospital={id}/>
                        }}/>
                        <Route exact path="/update/:id/:nombre/:telefono/:direccion/:camas"
                        render={props=>{
                            var id = props.match.params.id;
                            var nombre =  props.match.params.nombre;
                            var telefono =  props.match.params.telefono;
                            var direccion =  props.match.params.direccion;
                            var camas = props.match.params.camas;

                            return <ModificarHospital idhospital={id} 
                                                    nombre={nombre} 
                                                    telefono={telefono}
                                                    direccion={direccion}
                                                    camas ={camas} 
                                                    />
                        }   
                        }
                        />
                        <Route exact path="/details/:id"
                        render = {props => {
                            var id = props.match.params.id;
                            return <DetallesHospital idhospital={id}/>
                        }}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
