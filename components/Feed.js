import React from 'react';
import RNTaboolaView from '@taboola/react-native-taboola';
import PropTypes from 'prop-types';

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

Feed.defaultProps = {
	mode: 'alternating-widget-without-video-1-on-1',
	publisher: 'sdk-tester',
	pageType: 'article',
	pageUrl: 'https://blog.taboola.com',
	placement: 'Feed with video',
	targetType: 'mix',
};

Feed.propTypes = {
	mode: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	pageType: PropTypes.string.isRequired,
	pageUrl: PropTypes.string.isRequired,
	placement: PropTypes.string.isRequired,
	targetType: PropTypes.string.isRequired,
};

export default Feed;
