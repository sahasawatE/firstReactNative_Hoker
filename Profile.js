import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default function Profile(){
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#f9bdd5',
            height: 800
        },
        main:{
            width: 351,
            height: 685,
            backgroundColor: 'white',
            alignSelf: 'center',
            // marginTop: 15,
            borderRadius: 15
        }
    });
    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <View></View>
            </View>
        </View>
    );
}