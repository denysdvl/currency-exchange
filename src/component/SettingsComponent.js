import React, { useContext, useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Content, Item, Text, Input, Button, Toast } from "native-base";
import { CurrencyContext } from "../context/currency/currencyContext";
import { Actions } from 'react-native-router-flux';
import * as SecureStore from 'expo-secure-store';

export const SettingsComponent = () => {
  const { setIntervalUpdate, intervalUpdate } = useContext(CurrencyContext);
  const intervalValue = (intervalUpdate/1000).toString();
  const [interval, setInterval] = useState(intervalValue);

  const saveintervalUpdate = async () => {
    try {
      const transformInterval = +interval*1000;
      await SecureStore.setItemAsync('interval_secure', transformInterval.toString())
      setIntervalUpdate(transformInterval)
      Keyboard.dismiss();
      showToast('successful', "success")
    } catch (error) {
      showToast(error, "danger" )
    } 

  }

  const showToast = (text, type) => {
    Toast.show({
    text,
    position: 'bottom',
    duration: 5000,
    type});
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Content style={{ flex: 1}}>
        <View style={styles.wrapp}>
          <Text style={{ paddingRight: 0, paddingBottom: 8 }}>
            Refresh interval (s)
          </Text>
          <Item style={{ width: 128 }}>
            <Input
              value={interval}
              autoCompleteType={"cc-number"}
              keyboardType={"numeric"}
              onChangeText={setInterval}/>
          </Item>
            <Button style={{ marginTop: 64 }} success block onPress={() => saveintervalUpdate()}>
              <Text>
                SAVE 
              </Text>
            </Button>
            <Button style={{ marginTop: 32 }} danger block onPress={() => Actions.pop()}>
              <Text>
                BACK
              </Text>
            </Button>
        </View>
      </Content>
    </TouchableWithoutFeedback>
  );
};

export default SettingsComponent;

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
    height: "100%",
    paddingVertical: 32,
    paddingHorizontal: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
