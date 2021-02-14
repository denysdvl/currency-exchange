import React from "react";
import { StyleSheet } from "react-native";
import { Text, List, ListItem} from "native-base";

export const CurrencyList = ({ currencyList }) => {
  return (
    <List>
      {currencyList.map((item, id) => {
        return (
          <ListItem key={id} style={styles.listItem}>
            <Text>{item[0]}</Text>
            <Text>{item[1]}</Text>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CurrencyList;

const styles = StyleSheet.create({
  listItem: {
    justifyContent: "space-between",
    paddingHorizontal: 32,
    marginLeft: 0,
  },
});
