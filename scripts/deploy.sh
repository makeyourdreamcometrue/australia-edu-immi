#!/bin/bash
# Deploy trigger script for Vercel
# Usage: ./deploy.sh

VERCEL_DEPLOY_HOOK="YOUR_DEPLOY_HOOK_URL"

echo "Triggering Vercel deployment..."
curl -X POST "$VERCEL_DEPLOY_HOOK"
echo ""
echo "Deployment triggered!"