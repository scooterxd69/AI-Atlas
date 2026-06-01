# Notion Study System

**AI Atlas** → [AI Tools](/tools/README) → Notion Study System

> Set up a complete AI-assisted study system in Notion. Free for students.

---

## Why Notion for Studying?

- **Free** for personal use (Notion Education plan)
- Combines notes, task tracking, error log, mock tracker in one place
- Works on phone and desktop
- AI features built in (Notion AI — paid add-on, but templates work without it)

---

## Student Setup: 4 Core Templates

### 1. Chapter Notes Database

Create a database with fields:
| Field | Type | Purpose |
|-------|------|---------|
| Chapter | Title | Chapter name |
| Subject | Select | Physics/Chemistry/Maths |
| Status | Select | Not started / In progress / Done |
| Confidence | Select | Low / Medium / High |
| Last Revised | Date | Track spaced repetition |
| Key Formulas | Text | Formula summary |
| Weak Points | Text | What needs more work |

### 2. Error Log

Track every mistake from mocks and practice:
| Field | Type |
|-------|------|
| Date | Date |
| Question source | Text |
| Topic | Select |
| My answer | Text |
| Correct answer | Text |
| Why I was wrong | Text |
| Revised? | Checkbox |

### 3. Mock Test Tracker

| Field | Type |
|-------|------|
| Test name | Title |
| Date | Date |
| Score | Number |
| Physics marks | Number |
| Chemistry marks | Number |
| Maths marks | Number |
| Analysis done? | Checkbox |
| Action items | Text |

### 4. Daily Study Planner

Simple daily log:
```
Date: [today]
Target chapters: 
Completed:
Doubts to resolve:
Anki cards added:
```

---

## AI + Notion Workflow

1. Study a chapter using [Claude prompts](/prompts/jee/jee-ai-prompt-library)
2. Paste the AI-generated notes into your Notion chapter database
3. Use Notion to tag, link, and organise
4. Review via the chapter database sorted by "Last Revised" (oldest first)

---

## Notion AI Prompts (Paid Add-on)

If you have Notion AI, use these inside Notion:

```
/ai "Summarise this chapter page in 5 bullet points"
/ai "Create 10 quiz questions from this content"  
/ai "Find gaps — what's missing from these notes?"
```
