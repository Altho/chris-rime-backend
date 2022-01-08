module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '27a8b15c499a617a74a665be746e6d04'),
  },
});
