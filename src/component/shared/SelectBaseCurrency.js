import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
export const SelectBaseCurrency = ({selectCurrency, selectList, setSelect}) => {
  const [baseCurrency, setBaseCurrency] = useState(selectCurrency);

  const newCurrencyArray = selectList.map(item => {
    const label = item 
    const value = item 
    return {label, value}
  })

    return (
      <RNPickerSelect
      style={styles}
      onValueChange={(value) => setBaseCurrency(value)}
      onDonePress={() => setSelect(baseCurrency)}
      useNativeAndroidPickerStyle={false}
      value={baseCurrency}
      textInputProps={{label: selectCurrency, value: selectCurrency}}
      items={newCurrencyArray}
  />
    )
}

export default SelectBaseCurrency

const styles = StyleSheet.create({
  pickerCurrency: {
    borderBottomColor: 'blue',
    color: '#000'
  }
})
