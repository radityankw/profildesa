import { type SchemaTypeDefinition } from 'sanity'

import artikel from './artikel'
import aparat from './aparat'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    artikel, 
    aparat
  ],
}