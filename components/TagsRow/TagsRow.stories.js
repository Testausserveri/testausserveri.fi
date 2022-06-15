import { Explanation } from './Explanation';

export default {
  title: 'Explanation',
  component: Explanation,
}

const Template = (args) => <Explanation {...args} />

export const Default = {
  args: {
    children: "Tämä on selite",
  }
}