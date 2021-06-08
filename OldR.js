import * as React from 'react';
import { Text, View, StyleSheet,Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

var H = 486;

export default function OldR(){
    const styles = StyleSheet.create({
        main:{
            width: '100%',
            height: H
        },
        time:{
            width:310,
            alignSelf:'center',
            marginTop: 10,
            backgroundColor:'#ffc266',
            height: H/7
        },
        type:{
            width:310,
            alignSelf:'center',
            backgroundColor:'#b3d9ff',
            height: H/7
        },
        category:{
            width:310,
            alignSelf:'center',
            backgroundColor:'#ccffcc',
            height: H/3
        },
        amount:{
            width:310,
            alignSelf:'center',
            backgroundColor:'#ff4d94',
            height: H/7,
            marginBottom: H/20
        },
        submit:{
            width:310,
            alignSelf:'center',
            backgroundColor:'#ffff00',
            height: H/7,
            marginBottom: 10
        }
    });

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    
    return(
        <View style={styles.main}>
            <View style={styles.time}>
                <Button
                    title="Show Date Picker"
                    onPress={showDatePicker}
                />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <View style={styles.type}>
                <Text>type</Text>
            </View>
            <View style={styles.category}>
                <Text>category</Text>
            </View>
            <View style={styles.amount}>
                <Text>amount</Text>
            </View>
            <View style={styles.submit}>
                <Text>submit</Text>
            </View>
        </View>
    );
}