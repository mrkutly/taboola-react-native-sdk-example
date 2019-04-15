import React, { Component } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';
import Logo from '../assets/taboola-logo.png';

const StyledImage = styled(Animated.Image)`
	justify-content: center;
	align-self: center;
`;

export default class TaboolaLogo extends Component {
	state = {
		spin: new Animated.Value(0),
	};

	render() {
		return <StyledImage source={Logo} />;
	}
}
