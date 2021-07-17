import { config } from "../utils/config.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Popup from "../components/Popup.js";
import { buyButton, formElementSubscribe, sendButton } from "../utils/constants.js";

const validateBuy = new FormValidator(config, formElementSubscribe);
validateBuy.enableValidation();

const popupBuyComplete = new Popup("#popupBuyComplete");
const popupFeedback = new Popup("#popupFeedback");

const popupWithSubscribeForm = new PopupWithForm({
    popupSelector: "#popupBuy",
    handleFormSubmit: () => {
      popupWithSubscribeForm.loading(true);
      popupBuyComplete.open();
      popupWithSubscribeForm.close();
      setTimeout(() => popupBuyComplete.close(), 1000)
    }
});

const popupWithSendForm = new PopupWithForm({
    popupSelector: "#popupSend",
    handleFormSubmit: () => {
        popupFeedback.open();
        popupWithSendForm.close();
        setTimeout(() => popupFeedback.close(), 1000)
      }
});

popupWithSubscribeForm.setEventListeners();
popupWithSendForm.setEventListeners();
popupBuyComplete.setEventListeners();
popupFeedback.setEventListeners();

buyButton.addEventListener("click", () => {popupWithSubscribeForm.open()})
sendButton.addEventListener("click", () => popupWithSendForm.open())
