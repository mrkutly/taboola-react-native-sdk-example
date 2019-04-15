import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components';
import Widget from './Widget';
import { BackButton } from './ArticleWithFeed';

const StyledText = styled.Text`
	font-size: 16;
	margin-top: 20;
	margin-bottom: 20;
`;

const Header = styled.Text`
	font-size: 26;
	font-weight: 600;
	margin-bottom: 10;
	margin-top: 10;
`;

const ArticleWithWidget = props => {
	return (
		<View>
			<BackButton onPress={e => props.back()} title="Back" />
			<ScrollView>
				<Header>Here's some Taboola!</Header>
				<StyledText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</StyledText>
				<Widget />
				<StyledText>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
					dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
					quia non numquam eius modi tempora incidunt ut labore et dolore magnam
					aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
					ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
					ea voluptate velit esse quam nihil molestiae consequatur, vel illum
					qui dolorem eum fugiat quo voluptas nulla pariatur?
				</StyledText>
			</ScrollView>
		</View>
	);
};

export default ArticleWithWidget;
