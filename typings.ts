declare module '@/assets/icons/*.svg' {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module "@/*.json" {
    const value: any;
    export default value;
}

declare module '*.scss' {
    const resource: {[key: string]: string};
    export = resource;
}