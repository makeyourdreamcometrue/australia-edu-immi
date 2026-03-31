/**
 * Auto-deploy script for Vercel
 * Usage: node scripts/deploy.js
 */

const DEPLOY_HOOK = "https://api.vercel.com/v1/integrations/deploy/prj_D0kJDLeqbxlICE0UVBAc5qRLf9JH/MlOZ6IVmkw";
const PROJECT_NAME = "australia-edu-immi";

async function deploy() {
  console.log(`🚀 Triggering deployment for ${PROJECT_NAME}...`);
  
  try {
    const response = await fetch(DEPLOY_HOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok || response.status === 201) {
      console.log("✅ Deployment triggered successfully!");
    } else {
      const error = await response.text();
      console.log("❌ Deployment failed:", error);
    }
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

// Run if called directly
if (require.main === module) {
  deploy();
}

module.exports = { deploy };