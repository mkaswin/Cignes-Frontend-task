import React from 'react'
import { Button, Col, Form, Row } from "react-bootstrap";

function App() {
  return (
    <div  >
      <h1 className='text-3xl text-center font-semibold my-7 uppercase '>
        students registration form
      </h1>
      <div className='ml-10 items-center'>
        <Form className='p-1'>
          <Form.Group as={Row} className="mb-3 uppercase" controlId="formPlaintextEmail">
            <Form.Label column sm="1">
              Student name
            </Form.Label>
            <Col sm="2">
              <Form.Control type='text' />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 uppercase" controlId="formPlaintextPassword">
            <Form.Label column sm="1">
              mobile number
            </Form.Label>
            <Col sm="2">
              <Form.Control type="text" placeholder="Mobile" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 uppercase" controlId="formPlaintextPassword">
            <Form.Label column sm="1">
              Date of birth
            </Form.Label>
            <Col sm="2">
              <Form.Control type="date" placeholder="Mobile" />
            </Col>
          </Form.Group>
        </Form>
        <div>
        <Form className='flex items-center uppercase '>
        <Form.Label column sm="1">
            Gender
            </Form.Label>
      {['male', 'female'].map((type) => (
        <div key={`${type}`} className="mb-3 p-3">
          <Form.Check 
            
            label={`${type}`}
          />
          
          <Col sm="2"/>

          
        </div>
      ))}
    </Form>
        </div>
        <div >
        <Form.Label className='mt-4 flex' >
            COURSE
            <Col sm="1"/>
        <Form.Select className='h-10 w-52'>
          <option>Flutter</option>
          <option value="1">Bsc computer science</option>
          <option value="2">bca</option>
          <option value="3">Mern stack</option>       
        </Form.Select>
        </Form.Label>
        </div>
        <div>
        <Form className='mt-5 p-2'>
          <Form.Group as={Row} className="mb-3 uppercase" controlId="formPlaintextEmail">
            <Form.Label column sm="1">
              Course method
            </Form.Label>
              <Col sm="2">
              
              <Form>
                {['Hybrid'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                     
                      id={`${type}`}
                      label={`${type}`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                {['Offline'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                     
                      id={`${type}`}
                      label={`${type}`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                {['Online'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                     
                      id={`${type}`}
                      label={`${type}`}
                    />
                  </div>
                ))}
              </Form>
            </Col>
          </Form.Group>
          </Form>
        </div>
          <div>
          <Form className='mt-2 p-2'>
          <Form.Group as={Row} className="mb-3 uppercase">
            <Form.Label column sm="1">
              Profile Photo
            </Form.Label>
            <Col sm="2">
              <Form.Control type='file' />
            </Col>
          </Form.Group>
          </Form>
          </div>
      </div>
      <div >
      <Form className='mt-2 p-2 ml-9'>
          <Form.Group as={Row} className="mb-3 uppercase ">
            <Form.Label column sm="1">
              Id proof
            </Form.Label>
            <Col sm="2">
              <Form.Control type='file' />
            </Col>
          </Form.Group>
          </Form>
      </div>
      <div >
        <Form.Label className='mt-4 flex ml-11' >
            Country
            <Col sm="1"/>
        <Form.Select className='h-10 w-52'>
          <option>germany</option>
          <option value="1">India</option>
          <option value="2">switserland</option>
          <option value="3">Australia</option>       
          <option value="3">Iceland</option>       
          <option value="3">ukrain</option>       
        </Form.Select>
        </Form.Label>
        </div>
        <Button className='bg-slate-800 mt-2 ml-40 '>Submit</Button>
        
      </div>
  )
}

export default App

