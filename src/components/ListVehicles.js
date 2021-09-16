import React from "react";
import { Alert, Card } from "react-bootstrap";
import car_logo from "../images/car-logo.jpg";
import "../css/Home.css";

export const ListVehicle= () => {
    return (
        <div>
             <Card.Title>
                        <Alert variant="info">Vehicle Registration System</Alert>
                    </Card.Title>
            <Card style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <Card.Img
                    style={{
                        position: "relative",
                        objectFit: "cover",
                        display: "block",
                        height: "10%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "50%",
                    }}
                    variant="top"
                    src={car_logo}
                />
                <Card.Body>
                    <Card.Title>
                        <Alert variant="info">Registerd Vehicle List </Alert>
                    </Card.Title>
                   
                    
                </Card.Body>
            </Card>
        </div>
    );
}
