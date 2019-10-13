import React from 'react'
import { TextBoxComponent } from '../BasiceComponents/TextBoxComponent'
import { ButtonComponent } from '../BasiceComponents/ButtonComponent'
import { Container, Row, Col, FormControl } from 'react-bootstrap'
import '../../Css/ClaculatorStyle/claculator-style.css'
import Button from 'react-bootstrap/Button'

export class Calculator extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {

            inputtextbox: '',
        }

    }
    handleChange(name, value) {

        this.setState({ [name]: value });

    }
    callBack() {


    }
    // for(var i = 0; i< 10; i++) {
    //     <ButtonComponent name={`button` + i} onClick={this.handleChange.bind(this)} />

    makebutton() {


        const items = []
        const btnvalue = 0

        for (var i = 0; i < 10; i++) {

            items.push(<Col> <ButtonComponent id={i}
                className="" name={btnvalue} callBack={this.props.callBack} /> </Col>)
        }
        return items;
    }
    render() {

        var rows = [];
        var allButtons = this.makebutton();



        return (
            <Container  >
                <Row >
                    <Col className="justify-content-md-center" lg="3">
                        <Row >
                            <FormControl size="lg" type="text" placeholder="Large text"></FormControl>
                        </Row>

                        <Row>
                            <Container>
                                <Col>
                                    <Row>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>0</Button>

                                        </Col>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>1</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>2</Button>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>3</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>4</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>5</Button>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>6</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>7</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>8</Button>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>9</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-primary" size="lg" block>Clear</Button>
                                        </Col>
                                    </Row>

                                </Col>
                            </Container>
                           <Container>
                            <Col lg="1">
                                <Row>
                                    <Col>
                                        <Button variant="outline-primary" size="lg" block>0</Button>
                                    </Col>

                                </Row>
                            </Col>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container >
        )
    }

}
