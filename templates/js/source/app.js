import React from 'react';
import {Text} from '@exhumer/ink';

export default function App({name = 'Stranger'}) {
	return (
		<Text>
			Hello, <Text color="green">{name}</Text>
		</Text>
	);
}
