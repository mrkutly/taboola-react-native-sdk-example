import React from 'react';
import RNTaboolaView from '@taboola/react-native-taboola';
import { BackButton } from './ArticleWithFeed';

const Widget = props => {
	return (
		<View>
			<BackButton onPress={e => props.back()} title="Back" />
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
		</View>
	);
};

export default Widget;
