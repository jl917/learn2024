import {
  useActionState,
  useState,
  useTransition,
  memo,
  useOptimistic,
} from "react";
import { updateName } from "../utils/updateName";
import { useFormStatus } from "react-dom";

const Child = () => {
  const formStatus = useFormStatus();
  console.log(formStatus.pending);
  return (
    <div>
      <button className="btn btn-primary" disabled={formStatus.pending}>
        form status
      </button>
    </div>
  );
};

const ChildMemo = memo(Child);

// Before Actions
function FormR19({}) {
  const [name, setName] = useState("");
  const [optimisticName, setOptimisticName] = useOptimistic(name);
  const [error, submitAction, isPending] = useActionState(
    async (previousState: any, formData: any) => {
      const newName = formData.get("name");
      
      setOptimisticName(optimisticName);
      const error = await updateName(newName);
      setName(newName);
      if (error) {
        return error;
      }
      alert(`redirect("/path")`);
    },
    undefined
  );

  return (
    <div>
      <form action={submitAction}>
        <p>Your name is: {optimisticName}</p>
        <input
          name="name"
          defaultValue={optimisticName}
          // value={name}
          // onChange={(event) => setName(event.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          Update
        </button>
        <ChildMemo />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default FormR19;
