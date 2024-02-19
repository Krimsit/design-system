export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FIGMA_API_TOKEN: string
      FIGMA_UI_KIT_FILE_ID: string
    }
  }
}
