import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button  } from 'react-native-elements';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Experience from './experienceView';
import Education from './educationView';

import { getCurrentProfile, clearCurrentProfile, deleteAccount } from '../../actions/profileActions';

import Icon from 'react-native-vector-icons/FontAwesome';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedIndexes: [0, 2, 3],
    };
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount(){
      this.props.getCurrentProfile();
  }

  onDeleteClick(e){
    
    this.props.deleteAccount();
}

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated == false){
      this.props.navigation.navigate('Login');
    }
}

  onLogoutClick(e){
      e.preventDefault();
      this.props.clearCurrentProfile();
      this.props.logoutUser();
  }
  

  render() {
             const { user } = this.props.auth;
             const { profile, loading } = this.props.profile;
          let dashboardContent;

          if(profile == null || loading){
                 dashboardContent = 
                  <Text >Loading...</Text>
            } else{
                if(Object.keys(profile).length > 0){

                    dashboardContent =  (<View style={{ flex:1, alignItems: 'center'}}>
                    <View style={{ flex:1 ,flexDirection: 'row'}}>
                    <Text style={{fontSize:20}}>Welcome { user.name } </Text> 
                    
                    </View>
       <View style={{ flex:1 ,flexDirection: 'row'}}>
                           <Button
              title="EditProfile"
             
             
              buttonStyle={{
                backgroundColor: '#2c3e50',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 8 }}
              containerStyle={{ marginVertical: 10, height: 30, width: 100 }}
              onPress={() => this.props.navigation.push('EditProfile')}
              underlayColor="transparent"
            />
             <Button
              title="Add Experience"
             
              
              buttonStyle={{
                backgroundColor: '#e67e22',
                borderRadius: 5,
               
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 8 }}
              containerStyle={{ marginVertical: 10, height: 30, width: 100 }}
              onPress={() => this.props.navigation.push('AddExperience')}
              underlayColor="transparent"
            />
            <Button
              title="Add Education"
             
              
              buttonStyle={{
                backgroundColor: '#9b59b6',
                borderRadius: 5,
               
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 8 }}
              containerStyle={{ marginVertical: 10, height: 30, width: 100 }}
              onPress={() => this.props.navigation.push('AddEducation')}
              underlayColor="transparent"
            />
            
            </View>
            
            <View style={{flex:1, paddingTop:15}}>
            <Experience experience = {profile.experience} />
            </View>
            <View style={{flex:1, paddingTop:15}}>
            <Education education = {profile.education}/>
            </View>
            
                    </View>
                    )
                } else {
                    dashboardContent = <View style={{ alignItems: 'center' }}>
                <Text style={{fontSize:20}}>Welcome { user.name }</Text>
                <Text style={{fontSize:20}}>You have not setup your professional profile</Text>
               
                 <Button
              title="Create Profile"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: '#3498db',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{ marginVertical: 10, height: 50, width: 230 }}
              onPress={() => this.props.navigation.navigate('CreateProfile')}
              underlayColor="transparent"
            />
                </View>
                }
                
            }



    return (
      <ScrollView style={styles.container}>
        
         

        <View style={styles.loginTitle}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.travelText}>Dashboard</Text>
                  
                </View>
             
              </View>

              
              <View>{dashboardContent}</View>
    
          <View style={{alignItems:'center'}}>
           <View style={{flex: 1, flexDirection: 'row',alignItems: 'center'}}>
            <Button
              title="Logout"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: '#e74c3c',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
              containerStyle={{ marginVertical: 10, height: 30, width: 150, paddingRight: 5 }}
              onPress={this.onLogoutClick}
              underlayColor="transparent"
            />
             <Button
              title="Delete Account"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: '#e74c3c',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
              containerStyle={{ marginVertical: 10, height: 30, width: 150, paddingLeft:5 }}
              onPress={this.onDeleteClick}
              underlayColor="transparent"
            />
           </View>
           </View>

        
         
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  headerContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#4F80E1',
    marginBottom: 20,
  },
  heading: {
    color: '#000000',
    padding: 40,
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginTitle: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  travelText: {
    marginTop: 20,
    color: '#000000',
    fontSize: 30,
    fontFamily: 'bold',
  },
});

Dashboard.propTypes = {
    deleteAccount: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
   
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  
  })

export default connect(mapStateToProps, {logoutUser,getCurrentProfile,clearCurrentProfile,deleteAccount}) (Dashboard);

