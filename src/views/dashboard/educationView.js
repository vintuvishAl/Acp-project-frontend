import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import {  Button } from 'react-native-elements';
 
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {

  onDelete(id){
    this.props.deleteEducation(id)
  }
    render(){
        
        const education = this.props.education.map(edu => (
          
            
              <View key = {edu._id}
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  backgroundColor: 'grey',
                  borderRadius: 5,
                  alignItems: 'center',
                  marginHorizontal: 10,
                  
                  marginBottom: 10,
                }}
              >
              <Text style={{fontSize:20,color:'#f1f2f6',paddingTop:10}}>Your Education</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                  <Text style={{fontFamily: 'bold',fontSize: 10,color: '#ffeaa7',marginLeft: -15,}}>School - </Text>
                  <Text style={{fontFamily: 'bold',fontSize: 10,color: '#ffeaa7',marginLeft: -15,}}>Degree - </Text>
                  <Text style={{fontFamily: 'bold',fontSize: 10,color: '#ffeaa7',marginLeft: -15,}}>Field Of Study - </Text>
                  <Text style={{fontFamily: 'bold',fontSize: 10,color: '#ffeaa7',marginLeft: -15,}}>From - </Text>
                  <Text style={{fontFamily: 'bold',fontSize: 10,color: '#ffeaa7',marginLeft: -15,}}>To -</Text>
                  

                   
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                  <Text style={{fontFamily: 'bold',fontSize: 10,color: 'white',marginLeft: -15,}}> {edu.school}</Text>
                  <Text style={{fontFamily: 'bold',fontSize: 10,color: 'white',marginLeft: -15,}}>{edu.degree}</Text>
                  <Text style={{fontFamily: 'bold',fontSize: 10,color: 'white',marginLeft: -15,}}>{edu.fieldofstudy}</Text>
                <Text style={{fontFamily: 'bold',fontSize: 10,color: 'white',marginLeft: -15,}}>{Moment(edu.from).format('d MMM YYYY')}</Text>
                  <Text style={{fontFamily: 'bold',fontSize: 10,color: 'white',marginLeft: -15,}}> {Moment(edu.to).format('d MMM YYYY')}</Text>
                  

                   
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

<View style={{ flex: 1, alignItems: 'center',paddingBottom:10 }}>
                    <Button
                      title="Delete"
                      buttonStyle={{
                        height: 20,
                        width: 120,
                        backgroundColor: '#d63031',
                        borderRadius: 5,
                      }}
                      titleStyle={{
                        fontFamily: 'regular',
                        fontSize: 13,
                        color: 'white',
                      }}
                      onPress={this.onDelete.bind(this, edu._id)}
                      underlayColor="transparent"
                    />
                  </View>
                
              </View>
              
           
           
        ))
        return(
            <View>
               {education}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infoTypeLabel: {
        fontSize: 15,
        textAlign: 'right',
        color: 'rgba(126,123,138,1)',
        fontFamily: 'regular',
        paddingBottom: 10,
      },
      infoAnswerLabel: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'regular',
        paddingBottom: 10,
      },
   
  });

  Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired,
  }

export default connect(null, { deleteEducation })(Education);