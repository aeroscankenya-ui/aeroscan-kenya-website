export const config = {
  company: {
    name: 'Aero Scan Kenya Ltd',
    shortName: 'Aero Scan',
    tagline: "Building Africa's Digital Future",
    logo: '/logo-persistent.png', // Uploaded logo in public folder
  },
  contact: {
    email: 'info@aeroscankenya.co.ke',
    phone: '+254 712 107249',
    address: 'Nairobi, Kenya',
  },
  socials: {
    twitter: 'https://twitter.com/aeroscankenya',
    linkedin: 'https://linkedin.com/company/aeroscankenya',
    facebook: 'https://facebook.com/aeroscankenya',
  },
  products: [
    {
      name: 'AutoCare Companion Kenya',
      slug: 'autocare',
      category: 'Automotive Technology',
      description: 'A digital vehicle companion designed to help vehicle owners manage their vehicles, maintenance, documents, reminders and automotive services.',
      url: '/autocare',
      status: 'active',
      logo: '/logo-autocare.png',
    },
    {
      name: 'AutoCare Garage Pro',
      slug: 'garage-pro',
      category: 'Garage Management SaaS',
      description: 'A professional digital platform that helps garages manage customers, vehicles, technicians, appointments, work orders, inspections, invoices, payments and service history.',
      url: '/garage-pro',
      status: 'active',
      logo: '/logo-garagepro.png',
    },
    {
      name: 'SchoolConnect',
      slug: 'schoolconnect',
      category: 'Education Technology',
      description: 'A secure communication and information-sharing platform connecting schools, parents, guardians, teachers and administrators.',
      url: '/schoolconnect',
      status: 'active',
      logo: '/logo-schoolconnect.png',
    },
    {
      name: 'Digital DocuFolio',
      slug: 'docufolio',
      category: 'Digital Document Management',
      description: 'A digital platform for securely organizing, managing and accessing important documents.',
      url: '/docufolio',
      status: 'active',
      logo: '/logo-docufolio.png',
    },
  ],
  futureCategories: [
    'Fleet Management',
    'Logistics',
    'Agriculture',
    'Restaurant Technology',
    'SME Management',
    'Health Technology',
    'Government Technology',
    'Financial Technology',
  ],
  apps: {
    main: 'app.aeroscankenya.co.ke',
    garage: 'garage.aeroscankenya.co.ke',
    school: 'school.aeroscankenya.co.ke',
    docufolio: 'docufolio.aeroscankenya.co.ke',
  }
};
