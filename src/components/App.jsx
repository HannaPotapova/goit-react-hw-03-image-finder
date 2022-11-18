import React, { Component } from "react";
import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>open modal</button>
        {showModal &&
          (<Modal onClose={this.toggleModal}>
          <h1>modal image</h1>
          <button type="button" onClick={this.toggleModal}>close modal</button>
          </Modal>)}
      </>     
    )
  }
}

export default App;

// 30180728-0211963a138fccfc4d4cb75fc
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// page = 1
// per_page = 12
// при поиске скидывать page = 1
// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна