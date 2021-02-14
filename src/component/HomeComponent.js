import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import moment from "moment";
import { ServiceContext } from "../context/currency-service/serviceContext";
import { CurrencyContext } from "../context/currency/currencyContext";
import { Text, Button, Content, Icon } from "native-base";
import { CustomDatePicker } from "./shared/CustomDataPicker";
import { CurrencyList } from "./shared/CurrencyList";
import { LoadingComponent } from "./shared/LoadingComponent";
import { SelectBaseCurrency } from "./shared/SelectBaseCurrency";

export const HomeComponent = () => {
  const { currencyService } = useContext(ServiceContext);
  const { currencyRates, setCurrencyRates, setLoading, loading, ratesNames, setRatesName, baseCurrency, setBaseCurrency, dateRates, setDateRates } = useContext(CurrencyContext);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    (() => {
     updataCurrency(dateRates, baseCurrency)
    })();
  }, []);
  
  const changeDate = async (NewDate) => {
    setShowDatePicker(false);
    setDateRates(NewDate);
    updataCurrency(NewDate, baseCurrency);
  };

  const updataCurrency = async (date, base) => {
    setLoading(true);
    try {
      const transformDay = moment(date).format("YYYY-MM-DD");
      const allCurrency = await currencyService.getCurrency(transformDay, base);
      setRatesName(allCurrency.ratesNames);
      setCurrencyRates(allCurrency.rates);
      setBaseCurrency(allCurrency.base)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const updateBaseCurrency = (base) => {
    setBaseCurrency(base);
    updataCurrency(dateRates, base);
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
        <Text>Selected currency</Text>
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
    borderColor: 'grey'
  }
});
