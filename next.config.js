module.exports = {
  reactStrictMode: true,
  images: {
    domains: [new URL(process.env.SUPABASE_URL).host],
  },
};
