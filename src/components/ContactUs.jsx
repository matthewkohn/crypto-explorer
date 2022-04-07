import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })
  const form = useRef()
  const navigate = useNavigate()

  function sendEmail(e) {
    e.preventDefault()
    // .sendForm(serviceID, templateID, templateParams, userID)
    emailjs.sendForm('service_yg5oyfg', 'template_nuhniqb', form.current, 'C5EneggP_VxuDkKFa')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
    alert("Message received.")
    navigate('/')
  }

  function handleInput(e) {
    const name = e.target.name
    let value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function clearForm() {
    setFormData({
      user_name: "",
      user_email: "",
      message: ""
    })
  }

  return (
    <ContactForm 
      component="form" 
      noValidate 
      autoComplete="off" 
      ref={form} 
      onSubmit={sendEmail}
    >
      <Typography variant="h6">Share your thoughts with us!</Typography>
      <TextField 
        label="Name"
        value={formData.user_name} 
        onChange={handleInput} 
        name="user_name"
      />
      <TextField 
        label="Email"
        value={formData.user_email} 
        onChange={handleInput} 
        type="email" 
        name="user_email" 
      />
      <TextField
        label="Message"
        multiline
        maxRows={4}
        value={formData.message} 
        onChange={handleInput} 
        name="message" 
      />
      <Button variant="contained" type="submit" value="Send" >
        SEND
      </Button>
      <Button variant="outlined" onClick={clearForm}>
        CLEAR
      </Button>
    </ContactForm>
  );
};

export default ContactUs

const ContactForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'space-between',
  height: '60vh',
  width: '70vw',
  margin: 'auto',
})