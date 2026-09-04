import { useEffect } from 'react';
import { personalInfo, projects } from '../data/portfolioData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = `${personalInfo.fullName} | Full Stack & Java Backend Developer`,
  description = 'Full Stack Developer specializing in Java Spring Boot, Python Django, and React. Building scalable backend architectures, REST APIs, and modern web applications.',
  keywords = 'Jhasaketan Sa, Full Stack Developer, Java Developer, Spring Boot Developer, React Developer, Backend Developer, Python Django Developer, RESTful APIs, Software Solutions, Bhubaneswar, Odisha, India',
  image = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200&h=630',
  url = 'https://ais-pre-aq6hgetxwbp7e5l5p2vu2b-534870587795.asia-east1.run.app'
}: SEOProps) {

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to get or create a meta tag
    const setMetaTag = (attrName: string, attrValue: string, content: string, isProperty = false) => {
      const selector = isProperty 
        ? `meta[property="${attrValue}"]` 
        : `meta[name="${attrValue}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', attrValue);
        } else {
          element.setAttribute('name', attrValue);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Set Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', personalInfo.fullName);

    // 3. Set Open Graph (OG) Meta Tags
    setMetaTag('property', 'og:title', title, true);
    setMetaTag('property', 'og:description', description, true);
    setMetaTag('property', 'og:type', 'profile', true);
    setMetaTag('property', 'og:url', url, true);
    setMetaTag('property', 'og:image', image, true);
    setMetaTag('property', 'og:site_name', `${personalInfo.fullName} Portfolio`, true);
    setMetaTag('property', 'og:locale', 'en_US', true);

    // 4. Set Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);
    if (personalInfo.twitter && personalInfo.twitter !== '#') {
      setMetaTag('name', 'twitter:creator', personalInfo.twitter);
    }

    // 5. Build and Inject JSON-LD Structured Data
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': [
        // Person Schema
        {
          '@type': 'Person',
          '@id': `${url}/#person`,
          'name': personalInfo.fullName,
          'givenName': personalInfo.name,
          'familyName': 'Sa',
          'jobTitle': 'Full Stack Developer & Backend Engineer',
          'description': personalInfo.aboutText,
          'knowsAbout': [
            'Full Stack Development',
            'Java',
            'Spring Boot',
            'Python',
            'Django',
            'Django REST Framework',
            'React',
            'TypeScript',
            'RESTful APIs',
            'Microservices',
            'PostgreSQL',
            'MySQL',
            'Machine Learning'
          ],
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Bhubaneswar',
            'addressRegion': 'Odisha',
            'addressCountry': 'India'
          },
          'email': personalInfo.email,
          'sameAs': [
            personalInfo.linkedin,
            personalInfo.github,
            personalInfo.instagram
          ].filter(link => link && link !== '#')
        },
        // Website Schema
        {
          '@type': 'WebSite',
          '@id': `${url}/#website`,
          'url': url,
          'name': `${personalInfo.fullName} - Full Stack & Java Developer Portfolio`,
          'description': personalInfo.headline,
          'publisher': {
            '@id': `${url}/#person`
          }
        },
        // WebPage Schema
        {
          '@type': 'WebPage',
          '@id': `${url}/#webpage`,
          'url': url,
          'name': title,
          'about': {
            '@id': `${url}/#person`
          },
          'description': description,
          'isPartOf': {
            '@id': `${url}/#website`
          }
        },
        // ItemList of CreativeWorks (Projects Showcase)
        {
          '@type': 'ItemList',
          'name': 'Featured Projects',
          'itemListElement': projects.map((proj, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
              '@type': 'CreativeWork',
              'name': proj.title,
              'description': proj.description,
              'image': proj.image,
              'url': proj.liveUrl && proj.liveUrl !== '#' ? proj.liveUrl : `${url}/#projects`,
              'creator': {
                '@id': `${url}/#person`
              },
              'keywords': proj.tags.join(', ')
            }
          }))
        }
      ]
    };

    // Inject standard JSON-LD script block
    let scriptElement = document.getElementById('json-ld-seo') as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'json-ld-seo';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.text = JSON.stringify(jsonLdData, null, 2);
  }, [title, description, keywords, image, url]);

  return null;
}
