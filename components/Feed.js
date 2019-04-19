import React from 'react';
import RNTaboolaView from '@taboola/react-native-taboola';

const Feed = props => (
	<RNTaboolaView
		mode={props.mode}
		publisher={props.publisher}
		pageType={props.pageType}
		pageUrl={props.pageUrl}
		placement={props.placement}
		targetType={props.targetType}
		scrollEnabled={true}
		interceptScroll={true}
		style={{ height: 2000 }}
	/>
);

export default Feed;
