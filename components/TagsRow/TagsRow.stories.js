import { TagsRow } from './TagsRow';

export default {
  title: 'TagsRow',
  component: TagsRow,
}

const Template = (args) => <TagsRow {...args} />

export const Default = {
  args: {
    children: "Tämä on selite",
  }
}
