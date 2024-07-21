/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Content } from '../../components/Content/Content'
import styled from 'styled-components'
import api from '../../utils/api'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { H1, H2 } from '../../components/Title/Title'
import { AvatarRow } from '../../components/AvatarRow/AvatarRow'
import { Explanation } from '../../components/Explanation/Explanation'
import { TagsRow } from '../../components/TagsRow/TagsRow'
import { Footer } from '../../components/Footer/Footer'
import { Gallery } from '../../components/Gallery/Gallery'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { FaGithub } from "react-icons/fa"
import { ProjectRow } from '../../components/ProjectRow/ProjectRow'
import { MDXRemoteSerializeResult, SerializeOptions } from 'next-mdx-remote/dist/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getProjectLinkIcon, getProjectLinkTitle, getProjectLinkUrl, getProjectMediaUrl } from "../../utils/Project";
import { getMemberAvatarUrl } from '../../utils/Member'
import { DetailedProject, ShallowProject } from "../../utils/types";
import Link from 'next/link'
import Image from 'next/image'
import { mdxComponents } from '../../components/mdx/mdxComponents'
import { FadeBackground } from '../../components/FadeBackground/FadeBackground'

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

  
  @media only screen and (max-width: 920px) {
    >div:nth-child(2) {
      width: 39%;
    }
  } 


  @media only screen and (max-width: 800px) {
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

const ProjectLinks = styled.ul`
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
    @media only screen and (max-width: 600px) {
      padding: 1.5rem;
    }
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

const RepositoryReadme = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(108, 108, 108, 0.09);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-top: 1rem;
  >span:nth-child(1) {
    padding-bottom: 1rem;
    border-bottom: 1px solid #474747;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    >span:nth-child(2) {
      gap: 0.5rem;
      align-item: center;
      display: flex;
    }
  }
  pre {
    white-space: pre-wrap;
  }
  img {
    max-width: 100%;
  }
  h1 { font-size: 1.6em; }
  h2 { font-size: 1.4em; }
  h3 { font-size: 1.2em; }
  p { line-height: 1.5; }
`

const P = styled.p`
  line-height: 1.5;
  margin-bottom: 1.5rem;
`

const ProjectLink = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const ProjectLinkTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`


export default function ProjectPage({ projectData: project, mdxSerialized, suggestedProjectsData: suggestedProjects, copyrightYear }: InferGetStaticPropsType<typeof getStaticProps>) {
  const cover = project.media.find(item => item.cover === true)
  return (
    <div>
      <Head>
        <title>{`${project.name} | Testausserveri`}</title>
        <meta property="og:site_name" content="Testausserveri"></meta>
        <meta property="og:title" content={project.name} />
        {cover && <meta property="og:image" content={getProjectMediaUrl(cover.filename)} />}
        <meta property="og:description" content={project.description.short} />
        <meta name="description" content={project.description.short} />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      {/* @ts-ignore */}
      <FadeBackground url={getProjectMediaUrl(cover.filename || "")}>
        <Content wider>
          <Breadcrumbs
            route={[
              { path: "/projects/", name: "Projektit" },
              { path: `/projects/${project.slug}`, name: project.name }
            ]} />

          <Layout>
            <div>
              <Gallery media={project.media.map(m => ({ ...m, url: getProjectMediaUrl(m.filename) }))} />
              <H1 style={{ margin: "1rem 0" }}>{project.name}</H1>
              <P>
                <b
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    display: "block"
                  }}>{project.description.short}</b>
              </P>

              {project.description.full ?
                <MDXRemote {...mdxSerialized.fullDescription} components={mdxComponents}/>
                : null}

              <div style={{ marginTop: "2rem" }}>
                {Object.keys(mdxSerialized.readmes).length > 0 ?
                  Object.keys(mdxSerialized.readmes).map(repository => (
                    <RepositoryReadme key={repository}>
                      <span>
                        <span>
                          README.md-dokumentaatio GitHub-repositoriolle
                        </span>
                        <span>
                          <FaGithub />
                          <a className="link" href={`https://github.com/${repository}`}>{repository}</a>
                        </span>
                      </span>
                      <MDXRemote {...mdxSerialized.readmes[repository]} />
                    </RepositoryReadme>
                  ))
                  : null}
              </div>
            </div>
            <div>
              <H2>Omistajat</H2>
              <AvatarRowExtended>
                <AvatarRow members={project.members.map(m => ({ _id: `ts:${m._id}`, name: m.name }))} />
                <span>{project.members.map(member => member.name).join("; ")}</span>
              </AvatarRowExtended>

              {project.contributors.length > 0 ? <>
                <H2>Kontribuuttorit
                  <Explanation>Projektin GitHub-repositorioihin koodia lisänneet, listattu GitHub-käyttäjät</Explanation>
                </H2>
                <AvatarRow members={project.contributors.map(c => ({ _id: c.id, ...c }))} />
              </> : null}

              {project.links.length > 0 ? <>
                <H2>Linkit</H2>
                <ProjectLinks className="noLinkStyles">
                  {project.links.map(link => (
                    <ProjectLink key={link.url}>
                      <Link href={link.url} >
                        <ProjectLinkTitleContainer>
                          {getProjectLinkIcon(link.type)}
                          <h3>{getProjectLinkTitle(link.type, link.name || "")}</h3>
                        </ProjectLinkTitleContainer>
                        <span>{getProjectLinkUrl(link.type, link.url)}</span>
                      </Link>
                    </ProjectLink>
                  ))}
                </ProjectLinks>
              </> : null}

              {project.tags.length > 0 ? <>
                <H2>Tagit</H2>
                <TagsRow tags={project.tags} />
              </> : null}

              <H2>Samankaltaisia projekteja</H2>
              {suggestedProjects.map((project) => (
                <ProjectRow key={project._id} project={project} compact />
              ))}
            </div>
          </Layout>
        </Content>
      </FadeBackground>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  projectData: DetailedProject,
  mdxSerialized: {
    readmes: Record<string, MDXRemoteSerializeResult>,
    fullDescription: MDXRemoteSerializeResult
  },
  suggestedProjectsData: ShallowProject[],
  copyrightYear: number
}> = async (context) => {
  if (context.params?.slug == undefined) throw "No slug"
  const { slug } = context.params
  if (typeof slug !== "string") throw new Error("Slug must be a string")

  const data = await api.projects.find(slug)

  if ("status" in data) return { notFound: true }

  console.log("Loaded static props for", data.slug)

  const suggestedProjectsData = await api.projects.suggest(data.slug)

  const mdxOptions: SerializeOptions = {
    mdxOptions: {
      format: "md"
    }
  }

  // Serialize markdowns for readmes
  const readmes: Record<string, MDXRemoteSerializeResult> = {}
  for (const repository in data.readmes) {
    readmes[repository] = await serialize(data.readmes[repository], mdxOptions)
  }

  const fullDescription = await serialize(data.description.full)

  return {
    props:
    {
      projectData: data,
      mdxSerialized: {
        readmes,
        fullDescription
      },
      suggestedProjectsData,
      copyrightYear: new Date().getFullYear()
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const data = await api.projects.slugs()
  const paths = data.map(slug => ({ params: { slug } }))
  console.log("Loaded static paths", paths)
  return {
    paths,
    fallback: "blocking"
  };
}
