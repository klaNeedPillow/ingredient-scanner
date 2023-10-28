import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles'
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import toast from "react-hot-toast/headless";
import { useEffect } from "react";
import { Search } from "lucide-react-native";
import { Input, InputField } from '@gluestack-ui/themed';
import { Image } from "expo-image";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Cooking = ({ navigation }) => {
    const { isLoaded, signOut, userId } = useAuth()


    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <SignedIn>
            <SafeAreaView className='flex  h-full items-stretch gap-y-4'>
                <View className='flex justify-center items-center h-fit bg-white p-2 w-full'>
                    <Text className='text-center font-bold text-xl'>Cooking step</Text>
                </View>

                <View className='flex flex-row items-center h-fit bg-orange-500 p-2 w-full justify-between'>

                </View>
                <View className='flex  items-center h-fit bg-white-500 p-2 w-full justify-center'>

                    <Text className='text-base font-bold'>Steps on how to make this menu   </Text>

                    <Text className=''>Name of Menu</Text>
                </View>




                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full '>

                    <Text className='text-sm font-bold'>Step 1 : </Text>
                    <Text className=''>Tell ur mom</Text>
                </View>
                <View className='flex flex-row'>
                    <Text>   </Text>
                    <Text Classname=''>Description</Text>
                </View>

                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full '>

                    <Text className='text-sm font-bold'>Step 2 : </Text>
                    <Text className=''>Enjoy</Text>
                </View>
                <View className='flex flex-row'>
                    <Text>   </Text>
                    <Text Classname=''>Description</Text>
                </View>

                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full '>

                    <Text className='text-sm font-bold'>Step 3 : </Text>
                    <Text className=''>Share it to ur friend</Text>
                </View>
                <View className='flex flex-row'>
                    <Text>   </Text>
                    <Text Classname=''>Description</Text>
                </View>

                <View className='flex flex-row items-center h-fit bg-white-500 p-2 w-full '>

                    <Text className='text-sm font-bold'>Step 4 : </Text>
                    <Text className=''>Don't forget to say Thankyou to ur mom</Text>
                </View>
                <View className='flex flex-row'>
                    <Text>   </Text>
                    <Text Classname=''>Description</Text>
                </View>



            </SafeAreaView>


        </SignedIn >
    );
}