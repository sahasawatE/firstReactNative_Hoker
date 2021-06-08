import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import OldR from './OldR';
import NewR from './NewR';

export default function Add(){
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#f9bdd5',
            height: 800
        },
        main:{
            backgroundColor:'white',
            height: 685,
            width: 351,
            alignSelf:'center',
            borderRadius: 15,
        },
        nameBox:{
            marginTop:20,
            width: 320,
            height:100,
            flexDirection:'column',
            marginLeft: 15
        },
        name:{
            backgroundColor:'#ffe6f2',
            justifyContent:'center',
            borderRadius: 15,
            height:45,
            width: 320,
            marginTop: 10
        },
        pressOldF:{
            alignSelf:'center',
            backgroundColor:'#ff6b6b',
            height: 40,
            width: 158,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
        },
        pressOldT:{
            alignSelf:'center',
            backgroundColor:'#f2f2f2',
            height: 40,
            width: 158,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
        },
        pressNewF:{
            alignSelf:'center',
            backgroundColor:'#ff83bd',
            height: 40,
            width: 158,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
        },
        pressNewT:{
            alignSelf:'center',
            backgroundColor:'#f2f2f2',
            height: 40,
            width: 158,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
        }
    });

    const [text, onChangeText] = React.useState("");
    const [toggle, setToggle] = React.useState(true);

    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.nameBox}>
                        <View style={{paddingBottom:10,height:40,marginBottom: 5,alignSelf:'center'}}>
                            <Text style={text === "" ? {fontSize:30,color:'#808080'} : {fontSize:30}}>
                                {text === "" ? "Name ?" : text}
                            </Text>
                        </View>
                        <View style={styles.name}>
                            <TextInput
                                style={{
                                    fontSize:20,
                                    paddingLeft:10,
                                    paddingRight:10,
                                    color:'#808080',
                                    borderWidth: 2,
                                    borderColor:'#ffccff',
                                    height: 45,
                                    borderRadius: 17
                                }}
                                placeholder="Item Name..."
                                onChangeText={onChangeText}
                                value={text}
                            />
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',width: 320,marginLeft:15,borderWidth: 2,borderRadius:17,borderColor:'#ffcce6',marginTop: 30}}>
                    <TouchableOpacity
                        style={toggle ? styles.pressOldT : styles.pressOldF}
                        onPress={() => {
                            setToggle(false)
                        }}
                    >
                        <Text style={{alignSelf:'center',paddingTop:10}}>
                            บันทึกย้อนหลัง
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={toggle ? styles.pressNewF : styles.pressNewT}
                        onPress={() => {
                            setToggle(true)
                        }}
                    >
                        <Text style={{alignSelf:'center',paddingTop:10}}>
                            บันทึกรายการปัจจุบัน
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: 333,alignSelf:'center',marginTop:20}}>
                    {toggle ? <NewR/> : <OldR/>}
                </View>
            </View>
        </View>
    );
}