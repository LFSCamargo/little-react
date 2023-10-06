import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import allPages from "~react-pages";

export function Routes() {
  return <Suspense fallback={<div></div>}>{useRoutes(allPages)}</Suspense>;
}

export function ApplicationRouter() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
