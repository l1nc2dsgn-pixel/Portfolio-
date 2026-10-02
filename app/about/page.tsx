"use client";
import {useEffect} from 'react';
export default function About(){useEffect(()=>{location.replace((process.env.NEXT_PUBLIC_BASE_PATH||'')+'/#about')},[]);return <p><a href={(process.env.NEXT_PUBLIC_BASE_PATH||'')+'/#about'}>Обо мне →</a></p>}
