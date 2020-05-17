import React from 'react';
import ProductAdmin from './ProductAdmin';

const ListProduct = ({product}) => {
	return (
		  <div className="row">
		  {
		  	product.map((good,i)=> {
			  		return(
			  		 	<ProductAdmin
			  		 		key={i} 
			  		 		id={good.id}
			  		 		name={good.name} 
			  		 		url={good.url}
			  		 		price={good.price}
			  		 		discount={good.discount}
			  		 		/>	
			  		);
		  		})
		  }
		  </div>
	);
}


export default ListProduct;