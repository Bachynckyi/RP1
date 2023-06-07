import scss from './AddProductForm.module.scss';
import ColorPicker from '../ColorPicker/ColorPicker';
import { useState } from 'react';
import dafaultPicture from '../../images/images.png';

const AddProductForm = () => {
    const [state, setState] = useState("");
    return (
        <div className={scss.container}>
            <form className={scss.product_form}>
                <div>
                    {state !== "" ? 
                    (<img 
                        src={URL.createObjectURL(state)} 
                        alt="productPhoto" 
                        className={scss.product_picture}
                        />)
                    :
                    (<img 
                        src={dafaultPicture} 
                        alt="defaultPicture"
                        className={scss.product_picture}
                        />)}                      
                    <p className={scss.title_picture}>Фотографія товару</p>
                        <input
                            type='file'
                            accept="image/png, image/jpeg"
                            onChange={e => setState(e.target.files[0])}
                        />
                </div> 
                <div> 
                    <label className={scss.label_input}>Назва товару
                        <input
                            className={scss.input}
                            name='email'
                            required
                            placeholder='Введіть назву товару'
                        />
                    </label>
                    <label>Опис
                        <textarea
                            className={scss.label_input}
                            name='password'
                            required
                            placeholder='Введіть опис'
                            rows="20"
                            cols="70"
                        />
                    </label>
                </div>
                <ColorPicker/>
                
            </form>
        </div>
    );
  };
  
export default AddProductForm;