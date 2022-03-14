import { StatGroup } from './StatGroup';

export default {
  title: 'StatGroup',
  component: StatGroup,
  args: {
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
}

const Template = (args) => <StatGroup {...args} />

export const Default = {
}