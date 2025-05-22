// Массив с путями к изображениям
        const images = [
            '../images/1.jpg',
            '../images/2.jpg',
            '../images/3.jpg'
        ];
        
        // Элементы DOM
        const currentImage = document.getElementById('current-image');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const currentIndexEl = document.getElementById('current-index');
        const totalImagesEl = document.getElementById('total-images');
        const thumbnailsContainer = document.getElementById('thumbnails');
        
        // Текущий индекс изображения
        let currentIndex = 0;
        
        // Инициализация галереи
        function initGallery() {
            totalImagesEl.textContent = images.length;
            
            // Загрузка первого изображения
            showImage(currentIndex);
            
            // Создание миниатюр
            images.forEach((image, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = image;
                thumbnail.className = 'thumbnail';
                thumbnail.alt = `Миниатюра ${index + 1}`;
                
                if (index === currentIndex) {
                    thumbnail.classList.add('active');
                }
                
                thumbnail.addEventListener('click', () => {
                    showImage(index);
                });
                
                thumbnailsContainer.appendChild(thumbnail);
            });
            
            // Обновление состояния кнопок
            updateButtons();
        }
        
        // Показать изображение по индексу
        function showImage(index) {
            currentIndex = index;
            currentImage.src = images[index];
            currentImage.alt = `Изображение ${index + 1}`;
            currentIndexEl.textContent = index + 1;
            
            // Обновление активной миниатюры
            document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
                if (i === index) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                }
            });
            
            // Обновление состояния кнопок
            updateButtons();
        }
        
        // Обновить состояние кнопок навигации
        function updateButtons() {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === images.length - 1;
        }
        
        // Обработчики событий для кнопок
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                showImage(currentIndex - 1);
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < images.length - 1) {
                showImage(currentIndex + 1);
            }
        });
        
        // Инициализация галереи при загрузке страницы
        window.addEventListener('DOMContentLoaded', initGallery);