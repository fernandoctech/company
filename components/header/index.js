import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import { Container, HeaderContent, Imagecontent, SaldoText, SaldoView, SpaceButtons, User, UsernameText } from './styles';

const header = (props) => {
  return (
    <Container>
        <SpaceButtons>
          <User>
            <Imagecontent source={{
              uri:'https://avatars.githubusercontent.com/u/54411693?s=400&u=d9e28a5889b24329b57e25132c4df2c958dc064b&v=4'
            }}/>
              <UsernameText  >
                  Fernando
              </UsernameText>
          </User>
            <TouchableOpacity>
                <Icon name="menu" size={30} color="#fff" />
            </TouchableOpacity>
        </SpaceButtons>
        <HeaderContent>
          <SaldoView>
            <SaldoText>
             R$ 240,00
            </SaldoText>
            <TouchableOpacity >
              <Icon name='visibility' size={30} color="#2948ff"/>
            </TouchableOpacity>
          </SaldoView>
        </HeaderContent>
    </Container>
  );
}

export default header;