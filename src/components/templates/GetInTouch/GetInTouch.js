import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  padding: 5px 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: normal;
  position: relative;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.background};
  left: 5px;
  top: -2px;
  transition: 0.2s ease all;
  ${Input}:focus ~ &,
  ${Input}:not(:placeholder-shown)${Input}:not(:focus) ~ & {
    top: -14px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 20px 10px;

  input {
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
  }
`;

const GitHubIcon = styled(FontAwesomeIcon)`
  margin: 0 0 0 5px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const FormField = ({ id, name, type, values, handleChange, label, placeholder }) => {
  return (
    <Wrapper>
      <Input name={name} id={id} type={type} value={values} onChange={handleChange} placeholder=" " />
      <Label for={name}>{name}</Label>
    </Wrapper>
  );
};

const ContactForm = () => {
  const [values, setValues] = useState('');

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
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
      </Form>
    </div>
  );
};

export const GetInTouch = ({ id }) => {
  return (
    <div>
      <Header id={id}>Get in touch</Header>
      <p>I'm currently looking for new opportunities, my inbox is always open.</p>
      <Button>
        <a href="mailto:kamil.nr10@icloud.com?subject=hello! I have an opportunity for You!" target="_blank">
          Say hi
        </a>
      </Button>
      <ContactForm />
    </div>
  );
};
