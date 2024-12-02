// frontend/src/components/Sidebar.jsx
import React, { useContext, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaEdit, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ChatContext } from '../context/ChatContext';

const Sidebar = React.memo(({ isOpen, toggleSidebar }) => {
  const { chats, setChats } = useContext(ChatContext);
  const navigate = useNavigate();

  const addChat = useCallback(() => {
    const newChat = {
      id: Date.now().toString(),
      name: `Чат ${chats.length + 1}`,
      messages: [], // Инициализируем пустой массив сообщений
    };
    console.log('Adding new chat:', newChat);
    setChats((prevChats) => [...prevChats, newChat]);
    navigate(`/chat/${newChat.id}`);
  }, [chats.length, navigate, setChats]);

  const deleteChat = useCallback(
    (chatId) => {
      if (window.confirm('Вы уверены, что хотите удалить этот чат?')) {
        console.log(`Deleting chat with ID: ${chatId}`);
        setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));
        navigate('/');
      }
    },
    [navigate, setChats]
  );

  const renameChat = useCallback(
    (chatId, newName) => {
      console.log(`Renaming chat ID ${chatId} to ${newName}`);
      setChats((prevChats) =>
        prevChats.map((chat) => (chat.id === chatId ? { ...chat, name: newName } : chat))
      );
    },
    [setChats]
  );

  return (
    <nav
      className={`bg-dark-800 shadow-lg p-4 flex flex-col transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Toggle Sidebar Button */}
      <button
        onClick={toggleSidebar}
        className="mb-4 text-blue-400 focus:outline-none"
        aria-label={isOpen ? 'Скрыть меню' : 'Показать меню'}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      {isOpen && (
        <>
          <h1 className="text-2xl font-bold text-blue-400 mb-4">KONSPECTO</h1>
          <button
            onClick={addChat}
            className="bg-blue-500 text-gray-50 px-4 py-2 rounded hover:bg-blue-600 transition duration-200 mb-4"
          >
            Добавить чат
          </button>
          <ul className="flex-1 space-y-4 overflow-y-auto">
            {chats.map((chat) => (
              <li key={chat.id} className="flex justify-between items-center">
                <Link
                  to={`/chat/${chat.id}`}
                  className="text-blue-300 hover:text-blue-400 transition duration-200 font-medium flex-1 truncate"
                >
                  {chat.name}
                </Link>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      const newName = prompt('Введите новое название чата:', chat.name);
                      if (newName) {
                        renameChat(chat.id, newName);
                      }
                    }}
                    className="text-blue-300 hover:text-blue-400 focus:outline-none"
                    aria-label="Изменить название чата"
                    title="Изменить название чата"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteChat(chat.id)}
                    className="text-red-500 hover:text-red-600 focus:outline-none"
                    aria-label="Удалить чат"
                    title="Удалить чат"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
});

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;