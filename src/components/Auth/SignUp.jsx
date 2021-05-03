import React from 'react';
import Userfront from "@userfront/react";

Userfront.init("7n8vr8n6");

const SignupForm = Userfront.build({
  toolId: "aaroka"
});

class SignUp extends React.Component {
  render () {
    return <SignupForm />
  }
}
export default SignUp;