import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native'
import {Card} from 'native-base'

const Kartu =()=>{
    return(
        <ScrollView style={{width:'50%', marginVertical:10}}> 
            <Card >
                <Image 
                style={{height:150, width:'100%'}}
                source={{uri:'https://www.apptunix.com/blog/wp-content/uploads/sites/3/2018/12/On-demand-food-delivery-app-1.jpg'}}
                />
            </Card>
        </ScrollView>
        )
}
export default Kartu;