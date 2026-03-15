export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'BAi, LLC',
    alternateName: 'Boner Associates Inc.',
    description:
      'Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems since 1935.',
    url: 'https://www.baiaustin.com',
    foundingDate: '1935',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
    },
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '4006 Speedway',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78751',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '4099 McEwen Rd. Suite 560',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        postalCode: '75244',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '4726 Rainbow Run',
        addressLocality: 'Sugar Land',
        addressRegion: 'TX',
        postalCode: '77479',
        addressCountry: 'US',
      },
    ],
    telephone: '512.476.3464',
    email: 'info@baiaustin.com',
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    knowsAbout: [
      'Acoustics Consulting',
      'Sound Reinforcement Systems',
      'Audiovisual Systems Design',
      'Room Acoustics',
      'Noise Control',
      'Sound Isolation',
    ],
    sameAs: [
      'https://www.facebook.com/BAiAcousticsAV/',
      'https://www.instagram.com/bai_acousticsav/',
      'https://twitter.com/BAiAcousticsAV',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
