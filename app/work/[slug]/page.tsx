import {notFound} from 'next/navigation';
import {projects} from '../../../lib/projects';
import {CaseContent} from './case-content';
export const dynamicParams=false;
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default async function Case({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=projects.find(p=>p.slug===slug);if(!project)notFound();const next=projects[(projects.indexOf(project)+1)%projects.length];return <CaseContent project={project} next={next}/>}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);return p?{title:p.title+' — Андрей Слюта',description:p.description}:{};}

