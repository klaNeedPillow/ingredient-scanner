import {Text, View, TextInput, Button, TouchableOpacity} from "react-native";
import { styles } from "../styles";
import { Image } from "expo-image";
import {useEffect, useState} from "react";
import {useAuth, useSignIn} from "@clerk/clerk-expo";
import toast from "react-hot-toast/headless";
export const LoginScreen = ({ navigation }) => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const { userId } = useAuth()
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(isLoaded && userId) {
      navigation.navigate('Home')
    }
  }, [])

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const handleLogin = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeLogin = await signIn.create({
        identifier: username,
        password
      })

      await setActive({ session: completeLogin.createdSessionId })
    } catch (error: any) {
      toast.error('Invalid Auth', {
        icon: '❌'
      })
    }
  };

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
        <TextInput
          value={username}
          onChangeText={(username) => setUserName(username)}
          style={styles.input}
          placeholder="Enter Username"
        />
      </View>
      <View style={styles.textfield}>
        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>

      <Button title="Login" color="#ef9e3f" onPress={handleLogin} />
      <Text style={styles.seperator}>or</Text>
      <Text style={styles.orange}>Sign Up</Text>
      <Text style={styles.footnote}>Continue without Account</Text>
    </View>
  );
};
