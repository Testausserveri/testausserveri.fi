import { Navigation } from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = (args) => <Navigation {...args} />

export const Default = {
  args: {
    pages: [
      {
        path: "/",
        label: "Etusivu"
      },
      {
        path: "/members",
        label: "Jäsenet"
      },
      {
        path: "/projects",
        label: "Projektit"
      },
      {
        path: "/in-media",
        label: "Mediassa"
      }
    ],
    activePath: "/members"
  }
}