import { Page } from 'webex';

async function* paginate<T>(page: Promise<Page<T>>): AsyncIterable<T> {
  const ts = await page;
  for (const room of ts) {
    yield room;
  }
  if (ts.hasNext()) {
    yield* paginate(ts.next());
  }
}

export default paginate;
