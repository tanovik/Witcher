import './Banner.css';
import witcherBanner from "../../images/Rectangle51.png"


export default function Banner(props) {
    return (
        <div className='banner'>

                 <div className='banner_text_group'>
                 <div className='banner_text'>
            <div>
        <h1>Сериал Ведьмак</h1>
            </div>
            <div>
            <p>
                Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.
                </p>
            </div>
            <div >
                <button >Смотреть сериал</button>
            </div>
            </div>
            
            </div>
            
            <div className='img_wrapper'>
               
               <img src={witcherBanner}  alt='Сериал Ведьмак' />
               
                 </div>
                
    
    </div>
    );
}