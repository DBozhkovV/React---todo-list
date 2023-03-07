import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const EditItem = (props) => {
    const [newTitle, setNewTitle] = useState(null);
    
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <ModalTitle>
                    Edit
                </ModalTitle>
            </Modal.Header>
            <ModalBody>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">New title: </InputGroup.Text>
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={(event) => setNewTitle(event.target.value) }
                    />
                </InputGroup>
            </ModalBody>
            <Modal.Footer>
                <Button variant="outline-success" onClick={() => {props.editItem(props.index, newTitle); props.onHide();}}>Submit</Button>
                <Button onClick={props.onHide} variant="outline-danger">Don't change</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditItem;