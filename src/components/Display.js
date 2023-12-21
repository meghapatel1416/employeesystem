import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import authfetch from '../axioshandler/interseptor';
// import { useState, CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";


export default function Display() {

  const [data,setData] =  useState([]);

  const [isloadded,setIsLoadded] = useState(false);

    useEffect(()=>{

        setIsLoadded(true);

        authfetch.get("/accounts").then(y=>{

            setData(y.data);
            setIsLoadded(false)
        });

    },[])

  return (
    <>
    

    {/* <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/> */}
    


    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>

        {
            data.map((value,index)=>{

                return (<tr><td>{value.title}</td><td>{value.firstName}</td>
                <td>{value.lastName}</td><td>{value.email}</td>
                <td>{value.password}</td><td>{value.confirmPassword}</td></tr>)
            })
        }
     
    </tbody>
  </Table>
  </>
  )
}