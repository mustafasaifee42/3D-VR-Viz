import React from 'react';
import Lightbox from 'react-images';
import Gallery from './Gallery.js';

const photos = [
    {src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?w=1024&h=1024', width:1, height:1},
    {src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?w=1024&h=1024', width:1, height:1},
    {src: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?w=1024&h=1024', width:1, height:1},
    {src: 'https://images.unsplash.com/photo-1470854989922-5be2f7456d78?w=1024&h=1024', width:1, height:1},
];
  class Sample extends React.Component{
    constructor(){
      super();
      this.state = { currentImage: 0 }; 
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
}); 
  
}
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
}); 
  
}
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    
}); 
  
}
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    
}); 
  
}

    render(){
      return(
<div>
        <Gallery images={photos} onClick={this.openLightbox}/>   
        <Lightbox images={photos} 
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
</div>
      )
  }
}

export default Sample