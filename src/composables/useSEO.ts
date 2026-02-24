import { onMounted, onUnmounted } from 'vue'

interface SEOOptions {
  title: string
  description: string
  path: string
  image?: string
  type?: string
}

export function useSEO({
  title,
  description,
  path,
  image = '/images/hero-performing.webp',
  type = 'website'
}: SEOOptions) {
  const baseUrl = 'https://kevin-kapinos-magic.vercel.app'
  const fullUrl = `${baseUrl}${path}`
  const fullImageUrl = `${baseUrl}${image}`
  
  let originalTitle = ''
  const addedElements: HTMLElement[] = []
  
  onMounted(() => {
    // Store original title
    originalTitle = document.title
    
    // Set new title
    document.title = title
    
    // Helper function to create/update meta tag
    const setMetaTag = (selector: string, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        if (selector.includes('property=')) {
          const match = selector.match(/property="([^"]*)"/)
          if (match && match[1]) {
            meta.setAttribute('property', match[1])
          }
        } else {
          const match = selector.match(/name="([^"]*)"/)
          if (match && match[1]) {
            meta.setAttribute('name', match[1])
          }
        }
        document.head.appendChild(meta)
        addedElements.push(meta)
      }
      meta.content = content
    }
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
      addedElements.push(canonical)
    }
    canonical.href = fullUrl
    
    // Set meta tags
    setMetaTag('meta[name="description"]', description)
    setMetaTag('meta[property="og:title"]', title)
    setMetaTag('meta[property="og:description"]', description)
    setMetaTag('meta[property="og:type"]', type)
    setMetaTag('meta[property="og:url"]', fullUrl)
    setMetaTag('meta[property="og:image"]', fullImageUrl)
    setMetaTag('meta[name="twitter:card"]', 'summary_large_image')
    setMetaTag('meta[name="twitter:title"]', title)
    setMetaTag('meta[name="twitter:description"]', description)
    setMetaTag('meta[name="twitter:image"]', fullImageUrl)
  })
  
  onUnmounted(() => {
    // Restore original title
    if (originalTitle) {
      document.title = originalTitle
    }
    
    // Remove added elements
    addedElements.forEach(element => {
      if (element.parentNode) {
        element.parentNode.removeChild(element)
      }
    })
  })
}