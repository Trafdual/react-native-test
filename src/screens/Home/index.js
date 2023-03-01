import { View,Pressable,Text,StyleSheet } from "react-native";

const Home=(props) =>{
    // trong props sẽ có navigation được nhận từ stack.screen ở App.js
    const navigation=props.navigation;
    const chuyenMH=(ten_mh, data)=>{
        navigation.navigate(ten_mh, data);
    }
    return(
        <View>
            <Text>Chào mừng đến với ứng dụng</Text>
            <Pressable onPress={() => chuyenMH('Info',{id: 123})}>
                <Text>vào trang thông tin</Text>
            </Pressable>
            <Pressable onPress={() => chuyenMH('UserList',{id: 234})}>
                <Text>vào trang danh sách</Text>
            </Pressable>
            <Pressable onPress={() => chuyenMH('Product',{id: 345})}>
                <Text>vào trang product</Text>
            </Pressable>
        </View>
    )
};
export default Home;