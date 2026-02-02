import { queryOptions } from "@tanstack/react-query";
import { client } from "@/lib/api";
import type { Task } from "@/app/history/-history-card";

export const historyQuery = queryOptions({
    queryKey: ["history"],
    queryFn: async () => {
        const res = await client.api.history.$get();
        const data = await res.json()
        if ("error" in data) {
            throw new Error(data.error);
        }
        return data as Task[];
    },
    refetchInterval: 10000,
});
