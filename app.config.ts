import { ExpoConfig } from '@expo/config-types';

const config = {
    name: 'ingredient-scanner',
    slug: 'ingredient-scanner',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        supportsTablet: true,
    },
    android: {
        adaptiveIcon: {
            foregroundImage: './assets/adaptive-icon.png',
            backgroundColor: '#ffffff',
        },
        softwareKeyboardLayoutMode: 'pan'
    },
    web: {
        favicon: './assets/favicon.png',
    },
    extra: {
        clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
} satisfies ExpoConfig;

export default config;