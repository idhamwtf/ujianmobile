import React, {useEffect, useState} from 'react'
import { View,Text, Button } from 'react-native'
import {CommonActions} from '@react-navigation/native'
import { Icon, Input } from 'react-native-elements'

const Login=(props)=>{
    // useEffect(()=>{
    //     const resetAction = CommonActions.reset({
    //         index:0,
    //         routes:[
    //             {name:'Drawermain'}
    //         ]
    //     })
    //     props.navigation.dispatch(resetAction)
    // },[]) 

        const [username,editusername] = useState('')
        const [userkosong,edituserkosong] = useState(false)
    return(
        <View>
            {/* <Text>ini Login</Text> */}
            <Text 
            style={{ 
            color: 'tomato',
            fontSize:35,
            textAlign:'center'
            }}>
                Tomato App
            </Text>

            <Icon
            name='rowing'
            size={50}
            color='tomato'
            />
            <Input
                placeholder='Username'
                onChangeText={text => editusername(text)}
            />
            <Button 
            title='Login' 
            color='tomato'
            onPress={()=>props.navigation.navigate('Home', {nama:username})}
            />
        </View>
    )
}

export default Login;