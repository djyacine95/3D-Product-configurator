export const CONTACT_EMAIL = 'hello@configura3d.com'

export const assetOptions = [
  { id: 'have', label: 'Yes — CAD, STEP, FBX or GLB is ready' },
  { id: 'partial', label: 'Some files exist, but they need work' },
  { id: 'none', label: 'No — models need to be created' },
] as const

export const productOptions = [
  { id: '1', label: 'One configurable product' },
  { id: '2-10', label: '2–10 products' },
  { id: '11-50', label: '11–50 products' },
  { id: '50+', label: '50+ products or a full catalog' },
] as const

export const ruleOptions = [
  { id: 'colors', label: 'Colors and materials only' },
  { id: 'options', label: 'Options and interchangeable parts' },
  { id: 'dimensions', label: 'Custom dimensions' },
  { id: 'compatibility', label: 'Compatibility rules across components' },
] as const

export const integrationOptions = [
  { id: 'standalone', label: 'Standalone configurator' },
  { id: 'react', label: 'React website' },
  { id: 'shopify', label: 'Shopify' },
  { id: 'woocommerce', label: 'WooCommerce' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'other', label: 'Other / not sure yet' },
] as const

export const businessOptions = [
  { id: 'visualization', label: 'Visualization only' },
  { id: 'pricing', label: 'Live price calculation' },
  { id: 'quotes', label: 'Quote generation' },
  { id: 'pdf', label: 'PDF output' },
  { id: 'accounts', label: 'Customer accounts' },
  { id: 'checkout', label: 'Checkout' },
  { id: 'crm', label: 'CRM / ERP connection' },
] as const

export type AssetId = (typeof assetOptions)[number]['id']
export type ProductId = (typeof productOptions)[number]['id']
export type RuleId = (typeof ruleOptions)[number]['id']
export type IntegrationId = (typeof integrationOptions)[number]['id']
export type BusinessId = (typeof businessOptions)[number]['id']

export type Brief = {
  company: string
  name: string
  email: string
  phone: string
  notes: string
  assets: AssetId | ''
  products: ProductId | ''
  rules: RuleId | ''
  integration: IntegrationId | ''
  business: BusinessId[]
}

export const emptyBrief = (): Brief => ({
  company: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
  assets: '',
  products: '',
  rules: '',
  integration: '',
  business: [],
})

export type Estimate = {
  tier: 'Starter' | 'Professional' | 'Custom'
  range: string
  summary: string
}

export function estimateProject(brief: Brief): Estimate {
  const needsCustom =
    brief.products === '50+' ||
    brief.products === '11-50' ||
    brief.business.includes('crm') ||
    brief.business.includes('checkout') ||
    brief.business.includes('accounts') ||
    (brief.assets === 'none' && brief.rules === 'compatibility')

  const needsPro =
    brief.products === '2-10' ||
    brief.rules === 'dimensions' ||
    brief.rules === 'compatibility' ||
    brief.rules === 'options' ||
    brief.business.includes('pricing') ||
    brief.business.includes('quotes') ||
    brief.business.includes('pdf') ||
    brief.integration === 'shopify' ||
    brief.integration === 'woocommerce' ||
    brief.integration === 'wordpress'

  if (needsCustom) {
    return {
      tier: 'Custom',
      range: 'Quoted after the requirements meeting',
      summary:
        'Catalog size, integrations or accounts push this beyond a packaged build. We specify the work first, then discuss price.',
    }
  }

  if (needsPro) {
    return {
      tier: 'Professional',
      range: '$4,000–$6,000',
      summary:
        'A full configurator with options, a responsive UI, and business functions such as pricing or quotation.',
    }
  }

  return {
    tier: 'Starter',
    range: '$1,500–$2,000',
    summary:
      'A focused first product: 3D viewer, colors and materials, and a handful of simple options.',
  }
}

export function labelOf<T extends { id: string; label: string }>(
  options: readonly T[],
  id: string,
) {
  return options.find((o) => o.id === id)?.label ?? 'Not specified'
}
