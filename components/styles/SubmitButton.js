import React from 'react';
import { Button, Platform } from 'react-native';
import styled from 'styled-components';

const SubmitButtonOuterContainer = styled.View`
	margin-top: 20;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const SubmitButtonInnerContainer = styled.View`
	width: 150;
	border-color: ${Platform.OS === 'ios' ? '#0875ff' : 'white'};
	border-width: 1;
	border-radius: 5;
`;

const SubmitButton = props => (
	<SubmitButtonOuterContainer>
		<SubmitButtonInnerContainer>
			<Button {...props} />
		</SubmitButtonInnerContainer>
	</SubmitButtonOuterContainer>
);

export default SubmitButton;
