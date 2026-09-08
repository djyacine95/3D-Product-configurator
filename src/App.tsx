import { lazy, Suspense, useState } from 'react'
import { LeadForm } from './components/LeadForm'

const ChairDemo = lazy(() =>
  import('./components/ChairDemo').then((module) => ({ default: module.ChairDemo })),
)

const drivers = [
  {
    num: '01',
    title: '3D models',
    body: 'Do you already have CAD, STEP, FBX or GLB files — or do we create everything from drawings and photos?',
  },
  {
    num: '02',
    title: 'Number of products',
    body: 'One configurable chair is a contained project. A hundred pieces of furniture is a catalog system.',
  },
  {
    num: '03',
    title: 'Configuration rules',
    body: 'Simple color changes are fast. Dimensions, components and compatible combinations add real engineering.',
  },
  {
    num: '04',
    title: 'Website integration',
    body: 'Standalone viewer, WordPress, Shopify, a React site, WooCommerce — the embed path changes the work.',
  },
  {
    num: '05',
    title: 'Business functions',
    body: 'Visualization only, or price calculation, quotes, PDF output, accounts, checkout, CRM and ERP?',
  },
]

const weeks = [
  {
    title: 'Week 1 — Requirements',
    body: 'We meet the company. Collect catalogs, CAD/3D files, material samples, prices and configuration rules. Then we write the configurator specification.',
  },
  {
    title: 'Week 2 — 3D preparation',
    body: 'Optimize CAD and models for the browser. Create materials and textures. Set up product components.',
  },
  {
    title: 'Weeks 2–4 — Configurator development',
    body: 'Three.js / WebGL frontend, camera controls, product options, materials, dimensions, configuration logic and UI.',
  },
  {
    title: 'Weeks 4–5 — Business functionality',
    body: 'Pricing, quote forms, PDF and email, website integration, analytics.',
  },
  {
    title: 'Weeks 5–6 — Testing & launch',
    body: 'Desktop and mobile testing, performance, client review, corrections, production deployment.',
  },
]

const retainers = [
  {
    name: 'Maintenance',
    price: '$150–$300 / month',
    body: 'Small fixes, hosting oversight, compatibility checks after launch.',
  },
  {
    name: 'Business',
    price: '$400–$750 / month',
    body: 'Maintenance plus new materials and options, and small product changes.',
  },
  {
    name: 'Full Service',
    price: '$1,000–$2,000+ / month',
    body: 'Continuous product additions, 3D work, development, analytics and improvements.',
  },
]

const process = [
  { n: '01', t: 'Lead & meeting', d: 'Qualify the five cost drivers and see the product in person or on a call.' },
  { n: '02', t: 'Requirements', d: 'Catalogs, files, prices and rules become a written specification.' },
  { n: '03', t: 'Proposal', d: 'Scope, timeline and a price we can stand behind — discussed, not guessed.' },
  { n: '04', t: 'Build & review', d: 'Project management through 3D, UI, business logic and client review.' },
  { n: '05', t: 'Launch', d: 'Performance, mobile, deployment onto the site or store you already run.' },
  { n: '06', t: 'Grow', d: 'Retainers for new SKUs, materials and the commercial layer after go-live.' },
  { n: '07', t: 'Partners', d: 'Specialist on the business and product side; technical partners for heavy development.' },
  { n: '08', t: 'Outcome', d: 'A configurator customers use — not a one-off demo that dies after launch.' },
]

