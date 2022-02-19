import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
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

export const FormTitle = styled.h2``;
