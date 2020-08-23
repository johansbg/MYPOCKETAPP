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
        height: 30,
        borderRadius: 10,
        margin:10,
        backgroundColor: '#788eec',
        width: 100,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    },
    buttonTextAdd: {
        color: 'white',
        fontSize: 20
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
    entityContainerModal: {
        marginTop: 10,
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
    },
    chartTitleText: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 15,
        color: '#333333'
    },
    chartContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    /*modal*/
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginLeft: 15
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 5,
        textAlign: "center"
    },
    input: {
        height: 35,
        width: 200,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
    },
    date:{
        width: 200,
        marginTop: 10,
        marginBottom: 10,
    }
});
