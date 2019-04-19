import React, { Component } from 'react';
import { View, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';
import Feed from './Feed';
import CustomTextInput from './CustomTextInput';
import Label from './styles/Label';
import BackButton from './styles/BackButton';

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
					<CustomTextInput
						value={publisher}
						onChangeText={text => this.setFeedParam({ publisher: text })}
						placeholder="sdk-tester"
					/>
					<Label>Mode</Label>
					<CustomTextInput
						value={mode}
						onChangeText={text => this.setFeedParam({ mode: text })}
						placeholder="thumbnails-a"
					/>
					<Label>Placement</Label>
					<CustomTextInput
						value={placement}
						onChangeText={text => this.setFeedParam({ placement: text })}
						placeholder="Feed with video"
					/>
					<Label>Example Page Url</Label>
					<CustomTextInput
						value={pageUrl}
						onChangeText={text => this.setFeedParam({ pageUrl: text })}
						placeholder="https://blog.taboola.com"
					/>
					<Label>Page Type</Label>
					<CustomTextInput
						value={pageType}
						onChangeText={text => this.setFeedParam({ pageType: text })}
						placeholder="article"
					/>
					<Label>Target Type</Label>
					<CustomTextInput
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
