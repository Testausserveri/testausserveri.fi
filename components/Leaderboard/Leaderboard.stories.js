import { Leaderboard, LeaderboardGroup } from './Leaderboard';

export default {
  title: 'Leaderboard',
  component: Leaderboard,
}

export const Default = ((args) => <Leaderboard {...args} />).bind({})
Default.args = {
  data: [
      {name: "Testauskoira", value: 1900},
      {name: "Timo", value: 800},
      {name: "Pasi", value: 3000},
      {name: "Sonni", value: 200},
      {name: "Vladimir", value: 8000},
  ],
  title: "Eniten viestejä tänään"
}
export const Group = ((args) => <LeaderboardGroup {...args} />).bind({})
Group.args = {
  children: [
    <Leaderboard 
      data={[
        {name: "Testauskoira", value: 1900},
        {name: "Timo", value: 800},
        {name: "Pasi", value: 3000},
        {name: "Sonni", value: 200},
        {name: "Vladimir", value: 8000},
      ]}
      title="Eniten viestejä tänään" />,
    <Leaderboard 
      data={[
        {name: "Testauskoira", value: 1900},
        {name: "Timo", value: 800},
        {name: "Pasi", value: 3000},
        {name: "Sonni", value: 200},
        {name: "Vladimir", value: 8000},
      ]}
      title="Eniten viestejä tänään" />,
  ]
}