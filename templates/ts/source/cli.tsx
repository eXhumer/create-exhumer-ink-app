#!/usr/bin/env node
import React from 'react';
import {render} from '@exhumer/ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ %NAME%

	Options
		--name  Your name

	Examples
	  $ %NAME% --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
);

render(<App name={cli.flags.name} />);
