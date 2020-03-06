import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


const Icons=({nama,tipe,title})=>{
    return(
        <View style={{ marginTop:15, width: '25%', alignItems:'center'}}>
            <Icon
                name={nama}
                type={tipe}
                color='tomato'
            />
            <Text style={{fontSize:15}}>{title}</Text>
        </View>
    )
}

export default Icons;