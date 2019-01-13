import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet,  Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Button } from 'react-native-elements';
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createProfile, getCurrentProfile} from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class EditProfile extends Component {
    constructor(props){
        
            super(props);
            this.state = {
               fontLoaded: false,
               
               handle: '',
               company: '',
               website: '',
               location: '',
               status: '',
               skills: '',
               githubusername: '',
               bio: '',
               twitter: '',
               facebook: '',
               linkedin: '',
               youtube: '',
               instagram: '',
               errors: {}
               

            };
            this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount() {
        await Font.loadAsync({
          georgia: require('../../../assets/fonts/Georgia.ttf'),
          regular: require('../../../assets/fonts/Montserrat-Regular.ttf'),
          light: require('../../../assets/fonts/Montserrat-Light.ttf'),
          bold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
        });
    
        this.setState({ fontLoaded: true });
      }
        
      componentDidMount(){
          this.props.getCurrentProfile();
      }


      componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }

        if(nextProps.profile.profile){
            const profile = nextProps.profile.profile;
            
             
            const skillsCSV = profile.skills.join(',');

            profile.company = !isEmpty(profile.company) ? profile.company : '';
            profile.website = !isEmpty(profile.website) ? profile.website : '';
            profile.location = !isEmpty(profile.location) ? profile.location : '';
            profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
            profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
            profile.twitter = !isEmpty(profile.twitter) ? profile.twitter : '';
            profile.facebook = !isEmpty(profile.facebook) ? profile.facebook : '';
            profile.linkedin = !isEmpty(profile.linkedin) ? profile.linkedin : '';
            profile.youtube = !isEmpty(profile.youtube) ? profile.youtube : '';
            profile.instagram = !isEmpty(profile.instagram) ? profile.instagram : '';
            
            
                
            // set component feild state
            this.setState({
                
                handle: profile.handle,
                company: profile.company,
                website: profile.website,
                location: profile.location,
                status: profile.status,
                skills: skillsCSV,
                githubusername: profile.githubusername,
                bio: profile.bio,
                twitter: profile.twitter,
                facebook: profile.facebook,
                linkedin: profile.linkedin,
                youtube: profile.youtube,
                instagram: profile.instagram
            })


        }
   }



      onSubmit(e){
          e.preventDefault();
           const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
           }
           this.props.createProfile(profileData, this.props.navigation)
      }


    render(){
        const { handle,company,  githubusername,website,location,status,skills,bio,twitter,facebook,linkedin,youtube,instagram} = this.state;
        const { errors} = this.state;


        return(
<ScrollView style = {{ backgroundColor: '#293046'}}>
        <View style={styles.container}>
       
            <Text style={styles.travelText}>Edit Your Profile</Text>
            <Input
                  leftIcon={
                    <Icon
                      name="user"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={handle => this.setState({ handle })}
                  value={handle}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="ProfileName(fullname or company name)-required"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.handleInput = input)}
                  onSubmitEditing={() => {
                    
                    this.companyInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    errors.handle
                  }
                />



            <Input
                  leftIcon={
                    <Icon
                      name="building"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={company => this.setState({ company })}
                  value={company}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="Company Name"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.companyInput = input)}
                  onSubmitEditing={() => {
                    
                    this.githubusernameInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  
                />


                 <Input
                  leftIcon={
                    <Icon
                      name="github"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={githubusername => this.setState({ githubusername })}
                  value={githubusername}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="GitHub User Name"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.githubusernameInput = input)}
                  onSubmitEditing={() => {
                    
                    this.statusInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                 
                />


                 <Input
                  leftIcon={
                    <Icon
                      name="briefcase"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={status => this.setState({ status })}
                  value={status}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="Current Status"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.statusInput = input)}
                  onSubmitEditing={() => {
                    
                    this.skillsInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    errors.status
                  }
                />


                

                  <Input
                  leftIcon={
                    <Icon
                      name="cogs"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={skills => this.setState({ skills })}
                  value={skills}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="Skills(add one or more)"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.skillsInput = input)}
                  onSubmitEditing={() => {
                    
                    this.websiteInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    errors.skills
                  }
                />

<Input
                  leftIcon={
                    <Icon
                      name="search"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={website => this.setState({ website })}
                  value={website}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="Your Website"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.websiteInput = input)}
                  onSubmitEditing={() => {
                    
                    this.locationInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  
                />



            <Input
                  leftIcon={
                    <Icon
                      name="location-arrow"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={location => this.setState({ location })}
                  value={location}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="Your Address"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.locationInput = input)}
                  onSubmitEditing={() => {
                    
                    this.bioInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  errorStyle={{ textAlign: 'center', fontSize: 12 }}
                 
                />


                 <Input
                  leftIcon={
                    <Icon
                      name="address-card"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={bio => this.setState({ bio })}
                  value={bio}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="About Yourself"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.bioInput = input)}
                  onSubmitEditing={() => {
                    
                    this.twitterInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                 
                />


                 <Input
                  leftIcon={
                    <Icon
                      name="twitter"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={twitter => this.setState({ twitter })}
                  value={twitter}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="Twitter Link"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.twitterInput = input)}
                  onSubmitEditing={() => {
                    
                    this.skillsInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                 
                />


                

                  <Input
                  leftIcon={
                    <Icon
                      name="facebook"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={facebook => this.setState({ facebook })}
                  value={facebook}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="Facebook link"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.facebookInput = input)}
                  onSubmitEditing={() => {
                    
                    this.linkedinInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                 
                />
                <Input
                  leftIcon={
                    <Icon
                      name="linkedin"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={linkedin => this.setState({ linkedin })}
                  value={linkedin}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="Linkedin Link"
                  autoFocus={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (this.linkedinInput = input)}
                  onSubmitEditing={() => {
                    
                    this.instagramInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                 
                />


                


               <Button
                title="Update Profile"
                activeOpacity={1}
                underlayColor="transparent"
                onPress={this.onSubmit}
                
                
                
                buttonStyle={{
                  height: 50,
                  width: 250,
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                }}
                containerStyle={{ marginVertical: 10 }}
                titleStyle={{ fontWeight: 'bold', color: 'white' }}
              />

            </View>
           
    
    </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 20,
      paddingTop: 20,
      
      alignItems: 'center',
      justifyContent: 'space-around',
    },
   
    loginView: {
      marginTop: 100,
      backgroundColor: 'transparent',
      width: 250,
      height: 400,
    },
    loginTitle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    travelText: {
      color: 'white',
      fontSize: 30,
      paddingTop:40,
      fontFamily: 'bold',
    },
    plusText: {
      color: 'white',
      fontSize: 30,
      fontFamily: 'regular',
    },
    loginInput: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerView: {
      marginTop: 20,
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });








EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, {createProfile, getCurrentProfile})(EditProfile);