import { date } from 'joi';
import * as React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const today = '1-1-2020';

const Data = [
    {key : 1, name : 'พ่อให้', value : 1000, date : '1-1-2021'},
    {key : 2, name : 'กินข้าวเช้า', value : -100, date : '1-1-2020'},
    {key : 3, name: 'ชานม', value : -200, date : '1-1-2020'},
    {key : 4, name : 'กินข้าวเที่ยง', value : -100, date : '1-1-2020'},
    {key : 5, name : 'เพื่อนคืนเงิน', value : 1000, date : '1-1-2020'},
    {key : 6, name: 'ชานมของเรา', value : -100, date : '1-1-2020'},
    {key : 7, name: 'ชานมของเพื่อน', value : -100, date : '1-1-2020'},
    {key : 8, name: 'กินข้าวเย็น', value : -100, date : '1-1-2020'},
    {key : 9, name: 'ชานม', value : -200, date : '1-1-2020'},
    {key : 10, name: 'ขายของ', value : 200, date : '31-12-2019'},
];

const current = Data[0].value;
var t = 0;
var ttoday = 0;
var peakw = 0;
var peakd = 0;
for(const[key,hok,value,date] of Object.entries(Data)){
    if(hok.date === today){
        ttoday = ttoday + hok.value

        if(hok.value > peakd){
            peakd = hok.value;
        }

        if(hok.value < peakw){
            peakw = hok.value;
        }
    }
    t = t + hok.value;
}

export default function Feed(){
    const styles = StyleSheet.create({
        contianer:{
            backgroundColor: '#f9bdd5',
            height: 800
        },
        mainBox: {
            backgroundColor: 'white',
            width: 351,
            alignSelf: 'center',
            marginTop: 15,
            height: 150,
            borderRadius: 15,
            shadowOpacity: 0.25
        },
        amount:{
            alignSelf: 'center',
            padding: 15,
            fontSize: 34,
            paddingBottom: 10,
            fontWeight:'400'
        },
        w:{
            alignSelf: 'center',
            color: 'red'
        },
        d:{
            alignSelf: 'center',
            color: 'green'
        },
        table:{
            width: 351, // 117*3 = 351
            height: 500,
            backgroundColor: 'white',
            marginTop: 20,
            alignSelf: 'center',
            borderRadius: 15
        },
        todd:{
            width:117,
            height:35,
            backgroundColor:'#fde8f0'
        },
        teven:{
            width:117,
            height:35,
            backgroundColor:'#fbd0e1'
        },
        itemd:{
            alignSelf:'center',
            fontSize:16,
            marginTop:5,
            color: 'green'
        },
        itemw:{
            alignSelf:'center',
            fontSize:16,
            marginTop:5,
            color: 'red'
        }
    });

    return(
        <View style={styles.contianer}>
            <View style={styles.mainBox}>
                <Text style={styles.amount}>{t}</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:117,}}>
                        <Text style={{alignSelf:'center',padding:15,color:'green',fontWeight:'600'}}>Peak D</Text>
                        <Text style={styles.d}>+{peakd}</Text>
                    </View>
                    <View style={{width:117}}>
                        <Text style={{alignSelf:'center',padding:15,fontWeight:'600'}}>Current</Text>
                        <Text style={Data[0].value > 0 ? styles.d : styles.w}>{Data[0].value > 0 ? '+'+Data[0].value : Data[0].value}</Text>
                    </View>
                    <View style={{width:117}}>
                        <Text style={{alignSelf:'center',padding:15,color:'red',fontWeight:'600'}}>Peak W</Text>
                        <Text style={styles.w}>{peakw}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.table}>
                <View style={{flexDirection:'row',marginTop:15,marginBottom:15}}>
                    <View style={{width:117}}><Text style={{alignSelf:'center',fontSize:18}}>Name</Text></View>
                    <View style={{width:117}}><Text style={{alignSelf:'center',fontSize:18}}>Date</Text></View>
                    <View style={{width:117}}><Text style={{alignSelf:'center',fontSize:18}}>Amount</Text></View>
                </View>
                <View style={{height:400}}>
                    <FlatList
                        data={Data}
                        keyExtractor={item => item.key}
                        renderItem={({item}) => (
                            <View style={{flexDirection:'row',backgroundColor:'white'}}>
                                <View style={item.key%2===0 ? styles.teven : styles.todd}><Text style={item.value > 0 ? styles.itemd : styles.itemw}>{item.name}</Text></View>
                                <View style={item.key%2===0 ? styles.teven : styles.todd}><Text style={{alignSelf:'center',fontSize:16,marginTop:5}}>{item.date}</Text></View>
                                <View style={item.key%2===0 ? styles.teven : styles.todd}><Text style={item.value > 0 ? styles.itemd : styles.itemw}>{item.value}</Text></View>
                            </View>
                        )}
                    />
                </View>
                <View style={{flexDirection:'row',marginTop:15,marginBottom:15}}>
                    <View style={{width:117}}><Text style={{alignSelf:'center',fontSize:18}}>Total (today)</Text></View>
                    <View style={{width:117}}><Text style={{alignSelf:'center',fontSize:18,color:'white'}}>สวัสดีจ้า</Text></View>
                    <View style={{width:117}}><Text style={ttoday > 0 ? {alignSelf:'center',fontSize:18,color:'green'} : {alignSelf:'center',fontSize:18,color:'red'}}>{ttoday}</Text></View>
                </View>
            </View>
        </View>
    );
}