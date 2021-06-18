import React, { useState } from 'react';
import './styles.css';

const App = () => {
	const [ selectedImages, setSelectedImages ] = useState([]);

	const uploadedImage = (input) => {
		if (input.target.files) {
			const imagesArray = Array.from(input.target.files).map((image) => URL.createObjectURL(image));

			setSelectedImages((existingImages) => existingImages.concat(imagesArray));
			
		}
	};

	const renderImages = (images) => {
		return images.map((image) => {
			return <img src={image} alt="" key={image} />;
		});
	};

	return (
		<div className="app">
			<div className="heading">React Upload And View Multiple Images</div>
			<div>
				<input type="file" id="file" multiple onChange={uploadedImage} />
				<div className="label-holder">
					<label htmlFor="file" className="label">
						<i className="material-icons">add_a_photo</i>
					</label>
				</div>
				<div className="result">{renderImages(selectedImages)}</div>
			</div>
		</div>
	);
};

export default App;
