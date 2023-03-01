import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView } from 'react-native';
import ProductList from './src/screens/ProductList';
export default function App() {
  const productlist=[{
    id: 1,
    name: 'Nguyễn Hoàng Trà'
  },{
    id:2,
    name:'Trần Tiến Hưng'
  }
];
const[switchState,setSwitchState]= useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
       
      <Text style={styles.text}>Họ và tên: Nguyễn Hoàng Trà</Text>
      <Text style={styles.text}>MSV: PH26979</Text>
      <Button title={'thêm mới'} onPress={() => setSwitchState(!switchState)}/>
     {
      switchState?<>
      <Text style={styles.text1}>Thêm mới</Text>
<TextInput >Tên</TextInput>
<TextInput >Mô tả</TextInput>
<TextInput >Link ảnh</TextInput>
<Button title={'hủy'} onPress={() => setSwitchState(!switchState)}/> 
<Button title={'lưu'}/>

      </>
      :null
     }
     <ProductList data={productlist}/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
    color:'black'
  },
  text1:{
    fontSize:20,
    color:'red'
  }
});
