import { faker } from '@faker-js/faker';
import { defineConfig } from 'orval';

export default defineConfig({
    myApi: {
      output: {
        client: 'fetch', 
        mode: 'tags-split',
        target: 'app/gen/petstore.ts', 
        schemas: 'app/gen/models',
        mock: true,
        prettier:true,
        baseUrl:'http://localhost:3000',
        override: {
          mutator: {
            path: './custom-fetch.ts',
            name: 'customFetch',
          },
          mock: {
            properties: {
              '/tag|name/': () => faker.person.lastName(),
            },
          },
        },
      },
      input: {
        target: './petstore.json',
      },
    },
  });