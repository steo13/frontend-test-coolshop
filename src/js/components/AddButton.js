import React from 'react'
import { Button } from "react-bootstrap";

export default function AddButton(props) {
    return (
        <Button variant="primary" onClick={props.addNewRow}>
            <i className="bi bi-plus-circle-dotted"/>{' Add row'}
        </Button>
    )
}