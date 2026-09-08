import { useMemo, useState, type FormEvent } from 'react'
import {
  assetOptions,
  businessOptions,
  CONTACT_EMAIL,
  emptyBrief,
  estimateProject,
  integrationOptions,
  labelOf,
  productOptions,
  ruleOptions,
  type Brief,
} from '../lib/brief'

const STORAGE_KEY = 'configura3d-leads'

function saveLead(brief: Brief) {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Brief[]
  existing.push(brief)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
}

function mailBody(brief: Brief) {
  const estimate = estimateProject(brief)
  return [
    `New configurator brief from ${brief.name} (${brief.company})`,
    `Email: ${brief.email}`,
    `Phone: ${brief.phone || '—'}`,
    '',
    `3D models: ${labelOf(assetOptions, brief.assets)}`,
    `Products: ${labelOf(productOptions, brief.products)}`,
    `Rules: ${labelOf(ruleOptions, brief.rules)}`,
    `Integration: ${labelOf(integrationOptions, brief.integration)}`,
    `Business: ${brief.business.join(', ') || '—'}`,
    '',
    `Indicative package: ${estimate.tier} · ${estimate.range}`,
    '',
    brief.notes,
  ].join('\n')
}

export function LeadForm() {
  const [brief, setBrief] = useState<Brief>(emptyBrief)
  const [sent, setSent] = useState(false)
  const estimate = useMemo(() => estimateProject(brief), [brief])

  function toggleBusiness(id: Brief['business'][number]) {
    setBrief((current) => {
      const has = current.business.includes(id)
      return {
        ...current,
        business: has
          ? current.business.filter((item) => item !== id)
          : [...current.business, id],
      }
    })
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    saveLead(brief)
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Configurator brief — ${brief.company || brief.name}`,
    )}&body=${encodeURIComponent(mailBody(brief))}`
    window.location.href = href
    setSent(true)
  }

  return (
    <section className="section" id="brief">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Lead brief</p>
          <h2>Tell us what you sell. We’ll tell you what’s possible.</h2>
          <p className="lede">
            These five questions are the same ones that drive scope and price.
            Answer them and we’ll come back with a specification conversation —
            not a generic quote.
          </p>
        </div>

        <form className="brief" onSubmit={onSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                required
                value={brief.company}
                onChange={(e) => setBrief({ ...brief, company: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                required
                value={brief.name}
                onChange={(e) => setBrief({ ...brief, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={brief.email}
                onChange={(e) => setBrief({ ...brief, email: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                value={brief.phone}
                onChange={(e) => setBrief({ ...brief, phone: e.target.value })}
              />
            </div>

            <fieldset className="field">
              <legend>Do you already have 3D / CAD files?</legend>
              <div className="choices">
                {assetOptions.map((option) => (
                  <label className="choice" key={option.id}>
                    <input
                      type="radio"
                      name="assets"
                      required
                      checked={brief.assets === option.id}
                      onChange={() => setBrief({ ...brief, assets: option.id })}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="field">
              <legend>How many products?</legend>
              <div className="choices">
                {productOptions.map((option) => (
                  <label className="choice" key={option.id}>
                    <input
                      type="radio"
                      name="products"
                      required
                      checked={brief.products === option.id}
                      onChange={() => setBrief({ ...brief, products: option.id })}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="form-grid">
            <fieldset className="field">
              <legend>Configuration rules</legend>
              <div className="choices">
                {ruleOptions.map((option) => (
                  <label className="choice" key={option.id}>
                    <input
                      type="radio"
                      name="rules"
                      required
                      checked={brief.rules === option.id}
                      onChange={() => setBrief({ ...brief, rules: option.id })}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="field">
              <legend>Website integration</legend>
              <select
                required
                value={brief.integration}
                onChange={(e) =>
                  setBrief({
                    ...brief,
                    integration: e.target.value as Brief['integration'],
                  })
                }
              >
                <option value="">Select a platform</option>
                {integrationOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="field">
              <legend>Business functions</legend>
              <div className="choices">
                {businessOptions.map((option) => (
                  <label className="choice" key={option.id}>
                    <input
                      type="checkbox"
                      checked={brief.business.includes(option.id)}
                      onChange={() => toggleBusiness(option.id)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="field">
              <label htmlFor="notes">Anything we should know</label>
              <textarea
                id="notes"
                rows={3}
                value={brief.notes}
                onChange={(e) => setBrief({ ...brief, notes: e.target.value })}
              />
            </div>

            <div className="estimate-card">
              <p className="eyebrow" style={{ color: '#e8c9a8' }}>
                Indicative range
              </p>
              <h3>
                {estimate.tier} · {estimate.range}
              </h3>
              <p>{estimate.summary}</p>
              <p>
                Final price follows the requirements meeting. Ranges are starting
                points, not a contract.
              </p>
            </div>

            <button className="btn btn-primary" type="submit">
              Send brief and book a conversation
            </button>
            {sent && (
              <p className="success">
                Brief saved. If your mail app opened, send it through. We’ll
                review the answers and propose next steps.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
