import react from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();
export default function CrateScreen(){

    return(
       
<View style={{flex:1,alignContent:'center',justifyContent:'center',alignItems:'center',}}>
            <Text style={{flex:1,fontSize:50,color:'blue'}}>Hello</Text>
        </View>    );
}