import React from 'react'
import { StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export const HeaderComponent = ({isBackPage, titel}) => {
    return (
        <Container>
        <Header>
          <Left>
           {isBackPage &&
            (<Button transparent>
              <Icon name='arrow-back' />
            </Button>)}
          </Left>
          <Body>
            <Title>{titel}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='settings' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({})
