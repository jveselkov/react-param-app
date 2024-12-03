import { useState, useRef } from "react";
import { ParamEditor, Model, ParamEditorRef } from "./ParamEditor";

const params = [
  {
    id: 1,
    name: "Назначение",
  },
  {
    id: 2,
    name: "Длина",
  },
];

function App() {
  const paramEditorRef = useRef<ParamEditorRef>(null);

  const [model, setModel] = useState<Model>({
    paramValues: [
      {
        paramId: 1,
        value: "повседневное",
      },
      {
        paramId: 2,
        value: "макси",
      },
    ],
  });

  const handleClick = () => {
    console.log(paramEditorRef.current?.getModel());
  };

  return (
    <>
      <ParamEditor
        ref={paramEditorRef}
        params={params}
        model={model}
        onChange={setModel}
      />

      <button onClick={handleClick}>click</button>
    </>
  );
}

export default App;
