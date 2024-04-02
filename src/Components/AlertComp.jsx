import { Alert } from "react-bootstrap";
import React from "react";

export default function AlertComp({ show }) {
  return (
    <div className="absolute top-0 left-0 w-full">
      <Alert show={show} transition variant="primary">
        <Alert.Heading>Saved!</Alert.Heading>
        <p>Todos are Saved now</p>
      </Alert>
    </div>
  );
}
