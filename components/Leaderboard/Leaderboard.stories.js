import { Leaderboard } from './Leaderboard';

export default {
  title: 'Leaderboard',
  component: Leaderboard,
  argTypes: {
  }
}

const Template = (args) => <Leaderboard {...args} />

export const Default = {
  args: {
    data: [
        {name: "Testauskoira", value: 1900},
        {name: "Timo", value: 800},
        {name: "Pasi", value: 3000},
        {name: "Sonni", value: 200},
        {name: "Vladimir", value: 8000},
    ],
    title: "Eniten viestejä tänään"
  }
}