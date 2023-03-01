import { Text, View,Image, Button} from "react-native";
import { useState,useEffect } from "react";

// Nhiệm vụ yêu cầu hiển thị thông tin cá nhân gồm thông tin cá nhân
// họ tên:tên sv
//Msv
// ảnh đại diện: dùng Image
const Info= (props) =>{
    const navigation=props.navigation;
    const route=props.route;
    //nếu object pấm truyền sang có id thì lấy id, nếu không thì bằng 0
    const id=route.params?.id || 0;
    const[name,setname]=useState('');
    const[msv,setmsv]=useState('');
    const[count,setcount] =useState(0);
// 1. [] trong useEffect có thể không truyền gì vào
// đây là tình huống lầ render đầu tiên của component info
// các câu lệnh trong arrow function sẽ chỉ cahyj 1 lần đó 
// 2. [] trong useEffect có tham số truyền vào là 1 giá trị nào đó
// nó sẽ chạy các câu lệnh trong arrow function lần đầu tiên và mỗi khi thay đổi gt

// tình huống 1: mảng rỗng
useEffect(
    () =>{
        // setname('Nguyễn Hoàng Trà effect'); 
    },//tham số này là những công việc nó sẽ làm
    [] // những thứ nó sẽ lắng nghe và tắc động để làm việc bên trên
    );
useEffect(
    // ngay sau khi name cập nhật giá trị thì chạy vào effect này
    // thực hiện setmsv = giá trị mới của name + 'ph26979'
    () => {
setmsv(name+'PH26979')
},
[name]);

useEffect(() =>{
    if(count%2==0){
        setname('tên mới dạng effect này'+count);
    }
},
[count]);

    const onUpdate =() =>{
        setname('Nguyễn Hoàng Trà');
    };

    return(
        <View>
            <Text> trang thông tin</Text>
            <Text>Họ và tên: {name}</Text>
            <Text>MSV: {msv}</Text>
            <Button title='Cập nhật giá trị' onPress={() => onUpdate()}/>
            <Text>Gía trị đếm {count}</Text>
            <Button title="tăng giá trị" onPress={() =>{
                setcount(count+1);
                // if(count==2){
                //     setname('tên mới set thủ công');
                // }

            }}/>
            <Image style={{width:200,height:200}}  source={require('../../../assets/tra.jpg')}/>

            <Text>Gía trị nhận từ mà hình trước đó: {id}</Text>
           {
            id!==0 ? <Text> giá trị nhận từ màn hình đó đã có</Text>:<Text>hệ thống đang gặp trục trặc</Text>
           }
            </View>
    );
};
export default Info;