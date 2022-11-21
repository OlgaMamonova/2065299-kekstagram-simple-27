import { renderThumbnails } from './render-thumbnails.js';
import { showGetDataErrorModal } from './util.js';
import { setImgEditFormSubmit, closeImgEditForm } from './img-edit-form.js';
import { updateSlider } from'./add-effect.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';
import { getData } from './api.js';
import { getPreview} from './preview.js';

getData(renderThumbnails, showGetDataErrorModal);
updateSlider();
getPreview();

const onSendSuccessData = () => {
  closeImgEditForm();
  showSuccessMessage();
};
setImgEditFormSubmit(onSendSuccessData, showErrorMessage);
