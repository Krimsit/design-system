import * as fs from 'fs'

import { themeFiles } from '../../../constants'

export const generateRootTypesIndex = (): void => {
  const fileCode = [
    `export * from './collections'`,
    `export type { ${themeFiles.mainTypeName} } from './${themeFiles.mainTypeFileName}'`,
  ].join('\n\n')
  const filePath = `${themeFiles.typesPath}/index.ts`

  fs.writeFile(filePath, fileCode, (err) => {
    if (err) throw err
  })
}
