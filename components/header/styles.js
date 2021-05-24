import styled from 'styled-components/native';

export const Container = styled.View`
  height: 180px;
  width: 100%;
  background:  #2948ff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UsernameText = styled.Text`
    font-size: 18px;
    color: white;
    margin-left: 5px;
`;
export const User = styled.View`
display:flex;
flex-direction: row;
align-items: center;
`;
export const SpaceButtons = styled.View`  
  margin-top:150px;
  color:white;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 8px;
`;
export const Imagecontent = styled.Image`
width: 50px;
height: 50px;
border-radius: 5px;
`;
export const HeaderContent = styled.View`
  width: 95%;
  height: 100px;
  margin: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 50px 50px 50px black;
`;
export const SaldoText = styled.Text`
  font-size: 30px;
  color: #2948ff;
`;
export const SaldoView = styled.View`
flex-direction: row;
align-items: center;
width: 100%;
padding: 30px;
justify-content: space-around;
`;
