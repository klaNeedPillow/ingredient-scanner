import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles'
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import toast from "react-hot-toast/headless";
import { useEffect } from "react";
import { Search } from "lucide-react-native";
import { Input, InputField } from '@gluestack-ui/themed';
import { Image } from "expo-image";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Menu = ({ navigation }) => {
    const { isLoaded, signOut, userId } = useAuth()


    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <SignedIn>
            <SafeAreaView className='flex  h-full items-stretch gap-y-4'>
                <View className='flex justify-center items-center h-fit bg-white p-2 w-full'>
                    <Text className='text-center font-bold text-xl'>เมนูอาหาร</Text>
                </View>

                <View className='flex flex-row items-center h-fit bg-orange-500 p-2 w-full justify-between'>
                    <TouchableOpacity className='bg-white w-[20%] items-center justify-center flex p-2 rounded-xl '>
                        <Text>ทอด</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className='bg-white w-[20%] items-center justify-center flex p-2 rounded-xl '>
                        <Text>ผัด</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-white w-[20%] items-center justify-center flex p-2 rounded-xl '>
                        <Text>ต้ม</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-white w-[20%] items-center justify-center flex p-2 rounded-xl '>
                        <Text>นึ่ง</Text>
                    </TouchableOpacity>

                </View>
                <View className='flex flex-col ml-16 gap-y-4 '>
                <View className='flex flex-row'>
                    <Image className="w-[100px] h-[100px] mr-4" source="https://i.pinimg.com/originals/4b/0d/4a/4b0d4ad5dce4fa0ee68aa35cba9c2a4d.gif" />
                    <View>
                        <Text className='font-bold mt-5 text-base'>ชื่อวัตถุดิบ</Text>
                        <Text className='mt-5'>จำนวน/นน.</Text>
                    </View>
                </View>
                <View className='flex flex-row'>
                    <Image className="w-[100px] h-[100px] mr-4" source="https://i.pinimg.com/originals/4b/0d/4a/4b0d4ad5dce4fa0ee68aa35cba9c2a4d.gif" />
                    <View>
                        <Text className='font-bold mt-5 text-base'>ชื่อวัตถุดิบ</Text>
                        <Text className='mt-5'>จำนวน/นน.</Text>
                    </View>
                </View>
                <View className='flex flex-row'>
                    <Image className="w-[100px] h-[100px] mr-4" source="https://i.pinimg.com/originals/4b/0d/4a/4b0d4ad5dce4fa0ee68aa35cba9c2a4d.gif" />
                    <View>
                        <Text className='font-bold mt-5 text-base'>ชื่อวัตถุดิบ</Text>
                        <Text className='mt-5'>จำนวน/นน.</Text>
                    </View>
                </View>
                <View className='flex flex-row'>
                    <Image className="w-[100px] h-[100px] mr-4" source="https://i.pinimg.com/originals/4b/0d/4a/4b0d4ad5dce4fa0ee68aa35cba9c2a4d.gif" />
                    <View>
                        <Text className='font-bold mt-5 text-base'>ชื่อวัตถุดิบ</Text>
                        <Text className='mt-5'>จำนวน/นน.</Text>
                    </View>
                </View>
                </View>

            </SafeAreaView>


        </SignedIn >
    );
}