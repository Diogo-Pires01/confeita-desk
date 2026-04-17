import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client/generated/prisma';

const prisma = new PrismaClient();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await prisma.user.upsert({
          where: { googleId: profile.id },
          update: {
            name: profile.displayName,
            picture: profile.photos?.[0]?.value,
          },
          create: {
            googleId: profile.id,
            email: profile.emails?.[0]?.value ?? '',
            name: profile.displayName,
            picture: profile.photos?.[0]?.value,
          },
        });

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);

// Quando estiver sem SSL, rodar:
// npx prisma generate (to generate the Prisma client after defining the schema)
// npx prisma migrate dev --name create_user (to create the user table with googleId, email, name, picture fields)
