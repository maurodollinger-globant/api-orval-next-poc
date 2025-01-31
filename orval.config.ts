import { faker } from '@faker-js/faker';
import { defineConfig } from 'orval';

export default defineConfig({
    petstoreServer: {
      output: {
        client: 'fetch', 
        mode: 'tags-split',
        target: 'app/gen/server/petstore.ts', 
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
    petstoreClient:{
      output: {
        client: 'react-query', 
        httpClient: 'fetch',
        mode: 'tags-split',
        target: 'app/gen/client/petstore.ts', 
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
              '/tag/name/': () => faker.person.lastName(),
            },
          },
        },
      },
      input: {
        target: './petstore.json',
      },
    }
  });