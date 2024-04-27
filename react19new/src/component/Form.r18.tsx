import { useState, useTransition } from "react";
import { updateName } from "../utils/updateName";
// Before Actions
function FormR18({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState<any>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {

    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      } 
      alert(`redirect("/path")`);
    })
  };
  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button type="button" onClick={handleSubmit} className="btn btn-primary" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default FormR18;
