import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  all: unset;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 20%;
`;

export const Label = styled.label`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary.purple[400]};
  text-align: right;
`;

export const Input = styled.input`
  all: unset;
  width: 90%;
  max-height: 36px;
  flex: 1;
  display: inline-flex;
  text-align: start;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary.purple[400]};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary.purple[200]};
  height: 35px;
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.purple[400]};
  }
`;

export const Select = styled.select`
  all: unset;
  width: 90%;
  max-height: 36px;
  flex: 1;
  display: inline-flex;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary.purple[400]};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary.purple[200]};
  height: 35px;
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.purple[400]};
  }
`;
export const Option = styled.option`
  background-color: ${({ theme }) => theme.colors.system.black[100]};
  color: ${({ theme }) => theme.colors.primary.purple[400]};
  padding: 8px;
  font-size: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.purple[100]};
  }

  &:selected {
    background-color: ${({ theme }) => theme.colors.primary.purple[200]};
    color: ${({ theme }) => theme.colors.system.black[100]};
  }
`;
