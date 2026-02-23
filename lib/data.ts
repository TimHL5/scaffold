import { Post, ChecklistItem } from './types';

export const SEED_POSTS: Post[] = [
  {
    id: 1, week: 0, day: 'Sat Feb 22', scheduled_date: '2026-02-22', platform: 'LinkedIn', author: 'Tim', type: 'Teaser', title: 'The Teaser',
    content: `I've spent 3 years helping 500+ students across 7 countries turn ideas into real products.

The #1 thing I've learned?

The idea doesn't matter. The frustration does.

Every successful product I've seen built started the same way: someone was genuinely annoyed about something.

Not "I think there's a market for X."

Just... "this is broken and it pisses me off."

ChatGPT can write your code. Cursor can build your app. Replit can deploy it in minutes.

But none of them can tell you what's actually worth building.

We've been working on something for 3 years that can.

More next week.

#buildinpublic #startups #AI`,
    is_posted: false, sort_order: 1, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 2, week: 0, day: 'Sun Feb 23', scheduled_date: '2026-02-23', platform: 'LinkedIn', author: 'Dylan', type: 'Co-Founder Tease', title: 'The Co-Founder Tease',
    content: `I've built 3 companies. The first two failed.

Not because the product was bad. Not because we couldn't code. Not because we ran out of money.

They failed because we built the wrong thing.

We solved problems nobody actually had. We listened to ChatGPT telling us our ideas were "promising." We skipped the hardest part: figuring out if anyone actually cared.

3 years ago, Tim and I decided to fix this. Not just for us — for everyone.

500+ people across 7 countries later, we think we cracked it.

Something's coming next week. It starts with one question.

#entrepreneurship #startups #AI`,
    is_posted: false, sort_order: 2, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 3, week: 0, day: 'Mon Feb 24', scheduled_date: '2026-02-24', platform: 'LinkedIn', author: 'Scafold', type: 'Manifesto', title: 'The Manifesto',
    content: `AI can build anything. It can't tell you what's worth building.

$45 billion has been invested in tools that help you build faster. Code faster. Design faster. Deploy faster.

$0 has been invested in tools that help you figure out what to build in the first place.

That's about to change.

We're Scafold. And we have one question for you.

Coming this week.

scafold.ai`,
    is_posted: false, sort_order: 3, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 4, week: 0, day: 'Mon Feb 24', scheduled_date: '2026-02-24', platform: 'Instagram', author: 'Scafold', type: 'Visual + Caption', title: 'The Manifesto Visual',
    visual: 'Dark background, "AI can build anything." in white, "It can\'t tell you what\'s worth building." in vermillion. Scafold logo.',
    content: `AI can build anything. It can't tell you what's worth building. $45B invested in build tools. $0 in "what to build" tools. That changes this week. #WhatBugsYou #scafold #AI #startup`,
    is_posted: false, sort_order: 4, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 5, week: 0, day: 'Tue Feb 25', scheduled_date: '2026-02-25', platform: 'LinkedIn', author: 'Tim', type: 'Problem Hook', title: 'The Problem',
    content: `I helped a student build a "smart grocery list" app last year. He spent 3 months coding it. Beautiful UI. AI-powered suggestions. The whole thing.

He launched it to zero downloads.

Why? Because he never asked a single person if they needed it. He asked ChatGPT. ChatGPT said "great idea, here's a market analysis." He believed it.

This happens every single day. Smart people. Real skills. Building things nobody wants.

The problem isn't building. AI solved that. The problem is knowing what to build.

Nobody's solved that. Until now.

Tomorrow I'll show you what we've been working on.`,
    is_posted: false, sort_order: 5, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 6, week: 0, day: 'Wed Feb 26', scheduled_date: '2026-02-26', platform: 'LinkedIn', author: 'Scafold', type: 'Countdown', title: 'The Countdown',
    content: `Here's a question nobody's asking you:

What bugs you?

Not "what's your startup idea." Not "what market do you want to disrupt."

Just: what actually frustrates you about your daily life?

Your answer might be worth more than you think.

Thursday. scafold.ai.

#WhatBugsYou`,
    is_posted: false, sort_order: 6, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 7, week: 0, day: 'Wed Feb 26', scheduled_date: '2026-02-26', platform: 'Instagram', author: 'Scafold', type: 'Visual + Caption', title: 'The Countdown Visual',
    visual: 'Clean dark card — "What bugs you?" in large white text. "Thursday." below in vermillion.',
    content: `What bugs you about the world? Your frustration might be worth more than you think. Thursday. Link in bio. #WhatBugsYou #scafold`,
    is_posted: false, sort_order: 7, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 8, week: 0, day: 'Thu Feb 27', scheduled_date: '2026-02-27', platform: 'LinkedIn', author: 'Dylan', type: 'Data Hook', title: 'The Data Hook',
    content: `Here's something wild: 74% of Americans report being stressed about at least one major area of their life — money, health, work, relationships.

8 billion people on this planet, and the vast majority of them are frustrated about something. Every. Single. Day.

And yet there's no structured way to turn that frustration into something useful.

No tool that says: "OK, you're frustrated about X. Let's figure out if that's a real problem, who else has it, what solutions exist, and what you could actually build."

Until tomorrow.

Tim and I have been building this for 3 years. 500+ people. 7 countries. $50K in revenue from a manual process.

Tomorrow, we let everyone in.

scafold.ai — go there tomorrow morning.`,
    is_posted: false, sort_order: 8, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 9, week: 0, day: 'Fri Feb 28', scheduled_date: '2026-02-28', platform: 'LinkedIn', author: 'Tim', type: 'Eve of Launch', title: 'The Eve-of-Launch',
    content: `Tomorrow we launch.

3 years of work. 500+ people guided across 7 countries. $50K in revenue.

And tomorrow, it all comes down to one question:

What bugs you?

Not your startup idea. Not your side hustle. Not your business plan. Just: what frustrates you about the world?

We built a platform that takes that answer and turns it into something real. A validated problem. A real solution. An execution blueprint.

It starts tomorrow at scafold.ai.

Tell us what bugs you. We'll show you why it matters.

See you in the morning.

#WhatBugsYou #scafold #launch #buildinpublic`,
    is_posted: false, sort_order: 9, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 10, week: 0, day: 'Fri Feb 28', scheduled_date: '2026-02-28', platform: 'Instagram', author: 'Scafold', type: 'Visual + Caption', title: 'Launch Eve Visual',
    visual: '"Tomorrow." in huge white text on dark background. "What bugs you?" smaller below. scafold.ai at bottom.',
    content: `Tomorrow morning. One question. Your answer changes everything. What bugs you? → scafold.ai #WhatBugsYou #scafold #launch`,
    is_posted: false, sort_order: 10, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 11, week: 1, day: 'Sat Mar 1', scheduled_date: '2026-03-01', platform: 'LinkedIn', author: 'Tim', type: 'Launch Post', title: 'The Launch', time: '8:00 AM ET',
    content: `It's live.

scafold.ai

3 years. 500+ people. 7 countries. $50K in revenue.

And today, we're opening the door to everyone.

Here's the deal:

Go to scafold.ai. Tell us what frustrates you about the world. That's it.

Not your startup idea. Not your business plan. Just: what bugs you?

"I can't find a therapist who takes my insurance."
"Hiring contractors wastes 40% of my budget."
"My gym app is absolute garbage."
"I spend 3 hours meal prepping and still order DoorDash by Wednesday."

Every frustration is a problem. Every problem is an opportunity. Most people just don't know how to see it.

Scafold does.

We take your frustration and run it through a structured pipeline: problem identification, target audience discovery, competitive mapping, solution design, execution planning.

You tell us what bugs you. We show you what to build.

AI can build anything. It can't tell you what's worth building. We can.

→ scafold.ai

#WhatBugsYou #scafold #launch #startups #AI #buildinpublic`,
    is_posted: false, sort_order: 11, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 12, week: 1, day: 'Sat Mar 1', scheduled_date: '2026-03-01', platform: 'LinkedIn', author: 'Dylan', type: 'Product Story', title: 'The Product Story', time: '8:30 AM ET',
    content: `We just launched Scafold.

Here's the 30-second version:

1. You tell us what frustrates you
2. We figure out if it's a real problem
3. We find who else has this problem
4. We map what solutions exist (and why they fail)
5. We design something better
6. We give you the blueprint to build it

Most AI tools start at step 6. We start at step 1.

That's the difference between building fast and building right.

3 years of doing this manually for 500+ people. Today, we let AI handle the heavy lifting.

Go tell us what bugs you → scafold.ai

#WhatBugsYou #scafold`,
    is_posted: false, sort_order: 12, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 13, week: 1, day: 'Sat Mar 1', scheduled_date: '2026-03-01', platform: 'LinkedIn', author: 'Scafold', type: 'Brand Launch', title: 'The Brand Launch', time: '9:00 AM ET',
    content: `What bugs you?

Not your startup idea. Not your side project pitch. Just: what frustrates you about the world?

Go to scafold.ai and tell us. That's it.

We'll take your frustration and turn it into something worth building.

Because everyone complains. Nobody gets paid for it. Until now.

→ scafold.ai

#WhatBugsYou`,
    is_posted: false, sort_order: 13, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 14, week: 1, day: 'Sat Mar 1', scheduled_date: '2026-03-01', platform: 'Instagram', author: 'Scafold', type: 'Launch Visual', title: 'Launch Visual',
    visual: 'Bold "What bugs you?" centered. Dark background. scafold.ai. Clean, editorial.',
    content: `It's live. Go to scafold.ai. Tell us what frustrates you about the world. Your complaint might be worth more than you think. Link in bio. #WhatBugsYou #scafold #launch #AI #buildinpublic`,
    is_posted: false, sort_order: 14, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 15, week: 1, day: 'Sun Mar 2', scheduled_date: '2026-03-02', platform: 'LinkedIn', author: 'Tim', type: 'Early Wins', title: 'First Results',
    content: `We launched Scafold 24 hours ago. Here's what happened:

→ [X] people told us what bugs them
→ Top frustration category: [will fill with real data]
→ Most unexpected submission: [will fill]
→ Countries represented: [will fill]

The data is already fascinating. People aren't just sharing startup ideas. They're sharing real pain.

"I can't find a dentist who doesn't try to upsell me."
"My landlord takes 3 weeks to fix anything."
"Group projects in college are broken."

Every single one of these is a business waiting to be built.

This is why we built Scafold. Not for founders with pitch decks. For anyone who's ever been frustrated and thought "someone should fix this."

Your turn → scafold.ai

#WhatBugsYou #scafold #buildinpublic`,
    is_posted: false, sort_order: 15, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 16, week: 1, day: 'Sun Mar 2', scheduled_date: '2026-03-02', platform: 'Instagram', author: 'Scafold', type: 'Stats Card', title: 'Stats Card',
    visual: 'Stat card — "[X] frustrations in 24 hours" with top 3 categories listed.',
    content: `24 hours. [X] frustrations. Here's what's bugging people: 1. [Category] 2. [Category] 3. [Category] What's bugging you? Link in bio. #WhatBugsYou #scafold #data`,
    is_posted: false, sort_order: 16, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 17, week: 1, day: 'Mon Mar 3', scheduled_date: '2026-03-03', platform: 'LinkedIn', author: 'Scafold', type: 'FotD #1', title: 'Frustration of the Day #1',
    content: `FRUSTRATION OF THE DAY:

"I spend 3 hours every Sunday meal prepping and still end up ordering DoorDash by Wednesday."

This isn't laziness. This is a $4.2 billion market gap.

Here's what Scafold sees in this frustration:

THE PROBLEM: Meal prep is optimized for nutrition, not for the reality of a busy week. By Wednesday, willpower runs out, plans change, and the prepped food doesn't match your mood.

THE OPPORTUNITY: An AI meal system that adapts in real-time — swapping recipes based on your schedule changes, energy level, and what's already in your fridge.

THE MARKET: 68% of Americans say they want to eat healthier but can't stick to plans. That's a massive, underserved audience.

This is what happens when you tell us what bugs you.

Your frustration → scafold.ai

#WhatBugsYou #FrustrationOfTheDay #scafold`,
    is_posted: false, sort_order: 17, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 18, week: 1, day: 'Mon Mar 3', scheduled_date: '2026-03-03', platform: 'Instagram', author: 'Tim', type: 'Behind-the-Scenes', title: 'Behind-the-Scenes',
    visual: 'Behind-the-scenes photo of Tim at his laptop/desk. Casual, real.',
    content: `Day 3 of launch. Living at my laptop. The data coming in from scafold.ai is wild. People are sharing frustrations I never would have thought of. This is the stuff ChatGPT can't generate — real human pain from real humans. Building in public, day by day. More updates coming. #buildinpublic #founderslife #scafold #WhatBugsYou`,
    is_posted: false, sort_order: 18, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 19, week: 1, day: 'Tue Mar 4', scheduled_date: '2026-03-04', platform: 'LinkedIn', author: 'Dylan', type: 'Data Insight', title: 'The Data Insight',
    content: `We've collected [X]+ frustrations in 4 days. Here's something nobody expected:

The #1 frustration category isn't tech. It isn't money. It isn't career.

It's [real data — health/daily routines/relationships — fill in].

This matters because every AI company is building for knowledge workers. Meanwhile, the biggest pain points are in areas nobody's touching.

This is what proprietary data looks like. Not scraped from Reddit. Not generated by GPT. Real frustrations from real people.

And every single one is a product waiting to be built.

Add yours → scafold.ai

#WhatBugsYou #scafold #data`,
    is_posted: false, sort_order: 19, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 20, week: 1, day: 'Tue Mar 4', scheduled_date: '2026-03-04', platform: 'Instagram', author: 'Scafold', type: 'Data Viz', title: 'Data Visualization',
    visual: 'Data visualization — pie chart or bar chart of top frustration categories. Dark bg, green/vermillion accents.',
    content: `[X]+ frustrations collected. Here's what the data says: [X]% — [Category] [X]% — [Category] [X]% — [Category] The pain points nobody's building for. Until now. #WhatBugsYou #scafold #data #AI`,
    is_posted: false, sort_order: 20, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 21, week: 1, day: 'Wed Mar 5', scheduled_date: '2026-03-05', platform: 'LinkedIn', author: 'Scafold', type: 'FotD #2', title: 'Frustration of the Day #2',
    content: `FRUSTRATION OF THE DAY:

"I can't find a therapist who takes my insurance and has availability within 2 weeks."

47 million Americans need mental health care. The average wait time? 48 days.

Here's what Scafold sees:

PROBLEM: The therapist marketplace is fragmented. Insurance networks, availability calendars, and specialization matching exist in separate silos.

OPPORTUNITY: A unified matching engine that cross-references insurance, availability, specialization, and patient preferences in real-time.

MARKET: $280B mental health market, growing 5.1% annually. The matching layer alone could be a $2B+ opportunity.

Someone frustrated about finding a therapist just described a billion-dollar startup.

What frustration are you sitting on?

→ scafold.ai

#WhatBugsYou #FrustrationOfTheDay #scafold #mentalhealth`,
    is_posted: false, sort_order: 21, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 22, week: 1, day: 'Wed Mar 5', scheduled_date: '2026-03-05', platform: 'LinkedIn', author: 'Tim', type: 'Build in Public', title: 'Week 1 Numbers',
    content: `Scafold launch — Week 1 numbers:

[X] frustrations collected
[X] emails on waitlist
[X] countries
[X] social impressions

What's working:
→ The "What bugs you?" hook resonates — people WANT to share their frustrations
→ LinkedIn is our strongest channel by far
→ Real frustration data > generic startup advice

What's not working:
→ TikTok hasn't clicked yet (testing new formats)
→ Need better mobile experience on the page

What's next:
→ "Frustration of the Day" series launching daily
→ Trend report coming Friday
→ Campus ambassador program kicking off next week

Building in public means sharing the real numbers. Here they are.

#buildinpublic #scafold #WhatBugsYou #startups`,
    is_posted: false, sort_order: 22, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 23, week: 1, day: 'Thu Mar 6', scheduled_date: '2026-03-06', platform: 'LinkedIn', author: 'Dylan', type: 'Technical Edge', title: 'The Technical Edge',
    content: `Everyone's building AI copilots. We're building AI commercial instinct.

There's a massive difference.

A copilot helps you execute faster. It writes code. It generates designs. It automates workflows.

Commercial instinct tells you whether you should be executing at all.

It looks at a frustration and asks:
→ Is this a real problem or just a bad day?
→ How many other people have this exact pain?
→ What solutions exist and why do they fail?
→ Is there a business here or just a feature?
→ What would the execution plan look like?

We've trained this instinct over 500+ real interactions across 7 countries. It's not a prompt. It's a pipeline.

That's what makes Scafold different. We're not building another ChatGPT wrapper. We're building the thing that tells you what's worth building in the first place.

→ scafold.ai

#scafold #AI #WhatBugsYou`,
    is_posted: false, sort_order: 23, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 24, week: 1, day: 'Thu Mar 6', scheduled_date: '2026-03-06', platform: 'Instagram', author: 'Scafold', type: 'Comparison Card', title: 'Comparison Card',
    visual: 'Side-by-side comparison. Left: "AI Copilot — builds faster" Right: "AI Commercial Instinct — builds the right thing"',
    content: `AI copilots help you build faster. We help you build the right thing. There's a massive difference. And it starts with one question: what bugs you? → Link in bio #WhatBugsYou #scafold #AI`,
    is_posted: false, sort_order: 24, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 25, week: 1, day: 'Fri Mar 7', scheduled_date: '2026-03-07', platform: 'LinkedIn', author: 'Scafold', type: 'Trend Report', title: 'Week 1 Trend Report',
    content: `SCAFOLD WEEKLY FRUSTRATION REPORT — Week 1

We collected [X]+ frustrations this week. Here's what's bugging people:

TOP 5 FRUSTRATION CATEGORIES:
1. [Category] — [X]%
2. [Category] — [X]%
3. [Category] — [X]%
4. [Category] — [X]%
5. [Category] — [X]%

MOST SUBMITTED FRUSTRATION: "[actual submission]"
MOST SURPRISING FRUSTRATION: "[actual submission]"
FRUSTRATION NOBODY'S SOLVING: "[actual submission]"

This data doesn't exist anywhere else. It's not scraped from Twitter. It's not generated by AI. It's real humans telling us what actually bothers them.

And every single data point is a product waiting to be built.

Add your frustration to next week's report → scafold.ai

#WhatBugsYou #FrustrationReport #scafold`,
    is_posted: false, sort_order: 25, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 26, week: 1, day: 'Fri Mar 7', scheduled_date: '2026-03-07', platform: 'LinkedIn', author: 'Tim', type: 'Reflection', title: 'Week 1 Reflection',
    content: `Week 1 of Scafold's launch is done. Honest reflection:

What surprised me: People don't just share "business ideas." They share real, raw, personal frustrations. Health. Relationships. Daily annoyances. Stuff that genuinely affects their quality of life.

What I learned: The barrier between "frustration" and "business opportunity" is way thinner than people think. Almost every personal frustration, when you dig into it, reveals a market gap.

What keeps me up at night: We're sitting on the beginning of something massive. A dataset of real human pain points that no other company has. And we're just getting started.

Week 2 starts Monday. We're launching "Frustration of the Day" as a daily series, activating our campus ambassador program, and pushing hard on the data.

If you haven't told us what bugs you yet → scafold.ai

See you Monday.

#scafold #WhatBugsYou #buildinpublic #week1`,
    is_posted: false, sort_order: 26, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 27, week: 2, day: 'Mon Mar 8', scheduled_date: '2026-03-08', platform: 'LinkedIn', author: 'Tim', type: 'YC Angle', title: 'The YC Angle',
    content: `I just submitted our YC S26 application.

The hardest question wasn't about our product or our metrics. It was: "What do you understand that everyone else doesn't?"

Here's what I wrote:

"Everyone has problems. 8 billion people, every single day, are frustrated about something. The $45B AI tooling market helps people build solutions faster — but nobody helps them identify which problems are actually worth solving. We're building the world's first frustration-to-execution pipeline. Not for founders. For everyone. And our dataset of real human frustrations is a moat that gets stronger with every submission."

Whether YC says yes or no, this is what we believe. The frustration is the starting point. Everything else follows.

→ scafold.ai

#YCombinator #scafold #WhatBugsYou #startups`,
    is_posted: false, sort_order: 27, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 28, week: 2, day: 'Mon Mar 8', scheduled_date: '2026-03-08', platform: 'LinkedIn', author: 'Scafold', type: 'FotD #3', title: 'Frustration of the Day #3',
    content: `FRUSTRATION OF THE DAY:

"Group projects in college are the worst experience of my entire education."

Every college student has felt this. But here's what Scafold sees:

PROBLEM: Group projects fail because there's no accountability infrastructure. Free riders thrive. Leaders burn out. Grading doesn't reflect individual contribution.

OPPORTUNITY: A team collaboration platform specifically designed for academic group work — with contribution tracking, peer accountability, and fair workload distribution built in.

MARKET: 20M+ US college students. $8B EdTech market. No one has nailed the group project problem.

A frustrated college student just described the next big EdTech startup.

What's your frustration worth?

→ scafold.ai

#WhatBugsYou #FrustrationOfTheDay #scafold #college #edtech`,
    is_posted: false, sort_order: 28, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 29, week: 2, day: 'Tue Mar 9', scheduled_date: '2026-03-09', platform: 'LinkedIn', author: 'Dylan', type: 'International', title: 'International Perspective',
    content: `We built Scafold across 7 countries before launching in the US.

Hong Kong. Vietnam. Singapore. South Korea. And more.

Here's what blew my mind: frustrations are universal.

A student in Ho Chi Minh City is frustrated about the same things as a student in Boston:
→ "I can't find a job that matches my actual skills"
→ "Healthcare is confusing and expensive"
→ "I waste hours on things that should be automated"

The specific context changes. The underlying pain doesn't.

That's why we built Scafold as a horizontal platform, not a vertical tool. Frustration doesn't have a category. It doesn't have a demographic. It's human.

8 billion people. 8 billion frustrations. One platform.

→ scafold.ai

#scafold #WhatBugsYou #global #startups`,
    is_posted: false, sort_order: 29, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 30, week: 2, day: 'Wed Mar 10', scheduled_date: '2026-03-10', platform: 'LinkedIn', author: 'Scafold', type: 'FotD #4', title: 'Frustration of the Day #4',
    content: `FRUSTRATION OF THE DAY:

"I make $85K/year and I still can't figure out if I'm saving enough for retirement."

The personal finance industry is a $12B market. And it's failing the average person.

Here's what Scafold sees:

PROBLEM: Financial literacy tools either oversimplify (generic "save 20%" advice) or overcomplicate (apps with 47 features nobody uses). No one meets people where they actually are.

OPPORTUNITY: An AI financial companion that starts with your specific anxiety — not a generic assessment — and builds a personalized, adaptive plan from there.

INSIGHT: The entry point isn't "financial planning." It's "I'm stressed about money." Meet them at the frustration, not the solution.

That's the Scafold approach. Start with pain. End with a plan.

→ scafold.ai

#WhatBugsYou #FrustrationOfTheDay #scafold #fintech #personalfinance`,
    is_posted: false, sort_order: 30, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 31, week: 2, day: 'Wed Mar 10', scheduled_date: '2026-03-10', platform: 'Instagram', author: 'Tim', type: 'Campus Life', title: 'Campus Life',
    visual: 'Tim at BC campus, casual selfie or walking shot.',
    content: `Last semester at Boston College. Building an AI company. Applying to YC. Incoming at PwC. People keep asking me: "Aren't you scared?" Honestly? I'm more scared of NOT trying this. The data we're collecting at scafold.ai is unlike anything I've ever seen. Real frustrations from real people. Not generated. Not scraped. Real. What bugs you? Tell us. Link in bio. #founderslife #bostonCollege #scafold #WhatBugsYou #buildinpublic`,
    is_posted: false, sort_order: 31, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 32, week: 2, day: 'Thu Mar 11', scheduled_date: '2026-03-11', platform: 'LinkedIn', author: 'Tim', type: 'PwC Decision', title: 'The PwC Decision',
    content: `I have a job offer from PwC Technology Consulting. I also have a company with 500+ users, $50K in revenue, and a dataset nobody else has.

Here's how I'm thinking about it:

The safe path: Take PwC. Learn consulting. Build a resume. Maybe start something in 5 years.

The scary path: Go all-in on Scafold. Apply to YC. Bet on the data. Bet on myself.

What most people don't realize: you can do both. I'm not dropping out. I'm not burning bridges. I'm building something real while keeping my options open.

That's the point of Scafold, actually. We don't ask you to quit your job and start a company. We ask: what bugs you? Then we figure out if it's worth pursuing.

Sometimes the answer is "yes, go build this." Sometimes it's "keep your day job, but here's a side project."

Both are valid. Both start with the same question.

→ scafold.ai

#scafold #WhatBugsYou #career #buildinpublic #consulting`,
    is_posted: false, sort_order: 32, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 33, week: 2, day: 'Fri Mar 12', scheduled_date: '2026-03-12', platform: 'LinkedIn', author: 'Scafold', type: 'Trend Report', title: 'Week 2 Frustration Report',
    content: `SCAFOLD WEEKLY FRUSTRATION REPORT — Week 2

[X]+ total frustrations collected. Here's this week's data:

TRENDING UP:
→ [Category] frustrations up [X]% from last week
→ [Category] entering top 5 for the first time

THIS WEEK'S MOST SUBMITTED: "[actual submission]"
THIS WEEK'S MOST BUILDABLE: "[actual submission]" — estimated [X]M addressable market

NEW THIS WEEK:
→ [X] new countries represented
→ Average frustration length: [X] words (people are getting more detailed)
→ [X]% of submissions reference an existing product that's failing them

The data gets richer every week. Your frustration makes it stronger.

→ scafold.ai

#WhatBugsYou #FrustrationReport #scafold`,
    is_posted: false, sort_order: 33, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 34, week: 3, day: 'Week 3/4', scheduled_date: '2026-03-15', platform: 'LinkedIn', author: 'Tim', type: 'Milestone', title: 'The Numbers Post',
    content: `30 days of Scafold. Here are the real numbers:

[X] frustrations collected
[X] waitlist signups
[X] countries
[X] unique problem categories identified
[X]M+ social impressions
[X] campus ambassadors active

What the numbers don't show:

→ The student who submitted "I can't afford textbooks" and realized there's a $10B problem nobody's solving well
→ The small business owner who said "hiring is broken" and now has a blueprint for a recruiting tool
→ The 47 people who all submitted variations of "I can't find a good therapist"

The data is the moat. And it gets stronger every day.

If you haven't told us what bugs you yet, you're missing out on being part of something big.

→ scafold.ai

#scafold #WhatBugsYou #buildinpublic #30days`,
    is_posted: false, sort_order: 34, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 35, week: 3, day: 'Week 3/4', scheduled_date: '2026-03-18', platform: 'LinkedIn', author: 'Dylan', type: 'Moat', title: 'The Moat Post',
    content: `Everyone talks about moats. Here's ours:

Day 1: We had 0 frustrations in our database.
Day 30: We have [X]+ real, structured, categorized human pain points that no other company on Earth has.

This data can't be:
→ Scraped from Reddit (it doesn't exist there)
→ Generated by GPT (it's not trained on it)
→ Bought from a data broker (nobody collects it)
→ Replicated by a competitor (it took 3 years + community trust to build)

Every submission makes the dataset stronger. Every dataset improvement makes the AI better. Every AI improvement makes the submissions more valuable.

That's a flywheel. That's a moat. That's Scafold.

→ scafold.ai

#scafold #WhatBugsYou #moat #startups #AI`,
    is_posted: false, sort_order: 35, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 36, week: 3, day: 'Week 3/4', scheduled_date: '2026-03-22', platform: 'LinkedIn', author: 'Scafold', type: 'Challenge', title: 'Challenge Post',
    content: `Drop your biggest daily frustration in the comments.

Not your startup idea. Not your business plan. Just: what's one thing that genuinely annoys you about your everyday life?

We'll pick 3 from the comments and show exactly how Scafold would analyze each one — the problem, the market, the opportunity, and the blueprint.

Ready? Go.

(Or submit privately at scafold.ai)

#WhatBugsYou #scafold`,
    is_posted: false, sort_order: 36, is_custom: false, created_at: new Date().toISOString()
  },
  {
    id: 37, week: 3, day: 'Week 3/4', scheduled_date: '2026-03-25', platform: 'LinkedIn', author: 'Tim', type: 'Senior Year', title: 'The Senior Year Post',
    content: `Typical BC senior spring: applying to jobs, going to formals, coasting.

My BC senior spring: applying to YC, building an AI company, analyzing frustration data at 2am.

I don't say this to flex. I say it because a year ago, I thought "entrepreneur" was a resume line, not an identity.

What changed: I realized that the skills I'm learning in class — finance, strategy, user research — aren't meant for PowerPoint presentations. They're meant for building things that matter.

Scafold started as a class project mentality: "let's help founders validate ideas." It's become something bigger: a platform that turns any human frustration into an executed solution.

I'm scared. I'm excited. I'm running on 4 hours of sleep and way too much Hillside coffee.

But I've never felt more alive.

If you're in college and you're thinking about building something: don't wait. Start with what bugs you.

→ scafold.ai

#scafold #WhatBugsYou #college #seniorYear #bostonCollege #buildinpublic`,
    is_posted: false, sort_order: 37, is_custom: false, created_at: new Date().toISOString()
  },
];

