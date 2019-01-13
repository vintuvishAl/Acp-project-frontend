import React , {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, SafeAreaView,Dimensions,Image } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'react-native-elements';
import { getProfiles } from '../../actions/profileActions';


const SCREEN_WIDTH = Dimensions.get('window').width;


class Profiles extends Component {
    
    componentDidMount(){
        this.props.getProfiles();
        
    }
    render(){
        const{ profiles, loading} = this.props.profile ;
        let profileItems;
        if(profiles == null || loading){
            profileItems = <Text>loading...</Text>;
        } else{
            if(profiles.length > 0){
             profileItems = 
             
             profiles.map(profile => ( 
                <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  alignItems: 'center',
                  marginHorizontal: 10,
                  height: 250,
                  marginBottom: 10,
                }}
                key={profile._id}
              >
                 
                 <View style={{ flex: 2, flexDirection: 'row' }} >
             <View
               style={{
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
               }}
             >
              <View
                 style={{
                   flex: 1,
                   justifyContent: 'center',
                 }}
               >
                 
             <Image
             style={{width: 150, height: 150}}
               source={{ uri: 'https:'+ profile.user.avatar }}
           />
              
</View>
            
             </View>
             <View
               style={{
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
               }}
             >
               <View
                 style={{
                   flex: 1,
                   justifyContent: 'center',
                 }}
               >
                 <Text
                   style={{
                     fontFamily: 'bold',
                     fontSize: 25,
                     color: 'rgba(98,93,144,1)',
                     
                   }}
                 >
                   {profile.user.name}
                 </Text>
                 <Text
                   style={{
                     fontFamily: 'bold',
                     fontSize: 25,
                     color: 'rgba(98,93,144,1)',
                     
                   }}
                 >
                   {profile.status}
                 </Text>
                 
                 
               </View>
             </View>
           </View>
           <View
             style={{
               width: 300,
               borderWidth: 0.5,
               borderColor: 'rgba(222, 223, 226, 1)',
               marginHorizontal: 20,
               height: 1,
               marginVertical: 10,
             }}
           />
           <View
             style={{
               flex: 1,
               flexDirection: 'row',
               alignItems: 'center',
             }}
           >
             <View style={{ flex: 1, alignItems: 'center' }}>
               <Button
                 title="View Profile"
                 buttonStyle={{
                   height: 33,
                   width: 120,
                   backgroundColor: 'rgba(222, 223, 226, 1)',
                   borderRadius: 5,
                 }}
                 titleStyle={{
                   fontFamily: 'regular',
                   fontSize: 13,
                   color: 'gray',
                 }}
                 onPress={() => this.props.navigation.navigate('Profile',{handle: profile.handle})}
                 underlayColor="transparent"
               />
             </View>
           
             </View>
             </View>
             
             ))
             
           
            }
            else{
                profileItems = <Text>No profiles Found...</Text>
            }
        }
        return(
            <View style= {{flex:1, alignItems: 'center', backgroundColor:'black'}}> 
            <SafeAreaView
            style={{ flex: 1, backgroundColor: 'rgba(241,240,241,1)' }}
          >
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>All Developer Profiles</Text>
            </View>
            <ScrollView style={{ flex: 1, marginBottom: 20 }}>
           
              <View style={{flex:1, paddingTop:15}}>
              {profileItems}
              </View>
              
              
            </ScrollView>
            </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    statusBar: {
      height: 10,
    },
  
    navBar: {
      height: 60,
      width: SCREEN_WIDTH,
      justifyContent: 'center',
      alignContent: 'center',
    },
    nameHeader: {
      color: 'black',
      fontSize: 25,
      fontFamily: 'regular',
      marginLeft: 20,
      alignItems: 'center'
    },
  });

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile
})


export default connect(mapStateToProps,{ getProfiles })(Profiles);