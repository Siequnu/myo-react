import React from 'react';
import Userfront from "@userfront/react";
import './Login.css';

Userfront.init("7n8vr8n6");

const SignupForm = Userfront.build({
  toolId: "drdomd"
});

class Demo extends React.Component {
  render () {
    return <SignupForm />
  }
}
export default Demo;