/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.19
 */
import { faker } from "@faker-js/faker";
import { HttpResponse, delay, http } from "msw";
import type { ApiResponse, Pet } from ".././models";

export const getUpdatePetResponseMock = (
  overrideResponse: Partial<Pet> = {},
): Pet => ({
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  name: (() => faker.person.lastName())(),
  category: faker.helpers.arrayElement([
    {
      id: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: (() => faker.person.lastName())(),
    },
    undefined,
  ]),
  photoUrls: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.string.alpha(20)),
  tags: (() => faker.person.lastName())(),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(["available", "pending", "sold"] as const),
    undefined,
  ]),
  ...overrideResponse,
});

export const getAddPetResponseMock = (
  overrideResponse: Partial<Pet> = {},
): Pet => ({
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  name: (() => faker.person.lastName())(),
  category: faker.helpers.arrayElement([
    {
      id: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: (() => faker.person.lastName())(),
    },
    undefined,
  ]),
  photoUrls: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.string.alpha(20)),
  tags: (() => faker.person.lastName())(),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(["available", "pending", "sold"] as const),
    undefined,
  ]),
  ...overrideResponse,
});

export const getFindPetsByStatusResponseMock = (): Pet[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    name: (() => faker.person.lastName())(),
    category: faker.helpers.arrayElement([
      {
        id: faker.helpers.arrayElement([
          faker.number.int({ min: undefined, max: undefined }),
          undefined,
        ]),
        name: (() => faker.person.lastName())(),
      },
      undefined,
    ]),
    photoUrls: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.string.alpha(20)),
    tags: (() => faker.person.lastName())(),
    status: faker.helpers.arrayElement([
      faker.helpers.arrayElement(["available", "pending", "sold"] as const),
      undefined,
    ]),
  }));

export const getFindPetsByTagsResponseMock = (): Pet[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    name: (() => faker.person.lastName())(),
    category: faker.helpers.arrayElement([
      {
        id: faker.helpers.arrayElement([
          faker.number.int({ min: undefined, max: undefined }),
          undefined,
        ]),
        name: (() => faker.person.lastName())(),
      },
      undefined,
    ]),
    photoUrls: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.string.alpha(20)),
    tags: (() => faker.person.lastName())(),
    status: faker.helpers.arrayElement([
      faker.helpers.arrayElement(["available", "pending", "sold"] as const),
      undefined,
    ]),
  }));

export const getGetPetByIdResponseMock = (
  overrideResponse: Partial<Pet> = {},
): Pet => ({
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  name: (() => faker.person.lastName())(),
  category: faker.helpers.arrayElement([
    {
      id: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: (() => faker.person.lastName())(),
    },
    undefined,
  ]),
  photoUrls: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.string.alpha(20)),
  tags: (() => faker.person.lastName())(),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(["available", "pending", "sold"] as const),
    undefined,
  ]),
  ...overrideResponse,
});

export const getUploadFileResponseMock = (
  overrideResponse: Partial<ApiResponse> = {},
): ApiResponse => ({
  code: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  type: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  ...overrideResponse,
});

export const getUpdatePetMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.put>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.put("*/pet", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getUpdatePetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getAddPetMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.post("*/pet", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getAddPetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getFindPetsByStatusMockHandler = (
  overrideResponse?:
    | Pet[]
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pet[]> | Pet[]),
) => {
  return http.get("*/pet/findByStatus", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getFindPetsByStatusResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getFindPetsByTagsMockHandler = (
  overrideResponse?:
    | Pet[]
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pet[]> | Pet[]),
) => {
  return http.get("*/pet/findByTags", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getFindPetsByTagsResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getGetPetByIdMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.get("*/pet/:petId", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getGetPetByIdResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getUpdatePetWithFormMockHandler = (
  overrideResponse?:
    | unknown
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<unknown> | unknown),
) => {
  return http.post("*/pet/:petId", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getDeletePetMockHandler = (
  overrideResponse?:
    | unknown
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0],
      ) => Promise<unknown> | unknown),
) => {
  return http.delete("*/pet/:petId", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getUploadFileMockHandler = (
  overrideResponse?:
    | ApiResponse
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<ApiResponse> | ApiResponse),
) => {
  return http.post("*/pet/:petId/uploadImage", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getUploadFileResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};
export const getPetMock = () => [
  getUpdatePetMockHandler(),
  getAddPetMockHandler(),
  getFindPetsByStatusMockHandler(),
  getFindPetsByTagsMockHandler(),
  getGetPetByIdMockHandler(),
  getUpdatePetWithFormMockHandler(),
  getDeletePetMockHandler(),
  getUploadFileMockHandler(),
];
