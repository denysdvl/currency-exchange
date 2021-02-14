import React, {useState} from 'react'
import { Icon } from "native-base";
import RNPickerSelect from 'react-native-picker-select';
export const SelectBaseCurrency = ({selectCurrency, selectList, setSelect}) => {
  const [baseCurrency, setBaseCurrency] = useState(selectCurrency);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const newCurrencyArray = selectList.map(item => {
    const label = item 
    const value = item 
    return {label, value}
  })

  const pickerStyle = {
    inputIOS: {
      fontSize: 14,
      paddingVertical: 10,
      paddingHorizontal: 32,
      borderWidth: 1,
      borderColor: '#007aff',
      backgroundColor: '#007aff',
      borderRadius: 8,
      height: 45,
      color: 'white',
      justifyContent: 'center',
      paddingRight: 48,
      alignItems: 'center'
    },
    placeholder: {
        color: 'white',
      },
    inputAndroid: {
        color: 'white',
        paddingHorizontal: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
};

    return (
      <RNPickerSelect
      style={pickerStyle}
      onValueChange={(value) => setBaseCurrency(value)}
      onDonePress={() => setSelect(baseCurrency)}
      onOpen={() => setShowDatePicker(true)}
      onClose={() => setShowDatePicker(false)}
      useNativeAndroidPickerStyle={false}
      value={baseCurrency}
      Icon={() => <Icon name={showDatePicker ? "caret-up" : "caret-down"} style={{fontSize: 24, color: 'white', top: 10, right: 16}} />}
      textInputProps={{label: selectCurrency, value: selectCurrency}}
      items={newCurrencyArray}
  />
    )
}

export default SelectBaseCurrency

