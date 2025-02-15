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
import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  Pet,
  UpdatePetWithFormParams,
  UploadFileParams,
} from "../../models";
import { customFetch } from "../../../../custom-fetch";

/**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export type updatePetResponse = {
  data: Pet | void;
  status: number;
  headers: Headers;
};

export const getUpdatePetUrl = () => {
  return `http://localhost:3000/pet`;
};

export const updatePet = async (
  pet: Pet,
  options?: RequestInit,
): Promise<updatePetResponse> => {
  return customFetch<updatePetResponse>(getUpdatePetUrl(), {
    ...options,
    method: "PUT",
    headers: { "Content-Type": "application/json", ...options?.headers },
    body: JSON.stringify(pet),
  });
};

/**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export type addPetResponse = {
  data: Pet | void;
  status: number;
  headers: Headers;
};

export const getAddPetUrl = () => {
  return `http://localhost:3000/pet`;
};

export const addPet = async (
  pet: Pet,
  options?: RequestInit,
): Promise<addPetResponse> => {
  return customFetch<addPetResponse>(getAddPetUrl(), {
    ...options,
    method: "POST",
    headers: { "Content-Type": "application/json", ...options?.headers },
    body: JSON.stringify(pet),
  });
};

/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export type findPetsByStatusResponse = {
  data: Pet[] | void;
  status: number;
  headers: Headers;
};

export const getFindPetsByStatusUrl = (params?: FindPetsByStatusParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    const explodeParameters = ["status"];

    if (value instanceof Array && explodeParameters.includes(key)) {
      value.forEach((v) =>
        normalizedParams.append(key, v === null ? "null" : v.toString()),
      );
      return;
    }
  });

  return normalizedParams.size
    ? `http://localhost:3000/pet/findByStatus?${normalizedParams.toString()}`
    : `http://localhost:3000/pet/findByStatus`;
};

export const findPetsByStatus = async (
  params?: FindPetsByStatusParams,
  options?: RequestInit,
): Promise<findPetsByStatusResponse> => {
  return customFetch<findPetsByStatusResponse>(getFindPetsByStatusUrl(params), {
    ...options,
    method: "GET",
  });
};

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export type findPetsByTagsResponse = {
  data: Pet[] | void;
  status: number;
  headers: Headers;
};

export const getFindPetsByTagsUrl = (params?: FindPetsByTagsParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    const explodeParameters = ["tags"];

    if (value instanceof Array && explodeParameters.includes(key)) {
      value.forEach((v) =>
        normalizedParams.append(key, v === null ? "null" : v.toString()),
      );
      return;
    }
  });

  return normalizedParams.size
    ? `http://localhost:3000/pet/findByTags?${normalizedParams.toString()}`
    : `http://localhost:3000/pet/findByTags`;
};

export const findPetsByTags = async (
  params?: FindPetsByTagsParams,
  options?: RequestInit,
): Promise<findPetsByTagsResponse> => {
  return customFetch<findPetsByTagsResponse>(getFindPetsByTagsUrl(params), {
    ...options,
    method: "GET",
  });
};

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export type getPetByIdResponse = {
  data: Pet | void;
  status: number;
  headers: Headers;
};

export const getGetPetByIdUrl = (petId: number) => {
  return `http://localhost:3000/pet/${petId}`;
};

export const getPetById = async (
  petId: number,
  options?: RequestInit,
): Promise<getPetByIdResponse> => {
  return customFetch<getPetByIdResponse>(getGetPetByIdUrl(petId), {
    ...options,
    method: "GET",
  });
};

/**
 * @summary Updates a pet in the store with form data
 */
export type updatePetWithFormResponse = {
  data: void;
  status: number;
  headers: Headers;
};

export const getUpdatePetWithFormUrl = (
  petId: number,
  params?: UpdatePetWithFormParams,
) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? "null" : value.toString());
    }
  });

  return normalizedParams.size
    ? `http://localhost:3000/pet/${petId}?${normalizedParams.toString()}`
    : `http://localhost:3000/pet/${petId}`;
};

export const updatePetWithForm = async (
  petId: number,
  params?: UpdatePetWithFormParams,
  options?: RequestInit,
): Promise<updatePetWithFormResponse> => {
  return customFetch<updatePetWithFormResponse>(
    getUpdatePetWithFormUrl(petId, params),
    {
      ...options,
      method: "POST",
    },
  );
};

/**
 * @summary Deletes a pet
 */
export type deletePetResponse = {
  data: void;
  status: number;
  headers: Headers;
};

export const getDeletePetUrl = (petId: number) => {
  return `http://localhost:3000/pet/${petId}`;
};

export const deletePet = async (
  petId: number,
  options?: RequestInit,
): Promise<deletePetResponse> => {
  return customFetch<deletePetResponse>(getDeletePetUrl(petId), {
    ...options,
    method: "DELETE",
  });
};

/**
 * @summary uploads an image
 */
export type uploadFileResponse = {
  data: ApiResponse;
  status: number;
  headers: Headers;
};

export const getUploadFileUrl = (petId: number, params?: UploadFileParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? "null" : value.toString());
    }
  });

  return normalizedParams.size
    ? `http://localhost:3000/pet/${petId}/uploadImage?${normalizedParams.toString()}`
    : `http://localhost:3000/pet/${petId}/uploadImage`;
};

export const uploadFile = async (
  petId: number,
  uploadFileBody: Blob,
  params?: UploadFileParams,
  options?: RequestInit,
): Promise<uploadFileResponse> => {
  return customFetch<uploadFileResponse>(getUploadFileUrl(petId, params), {
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      ...options?.headers,
    },
    body: JSON.stringify(uploadFileBody),
  });
};
