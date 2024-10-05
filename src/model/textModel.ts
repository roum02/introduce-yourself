type positionType = {x: number, y: number}

export const handleTextRender = (text: string, {x, y}: positionType) => {
	return `<text
                x=${x} y=${y}
                fill="#ED6E46" font-size="100" font-family="'Leckerli One', cursive">
                ${text}
                </text>`;
};
