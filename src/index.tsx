import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const Layout = ({ children }) => (
  <html lang="en">
    <head>
      <title>Hello World</title>
    </head>
    <body>
      {children}
    </body>
  </html>
);

const Page = ({ title, messages }) => (
  <Layout>
    <h1>{title}</h1>
    <ul>
      {messages.map((message) => {
        return <li>{message}!!</li>;
      })}
    </ul>
  </Layout>
);

const app = new Elysia()
  .trace(async ({ onHandle }) => {
    onHandle(({ begin, onStop }) => {
      onStop(({ end }) => {
        console.log('handle took', end - begin, 'ms')
      })
    })
  })
  .use(html())
  .get("/", () => "Hello Elysia")
  .get("/hi", () => "hi")
  .get("/jsx", () => {
    const messages = ["Good Morning", "Good Evening", "Good Night"];
    return <Page title="Hello World" messages={messages} />
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
