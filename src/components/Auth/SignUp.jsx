import React from 'react';

import { Formik, Field, Form } from "formik";

export default function SignUp() {

    return (
        <div className="UserLogin">
            <Formik
                initialValues={{ email: "", username: "", password: "" }}
                onSubmit={async values => {
                    fetch('/auth/login', {
                        method: 'POST',
                        body: JSON.stringify(values),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.hasOwnProperty('error')) {
                                throw data.error;
                            }
                        })
                        .catch(function (error) {
                            console.log (error)
                        })
                }}
            >
                <Form>
                    <Field name="email" type="email" />
                    <Field name="username" type="text" />
                    <Field name="password" type="password" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}