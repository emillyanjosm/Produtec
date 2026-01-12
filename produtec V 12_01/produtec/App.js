import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { StyleSheet, Text, View } from 'react-native';
import Capa from "./components/capa";
import Login from "./components/login1";
import Logingoogle from "./components/logingoogle";
import Cadastro from "./components/cadastro";
import Recuperacao01 from "./components/recuperacao01";
import Recuperacao02 from "./components/recuperacao02";
import Recuperacao03 from "./components/recuperacao03";
import Pagecidadao from "./components/pagecidadao";
import Pagecatador from "./components/pagecatador";
import Perfilconfig from "./components/perfilconfig";
import Addmaterial from "./components/addmaterial";
import Addmaterial2 from "./components/addmaterial2";
import Tutorial1 from "./components/tutorial1";
import Tutorial2 from "./components/tutorial2";
import Addmaterial3 from "./components/addmaterial3";
import Endereco1 from "./components/endereco1"
import Pontodecoletamap from "./components/Pontodecoletamap"
import Pontodecoletamap2 from "./components/pontodecoletamap2"
import Notificacao1 from "./components/notificacao1"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const screenOptionsCidadao = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === 'Adicionar Materiais' || route.name === 'Minhas Coletas') {
      return <FontAwesome5 name="box-open" size={size} color={color} />;
    }
    let iconName;
    if (route.name === 'Início') iconName = 'home';
    else if (route.name === 'Pontos de Coleta' ) iconName = 'location';

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#368642',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
});


function CidadaoTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptionsCidadao}>
      <Tab.Screen name="Início" component={Pagecidadao} />
      <Tab.Screen name="Adicionar Materiais" component={Addmaterial} />
      <Tab.Screen name="Pontos de Coleta" component={Pontodecoletamap} />
    </Tab.Navigator>
  );
}

const screenOptionsCatador = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === 'Minhas coletas') {
      return <FontAwesome5 name="box-open" size={size} color={color} />;
    }
    let iconName;
    if (route.name === 'Início') iconName = 'home';
    else if (route.name === 'Meus Pontos de coleta') iconName = 'location';

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#088395',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
});

function CatadorTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptionsCatador}>
      <Tab.Screen name="Início" component={Pagecatador} />
      <Tab.Screen name="Minhas coletas" component={Addmaterial} /> 
      <Tab.Screen name="Meus Pontos de coleta" component={Pontodecoletamap2} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Capa">
        <Stack.Screen name="Capa" 
        component={ Capa}
        options={{ headerShown: false }} />

        <Stack.Screen name="Login"
         component={Login} 
         options={{ title: 'Acessar' }} />

        <Stack.Screen name="Perfil" 
        component={Logingoogle} 
        options={{ title: 'Escolha seu Perfil' }} />

        <Stack.Screen name="Cadastro" 
        component={Cadastro}
         options={{ title: ' ' }} />

        <Stack.Screen name="Recuperação" 
        component={Recuperacao01}
         options={{ title: 'Recupere sua senha' }} />

        <Stack.Screen name="Recuperação2"
         component={Recuperacao02}
          options={{ title: 'Recupere sua senha' }} />

        <Stack.Screen name="Recuperação3" 
        component={Recuperacao03} 
        options={{ headerShown: false }} />
       
        <Stack.Screen 
          name="Paginacidadao" 
          component={CidadaoTabs} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Paginacatador" 
          component={CatadorTabs} 
          options={{ headerShown: false }} 
        />

       
        <Stack.Screen name="Perfilconfig" 
        component={Perfilconfig} 
        options={{ headerShown: false }} />

        <Stack.Screen name="Addmaterial" 
        component={Addmaterial} 
        options={{ title: ' ' }} />

        <Stack.Screen name="Addmaterial2"
         component={Addmaterial2}
          options={{ title: ' ' }} />

        <Stack.Screen name="Addmaterial3"
         component={Addmaterial3} 
         options={{ title: ' ' }} />

        <Stack.Screen name="Tutorial1"
         component={Tutorial1}
          options={{ headerShown: false }} />

        <Stack.Screen name="Tutorial2"
         component={Tutorial2}
          options={{ headerShown: false }} />

          <Stack.Screen name="Endereco1" 
        component={Endereco1} 
        options={{ title: ' ' }} />

        <Stack.Screen name="Pontodecoletamap" 
        component={Pontodecoletamap} 
        options={{ headerShown: false}} />

        <Stack.Screen name="Pontodecoletamap2" 
        component={Pontodecoletamap2} 
        options={{ headerShown: false }} />

        <Stack.Screen name="Notificacao1" 
        component={Notificacao1} 
        options={{ title: ' ' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


