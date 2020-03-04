"use strict";
(function () {
    const $modal = document.querySelector('.modal-bg');
    const $photoWrapper = document.getElementById('photo');
    const $body = document.querySelector('body');
    const $formComment = document.getElementById('form-comment');

    const getInfoImage = event => {
        const id = event.target.dataset.id;
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then(data => data.json())
            .then(item => {
                const $modalImg = document.querySelector('.modal__img-item');
                const inputHiddenId = document.getElementById('modal-photo-id');
                const $modalComments = document.querySelector('.modal__comment');

                const commentHtml = comment => `
              <div class="modal__comment-item">
                <div class="modal__comment-time">${new Date(comment.date).toLocaleDateString()}</div>
                <div class="modal__comment-text">${comment.text}</div>
              </div>
            `;
                if (item.comments.length !== 0) {
                    $modalComments.innerHTML = item.comments.map(commentHtml).join('')
                } else {
                    $modalComments.textContent = 'Нет комментариев'
                }
                $modalImg.style.backgroundImage = `url(${item.url})`;
                inputHiddenId.value = item.id;
            })
            .then(openModal);
    };

    function openModal() {
        $modal.classList.add('in', 'show');
        $body.style.overflow = 'hidden';
    }

    function closeModal() {
        $body.style.overflow = '';
        $modal.classList.remove('show');
        setTimeout(() => {
            $modal.classList.remove('in')
        }, 300);

        const $modalInput = document.querySelectorAll('.modal__form-input');
        $modalInput.forEach(el => el.classList.remove('error'))

    }

    const listenerModal = event => {
        if (event.target.dataset.close) {
            closeModal()
        }
    };

    fetch('https://boiling-refuge-66454.herokuapp.com/images')
        .then(data => data.json())
        .then(items => {
            items.forEach(el => {
                const $photoItem = document.createElement('div');
                $photoItem.classList.add('photo__item');
                $photoItem.dataset.id = el.id;
                $photoItem.style.backgroundImage = `url(${el.url})`;
                $photoItem.addEventListener('click', getInfoImage);
                $photoWrapper.appendChild($photoItem)
            })
        });

    $modal.addEventListener('click', listenerModal);

    $formComment.onsubmit = function (event) {
        event.preventDefault();
        const elements = event.target.elements;
        const id = document.getElementById("modal-photo-id");
        const errors = [];
        const objValue = {};
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].type === 'text') {
                if (elements[i].value === '') {
                    errors.push(elements[i].name);
                    elements[i].classList.add('error')
                } else {
                    objValue[elements[i].name] = elements[i].value;
                    elements[i].classList.remove('error')
                }
            }

        }
        if (errors.length === 0) {
            // const data = new FormData();
            // data.append( "", JSON.stringify( objValue ) );
            // fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id.value}/comments`,
            //     {
            //         method: "POST",
            //         headers: {'Content-Type':'application/x-www-form-urlencoded'},
            //         body: JSON.stringify()
            //     })
            //     .then(function(res){ return res.json(); })
            //     .then(function(data){ alert( JSON.stringify( data ) ) })
            const request = new XMLHttpRequest();
            const url = `https://boiling-refuge-66454.herokuapp.com/images/${id.value}/comments`;
            const params = `name: ${objValue.name}&comment: ${objValue.comment}`;
            request.open("POST", url, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.addEventListener("readystatechange", () => {

                if(request.readyState === 4 && request.status === 200) {
                    console.log(request.responseText);
                } else {       console.log(request.responseText); }
            });
            request.send(params);
        }

    };
})();