import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: 25px 0 0;
`;

export const TextWrapper = styled(Wrapper)`
  &:focus {
    outline: none;
  }

  label {
    position: absolute;
    top: 4px;
    left: 5px;
  }
`;
