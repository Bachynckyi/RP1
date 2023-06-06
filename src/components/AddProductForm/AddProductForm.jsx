import scss from './AddProductForm.module.scss';
import ColorPicker from '../ColorPicker/ColorPicker';

const AddProductForm = () => {
    return (
        <div>
            <form>
                <label className={scss.label_input}>Фотографія товару
                    <input
                        type='file'
                        accept="image/png, image/jpeg"
                    />
                </label>
                <label className={scss.label_input}>Назва товару
                    <input
                        className={scss.input}
                        name='email'
                        required
                        placeholder='Введіть назву товару'
                    />
                </label>
                <label className={scss.label_input}>Ціна
                    <input
                        className={scss.input}
                        name='password'
                        required
                        placeholder='Введіть ціну'
                    />
                </label>
                <label>Опис
                    <textarea
                        className={scss.label_input}
                        name='password'
                        required
                        placeholder='Введіть опис'
                        rows="10"
                    />
                </label>
                <ColorPicker/>
                
                
            </form>
        </div>
    );
  };
  
export default AddProductForm;