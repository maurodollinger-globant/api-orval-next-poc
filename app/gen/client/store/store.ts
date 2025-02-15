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
import type { GetInventory200, Order } from "../../models";
import { customFetch } from "../../../../custom-fetch";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export type getInventoryResponse = {
  data: GetInventory200;
  status: number;
  headers: Headers;
};

export const getGetInventoryUrl = () => {
  return `http://localhost:3000/store/inventory`;
};

export const getInventory = async (
  options?: RequestInit,
): Promise<getInventoryResponse> => {
  return customFetch<getInventoryResponse>(getGetInventoryUrl(), {
    ...options,
    method: "GET",
  });
};

export const getGetInventoryQueryKey = () => {
  return [`http://localhost:3000/store/inventory`] as const;
};

export const getGetInventoryQueryOptions = <
  TData = Awaited<ReturnType<typeof getInventory>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>
  >;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetInventoryQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getInventory>>> = ({
    signal,
  }) => getInventory({ signal, ...requestOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getInventory>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetInventoryQueryResult = NonNullable<
  Awaited<ReturnType<typeof getInventory>>
>;
export type GetInventoryQueryError = unknown;

export function useGetInventory<
  TData = Awaited<ReturnType<typeof getInventory>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getInventory>>,
        TError,
        TData
      >,
      "initialData"
    >;
  request?: SecondParameter<typeof customFetch>;
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetInventory<
  TData = Awaited<ReturnType<typeof getInventory>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getInventory>>,
        TError,
        TData
      >,
      "initialData"
    >;
  request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetInventory<
  TData = Awaited<ReturnType<typeof getInventory>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Returns pet inventories by status
 */

export function useGetInventory<
  TData = Awaited<ReturnType<typeof getInventory>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getGetInventoryQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * Place a new order in the store
 * @summary Place an order for a pet
 */
export type placeOrderResponse = {
  data: Order | void;
  status: number;
  headers: Headers;
};

export const getPlaceOrderUrl = () => {
  return `http://localhost:3000/store/order`;
};

export const placeOrder = async (
  order: Order,
  options?: RequestInit,
): Promise<placeOrderResponse> => {
  return customFetch<placeOrderResponse>(getPlaceOrderUrl(), {
    ...options,
    method: "POST",
    headers: { "Content-Type": "application/json", ...options?.headers },
    body: JSON.stringify(order),
  });
};

export const getPlaceOrderMutationOptions = <
  TData = Awaited<ReturnType<typeof placeOrder>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: Order }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const mutationKey = ["placeOrder"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof placeOrder>>,
    { data: Order }
  > = (props) => {
    const { data } = props ?? {};

    return placeOrder(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: Order },
    TContext
  >;
};

export type PlaceOrderMutationResult = NonNullable<
  Awaited<ReturnType<typeof placeOrder>>
>;
export type PlaceOrderMutationBody = Order;
export type PlaceOrderMutationError = void;

/**
 * @summary Place an order for a pet
 */
export const usePlaceOrder = <
  TData = Awaited<ReturnType<typeof placeOrder>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: Order }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<TData, TError, { data: Order }, TContext> => {
  const mutationOptions = getPlaceOrderMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @summary Find purchase order by ID
 */
export type getOrderByIdResponse = {
  data: Order | void;
  status: number;
  headers: Headers;
};

export const getGetOrderByIdUrl = (orderId: number) => {
  return `http://localhost:3000/store/order/${orderId}`;
};

export const getOrderById = async (
  orderId: number,
  options?: RequestInit,
): Promise<getOrderByIdResponse> => {
  return customFetch<getOrderByIdResponse>(getGetOrderByIdUrl(orderId), {
    ...options,
    method: "GET",
  });
};

export const getGetOrderByIdQueryKey = (orderId: number) => {
  return [`http://localhost:3000/store/order/${orderId}`] as const;
};

export const getGetOrderByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getOrderById>>,
  TError = void,
>(
  orderId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetOrderByIdQueryKey(orderId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getOrderById>>> = ({
    signal,
  }) => getOrderById(orderId, { signal, ...requestOptions });

  return {
    queryKey,
    queryFn,
    enabled: !!orderId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getOrderById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetOrderByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getOrderById>>
>;
export type GetOrderByIdQueryError = void;

export function useGetOrderById<
  TData = Awaited<ReturnType<typeof getOrderById>>,
  TError = void,
>(
  orderId: number,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getOrderById>>,
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
export function useGetOrderById<
  TData = Awaited<ReturnType<typeof getOrderById>>,
  TError = void,
>(
  orderId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getOrderById>>,
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
export function useGetOrderById<
  TData = Awaited<ReturnType<typeof getOrderById>>,
  TError = void,
>(
  orderId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Find purchase order by ID
 */

export function useGetOrderById<
  TData = Awaited<ReturnType<typeof getOrderById>>,
  TError = void,
>(
  orderId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getOrderById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getGetOrderByIdQueryOptions(orderId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 */
export type deleteOrderResponse = {
  data: void;
  status: number;
  headers: Headers;
};

export const getDeleteOrderUrl = (orderId: number) => {
  return `http://localhost:3000/store/order/${orderId}`;
};

export const deleteOrder = async (
  orderId: number,
  options?: RequestInit,
): Promise<deleteOrderResponse> => {
  return customFetch<deleteOrderResponse>(getDeleteOrderUrl(orderId), {
    ...options,
    method: "DELETE",
  });
};

export const getDeleteOrderMutationOptions = <
  TData = Awaited<ReturnType<typeof deleteOrder>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { orderId: number }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const mutationKey = ["deleteOrder"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteOrder>>,
    { orderId: number }
  > = (props) => {
    const { orderId } = props ?? {};

    return deleteOrder(orderId, requestOptions);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { orderId: number },
    TContext
  >;
};

export type DeleteOrderMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteOrder>>
>;

export type DeleteOrderMutationError = void;

/**
 * @summary Delete purchase order by ID
 */
export const useDeleteOrder = <
  TData = Awaited<ReturnType<typeof deleteOrder>>,
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { orderId: number }, TContext>;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<TData, TError, { orderId: number }, TContext> => {
  const mutationOptions = getDeleteOrderMutationOptions(options);

  return useMutation(mutationOptions);
};
