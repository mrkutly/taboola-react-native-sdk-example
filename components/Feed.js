import React from 'react';
import RNTaboolaView from '@taboola/react-native-taboola';

const Feed = props => (
	<RNTaboolaView
		mode="thumbs-feed-01"
		publisher="sdk-tester"
		pageType="article"
		pageUrl="https://blog.taboola.com"
		placement="Feed without video"
		targetType="mix"
		scrollEnabled={true}
		interceptScroll={true}
		style={{ height: 2000 }}
	/>
);

export default Feed;
