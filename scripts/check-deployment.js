const fs = require("fs")
const path = require("path")

console.log("🔍 EdTechie Website Deployment Checker")
console.log("=====================================\n")

// Check for common deployment files
const deploymentFiles = [
  "vercel.json",
  "netlify.toml",
  ".vercel/project.json",
  ".netlify/state.json",
  "next.config.mjs",
  "package.json",
]

console.log("📁 Checking deployment configuration files...")
deploymentFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} found`)
  } else {
    console.log(`❌ ${file} not found`)
  }
})

// Check package.json scripts
console.log("\n📜 Checking package.json scripts...")
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
  const requiredScripts = ["dev", "build", "start"]

  requiredScripts.forEach((script) => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`✅ ${script} script found: ${packageJson.scripts[script]}`)
    } else {
      console.log(`❌ ${script} script missing`)
    }
  })

  // Check dependencies
  console.log("\n📦 Checking critical dependencies...")
  const criticalDeps = ["next", "react", "react-dom"]

  criticalDeps.forEach((dep) => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`)
    } else {
      console.log(`❌ ${dep} missing from dependencies`)
    }
  })
} catch (error) {
  console.log("❌ Error reading package.json:", error.message)
}

// Check for common issues
console.log("\n🔧 Checking for common issues...")

// Check if .next exists (build output)
if (fs.existsSync(".next")) {
  console.log("✅ .next build directory exists")
} else {
  console.log("⚠️  .next build directory not found - run npm run build")
}

// Check if node_modules exists
if (fs.existsSync("node_modules")) {
  console.log("✅ node_modules directory exists")
} else {
  console.log("❌ node_modules directory not found - run npm install")
}

// Check for TypeScript config
if (fs.existsSync("tsconfig.json")) {
  console.log("✅ TypeScript configuration found")
} else {
  console.log("⚠️  TypeScript configuration not found")
}

// Check for environment files
const envFiles = [".env", ".env.local", ".env.production"]
console.log("\n🔐 Checking environment files...")
envFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} found`)
  } else {
    console.log(`ℹ️  ${file} not found (may not be needed)`)
  }
})

console.log("\n💡 Next steps:")
console.log("1. Run the bash troubleshooting script: bash scripts/troubleshoot-deployment.sh")
console.log("2. Check your deployment platform dashboard")
console.log("3. Verify your git repository is connected correctly")
console.log("4. Test local build with: npm run build")
