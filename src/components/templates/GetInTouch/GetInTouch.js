import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useForm, validate } from 'helpers/useForm';

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
  padding: 8px 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  position: relative;
  left: 5px;
  top: 4px;
  padding: 0 3px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: normal;

  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.background};

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
  margin: 25px 10px;
`;

const GitHubIcon = styled(FontAwesomeIcon)`
  margin: 0 0 0 5px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const FormField = ({ id, name, type, values, handleChange, label, placeholder }) => {
  return (
    <Wrapper>
      <Input name={name} id={id} type={type} value={values} onChange={handleChange} placeholder=" " />
      <Label htmlFor={name}>{name}</Label>
    </Wrapper>
  );
};

const ContactForm = () => {
  const { handleChange, values, handleSubmit, errors, sendMessage } = useForm(validate);
  // const [values, setValues] = useState('');

  // const handleChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div>
      <Form onSubmit={handleSubmit} noValidate>
        <FormTitle>Contact me</FormTitle>
        <FormField label="name" name="name" id="name" type="text" placeholder="enter name here..." value={values.name} handleChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
        <FormField
          label="subject"
          name="subject"
          id="subject"
          type="text"
          placeholder="enter subject here..."
          value={values.subject}
          handleChange={handleChange}
        />
        <FormField
          label="email"
          name="email"
          id="email"
          type="text"
          placeholder="enter email here..."
          value={values.email}
          handleChange={handleChange}
        />
        <Button type="submit">{sendMessage ? sendMessage : 'Send'}</Button>
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
