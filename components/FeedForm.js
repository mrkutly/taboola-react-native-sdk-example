import React, { Component } from 'react';
import { View, ScrollView, Button } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BackButton } from './ArticleWithFeed';
import Feed from './Feed';

const Input = styled.TextInput`
	font-size: 20;
	text-decoration-line: underline;
`;

const Label = styled.Text`
	font-size: 20;
`;

class FeedForm extends Component {
	static propTypes = {
		back: PropTypes.func.isRequired,
	};

	state = {
		feedParams: {
			publisher: '',
			mode: '',
			placement: '',
			pageUrl: '',
			pageType: 'article',
			targetType: 'mix',
		},
		feed: null,
	};

	setFeedParam(param) {
		this.setState(prevState => {
			return {
				...prevState,
				feedParams: {
					...prevState.feedParams,
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
		} = this.state.feedParams;

		return (
			<View>
				<ScrollView>
					<BackButton onPress={e => this.props.back()} title="Back" />
					<Label>Publisher</Label>
					<Input
						value={publisher}
						onChangeText={text => this.setFeedParam({ publisher: text })}
						placeholder="sdk-tester"
					/>
					<Label>Mode</Label>
					<Input
						value={mode}
						onChangeText={text => this.setFeedParam({ mode: text })}
						placeholder="thumbnails-a"
					/>
					<Label>Placement</Label>
					<Input
						value={placement}
						onChangeText={text => this.setFeedParam({ placement: text })}
						placeholder="Feed with video"
					/>
					<Label>Example Page Url</Label>
					<Input
						value={pageUrl}
						onChangeText={text => this.setFeedParam({ pageUrl: text })}
						placeholder="https://blog.taboola.com"
					/>
					<Label>Page Type</Label>
					<Input
						value={pageType}
						onChangeText={text => this.setFeedParam({ pageType: text })}
						placeholder="article"
					/>
					<Label>Target Type</Label>
					<Input
						value={targetType}
						onChangeText={text => this.setFeedParam({ targetType: text })}
						placeholder="targetType"
					/>
					<Button
						onPress={e =>
							this.setState({ feed: null }, () => {
								this.setState(prevState => {
									return {
										...prevState,
										feed: <Feed {...prevState.feedParams} />,
									};
								});
							})
						}
						title="Submit"
					/>
					{this.state.feed}
				</ScrollView>
			</View>
		);
	}
}

export default FeedForm;
