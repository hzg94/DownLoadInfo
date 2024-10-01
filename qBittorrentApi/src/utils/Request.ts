interface RequestsParams {
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
  data?: any
  params?: any

  ContentType?: 'application/json'
}

type ApiResponse<T extends TData> = {
  data: T
  status: number
}

type TData = any


export type ApiResult<T> = Promise<ApiResponse<T>>;

export type RequestFunction = <T>(params: RequestsParams) => ApiResult<T>;


const FetchToRequestFunction = (params: RequestsParams) => {
  return fetch(FetchUrlFunction(params), {
    method: params.method,
    body: FetchBodyFunction(params),
    headers: {
      "Content-Type": params.ContentType ?? "application/json"
    },
  }).then((response): ApiResponse<any> => {
    return {
      data: response.json(),
      status: response.status,
    }
  })
}

const FetchUrlFunction = (params: RequestsParams) => {
  return `${params.url}?${new URLSearchParams(params.params).toString()}`;
}

const FetchBodyFunction = (params: RequestsParams) => {
  if (params.method == 'POST') {
    if (params.ContentType == 'application/json') {
      return JSON.stringify(params.data)
    }
  } else if (params.method == 'GET') {
    return ''
  }
}


export default (function () {
  let RequestFunction: RequestFunction | null = null
  //@ts-ignore
  if (window) {
    RequestFunction = FetchToRequestFunction
  }


  return {
    config(requestFunction: RequestFunction) {
      RequestFunction = requestFunction
    },
    request: RequestFunction
  }


})()
