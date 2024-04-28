import { use, Suspense } from "react";
import { getUsers } from "../utils/getUser";

function Comments({ promise }: any) {
  // `use` will suspend until the promise resolves.
  // Warning: A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework
  // const users = use(getUsers());
  const users = use(promise);

  console.log(users);

  return (
    <div>
      <button type="button" className="btn btn-primary">
        get users
      </button>
      <ul>123</ul>
    </div>
  );
}

function UserSuspense({ promise }: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments promise={promise} />
    </Suspense>
  );
}

const UseComponent = () => {
  return <UserSuspense promise={getUsers()} />;
};

export default UseComponent;
