import { Alert } from "react-bootstrap";
import React from "react";

export default function AlertComp({ show }) {
  // Bootstrap component with show as prop to display it and close it
  return (
    <div className="absolute top-0 left-0 w-full">
      <Alert show={show} transition variant="primary">
        <Alert.Heading>Saved!</Alert.Heading>
        <p>Todos are Saved now</p>
      </Alert>
    </div>
  );
}
