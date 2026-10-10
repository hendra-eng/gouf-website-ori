import { useId } from 'react';

// Segmented vertical emblem follows the user's supplied zafeb reference.
export const ZAFEB_MARK = {
  paths: [
    'M20 4C9 9 4 20 4 33V35C4 45 20 45 20 35Z',
    'M24 2Q32 0 40 2V49C40 60 24 60 24 49Z',
    'M44 4C55 9 60 20 60 33V63C60 74 44 74 44 63Z',
    'M4 61C4 50 20 50 20 61V116C9 111 4 100 4 87Z',
    'M24 74C24 63 40 63 40 74V118Q32 120 24 118Z',
    'M44 88C44 77 60 77 60 88C60 101 55 111 44 116Z',
  ],
  colors: ['#4cbd99','#009d70','#073b31','#073b31','#009d70','#4cbd99'],
};

export function LogoMark({ size = 38, tone = 'color' }: {size?:number; tone?:'color'|'light'|'mono'}) {
 const id=useId().replace(/:/g,'');
 return <svg width={size*.6} height={size} viewBox="0 0 70 128" aria-hidden="true" className="zafeb-mark">
   <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor="white" stopOpacity=".4"/><stop offset=".55" stopColor="white" stopOpacity="0"/><stop offset="1" stopColor="#00291f" stopOpacity=".28"/></linearGradient></defs>
   <g transform="translate(3 5)" fill="#004432">{ZAFEB_MARK.paths.map((p,i)=><path key={i} d={p}/>)}</g>
   {ZAFEB_MARK.paths.map((p,i)=><g key={i}><path d={p} fill={tone==='mono'?'currentColor':tone==='light'&&ZAFEB_MARK.colors[i]==='#073b31'?'#96dec1':ZAFEB_MARK.colors[i]}/><path d={p} fill={`url(#${id})`}/></g>)}
 </svg>;
}

export default function Logo({dark=false}:{dark?:boolean}) {
 return <span className={`zafeb-wordmark ${dark?'is-light':''}`}><LogoMark tone={dark?'light':'color'}/><span>za<strong>feb</strong></span></span>;
}
