import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  LayoutAnimation,
  Dimensions,
  Image,
  UIManager,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Font } from 'expo';
import { Input, Button } from 'react-native-elements';
import {connect} from 'react-redux';
import { addEducation } from '../../actions/profileActions';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/FontAwesome';


// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);



const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class AddEducation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      selectedType: null,
      fontLoaded: false,
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      discription: '',
      errors :{}
      
    };

    
   
    this.onSubmit= this.onSubmit.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      light: require('../../../assets/fonts/Ubuntu-Light.ttf'),
      bold: require('../../../assets/fonts/Ubuntu-Bold.ttf'),
      lightitalic: require('../../../assets/fonts/Ubuntu-Light-Italic.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  
  componentWillReceiveProps(nextProps){
       if(nextProps.errors){
           this.setState({errors: nextProps.errors});
       }
  }

 
  onSubmit(e) {
    
    e.preventDefault();
    
    const eduData = {
      school : this.state.school,
      degree : this.state.degree,
      fieldofstudy : this.state.fieldofstudy,
      from : this.state.from,
      to : this.state.to,
      discription: this.state.discription
    };
    
    this.props.addEducation(eduData, this.props.navigation);

  
  }



  

  setSelectedType = selectedType =>
    LayoutAnimation.easeInEaseOut() || this.setState({ selectedType });

  render() {
    const {
      isLoading, fontLoaded, school, degree, fieldofstudy, from, to, errors } = this.state;
    return !fontLoaded ? (
      <Text> Loading... </Text>
    ) : (
      <ScrollView
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={styles.formContainer}
        >
          <Text style={styles.signUpText}>Add Education</Text>
         
          
          
          <View style={{ width: '80%', alignItems: 'center' }}>
            <FormInput
              refInput={input => (this.schoolInput = input)}
              icon="university"
              value={school}
              onChangeText={school => this.setState({ school })}
              placeholder="School*"
              returnKeyType="next"
              errorMessage={
                errors.school 
              }
              onSubmitEditing={() => {
                
                this.degreeInput.focus();
              }}
            />
            <FormInput
              refInput={input => (this.degreeInput = input)}
              icon="graduation-cap"
              value={degree}
              onChangeText={degree => this.setState({ degree })}
              placeholder="Degree*"
              returnKeyType="next"
              errorMessage={
                errors.degree 
              }
              onSubmitEditing={() => {
                
                this.fieldofstudyInput.focus();
              }}
            />
            <FormInput
              refInput={input => (this.fieldofstudyInput = input)}
              icon="user-o"
              value={fieldofstudy}
              onChangeText={fieldofstudy => this.setState({ fieldofstudy })}
              placeholder="Field of Study"
              secureTextEntry
              returnKeyType="next"
              errorMessage={
                errors.fieldofstudy
              }
              onSubmitEditing={() => {
               
                this.passwordInput.focus();
              }}
            />
              <DatePicker
        style={styles.inputContainer}
        date={from}
        mode="date"
        placeholder="Form date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        placeholderTextColor="#7384B4"
        leftIcon={<Icon name="calendar" color="#7384B4" size={18} />}
        onDateChange={(from) => this.setState({ from })}
      />
       <DatePicker
        style={styles.inputContainer}
        date={to}
        mode="date"
        placeholder="Expected or Finished date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        placeholderTextColor="#7384B4"
        leftIcon={<Icon name="calendar" color="#7384B4" size={18} />}
        onDateChange={to => this.setState({ to })}
      />
          </View>
          <Button
            loading={isLoading}
            title="Add Education"
            containerStyle={{ flex: -1 }}
            buttonStyle={styles.signUpButton}

            linearGradientProps={{
              colors: ['#FF9800', '#F44336'],
              start: [1, 0],
              end: [0.2, 0],
            }}
            titleStyle={styles.signUpButtonText}
            onPress={this.onSubmit}
            disabled={isLoading}
          />
        </KeyboardAvoidingView>
        
      </ScrollView>
    );
  }
}



export const FormInput = props => {
  const { icon, refInput, ...otherProps } = props;
  return (
    <Input
      {...otherProps}
      ref={refInput}
      inputContainerStyle={styles.inputContainer}
      leftIcon={<Icon name={icon} color="#7384B4" size={18} />}
      inputStyle={styles.inputStyle}
      autoFocus={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
      errorStyle={styles.errorInputStyle}
      autoCorrect={false}
      blurOnSubmit={false}
      placeholderTextColor="#7384B4"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#293046',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'light',
  },
  whoAreYouText: {
    color: '#7384B4',
    fontFamily: 'bold',
    fontSize: 14,
  },
  userTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  userTypeItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  userTypeItemContainerSelected: {
    opacity: 1,
  },
  userTypeMugshot: {
    margin: 4,
    height: 70,
    width: 70,
  },
  userTypeMugshotSelected: {
    height: 100,
    width: 100,
  },
  userTypeLabel: {
    color: 'yellow',
    fontFamily: 'bold',
    fontSize: 11,
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(110, 120, 170, 1)',
    height: 45,
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
    fontFamily: 'light',
    fontSize: 16,
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: 'center',
    color: '#F44336',
  },
  signUpButtonText: {
    fontFamily: 'bold',
    fontSize: 13,
  },
  signUpButton: {
    width: 250,
    borderRadius: 50,
    height: 45,
  },
  loginHereContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alreadyAccountText: {
    fontFamily: 'lightitalic',
    fontSize: 12,
    color: 'white',
  },
  loginHereText: {
    color: '#FF9800',
    fontFamily: 'lightitalic',
    fontSize: 12,
  },
});


AddEducation.propTypes = {
 addEducation : PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(AddEducation);