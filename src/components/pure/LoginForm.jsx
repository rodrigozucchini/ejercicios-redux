import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email("Formato invalido de email")
            .required("El email es obligatorio"),
        password: Yup.string()
            .required("La contraseña es requerida")
    }
)



const Loginform = ({loged, fetching, onLogin}) => {
    
    const initialCredentials = {
        email: "",
        password: ""
    }


    return (
        <div>
            <h4>Login Form</h4>
            <Formik 
                // Iniciar valor que tomará
                initialValues={ initialCredentials }
                //Validacion de YUP
                validationSchema={ loginSchema }
                //Evento onSUBMIT
                onSubmit={async (values) => {
                    onLogin(values.email, values.password)
                }}
            >

                {/*Nosotros obtenemos props de Formik*/}

                    {({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur}) => (

                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" id="email" placeholder="ejemplo@email.com"/>
                                {/*ERRORES DEL EMAIL*/}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage component="div" name="email" />
                                )
                            }
                            
                                {/*ERRORES DEL PASSWORD*/}
                                {
                                errors.password && touched.password && 
                                (
                                <div>
                                    <ErrorMessage component="div" name="password" />
                                </div>
                                )
                            }

                            <label htmlFor="password">Contraseña</label>
                            <Field name="password" type="password" id="email" placeholder="contraseña"/>
                            
                            <button type="submit">Ingresar</button>
                            { fetching ? (<p>LOADING...</p>) : null}
                            { isSubmitting ? <p>Inicie sesión con su credencial</p> : null }
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

Loginform.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default Loginform;
