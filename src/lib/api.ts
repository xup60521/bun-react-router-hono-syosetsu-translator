import { hc } from "hono/client";
import type { AppType } from "../../api/server";

export const client = hc<AppType>("/");