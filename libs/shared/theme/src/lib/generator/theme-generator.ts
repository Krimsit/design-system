import 'core-js/stable/structured-clone.js'

import BaseStyleDictionary from 'style-dictionary'
import { program } from 'commander'

import { registerCustomParsers } from './parsers'
import { registerCustomActions } from './actions'
import { registerTypographyTransform } from './transforms'
import { originalJsonSource, tmpBuildPath, tmpFileName } from './constants'

import type { Core } from 'style-dictionary'
import type { CliOptions } from './types'

program.option(
  '-gtp, --globalThemePrefix <globalThemePrefix>',
  'Global theme prefix - const theme = { [globalThemePrefix]: { ... } }',
  '',
)

program.parse()

const generatorOptions = program.opts<CliOptions>()
const StyleDictionary = BaseStyleDictionary as Core

registerCustomParsers(StyleDictionary)
registerCustomActions(StyleDictionary)
registerTypographyTransform(StyleDictionary)

const themesGenerator = StyleDictionary.extend({
  source: [originalJsonSource],
  platforms: {
    uiKit: {
      buildPath: tmpBuildPath,
      transforms: ['color/hsl', 'size/px', 'typography'],
      actions: ['generateThemes'],
      options: generatorOptions,
      files: [
        {
          destination: tmpFileName,
          format: 'json/nested',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
})

themesGenerator.cleanAllPlatforms()
themesGenerator.buildAllPlatforms()
