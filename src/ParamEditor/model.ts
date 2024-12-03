export type ParamType = "string" | "number";

export interface Param {
  id: number;
  name: string;
}

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
}

export interface ParamEditorProps {
  params: Param[];
  model: Model;

  onChange: (value: Model) => void;
}

export interface ParamEditorRef {
  getModel: () => Model;
}
