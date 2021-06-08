import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, TextInput, Modal, ScrollView} from 'react-native';

var H = 486;
const Dcategories = ['มีคนให้','เงินเหลือ','หนี้','ขายของ','ทำงาน'];
const Wcategories = ['ของกิน','ของใช้','ยา','เครื่องดื่ม','ค่าเช่า'];
const colorD = ['#e6fff2','#7cfac3','#e6f9ff','#8ae5da','#bbded6'];
const colorW = ['#fea3d9','#fde8fe','#fbc88a','#ffb6b9','#e57364'];

const cate = StyleSheet.create({
    view:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    viewlist:{
        width: '50%',
        height: 50,
        marginTop: 5,
        shadowOpacity: 0.15,
        borderRadius: 15,
        shadowOffset: {width: 0, height: 6}
    },
    list:{
        alignSelf:'center',
        marginTop: 10,
        fontSize: 18
    }
});

const Dcate = Dcategories.map((list,i) => 
    <TouchableOpacity 
        style={{
            width: '45%',
            height: 50,
            marginTop: 10,
            marginLeft: 10,
            shadowOpacity: 0.15,
            borderRadius: 15,
            shadowOffset: {width: 0, height: 6},
            backgroundColor:colorD[i]
        }}
        onPress={() => console.log(colorD[i])}
    >
        <Text style={cate.list}>{list}</Text>
    </TouchableOpacity>
);
const Wcate = Wcategories.map((list,i) => 
    <TouchableOpacity 
        style={{
            width: '45%',
            height: 50,
            marginTop: 10,
            marginLeft: 10,
            shadowOpacity: 0.15,
            borderRadius: 15,
            shadowOffset: {width: 0, height: 6},
            backgroundColor:colorW[i]
        }}
        onPress={() => console.log(colorW[i])}
    >
        <Text style={cate.list}>{list}</Text>
    </TouchableOpacity>
);

const cateD = () => {
    return(
        <View style={cate.view}>
            {Dcate}
        </View>
    );
};

const cateW = () => {
    return(
        <View style={cate.view}>
            {Wcate}
        </View>
    );
};

export default function NewR(){
    const styles = StyleSheet.create({
        main:{
            width: '100%',
            height: H
        },
        type:{
            width:310,
            //height: H/6.5,
            alignSelf:'center',
            justifyContent:'space-around',
            flexDirection:'row'
        },
        category:{
            width:310,
            alignSelf:'center',
            // backgroundColor:'#ccffcc',
            height: H/2.1,
            marginTop: 20,
        },
        amount:{
            width:310,
            alignSelf:'center',
            // backgroundColor:'#ff4d94',
            //height: H/6.3,
            marginBottom: H/15,
        },
        submit:{
            width:310,
            alignSelf:'center',
            //height: H/8,
            marginBottom: 10,
        },
        D:{
            fontSize:18,
            paddingLeft:10,
            paddingRight:10,
            color:'#808080',
            // borderWidth: 2,
            // borderColor:'#00a655',
            borderRadius: 15,
            height: 45,
            borderRadius: 17,
            width: 150,
            backgroundColor: '#ebfaeb'
        },
        W:{
            fontSize:18,
            paddingLeft:10,
            paddingRight:10,
            color:'#808080',
            // borderWidth: 2,
            // borderColor:'#ea3033',
            borderRadius: 15,
            height: 45,
            borderRadius: 17,
            width: 150,
            backgroundColor:'#ffebe6'
        }
    });

    const [type, setType] = React.useState(true);
    const [number, setNumber] = React.useState(null);

    return(
        <View style={styles.main}>
            <View style={styles.type}>
                <Button
                    title='รายรับ 😎'
                    color={type ? '#007AFF' : '#b3b3b3'}
                    onPress={() => {
                        setType(true)
                    }}
                />
                <Button
                    title='รายจ่าย 😢'
                    color={type ? '#b3b3b3' : 'red'}
                    onPress={() => {
                        setType(false)
                    }}
                />
            </View>
            <View style={styles.category}>
                {type ? cateD() : cateW()}
            </View>
            <View style={styles.amount}>
                <View style={{flexDirection:'row',marginTop: 25}}>
                    <Text style={{fontSize: 20,marginRight: 65,marginLeft: 10,marginTop: 10}}>Amount</Text>
                    <TextInput
                        style={type ? styles.D : styles.W}
                        value={number}
                        placeholder='Item Value'
                        onChangeText={() => {
                            setNumber
                        }}
                    />
                    <Text style={{fontSize: 20,marginLeft:5,marginTop: 10}}>฿</Text>
                </View>
            </View>
            <View style={styles.submit}>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
                    <Button
                        title='Clear'
                        color='#ff3300'
                    />
                    <Button
                        title='Save'
                        color='#5b75f9'
                    />
                </View>
            </View>
        </View>
    );
}