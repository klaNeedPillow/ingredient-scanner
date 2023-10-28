import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles'
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import toast from "react-hot-toast/headless";
import { useEffect } from "react";
import { Search } from "lucide-react-native";
import { Input, InputField } from '@gluestack-ui/themed';
import { Image } from "expo-image";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Choosed = ({ navigation }) => {
    const { isLoaded, signOut, userId } = useAuth()


    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <SignedIn>
            <SafeAreaView className='flex  h-full items-stretch gap-y-4'>
                <View className='flex justify-center items-center h-fit bg-white p-2 w-full'>
                    <Text className='text-center font-bold text-xl'>Name of food user choosed</Text>
                </View>

                <View className='flex flex-row items-center h-fit bg-orange-500 p-2 w-full justify-between'>

                </View>

                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full justify-between'>
                    <Text> </Text>
                    <Text className=''>name of ingrediant</Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text className=''>✅</Text>
                    <Text> </Text>

                </View>
                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full justify-between'>
                    <Text> </Text>
                    <Text className=''>name of ingrediant</Text>
                    <Text> </Text>
                    <Text> </Text>

                    <Text className=''>❌</Text>
                    <Text> </Text>

                </View>
                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full justify-between'>
                    <Text> </Text>
                    <Text className=''>name of ingrediant</Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text className=''>✅</Text>
                    <Text> </Text>

                </View>
                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full justify-between'>
                    <Text> </Text>
                    <Text className=''>name of ingrediant</Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text className=''>❌</Text>
                    <Text> </Text>

                </View>
                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full justify-between'>
                    <Text> </Text>
                    <Text className=''>name of ingrediant</Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text className=''>✅</Text>
                    <Text> </Text>

                </View>
                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full justify-between'>
                    <Text> </Text>
                    <Text className=''>name of ingrediant</Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text className=''>❌</Text>
                    <Text> </Text>

                </View>
                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full justify-between'>
                    <Text> </Text>
                    <Text className=''>name of ingrediant</Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text className=''>✅</Text>
                    <Text> </Text>

                </View>
                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full justify-between'>
                    <Text> </Text>
                    <Text className=''>name of ingrediant</Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text className=''>❌</Text>
                    <Text> </Text>

                </View>


            </SafeAreaView>


        </SignedIn >
    );
}