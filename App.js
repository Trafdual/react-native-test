import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Manager from "./Manager";
import { NavigationContainer } from "@react-navigation/native";
import{View,Text,Button} from 'react-native'
import Home from "./src/screens/Home";
import UserList from "./src/screens/UserList";
import Info from "./src/screens/Info";
import Product from "./src/screens/Product";
import Form from "./src/screens/Form";


const Stack = createNativeStackNavigator();
// const Detail = (props) => {
//     const navigation = props.navigation;
//     return (<View>
//         <Text>Detail</Text>
//         <Button
//         title='Sang Manager'
//         onPress={() => navigation.navigate('Manager')}
//     /></View>)
// };

// các màn hình như sau
// home: gồm 1 nút vào trang thông tin cá nhân, 1 nút vào trang danh sách
// bấm nút vào trang thông tin chuyển màn hình Info
// bấm nút trang danh sách chuyển màn hình userlist

// khi màn hình được chuyền component trong stack.screen thì các màn hình đó 
//sẽ nhận được props có tên là navigation, trong đó navigation.navigater('tên màn hình')
//giúp di chuyển sang màn hình khác
const App = () => {
    return (
       <NavigationContainer>
        {/*initialroutname nhan vao ten cua man hinh trang chu */}
        <Stack.Navigator initialRouteName="Home1">
            <Stack.Screen  name='Home1' component={Home}/>
            <Stack.Screen name='Form' component={Form} />
            <Stack.Screen  name='Info' component={Info}/>
            <Stack.Screen  name='UserList' component={UserList}/>
            <Stack.Screen  name='Product' component={Product}/>
        </Stack.Navigator>
       </NavigationContainer>
    );
};

export default App;
