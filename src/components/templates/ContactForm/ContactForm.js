import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FormField } from 'components/molecules/FormField/FormField';
import { FormTextArea } from 'components/molecules/FormTextArea/FormTextArea';
import { useForm, validate } from 'helpers/useForm';

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
    text-align: left;

    &:nth-child(9) {
      top: 0;
    }
  }
`;

const FormTitle = styled.h2``;

export const ContactForm = () => {
  const { handleChange, values, handleSubmit, errors, sendMessage } = useForm(validate);

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
