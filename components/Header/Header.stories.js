import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

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