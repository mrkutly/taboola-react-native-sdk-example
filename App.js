import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import ArticleWithWidget from './components/ArticleWithWidget';
import ArticleWithFeed from './components/ArticleWithFeed';
import HomePage from './components/HomePage';
import WidgetForm from './components/WidgetForm';

const Container = styled.View`
	background-color: #fff;
	margin-top: 30;
	justify-content: center;
`;

class App extends React.Component {
	state = {
		currentPage: 'home',
		widgetParams: {},
		feedParams: {},
	};

	back() {
		this.setState({ currentPage: 'home' });
	}

	setCurrentPage(currentPage) {
		this.setState({ currentPage });
	}

	setWidgetParams(widgetParams) {
		this.setState({ widgetParams, currentPage: 'WidgetTestPage' });
	}

	setWidgetParams(feedParams) {
		this.setState({ currentPage: 'FeedTestPage', feedParams });
	}

	renderSwitch() {
		switch (this.state.currentPage) {
			case 'WidgetDemo':
				return <ArticleWithWidget back={() => this.back()} />;
			case 'FeedDemo':
				return <ArticleWithFeed back={() => this.back()} />;
			case 'TestWidgetForm':
				return (
					<WidgetForm
						back={() => this.back()}
						setWidgetParams={params => this.setWidgetParams(params)}
					/>
				);
			case 'WidgetTestPage':
				return (
					<WidgetTestPage
						back={() => this.back()}
						{...this.state.widgetParams}
					/>
				);
			default:
				return <HomePage setCurrentPage={page => this.setCurrentPage(page)} />;
		}
	}

	render() {
		return (
			<Container>
				<ScrollView>{this.renderSwitch()}</ScrollView>
			</Container>
		);
	}
}

export default App;
