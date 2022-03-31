import { ButtonIcon, CapsuleButton } from './CapsuleButton';
import DiscordIcon from '../../assets/DiscordIcon.svg'

export default {
  title: 'Button',
  component: CapsuleButton,
  argTypes: {
    variant: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      defaultValue: 'medium'
    }
  }
}

const ButtonTemplate = (args) => (
  <CapsuleButton {...args} />
);

export const Button = ButtonTemplate.bind({});
Button.args = {
  children: "Hei maailma"
}

const IconButtonTemplate = (args) => (
  <CapsuleButton {...args} />
);

export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  children: (
    <>
      <ButtonIcon src={DiscordIcon} />
      Discord
    </>
  )
}