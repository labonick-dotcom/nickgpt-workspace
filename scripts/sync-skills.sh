#!/bin/bash
# Sync plugin-skills to workspace/skills and push to GitHub
PLUGIN_DIR="/root/.openclaw/plugin-skills"
WORKSPACE_DIR="/root/.openclaw/workspace"

rsync -a --delete \
  --exclude='browser-automation' \
  --exclude='google-workspace' \
  --exclude='coaching-project-build' \
  "$PLUGIN_DIR/" "$WORKSPACE_DIR/skills/"

cd "$WORKSPACE_DIR"
git add -A
git diff --cached --quiet || (git commit -m "Auto-sync skills: $(date -u '+%Y-%m-%d %H:%M UTC')" && git push)
