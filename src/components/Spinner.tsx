import { Spinner } from "./ui/spinner";

function Loading() {
  return (<>
    <Spinner className='size-16 mx-auto' />
    <span className='block mx-auto my-4 align-middle text-center'>
      Chargement...
    </span>
  </>);
}

export default Loading;