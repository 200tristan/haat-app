import React, { Component } from 'react';
import { View, Text, ListView, FlatList, StyleSheet} from 'react-native';
import { Button, Card, TextInput, BottomNavigation, Title, Paragraph, ActivityIndicator } from 'react-native-paper';
import globalStyle from '../../global.style';
import HeaderComponent from '../../components/header.component';
import I18n from '../../utils/I18n';
import Currency from '../../components/currency.component'
import ApiHelper from '../../utils/api.helper';
import colors from '../../config/theme';

const styles = StyleSheet.create ({
    item: {
       //flex: '3',
       flexDirection: 'column',
       justifyContent: 'space-between',
       alignItems: 'stretch',
       paddingTop: '2%',
       paddingLeft: '2%',
       paddingRight: '2%',
       borderColor: '#0477BF',
       borderWidth: 3,
       backgroundColor:'#0477BF',
    },
    image: {


    }
 })
export default class ConsumerF extends Component {
    
    state = {
        data: [],
        page: 1,
        loading: true,
        loadingMore: false,
        error:null
  
    };

    _handleLoadMore = () => {

    }

    
    
    constructor(props) {
        super(props);
        this.state = {
          dataSource: null,
          isLoading: true,
          list:[]
        };
        this.getCartList();
    }

    static navigationOptions = {
    };

    getCartList = () =>{
            ApiHelper.getCropList().then(res => {
                this.setState({
                    list: res.data.docs
                });
            })
    }
    state = {
        text: ''
      };
    render() {
        return (
            <View >
                <FlatList 
                
                contentContainerStyle={{ paddingBottom: 55}}

                //keyExtractor={(item, ) => item.id }
                data={this.state.list}
                renderItem={
                    ({item}) => ( <View key = {(item.id)} style = {styles.item}>
                        <Card>
                            <Card.Title title={item.hindi_name} subtitle={item.english_name} />
                            <Card.Cover source={{uri: item.image}}/>
                            <TextInput
                                style='outlined'
                                label='Quantity'
                                value={this.state.text}
                                onChangeText={text => this.setState({ text })}
                                 
                                keyboardType={'numeric'}
                            />
                            <Card.Actions>
                                <Button>
                                    Add to cart
                                </Button>
                            </Card.Actions>
                        </Card>
                        
                        
                    </View>)
                }/>
                </View>
            )
                    
                

        
    }
}

