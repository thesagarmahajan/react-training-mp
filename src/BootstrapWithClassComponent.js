import React from "react";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const users = [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}];

function UserCard(props){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.avatar} />
            <Card.Body>
                <Card.Title>{props.first_name+" "+props.last_name}</Card.Title>
                <Card.Text>
                    {props.email}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

class BoostrapWithClassComponent extends React.Component {
    render(){
        return (
            <Container>
                <Row>
                    {
                        users.map((v, k)=>{
                            console.log(v);
                            return (
                                <Col xl={{span:3}} lg={{span:4}} md={{span:6}}>
                                    <UserCard first_name={v.first_name} last_name={v.last_name} email={v.email} avatar={v.avatar} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default BoostrapWithClassComponent;