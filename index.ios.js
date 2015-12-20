/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    NavigatorIOS
    } = React;

class MyView extends React.Component {
    render() {
        return <Text style={{marginTop:200}}>Test</Text>
    }
}

class DailySentenceRepeat extends React.Component {
    _onPressButton() {
        this.props.navigator.push({
            title: "Event Detail",
            component: MyView,
            passProps: {id: 'foo'}
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Phone Number:</Text>
                    <TextInput style={styles.textInput}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Password:</Text>
                    <TextInput style={styles.textInput}/>

                </View>

                <TouchableHighlight style={styles.button} onPress={this._onPressButton.bind(this)}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

class AppEntry extends React.Component {
    render() {
        return <NavigatorIOS
            style={styles.navigator}
            initialRoute={{
            component: DailySentenceRepeat,
            title: '12224324243',
            passProps: {id:'main'}
        }}/>
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    navigator: {
        flex: 1
    },
    title: {
        marginTop: 20,
        textAlign: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15
    },
    text: {
        flex: 1,
        marginLeft: 30,
        fontSize: 15,
        flexDirection: 'column',
        width: 150
    },
    textInput: {
        flex: 1,
        height: 30,
        width: 150,
        fontSize: 15,
        padding: 5,
        backgroundColor: '#EAEAEA',
        flexDirection: 'column'
    },
    button: {
        height: 30,
        backgroundColor: 'blue',
        width: 150,
        borderRadius: 5,
        marginTop: 25,
        alignItems: 'center'
    },
    buttonText: {
        width: 100,
        height: 15,
        textAlign: 'center',
        marginTop: 5
    }
});

AppRegistry.registerComponent('DailySentenceRepeat', () => AppEntry);
