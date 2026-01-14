const Right = ({ deleteNote, notes }) => {
  return (
    <div className="lg:w-2/3 flex flex-col py-10 gap-10 border-2">
      <h1 className="self-center font-bold text-3xl">
        RECENT NOTES
      </h1>

      <div className="flex flex-wrap justify-center gap-10 h-full overflow-auto">
        {notes.map((note) => (
          <div
            key={note.id}
            className="flex flex-col justify-between h-[330px] w-60 rounded bg-cover bg-center px-4 py-6 text-black
                       bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
          >
            <div className="overflow-hidden">
              <h2 className="text-2xl font-bold truncate">
                {note.title}
              </h2>

              <div className="mt-3 max-h-44 overflow-y-auto break-words border border-gray-800 px-2 py-1 font-medium text-gray-900">
                {note.content}
              </div>
            </div>

            <button
              className="w-2/3 self-center rounded bg-red-600 py-1 font-bold text-white cursor-pointer active:scale-90"
              onClick={() => deleteNote(note.id)}
            >
              Delete Note
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Right
