import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView,FlatList,Modal,Pressable } from 'react-native';
import ProductList from './src/screens/ProductList';
export default function Manager() {

const[switchState,setSwitchState]= useState(false);
const[list,setList] =useState([{id:1,name:'ABC',desc:'Desc ABC'}]);
const[nameinput,setnameinput]=useState('');
const[descinput,setdescinput]=useState('');
const[editingId,setEditingId]=useState(0);
const onClose = () =>{
  setSwitchState(false);
  setnameinput('');setdescinput('');setEditingId(0);
}
const onsave=() =>{
  // kiểm tra editingid để biết là đang cập nhật
  if(editingId){
    const newList=list.map(item => {
if(item.id==editingId){
  item.name=nameinput;
  item.desc=descinput;
}
return item;
    });
    setList(newList);
    return onClose() ;
  }
  // định nghĩa object mới được lưu vào
  const newItem={
    id: list.length==0 ? 1: list[list.length-1].id+1,
    name: nameinput,
    desc: descinput
  }
  //thêm phần tử mới vào mảng list
  //dấu ... lấy toàn bộ phần tử của mảng mà không ảnh hưởng đến mảng đó
  const newList=[...list,newItem];
setList(newList);
  // đóng modal
  onClose;
setSwitchState(false);
}
const onDelete =(deleteId) => {
  const newList=list.filter(item => item.id !== deleteId);
  setList(newList);
};
const onEdit =(editId) => {
  //hiển thị modal và set giá trị cho input
  setSwitchState(true);
  //tìm ra phần tử đang cần sửa theo editId
const editItem=list.find(item => item.id ==editId);
setnameinput(editItem.name);
setdescinput(editItem.desc);
//gán giá trị cho editingId để biết là đang sửa
setEditingId(editId);
};
  return (
    <ScrollView>
    <View style={styles.container}>   
      <Text style={styles.text}>Họ và tên: Nguyễn Hoàng Trà</Text>
      <Text style={styles.text}>MSV: PH26979</Text>
      { switchState? null:<Button title={'thêm mới'} onPress={() => setSwitchState(true)}/>}
     <Modal visible ={switchState} animationType="slide">
      <Text style={styles.text1}>Thêm mới</Text>
<TextInput value={nameinput} placeholder='Tên' onChangeText={(text) =>setnameinput(text)} />
<TextInput value={descinput} placeholder='Mô tả' onChangeText={(text) =>setdescinput(text)} />
<Button title={'hủy'} onPress={() => onClose()}/> 
<Button title={'lưu'} onPress={() => onsave()}/>
</Modal>
    </View>
    <View>
    <FlatList
   data={list}
   renderItem={({item}) => <View>
    <Text>{item.id}</Text>
    <Text>{item.name}</Text>
    <Text>{item.desc}</Text>
    <Pressable onPress={() => onEdit(item.id)}><Text>Sửa</Text></Pressable>
<Pressable onPress={() => onDelete(item.id)}><Text>Xóa</Text></Pressable>
    </View>} 
   keyExtractor={(item) => item.id}
    />
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
