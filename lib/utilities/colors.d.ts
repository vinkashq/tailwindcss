interface Colors {
    [colorName: string]: string | {
        [shadeName: string]: string;
    };
}
export default function (colors: Colors): {
    [key: string]: {
        [key: string]: any;
    };
};
export {};
