import { ChangeEvent, useImperativeHandle, forwardRef } from "react";
import { Param, ParamEditorRef, ParamEditorProps } from "./model";

export const ParamEditor = forwardRef<ParamEditorRef, ParamEditorProps>(
  ({ params, model, onChange }, ref) => {
    const paramsById = params.reduce((acc, curr) => {
      acc[curr.id] = curr;

      return acc;
    }, {} as Record<number, Param>);

    const handleChange =
      (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const paramValues = [...model.paramValues];
        paramValues[index].value = event.target.value;

        onChange({ paramValues });
      };

    useImperativeHandle(ref, () => ({
      getModel() {
        return model;
      },
    }));

    return (
      <>
        {model.paramValues.map((value, index) => (
          <div key={`input-param-${index}`}>
            <label>{paramsById[value.paramId].name}</label>
            <input
              type="text"
              value={value.value}
              onChange={handleChange(index)}
            />
          </div>
        ))}
      </>
    );
  }
);
