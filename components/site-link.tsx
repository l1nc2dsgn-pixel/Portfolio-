import type {ComponentProps} from 'react';
export default function SiteLink({href,...props}:ComponentProps<'a'>){const base=process.env.NEXT_PUBLIC_BASE_PATH||'';const path=href?.startsWith('/')&&!href.startsWith('//')?base+href:href;return <a {...props} href={path}/>}
