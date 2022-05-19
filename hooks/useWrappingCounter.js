import { useState } from "react";

export const useWrappingCounter = (max) => {
  const [value, setValue] = useState(0);
  return [
    value,
    () => { setValue((value + 1) % max) }
  ]
}
