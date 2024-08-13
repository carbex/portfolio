import styled from "@emotion/styled";

// Color kit
// const mainColor = 'rgba(131, 234, 241, 1)`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const File = styled.input`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  border-radius: 4px;
  border: solid 1px #8f8f9d;
`;
export const Textarea = styled.textarea`
  margin-bottom: 10px;
  border-radius: 4px;
  border: solid 1px #8f8f9d;
`;
export const ImageContainer = styled.div`
  max-width: 25%;
  border-radius: 4px;
  border: 1px solid lightgrey;
  margin-bottom: 10px;
`;
export const Image = styled.img`
  box-sizing: border-box;
  padding: 0.2rem;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
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
