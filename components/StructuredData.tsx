export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Forge Digital Technologies",
        "url": "https://forgedigitaltechnologies.com",
        "logo": "https://forgedigitaltechnologies.com/icon.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "",
            "contactType": "customer service",
            "email": "info@forgedigitaltechnologies.com",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://www.linkedin.com/company/forge-digital",
            "https://twitter.com/forgedigital"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
