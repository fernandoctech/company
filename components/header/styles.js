import styled from 'styled-components/native';

export const Container = styled.View`
  height: 150px;
  width: 100%;
  background:  #2948ff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UsernameText = styled.Text`
    font-size: 25px;
    color: white;
`;
export const SpaceButtons = styled.View`
    margin-top:200px;
  color:white;
  width: 97%;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
`;
export const HeaderContent = styled.View`
  width: 97%;
  height: 200px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  background-color: #E2E2E2;
  font-size: 20px;
  border-radius: 20px;
`;
