import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#EF9E3F',
        padding: 16,
        paddingTop: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: 'antiquewhite',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    image: {
        width: '40%',
        backgroundColor: '#0553',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 2,
        marginBottom: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 100
    },
    orange: {
        color: '#ef9e3f',
        fontWeight: 'bold',
        fontSize: 18
    },
    seperator: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 18
    },
    footnote: {
        color: '#A4A4A4',
        marginTop: 6
    },
    textfield: {
        marginVertical: 4
    }
});

export { styles }