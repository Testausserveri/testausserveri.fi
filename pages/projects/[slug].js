import Head from 'next/head'
import { useRouter } from 'next/router'
import { Content } from '../../components/Content/Content'
import styled from 'styled-components'
import Link from 'next/link'
import api from '../../utils/api'
import { useEffect, useState } from 'react'
import { Project } from '../../utils/Project'

const Center = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;  
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 500px;
`

export default function ProjectPage({projectData}) {
  const project = new Project(projectData)
  console.log(project)
  return (
    <article>
        <Head>
            <title>Projekti | Testausserveri</title>
        </Head>
        <Content>
          mojdo
        </Content>
    </article>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query
  const data = await api.projects.find(slug)
  return { props: { projectData: data } }
}
