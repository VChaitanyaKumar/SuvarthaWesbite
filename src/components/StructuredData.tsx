interface StructuredDataProps {
  type: 'Organization' | 'Website';
}

export default function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    if (type === 'Organization') {
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Suvartha Ministries UK",
        "description": "Welcome to Suvartha Ministries UK - Spreading the Gospel since 1925",
        "url": "https://suvarthaministries.org.uk",
        "logo": "https://suvarthaministries.org.uk/assets/img/suvartha-logo.svg",
        "foundingDate": "1925",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "GB"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "contact@suvarthaministries.org.uk"
        }
      };
    }

    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Suvartha Ministries UK",
      "url": "https://suvarthaministries.org.uk",
      "description": "Welcome to Suvartha Ministries UK - Spreading the Gospel since 1925"
    };
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
}