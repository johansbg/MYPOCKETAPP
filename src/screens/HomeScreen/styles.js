import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    entityContainer: {
        marginTop: 10,
        borderTopColor: '#cccccc',
        borderTopWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    entityText: {
        padding: 10,
        fontSize: 15,
        color: '#333333'
    },
    titleText: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20,
        color: '#333333'
    }
})
