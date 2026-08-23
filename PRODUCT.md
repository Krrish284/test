# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion + React Three Fiber (user accepted the recommended stack for a production-grade SPA with a real WebGL 3D hero).

## Users

City-based performance runners who train after dark: evening road runners, marathon preparers, and technical runners who shop for gear online and expect brand sites to feel as engineered as the product. Secondary: sneaker-curious athletes browsing drops.

## Product Purpose

Fictional premium running-shoe label (brand invented for this project). The website's job is to make the shoe's night-performance engineering legible and desirable in seconds, drive visitors to explore the flagship silhouette and collection, and convert attention into pre-order/join-list actions.

## Positioning

Shoes engineered for the hours between dusk and dawn — reflective-by-design, grip-first outsoles, and materials tuned for cold city streets. A neighboring generic sneaker site could not truthfully claim "designed around darkness" as an engineering premise.

## Operating Context

Marketing/landing surface only (no backend). Real product photography is sourced from Unsplash CDN (documented attribution); all commercial claims (prices, drop dates, testimonials) are clearly-labeled synthetic demo data to be replaced by the client.

## Capabilities and Constraints

- Single-page marketing site; no server, no real checkout.
- Dark theme is a binding brief constraint.
- 3D must be genuine WebGL (React Three Fiber), with loading indicator and non-WebGL fallback.
- Must degrade gracefully: reduced-motion support, mobile-safe performance budgets.
- Newsletter/waitlist form is front-end simulated (no endpoint exists yet).

## Brand Commitments

- Brand name, voice, and visual world are created fresh this session (see DESIGN.md at finish).
- Theme: dark, technical, precise; no playful toy aesthetics.

## Evidence on Hand

- None proprietary. Photography: hotlinked Unsplash images (verify URLs resolve before ship). No real customer quotes, sales figures, or press exist — none may be fabricated as real.

## Product Principles

1. Darkness is the design premise, not just a color scheme.
2. Show the mechanism: reflectivity, grip, energy return must be demonstrated, not asserted.
3. Performance credibility over hype: precise numbers, restrained copy.
4. One flagship silhouette leads; the collection supports it.
5. Motion earns attention only when it demonstrates how the product behaves.

## Accessibility & Inclusion

WCAG AA contrast targets; `prefers-reduced-motion` honored globally; keyboard-reachable nav/menu/configurator controls; meaningful alt text on every product image; WebGL content never carries information unavailable elsewhere on the page.
