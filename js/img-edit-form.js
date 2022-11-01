import {isEscapeKey} from './util.js';
import {resetScale} from './change-scale.js';

const body = document.querySelector('body');
const imgEditForm = document.querySelector('.img-upload__form');
const uploadFileInput = imgEditForm.querySelector('#upload-file');
const imgEditor = imgEditForm.querySelector('.img-upload__overlay');
const uploadCloseButton = imgEditForm.querySelector('#upload-cancel');
const commentText = imgEditForm.querySelector('.text__description');


const onImgEditorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImgEditor();
  }
};

function closeImgEditor() {
  imgEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  resetScale();
  document.querySelector('#effect-none').checked = true;
  commentText.value = '';
  uploadFileInput.value = '';
  document.removeEventListener('keydown', onImgEditorEscKeydown);
  uploadCloseButton.removeEventListener('click', closeImgEditor);
}

const openImgEditor = () => {
  imgEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onImgEditorEscKeydown);
  uploadCloseButton.addEventListener('click', closeImgEditor);
};

uploadFileInput.addEventListener('change', openImgEditor);


const validator = new Pristine(imgEditForm, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__description--error',
},
true
);

imgEditForm.addEventListener('submit', (evt) => {
  const isValid = validator.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
