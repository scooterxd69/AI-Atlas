# JEE AI Prompt Library
### 50 High-Quality Prompts for AI-Powered JEE Preparation

**Platform:** AI Atlas
**Subject:** JEE Main + Advanced (Physics, Chemistry, Mathematics)
**Tools:** Claude, ChatGPT (free), Gemini (free)
**Total Prompts:** 50 across 5 categories

---

> **How to use this library**
> Copy any prompt, replace the bracketed placeholders with your actual content, and paste into Claude or any free AI tool. Each prompt is designed to replace 30–60 minutes of conventional studying.

---

## Category 1 — Learning (10 Prompts)

*Use these when encountering a topic for the first time. Goal: build deep conceptual understanding before solving a single problem.*

---

### L-01 — First-Principles Concept Builder

**Purpose**
Build intuition for any JEE topic from the ground up, starting with the physical or mathematical idea behind the formula rather than the formula itself.

**Prompt**
```
Teach me [TOPIC] for JEE [Main/Advanced] from first principles.

Structure your response as:
1. The core physical/mathematical intuition — what is actually happening?
2. How that intuition leads to the key equation (derive it step by step)
3. What each variable in the equation represents physically
4. The conditions under which the formula holds — and when it breaks
5. The top 3 conceptual traps JEE uses from this topic

Do not start with the formula. Start with the idea.
```

**Example Input**
```
Teach me Rotational Kinetic Energy for JEE Advanced from first principles.
```

**Optimization Tips**
- Add "Use an analogy from everyday life before introducing any equation" for stronger retention.
- If the output feels too textbook, add: "Explain as if I already understand linear motion perfectly but have never heard of rotation."
- Run this prompt before watching any video on the topic — it gives your brain a framework to hang the video's content onto.

---

### L-02 — Technique Identification Trainer

**Purpose**
Train the most valuable JEE skill: recognising which technique or method a question is asking for within the first 10 seconds of reading it.

**Prompt**
```
For the topic [TOPIC] in JEE, teach me how to identify which technique to use before I start solving.

For each major technique or method in this topic:
1. What signals in the question point to this technique? (exact language, given quantities, what's asked)
2. What is the very first line I should write when I recognise this technique?
3. What does the wrong technique look like being applied — and how do I catch myself?
4. Give one example question and show how the signals led you to the right technique.

Format as a technique identification guide, not a solution manual.
```

**Example Input**
```
For Integration in JEE, teach me how to identify which technique to use before I start solving.
```

**Optimization Tips**
- Ask this after you've learned the basics of a topic. It works best when you already know the techniques but confuse which to apply.
- Add: "Include questions where two techniques seem equally valid — and explain the tiebreaker."
- Use the output as a laminated quick-reference card for that chapter.

---

### L-03 — Feynman Gap-Finder

**Purpose**
Force deep understanding by explaining a concept back to the AI, which then identifies exactly where your mental model has holes.

**Prompt**
```
I'm going to explain [TOPIC] to you as if you're a class 9 student who has never heard of it.

After I finish, please:
1. List every statement I made that is incorrect or imprecise
2. List every important concept I missed entirely
3. List every place I oversimplified in a way that would cause errors in JEE problems
4. Rate my overall understanding out of 10 and explain the rating

Here is my explanation:
[YOUR EXPLANATION IN YOUR OWN WORDS]
```

**Example Input**
```
I'm going to explain Electric Flux and Gauss's Law to you as if you're a class 9 student...

[Student writes: "Electric flux is the number of electric field lines passing through a surface. Gauss's Law says if you draw any closed surface, the total flux through it equals the charge enclosed divided by epsilon-naught. You can use it when there's symmetry to find E without integration."]
```

**Optimization Tips**
- The worse your explanation, the more valuable the feedback. Don't try to sound smart — try to expose your gaps.
- After getting the feedback, redo the explanation incorporating corrections. Repeat until you score 9/10.
- Use this 24 hours after initially learning a topic, not immediately.

---

### L-04 — Geometric Intuition Builder (Mathematics)

**Purpose**
Most JEE Mathematics problems have a hidden geometric picture. This prompt teaches you to see algebra geometrically, which is how top scorers solve problems 3x faster.

**Prompt**
```
For the algebraic result / formula [FORMULA OR THEOREM], give me:

1. The geometric interpretation — what does this look like when drawn?
2. A physical situation where this result appears naturally
3. How visualising the geometry makes the algebra obvious
4. Three JEE problems where seeing the geometry reduces a 10-step algebra solution to 2–3 steps
5. What most students miss by never thinking about the geometry

Topic: [TOPIC / CHAPTER]
```

**Example Input**
```
For the Cauchy-Schwarz Inequality, give me the geometric interpretation...
Topic: Algebra / Inequalities (JEE Advanced)
```

**Optimization Tips**
- Use this prompt specifically for topics that feel purely algebraic: sequences and series, complex numbers, P&C. These all have deep geometric interpretations.
- Ask follow-up: "Draw this in a coordinate plane and describe what I'd see."
- Pair with Desmos (free) to actually plot what Claude describes.

---

### L-05 — Reaction Mechanism Narrator (Chemistry — Organic)

**Purpose**
Organic Chemistry clicks when reactions are understood as stories of electron movement, not memorised as lists. This prompt builds mechanism intuition.

**Prompt**
```
Explain the [REACTION NAME] mechanism as a step-by-step narrative for JEE.

For each step:
1. Which electrons move and where do they go? (describe the arrow-pushing in words)
2. Why do they move in that direction? (electronegativity, stability, resonance — explain the driving force)
3. What intermediate is formed and how stable is it?
4. What would happen if conditions changed? (solvent polarity, nucleophile strength, etc.)

After the mechanism:
- What is the rate-determining step and why?
- How does JEE test this mechanism? (question types, common traps)
- What is the one-line memory hook for this mechanism?
```

**Example Input**
```
Explain the SN2 mechanism as a step-by-step narrative for JEE.
```

**Optimization Tips**
- After getting the narrative, close the chat and redraw the mechanism from memory.
- Add: "Now contrast this mechanism with [related mechanism] — show exactly where the electron paths diverge."
- Use this prompt for every named reaction in Organic Chemistry. ~40 reactions × 20 minutes = 13 hours of deep organic understanding.

---

### L-06 — NCERT Testable Fact Extractor (NEET / Inorganic)

**Purpose**
NCERT contains hundreds of sentences. Not all are equally JEE-testable. This prompt extracts only the high-value content so you don't waste time on low-yield lines.

**Prompt**
```
Analyse [NCERT CHAPTER NAME, CLASS 11/12] for JEE [Main/Advanced].

For every paragraph or section, classify each fact as:
- MUST KNOW: Directly tested in JEE multiple times
- SHOULD KNOW: Tested occasionally or as part of a larger question
- LOW PRIORITY: Rarely or never directly tested

For MUST KNOW facts, also give:
- The exact JEE question format this fact appears in
- The most common wrong answer students choose and why

Output as a prioritised study guide, not a summary.
```

**Example Input**
```
Analyse NCERT Class 12 Chapter 9 — Coordination Compounds for JEE Main.
```

**Optimization Tips**
- Run this before reading NCERT, not after — it tells you what to pay attention to.
- Add: "Flag any sentence that has appeared verbatim or near-verbatim in JEE papers."
- For Inorganic Chemistry, this prompt alone can replace 3 hours of highlighting.

---

### L-07 — Formula Stress-Tester

**Purpose**
Most students apply formulas mechanically without knowing when they fail. This prompt builds the critical habit of understanding formula boundary conditions — which JEE Advanced specifically tests.

**Prompt**
```
Take the formula [FORMULA] from [TOPIC/CHAPTER].

1. State all the conditions and assumptions under which this formula is valid
2. Build 3 scenarios where students commonly apply this formula incorrectly — show the wrong answer they get
3. For each scenario, show what formula or approach should actually be used
4. What is the physical meaning of each variable, including what it means when each variable → 0 or → ∞?
5. Which JEE Advanced questions have specifically tested the boundaries of this formula?
```

**Example Input**
```
Take the formula v = u + at from Kinematics.
```

**Optimization Tips**
- Most valuable for: Thermodynamics, Electrostatics, and Optics formulas which have numerous boundary conditions.
- After running this, write the conditions on the same page as the formula in your notes.
- Add: "Create a question that would catch a student who memorised the formula but doesn't understand its limits."

---

### L-08 — Cross-Topic Connection Mapper

**Purpose**
JEE Advanced routinely combines two or three chapters in a single problem. This prompt reveals the hidden bridges between chapters that most students only discover during the exam.

**Prompt**
```
Show me all the important connections between [CHAPTER A] and [CHAPTER B] for JEE.

1. What concepts from Chapter A are prerequisites for Chapter B?
2. What formulas appear in both chapters (even if named differently)?
3. What are 3 classic JEE problems that explicitly require knowledge of both chapters?
4. What is the unified mental model that makes both chapters feel like one topic?
5. What connection between these two chapters do most JEE students miss?

Chapters: [CHAPTER A] and [CHAPTER B]
```

