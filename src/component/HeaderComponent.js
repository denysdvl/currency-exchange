import React from 'react'
import { StyleSheet} from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

export const HeaderComponent = ({isGoToBackPage, isGoToSettings, titel}) => {
    return (
        <Header>
          <Left>
           {isGoToBackPage &&
            (<Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>)}
          </Left>
          <Body>
            <Title>{titel}</Title>
          </Body>
          <Right>
          {isGoToSettings &&
           (<Button transparent onPress={() => Actions.settingsScreen()}>
              <Icon name='settings' />
            </Button>)}
          </Right>
        </Header>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({})
