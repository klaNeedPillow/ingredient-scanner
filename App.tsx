import {ClerkProvider} from "@clerk/clerk-expo";
import {StatusBar} from 'expo-status-bar'
import Constants from "expo-constants"
import * as SecureStore from 'expo-secure-store'
import AppNavigation from './navigations/app-navigations'

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key)
    } catch(err) {
      return null
    }
  },

  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return;
    }
  },
}


export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <AppNavigation />
      <StatusBar style="auto" />
      </ClerkProvider>
  );
}
