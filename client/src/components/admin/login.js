import React, { Component } from 'react';
import { withContext } from '../context';
import { Formik, Form } from "formik";
import { withRouter } from  "react-router-dom";





class Login extends Component {
    render() {

        return (
            <div className="container password" >

                <h3>{this.props.serverMessage}</h3>

                <Formik
                    initialValues={{
                        password : "",
                    }}
                    validate={values => {
                        const errors = {};
                        if (values.password.length < 6) {
                            errors.password = "Passwords must be at least 8 characters";
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        console.log(this.props.history);
                        this.props.actions.loginPass(values).then(() => this.props.history.push("/admin"))
                    }}
                >
                    {props => (

                        <Form className="user-login">
                            <fieldset>

                                <label htmlFor="password" className="pass-label">
                                    Password
                                </label>
                                <br/>
                                <input type="password" id="password" name="password"
                                       onChange={props.handleChange}
                                       value={props.values.password}
                                       style={{
                                           borderColor:
                                               props.errors.password && props.touched.password && "red"
                                       }}/>
                                {props.errors.password && props.touched.password && (
                                    <div style={{ color: "red" }}>{props.errors.password}</div>
                                )}
                            </fieldset>

                            <button
                                className="submit-btn"
                                type="submit"
                                aria-label="Submit Email">
                                SUBMIT

                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default withRouter(withContext(Login));