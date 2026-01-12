import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet, Modal } from "react-native";
import { useFonts } from 'expo-font';
import { Ionicons} from '@expo/vector-icons';
import { Avatar } from '@rneui/themed'


export default ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    'Guity': require('../assets/quity.otf'),
    'Rawline':require('../assets/rawline-400.ttf')
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.row}>
        <Text style={styles.text}>
          {"Olá SR. Fulano"}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notificacao1')}>
        <Ionicons name="notifications-circle-sharp" size={35} color="white" paddingTop={44}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view} onPress={() => navigation.navigate('Perfilconfig')}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/itsu7d2d_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={styles.image}
            
          />
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#368642",
    marginBottom: 15,
    alingItems: "center",
    paddingTop: 20

  },
  text: {
    color: "#FFFFFF",
    fontSize: 32,
    marginTop: 45,
    marginLeft: 21,
    fontFamily:"Guity",
    flex: 1
  },
  view: {
    backgroundColor: "#368642",
    paddingVertical: 13,
    paddingHorizontal: 18,
    marginTop: 27,
    marginBottom: 8,
    marginRight: 6,
  },
  image: {
    width: 40,
    height: 40,
  },

});