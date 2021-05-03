import React from 'react';
import Userfront from "@userfront/react";

Userfront.init("7n8vr8n6");

const PasswordResetForm = Userfront.build({
  toolId: "oadbor"
});

class Reset extends React.Component {
  render () {
    return <PasswordResetForm />
  }
}

export default Reset;