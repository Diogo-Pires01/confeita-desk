import 'dotenv/config';

// @ts-ignore - @prisma/config dist types not published in 7.7.0
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env['DIRECT_URL']!,
  },
});
