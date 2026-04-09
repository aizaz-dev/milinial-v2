import type { GlobalConfig } from 'payload'

const faqFields = [
  {
    name: 'eyebrow',
    type: 'text' as const,
    required: true,
  },
  {
    name: 'title',
    type: 'text' as const,
    required: true,
  },
  {
    name: 'description',
    type: 'textarea' as const,
  },
  {
    name: 'faqs',
    type: 'array' as const,
    minRows: 1,
    fields: [
      {
        name: 'question',
        type: 'text' as const,
        required: true,
      },
      {
        name: 'answer',
        type: 'textarea' as const,
        required: true,
      },
    ],
  },
]

export const BookFAQ: GlobalConfig = {
  slug: 'book-faq',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Patients First Book',
  },
  fields: faqFields,
}

export const ServicesFAQ: GlobalConfig = {
  slug: 'services-faq',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Services Page',
  },
  fields: faqFields,
}

export const HowWeWorkFAQ: GlobalConfig = {
  slug: 'how-we-work-faq',
  access: {
    read: () => true,
  },
  admin: {
    group: 'How We Work Page',
  },
  fields: faqFields,
}
export const ClientsFirstBookFAQ: GlobalConfig = {
  slug: 'clients-first-book-faq',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Clients First Book',
  },
  fields: faqFields,
}