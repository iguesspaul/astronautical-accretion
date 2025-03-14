import { db, Matches, Teams } from 'astro:db';

// https://astro.build/db/seed
export default async function() {
	// TODO
	/*await db.insert(Matches).values([
		
		{id: 0, matchdata: {
			"hometeam": {
				"name": "AISK B",
				"goals": 2,
				"people": [["Paul van Tilburg", "Luis Valdez"],["Luis Valdez", "Penalty"]] // If no assist, put N/A
			},
			"awayteam": {
				"name": "HILLEL A",
				"goals": 0,
				"people" :[["Niggas", "big fat niggas"]]
			}
		}}
	])*/

	await db.insert(Teams).values([
		{"name": "AISK A", "group": 2, "points": 0},
		{"name": "HILLEL B", "group": 2, "points": 0},
		{"name": "CIS", "group": 2, "points": 0},
		{"name": "GIA", "group": 2, "points": 0},
		{"name": "AISK B", "group": 1, "points": 0},
		{"name": "HILLEL A", "group": 1, "points": 0},
		{"name": "LYFORD CAY", "group": 1, "points": 0},
		{"name": "CEDAR", "group": 1, "points": 0}
	])
}
