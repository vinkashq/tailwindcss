"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const colors_1 = __importDefault(require("./utilities/colors"));
const buttons_1 = __importDefault(require("./utilities/buttons"));
exports.default = (0, plugin_1.default)(function ({ addUtilities, matchUtilities, theme }) {
    addUtilities(Object.assign(Object.assign({}, buttons_1.default), (0, colors_1.default)(theme('colors'))));
    matchUtilities({
        row: (size) => {
            const spacing = theme('spacing');
            const value = Object.keys(spacing).find(key => spacing[key] === size);
            const intValue = parseInt(value);
            let smValue;
            if (value === 'px') {
                smValue = '0.5';
            }
            else if (intValue > 0) {
                smValue = intValue * 2;
            }
            else if (intValue === 0) {
                smValue = 'px';
            }
            else {
                smValue = value;
            }
            return {
                [`@apply py-${value} sm:py-${smValue}`]: {},
            };
        },
    }, {
        values: theme('spacing'),
    });
});
