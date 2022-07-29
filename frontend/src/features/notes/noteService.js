import axios from 'axios';

const API_URL = '/api/tickets/';

// Create new note
const createNote = async (noteData, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + ticketId + '/notes',
    { text: noteData },
    config
  );

  return response.data;
};

// Get ticket notes
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + ticketId + '/notes', config);

  return response.data;
};

// Get note from ticket
const getNote = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + ticketId, config);

  return response.data;
};

const noteService = {
  createNote,
  getNotes,
  getNote,
};

export default noteService;
