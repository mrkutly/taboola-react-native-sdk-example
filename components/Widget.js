import React from 'react';
import { ScrollView, View, Platform } from 'react-native';
import RNTaboolaView from '@taboola/react-native-taboola';
import PropTypes from 'prop-types';

const Widget = props => {
	return (
		<View
			style={{ height: props.height + 20, flex: 1, justifyContent: 'center' }}
		>
			<RNTaboolaView
				mode={props.mode}
				publisher={props.publisher}
				pageType={props.pageType}
				pageUrl={props.pageUrl}
				placement={props.placement}
				targetType={props.targetType}
				scrollEnabled={false}
				style={{
					height: props.height,
				}}
			/>
		</View>
	);
};

Widget.defaultProps = {
	mode: 'alternating-widget-without-video-1-on-1',
	publisher: 'sdk-tester',
	pageType: 'article',
	pageUrl: 'https://blog.taboola.com',
	placement: 'Mid Article',
	targetType: 'mix',
	height: Platform.OS === 'ios' ? 230 : 270,
};

Widget.propTypes = {
	mode: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	pageType: PropTypes.string.isRequired,
	pageUrl: PropTypes.string.isRequired,
	placement: PropTypes.string.isRequired,
	targetType: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
};

export default Widget;
