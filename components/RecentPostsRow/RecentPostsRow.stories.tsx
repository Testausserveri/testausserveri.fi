import { PostDetails } from '../../utils/types';
import { RecentPostsRow } from './RecentPostsRow';

export default {
  title: 'Posts',
  component: RecentPostsRow,
}

const Template = (args: JSX.IntrinsicAttributes & { posts: PostDetails[]; }) => <RecentPostsRow {...args} />

export const Default = {
  args: {
    
  }
}
