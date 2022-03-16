import { StatCard as StatCardComponent } from './StatCard';
import { StatGroup as StatGroupComponent } from './StatGroup';

export default {
  title: 'Stat',
  component: StatCardComponent,
}

export const StatCard = ((args) => <StatCardComponent {...args} />).bind({})
StatCard.args = {
  label: "Jäseniä",
  value: 1300
}

export const StatGroup = ((args) => <StatGroupComponent {...args} />).bind({})
StatGroup.args = {
  stats: [
    {
      label: "Jäseniä",
      value: 1300
    },
    {
      label: "Jäseniä",
      value: 1300
    },
    {
      label: "Jäseniä",
      value: 1300
    },
    {
      label: "Jäseniä",
      value: 1300
    }
  ]
}