import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StyleSheet, Text, View } from 'react-native';
import Capa from "./components/capa";
import Login from "./components/login1";
import Logingoogle from "./components/logingoogle"
import Cadastro from "./components/cadastro"
import Recuperacao01 from "./components/recuperacao01"
import Recuperacao02 from "./components/recuperacao02"
import Recuperacao03 from "./components/recuperacao03"
import Pagecidadao from "./components/pagecidadao"
import Pagecatador from "./components/pagecatador"
import Perfilconfig from "./components/perfilconfig"
import Addmaterial from "./components/addmaterial"
import Addmaterial2 from "./components/addmaterial2"
import Tutorial1 from "./components/tutorial1"
import Tutorial2 from "./components/tutorial2"
import Addmaterial3 from "./components/addmaterial3"
const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      
      <Stack.Navigator 
        initialRouteName="Capa" 
      >
        
        <Stack.Screen 
          name="Capa" 
          component={Capa} 
          options={{ 
            headerShown: false 
          }}
        />

         <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Acessar' }}
         />
        
       
        <Stack.Screen 
          name="Perfil" 
          component={Logingoogle} 
          options={{ 
            title: 'Escolha seu Perfil' 
          }}
        />

         <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{ 
            title: '  ' 
          }}
        />

        <Stack.Screen 
          name="Recuperação" 
          component={Recuperacao01} 
          options={{ 
            title: 'Recupere sua senha' 
          }}
        />

        <Stack.Screen 
          name="Recuperação2"
          component={Recuperacao02} 
          options={{ 
            title: 'Recupere sua senha' 
          }}
        />

        <Stack.Screen 
          name="Recuperação3" 
          component={Recuperacao03} 
          options={{ 
           headerShown: false 
          }}
        />

         <Stack.Screen 
          name="Paginacidadao" 
          component={Pagecidadao} 
          options={{ 
           headerShown: false 
          }}
        />

          <Stack.Screen 
          name="Paginacatador" 
          component={Pagecatador} 
          options={{ 
           headerShown: false 
          }}
        />

        <Stack.Screen 
          name="Perfilconfig" 
          component={Perfilconfig} 
          options={{ 
           headerShown:false
          }}
        />

        <Stack.Screen 
          name="Addmaterial" 
          component={Addmaterial} 
          options={{ 
           title:'  '
          }}
        />

        <Stack.Screen 
          name="Addmaterial2" 
          component={Addmaterial2} 
          options={{ 
           title:'  '
          }}
        />

         <Stack.Screen 
          name="Addmaterial3" 
          component={Addmaterial3} 
          options={{ 
           title:'  '
          }}
        />

        <Stack.Screen 
          name="Tutorial1" 
          component={Tutorial1} 
          options={{ 
          headerShown:false
          }}
        />

        <Stack.Screen 
          name="Tutorial2" 
          component={Tutorial2} 
          options={{ 
          headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



