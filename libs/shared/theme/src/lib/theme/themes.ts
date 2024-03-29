import type { ThemeType } from './types'

export const lightTheme: ThemeType = {
  palette: {
    blue: {
      '20': 'hsl(204, 100%, 98%)',
      '50': 'hsl(205, 100%, 95%)',
      '100': 'hsl(206, 100%, 90%)',
      '200': 'hsl(206, 100%, 80%)',
      '300': 'hsl(206, 100%, 70%)',
      '400': 'hsl(206, 100%, 60%)',
      '500': 'hsl(206, 100%, 50%)',
      '600': 'hsl(206, 100%, 40%)',
      '700': 'hsl(206, 100%, 30%)',
      '800': 'hsl(206, 100%, 20%)',
      '900': 'hsl(206, 100%, 10%)',
    },
    grey: {
      '20': 'hsl(0, 0%, 96%)',
      '50': 'hsl(180, 3%, 94%)',
      '100': 'hsl(0, 0%, 90%)',
      '200': 'hsl(210, 2%, 80%)',
      '300': 'hsl(225, 3%, 70%)',
      '400': 'hsl(225, 2%, 60%)',
      '500': 'hsl(216, 2%, 50%)',
      '600': 'hsl(225, 2%, 40%)',
      '700': 'hsl(220, 2%, 30%)',
      '800': 'hsl(210, 2%, 20%)',
      '900': 'hsl(240, 2%, 10%)',
      a75: 'hsl(0, 0%, 90%)',
      a150: 'hsl(210, 3%, 85%)',
      a250: 'hsl(220, 2%, 75%)',
      a80064: 'hsla(210, 2%, 20%, 0.64)',
      a80032: 'hsla(210, 2%, 20%, 0.32)',
    },
    green: {
      '20': 'hsl(120, 60%, 98%)',
      '50': 'hsl(120, 54%, 95%)',
      '100': 'hsl(122, 53%, 90%)',
      '200': 'hsl(122, 53%, 80%)',
      '300': 'hsl(122, 54%, 70%)',
      '400': 'hsl(122, 54%, 60%)',
      '500': 'hsl(122, 54%, 50%)',
      '600': 'hsl(122, 54%, 40%)',
      '700': 'hsl(122, 54%, 30%)',
      '800': 'hsl(123, 55%, 20%)',
      '900': 'hsl(122, 53%, 10%)',
      a550: 'hsl(122, 54%, 45%)',
    },
    red: {
      '20': 'hsl(0, 100%, 98%)',
      '50': 'hsl(5, 100%, 95%)',
      '100': 'hsl(4, 100%, 90%)',
      '200': 'hsl(4, 100%, 80%)',
      '300': 'hsl(4, 100%, 70%)',
      '400': 'hsl(4, 100%, 60%)',
      '500': 'hsl(4, 100%, 50%)',
      '600': 'hsl(4, 100%, 40%)',
      '700': 'hsl(4, 100%, 30%)',
      '800': 'hsl(4, 100%, 20%)',
      '900': 'hsl(4, 100%, 10%)',
      a500: 'hsl(4, 100%, 45%)',
    },
    orange: {
      '20': 'hsl(36, 100%, 98%)',
      '50': 'hsl(37, 100%, 95%)',
      '100': 'hsl(36, 100%, 90%)',
      '200': 'hsl(36, 100%, 80%)',
      '300': 'hsl(36, 100%, 70%)',
      '400': 'hsl(36, 100%, 60%)',
      '500': 'hsl(36, 100%, 50%)',
      '600': 'hsl(36, 100%, 40%)',
      '700': 'hsl(36, 100%, 30%)',
      '800': 'hsl(36, 100%, 20%)',
      '900': 'hsl(36, 100%, 10%)',
    },
    purple: {
      '20': 'hsl(264, 100%, 98%)',
      '50': 'hsl(264, 100%, 95%)',
      '100': 'hsl(264, 96%, 90%)',
      '200': 'hsl(264, 96%, 80%)',
      '300': 'hsl(264, 97%, 70%)',
      '400': 'hsl(264, 97%, 60%)',
      '500': 'hsl(264, 97%, 50%)',
      '600': 'hsl(264, 97%, 40%)',
      '700': 'hsl(264, 97%, 30%)',
      '800': 'hsl(264, 96%, 20%)',
      '900': 'hsl(264, 96%, 10%)',
    },
    common: {
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      transparent: 'hsla(0, 0%, 100%, 0)',
      greyBlue: 'hsl(198, 18%, 25%)',
      greyBlueDark: 'hsl(199, 17%, 18%)',
      yellow1: 'hsl(48, 100%, 50%)',
      yellow2: 'hsl(43, 100%, 50%)',
      yellow3: 'hsl(42, 100%, 48%)',
      brown1: 'hsl(36, 100%, 30%)',
      brown2: 'hsl(36, 100%, 20%)',
      brown3: 'hsl(36, 100%, 10%)',
      turquoise1: 'hsl(190, 92%, 30%)',
      turquoise2: 'hsl(190, 92%, 30%)',
      turquoise3: 'hsl(190, 92%, 30%)',
      pink1: 'hsl(320, 75%, 50%)',
      pink2: 'hsl(320, 75%, 40%)',
      pink3: 'hsl(320, 75%, 30%)',
    },
  },
  borderRadius: {
    full: '100px',
    large: '16px',
    medium: '8px',
    small: '4px',
    none: '0px',
  },
  spacing: {
    xxl: '16px',
    xl: '12px',
    l: '8px',
    m: '6px',
    s: '4px',
    xs: '2px',
    none: '0px',
  },
  components: {
    button: {
      gap: '8px',
      borderRadius: '4px',
      padding: {
        l: { horizontal: '16px', vertical: '8px' },
        xs: { horizontal: '4px', vertical: '0px' },
        s: { horizontal: '8px', vertical: '4px' },
        m: { horizontal: '12px', vertical: '6px' },
      },
    },
    buttonBackground: {
      disabled: {
        filled: {
          background: 'hsl(0, 0%, 90%)',
          text: 'hsla(210, 2%, 20%, 0.64)',
          border: 'hsl(0, 0%, 90%)',
        },
        outlined: {
          background: 'hsl(0, 0%, 100%)',
          text: 'hsla(210, 2%, 20%, 0.64)',
          border: 'hsl(225, 3%, 70%)',
        },
        ghost: {
          background: 'hsla(0, 0%, 100%, 0)',
          text: 'hsla(210, 2%, 20%, 0.64)',
          border: 'hsla(0, 0%, 100%, 0)',
        },
      },
      color: {
        primary: {
          filled: {
            default: 'hsl(206, 100%, 50%)',
            hover: 'hsl(206, 100%, 40%)',
            active: 'hsl(206, 100%, 30%)',
            text: 'hsl(0, 0%, 100%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsla(0, 0%, 100%, 0)',
          },
          outlined: {
            default: 'hsla(0, 0%, 100%, 0)',
            hover: 'hsl(205, 100%, 95%)',
            active: 'hsl(206, 100%, 90%)',
            text: 'hsl(206, 100%, 50%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsl(206, 100%, 50%)',
          },
          ghost: {
            default: 'hsla(0, 0%, 100%, 0)',
            hover: 'hsl(205, 100%, 95%)',
            active: 'hsl(206, 100%, 90%)',
            text: 'hsl(206, 100%, 50%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsla(0, 0%, 100%, 0)',
          },
        },
        secondary: {
          filled: {
            default: 'hsl(122, 54%, 50%)',
            hover: 'hsl(122, 54%, 40%)',
            active: 'hsl(122, 54%, 30%)',
            text: 'hsl(0, 0%, 100%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsla(0, 0%, 100%, 0)',
          },
          outlined: {
            default: 'hsla(0, 0%, 100%, 0)',
            hover: 'hsl(120, 54%, 95%)',
            active: 'hsl(122, 53%, 90%)',
            text: 'hsl(122, 54%, 50%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsl(122, 54%, 50%)',
          },
          ghost: {
            default: 'hsla(0, 0%, 100%, 0)',
            hover: 'hsl(120, 54%, 95%)',
            active: 'hsl(122, 53%, 90%)',
            text: 'hsl(122, 54%, 50%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsla(0, 0%, 100%, 0)',
          },
        },
        error: {
          filled: {
            default: 'hsl(4, 100%, 50%)',
            hover: 'hsl(4, 100%, 40%)',
            active: 'hsl(4, 100%, 30%)',
            text: 'hsl(0, 0%, 100%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsla(0, 0%, 100%, 0)',
          },
          outlined: {
            default: 'hsla(0, 0%, 100%, 0)',
            hover: 'hsl(5, 100%, 95%)',
            active: 'hsl(4, 100%, 90%)',
            text: 'hsl(4, 100%, 50%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsl(4, 100%, 50%)',
          },
          ghost: {
            default: 'hsla(0, 0%, 100%, 0)',
            hover: 'hsl(5, 100%, 95%)',
            active: 'hsl(4, 100%, 90%)',
            text: 'hsl(4, 100%, 50%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsla(0, 0%, 100%, 0)',
          },
        },
        common: {
          filled: {
            default: 'hsl(216, 2%, 50%)',
            hover: 'hsl(225, 2%, 40%)',
            active: 'hsl(220, 2%, 30%)',
            text: 'hsl(0, 0%, 100%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsla(0, 0%, 100%, 0)',
          },
          outlined: {
            default: 'hsla(0, 0%, 100%, 0)',
            hover: 'hsl(180, 3%, 94%)',
            active: 'hsl(0, 0%, 90%)',
            text: 'hsl(216, 2%, 50%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsl(216, 2%, 50%)',
          },
          ghost: {
            default: 'hsla(0, 0%, 100%, 0)',
            hover: 'hsl(180, 3%, 94%)',
            active: 'hsl(0, 0%, 90%)',
            text: 'hsl(216, 2%, 50%)',
            outline: 'hsl(206, 100%, 50%)',
            border: 'hsla(0, 0%, 100%, 0)',
          },
        },
      },
    },
    icon: { sizes: { l: '24px', m: '24px', s: '20px', xs: '16px' } },
    buttonIcon: {
      borderRadius: '4px',
      padding: {
        l: { horizontal: '8px', vertical: '8px' },
        m: { horizontal: '6px', vertical: '6px' },
        s: { horizontal: '4px', vertical: '4px' },
        xs: { horizontal: '2px', vertical: '2px' },
      },
    },
  },
  tokens: {
    colors: {
      primary: 'hsl(206, 100%, 50%)',
      secondary: 'hsl(216, 2%, 50%)',
      success: 'hsl(122, 54%, 50%)',
      successDark: 'hsl(123, 55%, 20%)',
      error: 'hsl(4, 100%, 50%)',
      errorDark: 'hsl(4, 100%, 20%)',
      disabled: 'hsl(0, 0%, 90%)',
      disabledDark: 'hsl(225, 2%, 60%)',
    },
    border: {
      primary: 'hsl(206, 100%, 50%)',
      secondary: 'hsl(216, 2%, 50%)',
      success: 'hsl(122, 54%, 50%)',
      successDark: 'hsl(123, 55%, 20%)',
      error: 'hsl(4, 100%, 50%)',
      errorDark: 'hsl(4, 100%, 20%)',
      disabled: 'hsl(0, 0%, 90%)',
      disabledDark: 'hsl(225, 3%, 70%)',
      transparent: 'hsla(0, 0%, 100%, 0)',
    },
    text: {
      primary: 'hsl(210, 2%, 20%)',
      secondary: 'hsl(216, 2%, 50%)',
      disabled: 'hsla(210, 2%, 20%, 0.64)',
      contrast: 'hsl(0, 0%, 100%)',
      action: 'hsl(206, 100%, 50%)',
      actionDark: 'hsl(206, 100%, 20%)',
      success: 'hsl(122, 54%, 50%)',
      successDark: 'hsl(123, 55%, 20%)',
      error: 'hsl(4, 100%, 50%)',
      errorDark: 'hsl(4, 100%, 20%)',
      warning: 'hsl(36, 100%, 20%)',
    },
    background: {
      primary: {
        default: 'hsl(206, 100%, 50%)',
        hover: 'hsl(206, 100%, 40%)',
        active: 'hsl(206, 100%, 30%)',
        defaultLight: 'hsla(0, 0%, 100%, 0)',
        hoverLight: 'hsl(205, 100%, 95%)',
        activeLight: 'hsl(206, 100%, 90%)',
      },
      common: {
        default: 'hsl(216, 2%, 50%)',
        hover: 'hsl(225, 2%, 40%)',
        active: 'hsl(220, 2%, 30%)',
        defaultLight: 'hsla(0, 0%, 100%, 0)',
        hoverLight: 'hsl(180, 3%, 94%)',
        activeLight: 'hsl(0, 0%, 90%)',
      },
      disabled: {
        default: 'hsl(0, 0%, 90%)',
        light: 'hsl(0, 0%, 100%)',
        transparent: 'hsla(0, 0%, 100%, 0)',
      },
      error: {
        default: 'hsl(4, 100%, 50%)',
        hover: 'hsl(4, 100%, 40%)',
        active: 'hsl(4, 100%, 30%)',
        defaultLight: 'hsla(0, 0%, 100%, 0)',
        hoverLight: 'hsl(5, 100%, 95%)',
        activeLight: 'hsl(4, 100%, 90%)',
      },
      secondary: {
        default: 'hsl(122, 54%, 50%)',
        hover: 'hsl(122, 54%, 40%)',
        active: 'hsl(122, 54%, 30%)',
        defaultLight: 'hsla(0, 0%, 100%, 0)',
        hoverLight: 'hsl(120, 54%, 95%)',
        activeLight: 'hsl(122, 53%, 90%)',
      },
    },
    sizes: {
      icon: {
        xxl: '28px',
        xl: '24px',
        l: '20px',
        m: '16px',
        s: '12px',
        xs: '8px',
      },
    },
  },
  typography: {
    head800: 'normal 500 20px/32px Inter',
    head800Medium: 'normal 500 12px/autopx Inter',
    head700: 'normal 400 18px/32px Inter',
    head700Medium: 'normal 500 18px/32px Inter',
    head600: 'normal 400 16px/24px Inter',
    head600Medium: 'normal 500 16px/24px Inter',
    head500: 'normal 400 14px/22px Inter',
    head500Medium: 'normal 500 14px/22px Inter',
    display900: 'normal 500 54px/63px Inter',
    display800: 'normal 400 36px/42px Inter',
    display700: 'normal 500 24px/28px Inter',
    body700: 'normal 400 18px/24px Inter',
    body700Medium: 'normal 500 18px/24px Inter',
    body600: 'normal 400 16px/24px Inter',
    body600Medium: 'normal 500 16px/24px Inter',
    body500: 'normal 400 14px/24px Inter',
    body500Medium: 'normal 500 14px/24px Inter',
    body400: 'normal 400 12px/22px Inter',
    body400Medium: 'normal 500 12px/22px Inter',
    body300: 'normal 400 10px/20px Inter',
    body300Medium: 'normal 500 10px/20px Inter',
    label500: 'normal 400 14px/16px Inter',
    label500Medium: 'normal 500 14px/16px Inter',
    label400: 'normal 400 12px/14px Inter',
    label400Medium: 'normal 500 12px/14px Inter',
    label300: 'normal 400 10px/12px Inter',
    label300Medium: 'normal 500 10px/12px Inter',
  },
}

