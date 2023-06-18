import scss from './AddProductForm.module.scss';
import { useEffect, useState, useCallback } from 'react';
import dafaultPicture from '../../images/images.png';
import TablePrice from 'components/TablePrice/TablePrice';

const initialState = {
    title: "",
    description: "",
    category: "",
  };

const AddProductForm = () => {
    const [photo, setPhoto] = useState("");
    const [prices, setPrices] = useState({});
    const [details, setDetails] = useState({...initialState});
    const [card, setCard] = useState({});
    const { title, description } = details;

    const fetchData = (data) => {
        setPrices(data.price);
    };

    const onSubmit = event => {
        event.preventDefault();
        setCard({photo, prices, details})
    };

    const handleChangeDetails = useCallback(({ target }) => {
        const {name, value } = target;
        setDetails(prevState => {
          return {...prevState, [name]: value};
        });
    },
      [setDetails]
    );

    useEffect(() => {
        console.log(card)
    });

    return (
        <div className={scss.container}>
            <form className={scss.product_form} onSubmit={onSubmit}>
                <div>
                    {photo !== "" ? 
                    (<img 
                        src={URL.createObjectURL(photo)} 
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
                            onChange={e => setPhoto(e.target.files[0])}
                        />
                </div> 
                <div> 
                    <label className={scss.label_input}>Назва товару
                        <input
                            className={scss.input}
                            name='title'
                            placeholder='Введіть назву товару'
                            required
                            value={title}
                            onChange={handleChangeDetails}
                        />
                    </label>
                    <label>Опис
                        <textarea
                            className={scss.label_input}
                            name='description'
                            placeholder='Введіть опис'
                            rows="20"
                            cols="70"
                            required
                            value={description}
                            onChange={handleChangeDetails}
                        />
                    </label>
                </div>
                <TablePrice onClick={fetchData}/> 
                <button type='submit'>Добавить товар</button>
                <div>
                    <div>
                        <input 
                            type="radio" 
                            id="Emali" 
                            name="category" 
                            value="Emali" 
                            onChange={handleChangeDetails}
                            required
                            />
                        <label htmlFor="Emali">Емалі</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="Gruntovki" 
                            name="category" 
                            value="Gruntovki" 
                            onChange={handleChangeDetails}
                            required
                            />
                        <label htmlFor="Gruntovki">Грунт</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="Emali-gruntovki-3v1" 
                            name="category" 
                            value="Emali-gruntovki-3v1" 
                            onChange={handleChangeDetails}
                            required
                            />
                        <label htmlFor="Emali-gruntovki-3v1">Грунт&Емаль 3в1</label>
                    </div>
                </div>   
            </form>

        </div>
    );
  };
  
export default AddProductForm;