# Anki Setup Guide for JEE/NEET

**AI Atlas** → [AI Tools](/tools/README) → Anki Setup Guide

> Anki is the most scientifically proven tool for long-term retention. This guide gets you set up in 30 minutes.

---

## Why Anki for JEE/NEET?

Anki uses **spaced repetition** — it shows you cards just before you're about to forget them. This means:

- Formulas stick permanently, not just for the exam
- Biology terms actually stay in memory (critical for NEET)
- Review time stays manageable even as your deck grows
- Mobile sync — study on phone between classes

**The math:** 15 minutes of Anki daily > 2 hours of re-reading the same notes.

---

## Install Anki (Free, all platforms)

| Platform | Download | Cost |
|----------|---------|------|
| Windows/Mac/Linux | [apps.ankiweb.net](https://apps.ankiweb.net) | Free |
| iPhone (AnkiMobile) | App Store | ₹750 one-time |
| Android (AnkiDroid) | Play Store | Free |
| Web (AnkiWeb) | [ankiweb.net](https://ankiweb.net) | Free |

> **Best setup:** Desktop app for adding cards + AnkiDroid (Android) for reviewing on phone. Sync is free.

---

## First Deck Setup — 30 Minutes

### Step 1: Create Your Account
1. Go to [ankiweb.net](https://ankiweb.net)
2. Create a free account
3. Open the desktop app, sign in → syncs across devices

### Step 2: Create Your First Deck Structure
```
My JEE Decks/
├── Physics/
│   ├── Mechanics
│   ├── Electromagnetism
│   └── Modern Physics
├── Chemistry/
│   ├── Physical
│   ├── Organic
│   └── Inorganic
└── Mathematics/
    ├── Calculus
    └── Algebra
```

Create nested decks: **Decks → Create Deck → Name: "JEE::Physics::Mechanics"**

### Step 3: Optimal Card Types for JEE/NEET

**Type 1: Formula Cards**
- Front: `Formula name + "What is it?"`
- Back: Formula + when to use it + units

**Type 2: Concept Cards**
- Front: "What happens when [condition]?"
- Back: The answer + why + example

**Type 3: Cloze Deletion (best for NEET Biology)**
- Example: "The process of {{c1::photosynthesis}} produces {{c2::glucose}} and {{c3::oxygen}}"

---

## Anki Settings Optimised for JEE/NEET

Go to **Deck → Options** and set:

| Setting | Value | Why |
|---------|-------|-----|
| New cards per day | 20–30 | Sustainable rate |
| Maximum reviews/day | 200 | Don't let backlog build |
| Starting ease | 250% | Standard |
| Easy interval | 4 days | First easy step |
| Graduating interval | 1 day | Forces repetition early |

---

## Create Cards With AI

**The fastest way to build your Anki deck:**

```
Open Claude and paste:

"Create 20 Anki flashcards for [CHAPTER] for JEE.
 Format each card as:
 FRONT: [question or concept]
 BACK: [answer, formula, or explanation]

 Focus on: formulas, definitions, common misconceptions,
 and application questions. Include 5 cloze-deletion
 format cards for important definitions."
```

Copy the output → paste into Anki. Done.

---

## Daily Review Routine

```
Morning (10 min): Review due cards on AnkiDroid on phone
                  → While commuting / eating breakfast

Evening (15 min): Add 10–20 new cards for today's study topic
                  → After finishing a chapter

Night (5 min):   Quick review on phone before sleep
                  → Reinforces memory during sleep
```

---

## Import Cards from CSV (Bulk Import)

1. Create a spreadsheet: Column A = front, Column B = back
2. Export as CSV
3. Anki → File → Import → select CSV
4. Map columns to Front/Back fields

**Generate the CSV with AI:**
```
"Create a CSV-formatted Anki deck for [CHAPTER].
 Format: front_text,back_text
 No header row. 30 cards. Focus on high-priority concepts for JEE."
```

---

## Related

- [AI Tools Database](/tools/ai-tools-database)
- [Claude for Students](/tools/tool-profiles/claude-for-students) — Create cards with AI
- [JEE Prompt Library](/prompts/jee/jee-ai-prompt-library)
