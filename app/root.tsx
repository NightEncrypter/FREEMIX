import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction,
} from "remix";
import type { MetaFunction } from "remix";
import tailwindStyles from "./tailwind.css";
import { Link } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import Layout from "./components/layouts/Layout";
import { MainContext } from "./context/mainContext";

type Props = {
  title: string;
  children: React.ReactNode;
};
export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }];
};
export const meta: MetaFunction = () => {
  return { keywords: "FreeMix,Blogs", description: "A cool blog with remix" };
};

export default function App() {
  return (
    <Document title="FreeMix">
      <Layout>
        <ScrollRestoration />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }: Props) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MainContext>{children}</MainContext>
        <Scripts />
      </body>
    </html>
  );
}
