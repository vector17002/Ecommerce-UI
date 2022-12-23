import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanitycart',

  projectId: 'ulzn5nbj',
  dataset: 'production',
  basePath: '/production',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

})
