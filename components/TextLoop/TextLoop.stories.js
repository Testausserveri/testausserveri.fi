import { TextLoop as TextLoopComponent } from './TextLoop';

export default {
  title: 'TextLoop',
  component: TextLoopComponent,
}

export const TextLoop = ((args) => <TextLoopComponent {...args} />).bind({})
TextLoop.args = {
  children: [
    "First text",
    "Second text",
    "Third text",
    "Fourth text"
  ],
  duration: 2,
  stayTimeRatio: 0.9 // This should be between 0 and 1
}
