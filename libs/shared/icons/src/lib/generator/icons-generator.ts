import 'dotenv/config'
import { program } from 'commander'

import { FigmaClient } from './figmaClient'

import type { ClientConfig, ClientOptions } from './figmaClient'

program
  .option('-p, --page <figmaPage>', 'The name of the page in Figma file')
  .option(
    '-f, --frame <figmaFrame>',
    'The name of the frame with icons on the page in Figma',
  )
  .option(
    '-ip, --iconsPath <iconsPath>',
    'The name of the frame with icons on the page in Figma',
  )

program.parse()

const options = program.opts<ClientOptions>()
const config: ClientConfig = {
  figmaPersonalToken: process.env.FIGMA_API_TOKEN ?? '',
  fileId: process.env.FIGMA_UI_KIT_FILE_ID ?? '',
  page: String(options.page),
  frame: String(options.frame),
  iconsPath: String(options.iconsPath),
}
const figmaClient = new FigmaClient(config)

void figmaClient.run()
