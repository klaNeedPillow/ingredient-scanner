import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles'

export const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
      </View>
    );
  }
  