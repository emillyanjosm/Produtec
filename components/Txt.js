import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/4ug5qitd_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={styles.image}
				/>
				<View style={styles.view}>
					<Text style={styles.text}>
						{"Meu perfil é de:"}
					</Text>
				</View>
				<View style={styles.view2}>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text2}>
							{"Catador Associado"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view3}>
					<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text2}>
							{"Colaborador Cidadão"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view4}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/pasqlk7o_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	button: {
		backgroundColor: "#088395",
		borderRadius: 100,
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
	button2: {
		backgroundColor: "#368642",
		borderRadius: 100,
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
	image: {
		width: 298,
		height: 213,
		marginBottom: 159,
	},
	image2: {
		width: 206,
		height: 108,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F0EDDC",
	},
	text: {
		color: "#368642",
		fontSize: 32,
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 14,
	},
	view: {
		alignItems: "center",
		marginBottom: 24,
	},
	view2: {
		alignItems: "center",
		marginBottom: 29,
	},
	view3: {
		alignItems: "center",
		marginBottom: 268,
	},
	view4: {
		alignItems: "flex-end",
	},
});