export default function App() {
  const [fabric, setFabric] = useState('#c4a484')

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="logo" href="#top">
            <span>Configura3D</span>
            <small>Studio</small>
          </a>
          <nav className="nav">
            <a href="#scope">Scope</a>
            <a href="#packages">Packages</a>
            <a href="#timeline">Timeline</a>
            <a href="#retainers">After launch</a>
            <a href="#brief">Start a brief</a>
          </nav>
          <a className="btn btn-primary" href="#brief">
            Get a range
          </a>
        </div>
      </header>

      <main id="top">
        <section className="wrap hero">
          <div className="hero-copy">
            <p className="eyebrow">Interactive web solutions</p>
            <h1>Let customers configure the product before they buy it.</h1>
            <p className="role">
              3D Product Configurator / Interactive Web Solutions Specialist
            </p>
            <p className="lede">
              We build browser-based configurators for furniture and manufactured
              goods: real 3D, real options, and the business layer behind them.
              Development is shared with technical partners. You work with someone
              who can explain what is possible — and what actually drives cost.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#brief">
                Start with a product brief
              </a>
              <a className="btn btn-ghost" href="#timeline">
                See a six-week project
              </a>
            </div>
          </div>
          <Suspense fallback={<div className="viewer-card" />}>
            <ChairDemo fabric={fabric} onFabric={setFabric} />
          </Suspense>
        </section>

        <section className="section" id="scope">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">What we need to know</p>
              <h2>Five questions that set the price.</h2>
              <p className="lede">
                Configurator vendors price the same way: product and rule
                complexity, whether 3D assets are ready, and how deep the
                integration goes. We start there — then we discuss numbers.
              </p>
            </div>
            <div className="drivers">
              {drivers.map((driver) => (
                <article className="driver" key={driver.num}>
                  <span className="num">{driver.num}</span>
                  <h3>{driver.title}</h3>
                  <p>{driver.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="packages">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Starting packages</p>
              <h2>A demo to prove it. A professional build to sell with it.</h2>
            </div>
            <div className="packages">
              <article className="package">
                <p className="eyebrow">Demo / Starter</p>
                <p className="price">$1,500–$2,000</p>
                <ul>
                  <li>One product</li>
                  <li>3D viewer in the browser</li>
                  <li>Colors and materials</li>
                  <li>Simple options</li>
                </ul>
                <p className="note">
                  The fastest way to show a team what a configurator feels like
                  on their own SKU.
                </p>
              </article>
              <article className="package featured">
                <p className="eyebrow">Professional</p>
                <p className="price">$4,000–$6,000</p>
                <ul>
                  <li>Full product configurator</li>
                  <li>Dimensions and option logic</li>
                  <li>Pricing or quotation</li>
                  <li>Responsive UI for desktop and mobile</li>
                </ul>
                <p className="note">
                  We still check your requirements first. Catalog size, missing
                  3D files or ERP connections move this into a custom proposal.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="timeline">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">A normal project</p>
              <h2>Six weeks from first meeting to launch.</h2>
              <p className="lede">
                Dates flex with asset readiness. The sequence does not: specify,
                prepare 3D, build the configurator, wire business functions,
                then test and ship.
              </p>
            </div>
            <div className="timeline">
              {weeks.map((week) => (
                <article className="week" key={week.title}>
                  <h3>{week.title}</h3>
                  <p>{week.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="retainers">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">After launch</p>
              <h2>We don’t sell a build and disappear.</h2>
              <p className="lede">
                A configurator earns money when products, materials and prices
                keep moving. That’s a monthly relationship, not a one-off invoice.
              </p>
            </div>
            <div className="retainers">
              {retainers.map((item) => (
                <article className="retainer" key={item.name}>
                  <h3>{item.name}</h3>
                  <p className="price">{item.price}</p>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">How engagement works</p>
              <h2>From first conversation to a product that keeps growing.</h2>
            </div>
            <div className="process">
              {process.map((item) => (
                <article className="step" key={item.n}>
                  <span>{item.n}</span>
                  <h3>{item.t}</h3>
                  <p>{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <LeadForm />
      </main>

      <footer>
        <div className="wrap site-footer">
          <div>
            Configura3D · 3D Product Configurator Specialist
          </div>
          <div>Projects typically 5–6 weeks · Retainers after go-live</div>
        </div>
      </footer>
    </>
  )
}
