import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { TextInput } from 'react-native';



const tukLogo=require("../assets/images/login.png")

export default function OtpNoScreen() {
  const navigation = useNavigation();

    return ( 
    <View style={tw`flex-1 bg-white`}>
    <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start bg-orange-400`}>
            <TouchableOpacity style={tw`bg-orange-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`} onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size="20" color="white" />
            </TouchableOpacity>
            <Text style={tw`text-orange-400 font-bold text-lg tracking-wide mt-3 ml-5`}>Create New Account</Text>
        </View>
        <View style={tw`flex-1 justify-center items-center mt-15`}>
                    <Image source={tukLogo} style={{width:150,height:150}}/>
                    <Text style={tw`text-orange-400 font-bold text-4xl tracking-wide leading-normal`}>Tuk-Tuk </Text>
        </View>
    </SafeAreaView>
    <View style={tw`flex-1 px-8 pt-8 mt-5 bg-white rounded-t-10`}>
        <View style={tw`form space-y-2`}>
            <Text style={tw`text-gray-700 ml-4 mb-8 font-bold text-xl text-center`}>Enter OTP</Text>
            <Text style={tw`text-gray-700 ml-4 mb-10 font-bold text-xl text-center`}>An OTP has been sent to .....</Text>
            <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-20 text-center`} value="23496" placeholder="Enter Your OTP number"/>

            
            <TouchableOpacity style={tw`py-3 rounded-full bg-orange-400`} onPress={() =>navigation.navigate("SignUp")}>
              <Text style={tw`font-xl font-bold text-center text-white text-base`}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  </View>
    )
}