import type { GlobalConfig } from 'payload'

export const BookBenefits: GlobalConfig = {
  slug: 'book-benefits',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Patients First Book',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Das können Sie daraus mitnehmen',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Was Sie nach dem Lesen besser können',
    },
    {
      name: 'benefits',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Megaphone', value: 'Megaphone' },
            { label: 'Zap', value: 'Zap' },
            { label: 'Shield Check', value: 'ShieldCheck' },
            { label: 'Network', value: 'Network' },
            { label: 'Search', value: 'Search' },
            { label: 'Hand Coins', value: 'HandCoins' },
          ]
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        }
      ]
    }
  ]
}
export const ClientsFirstBookBenefits: GlobalConfig = {
  slug: 'clients-first-book-benefits',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Clients First Book',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Das können Sie daraus mitnehmen',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Was Sie nach dem Lesen besser können',
    },
    {
      name: 'benefits',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Megaphone', value: 'Megaphone' },
            { label: 'Zap', value: 'Zap' },
            { label: 'Shield Check', value: 'ShieldCheck' },
            { label: 'Network', value: 'Network' },
            { label: 'Search', value: 'Search' },
            { label: 'Hand Coins', value: 'HandCoins' },
          ]
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        }
      ]
    }
  ]
}