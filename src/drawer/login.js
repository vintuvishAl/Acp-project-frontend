import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen1 from '../views/login/screen1';
import LoginScreen2 from '../views/login/screen2';
import Dashboard from '../views/dashboard/dashboardscreen';
import CreateProfile from '../views/profile/createProfile';
import EditProfile from '../views/profile/EditProfile';
import AddExperience from '../views/profile/AddExperience';
import Profiles from '../views/profile/profiles';
import Profile from '../views/profile/profile';
import AddEducation from '../views/profile/AddEducation';
import { Icon } from 'react-native-elements';
import React from 'react';


const Home = TabNavigator(
  {
   
    ProfilesTab: {
      screen: Profiles,
      path: '/profiles',
      navigationOptions: {
        tabBarLabel: 'Developers',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="list" size={20} type="entypo" color={tintColor} />
        ),
      },
    },
    DashboardTab: {
      screen: Dashboard,
      path: '/dashboard',
      navigationOptions: {
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="home" size={20} type="entypo" color={tintColor} />
        ),
        
      },
    },
  },
  {
    initialRouteName: 'DashboardTab',
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
   
    
    tabBarOptions: {
      activeTintColor: '#ffeaa7',
      // Android's default showing of icons is false whereas iOS is true
      labelStyle: {
        fontSize: 12,
      },
      showIcon: true,
      style: {
        backgroundColor: '#6c5ce7',
      },
    },
  }
)
 
// const Stack1 = StackNavigator(
//   {
//     Login : { screen: LoginScreen1 },
//     Register : { screen: LoginScreen2 },
//     HomeTabs: { screen: Home },
//     CreateProfile: { screen: CreateProfile},
//     EditProfile: { screen: EditProfile},
//     AddExperience: { screen: AddExperience},
//     AddEducation: { screen: AddEducation},
//   },
//   {
//     initialRouteName: "Login",
//     headerMode: 'none',
//   }
// )
// const Stack2 = StackNavigator({
//   Profile: {screen: Profile}
// },
// {
//   initialRouteName: "Profile",
//   headerMode: 'none',
// }
// )

// const LoginDrawerItem = StackNavigator(
//   {
//     Stack1: { screen: Stack1 },
//   Stack2: { screen: Stack2 },
    
// },
//   {
//     initialRouteName: "Stack1",
//     headerMode: 'none',
//   }
// );

const LoginDrawerItem = StackNavigator(
  {
    Login : { screen: LoginScreen1 },
    Register : { screen: LoginScreen2 },
    HomeTabs: { screen: Home },
    CreateProfile: { screen: CreateProfile},
    EditProfile: { screen: EditProfile},
    AddExperience: { screen: AddExperience},
    AddEducation: { screen: AddEducation},
    Profile: {screen: Profile}
    
},
  {
    initialRouteName: "Login",
    headerMode: 'none',
  }
);


LoginDrawerItem.navigationOptions = ({
  drawerLabel: ' ',
 
})



export default LoginDrawerItem;
