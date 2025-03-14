import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config
const Matches = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    matchdata: column.json()
  }
}) 

const Teams = defineTable({
  columns: {
    name: column.text(),
    group: column.number(),
    points: column.number()
  }
})

export default defineDb({
  tables: {Matches, Teams}
});
