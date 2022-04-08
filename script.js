const modal = {
  open() {
    //Abrir modal
    //Adicionar a class active ao modal
    document.querySelector('.modal-overlay').classList.add('active')
  },
  close() {
    //fechar modal
    //Remover a class active ao modal
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}
