import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import styled from 'styled-components';
import TaboolaLogo from './TaboolaLogo';

const NavButton = styled.Button`
	font-size: 20;
`;

export default class HomePage extends Component {
	render() {
		return (
			<View>
				<TaboolaLogo />
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetDemo')}
					title="Widget Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('FeedDemo')}
					title="Feed Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('TestWidget')}
					title="Test Your Widget Parameters"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('TestFeed')}
					title="Test Your Feed Parameters"
				/>
			</View>
		);
	}
}
