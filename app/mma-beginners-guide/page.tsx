import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'MMA Training for Beginners: Where Dads Actually Start | MMA Dads',
  description: 'The real guide to starting MMA training as an adult. Which gym to pick, what to expect in the first month, and how to not embarrass yourself.',
};
export default function MMABeginnerGuidePage() {
  const G = '#E8390E';
  return (
    <div style={{minHeight:'100vh',background:'#0D0D0D',color:'#F5F5F5',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'16px 5vw',borderBottom:'1px solid #1a1a1a',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link href="/" style={{fontWeight:900,fontSize:20,color:'#F5F5F5',textDecoration:'none'}}> MMA Dads</Link>
        <Link href="/blog" style={{color:'rgba(255,255,255,0.5)',textDecoration:'none',fontSize:14}}>← Back</Link>
      </nav>
      <div style={{maxWidth:800,margin:'0 auto',padding:'60px 5vw'}}>
        <div style={{fontSize:11,letterSpacing:'2px',color:G,marginBottom:16}}>BEGINNER GUIDE</div>
        <h1 style={{fontSize:'clamp(28px,4vw,48px)',fontWeight:900,lineHeight:1.1,marginBottom:24}}>MMA Training for Beginners: Where Dads Actually Start</h1>
        <p style={{fontSize:18,color:'rgba(255,255,255,0.6)',lineHeight:1.8,marginBottom:40}}>You are 35, you have two kids, and you want to learn how to fight. This is the honest version of how to start.</p>
        {[
          {h:'Pick One Discipline First',b:'MMA is three disciplines: striking (boxing, Muay Thai, kickboxing), wrestling (takedowns, clinch work), and ground fighting (Brazilian jiu-jitsu, submission wrestling). Trying to learn all three at once is how beginners burn out and quit. Pick the one that interests you most and go deep for six months before adding the others. Most coaches recommend BJJ first because it teaches you to be comfortable in uncomfortable positions and gives you a foundation for everything else.'},
          {h:'Find a Gym, Not a YouTube Channel',b:'You can watch technique videos forever. You will not learn to fight from them. You need to go to a gym, roll with live partners, tap out repeatedly, and come back. The feedback loop of live training is irreplaceable. Find a gym with a dedicated beginners program, an instructor who explains why and not just what, and an atmosphere where beginners are welcomed rather than used as practice dummies.'},
          {h:'What the First Month Actually Looks Like',b:'You will be confused. You will be tapped out by people who look like they should not be tapping you out. A 145-pound woman with three years of BJJ will absolutely destroy you on the mat and that is correct and expected. Your cardio will be terrible. Your technique will be terrible. You will feel like you are getting worse for the first few weeks because you are learning how much you do not know. This is normal. Keep showing up.'},
          {h:'The Gear You Actually Need',b:'To start: comfortable shorts, a rash guard for no-gi grappling, and a mouthguard. That is it. Do not buy gloves, shin guards, or a gi until you have been to three classes and know you are going back. Most gyms have loaner gloves. Spend money on gear after you know you are committed, not before.'},
          {h:'Managing Your Body at 35+',b:'You are not 22. Your joints need more warmup time. Your recovery is slower. The intensity that a 22-year-old can sustain five days a week will injure a 35-year-old on day three. Two to three sessions per week is the right starting point. Stretch more than you think you need to. Ice things that feel tweaky before they become injuries. This is a marathon. Stay in the gym for a year.'},
        ].map(s => (
          <div key={s.h} style={{marginBottom:40,paddingBottom:40,borderBottom:'1px solid #1a1a1a'}}>
            <h2 style={{fontSize:22,fontWeight:800,color:'#F5F5F5',marginBottom:12}}>{s.h}</h2>
            <p style={{color:'rgba(255,255,255,0.65)',lineHeight:1.8,fontSize:16}}>{s.b}</p>
          </div>
        ))}
        <div style={{background:'#111',border:'1px solid ' + G + '44',padding:'32px',textAlign:'center',marginTop:8}}>
          <p style={{fontSize:17,lineHeight:1.7,color:'rgba(255,255,255,0.8)',margin:0}}>The best time to start was five years ago. The second best time is this week. Find a gym near you and go to one class. Just one. That is the only decision you need to make right now.</p>
        </div>
        <div style={{marginTop:48}}><Link href="/blog" style={{color:G,fontWeight:700,textDecoration:'none'}}>← More from MMA Dads</Link></div>
      </div>
    </div>
  );
}
