declare module 'vanta/dist/vanta.rings.min' {
  const RINGS: {
    (options: {
      el: HTMLElement | null;
      THREE: any;
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      backgroundColor?: number;
      color?: number;
      [key: string]: any;
    }): {
      destroy: () => void;
    };
  };
  export default RINGS;
}
// declare module 'vanta/dist/vanta.dots.min' {
//   const DOTS: {
//     (options: {
//       el: HTMLElement | null;
//       THREE: any;
//       mouseControls?: boolean;
//       touchControls?: boolean;
//       gyroControls?: boolean;
//       minHeight?: number;
//       minWidth?: number;
//       scale?: number;
//       scaleMobile?: number;
//       color?: number;
//       color2?: number;
//       backgroundColor?: number;
//       size?: number;
//       spacing?: number;
//       points?: number;
//       [key: string]: any;
//     }): {
//       destroy: () => void;
//     };
//   };
//   export default DOTS;
// }
declare module 'vanta/dist/vanta.globe.min' {
  const GLOBE: {
    (options: {
      el: HTMLElement | null;
      THREE: any;
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      color?: number;
      color2?: number;
      size?: number;
      backgroundColor?: number;
      [key: string]: any;
    }): {
      destroy: () => void;
    };
  };
  export default GLOBE;
}
declare module 'vanta/dist/vanta.net.min' {
  const NET: {
    (options: {
      el: HTMLElement | null;
      THREE: any;
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      color?: number;
      backgroundColor?: number;
      points?: number;
      spacing?: number;
      [key: string]: any;
    }): {
      destroy: () => void;
    };
  };
  export default NET;
}
declare module 'vanta/dist/vanta.clouds.min' {
  const CLOUDS: {
    (options: {
      el: HTMLElement | null;
      THREE: any;
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      [key: string]: any;
    }): {
      destroy: () => void;
    };
  };
  export default CLOUDS;
}