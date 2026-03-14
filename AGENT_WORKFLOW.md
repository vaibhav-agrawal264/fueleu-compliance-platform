# AI Agent Workflow Log

## Agents Used

The following AI agents were used during development:

* ChatGPT (architecture design, debugging, implementation guidance)
* GitHub Copilot (code completion and boilerplate generation)

---

## Example Prompt 1

Prompt:
"Generate a Node.js Express route to calculate compliance balance using a target GHG intensity."

Generated Output:
A function implementing the formula:

```
CB = (Target − Actual) × Energy
```

The code was modified to match the project's domain model and database schema.

---

## Example Prompt 2

Prompt:
"Create a React table component to display route data from an API."

The generated React component was adapted to follow the project's **hexagonal architecture** structure.

---

## Validation and Corrections

AI-generated code was carefully reviewed and corrected.

Key validation steps:

* Testing APIs using Postman
* Verifying database queries using Prisma Studio
* Ensuring TypeScript types were correct
* Adjusting imports to support strict TypeScript configuration

---

## Observations

### Where AI Helped

* Rapid scaffolding of project structure
* Generating initial boilerplate code
* Debugging TypeScript issues
* Implementing frontend UI components

### Where AI Failed

Some generated code required corrections:

* Incorrect TypeScript imports
* Missing Prisma types
* Minor API structure mismatches

These issues were manually corrected.

---

## Best Practices Followed

* Modular architecture
* Separation of domain and infrastructure
* Type-safe TypeScript development
* Incremental development with Git commits
