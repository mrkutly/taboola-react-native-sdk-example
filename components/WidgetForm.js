import React, { Component } from 'react';
import { View, ScrollView, Button } from 'react-native';
import styled from 'styled-components';
import { BackButton } from './ArticleWithFeed';
import Widget from './Widget';

const Input = styled.TextInput`
	font-size: 20;
	text-decoration-line: underline;
`;

const Label = styled.Text`
	font-size: 20;
`;

class WidgetForm extends Component {
	state = {
		widgetParams: {
			publisher: 'sdk-tester',
			mode: 'alternating-widget-without-video-1-on-1',
			placement: 'Mid Article',
			pageUrl: 'https://blog.taboola.com',
			pageType: 'article',
			targetType: 'mix',
			height: '300',
		},
		widget: null,
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

		if (valid) this.setWidgetParam({ height: text });
	};

	setWidgetParam(param) {
		this.setState(prevState => {
			return {
				...prevState,
				widgetParams: {
					...prevState.widgetParams,
					...param,
				},
			};
		});
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
		} = this.state.widgetParams;

		return (
			<View>
				<ScrollView>
					<BackButton onPress={e => this.props.back()} title="Back" />
					<Label>Publisher</Label>
					<Input
						value={publisher}
						onChangeText={text => this.setWidgetParam({ publisher: text })}
						placeholder="sdk-tester"
					/>
					<Label>Mode</Label>
					<Input
						value={mode}
						onChangeText={text => this.setWidgetParam({ mode: text })}
						placeholder="thumbnails-a"
					/>
					<Label>Placement</Label>
					<Input
						value={placement}
						onChangeText={text => this.setWidgetParam({ placement: text })}
						placeholder="Mid Article"
					/>
					<Label>Example Page Url</Label>
					<Input
						value={pageUrl}
						onChangeText={text => this.setWidgetParam({ pageUrl: text })}
						placeholder="https://blog.taboola.com"
					/>
					<Label>Page Type</Label>
					<Input
						value={pageType}
						onChangeText={text => this.setWidgetParam({ pageType: text })}
						placeholder="article"
					/>
					<Label>Target Type</Label>
					<Input
						value={targetType}
						onChangeText={text => this.setWidgetParam({ targetType: text })}
						placeholder="targetType"
					/>
					<Label>Height</Label>
					<Input
						value={height}
						onChangeText={this.onChangeNumber}
						placeholder="300"
					/>
					<Button
						onPress={e =>
							this.setState({ widget: null }, () => {
								this.setState(prevState => {
									return {
										...prevState,
										widget: (
											<Widget
												{...prevState.widgetParams}
												height={parseInt(prevState.widgetParams.height)}
											/>
										),
									};
								});
							})
						}
						title="Submit"
					/>
					{this.state.widget}
				</ScrollView>
			</View>
		);
	}
}

export default WidgetForm;
