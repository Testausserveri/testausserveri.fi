import { PropsWithChildren } from "react";
import Separator from "./Separator";

export default {
  title: 'Separator',
  component: Separator,
}

const Template = (args: JSX.IntrinsicAttributes & PropsWithChildren) => <Separator {...args} />

export const Default = {
  args: {
    
  }
}