**Example Input**
```
Show me all important connections between Work-Energy Theorem and Rotational Motion for JEE Advanced.
```

**Optimization Tips**
- Use this after finishing both chapters individually, before starting cross-chapter practice.
- Most powerful chapter pairs: Thermodynamics + Kinetic Theory, Electrostatics + Current Electricity, P&C + Probability, Complex Numbers + Coordinate Geometry.
- Add: "Give me a 3-question mini-test that requires both chapters to solve."

---

### L-09 — Derivation Skeleton Builder (Mathematics)

**Purpose**
In JEE Mathematics, knowing a proof's skeleton — the key insight + critical leap — is more useful than memorising the full proof. This prompt extracts exactly that.

**Prompt**
```
For the proof of [THEOREM/RESULT] in JEE Mathematics:

1. What is the single most important insight that makes the proof work?
2. What is the critical "leap" — the non-obvious step that most students would never think of on their own?
3. What does the proof assume that students often forget to verify?
4. Give me a 5-line skeleton of the proof — just the key moves, not every algebraic step
5. How has JEE Advanced tested this proof or its corollaries?

Theorem: [THEOREM NAME]
Chapter: [CHAPTER]
```

**Example Input**
```
For the proof of the AM-GM Inequality in JEE Mathematics...
Chapter: Algebra / Inequalities
```

