import '../styles/projectsGrid.css';
import { projects }  from '../data/projects';

function ProjectCardContainer(props) {
    const { data } = props;
    if (data.url) {
        return (
            <a className="item" href={data.url} rel="noopener noreferrer" target="_blank">
                {props.children}
            </a>
        )
    } else {
        return (
            <div className="item">
                {props.children}
            </div>
        )
    }
}

function ProjectCard({data}) {
    return (
        <ProjectCardContainer data={data}>
            {data.video ? 
                <video poster={data.image} autoPlay loop playsInline className="itemBackground">
                    <source src={data.video} type="video/mp4" />
                </video>
            :
                <div className="itemBackground" style={{backgroundImage: `url(${data.image})`}}></div>
            }

            <div className="itemContent">
                <div className="CBig">
                    <h3 className="itemTitle">{data.name}</h3>
                    <span className="itemDescription">{data.desc}</span>
                </div>
            </div>
        </ProjectCardContainer>
    )
}

export function ProjectsGrid() {
    return (
        <>
            <div className="projectsGrid">
                {projects.map(project => <ProjectCard data={project} />)}
            </div>
            <p style={{textAlign: 'center', width: '100%'}}>
                ... ja <a href="https://github.com/testausserveri/meta" target="_blank" rel="noreferrer" onClick={() => {
                    alert('Muiden projektien lista näkyy ainoastaan Testausserverin jäsenille. Liity ensin palvelimellemme ja sitä kautta GitHub-organisaatioomme nähdäksesi tämän listan.');
                }}>25+ muuta projektia</a>!
            </p>
        </>
    );
}