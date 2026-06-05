import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { prisma } from '../../lib/prisma.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env['GOOGLE_CALLBACK_URL'] || '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await prisma.user.upsert({
          where: { googleId: profile.id },
          update: {
            name: profile.displayName,
            picture: profile.photos?.[0]?.value ?? null,
          },
          create: {
            googleId: profile.id,
            email: profile.emails?.[0]?.value ?? '',
            name: profile.displayName,
            picture: profile.photos?.[0]?.value ?? null,
          },
        });

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);
