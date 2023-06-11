import scss from './AddProductForm.module.scss';
import { useEffect, useState } from 'react';
import dafaultPicture from '../../images/images.png';
import TablePrice from 'components/TablePrice/TablePrice';

const AddProductForm = () => {
    const [state, setState] = useState("");
    const [prices, setPrices] = useState({});

    const fetchData = (data) => {
        setPrices(data);
    };

    useEffect(() => {
        console.log(prices)
    }, [prices])

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
                            placeholder='Введіть назву товару'
                        />
                    </label>
                    <label>Опис
                        <textarea
                            className={scss.label_input}
                            name='password'
                            placeholder='Введіть опис'
                            rows="20"
                            cols="70"
                        />
                    </label>
                </div>
                <TablePrice onClick={fetchData}/>
            </form>

        </div>
    );
  };
  
export default AddProductForm;