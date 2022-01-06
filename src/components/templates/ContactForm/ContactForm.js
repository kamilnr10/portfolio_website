import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Form = styled.form`
  width: 100%;
  border: none;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
`;

const FormTitle = styled.h2``;

const Input = styled.input`
  position: relative;
  font-size: 18px;
  display: block;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: normal;
  position: relative;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.background};
  left: 5px;
  top: -2px;
  transition: 0.2s ease all;
  ${Input}:focus ~ & {
    top: -14px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 10px 0;

  input {
    position: absolute;
    top: 0px;
    left: 0px;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
  }
`;

const GitHubIcon = styled(FontAwesomeIcon)`
  margin: 0 0 0 5px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const FormTextArea = styled.textarea``;

const FormField = ({ id, name, type, values, handleChange, label, placeholder }) => {
  return (
    <Wrapper>
      <Input name={name} id={id} type={type} value={values} onChange={handleChange} />
      <Label for={name}>{name}</Label>
    </Wrapper>
  );
};

export const ContactForm = () => {
  const [values, setValues] = useState('');

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <NavLink to="/" exact>
        Return
        <GitHubIcon icon={faHome} />
      </NavLink>
      <Form>
        <FormTitle>Contact me</FormTitle>
        <FormField label="name" name="name" id="name" type="text" placeholder="enter name here..." value={values} handleChange={handleChange} />
        <FormField
          label="subject"
          name="subject"
          id="subject"
          type="text"
          placeholder="enter subject here..."
          value={values}
          handleChange={handleChange}
        />
        <FormField label="email" name="email" id="email" type="text" placeholder="enter email here..." value={values} handleChange={handleChange} />
        <FormTextArea></FormTextArea>
      </Form>
    </div>
  );
};
