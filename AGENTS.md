# Project Agent Instructions

## Vercel Access

- Use `VERCEL_TOKEN` for Vercel operations in this project. Do not run interactive `vercel login`.
- Prefer non-interactive Vercel CLI commands with `--token "$VERCEL_TOKEN"` when the CLI is available.
- If the Vercel CLI is unavailable, use the Vercel REST API with the `Authorization: Bearer $VERCEL_TOKEN` header.
- Use the linked project metadata in `.vercel/project.json` for `projectId`, `orgId` / `teamId`, and project name. Do not invent or substitute these IDs.
- Do not write token values, secret environment variable values, or access-code values to files, README/docs, commit messages, issue comments, PR descriptions, terminal output, or logs.
- When reporting Vercel status to the user, include only non-sensitive deployment metadata such as deployment id, state, target, commit SHA, aliases, and public deployment URLs.
