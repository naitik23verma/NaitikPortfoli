import GradientText from './GradientText'
  import "./Name.css"
export default function Name(){
    return(
        <div className="Name">
            <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  NAITIK VERMA
</GradientText>
        </div>
    )

}