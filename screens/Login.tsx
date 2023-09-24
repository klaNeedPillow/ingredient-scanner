import {View, Text, TextInput, TouchableOpacity} from "react-native";
import { styles } from "../styles";
import { Image } from "expo-image";
import {useEffect, useState} from "react";
import {useAuth, useSignIn} from "@clerk/clerk-expo";
import toast from "react-hot-toast/headless";
import { Input, InputField, Box, Button, ButtonText } from '@gluestack-ui/themed';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
export const LoginScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const { signIn, setActive, isLoaded } = useSignIn();
  const { userId } = useAuth()
  const [username, setUserName] = useState("")
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
    <View className='gap-y-2 flex justify-center mx-4 h-screen' style={{
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      <View className='flex h-[32vh] mb-4'>
        <Image
          className='flex h-full'
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
      </View>

      <Text className='text-2xl font-bold'>Login</Text>

      <Box class='flex'>
      <View className='flex mb-2'>
        <Input variant="rounded" size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
          <InputField
            value={username}
            onChangeText={(username) => setUserName(username)}
            placeholder='Username'
          />
        </Input>
      </View>
      <View className='flex mb-8'>
        <Input variant="rounded" size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
          <InputField
            value={password}
            onChangeText={(password) => setPassword(password)}
            placeholder='Password'
            secureTextEntry={true}
          />
        </Input>
      </View>

      <Button size='xl' variant="solid" action="primary" onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
      </Box>

      <View className='flex items-center justify-center'>
        <Text style={styles.seperator}>or</Text>
        <Text style={styles.orange}>Sign Up</Text>
        <Text style={styles.footnote}>Continue without Account</Text>
      </View>
    </View>
  );
};
