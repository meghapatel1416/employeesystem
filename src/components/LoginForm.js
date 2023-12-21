import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import authfetch from '../axioshandler/interseptor';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

  const navi = useNavigate();
  const [form,setform] =useState({
    email:"",
    password:""
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    authfetch.post("/accounts/authenticate",form).then(y=>{
      //for redirect to home page
      localStorage.setItem("userInfo",JSON.stringify(y.data));
  
      navi("/home");
      // console.log(y.data)
  
    }).catch(y=>{

    })
  }

  const handleInput = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Please Enter Email" 
    name='email' onChange={handleInput} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Please Enter Password" 
    name='password' onChange={handleInput} />
  </Form.Group>
  
  <Button type='submit' variant="primary" >Login</Button>
  
</Form>
  )
}
