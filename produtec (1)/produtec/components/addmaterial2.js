import React from "react";
import {  View, ScrollView, Text, ImageBackground, TouchableOpacity, StyleSheet, } from "react-native";
import { useFonts } from 'expo-font';


export default ({ navigation }) => {
 const [fontsLoaded] = useFonts({
    'Guity': require('../assets/quity.otf'),
    'Rawline':require('../assets/rawline-400.ttf')
  });

	return ( <ScrollView  style={styles.scrollView}>
	<View style={styles.row}>
	
		<View style={styles.view}>
		
		</View>
	</View>
	<View style={styles.view2}>
		<Text style={styles.text2}>
			{"Adicione os materiais para coleta"}
		</Text>
	</View>
	<View style={styles.view3}>
		<Text style={styles.text3}>
			{"É essencial que ele esteja arrumado conforme dito no Tutorial"}
		</Text>
    <Text style={styles.text4}  onPress={() => navigation.navigate('Tutorial1')} >
    {"Tutorial Aqui!"}
    </Text>
	</View>
<TouchableOpacity>
	<ImageBackground 
		source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/ax8nuzt2_expires_30_days.png"}} 
		resizeMode = {'stretch'}
		style={styles.view8}
		>
		<Text style={styles.text9}>
			{"mudar local"}
		</Text>
	</ImageBackground>
  </TouchableOpacity>
  <TouchableOpacity  onPress={() => navigation.navigate('Addmaterial3')}>
	<ImageBackground 
		source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/50q6oilc_expires_30_days.png"}} 
		resizeMode = {'stretch'}
		style={styles.view9}
		>
		<Text style={styles.text10}>
			{"Adicionar Material"}
		</Text>
	</ImageBackground>
  </TouchableOpacity>
</ScrollView>

)}


const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#368642",
		paddingHorizontal: 13,
		marginBottom: 35,
	},
	scrollView: {
		backgroundColor: "#F0EDDD",
	},

	text2: {
		color: "#45B071",
		fontSize: 42,
		textAlign: "center",
		width: 266,
    fontFamily:"Guity"
	},
	text3: {
		color: "#333333",
		fontSize: 16,
		textAlign: "center",
		width: 259,
	},
	text4: {
		color: "blue",
		fontSize: 16,
		marginBottom: 37,
    textDecorationLine:"underline"
	},
	
	text9: {
		color: "#FF383C",
		fontSize: 20,
	},
	text10: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
	},
	view: {
		backgroundColor: "#368642",
		paddingVertical: 13,
		paddingHorizontal: 18,
		marginTop: 27,
		marginBottom: 8,
	},
	view2: {
		alignItems: "center",
		marginBottom: 23,
	},
	view3: {
		alignItems: "center",
		marginBottom: 86,
	},

	view8: {
		alignItems: "center",
		paddingVertical: 16,
		marginBottom: 8,
		marginHorizontal: 27,
	},
	view9: {
		alignItems: "center",
		paddingVertical: 16,
		marginBottom: 32,
		marginHorizontal: 27,
	},
});