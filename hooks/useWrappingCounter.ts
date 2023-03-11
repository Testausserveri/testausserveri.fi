import { useState } from "react";

export const useWrappingCounter = (max: number) => {
  const [value, setValue] = useState(0);
  return [
    value,
    () => { setValue((value + 1) % max) }
  ] as const
}
