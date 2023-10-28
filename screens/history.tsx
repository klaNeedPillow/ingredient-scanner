import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles'
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import toast from "react-hot-toast/headless";
import { useEffect } from "react";
import { Search, Star } from "lucide-react-native";
import { Input, InputField } from '@gluestack-ui/themed';
import { Image } from "expo-image";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Recently = ({ navigation }) => {
    const { isLoaded, signOut, userId } = useAuth()


    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <SignedIn>
            <SafeAreaView className='flex h-full items-stretch gap-y-4'>
                <View className='flex justify-center items-center h-fit bg-white p-2 w-full mb-7'>
                    <Text className='text-center font-bold text-xl'>History</Text>
                </View>
              
                <View className='flex flex-col ml-16 gap-y-4'>
                    <View className='flex flex-row'>
                        <Image className="w-[100px] h-[100px] mr-4" source="https://i.pinimg.com/originals/4b/0d/4a/4b0d4ad5dce4fa0ee68aa35cba9c2a4d.gif" />
                        <View className='flex   '>
                        <Text clasName='text-right '>                                  <Star color='black' /></Text>
                            <Text className='font-bold mt-2 text-base'>ชื่อวัตถุดิบ</Text>
                           
                            
                        </View>
                    </View>
                    <View className='flex flex-row'>
                        <Image className="w-[100px] h-[100px] mr-4" source="https://media0.giphy.com/media/25tY7H12n3ZxS/200w.gif?cid=6c09b952ksg926hmka1gbp2l244wft67tu9kk8ythl3j8uu6&ep=v1_gifs_search&rid=200w.gif&ct=g" />
                        <View className='flex   '>
                        <Text clasName='text-right'>                                  <Star color='black' fill='black' /></Text>
                            <Text className='font-bold mt-2 text-base'>ชื่อวัตถุดิบ</Text>
                           
                            
                        </View>
                    </View>
                    <View className='flex flex-row'>
                        <Image className="w-[100px] h-[100px] mr-4" source="https://i.ytimg.com/vi/ZBTOR46F6U8/maxresdefault.jpg" />
                        <View className='flex   '>
                        <Text clasName='text-right'>                                  <Star color='black' /></Text>
                            <Text className='font-bold mt-2 text-base'>ชื่อวัตถุดิบ</Text>
                           
                            
                        </View>
                        
                    </View>
                    <View className='flex flex-row'>
                        <Image className="w-[100px] h-[100px] mr-4" source="https://i.ytimg.com/vi/ZBTOR46F6U8/maxresdefault.jpg" />
                        <View className='flex   '>
                        <Text clasName='text-right'>                                  <Star color='black' fill='black' /></Text>
                            <Text className='font-bold mt-2 text-base'>ชื่อวัตถุดิบ</Text>
                           
                            
                        </View>
                        
                    </View>

                </View>
                
            </SafeAreaView>

        </SignedIn>
    );
}
