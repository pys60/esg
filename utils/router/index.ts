import { useRouter, useSearchParams } from "next/navigation";

export const useRouterWithQuery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const newRouter = {
    push: (url: string, options?: RouterWithQueryPushOptions) => {
      const { queriesToDelete = [] } = options || {};
      const queries = searchParams.entries();
      const queryArray = Array.from(queries).filter(
        ([key]) => !queriesToDelete.includes(key)
      );
      const stringifiedQueries = queryArray
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      router.push(`${url}?${stringifiedQueries}`);
    },
  };

  return { ...router, ...newRouter };
};

type RouterWithQueryPushOptions = {
  queriesToDelete?: string[];
};
