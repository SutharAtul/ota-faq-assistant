# OTA FAQ Assistant

> An independent, reusable OTA AI-Powered FAQ Knowledge Service — TypeScript monorepo.

## Monorepo Structure

```
ota-faq-assistant/
├── apps/
│   ├── api/                   # Node.js REST API (Fastify)
│   ├── admin-console/         # React admin dashboard
│   └── playground/            # Interactive SDK sandbox
├── packages/
│   ├── contracts/             # Shared TypeScript types (requests, responses, entities)
│   ├── core/                  # Core RAG pipeline logic
│   ├── react-sdk/             # Embeddable React component library
│   └── provider-adapters/     # LLM / embedding / vector-search adapters
├── infrastructure/
│   ├── docker/                # Dockerfiles and compose files
│   ├── database/              # Migrations and indexes
│   └── deployment/            # Deployment manifests
├── docs/
│   ├── architecture/          # Architecture decision records
│   ├── api/                   # API reference docs
│   ├── development/           # Developer guides
│   ├── decisions/             # ADRs
│   └── reviews/               # Step-by-step engineering review notes
└── tests/
    ├── integration/           # Cross-service integration tests
    ├── e2e/                   # End-to-end tests
    └── evaluation/            # RAG pipeline evaluation
```

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 20.x |
| npm | ≥ 10.x |

## Getting Started

```bash
# Install all workspace dependencies
npm install

# Check all TypeScript
npm run typecheck

# Lint
npm run lint

# Format
npm run format
```

## Workspace Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build all workspaces |
| `npm run dev` | Start all workspaces in dev mode |
| `npm run lint` | Lint entire monorepo |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run format` | Format all source files |
| `npm run format:check` | Check formatting without writing |
| `npm run typecheck` | TypeScript check (dry build) |
| `npm test` | Run all workspace tests |

## Package Naming Convention

All workspace packages use the `@ota-faq-assistant/` scope.

## License

Private — All Rights Reserved.
