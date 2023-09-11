import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {
  findNotes,
  getAllNotes,
  newNote,
  removeAllNotes,
  removeNote,
} from './notes.js';

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'Create a new note',
    yargs => {
      return yargs.positional('note', {
        type: 'string',
        description: 'the content of the note to create',
      });
    },
    async argv => {
      const tags = argv.tags ? argv.tags.split(',') : [];
      const note = await newNote(argv.note, tags);
      console.log('New note!: ', note);
    }
  )
  .option('tags', {
    alias: '-t',
    type: 'string',
    description: 'Tags to add to the note',
  })
  .command(
    'all',
    'Get all notes',
    () => {},
    async () => {
      const notes = await getAllNotes();
      console.table(notes);
    }
  )
  .command(
    'find <filter>',
    'Get matching notes',
    yargs => {
      return yargs.positional('filter', {
        type: 'string',
        describe:
          'he search term to filter notes by, will apply to note.content',
      });
    },
    async argv => {
      const matches = await findNotes(argv.filter);
      console.table(matches);
    }
  )
  .command(
    'remove <id>',
    'Remove a note by id',
    yargs => {
      return yargs.positional('id', {
        type: 'number',
        description: 'The id of the note you want to remove',
      });
    },
    async argv => {
      const id = await removeNote(argv.id);
      console.log(id);
    }
  )
  .command(
    'clean',
    'Remove all notes',
    () => {},
    async () => {
      await removeAllNotes();
      console.log('All notes removed!');
    }
  )
  .demandCommand(1)
  .parse();
