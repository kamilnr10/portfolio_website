import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useForm, validate } from 'helpers/useForm';

const GetInTouchWrapper = styled.div`
  width: 100%;

  button {
    display: block;
    margin: 20px auto;
  }

  p {
    &:last-of-type {
      margin: 0 0 20px;
      text-align: center;
    }
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
`;

const Form = styled.form`
  padding: 0 10px;

  p {
    position: relative;
    top: 10px;
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const FormTitle = styled.h2``;

const Input = styled.input`
  width: 100%;
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

const TextArea = styled.textarea`
  display: block;
  position: relative;
  width: 100%;
  height: 100px;
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
  color: ${({ theme }) => theme.colors.line};
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.background};
  transition: 0.4s ease all;
  ${Input}:focus ~ &,
  ${Input}:not(:placeholder-shown)${Input}:not(:focus) ~ & {
    top: -14px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${TextArea}:focus ~ &,
  ${TextArea}:not(:placeholder-shown)${TextArea}:not(:focus) ~ & {
    top: -14px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 25px 0 0;
`;

const GitHubIcon = styled(FontAwesomeIcon)`
  margin: 0 0 0 5px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const TextWrapper = styled(Wrapper)`
  &:focus {
    outline: none;
  }

  label {
    position: absolute;
    top: 4px;
    left: 5px;
  }
`;

const FormTextArea = ({ id, name, type, values, handleChange, label, placeholder }) => {
  return (
    <TextWrapper>
      <TextArea name={name} id={id} type={type} value={values} onChange={handleChange} placeholder=" " />
      <Label htmlFor={name}>{name}</Label>
    </TextWrapper>
  );
};

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
    <FormWrapper>
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
        {errors.subject && <p>{errors.subject}</p>}
        <FormField
          label="email"
          name="email"
          id="email"
          type="text"
          placeholder="enter email here..."
          value={values.email}
          handleChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <FormTextArea
          label="message"
          name="message"
          id="message"
          type="text"
          placeholder="enter message here..."
          value={values.message}
          handleChange={handleChange}
          data-gramm="false"
        />
        {errors.message && <p>{errors.message}</p>}
        <Button type="submit">{sendMessage ? sendMessage : 'Send'}</Button>
      </Form>
    </FormWrapper>
  );
};

export const GetInTouch = ({ id }) => {
  return (
    <GetInTouchWrapper>
      <Header id={id}>Get in touch</Header>
      <p>I'm currently looking for new opportunities, my inbox is always open.</p>
      <Button>
        <a href="mailto:kamil.nr10@icloud.com?subject=hello! I have an opportunity for You!" target="_blank">
          Say hi
        </a>
      </Button>
      <p>or</p>
      <ContactForm />
    </GetInTouchWrapper>
  );
};
