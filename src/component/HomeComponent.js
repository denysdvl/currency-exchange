import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ServiceContext } from "../context/currency-service/serviceContext";

export const HomeComponent = () => {
  const { currencyService } = useContext(ServiceContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const allCurrency = await currencyService.getCurrencylatest();
        setLoading(false);
      } catch (err) {
      }
    })();
  }, []);

  return (
		<View>
			{loading ? <Text>loading...</Text> : <Text>home</Text>}
		</View>
		);
};

export default HomeComponent;

const styles = StyleSheet.create({});
