const Background = () => {

const particles=[...Array(80)];

return(

<div className="fixed inset-0 -z-10">

<div className="aurora">

<span></span>
<span></span>
<span></span>

</div>

{
particles.map((_,i)=>(
<div
key={i}
className="particle"
style={{
left:`${Math.random()*100}%`,
animationDuration:`${10+Math.random()*20}s`,
animationDelay:`${Math.random()*10}s`
}}
></div>
))
}

</div>

)

}

export default Background;