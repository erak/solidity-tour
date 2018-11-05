#!/bin/sh

DIR=$(dirname "$0")

# Clean up.
rm -rf public

# Create worktree with gh-pages checked out, such that /public can be pushed. 
git worktree add -B gh-pages public origin/gh-pages --force

# Bundle up node.js part and publish to static folder.
browserify themes/solidity-tour/app/index.js > themes/solidity-tour/static/js/bundle.js

# Generate static page.
hugo

# Commit and push to gh-pages branch.
cd public && git add --all && git commit -m "Publishing to gh-pages" && cd ..
git push origin gh-pages