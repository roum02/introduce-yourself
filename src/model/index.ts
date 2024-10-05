import { handleTextRender } from './textModel';

export const renderModel = {
	text: {
		render: () => handleTextRender('hello', {x: 30, y: 90}),
	},
};
