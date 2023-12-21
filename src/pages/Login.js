import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import { LoginForm } from '../components/LoginForm';

export default function Login() {
  return (
    <Row>
    <Col>
    <LoginForm/>
    </Col>
  </Row>
  )
}
