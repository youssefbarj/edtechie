#!/bin/bash

echo "🔍 EdTechie Website Deployment Troubleshooting"
echo "=============================================="
echo ""

# Check if we're in a git repository
echo "1. Checking Git Repository Status..."
if [ -d ".git" ]; then
    echo "✅ Git repository found"
    
    # Check git status
    echo ""
    echo "📋 Git Status:"
    git status
    
    echo ""
    echo "📝 Recent Commits:"
    git log --oneline -5
    
    echo ""
    echo "🌐 Remote Repositories:"
    git remote -v
    
    echo ""
    echo "🌿 Current Branch:"
    git branch --show-current
    
else
    echo "❌ Not a git repository. Run 'git init' first."
    exit 1
fi

echo ""
echo "2. Checking Node.js Environment..."
echo "Node.js version: $(node --version)"
echo "NPM version: $(npm --version)"

echo ""
echo "3. Checking Package Dependencies..."
if [ -f "package.json" ]; then
    echo "✅ package.json found"
    
    # Check if node_modules exists
    if [ -d "node_modules" ]; then
        echo "✅ node_modules directory exists"
    else
        echo "⚠️  node_modules not found. Running npm install..."
        npm install
    fi
    
    # Check for package-lock.json
    if [ -f "package-lock.json" ]; then
        echo "✅ package-lock.json found"
    else
        echo "⚠️  package-lock.json not found"
    fi
else
    echo "❌ package.json not found"
    exit 1
fi

echo ""
echo "4. Testing Local Build..."
echo "Running npm run build..."
if npm run build; then
    echo "✅ Build successful"
else
    echo "❌ Build failed - check errors above"
    exit 1
fi

echo ""
echo "5. Checking TypeScript..."
if npm run type-check 2>/dev/null; then
    echo "✅ TypeScript check passed"
else
    echo "⚠️  TypeScript issues found (or no type-check script)"
fi

echo ""
echo "6. Checking Linting..."
if npm run lint 2>/dev/null; then
    echo "✅ Linting passed"
else
    echo "⚠️  Linting issues found (or no lint script)"
fi

echo ""
echo "7. Testing Git Push..."
echo "Checking if we can push to remote..."

# Check if there are uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo "⚠️  Uncommitted changes found:"
    git status --short
    echo ""
    echo "💡 Suggestion: Commit your changes first:"
    echo "   git add ."
    echo "   git commit -m 'Update website'"
    echo "   git push origin main"
else
    echo "✅ No uncommitted changes"
    
    # Try to fetch from remote
    if git fetch origin 2>/dev/null; then
        echo "✅ Can connect to remote repository"
        
        # Check if local is behind remote
        LOCAL=$(git rev-parse @)
        REMOTE=$(git rev-parse @{u} 2>/dev/null)
        
        if [ "$LOCAL" = "$REMOTE" ]; then
            echo "✅ Local branch is up to date"
        else
            echo "⚠️  Local branch is not in sync with remote"
            echo "💡 Try: git pull origin main"
        fi
    else
        echo "❌ Cannot connect to remote repository"
        echo "💡 Check your internet connection and authentication"
    fi
fi

echo ""
echo "8. Deployment Platform Check..."

# Check for Vercel
if [ -f "vercel.json" ] || [ -d ".vercel" ]; then
    echo "🚀 Vercel deployment detected"
    echo "💡 Check your Vercel dashboard for deployment status"
    echo "   https://vercel.com/dashboard"
fi

# Check for Netlify
if [ -f "netlify.toml" ] || [ -d ".netlify" ]; then
    echo "🚀 Netlify deployment detected"
    echo "💡 Check your Netlify dashboard for deployment status"
    echo "   https://app.netlify.com/"
fi

# Check for GitHub Pages
if [ -f ".github/workflows/deploy.yml" ] || [ -f ".github/workflows/pages.yml" ]; then
    echo "🚀 GitHub Pages deployment detected"
    echo "💡 Check GitHub Actions tab for deployment status"
fi

echo ""
echo "9. Common Issues & Solutions..."
echo "❓ If you're still having issues, try these:"
echo ""
echo "🔐 Authentication Issues:"
echo "   - GitHub: Generate new personal access token"
echo "   - SSH: Check ssh-add -l and ssh -T git@github.com"
echo ""
echo "🏗️  Build Issues:"
echo "   - Delete node_modules and package-lock.json"
echo "   - Run npm install again"
echo "   - Check for TypeScript errors"
echo ""
echo "🌐 Deployment Issues:"
echo "   - Check deployment platform dashboard"
echo "   - Verify environment variables"
echo "   - Check build logs for errors"
echo ""
echo "📝 Git Issues:"
echo "   - git reset --hard HEAD (careful!)"
echo "   - git clean -fd"
echo "   - git pull origin main --rebase"

echo ""
echo "✨ Troubleshooting complete!"
