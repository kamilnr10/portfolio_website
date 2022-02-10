import { TextWrapper } from './FormTextArea.styles';
import { TextArea } from 'components/atoms/TextArea/TextArea';
import { Label } from 'components/atoms/Label/Label';

export const FormTextArea = ({ id, name, type, values, handleChange, label, placeholder }) => {
  return (
    <TextWrapper>
      <TextArea name={name} id={id} type={type} value={values} onChange={handleChange} placeholder=" " />
      <Label htmlFor={name}>{name}</Label>
    </TextWrapper>
  );
};
