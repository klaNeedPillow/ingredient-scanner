import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles'
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import toast from "react-hot-toast/headless";
import { useEffect } from "react";
import { Search } from "lucide-react-native";
import { Input, InputField } from '@gluestack-ui/themed';

export const HomeScreen = ({ navigation }) => {
    const { isLoaded, signOut, userId } = useAuth()


    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <SignedIn>
            <View className='flex justify-center h-screen  items-stretch gap-y-4'>
                <View className='flex justify-center items-center h-fit bg-white p-2 w-full'>
                    <Text className='text-center font-bold'>Check raw materials</Text>

                </View>
                <Image
                    className='flex h-[32] '
                    source="https://picsum.photos/seed/696/3000/2000"
                    contentFit="cover"
                    transition={1000}
                />
            </View>

        </SignedIn>
    );
}
