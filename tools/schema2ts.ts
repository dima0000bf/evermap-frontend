/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios'
import { compile } from 'json-schema-to-typescript'
import * as fs from 'fs/promises'

const NAME = 'ProjectModel'
const URL = 'https://raw.githubusercontent.com/dima0000bf/evermap-assets/master/manifest.json'
const DIST = './src/api/models'

async function main() {
  const { data: schema } = await axios.get(URL)

  const result = await compile(schema, NAME, {
    additionalProperties: false,
    enableConstEnums: true,
  })

  const enrichedResult = new Array<string>().concat(
    '/* eslint-disable */\n',
    result,
  ).join('')

  await fs.writeFile(`${DIST}/${NAME}.ts`, enrichedResult)
}

main()
