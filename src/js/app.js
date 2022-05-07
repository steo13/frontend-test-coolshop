import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

import AddButton from './components/AddButton';
import AddendRow from './components/AddendRow';
import '../css/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {sign: true, value: 0, disabled: false},
        {sign: true, value: 10, disabled: false},
        {sign: true, value: 20, disabled: false}
      ]
    };
  }

  setEnable = (idx, value) => {
    let newRows = [...this.state.rows]
    newRows[idx]['disabled'] = value
    this.setState({rows: newRows})
  }

  setNumber = (idx, value) => {
    let newRows = [...this.state.rows]
    newRows[idx]['value'] = value
    this.setState({rows: newRows})
  }

  setSign = (idx, value) => {
    let newRows = [...this.state.rows]
    newRows[idx]['sign'] = value
    this.setState({rows: newRows})
  }

  deleteRow = (idx) => {
    let newRows = [...this.state.rows]
    this.setState({rows: newRows.filter((_, i) => i !== idx)})
  }
  
  render() {
    return (
      <Container fluid className='cool-container'>
        <Row className='mt-4 mb-3 ml-4'>
          <AddButton rows={this.state.rows} addNewRow={() => this.setState({rows: [...this.state.rows, {sign: true, value: 0, disabled: false}]})}/>
          <Col>
            <Form.Label column="lg" style={{color: "white"}}>
              <i className="bi bi-calculator"/> 
              {' Result:'} {this.state.rows.filter(v => !v['disabled'])
                                      .map(v => v['value'] ? v['sign'] ? parseFloat(v['value']) : -parseFloat(v['value']) : 0)
                                      .reduce((add1, add2) => add1 + add2, 0)}
            </Form.Label>
          </Col>
        </Row>
        {
          this.state.rows.map((row, idx) => { return (
            <AddendRow key={idx} idx={idx} addend={row} setEnable={this.setEnable} setNumber={this.setNumber} setSign={this.setSign} deleteRow={this.deleteRow}/>
          )})
        }
      </Container>
    )
  }

};

export default App;