import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { FormField } from 'components/molecules/FormField/FormField';
import { FormTextArea } from 'components/molecules/FormTextArea/FormTextArea';
import { useForm, validate } from 'helpers/useForm';
import { FormWrapper, Form, FormTitle } from './ContactForm.styles';

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
