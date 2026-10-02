import type {ComponentProps} from 'react';
export function ZoomImage(props:ComponentProps<'img'>){return <a className="asset-zoom" href={typeof props.src==='string'?props.src:undefined} target="_blank" rel="noreferrer" aria-label={props.alt}><img {...props}/></a>}
