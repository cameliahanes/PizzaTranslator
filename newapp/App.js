import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}


class Greeting extends React.Component {
	render() {
		return (
			<Text> Hello {this.props.name} ! </Text> 
		);
	}
}

class LotsOfGreetings extends React.Component {
	render () {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Greeting name = 'Cami' />
				<Greeting name = 'Blat' />
				<Greeting name = 'Blatist' />
			</View>
		);
	}

}


export default class PizzaTranslator extends React.Component {
	constructor(props){
		super(props);
		this.state = {text: ''};
	}

	render() {
		return (
			<View style={{padding: 10}}>	
			<TextInput
				style={{height: 40}}
				placeholder="Type here to translate"
				onChangeText={(text) => this.setState({text})}	
			/>
			<Text style={{padding: 10, fontSize: 42}}>
			{
				this.state.text.split(' ').map((word) => word &&'🍕').join(' ')
			}
			</Text>
			</View>
		);

	}
}


// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);
