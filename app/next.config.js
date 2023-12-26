/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SUPABASE_URL: "https://rnujfvxzbuakkiwvspra.supabase.co",
        NEXT_PUBLIC_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJudWpmdnh6YnVha2tpd3ZzcHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NzY5MDUsImV4cCI6MjAwNzM1MjkwNX0.YQBCwbYGnH_Qn6Bua_LUuxZiaK4i3Z4QK73J7n2_hQw"
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }
    
        return config
      }
}

module.exports = nextConfig