export const SEED_CHECKLIST: ChecklistItem[] = [
  // Setup (8 items)
  { id: 1, category: 'Setup', text: 'Set up Scafold LinkedIn page', is_checked: false, is_custom: false, sort_order: 1 },
  { id: 2, category: 'Setup', text: 'Set up Scafold Instagram account', is_checked: false, is_custom: false, sort_order: 2 },
  { id: 3, category: 'Setup', text: 'Set up Scafold TikTok account', is_checked: false, is_custom: false, sort_order: 3 },
  { id: 4, category: 'Setup', text: 'Create Canva brand kit (colors, fonts, logo, templates)', is_checked: false, is_custom: false, sort_order: 4 },
  { id: 5, category: 'Setup', text: 'Finalize frustration page + deploy to scafold.ai', is_checked: false, is_custom: false, sort_order: 5 },
  { id: 6, category: 'Setup', text: 'Set up Buffer or Later for scheduling', is_checked: false, is_custom: false, sort_order: 6 },
  { id: 7, category: 'Setup', text: 'Create frustration page database/form', is_checked: false, is_custom: false, sort_order: 7 },
  { id: 8, category: 'Setup', text: 'Set up metrics tracking spreadsheet', is_checked: false, is_custom: false, sort_order: 8 },
  // Community (7 items)
  { id: 9, category: 'Community', text: 'Email existing 500-person community about launch', is_checked: false, is_custom: false, sort_order: 9 },
  { id: 10, category: 'Community', text: 'Brief 57 growth interns on sharing protocol', is_checked: false, is_custom: false, sort_order: 10 },
  { id: 11, category: 'Community', text: 'Create ambassador outreach list', is_checked: false, is_custom: false, sort_order: 11 },
  { id: 12, category: 'Community', text: 'Draft ambassador recruitment email', is_checked: false, is_custom: false, sort_order: 12 },
  { id: 13, category: 'Community', text: 'Identify 20-30 potential ambassadors', is_checked: false, is_custom: false, sort_order: 13 },
  { id: 14, category: 'Community', text: 'Reach out + get 10-15 commitments', is_checked: false, is_custom: false, sort_order: 14 },
  { id: 15, category: 'Community', text: 'Onboard ambassadors with social copy + talking points', is_checked: false, is_custom: false, sort_order: 15 },
  // Content Templates (6 items)
  { id: 16, category: 'Content', text: 'Create Frustration of the Day Canva template', is_checked: false, is_custom: false, sort_order: 16 },
  { id: 17, category: 'Content', text: 'Create Data card Canva template', is_checked: false, is_custom: false, sort_order: 17 },
  { id: 18, category: 'Content', text: 'Create Quote card Canva template', is_checked: false, is_custom: false, sort_order: 18 },
  { id: 19, category: 'Content', text: 'Create Before/After card Canva template', is_checked: false, is_custom: false, sort_order: 19 },
  { id: 20, category: 'Content', text: 'Create Story poll Canva template', is_checked: false, is_custom: false, sort_order: 20 },
  { id: 21, category: 'Content', text: 'Create Carousel slide Canva template', is_checked: false, is_custom: false, sort_order: 21 },
  // Outreach (2 items)
  { id: 22, category: 'Outreach', text: 'First batch micro-influencer DMs (50 founders)', is_checked: false, is_custom: false, sort_order: 22 },
  { id: 23, category: 'Outreach', text: 'Second batch micro-influencer DMs (50 creators)', is_checked: false, is_custom: false, sort_order: 23 },
  // Ongoing Habits (7 items)
  { id: 24, category: 'Ongoing', text: 'Sunday content sprint (2 hours weekly)', is_checked: false, is_custom: false, sort_order: 24 },
  { id: 25, category: 'Ongoing', text: 'Daily: Frustration of the Day post', is_checked: false, is_custom: false, sort_order: 25 },
  { id: 26, category: 'Ongoing', text: 'Weekly: Frustration Report', is_checked: false, is_custom: false, sort_order: 26 },
  { id: 27, category: 'Ongoing', text: 'Weekly: Founder check-in posts (Tim + Dylan)', is_checked: false, is_custom: false, sort_order: 27 },
  { id: 28, category: 'Ongoing', text: 'Weekly: Metrics review vs targets', is_checked: false, is_custom: false, sort_order: 28 },
  { id: 29, category: 'Ongoing', text: 'Bi-weekly: Ambassador check-ins', is_checked: false, is_custom: false, sort_order: 29 },
  { id: 30, category: 'Ongoing', text: 'Monthly: Frustration Index deep-dive', is_checked: false, is_custom: false, sort_order: 30 },
];

export const WEEK_LABELS: Record<number, string> = {
  0: 'Pre-Launch',
  1: 'Launch Week',
  2: 'Sustain Phase',
  3: 'Scale Phase',
};

export const PLATFORM_COLORS: Record<string, string> = {
  LinkedIn: '#4361EE',
  Instagram: '#EC4899',
  TikTok: '#7C3AED',
};

export const AUTHOR_COLORS: Record<string, string> = {
  Tim: '#38BDF8',
  Dylan: '#34D399',
  Scafold: '#FB923C',
};
