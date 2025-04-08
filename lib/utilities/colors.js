export default function (colors) {
    const utilities = {};
    Object.keys(colors).forEach((colorName) => {
        const color = colors[colorName];
        if (typeof color === 'string') {
            const bg = `bg-${colorName}`;
            const text = `text-${colorName}-contrast`;
            const apply = `@apply ${bg} ${text}`;
            const rule = {};
            rule[apply] = {};
            utilities[`.color-${colorName}`] = rule;
        }
        else {
            return Object.keys(color).forEach((shadeName) => {
                const shade = parseInt(shadeName);
                let bg, text;
                if (shade > 0) {
                    bg = `bg-${colorName}-${shade}`;
                    text = `text-${colorName}-${1000 - shade}`;
                }
                else if (shadeName === 'DEFAULT') {
                    bg = `bg-${colorName}`;
                    text = `text-${colorName}-contrast`;
                }
                else if (shadeName === 'contrast') {
                    bg = `bg-${colorName}-contrast`;
                    text = `text-${colorName}`;
                }
                else {
                    bg = `bg-${colorName}-${shadeName}`;
                    text = `text-${colorName}-${shadeName}-contrast`;
                }
                const apply = `@apply ${bg} ${text}`;
                let className = `.color-${colorName}`;
                if (shadeName !== 'DEFAULT') {
                    className += `-${shadeName}`;
                }
                const rule = {};
                rule[apply] = {};
                utilities[className] = rule;
            });
        }
    });
    return utilities;
}
