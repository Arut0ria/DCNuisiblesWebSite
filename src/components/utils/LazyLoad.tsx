import { lazy } from "react";

export default function lazyLoad(path: string, moduleName: string) {
  return lazy(() => import(path).then(module => ({
    default: module[moduleName]
  })));
}