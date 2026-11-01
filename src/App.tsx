import { useState, type ReactNode } from 'react'

type IconName =
  | 'arrow'
  | 'bill'
  | 'book'
  | 'chart'
  | 'check'
  | 'chevron'
  | 'close'
  | 'food'
  | 'goal'
  | 'instagram'
  | 'linkedin'
  | 'menu'
  | 'receipt'
  | 'shield'
  | 'shopping'
  | 'spark'
  | 'transport'
  | 'wallet'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    bill: (
      <>
        <path d="M7 2h10v20l-2.5-1.6L12 22l-2.5-1.6L7 22V2Z" />
        <path d="M10 7h4M10 11h4M10 15h2" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V2" />
        <path d="M2 19h22" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    food: (
      <>
        <path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10" />
        <path d="M17 3c-2 2-3 5-3 8h6c0-3-1-6-3-8ZM17 11v10" />
      </>
    ),
    goal: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    linkedin: (
      <>
        <path d="M6 9v10M6 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    receipt: (
      <>
        <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    shopping: (
      <>
        <path d="M6 8h12l1 13H5L6 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3Z" />
        <path d="m19 15 .6 2.4L22 18l-2.4.6L19 21l-.6-2.4L16 18l2.4-.6L19 15Z" />
      </>
    ),
    transport: (
      <>
        <path d="M5 16V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v9" />
        <path d="M4 13h16M7 18h.01M17 18h.01M6 21v-2h12v2M8 8h8" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H19v16H6.5A2.5 2.5 0 0 1 4 17.5v-11Z" />
        <path d="M4 8h15M15 12h6v4h-6a2 2 0 0 1 0-4Z" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        {paths[name]}
      </g>
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#home" aria-label="FinTrack home">
      <span className="logo__mark">
        <svg aria-hidden="true" viewBox="0 0 28 28">
          <path d="M6 8.5h15.5v13H8.8A4.8 4.8 0 0 1 4 16.7V7.8A3.8 3.8 0 0 1 7.8 4H19" />
          <path d="M17 12h7v6h-7a3 3 0 1 1 0-6Z" />
          <path d="M11.5 14.5c0-3.4 2.3-6 6.6-6.7-.1 4.3-2.3 6.5-6.6 6.7Z" className="logo__leaf" />
        </svg>
      </span>
      <span>FinTrack</span>
    </a>
  )
}

function Button({
  children,
  href,
  variant = 'primary',
  onClick,
}: {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'light'
  onClick?: () => void
}) {
  const className = `button button--${variant}`
  return href ? (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

function NavLink({ children, href, active = false }: { children: ReactNode; href: string; active?: boolean }) {
  return (
    <a className={`nav-link ${active ? 'nav-link--active' : ''}`} href={href}>
      {children}
    </a>
  )
}

const transactions = [
  { icon: 'food' as IconName, name: 'Food & Dining', detail: 'Today, 1:24 PM', amount: '−₹850', tone: 'orange' },
  { icon: 'transport' as IconName, name: 'Metro recharge', detail: 'Yesterday', amount: '−₹300', tone: 'blue' },
  { icon: 'shopping' as IconName, name: 'Online shopping', detail: '12 Jun, 6:40 PM', amount: '−₹1,240', tone: 'pink' },
]

function MiniChart() {
  return (
    <div className="mini-chart" aria-label="Spending trend chart">
      <div className="mini-chart__labels">
        <span>₹5k</span>
        <span>₹2.5k</span>
        <span>₹0</span>
      </div>
      <div className="mini-chart__plot">
        <span className="gridline gridline--top" />
        <span className="gridline gridline--middle" />
        <span className="gridline gridline--bottom" />
        <svg preserveAspectRatio="none" viewBox="0 0 360 110">
          <defs>
            <linearGradient id="mini-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#16a36a" stopOpacity=".22" />
              <stop offset="100%" stopColor="#16a36a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 82 C32 74,44 54,75 62 S125 87,150 52 S196 28,220 48 S265 80,292 39 S332 28,360 17 V110 H0Z" fill="url(#mini-fill)" />
          <path d="M0 82 C32 74,44 54,75 62 S125 87,150 52 S196 28,220 48 S265 80,292 39 S332 28,360 17" fill="none" stroke="#16a36a" strokeLinecap="round" strokeWidth="3" />
          <circle cx="292" cy="39" fill="#fff" r="4" stroke="#16a36a" strokeWidth="3" />
        </svg>
        <div className="mini-chart__days">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>
    </div>
  )
}

function HeroDashboard() {
  return (
    <div className="hero-dashboard-wrap">
      <div className="dashboard dashboard--hero">
        <div className="dashboard__topbar">
          <div>
            <span className="eyebrow">Overview</span>
            <strong>Good morning, Riya</strong>
          </div>
          <div className="avatar">RS</div>
        </div>
        <div className="balance-card">
          <div>
            <span>Total balance</span>
            <strong>₹45,850</strong>
            <small><b>+8.4%</b> from last month</small>
          </div>
          <span className="balance-card__icon"><Icon name="wallet" size={22} /></span>
        </div>
        <div className="stat-grid">
          <div className="stat-card">
            <span className="stat-card__dot stat-card__dot--green" />
            <span>Monthly income</span>
            <strong>₹25,000</strong>
          </div>
          <div className="stat-card">
            <span className="stat-card__dot stat-card__dot--navy" />
            <span>Monthly expenses</span>
            <strong>₹12,450</strong>
          </div>
        </div>
        <div className="chart-card">
          <div className="card-heading">
            <strong>Spending overview</strong>
            <span>This week <Icon name="chevron" size={13} /></span>
          </div>
          <MiniChart />
        </div>
        <div className="goal-card">
          <div className="goal-card__top">
            <span className="goal-card__icon"><Icon name="goal" size={18} /></span>
            <div><strong>New laptop</strong><span>Savings goal</span></div>
            <b>68%</b>
          </div>
          <div className="progress"><span style={{ width: '68%' }} /></div>
          <div className="goal-card__values"><span>₹34,000 saved</span><span>₹50,000 goal</span></div>
        </div>
        <div className="transaction-card">
          <div className="card-heading">
            <strong>Recent transactions</strong>
            <span>View all <Icon name="chevron" size={13} /></span>
          </div>
          {transactions.map((item) => (
            <div className="transaction" key={item.name}>
              <span className={`transaction__icon transaction__icon--${item.tone}`}><Icon name={item.icon} size={16} /></span>
              <span><strong>{item.name}</strong><small>{item.detail}</small></span>
              <b>{item.amount}</b>
            </div>
          ))}
        </div>
      </div>
      <div className="floating-pill floating-pill--top"><Icon name="shield" size={18} /><span><b>100% secure</b><small>Your data is protected</small></span></div>
      <div className="floating-pill floating-pill--bottom"><span className="floating-pill__spark"><Icon name="spark" size={18} /></span><span><b>Great progress!</b><small>You saved ₹3,250 this month</small></span></div>
    </div>
  )
}

const features: { icon: IconName; title: string; description: string }[] = [
  { icon: 'receipt', title: 'Smart Expense Tracking', description: 'Track daily spending and understand exactly where your money goes.' },
  { icon: 'chart', title: 'Easy Budget Planning', description: 'Set monthly budgets, monitor spending, and avoid unnecessary expenses.' },
  { icon: 'goal', title: 'Savings Goals', description: 'Set savings targets and track your progress toward important goals.' },
]

function FeatureCard({ icon, title, description }: (typeof features)[number]) {
  return (
    <article className="feature-card">
      <span className="feature-card__icon"><Icon name={icon} size={26} /></span>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#dashboard">Learn more <Icon name="arrow" size={16} /></a>
    </article>
  )
}

function LargeDashboard() {
  const bars = [
    ['Jan', 62, 42], ['Feb', 70, 48], ['Mar', 58, 35], ['Apr', 78, 52], ['May', 72, 43], ['Jun', 88, 57],
  ]
  const categories = [
    ['Food', '₹4,250', '35%', 'green'],
    ['Transport', '₹2,800', '23%', 'blue'],
    ['Shopping', '₹2,150', '18%', 'orange'],
    ['Education', '₹1,800', '15%', 'purple'],
    ['Bills', '₹1,100', '9%', 'yellow'],
  ]
  return (
    <div className="large-dashboard">
      <aside className="dashboard-sidebar">
        <Logo />
        <div className="dashboard-sidebar__nav">
          <span className="active"><Icon name="chart" size={17} />Overview</span>
          <span><Icon name="receipt" size={17} />Transactions</span>
          <span><Icon name="wallet" size={17} />Budgets</span>
          <span><Icon name="goal" size={17} />Goals</span>
        </div>
        <div className="sidebar-tip">
          <span><Icon name="spark" size={18} /></span>
          <strong>Weekly insight</strong>
          <p>You spent 12% less on food this week.</p>
        </div>
      </aside>
      <div className="dashboard-main">
        <div className="large-dashboard__header">
          <div><span className="eyebrow">Financial overview</span><strong>Welcome back, Riya</strong></div>
          <span className="avatar">RS</span>
        </div>
        <div className="large-dashboard__stats">
          <div><span>Total balance</span><strong>₹45,850</strong><small className="positive">↗ 8.4% this month</small></div>
          <div><span>Income</span><strong>₹25,000</strong><small>June 2026</small></div>
          <div><span>Expenses</span><strong>₹12,450</strong><small>49.8% of income</small></div>
          <div><span>Saved</span><strong>₹12,550</strong><small className="positive">On track</small></div>
        </div>
        <div className="large-dashboard__grid">
          <div className="panel panel--cashflow">
            <div className="card-heading">
              <div><strong>Income vs expenses</strong><small>Monthly cash flow</small></div>
              <div className="legend"><span><i className="green" />Income</span><span><i className="navy" />Expenses</span></div>
            </div>
            <div className="bar-chart">
              {bars.map(([month, income, expense]) => (
                <div className="bar-chart__group" key={month}>
                  <div><i className="bar bar--income" style={{ height: `${income}%` }} /><i className="bar bar--expense" style={{ height: `${expense}%` }} /></div>
                  <span>{month}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel panel--category">
            <div className="card-heading"><strong>Spending by category</strong><span>June</span></div>
            <div className="category-content">
              <div className="donut"><div><strong>₹12.4k</strong><span>Total</span></div></div>
              <div className="category-list">
                {categories.map(([name, amount, percent, color]) => (
                  <div key={name}><span><i className={color} />{name}</span><b>{amount}</b><small>{percent}</small></div>
                ))}
              </div>
            </div>
          </div>
          <div className="panel panel--transactions">
            <div className="card-heading"><strong>Recent transactions</strong><span>View all <Icon name="chevron" size={13} /></span></div>
            {transactions.map((item) => (
              <div className="transaction" key={item.name}>
                <span className={`transaction__icon transaction__icon--${item.tone}`}><Icon name={item.icon} size={16} /></span>
                <span><strong>{item.name}</strong><small>{item.detail}</small></span>
                <b>{item.amount}</b>
              </div>
            ))}
          </div>
          <div className="panel panel--savings">
            <div className="card-heading"><strong>Savings goals</strong><span>2 active</span></div>
            <div className="saving-row">
              <span className="saving-row__icon"><Icon name="book" size={17} /></span>
              <div><span><strong>New laptop</strong><b>68%</b></span><div className="progress"><i style={{ width: '68%' }} /></div><small>₹34,000 of ₹50,000</small></div>
            </div>
            <div className="saving-row">
              <span className="saving-row__icon saving-row__icon--blue"><Icon name="transport" size={17} /></span>
              <div><span><strong>Goa trip</strong><b>42%</b></span><div className="progress progress--blue"><i style={{ width: '42%' }} /></div><small>₹8,400 of ₹20,000</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
            <NavLink href="#home" active>Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#about">About</NavLink>
            <div className="mobile-nav-actions">
              <NavLink href="#login">Log In</NavLink>
              <Button href="#cta">Get Started Free</Button>
            </div>
          </nav>
          <div className="header-actions">
            <NavLink href="#login">Log In</NavLink>
            <Button href="#cta">Get Started Free</Button>
          </div>
          <button
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__glow hero__glow--one" />
          <div className="hero__glow hero__glow--two" />
          <div className="container hero__inner">
            <div className="hero__content">
              <div className="kicker"><span><Icon name="spark" size={14} /></span>Smarter money starts here</div>
              <h1>Take Control of <span>Your Money.</span></h1>
              <p>Track your expenses, build smarter budgets, and reach your savings goals with FinTrack — your personal finance companion.</p>
              <div className="hero__actions">
                <Button href="#cta">Get Started Free <Icon name="arrow" size={17} /></Button>
                <Button href="#features" variant="secondary">Explore Features</Button>
              </div>
              <div className="trust-message">
                <span><Icon name="check" size={14} /></span>
                Simple money management for everyday life.
              </div>
              <div className="hero__proof">
                <div className="avatar-stack"><i>AK</i><i>RS</i><i>NM</i><i>+2k</i></div>
                <div><span>★★★★★</span><small>Loved by 2,000+ smart savers</small></div>
              </div>
            </div>
            <HeroDashboard />
          </div>
        </section>

        <section className="feature-section section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">Made for real life</span>
              <h2>Everything You Need to<br />Manage Your Money.</h2>
              <p>Simple, practical tools that make managing your finances feel effortless.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
            </div>
          </div>
        </section>

        <section className="dashboard-section section" id="dashboard">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">One simple dashboard</span>
              <h2>Your Financial Life,<br />All in One Place.</h2>
              <p>See the full picture at a glance — without complicated spreadsheets.</p>
            </div>
            <LargeDashboard />
          </div>
        </section>

        <section className="steps-section section" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">How it works</span>
              <h2>Start Managing Your Money<br />in Three Simple Steps.</h2>
            </div>
            <div className="steps-grid">
              <div className="step-connector" />
              {[
                ['01', 'receipt' as IconName, 'Connect or Add Your Expenses', 'Enter your transactions or add financial records manually.'],
                ['02', 'wallet' as IconName, 'Set Your Budget', 'Choose spending limits and define your savings goals.'],
                ['03', 'chart' as IconName, 'Track Your Progress', 'Review your spending patterns and monitor your financial goals.'],
              ].map(([number, icon, title, text]) => (
                <article className="step-card" key={number}>
                  <span className="step-card__number">{number}</span>
                  <span className="step-card__icon"><Icon name={icon as IconName} size={23} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section section" id="about">
          <div className="container benefits-grid">
            <div className="benefits-visual">
              <div className="habit-card">
                <div className="habit-card__header">
                  <span><Icon name="spark" size={19} /></span>
                  <div><strong>Monthly money health</strong><small>June overview</small></div>
                  <b>Great</b>
                </div>
                <div className="score-ring"><div><strong>82</strong><span>score</span></div></div>
                <div className="habit-bars">
                  <div><span>Budget control</span><b>90%</b><i><em style={{ width: '90%' }} /></i></div>
                  <div><span>Savings habit</span><b>76%</b><i><em style={{ width: '76%' }} /></i></div>
                  <div><span>Spending balance</span><b>81%</b><i><em style={{ width: '81%' }} /></i></div>
                </div>
              </div>
              <span className="benefits-badge"><Icon name="check" size={16} />Goal on track</span>
            </div>
            <div className="benefits-content">
              <span className="section-label">Small habits. Big difference.</span>
              <h2>Build Better<br />Money Habits.</h2>
              <p>FinTrack turns everyday decisions into lasting financial confidence — one smart choice at a time.</p>
              <ul>
                <li><span><Icon name="check" size={16} /></span><div><strong>Understand your spending habits</strong><small>See where your money goes and spot patterns easily.</small></div></li>
                <li><span><Icon name="check" size={16} /></span><div><strong>Plan your monthly expenses</strong><small>Stay ahead of bills and spend with intention.</small></div></li>
                <li><span><Icon name="check" size={16} /></span><div><strong>Save consistently for your future</strong><small>Build momentum toward the goals that matter.</small></div></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta-section" id="cta">
          <div className="container">
            <div className="cta-card">
              <div className="cta-card__pattern" />
              <div className="cta-card__content">
                <span className="cta-card__label"><Icon name="spark" size={14} />Start your journey</span>
                <h2>Your Money. Your Goals.<br />Your Future.</h2>
                <p>Start building healthier financial habits with FinTrack today.</p>
                <Button href="#home" variant="light">Create Your Free Account <Icon name="arrow" size={17} /></Button>
                <small>No credit card required · Free forever plan</small>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Logo light />
              <p>Make every rupee count.</p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="mailto:hello@fintrack.app">Contact</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
            <div className="social-links">
              <a href="#linkedin" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
              <a href="#instagram" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 FinTrack. All rights reserved.</span>
            <span>Made for a financially confident future.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
