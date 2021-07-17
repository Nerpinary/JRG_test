import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".popup__form");
        this._submitButton = this._form.querySelector(".popup__submit")
      }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._handleFormSubmit();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    loading(isLoading) {
        if (isLoading) {
          this._submitButton.textContent = 'Отправляем...'
        } else {
          this._submitButton.textContent = 'Подписаться'
        }
      }
}