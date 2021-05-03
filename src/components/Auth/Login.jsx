import React from 'react';
import Userfront from "@userfront/react";

Userfront.init("7n8vr8n6");

const LoginForm = Userfront.build({
  toolId: "aaroka"
});

class Login extends React.Component {
  render () {
    return <LoginForm />
  }
}

export default Login