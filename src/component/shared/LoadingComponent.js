import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

export const LoadingComponent = () => {
  return (
    <View style={styles.wrappLoading}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  wrappLoading: {
    flex: 1,
    justifyContent: "center",
  },
});
