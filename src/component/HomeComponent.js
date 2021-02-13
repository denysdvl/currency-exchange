import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import moment from "moment";
import { ServiceContext } from "../context/currency-service/serviceContext";
import { Text, Button, List, ListItem, Content, Icon } from "native-base";
import { CustomDatePicker } from "./shared/CustomDataPicker";

export const HomeComponent = () => {
  const { currencyService } = useContext(ServiceContext);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // const allCurrency = await currencyService.getCurrencylatest();
        setLoading(false);
      } catch (err) {}
    })();
  }, []);

  const changeDate = (Newdate) => {
    setShowDatePicker(false);
    setDate(Newdate);
  };
  return (
    <View style={styles.wrapp}>

      <Button light onPress={() => setShowDatePicker(!showDatePicker)}>
        <Text style={{paddingRight: 0}}>{moment(date).format("LL")}</Text><Icon name={showDatePicker ? 'caret-up' : 'caret-down'}/>
      </Button>
      <Content style={{ flex: 1 }}>
        <List>
          <ListItem>
            <Text>Simon Mignolet</Text>
          </ListItem>
          <ListItem>
            <Text>Nathaniel Clyne</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan Lovren</Text>
          </ListItem>
          <ListItem>
            <Text>Simon Mignolet</Text>
          </ListItem>
          <ListItem>
            <Text>Nathaniel Clyne</Text>
          </ListItem>
        </List>
      </Content>
      {showDatePicker && (
        <CustomDatePicker
          oldDate={date}
          onClose={() => setShowDatePicker(false)}
          onChangeDate={(Newdate) => changeDate(Newdate)}
        />
      )}
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-start",
  },
});
