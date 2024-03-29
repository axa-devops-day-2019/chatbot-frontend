import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

function Documentation() {
  return (
    <Container>
      <br/>
      <h1>Documentation</h1>
      <h2>Goals</h2>
      <p>The application is a simple <b>finance chatbot</b> running on the <b>AWS platform</b> with the following specificities:</p>
      <ul>
        <li><b>Multi-lingual</b></li> 
        <li><a href="https://aws.amazon.com/serverless/" target="external">Serverless</a> architecture</li>
        <li><b>Automated deployment</b> (CI/CD)</li>
      </ul>
      <ButtonToolbar>
        <Link to='/'>
          <Button variant="primary">Access the chatbot demo</Button>
        </Link>
      </ButtonToolbar>
      <br/>
      <h2>Features</h2>
      <p>The chatbot demo support the following <b>features</b>:</p>
      <ul>
        <li>Context persistence (stored client side)</li>
        <li><a href="https://github.com/axa-group/nlp.js/blob/master/docs/slot-filling.md" target="external">Slot filling</a></li>
        <li>Confirmation</li>
        <li>Conversation hints</li>
        <li>Responsive design</li>
      </ul>
      <h3>Use Cases</h3>
      <p>The following <b>use cases</b> have been implemented:</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th style={{textAlign:'center'}}>English</th>
            <th style={{textAlign:'center'}}>French</th>
            <th style={{textAlign:'center'}}>Spanish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Get credit card limit</th>
            <td style={{textAlign:'center'}}>ex: What is my current withdrawal limit?</td>
            <td style={{textAlign:'center'}}>ex: Quel est mon plafond de paiement actuel ?</td>
            <td style={{textAlign:'center'}}>ex: ¿Cuál es mi límite actual?</td>
          </tr>
          <tr>
            <th>Modify credit card limit</th>
            <td style={{textAlign:'center'}}>ex: I want to change my withdrawal limit</td>
            <td style={{textAlign:'center'}}>ex: Je veux augmenter mon plafond de retrait mensuel</td>
            <td style={{textAlign:'center'}}>ex: ¿Pueden cambiar el límite de mi tarjeta de crédito?</td>
          </tr>
          <tr>
            <th>Help</th>
            <td style={{textAlign:'center'}}>ex: What can you do?</td>
            <td style={{textAlign:'center'}}>ex: J'ai besoin d'aide</td>
            <td style={{textAlign:'center'}}>ex: ¿Me puedes ayudar?</td>
          </tr>
          <tr>
            <th>Chitchat</th>
            <td style={{textAlign:'center'}}>ex: You are so smart</td>
            <td style={{textAlign:'center'}}>n/a</td>
            <td style={{textAlign:'center'}}>n/a</td>
          </tr>
        </tbody>
      </Table>
      <h2>Technical Architecture</h2>
      <h3>Chatbot engine</h3>
      <p>This chatbot demo leverages the <a href="https://github.com/axa-group/nlp.js" target="external">nlp.js</a> open source chatbot engine, built by AXA.
      This engine supports 29 languages and is already used it in production for insurance use cases.</p>
      <h3>Architecture Diagram</h3>
      <Image src="archi.png" fluid />
      <h2>TODO</h2>
      <ul>
        <li>Add additional languages</li>
        <li>Add additional business use cases</li>
        <li>Support chitchat in all languages</li>
        <li>Improve slot filling error handling</li>
        <li>Implement conversation analytical features</li>
      </ul>
    </Container>
  );
}

export default Documentation;
