# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), deployed on Cloudflare Pages. Chosen by the user after a framework comparison (Astro vs Next.js, Hugo, VitePress, Eleventy).

## Users

Primary audiences (confirmed): recruiters and interviewers who want to judge the owner's work and ability, and potential collaborators or clients who want to see what the owner can build and how to get in touch. Peer developers reading technical notes are a natural secondary audience because the blog is technical, but were not selected as a primary target.

## Product Purpose

A personal website for a full-stack, multi-domain developer. It hosts a technical-notes blog and a portfolio of programming projects. GitHub and Email contact links live on the Home and About pages. Success: a recruiter or prospective collaborator quickly understands what the owner builds and can reach them.

## Positioning

我是全端開發者，從人的需求出發，把事情做成系統。 (Confirmed by the owner.) The owner is a full-stack developer writing in Traditional Chinese; the angle is starting from people's needs and turning them into systems. The line appears next to the name on the home page. Revisit its wording once real projects exist.

## Capabilities and Constraints

- Language: Traditional Chinese (zh-Hant) only; no i18n routing.
- Sections for v1: Home, Blog, Portfolio (projects), About. Routes: `/`, `/blog`, `/blog/[slug]`, `/blog/tags/[tag]`, `/projects`, `/projects/[slug]`, `/about`, `/rss.xml`, 404.
- Navigation: Home, Blog, Portfolio, About, plus a dark-mode toggle.
- Blog: technical notes; tags, RSS, code highlighting, article pages.
- Portfolio: programming projects only; each with summary, tech stack, demo/source links.
- Dark mode is wanted for the first version.
- Projects get individual detail pages (summary, tech stack, role, demo and source links).
- Positioning line (confirmed): 我是全端開發者，從人的需求出發，把事情做成系統。

## Brand Commitments

Owner's display name: 廖柏安 (Bart). Home should lead with the owner's work. The owner does not want the site to feel like a resume template, flashy/over-animated, cold "hacker" styled, or empty.

## Evidence on Hand

No articles, no projects, no prior site exist yet. Future work must not fabricate posts, projects, testimonials, employers, or skills; use clearly marked placeholders until the owner supplies real content.

## Product Principles

- Content before features: finished real writing and projects matter more than extra functionality.
- Lead with the work: a visitor should see what the owner builds within the first screen.
- Easy to maintain: content lives in Markdown content collections, so adding a post or project is a file, not a code change.
- Fast and light: mostly static HTML, minimal JavaScript.
- Honest placeholders: anything not yet real is visibly a placeholder.

## Accessibility & Inclusion

Traditional Chinese typography must be comfortable for long reading (generous line height, controlled line length). Respect light and dark color-scheme preferences.
