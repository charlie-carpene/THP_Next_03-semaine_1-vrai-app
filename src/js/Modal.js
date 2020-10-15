import { Button } from './Button';

const Modal  = (data) => {
  console.log(data);
  const modalContainer = document.createElement('div');
  const modalDiv = document.createElement('div');
  const modalContent = document.createElement('div');
  modalContainer.setAttribute("id", "modal");
  modalContainer.setAttribute("class", "modal fade bd-example-modal-lg");
  modalContainer.setAttribute("tabindex", "-1");
  modalContainer.setAttribute("role", "dialog");
  modalContainer.setAttribute("aria-labelledby", "myLargeModalLabel");
  modalContainer.setAttribute("aria-hidden", "true");

  modalDiv.setAttribute("class", "modal-dialog modal-lg");
  modalContainer.appendChild(modalDiv);

  modalContent.setAttribute("class", "modal-content");
  modalDiv.appendChild(modalContent);

  document.body.appendChild(modalContainer);

  function hideModal() {
    $('#modal').modal('hide');
  }

  $('#modal').modal('show');

  modalContent.innerHTML = "";
  modalContent.innerHTML = `
    <div class="p-4 d-flex flex-column align-items-center">
      <h1>${data.name}</h1>
      ${Button("Close", 'btn btn-danger')}
    </div>
  `;

  let a = modalContent.querySelector("a");
  a.addEventListener("click", handleClick);

  function handleClick(e) {
    e.preventDefault();
    hideModal();
  };
};

export { Modal };
