import { DiscordLive } from './DiscordLive';

export default {
  title: 'DiscordLive',
  component: DiscordLive,
  argTypes: {
    mobile: {
      control: { type: 'boolean' },
    },
  },
}

const Template = (args) => <DiscordLive {...args} />

export const Default = {
}