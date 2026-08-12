import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'artikel',
  title: 'Artikel & Berita',
  type: 'document',
  fields: [
    defineField({
      name: 'judul',
      title: 'Judul Artikel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'judul', maxLength: 96 },
    }),
    defineField({
      name: 'gambarUtama',
      title: 'Gambar Utama',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tanggal',
      title: 'Tanggal Publikasi',
      type: 'datetime',
    }),
    defineField({
      name: 'konten',
      title: 'Konten Artikel',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})