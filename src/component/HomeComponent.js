import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import moment from "moment";
import { ServiceContext } from "../context/currency-service/serviceContext";
import { CurrencyContext } from "../context/currency/currencyContext";
import { Text, Button, Content, Icon, Toast} from "native-base";
import { CustomDatePicker } from "./shared/CustomDataPicker";
import { CurrencyList } from "./shared/CurrencyList";
import { LoadingComponent } from "./shared/LoadingComponent";
import { SelectBaseCurrency } from "./shared/SelectBaseCurrency";
import { Actions } from 'react-native-router-flux';

export const HomeComponent = ({baseCurrency, dateRates}) => {
  const { currencyService } = useContext(ServiceContext);
  const { currencyRates, setCurrencyRates, setLoading, loading, ratesNames, setRatesName } = useContext(CurrencyContext);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    (() => {
     updataCurrency();
    })();
  }, []);
  
  const changeDate = async (day) => {
    setShowDatePicker(false);
    const base = baseCurrency;
    Actions.homeScreen({ day, base });
  };

  const showToast = (text) => {
    Toast.show({
    text,
    position: 'bottom',
    duration: 7000,
    type: 'danger'});
  };

  const updataCurrency = async () => {
    setLoading(true);
    try {
      const transformDay = moment(dateRates).format("YYYY-MM-DD");
      const allCurrency = await currencyService.getCurrency(transformDay, baseCurrency);
      setRatesName(allCurrency.ratesNames);
      setCurrencyRates(allCurrency.rates);
    } catch (err) {
      showToast(err.message);
      Actions.pop()
    } finally {
      setLoading(false);
    }
  }

  const updateBaseCurrency = (base) => {
    const day = dateRates;
    Actions.homeScreen({ day, base });
  }

  if (loading) {
    return (<LoadingComponent ></LoadingComponent>)
  }

  return (
    <View style={styles.wrapp}>
      <View style={styles.wrappSelect}>
        <Button onPress={() => setShowDatePicker(!showDatePicker)}>
          <Text style={{ paddingRight: 0 }}>{moment(dateRates).format("LL")}</Text>
          <Icon name={showDatePicker ? "caret-up" : "caret-down"} />
        </Button>
        <SelectBaseCurrency selectList={ratesNames} selectCurrency={baseCurrency} setSelect={(item) => updateBaseCurrency(item)}></SelectBaseCurrency>
      </View>
      <Content style={{ flex: 1 }}>
        <CurrencyList currencyList={currencyRates}></CurrencyList>
      </Content>
      {showDatePicker && (
        <CustomDatePicker
          oldDate={dateRates}
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
  wrappSelect: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: 'grey',
  }
});
