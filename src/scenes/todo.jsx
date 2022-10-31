import React from 'react';
import Accordion from "react-bootstrap/Accordion"
import {Button, ButtonGroup} from "react-bootstrap"
import "../css/todo_style.css"

export default function TodoScene(props){
    let date = props.date; //new Date(props.date).toISOString();
    //console.log(date.match(/(\d{4}-\d{2}-d{2})/g));
    //date = `${date.match(/\d{4}-\d{2}-\d{2}/g)}  ${date.match(/\d{2}:\d{2}/)}`;

    return (
        <Accordion.Item className="accordion-item" eventKey = {props._key}>
            <Accordion.Header>
                <div>
                    <h2>{props.title || "New todo"}</h2>
                    <p>Since: {date}</p>
                </div>
                <ButtonGroup className="button-group">
                    <Button variant="success" data-title={props.title} className = "btn h-100" onClick={props.handleCompleteTask}>Complete</Button>
                    <Button variant="primary" className = "btn" onClick={props.handleEditTask}>Edit</Button>
                    <Button variant="outline" data-todo-index={props._key} className = "btn-outline-danger" onClick={props.handleDeleteTask}>Delete</Button>
                </ButtonGroup>
            </Accordion.Header>
            <Accordion.Body>
                <h4>Description:</h4>
                <p>{props.description || "None"}</p>
            </Accordion.Body>
        </Accordion.Item>
    );
}