import React from 'react';
import RNTaboolaView from '@taboola/react-native-taboola';

const Widget = props => {
	return (
		<RNTaboolaView
			mode="alternating-widget-without-video-1-on-1"
			publisher="sdk-tester"
			pageType="article"
			pageUrl="https://blog.taboola.com"
			placement="Mid Article"
			targetType="mix"
			scrollEnabled={false}
			style={{ height: 300 }}
		/>
	);
};

export default Widget;
