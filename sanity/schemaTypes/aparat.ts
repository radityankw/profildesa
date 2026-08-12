import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aparat',
  title: 'Aparatur Desa',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Lengkap',
      type: 'string',
    }),
    defineField({
      name: 'jabatan',
      title: 'Jabatan',
      type: 'string',
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori Jabatan',
      type: 'string',
      options: {
        list: ['Kepala Desa', 'Sekretaris Desa', 'Kasi/Kaur', 'Kepala Dusun', 'Staf'],
      },
    }),
    defineField({
      name: 'foto',
      title: 'Foto Profil',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})