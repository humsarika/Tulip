import React,{useRef} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid';

export default function Login({onIdSubmit}) {
    const idRef = useRef()
    function handleSubmit(e){
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }
    function createNewId(){
        onIdSubmit(uuidV4())
    }
  return (
    <Container className='align-items-center d-flex' style={{height:'100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>Enter Your ID </Form.Label>
                <Form.Control type="text" ref={idRef} required />
                <Button type='submit' className='mr-6'>Login</Button>
                <Button onClick={createNewId} variant='secondary'>Create a new Account</Button>
            </Form.Group>
        </Form>
    </Container>
  )
};

