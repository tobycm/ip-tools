import { Elysia } from "elysia";
import { ip } from "elysia-ip";

const app = new Elysia()
  .get("/", () => "Hello Elysia")

  .use(ip({}))

  .get("/", ({ ip, status }) => {
    if (!ip) return status(500, "Unable to determine IP address");
    return ip;
  })
  .get("/json", ({ ip, status }) => {
    if (!ip) return status(500, "Unable to determine IP address");
    return { ip };
  })

  .listen(3462);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
