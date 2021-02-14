import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import { Text } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';


export const CustomDatePicker  = ({onClose, onChangeDate, oldDate}) =>  {
    const [date, setDate] = useState(new Date());

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && (
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerBtn} onPress={onClose}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBtn} onPress={() => onChangeDate(date)}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        )}
        <DateTimePicker
          value={date}
          mode="date"
          maximumDate={new Date()}
          minimumDate={new Date(2018, 1, 1)}
          display="spinner"
          onChange={(e, d) => setDate(d)}
          style={{ backgroundColor: 'white' }}
       />
     </View>
   );
}

export default CustomDatePicker;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  headerBtn : {
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  container: {
    backgroundColor: '#e9e9e9',
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
  }
})