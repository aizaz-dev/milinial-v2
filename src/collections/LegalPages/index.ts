import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from 'payload'

export const LegalPages: CollectionConfig = {
  slug: 'legal-pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title', // e.g. "Impressum"
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle', // e.g. "Alle rechtlichen Angaben und Informationen..."
    },
    {
      name: 'lastUpdate',
      type: 'date',
      label: 'Last Update Date',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
      label: 'Content',
    },
    slugField(),
  ],
  timestamps: true,
}
