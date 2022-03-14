import { StatCard } from './StatCard';

export default {
  title: 'StatCard',
  component: StatCard,
  args: {
    label: "Jäseniä",
    value: 1300
  }
}

const Template = (args) => <StatCard {...args} />

export const Default = {
}