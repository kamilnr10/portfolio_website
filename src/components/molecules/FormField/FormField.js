import { Wrapper } from './FormField.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

export const FormField = ({ id, name, type, values, handleChange, label, placeholder }) => {
  return (
    <Wrapper>
      <Input name={name} id={id} type={type} value={values} onChange={handleChange} placeholder=" " />
      <Label htmlFor={name}>{name}</Label>
    </Wrapper>
  );
};
