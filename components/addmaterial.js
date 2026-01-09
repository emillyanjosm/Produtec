import React from "react";
import {  View, ScrollView, Text, ImageBackground, TouchableOpacity, StyleSheet, } from "react-native";
import { useFonts } from 'expo-font';


export default ({ navigation }) => {
   const [fontsLoaded] = useFonts({
    'Guity': require('../assets/quity.otf'),
    'Rawline':require('../assets/rawline-400.ttf')
  });
	return (

    <ScrollView  style={styles.scrollView}>
	<View style={styles.row}>
		<View style={styles.box}>
		</View>
	</View>

	<Text style={styles.text2}>
		{"Escolha uma opção"}
	</Text>

	<TouchableOpacity style={styles.row2}    onPress={() => navigation.navigate('Addmaterial2')}>
		<Text style={styles.text3}>
			{"Produto para retirada de um coletor"}
		</Text>
	</TouchableOpacity>

	<TouchableOpacity style={styles.row3}>
		<Text style={styles.text3}>
			{"Vou levar o produto para o ponto de coleta"}
		</Text>	
	</TouchableOpacity>
  
  <TouchableOpacity> 
	<ImageBackground 
		source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/ji2g09d5_expires_30_days.png"}} 
		resizeMode = {'stretch'}
		style={styles.view}
		>
		<Text style={styles.text4}>
			{"Próximo"}
		</Text>
	</ImageBackground>
  </TouchableOpacity>
</ScrollView>
  )}

  const styles = StyleSheet.create({
	box: {
		backgroundColor: "#368642",
		paddingVertical: 13,
		paddingHorizontal: 18,
		marginTop: 27,
		marginBottom: 8,
	},

	row: {
		flexDirection: "row",
		backgroundColor: "#368642",
		paddingHorizontal: 13,
		marginBottom: 50,
	},
	row2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 25,
		paddingRight: 22,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 22,
		marginBottom: 27,
		marginHorizontal: 23,
	},
	row3: {
		flexDirection: "row",
		backgroundColor: "#FFFFFF",
		borderRadius: 25,
		paddingTop: 20,
		paddingBottom: 20,
		paddingHorizontal: 22,
		marginBottom: 64,
		marginHorizontal: 23,
	},
	scrollView: {
		backgroundColor: "#F0EDDD",
	},

	text2: {
		color: "#45B071",
		fontSize: 30,
		marginBottom: 27,
    fontFamily:"Guity",
    textAlign:"center"
	},
	text3: {
		color: "#333333",
		fontSize: 16,
    align:"center"
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
	},
	view: {
		alignItems: "center",
		paddingVertical: 16,
		marginBottom: 19,
		marginHorizontal: 27,
	},
});