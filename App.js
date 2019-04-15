import React from 'react';
import { ScrollView } from 'react-native';
import Article from './components/Article';
import styled from 'styled-components';

const Container = styled.View`
	background-color: #fff;
	margin-top: 30;
	justify-content: center;
`;

const Header = styled.Text`
	font-size: 26;
	font-weight: 600;
	letter-spacing: 1.5;
	margin-bottom: 10;
	margin-top: 10;
`;

class App extends React.Component {
	render() {
		return (
			<Container>
				<ScrollView>
					<Header>Here's some Taboola!</Header>
					<Article />
				</ScrollView>
			</Container>
		);
	}
}

export default App;
