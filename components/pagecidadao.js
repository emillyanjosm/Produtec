import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet, Modal } from "react-native";
import { useFonts } from 'expo-font';


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
        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/1g3tyiuw_expires_30_days.png" }}
        resizeMode={"stretch"}
        style={styles.image2}
      />

      <View style={styles.row2}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Pressed!')}>
          <Text style={styles.text2}>
            {"Minhas Áreas"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => alert('Pressed!')}>
          <Text style={styles.text2}>
            {"Descobrir Áreas cadastradas"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view2}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/FjIUQ5mUYZ/nuzgjr70_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={styles.image3}
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>O que deseja fazer?</Text>
            
            <TouchableOpacity 
              style={styles.modalButtonPrimary}
            >
              <Text style={styles.text2}>Adicionar Ponto de Coleta </Text>
            </TouchableOpacity>

             <TouchableOpacity 
              style={styles.modalButtonPrimary} 
               onPress={() => navigation.navigate('Addmaterial')}
            >
              <Text style={styles.text2}>Adicionar Materiais Recicláveis</Text>
            </TouchableOpacity>

             <TouchableOpacity 
              style={styles.modalButtonPrimary} 
              onPress={() => { alert('Ação 3'); setModalVisible(false); }}
            >
              <Text style={styles.text2}>Adicionar Nova Área Arborizada</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.modalButtonSecondary} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.text2}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  },
  text: {
    color: "#FFFFFF",
    fontSize: 32,
    marginTop: 55,
    marginLeft: 21,
    fontFamily:"Guity"
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
  image2: {
    height: 47,
    marginBottom: 11,
    marginHorizontal: 17,
  },
  row2: {
    flexDirection: "row",
    marginBottom: 582,
    marginHorizontal: 17,
  },
  button: {
    backgroundColor: "#368642",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 26,
    marginRight: 29,
  },
  button2: {
    backgroundColor: "#088395",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 26,
    marginLeft: 1,
  },
  text2: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center"
  },
  view2: {
    alignItems: "flex-end",
    marginBottom: 48,
  },
  image3: {
    width: 54,
    height: 54,
    marginRight: 36,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 280,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  modalButtonPrimary: {
    backgroundColor: "#368642",
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
    marginBottom: 10,
  },
  modalButtonSecondary: {
    backgroundColor: "#7F7F7F",
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
  },
});