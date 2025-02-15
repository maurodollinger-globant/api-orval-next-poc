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
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  Pet,
  UpdatePetWithFormParams,
  UploadFileParams,
} from "../../models";
import { customFetch } from "../../../../custom-fetch";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

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

export const getUpdatePetMutationOptions = <
  TData = Awaited<ReturnType<typeof updatePet>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: Pet }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const mutationKey = ["updatePet"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePet>>,
    { data: Pet }
  > = (props) => {
    const { data } = props ?? {};

    return updatePet(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: Pet },
    TContext
  >;
};

export type UpdatePetMutationResult = NonNullable<
  Awaited<ReturnType<typeof updatePet>>
>;
export type UpdatePetMutationBody = Pet;
export type UpdatePetMutationError = void;

/**
 * @summary Update an existing pet
 */
export const useUpdatePet = <
  TData = Awaited<ReturnType<typeof updatePet>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: Pet }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<TData, TError, { data: Pet }, TContext> => {
  const mutationOptions = getUpdatePetMutationOptions(options);

  return useMutation(mutationOptions);
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

export const getAddPetMutationOptions = <
  TData = Awaited<ReturnType<typeof addPet>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: Pet }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const mutationKey = ["addPet"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof addPet>>,
    { data: Pet }
  > = (props) => {
    const { data } = props ?? {};

    return addPet(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: Pet },
    TContext
  >;
};

export type AddPetMutationResult = NonNullable<
  Awaited<ReturnType<typeof addPet>>
>;
export type AddPetMutationBody = Pet;
export type AddPetMutationError = void;

/**
 * @summary Add a new pet to the store
 */
export const useAddPet = <
  TData = Awaited<ReturnType<typeof addPet>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: Pet }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<TData, TError, { data: Pet }, TContext> => {
  const mutationOptions = getAddPetMutationOptions(options);

  return useMutation(mutationOptions);
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

export const getFindPetsByStatusQueryKey = (
  params?: FindPetsByStatusParams,
) => {
  return [
    `http://localhost:3000/pet/findByStatus`,
    ...(params ? [params] : []),
  ] as const;
};

export const getFindPetsByStatusQueryOptions = <
  TData = Awaited<ReturnType<typeof findPetsByStatus>>,
  TError = void,
>(
  params?: FindPetsByStatusParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof findPetsByStatus>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getFindPetsByStatusQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof findPetsByStatus>>
  > = ({ signal }) => findPetsByStatus(params, { signal, ...requestOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findPetsByStatus>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type FindPetsByStatusQueryResult = NonNullable<
  Awaited<ReturnType<typeof findPetsByStatus>>
>;
export type FindPetsByStatusQueryError = void;

export function useFindPetsByStatus<
  TData = Awaited<ReturnType<typeof findPetsByStatus>>,
  TError = void,
>(
  params: undefined | FindPetsByStatusParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof findPetsByStatus>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findPetsByStatus>>,
          TError,
          TData
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customFetch>;
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useFindPetsByStatus<
  TData = Awaited<ReturnType<typeof findPetsByStatus>>,
  TError = void,
>(
  params?: FindPetsByStatusParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof findPetsByStatus>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findPetsByStatus>>,
          TError,
          TData
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useFindPetsByStatus<
  TData = Awaited<ReturnType<typeof findPetsByStatus>>,
  TError = void,
>(
  params?: FindPetsByStatusParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof findPetsByStatus>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Finds Pets by status
 */

export function useFindPetsByStatus<
  TData = Awaited<ReturnType<typeof findPetsByStatus>>,
  TError = void,
>(
  params?: FindPetsByStatusParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof findPetsByStatus>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getFindPetsByStatusQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

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

export const getFindPetsByTagsQueryKey = (params?: FindPetsByTagsParams) => {
  return [
    `http://localhost:3000/pet/findByTags`,
    ...(params ? [params] : []),
  ] as const;
};

export const getFindPetsByTagsQueryOptions = <
  TData = Awaited<ReturnType<typeof findPetsByTags>>,
  TError = void,
>(
  params?: FindPetsByTagsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getFindPetsByTagsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findPetsByTags>>> = ({
    signal,
  }) => findPetsByTags(params, { signal, ...requestOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findPetsByTags>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type FindPetsByTagsQueryResult = NonNullable<
  Awaited<ReturnType<typeof findPetsByTags>>
>;
export type FindPetsByTagsQueryError = void;

export function useFindPetsByTags<
  TData = Awaited<ReturnType<typeof findPetsByTags>>,
  TError = void,
>(
  params: undefined | FindPetsByTagsParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findPetsByTags>>,
          TError,
          TData
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customFetch>;
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useFindPetsByTags<
  TData = Awaited<ReturnType<typeof findPetsByTags>>,
  TError = void,
>(
  params?: FindPetsByTagsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findPetsByTags>>,
          TError,
          TData
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useFindPetsByTags<
  TData = Awaited<ReturnType<typeof findPetsByTags>>,
  TError = void,
>(
  params?: FindPetsByTagsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Finds Pets by tags
 */

export function useFindPetsByTags<
  TData = Awaited<ReturnType<typeof findPetsByTags>>,
  TError = void,
>(
  params?: FindPetsByTagsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getFindPetsByTagsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

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

export const getGetPetByIdQueryKey = (petId: number) => {
  return [`http://localhost:3000/pet/${petId}`] as const;
};

export const getGetPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getPetById>>,
  TError = void,
>(
  petId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPetByIdQueryKey(petId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPetById>>> = ({
    signal,
  }) => getPetById(petId, { signal, ...requestOptions });

  return {
    queryKey,
    queryFn,
    enabled: !!petId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getPetById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPetById>>
>;
export type GetPetByIdQueryError = void;

export function useGetPetById<
  TData = Awaited<ReturnType<typeof getPetById>>,
  TError = void,
>(
  petId: number,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPetById>>,
          TError,
          TData
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customFetch>;
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetPetById<
  TData = Awaited<ReturnType<typeof getPetById>>,
  TError = void,
>(
  petId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getPetById>>,
          TError,
          TData
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetPetById<
  TData = Awaited<ReturnType<typeof getPetById>>,
  TError = void,
>(
  petId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Find pet by ID
 */

export function useGetPetById<
  TData = Awaited<ReturnType<typeof getPetById>>,
  TError = void,
>(
  petId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getGetPetByIdQueryOptions(petId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

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

export const getUpdatePetWithFormMutationOptions = <
  TData = Awaited<ReturnType<typeof updatePetWithForm>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { petId: number; params?: UpdatePetWithFormParams },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const mutationKey = ["updatePetWithForm"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePetWithForm>>,
    { petId: number; params?: UpdatePetWithFormParams }
  > = (props) => {
    const { petId, params } = props ?? {};

    return updatePetWithForm(petId, params, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { petId: number; params?: UpdatePetWithFormParams },
    TContext
  >;
};

export type UpdatePetWithFormMutationResult = NonNullable<
  Awaited<ReturnType<typeof updatePetWithForm>>
>;

export type UpdatePetWithFormMutationError = void;

/**
 * @summary Updates a pet in the store with form data
 */
export const useUpdatePetWithForm = <
  TData = Awaited<ReturnType<typeof updatePetWithForm>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { petId: number; params?: UpdatePetWithFormParams },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<
  TData,
  TError,
  { petId: number; params?: UpdatePetWithFormParams },
  TContext
> => {
  const mutationOptions = getUpdatePetWithFormMutationOptions(options);

  return useMutation(mutationOptions);
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

export const getDeletePetMutationOptions = <
  TData = Awaited<ReturnType<typeof deletePet>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { petId: number }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const mutationKey = ["deletePet"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deletePet>>,
    { petId: number }
  > = (props) => {
    const { petId } = props ?? {};

    return deletePet(petId, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { petId: number },
    TContext
  >;
};

export type DeletePetMutationResult = NonNullable<
  Awaited<ReturnType<typeof deletePet>>
>;

export type DeletePetMutationError = void;

/**
 * @summary Deletes a pet
 */
export const useDeletePet = <
  TData = Awaited<ReturnType<typeof deletePet>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { petId: number }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<TData, TError, { petId: number }, TContext> => {
  const mutationOptions = getDeletePetMutationOptions(options);

  return useMutation(mutationOptions);
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

export const getUploadFileMutationOptions = <
  TData = Awaited<ReturnType<typeof uploadFile>>,
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { petId: number; data: Blob; params?: UploadFileParams },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const mutationKey = ["uploadFile"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadFile>>,
    { petId: number; data: Blob; params?: UploadFileParams }
  > = (props) => {
    const { petId, data, params } = props ?? {};

    return uploadFile(petId, data, params, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { petId: number; data: Blob; params?: UploadFileParams },
    TContext
  >;
};

export type UploadFileMutationResult = NonNullable<
  Awaited<ReturnType<typeof uploadFile>>
>;
export type UploadFileMutationBody = Blob;
export type UploadFileMutationError = unknown;

/**
 * @summary uploads an image
 */
export const useUploadFile = <
  TData = Awaited<ReturnType<typeof uploadFile>>,
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { petId: number; data: Blob; params?: UploadFileParams },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<
  TData,
  TError,
  { petId: number; data: Blob; params?: UploadFileParams },
  TContext
> => {
  const mutationOptions = getUploadFileMutationOptions(options);

  return useMutation(mutationOptions);
};
