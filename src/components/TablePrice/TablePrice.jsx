import { useState, useCallback, useEffect } from 'react';
import scss from './TablePrice.module.scss';

const initialState = {
    yellow: {
        "small": "",
        "middle": "",
        "big": "",
    },
    white: {
        "small": "",
        "middle": "",
        "big": "",
    },
    black: {
        "small": "",
        "middle": "",
        "big": "",
    },
    red: {
        "small": "",
        "middle": "",
        "big": "",
    },    
};

const TablePrice= ({onClick}) => {
    const [price, setPrice] = useState(initialState);
    const { small, middle, big } = price;

    const handleChange = useCallback(({ target }) => {
        const {name, value, id} = target;
        setPrice(prevState => {
          return {...prevState, [id]: {...prevState[id], [name]: value}};
        });
    },
      [setPrice]
    );
    useEffect(() => {
        onClick({price})
        // eslint-disable-next-line
    }, [price])
    

    return (
        <div>
            <table>
                <tbody>
                    <tr align="center">
                        <td className={scss.table}>Колір/Фасовка</td>
                        <td className={scss.table}>0,9 кг</td>
                        <td className={scss.table}>2,8 кг</td>
                        <td className={scss.table}>5 кг</td>
                    </tr>
                    <tr>
                        <td className={scss.table} style={{backgroundColor: "#FFFF00"}}></td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="small"
                                value={small}
                                id='yellow'
                            />
                        </td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="middle"
                                value={middle}
                                id='yellow'
                            />
                        </td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="big"
                                value={big}
                                id='yellow'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={scss.table} style={{backgroundColor: "#FFFFFF"}}></td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="small"
                                value={small}
                                id='white'
                            />
                        </td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="middle"
                                value={middle}
                                id='white'
                            />
                        </td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="big"
                                value={big}
                                id='white'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={scss.table} style={{backgroundColor: "#000000"}}></td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="small"
                                value={small}
                                id='black'
                            />
                        </td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="middle"
                                value={middle}
                                id='black'
                            />
                        </td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="big"
                                value={big}
                                id='black'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={scss.table} style={{backgroundColor: "#FF0000"}}></td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="small"
                                value={small}
                                id='red'
                            />
                        </td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="middle"
                                value={middle}
                                id='red'
                            />
                        </td>
                        <td className={scss.table}>
                            <input
                                onChange={handleChange}
                                name="big"
                                value={big}
                                id='red'
                            />
                        </td>   
                    </tr>
                </tbody>
            </table>
    </div>     
    );
  };
  
export default TablePrice;