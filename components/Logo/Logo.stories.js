import { Logo } from './Logo';

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    showBeta: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  }
}

const Template = (args) => <Logo {...args} />

export const Default = {
}