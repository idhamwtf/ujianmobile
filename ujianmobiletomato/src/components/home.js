import React, { useEffect } from 'react'
import { View,Text,StyleSheet, ScrollView,Image } from 'react-native'
import { Header } from 'react-native-elements'
import Axios from 'axios'
import Icons from './Icons'
import Kartu from './kartu'
import {Card} from 'native-base'

const Home=(props)=>{
    // useEffect(()=>{
    //     Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
    //         headers:{
    //             "user-key":"258df5eea14e19c10b6d37fb8b28321e"
    //         }
    //     }).then((res)=>{
    //         console.log(res)
    //     }).catch((err)=>{
    //         console.log(err,'masuk error')
    //     })

    // useEffect(async ()=>{
    //     try{
    //         const res = await Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
    //             headers:{
    //                 "Content-Type": "application/x-www-form-urlencoded",
    //                 Accept: "application/json",
    //                 "user-key":"258df5eea14e19c10b6d37fb8b28321e"}})
    //         console.log(res)

    //     }catch(error){
    //         console.log(error, 'masukerror')
    //     }
    // })
    return(
        <View >
            <Header
                containerStyle={{
                backgroundColor: 'tomato',
                }}>
                <Text>{props.route.params.nama}</Text>
            </Header>

            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Icons nama={'credit-card'} tipe={'entypo'} title={'Credit'}/>
                <Icons nama={'credit-card'} tipe={'entypo'} title={'Credit'}/>
                <Icons nama={'credit-card'} tipe={'entypo'} title={'Credit'}/>
                <Icons nama={'credit-card'} tipe={'entypo'} title={'Credit'}/>
                <Icons nama={'credit-card'} tipe={'entypo'} title={'Credit'}/>
                <Icons nama={'credit-card'} tipe={'entypo'} title={'Credit'}/>
                <Icons nama={'credit-card'} tipe={'entypo'} title={'Credit'}/>
                <Icons nama={'credit-card'} tipe={'entypo'} title={'Credit'}/>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <Card >
                <Image 
                style={{height:150, width:'100%'}}
                source={{uri:'https://www.apptunix.com/blog/wp-content/uploads/sites/3/2018/12/On-demand-food-delivery-app-1.jpg'}}
                />
            </Card>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
            </View>

        </View>
    )
}


export default Home;