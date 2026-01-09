import React from "react";
import {  View, ScrollView, ImageBackground, Text, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';


export default ({navigation}) => {

  const [fontsLoaded] = useFonts({
    'Guity': require('../assets/quity.otf'),
    'Rawline':require('../assets/rawline-400.ttf')
  });
  
	return (
    <ScrollView  style={styles.scrollView}>
		<View style={styles.row}>
			<Text style={styles.text}>
				{"P.PRODUTEC"}
			</Text>
			<TouchableOpacity style={styles.view} onPress={() => navigation.navigate('Perfilconfig')}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/itsu7d2d_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={styles.image}
            
          />
        </TouchableOpacity>
		</View>
		<Image
			source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/1g3tyiuw_expires_30_days.png"}} 
			resizeMode = {"stretch"}
			style={styles.image2}
		/>
		<View style={styles.row2}>
			<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
				<Text style={styles.text2}>
					{"Pontos de Coleta"}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
				<Text style={styles.text2}>
					{"Pontos com Material"}
				</Text>
			</TouchableOpacity>
		</View>
		<View style={styles.view2}>
			<Image
				source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/nuzgjr70_expires_30_days.png"}} 
				resizeMode = {"stretch"}
				style={styles.image3}
			/>
		</View>
	</ScrollView>
   )
}
  
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	}, 

	button: {
		backgroundColor: "#368642",
		borderRadius: 100,
		paddingVertical: 10,
		paddingHorizontal: 16,
		marginBottom: 26,
    marginRight: 54,

	},
	button2: {
		backgroundColor: "#088395",
		borderRadius: 100,
		paddingVertical: 10,
		paddingHorizontal: 16,
		marginBottom: 26,
    marginLeft:1,
	},
	image: {
		width: 40,
		height: 40,
	},
	image2: {
		height: 40,
		marginBottom: 11,
		marginHorizontal: 17,
	},
	image3: {
		width: 54,
		height: 54,
		marginRight: 36,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#356C7D",
		marginBottom: 15,
	},
	row2: {
		flexDirection: "row",
		marginBottom: 582,
		marginHorizontal: 17,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F3F3F3",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 32,
		marginTop: 55,
		marginLeft: 21,
    fontFamily:"Guity"
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	view: {
		backgroundColor: "#356C7D",
		paddingVertical: 13,
		paddingHorizontal: 18,
		marginTop: 27,
		marginBottom: 8,
		marginRight: 6,
	},
	view2: {
		alignItems: "flex-end",
		marginBottom: 48,
	},
});