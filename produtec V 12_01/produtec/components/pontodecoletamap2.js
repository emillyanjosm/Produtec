import React from "react";
import {  View, ScrollView, Text, ImageBackground, TouchableOpacity, StyleSheet, Image,  } 
from "react-native";
import { useFonts } from 'expo-font';


export default ({ navigation }) => {
 const [fontsLoaded] = useFonts({
    'Guity': require('../assets/quity.otf'),
    'Rawline':require('../assets/rawline-400.ttf')
  });

	return ( 
    
	<ScrollView  style={styles.scrollView}>
	
		
	   <View style={styles.row}>
		  <View style={styles.view}>
	    	<Text style={styles.text}>
					{"Selecione um ponto de coleta no mapa"}
			  </Text>
	  	</View>
	    </View>
			<ImageBackground 
				source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/oj6e3hjr_expires_30_days.png"}} 
				resizeMode = {'stretch'}
				style={styles.column}
				>
				
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/02d45cdf_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={styles.image2}
				/>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/rhuq7udx_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={styles.image3}
				/>
        <TouchableOpacity>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/c6uekrgx_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={styles.image4}
				/>
        </TouchableOpacity>

        <View style={styles.view2}>
          <View >
            
          </View>
        </View>
        
				
			</ImageBackground>
	</ScrollView>
  ) }

  const styles = StyleSheet.create({


	column: {
		paddingTop: 39,
	},

	image2: {
		width: 32,
		height: 39,
		marginBottom: 151,
		marginLeft: 73,
	},
	image3: {
		width: 34,
		height: 34,
		marginBottom: 116,
		marginLeft: 245,
	},
	image4: {
		width: 32,
		height: 39,
		marginBottom: 248,
		marginLeft: 106,
	},
	row: {
		flexDirection: "row",
		backgroundColor: "#368642",
		paddingTop: 18,
		paddingBottom: 7,
		paddingHorizontal: 6,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F3F3F3",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal:50
	},
	text8: {
    color: "#FFFFFF",
    fontSize: 15,
    alignSelf:"center",
    paddingTop:6,
    fontWeight: "bold"
  },

  view: {
		backgroundColor: "#368642",
		paddingVertical: 10,
		paddingHorizontal: 18,
		marginTop: 27,
		marginBottom: 8,
	},
  
  	view2: {
		alignItems: "center",
		paddingBottom: 30,
	},
});