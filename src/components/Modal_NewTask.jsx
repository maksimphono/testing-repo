import {Modal, Button, ButtonGroup, Form} from "react-bootstrap"
import {useState, React} from "react"
import $ from "jquery"
import POST_new_task from "../forms/POST_new_task"

export default function Modal_NewTask(props){

    const onSubmit = event => {
        const title = $("#task_title").val();
        const description = $("#task_description").val();
        const date = new Date();

        POST_new_task(JSON.stringify({title, description, date}));
        props.handleShowHide(event);
    }

    return (
        <Modal show={props.show} onHide={props.handleShowHide}>
            <Modal.Header closeButton>
                <Modal.Title>Create new task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task Title:</Form.Label>
                        <Form.Control id="task_title" controlId="task_title" type="text" placeholder="New task" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task Description:</Form.Label>
                        <Form.Control id="task_description" controlId="task_description" as="textarea" placeholder="Description" />
                    </Form.Group>
                    <Button type = "submit">Submit</Button>
                    <Button variant = "secondary" onClick={props.handleShowHide}>Cancel</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}