import Head from 'next/head'
import { useRouter } from 'next/router'
import { Content } from '../../components/Content/Content'
import styled from 'styled-components'
import Link from 'next/link'
import api, { projects } from '../../utils/api'
import { useEffect, useState } from 'react'
import { Project } from '../../utils/Project'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { H1, H2 } from '../../components/Title/Title'
import { AvatarRow } from '../../components/AvatarRow/AvatarRow'
import { Explanation } from '../../components/Explanation/Explanation'
import { TagsRow } from '../../components/TagsRow/TagsRow'

const Layout = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  >div:nth-child(1) {
    flex: 1;
  }
  >div:nth-child(2) {
    width: 32%;
  }

  @media only screen and (max-width: 970px) {
    >div:nth-child(2) {
      width: 50%;
    }
  } 


  @media only screen and (max-width: 600px) {
    flex-direction: column;
    >div:nth-child(2) {
      width: 100%;
      flex: 1;
    }
  } 
`

const AvatarRowExtended = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    margin-left: .5rem;
    font-size: 0.95em;
    flex: 1;
  }
`

const ProjectLinks = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    background-color: rgba(108, 108, 108, 0.09);
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.1s;
  }
  li:hover {
    background-color: rgba(108, 108, 108, 0.15);
  }
  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Poppins';
  }
`

const FadeBackground = styled.div`
  &::before {
    content: '';
    background-image: var(--bg);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35rem;
    background-size: cover;
    opacity: 0.3;
    z-index: -10;
  }
  &::after {
    content: ' ';
    width: 100%;
    bottom: 0;
    position: absolute;
    left: 0;
    height: 35rem;
    z-index: -1;
    background: linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, rgba(0,0,0,0.7) 40.67%, #0D0D0D 96.87%);
    backdrop-filter: blur(5px);
    
    top: 0px;
  }  
`

export default function ProjectPage({projectData}) {
  const project = new Project(projectData)
  //<FadeBackground style={{"--bg": `url('${project.cover.url}')`}} />
  return (
    <article>
        
        <Head>
            <title>{project.name} | Testausserveri</title>
        </Head>
        <FadeBackground style={{"--bg": `url('${project.cover.url}')`}}>
          <Content>
            <Breadcrumbs 
              route={[
                {path: "/projects/", name: "Projektit"},
                {path: `/projects/${project.slug}`, name: project.name}
              ]} />

            <Layout>
              <div>
                <H1>{project.name}</H1>
              </div>
              <div>
                <H2>Omistajat</H2>
                <AvatarRowExtended>
                  <AvatarRow members={project.members} />
                  <span>{project.members.map(member => member.name).join("; ")}</span>
                </AvatarRowExtended>

                {project.contributors.length > 0 ? <>
                  <H2>Kontribuuttorit 
                    <Explanation>Projektin GitHub-repositorioihin koodia lisänneet, listattu GitHub-käyttäjät</Explanation>
                  </H2>
                  <AvatarRow members={project.contributors} />
                </> : null}

                {project.links.length > 0 ? <>
                  <H2>Linkit</H2>
                  <ProjectLinks>
                    {project.links.map(link => (
                      <a href={link.url} key={link.url}>
                        <li>
                          <h3>{link.title}</h3>
                          <span>{link.displayURL}</span>
                        </li>
                      </a>
                    ))}
                  </ProjectLinks>
                </> : null}

                {project.tags.length > 0 ? <>
                  <H2>Tagit</H2>
                  <TagsRow tags={project.tags} />
                </>: null}
              </div>
            </Layout>
          </Content>
        </FadeBackground>
    </article>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query
  const data = await api.projects.find(slug)
  return { props: { projectData: data } }
}
