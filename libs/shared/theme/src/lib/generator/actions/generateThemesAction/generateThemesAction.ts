import * as fs from 'fs'

import { themeFiles, tmpBuildPath, tmpFileName } from '../../constants'

import { parseJsonToThemes, generateCode } from './formatters'

import type { Core, TransformedTokens } from 'style-dictionary'
import type { CliOptions } from '../../types'

export const registerGenerateThemesAction = (styleDictionary: Core) =>
  styleDictionary.registerAction({
    name: 'generateThemes',
    do(_, config) {
      const resultData = JSON.parse(
        fs.readFileSync(`${tmpBuildPath}/${tmpFileName}`, 'utf-8'),
      ) as TransformedTokens
      const themes = parseJsonToThemes(resultData)

      generateCode(themes, (config.options as CliOptions)?.globalThemePrefix)
    },
    undo() {
      fs.rmSync(themeFiles.rootPath, { recursive: true })
    },
  })
