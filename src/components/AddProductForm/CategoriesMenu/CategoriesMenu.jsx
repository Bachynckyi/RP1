



const CategoriesMenu = () => {


    return (
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
                    id="Emali&gruntovki3v1" 
                    name="category" 
                    value="Emali&gruntovki3v1" 
                    onChange={handleChangeDetails}
                    required
                    />
                <label htmlFor="Emali&gruntovki3v1">Грунт&Емаль 3в1</label>
            </div>
    );
  };
  
export default CategoriesMenu;


