const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const routes = [
  //    Menambah Catatan
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  //    Menampilkan Catatan
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  //    Menampilkan Catatan by ID
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  //    Mengubah Catatan by ID
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  //    Hapus Catatan by ID
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
