import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
}

const Template = (args) => <Breadcrumbs {...args} />

export const Default = {
  args: {
    route: [
      {path: "/projects/", name: "Projektit"},
      {path: "/projects/juustohoyla", name: "Juustohöylä"}
    ]
  }
}