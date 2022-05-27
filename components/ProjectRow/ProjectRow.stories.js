import { ProjectRow } from './ProjectRow';

export default {
  title: 'ProjectRow',
  component: ProjectRow,
}

const Template = (args) => <ProjectRow {...args} />

export const Default = {
  args: {
    project: {"_id":"628bb30874cbffc94cfc2254","description":"Tilastoi koodaamiseen käyttämäsi aika ja kilpaile kavereiden kanssa!","members":[{"_id":"628b535c670ceba5cf97c8c9","name":"Luukasa (pro git-user) 🦜"},{"_id":"628b535b670ceba5cf97c243","name":"DrVilepis"},{"_id":"628b535b670ceba5cf97c4d7","name":"Eldemarkki"}],"tags":["Web","Discord-botti"],"media":{"type":"image","filename":"testaustime.png"},"name":"Testaustime","slug":"testaustime"}
  }
}