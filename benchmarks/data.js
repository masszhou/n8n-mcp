window.BENCHMARK_DATA = {
  "lastUpdate": 1767800974508,
  "repoUrl": "https://github.com/masszhou/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "861005eeedf880be2489bc197b85a385735c0356",
          "message": "fix: deprecate USE_FIXED_HTTP for SSE streaming support (Issue #524) (#525)\n\n* fix: deprecate USE_FIXED_HTTP for SSE streaming support (Issue #524)\n\nThe fixed HTTP implementation does not support SSE streaming required\nby clients like OpenAI Codex. This commit deprecates USE_FIXED_HTTP\nand makes SingleSessionHTTPServer the default.\n\nChanges:\n- Add deprecation warnings in src/mcp/index.ts and src/http-server.ts\n- Remove USE_FIXED_HTTP from docker-compose.yml and Dockerfile.railway\n- Update .env.example with deprecation notice\n- Rename npm script to start:http:fixed:deprecated\n- Update all documentation to remove USE_FIXED_HTTP references\n- Mark test case as deprecated\n\nUsers should unset USE_FIXED_HTTP to use the modern SingleSessionHTTPServer\nwhich supports both JSON-RPC and SSE streaming.\n\nCloses #524\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* chore: bump version to 2.31.8 and add CHANGELOG entry\n\n- Fix comment inaccuracy: \"deprecated\" not \"deprecated and removed\"\n- Bump version from 2.31.7 to 2.31.8\n- Add CHANGELOG entry documenting USE_FIXED_HTTP deprecation\n- Update all deprecation messages to reference v2.31.8\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-07T13:42:16+01:00",
          "tree_id": "1675efb5c222304f76aa99a4ee1dd8396056b1ac",
          "url": "https://github.com/masszhou/n8n-mcp/commit/861005eeedf880be2489bc197b85a385735c0356"
        },
        "date": 1767800973785,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}