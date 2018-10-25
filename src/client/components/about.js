import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap'

const About = () => {
    return <div className="sample">
    <Grid>
    <Row className="show-grid">
      <Col xs={12} md={8}>
        <code>{'<Col xs={12} md={8} />'};</code>
      </Col>
      <Col xs={6} md={4}>
        <code>{'<Col xs={6} md={4} />'}</code>
      </Col>
    </Row>
  
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <code>{'<Col xs={6} md={4} />'}</code>
      </Col>
      <Col xs={6} md={4}>
        <code>{'<Col xs={6} md={4} />'}</code>
      </Col>
      <Col xsHidden md={4}>
        <code>{'<Col xsHidden md={4} />'}</code>
      </Col>
    </Row>
  
    <Row className="show-grid">
      <Col xs={6} xsOffset={6}>
        <code>{'<Col xs={6} xsOffset={6} />'}</code>
      </Col>
    </Row>
  
    <Row className="show-grid">
      <Col md={6} mdPush={6}>
        <code>{'<Col md={6} mdPush={6} />'}</code>
      </Col>
      <Col md={6} mdPull={6}>
        <code>{'<Col md={6} mdPull={6} />'}</code>
      </Col>
    </Row>
  </Grid>;
    </div>
};

export default About;