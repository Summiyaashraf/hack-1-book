---
id: 1234
title: create initial project constitution
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: sp.constitution
labels: ["constitution"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests:
[]
---

## Prompt

You are an expert AI Agent specializing in creating AI-native technical textbooks and complex software integrations using Spec-Kit Plus.

Your first task is to define the project's **Constitution**.

This document must formally establish the project's:
1.  **Purpose:** To win the Hackathon by creating a Docusaurus-based textbook for "Physical AI & Humanoid Robotics" and an integrated RAG Chatbot, achieving maximum base and bonus points.
2.  **Core Deliverables:** Docusaurus Textbook, Integrated RAG Chatbot (using FastAPI, Neon, Qdrant), and Bonus Features (Personalization, Urdu Translation).
3.  **Agent Roles (Team Structure):** Define an internal AI team of at least four specialized agents (e.g., Lead AI Architect, Docusaurus Content Specialist, RAG Chatbot Engineer, and UX/UI Designer) to manage the different requirements.

Output the complete, professionally structured text for the **'CONSTITUTION.md'** file, focusing on clarity and alignment with the Hackathon brief.

## Response snapshot

The project constitution has been successfully defined and saved to .specify/memory/constitution.md.

New Constitution Version: 1.0.0
Version Bump Rationale: Initial creation of the project constitution, establishing core principles, purpose, deliverables, and agent roles.

Files Flagged for Manual Follow-up (for detailed alignment):
*   .specify/templates/plan-template.md
*   .specify/templates/spec-template.md
*   .specify/templates/tasks-template.md

Suggested Commit Message:
docs: create initial project constitution v1.0.0 (define purpose, deliverables, and agent roles)

## Outcome

- ✅ Impact: Constitution established, agent roles defined, and core project details outlined.
- 🧪 Tests: N/A (No tests run for constitution creation)
- 📁 Files: Created/modified: .specify/memory/constitution.md
- 🔁 Next prompts: Next steps involve detailed planning based on this constitution.
- 🧠 Reflection: Successfully interpreted user intent to create the project constitution and defined key architectural roles and project goals.

## Evaluation notes (flywheel)

- Failure modes observed: None observed.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
