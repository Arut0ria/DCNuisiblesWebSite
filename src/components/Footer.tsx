import { lazy, Suspense } from 'react';

export default function Footer() {
  const Socials = lazy(() => import('./sections/Socials'));

  return (<footer className="
    flex justify-between items-center
    bg-card
    p-4 w-full
  ">
    <div className="space-x-2">
      <img src="logo.webp" alt="Logo de DC Nuisbles" className="size-10 inline-block"></img>
      <h3 className="inline-block align-middle">DC Nuisibles</h3>
    </div>
    <Suspense>
      <Socials />
    </Suspense>
  </footer>);
}
