import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import noImage from '../images/no-image.svg';

const Image = ({ src, alt, className, userPlaceHolder = false }) => {
    if (src) {
        return (
            <GatsbyImage
                className={className}
                image={getImage(src)}
                alt={alt}
                imgStyle={{ objectFit: 'cover' }}
            />
        );
    } else {
        return (
            userPlaceHolder && (
                <img className={className} src={noImage} alt={alt} />
            )
        );
    }
};

export default Image;
