import { Capsule } from './Capsule';

export default {
  title: 'Capsule',
  component: Capsule,
}

const Template = (args) => <Capsule {...args} />

export const Default = {
  args: {
    children: "BETA"
  }
}