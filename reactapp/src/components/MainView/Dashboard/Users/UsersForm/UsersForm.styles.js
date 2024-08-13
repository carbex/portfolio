import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Select = styled.select`
  padding: 5px 0 5px 0;
  margin-bottom: 10px;
  border: 1px solid #8f8f9d;
  border-radius: 4px;
`;
export const Input = styled.input`
  border: 1px solid #8f8f9d;
  margin: 0 0 10px 0;
  border-radius: 4px;
`;
export const Textarea = styled.textarea`
  margin-bottom: 10px;
  border-radius: 4px;
  border: solid 1px #8f8f9d;
`;
export const ButtonPrimary = styled.button`
  font-size: 1.3rem;
  color: white;
  background-color: rgba(44, 219, 232, 0.8);
  border: 1px solid white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;
  padding: 10px;

  &:hover {
    box-shadow: 10px 5px 10px lightgrey;
    background-color: rgba(44, 219, 232, 1);
  }
`;
export const ButtonSecondary = styled.button`
  font-size: 1.3rem;
  color: white;
  background-color: rgba(117, 125, 138, 0.8);
  border: 1px solid white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;
  padding: 10px;

  &:hover {
    box-shadow: 10px 5px 10px lightgrey;
    background-color: rgba(117, 125, 138, 1);
  }
`;
export const ButtonDanger = styled.button`
  font-size: 1.3rem;
  color: white;
  background-color: rgba(240, 128, 128, 0.8);
  border: 1px solid white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;
  padding: 10px;

  &:hover {
    box-shadow: 10px 5px 10px lightgrey;
    background-color: rgba(240, 128, 128, 1);
  }
`;
