export type TokensType = {
  colors: {
    primary: string
    secondary: string
    success: string
    successDark: string
    error: string
    errorDark: string
    disabled: string
    disabledDark: string
  }
  border: {
    primary: string
    secondary: string
    success: string
    successDark: string
    error: string
    errorDark: string
    disabled: string
    disabledDark: string
    transparent: string
  }
  text: {
    primary: string
    secondary: string
    disabled: string
    contrast: string
    action: string
    actionDark: string
    success: string
    successDark: string
    error: string
    errorDark: string
    warning: string
  }
  background: {
    primary: {
      default: string
      hover: string
      active: string
      defaultLight: string
      hoverLight: string
      activeLight: string
    }
    common: {
      default: string
      hover: string
      active: string
      defaultLight: string
      hoverLight: string
      activeLight: string
    }
    disabled: { default: string; light: string; transparent: string }
    error: {
      default: string
      hover: string
      active: string
      defaultLight: string
      hoverLight: string
      activeLight: string
    }
    secondary: {
      default: string
      hover: string
      active: string
      defaultLight: string
      hoverLight: string
      activeLight: string
    }
  }
  sizes: {
    icon: {
      xxl: string
      xl: string
      l: string
      m: string
      s: string
      xs: string
    }
  }
}
