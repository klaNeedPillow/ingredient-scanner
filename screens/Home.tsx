import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles'
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import toast from "react-hot-toast/headless";
import { useEffect } from "react";
import { Search } from "lucide-react-native";
import { Input, InputField } from '@gluestack-ui/themed';

export const HomeScreen = ({ navigation }) => {
  const { isLoaded, signOut, userId } = useAuth()

  useEffect(() => {
    toast.success('Logged in!', {
      icon: '✅'
    })
  }, [])
  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <SignedIn>
      <View className='flex justify-center h-screen mx-16 items-stretch gap-y-4'>
        <Text className='text-2xl font-bold'>Search</Text>
        <View className='relative'>
          <Input variant="rounded" size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
            <InputField
              placeholder='Enter Text here'
            />
            <View className='absolute right-4 inset-y-0 flex items-center justify-center'>
              <TouchableOpacity onPress={() => toast('yay')}>
                <Search color='black' />
              </TouchableOpacity>
            </View>
          </Input>
        </View>

        <Button
          title="Logout"
          onPress={handleSignOut}
        />
        <Button
          title="check page"
          onPress={() => navigation.navigate('Check')}
        />

        <Button
          title="Menu page"
          onPress={() => navigation.navigate('Menu')}
        />
        <Button
          title="Choosed page"
          onPress={() => navigation.navigate('Choosed')}
        />
        <Button
          title="Cooking page"
          onPress={() => navigation.navigate('Cooking')}
        />
        <Button
          title= "Recently page"
          onPress={() => navigation.navigate('Recently')}
        />
      </View>
    </SignedIn>
  );
}
