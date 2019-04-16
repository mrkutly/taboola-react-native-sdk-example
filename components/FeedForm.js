import React, { Component } from 'react';
import { TextInput, View, Button, Text } from 'react-native';

class Feed extends Component {
	state = {
		publisher: '',
		mode: '',
		placement: '',
		pageUrl: '',
		pageType: 'article',
		targetType: 'mix',
		height: '300',
	};

	onChangeNumber = text => {
		const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		let input = text.split('');
		let valid = true;

		input.forEach(num => {
			if (!numbers.includes(num)) {
				valid = false;
			}
		});

		if (valid) this.setState({ height: text });
	};

	submit() {
		alert(JSON.stringify(this.state));
		// this.props.setWidgetParams(this.state);
	}

	render() {
		const {
			publisher,
			mode,
			pageType,
			pageUrl,
			placement,
			targetType,
			height,
		} = this.state;

		return (
			<View>
				<Text>Publisher</Text>
				<TextInput
					value={publisher}
					onChangeText={text => this.setState({ publisher: text })}
					placeholder="sdk-tester"
				/>
				<Text>Mode</Text>
				<TextInput
					value={mode}
					onChangeText={text => this.setState({ mode: text })}
					placeholder="thumbnails-a"
				/>
				<Text>Placement</Text>
				<TextInput
					value={placement}
					onChangeText={text => this.setState({ placement: text })}
					placeholder="Mid Article"
				/>
				<Text>Example Page Url</Text>
				<TextInput
					value={pageUrl}
					onChangeText={text => this.setState({ pageUrl: text })}
					placeholder="https://blog.taboola.com"
				/>
				<Text>Page Type</Text>
				<TextInput
					value={pageType}
					onChangeText={text => this.setState({ pageType: text })}
					placeholder="article"
				/>
				<Text>Target Type</Text>
				<TextInput
					value={targetType}
					onChangeText={text => this.setState({ targetType: text })}
					placeholder="targetType"
				/>
				<Text>Height</Text>
				<TextInput
					value={height}
					onChangeText={this.onChangeNumber}
					placeholder="300"
				/>
				<Button onPress={e => this.submit()} title="Submit" />
			</View>
		);
	}
}

export default Feed;
