import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.TextInput`
	font-size: 20;
`;

const CustomTextInput = props => (
	<StyledTextInput autoCapitalize="none" {...props} />
);

export default CustomTextInput;
