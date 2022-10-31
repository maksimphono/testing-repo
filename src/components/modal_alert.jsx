import {Modal, Button, ButtonGroup} from "react-bootstrap"
import {useState, React} from "react"

export default function ModalScene(props){
    const [show, setShow] = useState(true);

    return (
        <Modal show={props.show} onHide={props.handleShowHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title || "Warning!"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}</Modal.Body>
            <Modal.Footer>
                <div>
                {props.buttons.map((btn, i) => 
                    <Button variant = {btn.variant} onClick={btn.onClick}>{btn.text}</Button>)}
                </div>
                <Button variant = "secondary" onClick={props.handleShowHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}