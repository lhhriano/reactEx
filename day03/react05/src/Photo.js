const Photo = ({item})=>{
    return (
    <div class="w3-quarter">
        <img src={item.img} alt="Sandwich" style={{width:100}}/>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
    </div>
   
);}

export default Photo;

