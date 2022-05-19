import { InfoBox } from './InfoBox';

export default {
  title: 'InfoBox',
  component: InfoBox,
}

const Template = (args) => <InfoBox {...args} />

export const Default = {
  args: {
    children: <>
      <span>Tämä projektilistaus on vielä keskeneräinen.</span>
      <span>Voit auttaa täydentämällä sitä tekemällä dokumentointia GitHubiin.</span>
    </>
  }
}