export const darkTheme: ThemeType = {
  palette: {
    blue: {
      '20': 'hsl(0, 0%, 0%)',
      '50': 'hsl(0, 0%, 0%)',
      '100': 'hsl(0, 0%, 0%)',
      '200': 'hsl(0, 0%, 0%)',
      '300': 'hsl(0, 0%, 0%)',
      '400': 'hsl(0, 0%, 0%)',
      '500': 'hsl(0, 0%, 0%)',
      '600': 'hsl(0, 0%, 0%)',
      '700': 'hsl(0, 0%, 0%)',
      '800': 'hsl(0, 0%, 0%)',
      '900': 'hsl(0, 0%, 0%)',
    },
    grey: {
      '20': 'hsl(0, 0%, 0%)',
      '50': 'hsl(0, 0%, 0%)',
      '100': 'hsl(0, 0%, 0%)',
      '200': 'hsl(0, 0%, 0%)',
      '300': 'hsl(0, 0%, 0%)',
      '400': 'hsl(0, 0%, 0%)',
      '500': 'hsl(0, 0%, 0%)',
      '600': 'hsl(0, 0%, 0%)',
      '700': 'hsl(0, 0%, 0%)',
      '800': 'hsl(0, 0%, 0%)',
      '900': 'hsl(0, 0%, 0%)',
      a75: 'hsl(0, 0%, 0%)',
      a150: 'hsl(0, 0%, 0%)',
      a250: 'hsl(0, 0%, 0%)',
      a80064: 'hsla(0, 0%, 0%, 0.64)',
      a80032: 'hsla(0, 0%, 0%, 0.32)',
    },
    green: {
      '20': 'hsl(0, 0%, 0%)',
      '50': 'hsl(0, 0%, 0%)',
      '100': 'hsl(0, 0%, 0%)',
      '200': 'hsl(0, 0%, 0%)',
      '300': 'hsl(0, 0%, 0%)',
      '400': 'hsl(0, 0%, 0%)',
      '500': 'hsl(0, 0%, 0%)',
      '600': 'hsl(0, 0%, 0%)',
      '700': 'hsl(0, 0%, 0%)',
      '800': 'hsl(0, 0%, 0%)',
      '900': 'hsl(0, 0%, 0%)',
      a550: 'hsl(0, 0%, 0%)',
    },
    red: {
      '20': 'hsl(0, 0%, 0%)',
      '50': 'hsl(0, 0%, 0%)',
      '100': 'hsl(0, 0%, 0%)',
      '200': 'hsl(0, 0%, 0%)',
      '300': 'hsl(0, 0%, 0%)',
      '400': 'hsl(0, 0%, 0%)',
      '500': 'hsl(0, 0%, 0%)',
      '600': 'hsl(0, 0%, 0%)',
      '700': 'hsl(0, 0%, 0%)',
      '800': 'hsl(0, 0%, 0%)',
      '900': 'hsl(0, 0%, 0%)',
      a500: 'hsl(0, 0%, 0%)',
    },
    orange: {
      '20': 'hsl(0, 0%, 0%)',
      '50': 'hsl(0, 0%, 0%)',
      '100': 'hsl(0, 0%, 0%)',
      '200': 'hsl(0, 0%, 0%)',
      '300': 'hsl(0, 0%, 0%)',
      '400': 'hsl(0, 0%, 0%)',
      '500': 'hsl(0, 0%, 0%)',
      '600': 'hsl(0, 0%, 0%)',
      '700': 'hsl(0, 0%, 0%)',
      '800': 'hsl(0, 0%, 0%)',
      '900': 'hsl(0, 0%, 0%)',
    },
    purple: {
      '20': 'hsl(0, 0%, 0%)',
      '50': 'hsl(0, 0%, 0%)',
      '100': 'hsl(0, 0%, 0%)',
      '200': 'hsl(0, 0%, 0%)',
      '300': 'hsl(0, 0%, 0%)',
      '400': 'hsl(0, 0%, 0%)',
      '500': 'hsl(0, 0%, 0%)',
      '600': 'hsl(0, 0%, 0%)',
      '700': 'hsl(0, 0%, 0%)',
      '800': 'hsl(0, 0%, 0%)',
      '900': 'hsl(0, 0%, 0%)',
    },
    common: {
      white: 'hsl(0, 0%, 0%)',
      black: 'hsl(0, 0%, 0%)',
      transparent: 'hsla(0, 0%, 0%, 0)',
      greyBlue: 'hsl(0, 0%, 0%)',
      greyBlueDark: 'hsl(0, 0%, 0%)',
      yellow1: 'hsl(0, 0%, 0%)',
      yellow2: 'hsl(0, 0%, 0%)',
      yellow3: 'hsl(0, 0%, 0%)',
      brown1: 'hsl(0, 0%, 0%)',
      brown2: 'hsl(0, 0%, 0%)',
      brown3: 'hsl(0, 0%, 0%)',
      turquoise1: 'hsl(0, 0%, 0%)',
      turquoise2: 'hsl(0, 0%, 0%)',
      turquoise3: 'hsl(0, 0%, 0%)',
      pink1: 'hsl(0, 0%, 0%)',
      pink2: 'hsl(0, 0%, 0%)',
      pink3: 'hsl(0, 0%, 0%)',
    },
  },
  borderRadius: {
    full: '100px',
    large: '16px',
    medium: '8px',
    small: '4px',
    none: '0px',
  },
  spacing: {
    xxl: '16px',
    xl: '12px',
    l: '8px',
    m: '6px',
    s: '4px',
    xs: '2px',
    none: '0px',
  },
  components: {
    button: {
      gap: '8px',
      borderRadius: '4px',
      padding: {
        l: { horizontal: '16px', vertical: '8px' },
        xs: { horizontal: '4px', vertical: '0px' },
        s: { horizontal: '8px', vertical: '4px' },
        m: { horizontal: '12px', vertical: '6px' },
      },
    },
    buttonBackground: {
      disabled: {
        filled: {
          background: 'hsl(0, 0%, 0%)',
          text: 'hsla(0, 0%, 0%, 0.64)',
          border: 'hsl(0, 0%, 0%)',
        },
        outlined: {
          background: 'hsl(0, 0%, 0%)',
          text: 'hsla(0, 0%, 0%, 0.64)',
          border: 'hsl(0, 0%, 0%)',
        },
        ghost: {
          background: 'hsla(0, 0%, 0%, 0)',
          text: 'hsla(0, 0%, 0%, 0.64)',
          border: 'hsla(0, 0%, 0%, 0)',
        },
      },
      color: {
        primary: {
          filled: {
            default: 'hsl(0, 0%, 0%)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsla(0, 0%, 0%, 0)',
          },
          outlined: {
            default: 'hsla(0, 0%, 0%, 0)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsl(0, 0%, 0%)',
          },
          ghost: {
            default: 'hsla(0, 0%, 0%, 0)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsla(0, 0%, 0%, 0)',
          },
        },
        secondary: {
          filled: {
            default: 'hsl(0, 0%, 0%)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsla(0, 0%, 0%, 0)',
          },
          outlined: {
            default: 'hsla(0, 0%, 0%, 0)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsl(0, 0%, 0%)',
          },
          ghost: {
            default: 'hsla(0, 0%, 0%, 0)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsla(0, 0%, 0%, 0)',
          },
        },
        error: {
          filled: {
            default: 'hsl(0, 0%, 0%)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsla(0, 0%, 0%, 0)',
          },
          outlined: {
            default: 'hsla(0, 0%, 0%, 0)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsl(0, 0%, 0%)',
          },
          ghost: {
            default: 'hsla(0, 0%, 0%, 0)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsla(0, 0%, 0%, 0)',
          },
        },
        common: {
          filled: {
            default: 'hsl(0, 0%, 0%)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsla(0, 0%, 0%, 0)',
          },
          outlined: {
            default: 'hsla(0, 0%, 0%, 0)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsl(0, 0%, 0%)',
          },
          ghost: {
            default: 'hsla(0, 0%, 0%, 0)',
            hover: 'hsl(0, 0%, 0%)',
            active: 'hsl(0, 0%, 0%)',
            text: 'hsl(0, 0%, 0%)',
            outline: 'hsl(0, 0%, 0%)',
            border: 'hsla(0, 0%, 0%, 0)',
          },
        },
      },
    },
    icon: { sizes: { l: '24px', m: '24px', s: '20px', xs: '16px' } },
    buttonIcon: {
      borderRadius: '4px',
      padding: {
        l: { horizontal: '8px', vertical: '8px' },
        m: { horizontal: '6px', vertical: '6px' },
        s: { horizontal: '4px', vertical: '4px' },
        xs: { horizontal: '2px', vertical: '2px' },
      },
    },
  },
  tokens: {
    colors: {
      primary: 'hsl(0, 0%, 0%)',
      secondary: 'hsl(0, 0%, 0%)',
      success: 'hsl(0, 0%, 0%)',
      successDark: 'hsl(0, 0%, 0%)',
      error: 'hsl(0, 0%, 0%)',
      errorDark: 'hsl(0, 0%, 0%)',
      disabled: 'hsl(0, 0%, 0%)',
      disabledDark: 'hsl(0, 0%, 0%)',
    },
    border: {
      primary: 'hsl(0, 0%, 0%)',
      secondary: 'hsl(0, 0%, 0%)',
      success: 'hsl(0, 0%, 0%)',
      successDark: 'hsl(0, 0%, 0%)',
      error: 'hsl(0, 0%, 0%)',
      errorDark: 'hsl(0, 0%, 0%)',
      disabled: 'hsl(0, 0%, 0%)',
      disabledDark: 'hsl(0, 0%, 0%)',
      transparent: 'hsla(0, 0%, 0%, 0)',
    },
    text: {
      primary: 'hsl(0, 0%, 0%)',
      secondary: 'hsl(0, 0%, 0%)',
      disabled: 'hsla(0, 0%, 0%, 0.64)',
      contrast: 'hsl(0, 0%, 0%)',
      action: 'hsl(0, 0%, 0%)',
      actionDark: 'hsl(0, 0%, 0%)',
      success: 'hsl(0, 0%, 0%)',
      successDark: 'hsl(0, 0%, 0%)',
      error: 'hsl(0, 0%, 0%)',
      errorDark: 'hsl(0, 0%, 0%)',
      warning: 'hsl(0, 0%, 0%)',
    },
    background: {
      primary: {
        default: 'hsl(0, 0%, 0%)',
        hover: 'hsl(0, 0%, 0%)',
        active: 'hsl(0, 0%, 0%)',
        defaultLight: 'hsla(0, 0%, 0%, 0)',
        hoverLight: 'hsl(0, 0%, 0%)',
        activeLight: 'hsl(0, 0%, 0%)',
      },
      common: {
        default: 'hsl(0, 0%, 0%)',
        hover: 'hsl(0, 0%, 0%)',
        active: 'hsl(0, 0%, 0%)',
        defaultLight: 'hsla(0, 0%, 0%, 0)',
        hoverLight: 'hsl(0, 0%, 0%)',
        activeLight: 'hsl(0, 0%, 0%)',
      },
      disabled: {
        default: 'hsl(0, 0%, 0%)',
        light: 'hsl(0, 0%, 0%)',
        transparent: 'hsla(0, 0%, 0%, 0)',
      },
      error: {
        default: 'hsl(0, 0%, 0%)',
        hover: 'hsl(0, 0%, 0%)',
        active: 'hsl(0, 0%, 0%)',
        defaultLight: 'hsla(0, 0%, 0%, 0)',
        hoverLight: 'hsl(0, 0%, 0%)',
        activeLight: 'hsl(0, 0%, 0%)',
      },
      secondary: {
        default: 'hsl(0, 0%, 0%)',
        hover: 'hsl(0, 0%, 0%)',
        active: 'hsl(0, 0%, 0%)',
        defaultLight: 'hsla(0, 0%, 0%, 0)',
        hoverLight: 'hsl(0, 0%, 0%)',
        activeLight: 'hsl(0, 0%, 0%)',
      },
    },
    sizes: {
      icon: {
        xxl: '28px',
        xl: '24px',
        l: '20px',
        m: '16px',
        s: '12px',
        xs: '8px',
      },
    },
  },
  typography: {
    head800: 'normal 500 20px/32px Inter',
    head800Medium: 'normal 500 12px/autopx Inter',
    head700: 'normal 400 18px/32px Inter',
    head700Medium: 'normal 500 18px/32px Inter',
    head600: 'normal 400 16px/24px Inter',
    head600Medium: 'normal 500 16px/24px Inter',
    head500: 'normal 400 14px/22px Inter',
    head500Medium: 'normal 500 14px/22px Inter',
    display900: 'normal 500 54px/63px Inter',
    display800: 'normal 400 36px/42px Inter',
    display700: 'normal 500 24px/28px Inter',
    body700: 'normal 400 18px/24px Inter',
    body700Medium: 'normal 500 18px/24px Inter',
    body600: 'normal 400 16px/24px Inter',
    body600Medium: 'normal 500 16px/24px Inter',
    body500: 'normal 400 14px/24px Inter',
    body500Medium: 'normal 500 14px/24px Inter',
    body400: 'normal 400 12px/22px Inter',
    body400Medium: 'normal 500 12px/22px Inter',
    body300: 'normal 400 10px/20px Inter',
    body300Medium: 'normal 500 10px/20px Inter',
    label500: 'normal 400 14px/16px Inter',
    label500Medium: 'normal 500 14px/16px Inter',
    label400: 'normal 400 12px/14px Inter',
    label400Medium: 'normal 500 12px/14px Inter',
    label300: 'normal 400 10px/12px Inter',
    label300Medium: 'normal 500 10px/12px Inter',
  },
}
