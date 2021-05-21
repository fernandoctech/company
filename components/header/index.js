import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import { Container, HeaderContent, SpaceButtons, UsernameText } from './styles';

const header = (props) => {
  return (
    <Container>
        <SpaceButtons>
            <UsernameText >
                Fernando
            </UsernameText>
            <TouchableOpacity>
                <Icon name="menu" size={30} color="#fff" />
            </TouchableOpacity>
        </SpaceButtons>
        <HeaderContent>

        </HeaderContent>
    </Container>
  );
}

export default header;