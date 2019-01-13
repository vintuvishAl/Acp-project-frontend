import React, {Component} from 'react';
import {connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, SafeAreaView,Dimensions,Image, StatusBar, } from 'react-native';
import PropTypes from 'prop-types';
import {getProfileByHandle} from '../../actions/profileActions'
import { Button } from 'react-native-elements';
import { Font } from 'expo';
import Moment from 'moment';

const SCREEN_WIDTH = Dimensions.get('window').width;

const IMAGE_SIZE = SCREEN_WIDTH - 70;

class Profile extends Component {
   
//   constructor(props){
//     super(props);
//     this.state = {
//       loading :this.props.profile.loading,
//       profile:this.props.profile.profile, 

      
//     }
//     this.props.getProfileByHandle(this.props.navigation.state.params.handle);
    

//   }
  componentDidMount(){
      if(this.props.navigation.state.params.handle){
        this.props.getProfileByHandle(this.props.navigation.state.params.handle);
      }
   
    
}

// async componentDidMount() {
//     await Font.loadAsync({
//       georgia: require('../../../assets/fonts/Georgia.ttf'),
//       regular: require('../../../assets/fonts/Montserrat-Regular.ttf'),
//       light: require('../../../assets/fonts/Montserrat-Light.ttf'),
//       bold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
//     });

    
//   }
    
