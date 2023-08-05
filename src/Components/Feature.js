import "../Styles/index.css";


function Feature(props){
    return(
        
    <div class="feature-item">
          <img
            src={props.src}
            alt="Chat Icon"
            class="feature-icon"
          />
          <h3 class="feature-item-title">{props.title}</h3>
          <p>
          {props.details}
          </p>
        </div>
        
    )
}
export default Feature;