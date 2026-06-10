import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">赖俊彦</span>
        </h1>

        <p className="hero-tagline">
          广东工业大学在读学生，热爱编程与开源技术。
          <br />
          专注于 Web 开发与软件工程，持续学习中。
        </p>

        <div className="hero-chips">
          <span className="hero-chip">广东工业大学</span>
          <span className="hero-chip">软件工程</span>
          <span className="hero-chip">开源爱好者</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
