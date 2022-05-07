import { Row, Form, Col, Button } from "react-bootstrap";

export default function AddendRow(props) {
    return (
        <Row className="no-gutters ml-5 mb-2">
            <Form.Select className="ml-2 mr-2" disabled={props.addend.disabled} onChange={(e) => props.setSign(props.idx, e.target.value === "true")}>
                <option value={true} >+</option>
                <option value={false}>-</option>
            </Form.Select>
            <Col sm={2} className="ml-2 mr-2">
                { props.addend.disabled ?
                    <Form.Control value="Disabled" disabled/> :
                    <Form.Control type="number" value={props.addend.value} disabled={props.addend.disabled} onChange={(e) => props.setNumber(props.idx, e.target.value)}/> }
            </Col>
            <Button className="ml-2 mr-2" variant="danger" onClick={() => props.deleteRow(props.idx)}><i className="bi bi-trash3"/> Delete</Button>
            { !props.addend.disabled ? 
                <Button className="ml-2 mr-2" variant="secondary" onClick={() => props.setEnable(props.idx, true)}><i className="bi bi-toggle-on"/> Disable</Button> :
                <Button className="ml-2 mr-2" variant="success" onClick={() => props.setEnable(props.idx, false)}><i className="bi bi-toggle-off"/> Enable</Button> }
        </Row>
    )
}