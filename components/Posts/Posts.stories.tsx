import { Posts } from './Posts';

export default {
  title: 'Posts',
  component: Posts,
}

const Template = (args) => <Posts {...args} />

export const Default = {
  args: {
    
  }
}
