/**
 * Standalone migration runner — no esbuild / drizzle-kit required.
 * Reads SQL files from the ./drizzle folder and applies them in order.
 * Tracks applied migrations in a `__migrations` table.
 */
import { createConnection } from 'mysql2/promise';
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const drizzleDir = join(__dirname, '../drizzle');

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error('ERROR: DATABASE_URL is not set');
  process.exit(1);
}

async function migrate() {
  console.log('[migrate] Connecting to database…');
  const conn = await createConnection(dbUrl);

  // Create migrations tracking table
  await conn.execute(`
    CREATE TABLE IF NOT EXISTS \`__migrations\` (
      \`id\` INT AUTO_INCREMENT PRIMARY KEY,
      \`name\` VARCHAR(255) NOT NULL UNIQUE,
      \`applied_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Get already-applied migrations
  const [applied] = await conn.execute('SELECT name FROM `__migrations`');
  const appliedSet = new Set(applied.map(r => r.name));

  // Find SQL migration files, sorted
  const files = readdirSync(drizzleDir)
    .filter(f => f.endsWith('.sql'))
    .sort();

  let ran = 0;
  for (const file of files) {
    if (appliedSet.has(file)) {
      console.log(`[migrate] Already applied: ${file}`);
      continue;
    }
    const sql = readFileSync(join(drizzleDir, file), 'utf8').trim();
    if (!sql) continue;

    console.log(`[migrate] Applying: ${file}`);
    // Execute each statement separately (split on semicolons)
    const statements = sql.split(';').map(s => s.trim()).filter(Boolean);
    for (const stmt of statements) {
      await conn.execute(stmt);
    }
    await conn.execute('INSERT INTO `__migrations` (name) VALUES (?)', [file]);
    ran++;
  }

  if (ran === 0) {
    console.log('[migrate] All migrations already applied — nothing to do.');
  } else {
    console.log(`[migrate] Applied ${ran} migration(s) successfully.`);
  }

  await conn.end();
}

migrate().catch(err => {
  console.error('[migrate] FAILED:', err.message);
  process.exit(1);
});
