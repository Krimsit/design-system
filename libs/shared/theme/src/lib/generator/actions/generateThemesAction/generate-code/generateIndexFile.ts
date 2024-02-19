import * as fs from 'fs'

import { themeFiles } from '../../../constants'

import type { ParsedTheme } from '../../../types'

export const generateIndexFile = (themes: ParsedTheme[]): void => {
  const names = themes.map((item) => `${item.name}Theme`).join(', ')
  const fileCode = [
    `export { ${names} } from './themes'`,
    `export * from './types'`,
  ].join('\n\n')
  const filePath = `${themeFiles.rootPath}/index.ts`

  fs.writeFileSync(filePath, fileCode)
}
