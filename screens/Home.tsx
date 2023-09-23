import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { styles } from '../styles'
import {SignedIn, useAuth} from "@clerk/clerk-expo";
import toast from "react-hot-toast/headless";
import {useEffect} from "react";
import {Search} from "lucide-react-native";

export const HomeScreen = ({ navigation }) => {
  const { isLoaded, signOut, userId} = useAuth()

  useEffect(() => {
    toast.success('Logged in!', {
      icon: '✅'
    })
  }, [])
  const handleSignOut = async () => {
    await signOut()
  }

    return (
      <View style={styles.container}>
        <SignedIn>
          <Text className='text-2xl font-bold'>Search</Text>
          <View className='relative'>
            <TextInput placeholder="Search" className='rounded-2xl bg-white p-2 w-64 my-2' />
              <View className='absolute right-4 inset-y-0 flex items-center justify-center'>
                <TouchableOpacity onPress={() => toast('yay')}>
                <Search color='black' />
                </TouchableOpacity>
              </View>
          </View>

        <Button
        title="Logout"
          onPress={handleSignOut}
      />
        </SignedIn>
      </View>
    );
  }
  