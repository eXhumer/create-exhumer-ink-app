import React from 'react';
import {Text} from '@exhumer/ink';

type Props = {
	name: string | undefined;
};

export default function App({name = 'Stranger'}: Props) {
	return (
		<Text>
			Hello, <Text color="green">{name}</Text>
		</Text>
	);
}
