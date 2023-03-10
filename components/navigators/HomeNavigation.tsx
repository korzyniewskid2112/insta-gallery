import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Collection from '../Collection';
import { HomeParamList } from '../config/types';
import Home from '../Home';
import Photo from '../Photo';
import Photographer from '../Photographer';
import Search from '../Search';

const HomeNavigation = () => {
    const Stack = createNativeStackNavigator<HomeParamList>();

    return(
       <Stack.Navigator initialRouteName='Home' screenOptions={{ headerBackTitleVisible: false, headerShadowVisible: false, headerTitleAlign: 'center'}}>
            <Stack.Screen name={'Home'} component={Home} options={{headerShown: false, title: 'Home'}}/>
            <Stack.Screen name={'Photographer'} component={Photographer} options={{headerShown: false}}/>
            <Stack.Screen name={'Photo'} component={Photo} options={{headerShown: false}}/>
            <Stack.Screen name={'Collection'} component={Collection} options={{headerShown: false}}/>
            <Stack.Screen name={'Search'} component={Search} options={{headerShown: false}}/>
       </Stack.Navigator>
    )
}

export default HomeNavigation;