     render(){
        const{ profile,loading } = this.props.profile ;
        const skills = profile.skills.map((skill, index) => (
            
            <Text key={index}>{skill},</Text>
            
        ))
        const Education = profile.education.map(edu => (
            
             <View key={edu._id} style={{ flex: 1, marginTop: 30, marginHorizontal: 30 }}>
                <Text style={{flex: 1,fontSize: 15,color: 'rgba(216, 121, 112, 1)' }} >
                  Educational Details
                </Text>
               
                 <View style={{ flex: 1, flexDirection: 'row',paddingTop:10 }}>
                     <View style={{ flex: 1 }}>
                       <Text style={styles.infoTypeLabel}>School  </Text>
                       <Text style={styles.infoTypeLabel}>Degree  </Text>
                       <Text style={styles.infoTypeLabel}>Field of Study</Text>
                       <Text style={styles.infoTypeLabel}>From</Text>
                       <Text style={styles.infoTypeLabel}>To</Text>
                     </View>
                     <View style={{ flex: 1, marginLeft: 10 }}>
                       <Text style={styles.infoAnswerLabel}>{edu.school}</Text>
                      <Text style={styles.infoAnswerLabel}>{edu.degree}</Text>
                       <Text style={styles.infoAnswerLabel}>{edu.fieldofstudy}</Text>
                       <Text style={styles.infoAnswerLabel}>{Moment(edu.from).format('d MMM YYYY')}</Text>
                      <Text style={styles.infoAnswerLabel}>{Moment(edu.to).format('d MMM YYYY')}</Text>
                     </View>
                 </View> 

            </View> 
        )
        );

        const Experience = profile.experience.map(exp => (
            
            <View key={exp._id} style={{ flex: 1, marginTop: 30, marginHorizontal: 30 }}>
               <Text style={{flex: 1,fontSize: 15,color: 'rgba(216, 121, 112, 1)' }} >
                 Experience Details
               </Text>
              
                <View style={{ flex: 1, flexDirection: 'row',paddingTop:10 }}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.infoTypeLabel}>Job Title  </Text>
                      <Text style={styles.infoTypeLabel}>Company  </Text>
                      <Text style={styles.infoTypeLabel}>Location</Text>
                      <Text style={styles.infoTypeLabel}>From</Text>
                      <Text style={styles.infoTypeLabel}>To</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <Text style={styles.infoAnswerLabel}>{exp.title}</Text>
                     <Text style={styles.infoAnswerLabel}>{exp.company}</Text>
                      <Text style={styles.infoAnswerLabel}>{exp.location}</Text>
                      <Text style={styles.infoAnswerLabel}>{Moment(exp.from).format('d MMM YYYY')}</Text>
                     <Text style={styles.infoAnswerLabel}>{Moment(exp.to).format('d MMM YYYY')}</Text>
                    </View>
                </View> 

           </View> 
       )
       );
        let profileContent;
        if ( profile == null || loading ){
            profileContent = 
            <Text>loading...</Text>
            
        }else {
            console.log(profile);
            profileContent = 
              <View style={{ flex: 1}}>  
            <StatusBar barStyle="light-content" />
       
          <View style={{ flex: 1, backgroundColor: 'rgba(47,44,60,1)' }}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>{profile.user.name}</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{
                    uri:
                    'https:'+ profile.user.avatar,
                  }}
                  style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginHorizontal: 40,justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{flex: 1,fontSize: 15,color: 'white', fontFamily: 'bold', }}>
                  Status
                </Text>
                <Text style={{flex: 0.5,fontSize: 15,color: 'gray',textAlign: 'left', marginTop: 5}}>
                  -
                </Text>
                <Text style={{flex: 1,fontSize: 15,color: 'green',fontFamily: 'bold',textAlign: 'right',}}>
                {profile.status}
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginHorizontal: 40,justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{flex: 1,fontSize: 15,color: 'white', fontFamily: 'bold', }}>
                  Company/University
                </Text>
                <Text style={{flex: 0.5,fontSize: 15,color: 'gray',textAlign: 'left', marginTop: 5}}>
                  -
                </Text>
                <Text style={{flex: 1,fontSize: 15,color: 'green',fontFamily: 'bold',textAlign: 'right',}}>
                {profile.company}
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginHorizontal: 40,justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{flex: 1,fontSize: 15,color: 'white', fontFamily: 'bold', }}>
                  Website
                </Text>
                <Text style={{flex: 0.5,fontSize: 15,color: 'gray',textAlign: 'left', marginTop: 5}}>
                  -
                </Text>
                <Text style={{flex: 1,fontSize: 15,color: 'green',fontFamily: 'bold',textAlign: 'right',}}>
                {profile.website}
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginHorizontal: 40,justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{flex: 1,fontSize: 15,color: 'white', fontFamily: 'bold', }}>
                  About
                </Text>
                <Text style={{flex: 0.5,fontSize: 15,color: 'gray',textAlign: 'left', marginTop: 5}}>
                  -
                </Text>
                <Text style={{flex: 1,fontSize: 15,color: 'green',fontFamily: 'bold',textAlign: 'right',}}>
                {profile.bio}
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginHorizontal: 40,justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{flex: 1,fontSize: 15,color: 'white', fontFamily: 'bold', }}>
                  Location
                </Text>
                <Text style={{flex: 0.5,fontSize: 15,color: 'gray',textAlign: 'left', marginTop: 5}}>
                  -
                </Text>
                <Text style={{flex: 1,fontSize: 15,color: 'green',fontFamily: 'bold',textAlign: 'right',}}>
                {profile.location}
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginHorizontal: 40,justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{flex: 1,fontSize: 15,color: 'white', fontFamily: 'bold', }}>
                  Skills
                </Text>
                <Text style={{flex: 0.5,fontSize: 15,color: 'gray',textAlign: 'left', marginTop: 5}}>
                  -
                </Text>
                <Text style={{flex: 1,fontSize: 15,color: 'green',fontFamily: 'bold',textAlign: 'right',}}>
                {skills}
                </Text>
              </View>
              <View style={{flex:1}}>
               {Experience}
               </View>
               <View style={{flex:1}}>
               {Education}
               </View>
              
             
         
          
            </ScrollView>
          </View>
          </View>
         
        
        }
        
        return(
            <SafeAreaView style={{ flex: 1 }}>
            
            {profileContent}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
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
      color: 'white',
      fontSize: 22,
      textAlign: 'center',
    },
    infoTypeLabel: {
      fontSize: 15,
      textAlign: 'left',
      color: 'rgba(126,123,138,1)',
      
      paddingBottom: 10,
    },
    infoAnswerLabel: {
      fontSize: 15,
      color: 'white',
      
      paddingBottom: 10,
    },
  });

Profile.propTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfileByHandle})(Profile);