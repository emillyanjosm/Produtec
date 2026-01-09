import React, { useState } from "react";
import { useFonts } from 'expo-font';
import { 
  View, ScrollView, Text, ImageBackground, TouchableOpacity, StyleSheet, Modal, FlatList, TextInput } from "react-native";

export default (props) => {

  const [modalVisivel, setModalVisivel] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("Selecione");

  const opcoes = [
    { id: '1', label: 'Colaborador Cidadão' },
    { id: '2', label: 'Catador Associado' }, 
  ];

  const selecionarOpcao = (item) => {
    setTipoUsuario(item.label);
    setModalVisivel(false);
  };

  const [fontsLoaded] = useFonts({
    'Guity': require('../assets/quity.otf'),
    'Rawline':require('../assets/rawline-400.ttf')
  });
  

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.column}>
        <Text style={styles.text}>
          {"Cadastro"}
        </Text>
      </View>
      <View style={styles.view2}>
        <View >
          <View style={styles.box2}>
          </View>
          <View style={styles.column2}>
            <Text style={styles.text2}>
              {"NOME"}
            </Text>
            <View style={styles.view4}>
              <TextInput
                style={styles.box}
                placeholder="Digite seu nome"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <View >
          <View style={styles.box2}>
          </View>
          <View style={styles.column2}>
            <Text style={styles.text2}>
              {"SOBRENOME"}
            </Text>
            <View style={styles.view4}>
              <TextInput
                style={styles.box}
                placeholder="Digite seu sobrenome"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <View >
          <View style={styles.column2}>
            <Text style={styles.text3}>
              {"TIPO DE USUÁRIO"}
            </Text>
            <TouchableOpacity style={styles.view5} onPress={() => setModalVisivel(true)}>
              <View style={styles.row}>
                <Text style={styles.text4}> {tipoUsuario} </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.view6}>
        <View style={styles.box2}>
        </View>
      </View>
      <View style={styles.view2}>
        <View >
          <View style={styles.box2}>
          </View>
          <View style={styles.column2}>
            <Text style={styles.text2}>
              {"EMAIL"}
            </Text>
            <View style={styles.view4}>
              <TextInput
                style={styles.box}
                placeholder="Digite seu email"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.view2}>
          <View >
            <View style={styles.box2}>
            </View>
            <View style={styles.column2}>
              <Text style={styles.text2}>
                {"SENHA"}
              </Text>
              <View style={styles.view4}>
                <TextInput
                  style={styles.box}
                  placeholder="Digite uma senha de até 8 caractéres"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <View >
          <View style={styles.box2}>
          </View>
          <View style={styles.column2}>
            <Text style={styles.text2}>
              {"REPITA A SENHA"}
            </Text>
            <View style={styles.view4}>
              <TextInput
                style={styles.box}
                placeholder="Digite novamente sua senha"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view7}>
        <View style={styles.box2}>
        </View>
      </View>
      <View style={styles.view8}>
        <View style={styles.row2}>
          <View >
            <TouchableOpacity style={styles.button2} onPress={() => alert('Pressed!')}>
              <Text style={styles.text8}>
                {"Confirmar Cadastro"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisivel}
          onRequestClose={() => setModalVisivel(false)}>
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setModalVisivel(false)}>
            <View style={styles.modalContent}>
              <FlatList
                data={opcoes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => selecionarOpcao(item)}>
                    <Text style={styles.modalText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 260,
    height: 42,
  },
  box2: {
    width: 276,
    height: 20,
  },
 
  button2: {
    alignSelf: "flex-start",
    backgroundColor: "#7F7F7F",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
    shadowColor: "#00000026",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3,
    elevation: 3,
  },
  column: {
    alignSelf: "center",
    paddingTop: 50,
  },

  column2: {
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
  },
  row2: {
    flexDirection: "row",
  },
  scrollView: {
    backgroundColor: "#F0EDDC",
  },
  text: {
    color: "#2F8A54",
    fontSize: 48,
    marginTop: 38,
    marginBottom: 22,
    alignSelf: "center",
    fontFamily:"Guity",
  },
  text2: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
  },
  text3: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 162,
  },
  text4: {
    color: "#49454F",
    fontSize: 16,
    marginRight: 151,
  },
 
  text8: {
    color: "#FFFFFF",
    fontSize: 14,
  },
 
  view2: {
    alignItems: "center",
  },
 
  view4: {
    alignSelf: "flex-start",
    backgroundColor: "#C8DC6D4F",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingVertical: 16,
    paddingLeft: 16,
  },
  view5: {
    alignSelf: "flex-start",
    borderColor: "#79747E",
    borderRadius: 4,
    borderWidth: 1,
    paddingVertical: 16,
    paddingLeft: 16,
  },
  view6: {
    alignItems: "center",
    marginBottom: 32,
  },
  view7: {
    alignItems: "center",
    marginBottom: 15,
  },
  view8: {
    alignItems: "center",
    marginBottom: 80,
  },
  // ESTILOS CORRIGIDOS ABAIXO
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 276,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
  }
});