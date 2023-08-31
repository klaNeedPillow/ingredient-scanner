import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles'
import { Image } from 'expo-image';
import { useState } from 'react'

export const LoginScreen = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
      <View style={styles.container}>
         <Image 
         style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
          <View>
            <Text>Username</Text>
            <TextInput value={username} onChangeText={(username) => setUserName(username)} style={styles.input} placeholder='Enter Email' />
          </View>
          <View>
            <Text>Password</Text>
            <TextInput value={password} onChangeText={(password) => setPassword(password)} style={styles.input} placeholder='Enter Password' secureTextEntry={true} />
          </View>

          <Button title="Login" color="#ef9e3f" />
          <Text style={styles.seperator}>or</Text>
          <Text style={styles.orange}>Sign Up</Text>

      </View>
    );
  }
  