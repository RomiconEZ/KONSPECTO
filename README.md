# 🎓 KONSPECTO - LLM Агент для работы с конспектами

## 📋 Описание проекта

KONSPECTO - это интеллектуальный агент на базе локальной LLM модели, предоставляющий следующие возможности:

🔍 **Поиск по конспектам**

- Семантический поиск по базе конспектов
- Генерация структурированных ответов на основе найденной информации
- Возможность просмотра исходных документов

🎥 **Работа с видео**

- Извлечение ключевых кадров из YouTube видео
- Создание DOCX документов с изображениями
- Фильтрация похожих кадров

🎤 **Голосовой ввод**

- Транскрипция голосовых сообщений с помощью Whisper
- Поддержка русского языка
- Возможность комбинировать голосовой и текстовый ввод

## 🛠 Технологический стек

### Frontend

- ⚛️ React + Vite
- 🎨 TailwindCSS
- 🔄 React Router
- ✨ React Icons

### Backend

- 🚀 FastAPI
- 🤖 LangChain
- 🔍 LlamaIndex
- 📝 Whisper
- 🎥 OpenCV
- 🗄️ Redis Stack

## 📦 Установка

### Предварительные требования

- Docker и Docker Compose
- Node.js 18+
- Python 3.11+
- Poetry
- pre-commit

### 1️⃣ Клонирование репозитория

```bash
git clone https://github.com/your-username/KONSPECTO
cd KONSPECTO
```

### 2️⃣ Настройка конфигурации

Создайте файлы конфигурации в директории `backend/app/config/`:

**.env**

```env
FOLDER_ID=your_google_drive_folder_id
GOOGLE_SERVICE_ACCOUNT_KEY_PATH=config/service_account_key.json
TRANSCRIPTION_MODEL=whisper
LLM_STUDIO_BASE_URL=http://localhost:1234/v1
```

**service_account_key.json**

```json
{
  // Ваши учетные данные сервисного аккаунта Google
  // Получите их в Google Cloud Console
}
```

### 3️⃣ Установка зависимостей

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd backend
poetry install
```

### 4️⃣ Настройка pre-commit хуков

```bash
pre-commit install --install-hooks
pre-commit run --all-files
```

### 5️⃣ Запуск тестов

Frontend тесты:

```bash
cd frontend
npm run test
```

Backend тесты:

```bash
cd backend
bash tests/run_tests.sh
```

### 6️⃣ Запуск приложения

```bash
docker compose up --build
```

Приложение будет доступно по адресам:

- Frontend: http://localhost:80
- Backend API: http://localhost:8000
- Redis Stack: http://localhost:8001

## 🔄 Процесс работы

1. **Поиск информации**

   - Пользователь отправляет запрос через UI
   - Агент анализирует запрос и определяет необходимые инструменты
   - Выполняется поиск по базе знаний и генерация ответа

2. **Обработка видео**

   - Загрузка видео с YouTube
   - Извлечение кадров каждые 5 секунд
   - Фильтрация похожих изображений
   - Создание DOCX документа

3. **Голосовой ввод**
   - Запись аудио через браузер
   - Транскрипция с помощью Whisper
   - Добавление текста к текущему запросу

## 📜 Лицензия

Apache License

## ⭐️ Поддержка проекта

Если вам нравится проект, поставьте звездочку на GitHub!
