"use client";

import Link from "next/link";
import { useDemoAuth } from "@/state/useDemoAuth";

export function Header() {
  const { user } = useDemoAuth();

  const displayName = user?.name || "gbrocks2005";
  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <header className="site-header">
      <div className="shell header-inner">
        {/* Left: Distinctive Editorial Brand Logo */}
        <div className="brand-wrapper">
          <Link className="brand-logo" href="/" aria-label="ClothMarket Home">
            <span className="logo-icon" aria-hidden>✦</span>
            <span className="logo-text">
              Cloth<span className="logo-accent">Market</span>
            </span>
            <span className="logo-edition">DEAL DISCOVERY</span>
          </Link>
        </div>

        {/* Right: Clean Horizontal Account Area */}
        <div className="header-right">
          <Link
            href={user ? "/account" : "/login"}
            className="account-pill"
            aria-label={`Account for ${displayName}`}
          >
            <span className="account-avatar" aria-hidden>
              {avatarLetter}
            </span>
            <span className="account-username">
              {displayName}
            </span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(250, 247, 242, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
          height: 68px;
          display: flex;
          align-items: center;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        /* Brand Wordmark Styling */
        .brand-wrapper {
          display: flex;
          align-items: center;
        }

        .brand-logo {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: opacity 0.15s ease;
        }

        .brand-logo:hover {
          opacity: 0.9;
        }

        .logo-icon {
          color: var(--coral);
          font-size: 1rem;
          line-height: 1;
        }

        .logo-text {
          font-family: var(--serif);
          font-size: clamp(1.5rem, 2.4vw, 1.95rem);
          font-weight: 700;
          letter-spacing: -0.045em;
          color: var(--pine);
          line-height: 1;
        }

        .logo-accent {
          color: var(--coral);
          font-style: italic;
          font-weight: 500;
          letter-spacing: -0.055em;
          margin-left: 1px;
        }

        .logo-edition {
          font-family: var(--sans);
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: var(--muted);
          background: var(--card-subtle);
          border: 1px solid var(--line);
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 6px;
          text-transform: uppercase;
        }

        /* Top Right: Horizontal Account Area */
        .header-right {
          display: flex;
          align-items: center;
        }

        .account-pill {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding: 6px 14px 6px 7px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid var(--line);
          box-shadow: 0 1px 4px rgba(27, 61, 48, 0.04);
          transition: all 0.15s ease;
          text-decoration: none;
        }

        .account-pill:hover {
          border-color: var(--pine);
          background: var(--pine-soft);
          transform: translateY(-1px);
        }

        .account-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--pine);
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 800;
          line-height: 1;
          flex-shrink: 0;
        }

        .account-username {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.01em;
          line-height: 1;
          white-space: nowrap;
        }

        @media (max-width: 600px) {
          .site-header {
            height: 60px;
          }
          .logo-edition {
            display: none;
          }
          .account-pill {
            padding: 4px 10px 4px 5px;
            gap: 6px;
          }
          .account-avatar {
            width: 26px;
            height: 26px;
            font-size: 0.75rem;
          }
          .account-username {
            font-size: 0.78rem;
            max-width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      `}</style>
    </header>
  );
}
