"use client";

export default function Home() {
  const handlePOST = async (e) => {
    e.preventDefault();

    const input = e?.target?.nome?.value;

    if (input == "") {
      return
    }

    const data = await fetch(`api/user`, {
      method: "POST",
      body: JSON.stringify({ name: input }),
    }).then((res) => res.json());

    alert(data);
  };

  const handleGET = async (e) => {
    e.preventDefault();

    const input = e?.target?.nome?.value;

    if (input == "") {
      return
    }

    const data = await fetch(`api/user/${input}`).then((res) => res.json());

    alert(data);
  };

  return (
    <>
      <div>
        <h1 className="text-4xl">Home Page</h1>
      </div>

      <div>
        <form onSubmit={handlePOST}>
          <label>ADICIONAR USUARIO:</label>
          <input type="text" name="nome" className="text-black"></input>
          <button className="py-2 px-2 bg-blue-500">POST</button>
        </form>
      </div>

      <div>
        <form onSubmit={handleGET}>
          <label>PROCURAR POR:</label>
          <input type="text" name="nome" className="text-black"></input>
          <button className="py-2 px-2 bg-blue-500">GET</button>
        </form>
      </div>
    </>
  );
}
