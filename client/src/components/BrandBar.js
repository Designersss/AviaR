import React, {useContext} from 'react';
import {Context} from "../index";
import {Link} from "react-router-dom";

const BrandBar = () => {
    const {avia} = useContext(Context)
    return (
        <div>
            {avia.brand.map(brand =>
                <button key={brand.id}>{brand.name}</button>
            )}
        </div>
    );
};

export default BrandBar;