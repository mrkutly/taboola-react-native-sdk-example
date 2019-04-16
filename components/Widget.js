import React from 'react';
import RNTaboolaView from '@taboola/react-native-taboola';

const Widget = props => {
	return (
		<RNTaboolaView
			mode={props.mode}
			publisher={props.publisher}
			pageType={props.pageType}
			pageUrl={props.pageUrl}
			placement={props.placement}
			targetType={props.targetType}
			scrollEnabled={false}
			style={{ height: props.height }}
		/>
	);
};

export default Widget;
