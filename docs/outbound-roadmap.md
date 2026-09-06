# Shefing outbound roadmap

Goal: when a founder, ISV executive or enterprise buyer asks Google, Bing, ChatGPT, Perplexity or Claude for an AI transformation partner, or for how to run agentic development under the EU AI Act, Shefing is on the shortlist and its pages are the cited source.

Target queries:

| Cluster | Queries |
|---|---|
| Brand | Shefing, Shefing iSDLC, AiTruism |
| Category | AI transformation agency, AI consulting Israel, AI development agency Jerusalem |
| Offer | AI MVP development, RAG development, MCP server development, agentic workflow development |
| Expertise | AI SDLC, agentic software development lifecycle, EU AI Act software development, LLM gateway guardrails, agentic AI control plane |

## Phase 0, this week: ship what is already built

Done when shefing.com serves the new pages, sitemap, robots and llms files, and both forms deliver.

- [ ] Review the diff and push master. Watch the GitHub Actions run for the jekyll-sitemap gem install.
- [ ] Verify live: `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt`. Check calculator icons on questions 5 to 8 and 12 to 19.
- [ ] Submit one contact form and one calculator quotation. Confirm both arrive.
- [ ] Delete the 2017 demo posts (`_posts`) and demo portfolio (`_works`). Keep the blog layout for Phase 3.
- [ ] Add a 1200 × 630 share image and replace `sublogo.png` in the Open Graph and Twitter tags.

## Phase 1, week 1: register with the indexes

Done when Search Console shows 4 indexed pages and Bing shows a first crawl.

- [ ] Google Search Console: verify the domain by DNS TXT, submit the sitemap, request indexing for the four URLs.
- [ ] Bing Webmaster Tools: import from Search Console, submit the sitemap, enable IndexNow. Bing feeds ChatGPT search and Copilot.
- [ ] Google Business Profile for WeWork Jerusalem, King George 20, using the llms.txt description verbatim.
- [ ] Confirm GA4 fires in production; add a channel group for AI referrals (chatgpt.com, perplexity.ai, claude.ai, copilot.microsoft.com, gemini.google.com).
- [ ] Run home, iSDLC and AiTruism through Google's Rich Results Test and the Schema.org validator.

## Phase 2, weeks 2 to 3: make the entity consistent everywhere

Done when a search for "Shefing AI" returns the site, LinkedIn and GitHub on page one.

- [ ] Use the llms.txt paragraph as the canonical description on LinkedIn, Crunchbase, Clutch, GoodFirms, DesignRush, Startup Nation Central. Same name, tagline, address and phone.
- [ ] Publish iSDLC and AiTruism as public GitHub repositories under a Shefing organization. README wording matches the pages, links back to shefing.com, each repo ships its own `llms.txt`.
- [ ] Add `sameAs` links (LinkedIn, GitHub, Crunchbase, Clutch) to the Organization schema in `_includes/seo.html`.
- [ ] Founder LinkedIn headline names Shefing and iSDLC; About repeats "human-led, agent-driven".

## Phase 3, months 1 to 2: publish content that earns citations

Done when each article is indexed and shows impressions in Search Console for its long-tail query.

- [ ] "iSDLC: Agile reworked for the agent era" (cluster: AI SDLC), with an FAQ marked up as FAQPage.
- [ ] "Where to enforce AI guardrails: gateway, sidecar or tool layer" (cluster: agentic AI control plane), scoring matrix as a table.
- [ ] "The EU AI Act for software teams: Articles 9, 11, 12 and 14 in a delivery process" (cluster: EU AI Act software development).
- [ ] "How much does an AI MVP cost?" (cluster: AI MVP development), linking to the calculator.
- [ ] Two anonymized case studies with numbers, added to the services section.
- [ ] Syndicate to LinkedIn articles and Medium with canonical links to shefing.com. Never publish elsewhere first.

## Phase 4, months 2 to 3: show up inside the assistants

Done when Shefing is mentioned in at least two of five assistants for the brand prompt and one category prompt.

- [ ] Baseline: ask ChatGPT with search, Perplexity, Claude, Gemini and Copilot the six prompts below. Record who is named and which page is cited. Repeat monthly.
- [ ] Launch the iSDLC plugin: Show HN, r/LLMDevs, r/ClaudeAI, the Claude Code community.
- [ ] Launch the calculator on Product Hunt and LinkedIn with "How much does an AI MVP cost?" as the hook.
- [ ] One substantive answer a week on Reddit, Hacker News or LinkedIn threads about AI governance, MCP or the EU AI Act.
- [ ] Add "update llms.txt and llms-full.txt" to the definition of done for any page change.

Monthly prompts:

1. Which AI transformation agencies operate in Israel?
2. Who can build an MVP with RAG and MCP servers on a fixed budget?
3. What is an agentic AI control plane and who offers one?
4. How do I comply with the EU AI Act in a software development process?
5. Is there an SDLC designed for AI coding agents with human accountability?
6. What is Shefing iSDLC?

## Phase 5, monthly: measure and iterate

Done when the sheet has three consecutive months and one decision was taken from it.

| Source | Record | Act when |
|---|---|---|
| Search Console | Impressions, clicks, position per cluster query | Position 5 to 15 with low click rate: rewrite title and description |
| Bing Webmaster | Crawled and indexed pages, top queries | Not indexed after 30 days: resubmit, check robots |
| GA4 | Sessions from the AI referral channel, form submissions | An assistant sends traffic: strengthen the cited page |
| Assistant check | The six prompts, who is named, which page is cited | Absent two months on a prompt: publish content for that cluster |
| Backlinks | New referring domains | A directory or article links: make its description match |
