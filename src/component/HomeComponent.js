import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import moment from "moment";
import { ServiceContext } from "../context/currency-service/serviceContext";
import { CurrencyContext } from "../context/currency/currencyContext";
import { Text, Button, Content, Icon } from "native-base";
import { CustomDatePicker } from "./shared/CustomDataPicker";
import { CurrencyList } from "./shared/CurrencyList";

export const HomeComponent = () => {
  const { currencyService } = useContext(ServiceContext);
  const { currencyRates, setCurrencyRates } = useContext(CurrencyContext);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const allCurrency = await currencyService.getCurrencylatest();
        setCurrencyRates(allCurrency.rates)
        setLoading(false);
      } catch (err) {}
    })();
  }, []);

  const changeDate = async (Newdate) => {
    setShowDatePicker(false);
    setDate(Newdate);
    const transformNewDay = moment(Newdate).format("YYYY-MM-DD")
    const allCurrencyDay = await currencyService.getCurrencyDay(transformNewDay);
    setCurrencyRates(allCurrencyDay.rates)
  };

  if(loading){
    return <Text>Loading...</Text>
  }
  
  return (
    <View style={styles.wrapp}>

      <Button light onPress={() => setShowDatePicker(!showDatePicker)}>
        <Text style={{paddingRight: 0}}>{moment(date).format("LL")}</Text><Icon name={showDatePicker ? 'caret-up' : 'caret-down'}/>
      </Button>
      <Content style={{ flex: 1 }}>
        <CurrencyList currencyList={currencyRates}></CurrencyList>
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
