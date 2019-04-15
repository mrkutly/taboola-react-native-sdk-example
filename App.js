import React from 'react';
import { ScrollView } from 'react-native';
import ArticleWithWidget from './components/ArticleWithWidget';
import ArticleWithFeed from './components/ArticleWithFeed';
import styled from 'styled-components';

const Container = styled.View`
	background-color: #fff;
	margin-top: 30;
	justify-content: center;
`;

class App extends React.Component {
	render() {
		return (
			<Container>
				<ScrollView>
					<ArticleWithFeed />
				</ScrollView>
			</Container>
		);
	}
}

export default App;
