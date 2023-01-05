import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image} from 'react-native';


function Display(props){

    const renderList = ({restList}) => {
        if(restList){
            return restList.map((item) => {
                return(
                    <View key={item.restaurant_id}>
                        <Image  style={styles.logo}
                        source={{uri: item.restaurant_thumb}}
                        />
                        <Text>{item.restaurant_name}</Text>
                    </View> 
                )
            })
        }
    }

    return(
        <View>
            <ScrollView style={styles.container}>
                {renderList(props)}
            </ScrollView>
        </View>
    )

    
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    text:{
        fontSize:42
    },
    logo:{
        height:170,
        width:170
    }
  });

export default Display