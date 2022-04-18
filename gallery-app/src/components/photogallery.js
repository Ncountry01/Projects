import React from 'react';
import './Gallery.css';
export default class ImageComponent extends React.Component {
    state = {isOpen: false};

    handleShowDialog = () => {
        this.setState({isOpen: !this.state.isOpen});
        console.log('clicked');
    };


    render() {
        return (

            <>
                  <div className='gallery'>
            
                <figure  className='divcard'>
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption  className='title_name'>
                 beauty
                  </figcaption>
                  </figure>
                  
                

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-syndicated-images.s3.amazonaws.com/62196d573bb0e.png'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption  className='title_name'> beauty</figcaption>
                  </figure>


                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'
                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption  className='title_name'> beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption  className='title_name'> beauty</figcaption>
                  </figure>


                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption  className='title_name'> beauty</figcaption>
                  </figure>


                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>


                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption > beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>

                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>
                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>
                  <figure className='divcard'>
                
                <img 
                className='small'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'

                onClick={this.handleShowDialog}
                alt='planting' />
                <figcaption className='title_name'> beauty</figcaption>
                  </figure>
                  </div>
                

                
                 {this.state.isOpen && (

                <dialog 
                className='dialog'
                style={{position : 'absolute'}}
                open
                onClick={this.handleShowDialog} >

                <figure className='box'>
                <img 
                className='image'
                src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FiT5s8I.akDBY%2Fv1%2F-1x-1.jpg'
                onClick={this.handleShowDialog}
                alt='planting'
                
                 />
                  </figure>
                  </dialog>,

          
                <dialog  
                    className='dialog'
                style={{position : 'absolute'}}
                open
                onClick={this.handleShowDialog}
                
                >
                  <figure className='box'>
                  <img 
                className='image'
                src='https://pocket-syndicated-images.s3.amazonaws.com/62196d573bb0e.png'
                onClick={this.handleShowDialog}
                alt='face'
                
                 />
                  </figure>

                </dialog>
                 )}
            </>
        );
    }
}