import { useState } from "react";
import { updateName } from "../utils/updateName";
// Before Actions
function FormOld({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    }
    alert(`redirect("/path")`);
  };
  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button type="button" onClick={handleSubmit} className="btn btn-primary" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default FormOld;
