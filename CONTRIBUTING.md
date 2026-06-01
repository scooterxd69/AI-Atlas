# Contributing to AI Atlas

AI Atlas is built by and for students. Every contribution — a chapter page, a prompt, a fix — reaches thousands of students studying for free.

## Before You Start

1. Read the [repo-build.md](meta/repo-build.md) specification
2. Check open Issues to avoid duplicate work
3. Open an Issue describing what you want to contribute

## Types of Contributions

| Type | How | Acceptance criteria |
|---|---|---|
| Chapter page | Use `docs/templates/universal-chapter-template.md` | Factually accurate, all sections complete |
| New prompt | Use `docs/templates/prompt-template.md` | Tested, adds value beyond existing prompts |
| Bug fix | Edit the file directly | Correct information with source |
| Translation | Hindi versions of top pages | Accurate translation, readable |

## Step-by-Step

```bash
# 1. Fork and clone
git clone https://github.com/YOUR-USERNAME/AI-Atlas.git
cd AI-Atlas

# 2. Create branch
git checkout -b content/jee-physics-rotational-motion

# 3. Write your content using the template
# File: docs/chapters/jee-physics/mechanics/jee-physics-rotational-motion.md

# 4. Commit
git add -A
git commit -m "content(jee-physics): add rotational motion chapter page"

# 5. Push and open PR
git push origin content/jee-physics-rotational-motion
```

## File Naming

- All lowercase: `jee-physics-rotational-motion.md` ✅
- Hyphens only, no underscores ✅
- No version numbers ✅
- Descriptive names ✅

## PR Checklist

- [ ] File in correct directory
- [ ] Lowercase filename with hyphens
- [ ] Header block with all fields
- [ ] All internal links use relative paths and work
- [ ] Factual accuracy verified against NCERT/standard sources
- [ ] No copyrighted content reproduced

## Getting Help

Open a [Question issue](https://github.com/scooterxd69/AI-Atlas/issues) — response within 48 hours.
