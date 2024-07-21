import { PostDetails } from '../../utils/types';
import { PostsGrid } from './PostsGrid';

export default {
  title: 'PostsGrid',
  component: PostsGrid,
}

const Template = (args: JSX.IntrinsicAttributes & { posts: PostDetails[]; }) => <PostsGrid {...args} />

export const Default = {
  args: {
    
  }
}
