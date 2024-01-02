import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import authfetch from '../axioshandler/interseptor';
import LanguageContex1 from '../pages/LanguageContex1';

export default function RegistrationForm() {
  const {lan}= useContext(LanguageContex1)

  const languageObject= {
 
 
   "en" : {
 
     "firstName": "firstName",
     "lastName": "lastName"
 
   },
   "hi": {
     "firstName": "pratha name",
     "lastName": "akhri name"
   }
 
 
 
 
  }

  const [form,setform] = useState({
    title : "",
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    acceptTerms:false



  })

  const handleInput = (e)=>{
    if(e.target.type=="checkbox")
    {
      setform({...form,[e.target.name] : e.target.checked})
    }
    else
    {
    setform({...form,[e.target.name] : e.target.value})
    }

  }

  const handleSubmit = (e)=>{

    e.preventDefault();
    console.log(form);

    authfetch.post("accounts/register",form)
    .then(y=>{
      console.log(y)
    }).catch(y=>{

      console.log(y);
    })



  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="" >
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Please Title" 
      name='title' onChange={handleInput} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
    <Form.Label>{languageObject[lan].firstName}</Form.Label>
      {/* <Form.Label>FirstName</Form.Label> */}
      <Form.Control type="text" placeholder="Please Enter First Name" 
      name='firstName' onChange={handleInput} />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="">
    <Form.Label>{languageObject[lan].lastName}</Form.Label>
      {/* <Form.Label>LastName</Form.Label> */}
      <Form.Control type="text" placeholder="Please Enter Last Name"
      name='lastName' onChange={handleInput} 
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" 
      placeholder="Please Enter Email "
      title='email' name='email' onChange={handleInput} />   
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" 
      placeholder="Please Enter Password"
      title='password' name='password' onChange={handleInput} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="text" 
      placeholder="Please Enter Confirm Password "
      title='confirm password' name='confirmPassword' onChange={handleInput} />
    </Form.Group>
  
    
    <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="accept Terms"
        name='acceptTerms' onChange={handleInput}
      />

<Button type='submit' variant="primary" >Save</Button>
<Button type='reset' variant="danger">Cancel</Button>

    
  </Form>
  )
}