**Optimization Tips**
- Use this for the 20–25 key proofs in JEE Maths syllabus (Binomial Theorem, De Moivre's, Bayes, etc.)
- After getting the skeleton, reconstruct the full proof from it — this is active recall, not passive reading.
- Add: "What would break if we removed each assumption? Build a counterexample."

---

### L-10 — Daily 30-Minute Topic Launch

**Purpose**
A complete structured session for starting any new chapter — designed to fit into 30 minutes and give enough foundation to immediately start attempting problems.

**Prompt**
```
I have 30 minutes to get started on [TOPIC] for JEE [Main/Advanced]. I'm a beginner on this topic.

Give me a structured 30-minute session:

Minutes 0–10: Core idea
- The one-line essence of this topic
- The physical/mathematical situation it describes
- The 3 most important terms I need to know (defined simply)

Minutes 10–20: Key equations
- The 2–3 master equations (with what each variable means)
- One worked example showing how to use each equation

Minutes 20–30: First practice
- 3 beginner-level problems I can attempt right now
- What to do if I get stuck on each one

At the end: what should I do next in my next session on this topic?
```

**Example Input**
```
I have 30 minutes to get started on Simple Harmonic Motion for JEE Main.
```

**Optimization Tips**
- Run this prompt first thing when opening a new chapter — before NCERT, before videos.
- Set an actual 30-minute timer and follow the structure.
- Save the output and use it as the header page of your chapter notes.

---

## Category 2 — Doubt Solving (10 Prompts)

*Use these when you're stuck on a problem or concept. The hierarchy: hint first → approach → full solution. Never skip to the end.*

---

### D-01 — Hint-Only Doubt Solver

**Purpose**
Get unstuck without getting the answer handed to you. Preserves the productive struggle that builds problem-solving instinct.

**Prompt**
```
I'm stuck on this problem. Do NOT solve it or give me the approach.

Give me only ONE physical or mathematical insight — the minimum nudge that might help me continue. If I don't respond or respond incorrectly, I'll ask for a second hint.

Problem: [PASTE PROBLEM]
My attempt so far: [WHAT YOU'VE TRIED]
Where I'm stuck: [EXACT POINT OF CONFUSION]
```

**Example Input**
```
Problem: A block of mass 2 kg is on a frictionless surface connected to a spring (k = 200 N/m). It's pulled 10 cm and released. Find the velocity when displacement is 6 cm.

My attempt: I tried using v = ω√(A²-x²) but I'm not sure where ω comes from.
Where I'm stuck: I don't know how to get ω from the given information.
```

**Optimization Tips**
- Set a rule: 5 minutes of solo attempt before using this prompt. The struggle matters.
- If the hint doesn't help, ask: "Give me a second hint, slightly more specific than the first."
- Only ask for the full solution after 3 failed attempts — and then log it in your error journal.

---

### D-02 — Concept-vs-Calculation Error Distinguisher

**Purpose**
Identify whether you got a problem wrong due to a conceptual misunderstanding or a calculation slip — these require completely different fixes.

**Prompt**
```
I got this problem wrong. Before giving me the solution, help me understand the nature of my error.

Problem: [PASTE PROBLEM]
My full attempt: [PASTE YOUR WORK]
My final answer: [YOUR ANSWER]
Correct answer: [CORRECT ANSWER]

Please:
1. Identify whether my error was: conceptual (wrong mental model), procedural (right idea, wrong steps), or computational (arithmetic/algebra slip)
2. If conceptual: what specific misconception do I have?
3. If procedural: at exactly which step did I go wrong?
4. If computational: show me the exact calculation that broke

Do NOT give me the full solution yet — only the error diagnosis.
```

**Example Input**
```
Problem: Two resistors R1 = 4Ω and R2 = 6Ω are connected in parallel across 12V. Find the total current.
My attempt: Total resistance = 4+6 = 10Ω. Current = 12/10 = 1.2A.
My answer: 1.2A. Correct answer: 5A.
```

**Optimization Tips**
- This is the most important doubt-solving prompt in this library. Knowing your error type changes what you study next.
- After the diagnosis, ask: "Now give me a question that would catch the same error — I want to make sure I've actually fixed it."
- Log the error type in your error journal. If you see the same error type 3+ times, it's a thinking habit, not a knowledge gap.

---

### D-03 — Multi-Approach Comparator

**Purpose**
After solving a problem, discover if there's a faster or more elegant approach — essential for JEE Advanced where time per question is brutally limited.

**Prompt**
```
I solved this problem using [METHOD I USED]. Here is my solution:

[PASTE YOUR COMPLETE SOLUTION]

Now:
1. Give me 2 alternative valid approaches to this problem
2. For each alternative: show the key steps (not full working)
3. Rank all 3 approaches by: speed under exam conditions, reliability, elegance
4. Which approach would a JEE topper most likely use and why?
5. Is there a 30-second shortcut or observation that makes the full calculation unnecessary?

Problem: [PASTE ORIGINAL PROBLEM]
```

**Example Input**
```
Problem: Find the sum of the series 1² + 2² + 3² + ... + n²
I solved it using Mathematical Induction.
```

**Optimization Tips**
- Use this prompt after getting any problem correct — improvement isn't just about fixing errors.
- Pay special attention to the "30-second shortcut" — these are what JEE toppers see immediately and you want to develop.
- Collect elegant approaches in a separate "beautiful solutions" notebook. Review it before exams.

---

### D-04 — Wrong Option Dissector (MCQ)

**Purpose**
For MCQs, understanding why the three wrong options are wrong is more educational than knowing why the right option is correct. This prompt forces that analysis.

**Prompt**
```
For this MCQ, I chose [YOUR ANSWER] but the correct answer is [CORRECT ANSWER].

Question: [PASTE FULL QUESTION]
Options:
(A) [option]
(B) [option]
(C) [option]
(D) [option]

Please explain:
1. Why is option [CORRECT ANSWER] correct? (with complete reasoning)
2. Why is each wrong option wrong? (give the specific misconception that would lead a student to choose each one)
3. What is the minimum NCERT/textbook knowledge required to answer this correctly?
4. Is this question testing recall, understanding, or application — and how do I study differently for each type?
```

**Example Input**
```
I chose (B) but the correct answer is (D).
Question: Which of the following is NOT a colligative property?
(A) Osmotic pressure  (B) Vapour pressure lowering  (C) Boiling point elevation  (D) Optical rotation
```

**Optimization Tips**
- Run this for every wrong MCQ in every practice session and mock test.
- The "misconception that would lead a student to choose each wrong option" section is gold — it shows you exactly what JEE paper-setters are exploiting.
- Add: "Write this as an Assertion-Reason pair so I can revise it in that format too."

---

### D-05 — Numerical Doubt Solver with Unit Analysis

**Purpose**
For Physics and Physical Chemistry numericals, track down exactly where the calculation went wrong, including unit errors which are the most common source of wrong answers.

**Prompt**
```
I got the wrong numerical answer. Please find my error with full unit analysis at every step.

Problem: [PASTE PROBLEM]

My working (step by step):
[PASTE YOUR COMPLETE WORKING INCLUDING UNITS]

My answer: [YOUR ANSWER WITH UNIT]
Correct answer: [CORRECT ANSWER WITH UNIT]

For each step of my working:
1. Is the physics/formula correct?
2. Is the substitution correct?
3. Is the unit consistent?
4. Is the arithmetic correct?

Mark each step: ✓ correct / ✗ error (explain what broke)
```

**Example Input**
```
Problem: Find the kinetic energy of a 500g ball moving at 10 m/s.
My working:
Step 1: KE = ½mv² 
Step 2: KE = ½ × 500 × 10² = 250,000 J
My answer: 250,000 J. Correct answer: 25 J.
```

**Optimization Tips**
- Always include units in every step of your working — it's the only way Claude can catch unit errors.
- The most common error in Physical Chemistry: not converting grams to moles, or Celsius to Kelvin. Ask Claude to flag these specifically.
- Add: "List the top 5 unit conversion errors that JEE students make in this chapter."

---

### D-06 — Organic Chemistry Mechanism Debugger

**Purpose**
In Organic Chemistry, wrong answers usually come from misunderstanding one step in a mechanism. This prompt finds exactly which step broke your reasoning.

**Prompt**
```
I predicted the wrong product for this Organic Chemistry reaction. Debug my mechanism reasoning.

Reaction: [STARTING MATERIAL] + [REAGENT/CONDITIONS]
My predicted product: [YOUR ANSWER]
Correct product: [CORRECT ANSWER]

My mechanism reasoning: [DESCRIBE YOUR STEP-BY-STEP THINKING]

Please:
1. Identify the exact step where my mechanism went wrong
2. Explain the correct electron movement at that step (in plain language)
3. What rule or principle did I violate? (regioselectivity, Markovnikov, ring opening direction, etc.)
4. Build a similar reaction where the same principle applies — I want to test my fix
```

**Example Input**
```
Reaction: CH3CH=CH2 + HBr (no peroxide)
My predicted product: CH3CH2CH2Br (1-bromopropane)
Correct product: CH3CHBrCH3 (2-bromopropane)
My reasoning: HBr adds across the double bond, Br goes to the first carbon.
```

**Optimization Tips**
- Add "Explain using the concept of carbocation stability, not just the rule name" — rule names without reasoning won't stick.
- After getting the fix, ask for 3 more reactions of the same type and predict products before seeing answers.
- Keep a "mechanism mistakes" log. If you make the same mechanism error twice, it needs a mnemonics or a different mental model.

---

### D-07 — Assertion-Reason Decoder

**Purpose**
Assertion-Reason questions appear in both JEE and NEET and follow a specific logical structure that most students never learn to analyse systematically.

**Prompt**
```
Help me analyse this Assertion-Reason question systematically.

Assertion (A): [PASTE ASSERTION]
Reason (R): [PASTE REASON]

I chose option [YOUR CHOICE] but the answer is [CORRECT OPTION].

The standard options are:
(1) Both A and R are true, and R is the correct explanation of A
(2) Both A and R are true, but R is NOT the correct explanation of A
(3) A is true but R is false
(4) A is false but R may be true or false

Please:
1. Evaluate the truth of A independently (with explanation)
2. Evaluate the truth of R independently (with explanation)
3. If both are true: explain why R does or does not explain A — this is the hardest part
4. What is the minimum knowledge needed to answer this without confusion?
5. What similar A-R pair is commonly confused with this one in JEE?
```

**Example Input**
```
Assertion (A): Noble gases have very high ionisation enthalpies.
Reason (R): Noble gases have completely filled valence orbitals.
I chose option 1 but the answer is option 2.
```

**Optimization Tips**
- The hardest part of A-R questions is step 3 (does R explain A?). Add: "Explain what 'R explains A' means logically — is it a direct causal link, a necessary condition, or a sufficient condition?"
- Generate 10 A-R pairs from any chapter using Prompt R-07 in the Revision section and use this decoder for ones you get wrong.

---

### D-08 — Diagram and Graph Doubt Solver

**Purpose**
For questions involving graphs, ray diagrams, circuit diagrams, or any visual element, this prompt enables accurate doubt solving even when you can only describe the diagram in words.

**Prompt**
```
I'm confused about a [GRAPH/DIAGRAM/CIRCUIT] based problem. I'll describe what I see and what's confusing me.

Diagram description: [DESCRIBE THE GRAPH/DIAGRAM IN DETAIL — axes, labels, shape of curve, components, etc.]

The question asks: [PASTE QUESTION]

What I think the diagram shows: [YOUR INTERPRETATION]
What's confusing me: [EXACT POINT OF CONFUSION]

Please:
1. Confirm or correct my interpretation of the diagram
2. What key information can be extracted from the diagram that I missed?
3. How does that information connect to the question?
4. What is the common mistake students make with this type of diagram?
```

**Example Input**
```
Diagram: A v-t graph. x-axis is time (0 to 6 seconds), y-axis is velocity (-10 to +10 m/s). The line starts at v=+10 at t=0, decreases linearly to v=0 at t=3s, continues to v=-10 at t=5s, then is flat at v=-10 from t=5 to t=6.
Question: Find the total distance travelled.
```

**Optimization Tips**
- Upload a photo of the diagram directly to Claude if possible — it can read most Physics and Chemistry diagrams accurately.
- For circuit diagrams, describe each component and how they're connected before asking the question.
- Add: "What would the graph look like if [one condition changed]? This helps me understand what the graph shape actually means."

---

### D-09 — PYQ Full Solution with Examiner Commentary

**Purpose**
Get a PYQ solved not just for the answer, but with the mindset of the examiner who wrote the question — understanding intent makes future unseen questions easier.

**Prompt**
```
Solve this JEE [Year] [Main/Advanced] question completely, then give me the examiner's perspective.

Question: [PASTE FULL QUESTION]

After the complete solution, please add:
1. What concept is this question fundamentally testing? (one sentence)
2. What did the examiner want to confirm the student understands?
3. What is the trap in this question — the option or result designed to catch a partial understanding?
4. How does this question differ from a textbook problem on the same topic?
5. If the examiner made this question harder, what would they change?
```

**Example Input**
```
Solve this JEE Advanced 2019 question:
A thin spherical shell of radius R has uniform surface charge density σ. A point charge +q is placed at its centre...
[full question text]
```

**Optimization Tips**
- Most valuable when used with questions you got wrong — combine with Prompt D-02 for maximum learning.
- Save the "examiner's intent" sections. They reveal JEE's conceptual themes across years, helping predict future questions.
- Add: "Find a question from a different year that tests the same examiner intent."

---

### D-10 — Confusion Clarifier (Easily Confused Pairs)

**Purpose**
JEE specifically tests pairs of similar-looking concepts where students confuse one for the other. This prompt builds a permanent mental separator between them.

**Prompt**
```
I keep confusing [CONCEPT A] with [CONCEPT B]. Help me build a permanent mental separator.

1. What is the precise definition of each? (avoid vague language)
2. What is the single most important difference between them?
3. Give me a real physical or mathematical scenario where they give different answers — make the difference tangible
4. What is the mnemonic, image, or story I can use to never confuse them again?
5. List 3 JEE questions that specifically exploit this confusion as a trap

Concept A: [CONCEPT A]
Concept B: [CONCEPT B]
```

**Example Input**
```
I keep confusing Interference with Diffraction.
Concept A: Interference
Concept B: Diffraction
```

**Optimization Tips**
- The most common confused pairs in JEE: Interference vs Diffraction, SHM vs UCM (projection), Enthalpy vs Internal Energy, Molarity vs Molality, Mean vs Median.
- After running this prompt, write a 2-line separator in your notes. Review it 3 days later and test yourself.
- Add: "Build an MCQ that would catch a student who confuses these two — make option (A) the answer a confused student would choose."

---

## Category 3 — Revision (10 Prompts)

*Use these 3, 7, 14, and 30 days after learning a topic. Goal: move knowledge from short-term memory to permanent recall.*

---

### R-01 — Spaced Repetition Flashcard Generator

**Purpose**
Generate Anki-ready flashcards that test exactly what JEE tests — formulas with conditions, concept distinctions, and application triggers.

**Prompt**
```
Generate 25 Anki-ready flashcards for JEE [Main/Advanced] — [CHAPTER NAME].

Include all three flashcard types:
Type 1 — Formula cards (10 cards):
Q: [Formula name and when to use it]
A: [Formula + conditions + variables defined]

Type 2 — Concept cards (10 cards):
Q: [Conceptual question — why/how/what happens when...]
A: [Precise one-paragraph answer]

Type 3 — Trap cards (5 cards):
Q: [A common mistake stated as a question — "Is it true that...?"]
A: [Correct the misconception, explain why the trap works]

Format strictly as: Q: [question] | A: [answer]
```

**Example Input**
```
Generate 25 Anki-ready flashcards for JEE Advanced — Thermodynamics.
```

**Optimization Tips**
- Import the output into Anki using the text import feature (pipe-separated format).
- Do not generate more than 25 per chapter per session — spaced repetition works on smaller daily doses.
- Add: "Flag the 5 cards most likely to appear in JEE with (HIGH PRIORITY)."

---

### R-02 — Oral Quiz (One Question at a Time)

**Purpose**
Simulate exam conditions by having Claude quiz you interactively — one question at a time — rather than showing all questions at once.

**Prompt**
```
Quiz me on [CHAPTER/TOPIC] for JEE [Main/Advanced].

Rules:
- Ask me one question at a time
- Wait for my answer before proceeding
- Do not reveal the answer until I have answered (or said "I don't know")
- After all questions, give me a final score and a detailed breakdown of every mistake

Question format: Mix of conceptual (40%), formula-application (40%), and tricky/trap questions (20%)
Total questions: [10–20]

Start with question 1 now.
```

**Example Input**
```
Quiz me on Current Electricity for JEE Main.
Total questions: 15. Start with question 1 now.
```

**Optimization Tips**
- Do not look anything up during the quiz. Treat it as an actual test.
- After the quiz, immediately run Prompt D-02 on every wrong answer.
- Add at the end: "Categorise my mistakes: are they clustered in a specific sub-topic of this chapter?"

---

### R-03 — Revision Priority Ranker

**Purpose**
When you have limited time before a test, this prompt tells you exactly which topics to revise first for maximum marks return.

**Prompt**
```
I need to prioritise my revision for JEE [Main/Advanced].

My situation:
- Exam in: [X days/weeks]
- Time available per day: [X hours]
- Weak topics (low accuracy): [LIST]
- Topics not yet revised: [LIST]
- Topics I'm confident in: [LIST]

Please:
1. Rank all my weak topics by: (JEE marks weightage) × (my weakness score)
2. Flag any topic where a small effort gives disproportionate marks gain (quick wins)
3. Identify topics I should skip or deprioritise given my time constraint
4. Build a day-by-day revision schedule for the next [X] days
5. Tell me what to do in the last 48 hours before the exam

Do not include topics I'm already confident in unless they have very high weightage.
```

**Example Input**
```
Exam in 3 weeks. Available: 5 hours/day.
Weak: Rotational Mechanics, Organic Chemistry (Reactions), Probability.
Not revised: Magnetism, d-block, Differential Equations.
Confident: Mechanics basics, Algebra, Mole Concept.
```

**Optimization Tips**
- Be honest about your weak topics. The output is only as useful as the input is accurate.
- Re-run this prompt every Sunday to update the plan based on the week's progress.
- Add: "If I could only spend 2 hours on revision today, what single topic gives me the most marks?"

---

### R-04 — 10-Minute Chapter Micro-Revision

**Purpose**
A tight 10-minute revision session for any chapter — designed for daily exposure to prevent forgetting, especially for Inorganic Chemistry and Biology.

**Prompt**
```
Give me a 10-minute micro-revision session for [CHAPTER] for JEE.

Structure:
Minutes 0–3 — Core recall (5 rapid-fire questions, no working needed — just key facts/formulas)
Minutes 3–7 — Application check (2 short problems to solve mentally or in 2 lines)
Minutes 7–10 — Trap review (3 common JEE traps from this chapter with the correct thinking)

After I complete it, tell me: what does my performance reveal about which sub-topic needs a deeper session?
```

**Example Input**
```
Give me a 10-minute micro-revision session for d and f Block Elements for JEE Main.
```

**Optimization Tips**
- Use this every morning for a chapter you studied the previous day.
- Run 3 micro-revisions back to back for a "power revision hour" — 3 chapters, 10 minutes each.
- For Inorganic Chemistry, this prompt every morning for 2 weeks can add 15–20 marks in that section alone.

---

### R-05 — Full Chapter Revision in 30 Minutes

**Purpose**
A structured end-to-end chapter revision that covers formulas, concepts, traps, and a mini-test — designed to feel like a chapter has been genuinely reviewed, not just skimmed.

**Prompt**
```
I need to revise [CHAPTER] for JEE [Main/Advanced] in 30 minutes. I've studied this chapter before.

Give me a structured 30-minute revision:

Phase 1 — Formula and concept recall check (10 min)
Ask me 8 recall questions. I'll answer. Show me what I missed.

Phase 2 — Application problems (10 min)
Give me 3 medium-difficulty problems. I'll solve them. Mark my approach.

Phase 3 — Traps and edge cases (10 min)
Show me 5 specific JEE traps from this chapter I need to remember before a test.

End with: confidence score + what I'd focus on if I had 10 more minutes.
```

**Example Input**
```
I need to revise Chemical Equilibrium for JEE Main in 30 minutes.
```

**Optimization Tips**
- Use this the day before a chapter-wise test or 2 days before a full mock.
- Do Phase 1 completely before reading Phase 2 — don't let the problems interfere with the recall check.
- Add: "Compare my performance now to what a JEE Main 160+ scorer would get correct. What's the gap?"

---

### R-06 — Concept Compression Card

**Purpose**
After studying a chapter deeply, compress everything important into a single "card" that can be reviewed in 2 minutes — the ultimate high-density revision tool.

**Prompt**
```
Create a concept compression card for [CHAPTER] for JEE [Main/Advanced].

The card must fit on one page (imagine printing it) and include:

ROW 1 — Core idea (1 sentence): What is this chapter fundamentally about?
ROW 2 — Master equations (3–5 maximum): Formula | Condition | When NOT to use
ROW 3 — Key concepts (5 maximum): Concept | One-line definition | JEE relevance
ROW 4 — Classic trap list (3 maximum): Trap | Why students fall for it | Correct thinking
ROW 5 — Question types (3 maximum): JEE question format | Trigger signal | First step

Format as a clean table or structured layout. Prioritise density over completeness.
```

**Example Input**
```
Create a concept compression card for Optics (Ray Optics + Wave Optics combined) for JEE Advanced.
```

**Optimization Tips**
- Print these cards and keep them in a revision folder.
- Review the entire folder the day before a full mock — 20 chapters × 2 minutes = 40 minutes for the whole syllabus.
- Add: "Mark the 3 items on this card most likely to appear in JEE Main 2025."

---

### R-07 — Assertion-Reason Question Generator

**Purpose**
Generate custom A-R questions for any chapter — excellent for NEET and JEE Chemistry where this format appears regularly.

**Prompt**
```
Generate 10 Assertion-Reason questions for [CHAPTER] at JEE/NEET difficulty level.

Include all four types:
- 3 questions where both A and R are true AND R explains A
- 3 questions where both A and R are true BUT R does NOT explain A (hardest type)
- 2 questions where A is true but R is false
- 2 questions where A is false

For each question:
- Assertion (A): [one factual statement]
- Reason (R): [one factual statement]
- Correct option: (1)/(2)/(3)/(4)
- Brief explanation of why (for my answer key)
```

**Example Input**
```
Generate 10 Assertion-Reason questions for Chemical Bonding at JEE Main difficulty.
```

**Optimization Tips**
- Use these as a timed quiz: give yourself 90 seconds per A-R question (standard JEE pace).
- The "both true but R doesn't explain A" type is what most students get wrong. Spend extra time on those.
- Combine with Prompt D-07 for any A-R questions you get wrong.

---

### R-08 — Error Pattern Analyser

**Purpose**
After accumulating 15–20 wrong answers across practice sessions, this prompt finds the pattern — the systematic thinking error that keeps reappearing.

**Prompt**
```
I'm going to share [X] wrong answers from my recent practice sessions. After reviewing them, identify the pattern in my errors.

For each wrong answer:
Wrong Q [N]: [PASTE QUESTION + YOUR ANSWER + CORRECT ANSWER]

After reviewing all of them, please:
1. What error type appears most frequently? (conceptual / procedural / computational / reading error)
2. Within the most common error type: what specific sub-pattern do you see?
3. Is there a single chapter or topic where my errors cluster?
4. What is the one study action that would fix the most errors most efficiently?
5. Build me a 5-question targeted test designed specifically to fix the most common error pattern you found.
```

**Example Input**
```
[Student pastes 15 wrong answers from their past week of practice across Chemistry]
```

**Optimization Tips**
- Run this once a week using all wrong answers accumulated that week.
- The output is most valuable when you're honest: paste the wrong answer, not the corrected version.
- Add: "What cognitive habit (not knowledge gap) am I likely to have that produces this error pattern?"

---

### R-09 — Pre-Exam 48-Hour Revision Plan

**Purpose**
A personalised, hour-by-hour plan for the 48 hours before a JEE Main or JEE Advanced exam — based on your specific strong and weak areas.

**Prompt**
```
Build me an hour-by-hour revision plan for the 48 hours before my JEE [Main/Advanced] exam.

My profile:
- Strong subjects: [LIST]
- Weak subjects: [LIST]
- Topics I'm most likely to forget under pressure: [LIST]
- Time I wake up: [TIME]
- Exam time: [TIME on Day 2]

Rules for the plan:
- No new topics in the last 24 hours
- Include 7–8 hours of sleep on night 1
- Include meals and breaks (I study better when scheduled)
- Last 2 hours before exam: only revision, no new problems
- Include at least one "confidence session" on my strongest topic

Format as a table: Time | Activity | What specifically to revise/do
```

**Example Input**
```
Strong: Mechanics, Organic Chemistry, Algebra.
Weak: Thermodynamics, Coordination Compounds, P&C.
Might forget under pressure: formulas in Wave Optics.
Wake up: 6:30am. Exam: 9:00am Day 2.
```

**Optimization Tips**
- Run this prompt 2 days before the exam, not the day before — so you actually have time to follow it.
- Add: "What should I absolutely NOT do in the 48 hours before the exam?"
- Print the table and stick it on your desk for those 2 days.

---

### R-10 — Formula Sheet Auto-Generator

**Purpose**
Create a dense, exam-ready formula sheet for any chapter — formatted the way a JEE topper's handwritten sheet looks, not like a textbook.

**Prompt**
```
Create a formula sheet for [CHAPTER] for JEE [Main/Advanced].

For each formula, format as:
Formula: [equation]
Variables: [brief definition of each variable]
Condition: [when this formula applies]
Trap: [most common misapplication in JEE]
Mnemonic: [optional — if one helps]

Sort formulas by: most frequently tested in JEE first.
At the bottom, add a "Derived Results" section for results that can be derived quickly from main formulas (not separate formulas to memorise).

Mark formulas that appear ONLY in JEE Advanced (not Main) with [ADV].
```

**Example Input**
```
Create a formula sheet for Rotational Motion for JEE Advanced.
```

**Optimization Tips**
- Print the formula sheet and keep it visible during practice sessions — not to refer to, but to notice when you reach for it vs recall instantly.
- The "Trap" field is the most important column. These are where JEE extracts marks from students who know the formula.
- Re-generate this sheet 7 days later and compare to your handwritten version to find formulas you've forgotten.

---

## Category 4 — PYQ Analysis (10 Prompts)

*Use these with actual JEE previous year questions. Goal: understand what JEE is actually testing, not just practise problems.*

---

### P-01 — PYQ Deep Dissection

**Purpose**
Extract the maximum learning from a single PYQ — not just the solution, but the examiner's intent, the concept being tested, and what it predicts about future questions.

**Prompt**
```
Fully dissect this JEE PYQ [YEAR] [PAPER].

Question: [PASTE FULL QUESTION]

Give me:
1. Complete solution with every step explained
2. The core concept being tested (one sentence — not the chapter name, but the specific idea)
3. The examiner's intent: what does a student need to understand (not memorise) to solve this?
4. The trap: what would a student who studied this topic but didn't understand it deeply answer?
5. Variations: how could the examiner modify this question in a future year? Give 2 variants
6. Related PYQs: what other years/papers have tested the same core concept?
```

**Example Input**
```
JEE Advanced 2021, Paper 1, Q5:
[Full question text about a spring-block system with a twist in the setup]
```

**Optimization Tips**
- Use this for every PYQ you get wrong. Use Prompt D-09 for PYQs you got right (still valuable).
- Save point 5 (variations) as practice problems for the next session.
- After 10–15 PYQ dissections from one chapter, ask Claude: "What pattern do you see across all these questions about what JEE tests in this chapter?"

---

### P-02 — Chapter-Wise PYQ Pattern Finder

**Purpose**
Identify what JEE has been testing from a specific chapter over the past 10 years — this reveals the chapter's "JEE identity" and predicts future questions.

**Prompt**
```
Analyse JEE [Main/Advanced] PYQ patterns for [CHAPTER] from [YEAR RANGE].

For this chapter:
1. What 3 concepts appear most frequently across all years?
2. What new concepts have been introduced in recent years (2020–2024) that weren't tested before?
3. What concepts appear in JEE Advanced but NOT in JEE Main?
4. What is the difficulty trend — are questions getting harder, easier, or shifting in type?
5. Based on what hasn't been asked recently, what is most likely to appear in the next 1–2 years?
6. What are the 5 most important PYQs from this chapter that every serious JEE aspirant should solve?

Chapter: [CHAPTER]
Exam: JEE [Main/Advanced]
Year range: [e.g., 2015–2024]
```

**Example Input**
```
Analyse JEE Advanced PYQ patterns for Electrostatics from 2015–2024.
```

**Optimization Tips**
- Run this at the start of each chapter to know where to focus your study.
- The "what hasn't been asked recently" output is speculative — treat it as a list to be extra prepared on, not a guarantee.
- Add: "For each frequently tested concept, which specific formula or idea is the non-negotiable thing to master?"

---

### P-03 — PYQ Difficulty Reverse-Engineering

**Purpose**
Understand exactly what makes a JEE Advanced question hard — so you can train to handle that hardness, not just practise medium-level problems.

**Prompt**
```
Reverse-engineer the difficulty of this JEE Advanced PYQ.

Question: [PASTE QUESTION]

Please analyse:
1. At what step does the difficulty start? (the first line is usually accessible — where does it get hard?)
2. What is the non-obvious insight that unlocks the problem? (what a beginner wouldn't see)
3. What prerequisite concepts from other chapters are needed?
4. What is the cognitive load — how many things must a student hold in mind simultaneously?
5. How would a student with 3 months of preparation solve this vs a student with 1 year?
6. What is the minimum level of understanding needed to attempt this question without being lost?
```

**Example Input**
```
[JEE Advanced 2022 Paper 2, a multi-concept problem combining Thermodynamics and Kinetic Theory]
```

**Optimization Tips**
- The "where does it get hard" analysis is the most actionable output. That point is exactly what to train.
- Add: "Build a simpler version of this question that tests the same core insight — so I can build up to the hard version."
- Use this for problems that feel impossible. Often the difficulty is concentrated in one step, not the whole problem.

---

### P-04 — 5-Year Topic Frequency Map

**Purpose**
Build a data-driven picture of marks distribution across the syllabus — so every hour of study is invested in the highest-return topics.

**Prompt**
```
Build a frequency map of JEE [Main/Advanced] questions for [SUBJECT] from the last 5 years.

For each major topic in the syllabus:
1. Approximate number of questions per paper (per year average)
2. Marks weightage (percentage of total subject marks)
3. Difficulty distribution: Easy / Medium / Hard questions from this topic
4. Trend: increasing, decreasing, or stable frequency?

Format as a priority table sorted by: marks weightage × difficulty accessibility

Subject: [Physics / Chemistry / Mathematics]
Exam: JEE [Main/Advanced]
```

**Example Input**
```
Build a frequency map of JEE Main questions for Physics from 2019–2024.
```

**Optimization Tips**
- Use this output to build your chapter priority order for the year's study plan.
- Revisit this every 6 months — JEE paper patterns shift gradually.
- Add: "Which high-weightage topics are also the easiest for a prepared student to score in? These are my first priority."

---

### P-05 — PYQ-to-Concept Mapper

**Purpose**
Given a solved PYQ, identify all the concept building blocks involved — then find gaps in any one of them that would have caused failure.

**Prompt**
```
I solved this PYQ correctly, but I want to understand every concept building block it required.

Question: [PASTE QUESTION]
My solution: [PASTE YOUR SOLUTION]

Please:
1. Map every distinct concept, formula, or technique my solution required (list them all)
2. For each concept: what is the prerequisite concept I'd need to know first?
3. If I didn't know concept [X] from your list, which step in my solution would have broken?
4. Which of these concepts also appear in other JEE chapters? (cross-chapter dependencies)
5. Build a learning dependency map: what order should I have learned all these concepts in?
```

**Example Input**
```
[A JEE question on a rotating body with a changing moment of inertia]
My solution: [student's working]
```

**Optimization Tips**
- Use this with problems you solved by intuition but couldn't fully justify — reveals hidden knowledge gaps.
- The "dependency map" output is useful for identifying what to study next.
- Add: "Which of these concepts would I need to master to solve the hardest version of this question?"

---

### P-06 — PYQ Comparison: Same Concept, Different Years

**Purpose**
See how JEE has evolved in asking the same concept across different years — this shows how the examiner adapts, which helps predict future variations.

**Prompt**
```
Compare these [N] PYQs that all test [CORE CONCEPT] from different years.

PYQ 1 (Year [X]): [PASTE QUESTION]
PYQ 2 (Year [Y]): [PASTE QUESTION]
PYQ 3 (Year [Z]): [PASTE QUESTION]

Please:
1. What core concept is common to all three?
2. How did the question format evolve across years? (surface changes vs depth changes)
3. Did the difficulty increase, decrease, or shift type?
4. What new twist was added in the most recent version?
5. Based on this evolution, what is the most likely format if this concept appears next year?
6. What is the one understanding that would let a student solve all three variants without re-learning anything?
```

**Example Input**
```
Three PYQs on projectile motion:
PYQ 1 (2019): Classic range formula application
PYQ 2 (2021): Projectile on inclined plane
PYQ 3 (2023): Projectile with variable acceleration
```

**Optimization Tips**
- Build this analysis for the 10 most important concepts per subject.
- The "one understanding that solves all variants" is the master concept you should build your study around.
- Add: "Write a new question in this series that would logically come next in difficulty."

---

### P-07 — PYQ Solution Simplification Challenge

**Purpose**
Standard PYQ solutions in textbooks are often slow. This prompt finds the fastest legitimate approach — the type of thinking JEE toppers use under time pressure.

**Prompt**
```
Here is the standard solution for this JEE PYQ. Find a faster or more elegant approach.

Question: [PASTE QUESTION]

Standard solution (from textbook/answer key):
[PASTE STANDARD SOLUTION]

Please:
1. What is the fastest valid approach to this problem?
2. What mathematical or physical shortcut does the fast approach rely on?
3. How many steps does the fastest approach take vs the standard approach?
4. What concept or insight must a student have internalised to see the fast approach immediately?
5. Is there a 30-second "observation" that makes calculation almost unnecessary? If yes, show it.
```

**Example Input**
```
[JEE Main 2023 question on finding centre of mass of a system of particles]
Standard solution: [lengthy algebraic approach using moment equations]
```

**Optimization Tips**
- Run this for every problem where your solution felt long. "Long = slow = fewer questions attempted."
- Collect all the elegant approaches in a "shortcuts notebook." Review before exams.
- Add: "What is the elegant approach achievable for a student who hasn't studied this topic specifically but has strong mathematical intuition?"

---

### P-08 — Year-Wise Difficulty Trend Analyser

**Purpose**
Understand whether JEE Main or Advanced is getting harder or easier in specific topics — important for calibrating practice difficulty.

**Prompt**
```
Analyse the difficulty trend for [CHAPTER/TOPIC] in JEE [Main/Advanced] from [YEAR RANGE].

For each year, categorise the questions from this chapter as:
- Level 1: Straightforward formula application (solvable in under 2 min)
- Level 2: Multi-step with one non-obvious step (solvable in 2–4 min)
- Level 3: Requires insight or cross-chapter knowledge (4+ min)

Then:
1. Has the average difficulty level increased, decreased, or stayed constant?
2. Has the question format shifted (e.g., from numerical to MCQ to integer-type)?
3. What is the current "floor" — the minimum difficulty a student must handle?
4. What difficulty level should I be practising at to be fully prepared?

Topic: [TOPIC]
Year range: [YEARS]
```

**Example Input**
```
Analyse difficulty trend for Probability in JEE Advanced from 2015–2024.
```

**Optimization Tips**
- Use this to calibrate which sources to practise from (HC Verma for Level 2, Irodov for Level 3, etc.)
- If trend shows increasing difficulty, prioritise developing Level 3 ability in that chapter.
- Add: "What proportion of students are expected to solve Level 3 questions from this chapter in a given year?"

---

### P-09 — PYQ Error Root Cause Analysis

**Purpose**
After getting a PYQ wrong, trace the error back to its root — not just what went wrong, but why that gap exists in your preparation.

**Prompt**
```
I got this JEE PYQ wrong. Help me trace the error to its root cause.

Question: [PASTE QUESTION]
My answer: [YOUR ANSWER]
Correct answer: [CORRECT ANSWER]
My full attempt: [PASTE YOUR WORKING]

Please do a 5-layer root cause analysis:
Layer 1: What is the surface error? (what went wrong in my solution)
Layer 2: What concept was I missing or misapplying?
Layer 3: Why do I have that gap? (never learned it / learned it wrong / forgot it)
Layer 4: What study habit or practice gap led to Layer 3?
Layer 5: What single study action would prevent this error from repeating?

End with: a 15-minute targeted exercise to fix this specific error.
```

**Example Input**
```
[A JEE Advanced question on Bayes' Theorem application in probability]
My answer: 1/3. Correct answer: 2/5.
My working: [student's attempt at conditional probability]
```

**Optimization Tips**
- The 5-layer analysis sounds deep, but Layer 4 and 5 are the most actionable. Focus there.
- Run this for PYQs specifically — wrong answers on PYQs are more important to fix than random practice problems.
- Add: "What other PYQs from different years test exactly this Layer 2 concept? I'll do all of them."

---

### P-10 — Full Paper JEE Simulation Debrief

**Purpose**
After attempting a full JEE PYQ paper, get a structured debrief that goes beyond marks — analysing strategy, pacing, and conceptual performance.

**Prompt**
```
I just finished a full JEE [Main/Advanced] [YEAR] paper. Help me debrief.

My performance:
- Physics: [X/Y correct] | Time spent: [Z min] | Questions skipped: [N]
- Chemistry: [X/Y correct] | Time spent: [Z min] | Questions skipped: [N]
- Mathematics: [X/Y correct] | Time spent: [Z min] | Questions skipped: [N]

Questions I got wrong: [LIST QUESTION NUMBERS OR BRIEF TOPIC]
Questions I skipped but knew: [LIST]
Questions I guessed and got lucky: [LIST]
Questions I ran out of time on: [LIST]

Please analyse:
1. Time management: was my time allocation across subjects optimal?
2. Attempt strategy: which skipped questions should I have attempted?
3. Conceptual performance: which chapter clusters have the most errors?
4. Lucky guesses: these are false positives — what do I actually not know there?
5. Single most important thing to improve before the next attempt
```

**Example Input**
```
JEE Main 2023 January Session debrief.
Physics: 15/25, 70 min, 5 skipped.
Chemistry: 18/25, 50 min, 3 skipped.
Mathematics: 10/25, 60 min, 8 skipped.
[rest of performance data]
```

**Optimization Tips**
- Run this prompt within 2 hours of finishing the paper — while the reasoning behind each choice is still fresh.
- The "lucky guesses" section is critically undervalued. These are marks you can't count on repeating.
- Add: "If I had attempted this paper 6 months later with perfect preparation, what score would be reasonable?"

---

## Category 5 — Mock Analysis (10 Prompts)

*Use these after every full-length mock test. A mock without analysis is practice. A mock with analysis is preparation.*

---

### M-01 — Error Categorisation System

**Purpose**
Classify every wrong answer in your mock into a precise error type — this is the essential first step that makes all other analysis possible.

**Prompt**
```
Categorise all my wrong answers from this mock test into error types.

For each wrong answer, please classify it as one of:
Type C — Conceptual gap (wrong mental model or missing concept)
Type P — Procedural error (right concept, wrong steps)
Type A — Arithmetic/algebra slip (right approach, calculation broke)
Type R — Misread question (understood the concept, misread the problem)
Type T — Time pressure (knew it but couldn't execute under pressure)
Type G — Genuine unknown (never learned this)

Wrong answers:
[PASTE ALL WRONG QUESTIONS WITH YOUR ATTEMPTED ANSWERS]

Output format: Q[N]: [brief topic] → Type [X] → [one line explanation]
Final tally: how many of each type?
```

**Example Input**
```
[Student pastes 18 wrong answers from a full JEE mock with their attempted solutions]
```

**Optimization Tips**
- Be honest when categorising — "Type A" is tempting but most errors are actually Type C in disguise.
- Type C and Type G errors need concept repair. Type P needs more practice. Type A needs a checklist. Type R needs slower reading. Use different fixes for different types.
- Add: "Which error type, if fixed, would give me the most additional marks on a similar mock?"

---

### M-02 — Subject-Wise Diagnosis

**Purpose**
Break the mock performance into each subject and each chapter within it — finding the precise sub-topics responsible for the most mark loss.

**Prompt**
```
Diagnose my mock test performance subject by subject and chapter by chapter.

Mock results:
Physics: [score] | Wrong Qs: [list with topics]
Chemistry: [score] | Wrong Qs: [list with topics]  
Mathematics: [score] | Wrong Qs: [list with topics]

For each subject:
1. Overall accuracy and what it means (excellent / needs work / critical)
2. Which chapters had the most errors? (list top 3)
3. Within the worst chapter: was the error in a specific sub-topic?
4. Are errors spread evenly or concentrated? (spread = general unpreparedness; concentrated = specific gap)
5. What is the most efficient single repair for each subject?

Also: which subject, if improved by 20% accuracy, gives me the most rank improvement?
```

**Example Input**
```
Physics: 52/120 | Wrong Qs: SHM (2), Waves (1), Current Electricity (3), Magnetism (4), Modern Physics (2)
Chemistry: 68/120 | Wrong Qs: Electrochemistry (1), Coordination (3), Organic reactions (2)
Mathematics: 44/120 | Wrong Qs: P&C (4), Probability (2), Integral Calc (3), 3D geometry (2)
```

**Optimization Tips**
- When errors are concentrated in one chapter, that chapter needs a full re-study, not just revision.
- The "most rank improvement per subject" question is key — rank points are not evenly distributed.
- Run this for 3 consecutive mocks and ask: "What has stayed consistently weak across all three?"

---

### M-03 — Time Management Audit

**Purpose**
Analyse how you spent time during the mock and identify where minutes were wasted — time management is often worth 20–30 marks in JEE.

**Prompt**
```
Audit my time management from this mock test.

Time data:
Physics: [X min total] | Questions attempted: [N] | Correct: [C] | Wrong: [W] | Skipped: [S]
Questions I spent most time on: [list 3–5 with approximate time each]
Questions I should have skipped but didn't: [your guess]

Chemistry: [same format]
Mathematics: [same format]

Please:
1. Calculate my effective marks per minute for each subject
2. Which questions were "time sinkholes" — I spent long but got wrong or uncertain?
3. What was my opportunity cost — if I'd spent those sinkhole minutes on other questions, what could I have gained?
4. What is my optimal time allocation across subjects for the next mock?
5. Build a rule-based question attempt strategy: "If I can't see the approach in [X] seconds, I should..."
```

**Example Input**
```
Physics: 65 min | Attempted: 22 | Correct: 14 | Wrong: 8 | Skipped: 8
Time sinkholes: Q7 (12 min, got wrong), Q14 (8 min, got right), Q19 (10 min, skipped anyway)
[similar data for Chemistry and Maths]
```

**Optimization Tips**
- Track time per question during every mock — it's only 1 extra minute of effort but enables this entire analysis.
- The "rule-based strategy" output should become your personal exam SOC (Standard Operating Procedure).
- Add: "What is the JEE topper's general rule for when to abandon a question?"

---

### M-04 — Negative Marking Loss Analyser

**Purpose**
Calculate exactly how much negative marking cost you and whether your attempt vs skip decisions were optimal.

**Prompt**
```
Analyse my negative marking losses from this mock.

JEE marking scheme: +4 for correct, -1 for wrong, 0 for skipped

My data:
Correct answers: [N] → +[total marks]
Wrong answers: [N] → -[total marks]
Skipped: [N] → 0

For my wrong answers, classify each:
- Complete guess (no idea)
- Partial knowledge (eliminated 1–2 options)
- Confident but wrong (thought I knew it)

Please:
1. How many marks did I lose to negative marking?
2. For complete guesses: should I have guessed or skipped? (expected value analysis)
3. For "confident but wrong": these are the dangerous category — what does this reveal?
4. What is my personal confidence calibration score? (how often am I right when I feel confident?)
5. Build a personal decision rule: "I should attempt only when..." based on my data
```

**Example Input**
```
Correct: 42 (+168). Wrong: 18 (-18). Skipped: 30 (0). Actual score: 150.
Complete guesses wrong: 5. Partial knowledge wrong: 7. Confident but wrong: 6.
```

**Optimization Tips**
- The "confident but wrong" category is the most valuable insight. These are conceptual misconfidences.
- Expected value for random guessing on 4-option MCQ: +4(0.25) + (-1)(0.75) = +0.25. So random guessing is marginally positive — but your actual data should guide you.
- Add: "For each 'confident but wrong' answer: what specific misconception made me feel confident?"

---

### M-05 — Cross-Mock Pattern Analysis

**Purpose**
After 3 or more mocks, identify structural weaknesses (patterns that persist) vs incidental errors (one-off misses) — these need completely different responses.

**Prompt**
```
I've taken [N] mocks. Identify structural vs incidental weaknesses.

Mock 1 results: [score, wrong topic list]
Mock 2 results: [score, wrong topic list]
Mock 3 results: [score, wrong topic list]
[add more if available]

Please:
1. Which topics appear in wrong answers across 2+ mocks? (structural weaknesses)
2. Which topics appeared only once? (incidental — may not need attention)
3. Which structural weakness has the highest marks impact?
4. Has my overall performance improved, stagnated, or declined across mocks?
5. What is the one intervention (not the whole study plan — one specific action) that would most likely break a structural weakness?

Prioritise: I have [X weeks] remaining before the actual exam.
```

**Example Input**
```
Mock 1 (Score 142): Wrong — Rotational (3), Electrochemistry (2), Probability (4), Coordination (1)
Mock 2 (Score 138): Wrong — Rotational (2), Waves (2), Probability (3), Organic reactions (3)
Mock 3 (Score 147): Wrong — Rotational (3), Thermodynamics (1), Probability (2), Inorganic exceptions (2)
```

**Optimization Tips**
- Structural weaknesses need concept repair + intensive practice — not just more mocks.
- If a weakness has persisted for 3+ mocks, a 1-week focused sprint on that chapter is more valuable than 3 more mocks.
- Add: "Based on 3 mocks, project my score range on the actual exam with and without fixing these structural weaknesses."

---

### M-06 — Score Ceiling Calculator

**Purpose**
Calculate what your score would have been if you'd eliminated specific error types — reveals your true potential and what's worth fixing most urgently.

**Prompt**
```
Calculate my score ceiling on this mock by removing specific error types.

Actual score: [X]

My errors:
- Wrong due to conceptual gaps: [N questions × 5 marks each (4 for correct + 1 saved)]
- Wrong due to calculation slips: [N questions]  
- Wrong due to misreading: [N questions]
- Wrong due to time pressure (knew but rushed): [N questions]
- Skipped but could solve: [N questions]

Please calculate:
1. Score if I had fixed only calculation slips: [X + ?]
2. Score if I had fixed only conceptual gaps: [X + ?]
3. Score if I had fixed only time management (attempted skippables): [X + ?]
4. Score if I had fixed all of the above: [theoretical ceiling]
5. Which single fix gives the highest score improvement?
6. Which fix is most achievable in [X weeks] of preparation?
```

**Example Input**
```
Actual score: 148. Calculation slips: 4 wrong. Conceptual gaps: 7 wrong. Misread: 2 wrong. Time pressure: 3 skipped I knew.
```

**Optimization Tips**
- The gap between actual score and theoretical ceiling is your improvement potential.
- Most students find their ceiling is 40–60 marks above their current score — this is motivating AND actionable.
- Add: "If I improve to [target score], what JEE rank does that approximately correspond to?"

---

### M-07 — Question Attempt Order Optimiser

**Purpose**
Build a personalised question attempt strategy based on your actual mock data — the right attempt order can add 10–20 marks without any new knowledge.

**Prompt**
```
Help me build an optimal question attempt order strategy for JEE [Main/Advanced] based on my mock data.

My mock profile:
Strong topics (highest accuracy): [LIST]
Weak topics (lowest accuracy): [LIST]
My average time per easy question: [X min]
My average time per hard question: [Y min]
I typically spend too long on: [TYPE OF QUESTION — numerical / conceptual / graph-based]
My best subject: [SUBJECT]
My best time of the exam (when I'm sharpest): [first 30 min / middle / end]

Please design:
1. My personal first-pass strategy (which questions to attempt first)
2. How to decide when a question gets a skip
3. How to handle the last 15 minutes (finish vs guess vs leave)
4. Subject-switching timing for a 3-hour paper
5. What to do if my first-choice strategy breaks down mid-paper
```

**Example Input**
```
Strong: Mechanics, Organic Chemistry, Coordinate Geometry.
Weak: Thermodynamics, Electrochemistry, P&C.
I spend too long on: long numerical problems in Physics.
Best subject: Chemistry. Sharpest: first 40 minutes.
```

**Optimization Tips**
- Test this strategy in your next 2–3 mocks before the real exam.
- Add: "What does the average JEE AIR 100–500 scorer's attempt order look like vs mine?"
- Refine the strategy after every mock using data, not intuition.

---

### M-08 — 7-Day Mock Repair Plan

**Purpose**
Convert your mock's error analysis directly into a concrete, day-by-day study plan — so the analysis always leads to action.

**Prompt**
```
Build a 7-day repair plan based on my mock analysis.

Mock performance:
Score: [X]
Top 3 error chapters (with error count):
1. [Chapter]: [N errors] — Error type: [C/P/A/R/T/G]
2. [Chapter]: [N errors] — Error type: [C/P/A/R/T/G]  
3. [Chapter]: [N errors] — Error type: [C/P/A/R/T/G]

Available study time per day: [X hours]
Next mock in: [7 days]

Build a day-by-day plan that:
- Day 1–3: Concept repair for the worst chapters
- Day 4–5: Targeted practice (chapter-wise tests)
- Day 6: Mixed mock conditions — practise 30 problems under time pressure
- Day 7: Light revision only — no new content

For each day: specific chapter + what to do (re-read / problem sets / flashcards) + time allocation
```

**Example Input**
```
Score: 148. Top error chapters:
1. Rotational Mechanics: 4 errors — Type C (concept gaps)
2. Probability: 3 errors — Type P (procedural, wrong formula choice)
3. Coordination Compounds: 3 errors — Type G (never properly studied)
Available: 5 hours/day. Next mock in 7 days.
```

**Optimization Tips**
- Follow the plan exactly for 7 days and track how the targeted chapters perform in the next mock.
- If the same chapter appears in the repair plan 3 mocks in a row, escalate to a full chapter restart.
- Add: "What is the most important thing to NOT do in this 7-day plan? (i.e., what study activity would waste time)"

---

### M-09 — Confidence Calibration Test

**Purpose**
Measure the gap between your subjective confidence and actual accuracy — poorly calibrated confidence is one of the biggest sources of JEE mark loss.

**Prompt**
```
Help me measure my confidence calibration from this mock.

For each answer I gave in the mock, I'll rate my confidence at the time of answering:
High confidence (I was sure): [List question numbers + correct/wrong]
Medium confidence (I thought I knew): [List question numbers + correct/wrong]
Low confidence (I guessed): [List question numbers + correct/wrong]

Please calculate:
1. Accuracy when I said "high confidence": [X%] — should be 90%+ if well-calibrated
2. Accuracy when I said "medium confidence": [X%] — should be 60–70%
3. Accuracy when I said "low confidence": [X%] — should be ~25–40%

Analysis:
4. Am I overconfident (high confidence but low accuracy) or underconfident (low confidence but high accuracy)?
5. What does this mean for my exam strategy? (should I attempt more / fewer questions?)
6. For my high-confidence wrong answers: what type of conceptual overconfidence do I have?
```

**Example Input**
```
High confidence answers: Q3✓ Q7✓ Q11✗ Q15✓ Q19✗ Q23✓ Q27✗ (correct: 4/7 = 57%)
Medium confidence: Q2✓ Q6✗ Q10✓ Q14✓ Q18✗ Q22✓ (correct: 4/6 = 67%)
Low confidence: Q4✗ Q8✗ Q12✓ Q16✗ Q20✓ (correct: 2/5 = 40%)
```

**Optimization Tips**
- Start tracking confidence levels (H/M/L) during every mock from now on. It takes 30 extra seconds per question.
- If your high-confidence accuracy is below 80%, you have a deep conceptual issue — not a practice issue.
- Add: "Build me a 5-question test specifically targeting the type of concept that caused my high-confidence wrong answers."

---

### M-10 — Exam-Day Readiness Evaluator

**Purpose**
After a series of mocks, assess your actual readiness for JEE — a realistic, data-based evaluation with specific remaining actions.

**Prompt**
```
Evaluate my JEE [Main/Advanced] exam readiness based on my recent mock data.

My last 3–5 mock scores: [LIST]
Best score: [X] | Worst score: [Y] | Most recent: [Z]
Consistent weak areas: [LIST]
Consistent strong areas: [LIST]
Days remaining until actual exam: [N]

Please evaluate:
1. Score range I'm likely to achieve on the actual exam (with reasoning)
2. What accounts for the variance between my best and worst score?
3. What is my "floor" — the score I can almost certainly guarantee?
4. What is my "ceiling" — the score I can reach if everything goes right?
5. Which of my remaining weak areas can realistically be fixed before the exam vs which should I accept and move on?
6. The single most important thing I should do with the remaining [N] days

Be honest — do not inflate my readiness. I need a realistic picture.
```

**Example Input**
```
Last 5 mocks: 148, 155, 143, 162, 158.
Best: 162. Worst: 143. Most recent: 158.
Consistent weak: Rotational Mechanics, Probability, Inorganic (d-block).
Consistent strong: Mechanics basics, Organic Chemistry, Calculus.
Days remaining: 22.
```

**Optimization Tips**
- The variance between best and worst score is as important as the average. High variance means inconsistent execution — this is fixable with strategy.
- "Realistic picture" often means accepting some weak chapters as lost causes and concentrating energy on medium-strength chapters with high potential.
- Run this prompt every 2 weeks until the exam and track how your readiness evolves.

---

## Quick Reference: Prompt Index

| # | Title | Category | Best Use Time |
|---|-------|----------|---------------|
| L-01 | First-Principles Concept Builder | Learning | Start of chapter |
| L-02 | Technique Identification Trainer | Learning | After basics |
| L-03 | Feynman Gap-Finder | Learning | 24hrs after learning |
| L-04 | Geometric Intuition Builder | Learning | Maths chapters |
| L-05 | Reaction Mechanism Narrator | Learning | Organic Chemistry |
| L-06 | NCERT Testable Fact Extractor | Learning | Before reading |
| L-07 | Formula Stress-Tester | Learning | After formulas |
| L-08 | Cross-Topic Connection Mapper | Learning | After both chapters |
| L-09 | Derivation Skeleton Builder | Learning | Maths proofs |
| L-10 | Daily 30-Minute Topic Launch | Learning | First session |
| D-01 | Hint-Only Doubt Solver | Doubt Solving | When stuck |
| D-02 | Concept-vs-Calculation Error Distinguisher | Doubt Solving | After wrong answer |
| D-03 | Multi-Approach Comparator | Doubt Solving | After correct answer |
| D-04 | Wrong Option Dissector | Doubt Solving | MCQ errors |
| D-05 | Numerical Doubt Solver with Unit Analysis | Doubt Solving | Physics/Chem numericals |
| D-06 | Organic Chemistry Mechanism Debugger | Doubt Solving | Wrong Organic product |
| D-07 | Assertion-Reason Decoder | Doubt Solving | A-R errors |
| D-08 | Diagram and Graph Doubt Solver | Doubt Solving | Visual question errors |
| D-09 | PYQ Full Solution with Examiner Commentary | Doubt Solving | PYQ errors |
| D-10 | Confusion Clarifier | Doubt Solving | Easily confused pairs |
| R-01 | Spaced Repetition Flashcard Generator | Revision | Day 3 after learning |
| R-02 | Oral Quiz (One Question at a Time) | Revision | Day 7 after learning |
| R-03 | Revision Priority Ranker | Revision | Low on time |
| R-04 | 10-Minute Chapter Micro-Revision | Revision | Daily exposure |
| R-05 | Full Chapter Revision in 30 Minutes | Revision | Pre-test |
| R-06 | Concept Compression Card | Revision | End of chapter |
| R-07 | Assertion-Reason Question Generator | Revision | Chemistry chapters |
| R-08 | Error Pattern Analyser | Revision | Weekly review |
| R-09 | Pre-Exam 48-Hour Revision Plan | Revision | 2 days before exam |
| R-10 | Formula Sheet Auto-Generator | Revision | End of chapter |
| P-01 | PYQ Deep Dissection | PYQ Analysis | After wrong PYQ |
| P-02 | Chapter-Wise PYQ Pattern Finder | PYQ Analysis | Chapter start |
| P-03 | PYQ Difficulty Reverse-Engineering | PYQ Analysis | Hard questions |
| P-04 | 5-Year Topic Frequency Map | PYQ Analysis | Study planning |
| P-05 | PYQ-to-Concept Mapper | PYQ Analysis | After right PYQ |
| P-06 | PYQ Comparison: Same Concept Different Years | PYQ Analysis | Pattern study |
| P-07 | PYQ Solution Simplification Challenge | PYQ Analysis | After standard solution |
| P-08 | Year-Wise Difficulty Trend Analyser | PYQ Analysis | Practice calibration |
| P-09 | PYQ Error Root Cause Analysis | PYQ Analysis | Deep error analysis |
| P-10 | Full Paper JEE Simulation Debrief | PYQ Analysis | After full paper attempt |
| M-01 | Error Categorisation System | Mock Analysis | Immediately after mock |
| M-02 | Subject-Wise Diagnosis | Mock Analysis | After mock |
| M-03 | Time Management Audit | Mock Analysis | After mock |
| M-04 | Negative Marking Loss Analyser | Mock Analysis | After mock |
| M-05 | Cross-Mock Pattern Analysis | Mock Analysis | After 3rd mock |
| M-06 | Score Ceiling Calculator | Mock Analysis | After mock |
| M-07 | Question Attempt Order Optimiser | Mock Analysis | Strategy building |
| M-08 | 7-Day Mock Repair Plan | Mock Analysis | Day after mock |
| M-09 | Confidence Calibration Test | Mock Analysis | After mock |
| M-10 | Exam-Day Readiness Evaluator | Mock Analysis | Every 2 weeks |

---

## Recommended Workflow Integration

**Daily (30 min):** L-10 (new topic) + D-01/D-02 (doubt solving) + R-04 (micro-revision)

**Weekly (2 hrs):** R-08 (error pattern review) + R-03 (priority update) + P-01 for 3 PYQs

**After every mock (2–3 hrs):** M-01 → M-02 → M-03 → M-04 → M-08

**After 3 mocks:** M-05 + M-10

**Chapter start:** P-02 + P-04 (know what JEE tests before you study)

**Chapter end:** R-06 + R-10 (compression card + formula sheet)

---

*AI Atlas — Free AI Education for Every Student*
*Platform: ai-atlas.com | Tools used: Claude, ChatGPT (free tier), Gemini (free tier)*
