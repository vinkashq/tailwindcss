const ruleByColorAndShade = (colorName, shadeName) => {
    const shade = parseInt(shadeName);
    let bg, text;
    if (shade > 0) {
        bg = `bg-${colorName}-${shade}`;
        text = `text-${colorName}-${1000 - shade}`;
    }
    else if (shadeName === 'DEFAULT') {
        bg = `bg-${colorName}`;
        text = `text-${colorName}-contrast`;
        console.info(`Using default color "${colorName}" with default contrast color.`);
    }
    else if (shadeName === 'contrast') {
        bg = `bg-${colorName}-contrast`;
        text = `text-${colorName}`;
    }
    else {
        bg = `bg-${colorName}-${shadeName}`;
        text = `text-${colorName}-${shadeName}-contrast`;
        console.warn(`Invalid shade name "${shadeName}" for color "${colorName}". Using default contrast color.`);
    }
    const apply = `@apply ${bg} ${text}`;
    const rule = {};
    rule[apply] = {};
    return rule;
}

const classByColorAndShade = (colorName, shadeName) => {
    let className = `.color-${colorName}`;
    if (shadeName !== 'DEFAULT') {
        className += `-${shadeName}`;
    }
    return className;
}

export default function (colors) {
    const utilities = {};
    Object.keys(colors).forEach((colorName) => {
        const color = colors[colorName];
        if (typeof color === 'string') {
            if (colorName.includes('-')) {
                const [baseColorName, shadeName] = colorName.split('-');
                utilities[classByColorAndShade(baseColorName, shadeName)] = ruleByColorAndShade(baseColorName, shadeName);
                console.warn(`Color name "${colorName}" includes hyphen(-). Using color name as "${baseColorName}" with shade "${shadeName}".`);
            } else {
                const bg = `bg-${colorName}`;
                const text = `text-${colorName}-contrast`;
                const apply = `@apply ${bg} ${text}`;
                const rule = {};
                rule[apply] = {};
                utilities[`.color-${colorName}`] = rule;
                console.warn(`Color value is a string. Using color name as "${colorName}" with default contrast color.`);
            }
        }
        else {
            Object.keys(color).forEach((shadeName) => {
                utilities[classByColorAndShade(colorName, shadeName)] = ruleByColorAndShade(colorName, shadeName);
            });
        }
    });
    return utilities;
}
